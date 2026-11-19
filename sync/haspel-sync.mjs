#!/usr/bin/env node
/**
 * Haspel-sync voor de Haspelconfigurator (hamerdirect.nl)
 * - Leest alle haspelcategorieën van hamerdirect.nl
 * - Werkt naam, prijs en voorraad bij van bekende artikelen
 * - Classificeert nieuwe artikelen automatisch (toepassing, lengte, diameter, druk, materiaal, ...)
 * - Laat artikelen die niet meer in de shop staan weg
 * Uitvoer: haspels.json (voor data-bron) en optioneel een haspelconfigurator.js met ingebouwde data.
 *
 * Gebruik (Node 18+ , geen dependencies):
 *   node haspel-sync.mjs --out ../data/haspels.json [--js ../dist/haspelconfigurator.js] [--basis basis.txt]
 * Cron (dagelijks 03:17):
 *   17 3 * * *  cd /pad/naar/sync && node haspel-sync.mjs --out ../data/haspels.json --js ../dist/haspelconfigurator.js >> sync.log 2>&1
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const BASE = 'https://www.hamerdirect.nl';
const CATS = [
  '/haspels/', '/haspels/kabelhaspels/', '/haspels/lucht-waterhaspels/', '/haspels/aardingshaspels/',
  '/haspels/veiligheidslinthaspel/', '/haspels/accessoires/', '/water-en-luchtapparatuur/haspels/',
  '/brandstof-apparatuur/haspels/', '/olie-en-koelvloeistofapparatuur/haspel/', '/adblue-apparatuur/adblue-haspels/',
  '/vet-apparatuur/vethaspels/'
];
const EXCLUDE = /veerbalancer|piusi|patron-18w|\/outlet\/|tankdoppen|doorstroommeters|elektrische-brandstofpomp/i;
const CONCURRENCY = 3, DELAY_MS = 300, MAX_PAGES = 40;
const MIN_ITEMS = 100; // veiligheidsgrens: bij minder resultaten wordt niets overschreven

const args = Object.fromEntries(process.argv.slice(2).reduce((a, v, i, arr) => {
  if (v.startsWith('--')) a.push([v.slice(2), arr[i + 1] && !arr[i + 1].startsWith('--') ? arr[i + 1] : true]); return a; }, []));
const OUT = resolve(args.out || resolve(HERE, '../data/haspels.json'));
const JS_OUT = args.js ? resolve(args.js) : null;
const BASIS = resolve(args.basis || resolve(HERE, 'basis.txt'));
const TEMPLATE = resolve(args.template || resolve(HERE, '../widget/haspelconfigurator.js'));

const sleep = ms => new Promise(r => setTimeout(r, ms));
async function get(url, tries = 3) {
  for (let t = 1; t <= tries; t++) {
    try {
      const r = await fetch(url.startsWith('http') ? url : BASE + encodeURI(decodeURI(url)), {
        headers: { 'user-agent': 'HaspelconfiguratorSync/1.0 (+contentbeheer hamerdirect.nl)', 'accept-language': 'nl-NL' } });
      if (r.ok) return await r.text();
      if (r.status === 404) return null;
    } catch (e) { if (t === tries) throw e; }
    await sleep(1000 * t);
  }
  return null;
}
async function pool(items, fn) {
  const out = []; let i = 0;
  await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
    while (i < items.length) { const ix = i++; out[ix] = await fn(items[ix]); await sleep(DELAY_MS); }
  }));
  return out;
}

/* ---------- HTML-parsing ---------- */
const decode = s => s.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'")
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n)).replace(/\s+/g, ' ').trim();
function listingLinks(html) {
  const main = html.slice(Math.max(0, html.indexOf('<main')));
  const set = new Set();
  for (const m of main.matchAll(/href="([^"?#]+-(\d{6,}))"/g)) set.add(m[1]);
  return [...set];
}
function parseProduct(html, url) {
  let ld = null;
  for (const m of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try { const j = JSON.parse(m[1]); if (j && j['@type'] === 'Product') { ld = j; break; } } catch {}
  }
  if (!ld) return null;
  const h1 = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1];
  const spec = {};
  for (const dl of html.matchAll(/<dl class="Details_table-list">([\s\S]*?)<\/dl>/g)) {
    for (const m of dl[1].matchAll(/<dt[^>]*>([\s\S]*?)<\/dt>\s*<dd[^>]*>([\s\S]*?)<\/dd>/g)) {
      const spans = [...m[2].matchAll(/<span[^>]*>([\s\S]*?)<\/span>/g)].map(s => decode(s[1])).filter(Boolean);
      spec[decode(m[1])] = spans.length ? spans.join(', ') : decode(m[2]);
    }
  }
  return { sku: String(ld.sku || ld.productID), name: decode(h1 || ld.name || ''), price: +(ld.offers?.price || 0),
    stock: /InStock/i.test(ld.offers?.availability || ''), url, spec,
    img: decodeURI(String((Array.isArray(ld.image) ? ld.image[0] : ld.image) || '').replace(/^.*\/product\/image\//, '')) };
}

/* ---------- classificatie (zelfde regels als de configurator) ---------- */
const num = s => { if (!s) return null; const m = String(s).replace(',', '.').match(/(\d+(?:\.\d+)?)(?:\s*\+\s*(\d+(?:\.\d+)?))?/); return m ? +(+m[1] + (m[2] ? +m[2] : 0)).toFixed(1) : null; };
const ACC_RE = /beugel|swivel|slangset|slangenset|slangstop|kabelstop|geleiderol|geleiderrol|scharnierpen|deksel|fixeer|draaiplateau|kabelarm|gasket|spare part|veer \+|blokkeerpal|aardingsklem|haakse aansluiting|slow ?motion|slanggeleider|waterpistool|collector|looplamp los/i;
const DIA = { '1/4': '¼', '3/8': '⅜', '1/2': '½', '3/4': '¾' };
function matCode(m, n) {
  m = (m || '').toLowerCase(); const abs = /abs|kunststof|polyprop/.test(m), rvs = /rvs/.test(m), st = /staal/.test(m), al = /alu/.test(m);
  if (abs && rvs) return 'ar'; if (abs && st) return 'as'; if (rvs) return 'r'; if (al) return 'al'; if (st) return 's'; if (abs) return 'k';
  n = n.toLowerCase(); return /rvs/.test(n) ? 'r' : /abs|kunststof/.test(n) ? 'k' : /staal|gelakt/.test(n) ? 's' : /alu/.test(n) ? 'al' : '';
}
function classify(p, cats) {
  const x = p.spec, n = p.name, med = [x.Medium, x['Geschikt voor'], x['Ook geschikt voor']].filter(Boolean).join(',').toLowerCase();
  const c = cats.join(',');
  let t;
  if (ACC_RE.test(n) && !/haspel.*(meter|mtr|zonder slang)/i.test(n.replace(/slangset|slangenset/i, ''))) t = 'acc';
  else if (c.includes('/accessoires/')) t = 'acc';
  else if (c.includes('veiligheidslint') || /veiligheidslint/i.test(n)) t = 'lint';
  else if (/looplamp/i.test(n)) t = 'lamp';
  else if (c.includes('aardingshaspels') || /aarding/i.test(n)) t = 'aard';
  else if (c.includes('kabelhaspels') || /kabelhaspel/i.test(n)) t = 'kabel';
  else if (c.includes('vethaspels') || (/vet/.test(med) && !/olie/.test(med))) t = 'vet';
  else if (/adblue/i.test(n + med)) t = 'adblue';
  else if (/lashaspel|gashaspel/i.test(n)) t = 'gas';
  else if (/vacu/i.test(n)) t = 'vac';
  else if (/olie|oil/i.test(n) || (/olie|antivries|anti-vries|koelvloeistof/.test(med) && !/water/.test(med)) || c.includes('olie-en-koelvloeistof')) t = 'olie';
  else if (/diesel|brandstof/i.test(n) || (/diesel/.test(med) && !/lucht|water/.test(med))) t = 'diesel';
  else t = 'lw';
  let m = '';
  if (/lucht/.test(med) || /lucht|air|l\/w/i.test(n)) m += 'L';
  if (/water/.test(med) || /water|l\/w/i.test(n)) m += 'W';
  if (/diesel/.test(med) || /diesel|\/d\b/i.test(n)) m += 'D';
  if (t === 'olie') m = 'O';
  if (t === 'lw' && !m) m = 'W';
  let bar = num(x['Maximale werkdruk'] || x['Druk']); if (!bar) { const b = n.match(/(\d{2,3})\s*b(ar)?\b/i); bar = b ? +b[1] : null; }
  const lenRaw = x['Lengte slang'] || x['Kabellengte'] || x['Lengte'];
  let len = /geen/i.test(lenRaw || '') || /zonder slang|zndr|znder|zonder sl/i.test(n) ? 0 : num(lenRaw);
  if (len == null) { const mm = n.match(/(\d+(?:[.,]\d+)?)\s*(?:\+\s*(\d+(?:[.,]\d+)?))?\s*(?:m\b|meter|mtr)/i); if (mm) len = +(parseFloat(mm[1].replace(',', '.')) + (mm[2] ? parseFloat(mm[2].replace(',', '.')) : 0)).toFixed(1); }
  let dia = (x['Diameter slang'] || '').replace(/["″]/g, '').trim(); dia = DIA[dia] || dia;
  if (!dia && t !== 'kabel') { const d = n.match(/\b(1\/4|3\/8|1\/2|3\/4|5\/16|[¼⅜½¾])\s*(?:"|″|inch)?/); if (d) dia = DIA[d[1]] || d[1]; }
  const bedRaw = x.Bediening || ''; let bed = /hand/i.test(bedRaw) || /handbed|slangwagen/i.test(n) ? 'H' : (/veer/i.test(bedRaw) || ['lw', 'diesel', 'olie', 'vet', 'gas', 'kabel', 'aard', 'lamp'].includes(t) ? 'V' : '');
  const uitv = /zwenk|draai/i.test(x.Uitvoering || '') ? 'Z' : /vast/i.test(x.Uitvoering || '') ? 'V' : '';
  const volt = ((x.Spanning || (n.match(/(12v\s*-\s*230|400|230|24|12)\s?v/i) || [])[0] || '') + '').toLowerCase().replace(/\s/g, '').replace(/v?$/, 'v').replace(/^v$/, '');
  let kabel = (x.Kabel || '').replace(/\s/g, '').replace(/H05VV-F|H07RN-F/gi, '').replace(/mm2|mm²|mm/gi, '').replace(/[×xX]/, 'x').replace(',', '.');
  if (!kabel || !/x/.test(kabel)) { const k = n.match(/(\d)\s*[xX×]\s*(\d+(?:[.,]\d+)?)\s*mm/); if (k) kabel = k[1] + 'x' + k[2].replace(',', '.'); }
  if (t === 'aard') { const a = (x.Kabel || n).match(/(\d+(?:[.,]\d+)?)\s*mm/); if (a) kabel = a[1].replace(',', '.'); }
  const ip = ((x['IP-klasse'] || n.match(/IP\s?\d{2}/i)?.[0] || '') + '').replace(/\D/g, '');
  const kw = (x['Vermogen (afgerold)'] || '').replace(/[^\d,.]/g, '').replace(',', '.');
  let serie = (x.Serie || (n.match(/\bS\d{3}\b/) || [])[0] || '').replace(/\s*serie/i, '').trim();
  if (!serie) { const z = n.match(/\b(804|805|813|1400|1700|4000)\b/); if (z) serie = z[1]; }
  if (t === 'acc') {
    if (/slangstop.*universeel|universeel.*slangstop|slanggeleider/i.test(n)) serie = 'UNI';
    else if (/slangenset|slangset .*koppel/i.test(n)) serie = 'SET';
    else if (/aardingsklem/i.test(n)) serie = 'AARD';
    else if (/^ramex/i.test(n) && !serie) serie = 'Ramex';
    else if (/^mavel/i.test(n) && !serie) serie = 'Mavel';
  }
  return [p.sku, n.replace(/\|/g, '/'), p.price, p.stock ? 1 : 0, t, m, len ?? '', dia, bar ?? '', matCode(x.Materiaal, n), bed, uitv, volt, kabel, ip, kw, serie, p.img || ''];
}

/* ---------- hoofdprogramma ---------- */
async function loadPrevious() {
  if (existsSync(OUT)) { try { const j = JSON.parse(await readFile(OUT, 'utf8')); if (Array.isArray(j.items)) return j.items; } catch {} }
  if (existsSync(BASIS)) return (await readFile(BASIS, 'utf8')).trim().split('\n').map(l => l.split('|'));
  return [];
}
async function main() {
  const t0 = Date.now();
  const prev = new Map((await loadPrevious()).map(r => [String(r[0]), r]));
  console.log(`[${new Date().toISOString()}] Start sync – ${prev.size} bekende artikelen`);

  // 1. categoriepagina's doorlopen
  const found = new Map(); // url -> Set(cats)
  for (const cat of CATS) {
    let seen = 0;
    for (let p = 1; p <= MAX_PAGES; p++) {
      const html = await get(`${cat}?page=${p}`); if (!html) break;
      const links = listingLinks(html).filter(u => !EXCLUDE.test(u)); let nieuw = 0;
      for (const u of links) { if (!found.has(u)) { found.set(u, new Set()); nieuw++; } found.get(u).add(cat); }
      seen += links.length; if (!nieuw && p > 1) break; await sleep(DELAY_MS);
    }
    console.log(`  ${cat}: ${seen} links`);
  }
  // 2. productpagina's ophalen (prijs, voorraad, specificaties)
  const urls = [...found.keys()];
  const products = (await pool(urls, async u => {
    for (let t = 1; t <= 3; t++) { try { const h = await get(u); const p = h && parseProduct(h, u); if (p) return p; } catch {} await sleep(1500 * t); }
    console.warn('  ! niet gelezen: ' + u); return null;
  })).filter(Boolean);
  const bySku = new Map(); products.forEach(p => { if (!bySku.has(p.sku)) bySku.set(p.sku, p); });
  if (bySku.size < MIN_ITEMS) { console.error(`Slechts ${bySku.size} artikelen gevonden – vermoedelijk storing of gewijzigde site. Er wordt niets overschreven.`); process.exit(2); }

  // 3. samenvoegen: bekende artikelen behouden hun (handmatig gecontroleerde) classificatie
  const items = [], added = [], changed = [];
  for (const [sku, p] of bySku) {
    if (EXCLUDE.test(p.name)) continue;
    const cats = [...(found.get(p.url) || [])];
    const old = prev.get(sku);
    if (old) {
      const row = old.slice(); while (row.length < 18) row.push('');
      if (+row[2] !== p.price || String(row[3]) !== (p.stock ? '1' : '0')) changed.push(sku);
      row[1] = p.name.replace(/\|/g, '/') || row[1]; row[2] = p.price || row[2]; row[3] = p.stock ? 1 : 0; row[17] = p.img || row[17];
      items.push(row);
    } else { items.push(classify(p, cats)); added.push(`${sku} ${p.name}`); }
  }
  const removed = [...prev.keys()].filter(s => !bySku.has(s));
  items.sort((a, b) => String(a[0]).localeCompare(String(b[0])));

  const json = { generated: new Date().toISOString(), source: BASE, count: items.length, added: added.length, removed: removed.length, items };
  await mkdir(dirname(OUT), { recursive: true });
  await writeFile(OUT, JSON.stringify(json));
  console.log(`  ${items.length} artikelen · ${added.length} nieuw · ${removed.length} verdwenen · ${changed.length} prijs/voorraad gewijzigd`);
  added.forEach(a => console.log('  + ' + a)); removed.forEach(s => console.log('  - ' + s + ' ' + (prev.get(s)?.[1] || '')));

  // 4. optioneel: widget met ingebouwde data genereren
  if (JS_OUT) {
    const tpl = await readFile(TEMPLATE, 'utf8');
    const raw = items.map(r => r.map(v => String(v ?? '').replace(/`|\$\{|\\/g, '')).join('|')).join('\n').replace(/[^\x00-\x7f]/g, c => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'));
    const d = new Date().toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' }).replace(/[^\x00-\x7f]/g, '');
    const outJs = tpl.replace(/const RAW=`[\s\S]*?`;/, () => 'const RAW=`' + raw + '`;').replace(/const BUILT_DATE='[^']*';/, `const BUILT_DATE='${d}';`);
    await mkdir(dirname(JS_OUT), { recursive: true }); await writeFile(JS_OUT, outJs);
    console.log('  widget geschreven: ' + JS_OUT);
  }
  console.log(`Klaar in ${Math.round((Date.now() - t0) / 1000)} s`);
}
main().catch(e => { console.error(e); process.exit(1); });
