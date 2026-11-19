# Haspelconfigurator met dagelijkse sync

De configurator houdt zichzelf actueel. Elke nacht:

1. worden alle haspelcategorieën van hamerdirect.nl doorlopen;
2. bijgewerkt: naam, prijs en voorraad van bestaande artikelen;
3. **nieuwe haspels automatisch herkend en ingedeeld** (toepassing, lengte, diameter, werkdruk, materiaal, bediening, uitvoering, spanning, kabel, IP-klasse, serie);
4. artikelen die niet meer in de shop staan verwijderd;
5. `data/haspels.json` geschreven (en `dist/haspelconfigurator.js` met de data ingebouwd).

Bekende artikelen houden hun gecontroleerde indeling; alleen nieuwe artikelen worden automatisch ingedeeld.
Vindt de sync minder dan 100 artikelen (storing, site gewijzigd), dan wordt er niets overschreven.

```
data/haspels.json            ← actuele data (wordt dagelijks vernieuwd)
dist/haspelconfigurator.js   ← widget met ingebouwde actuele data
widget/haspelconfigurator.js ← bron van de widget
sync/haspel-sync.mjs         ← sync-script (Node 18+, geen dependencies)
sync/basis.txt               ← gecontroleerde startdataset (19-11-2026)
.github/workflows/haspel-sync.yml ← dagelijkse cron via GitHub Actions
```

## Optie A – GitHub Actions (aanbevolen, gratis, geen server nodig)

1. Maak een (privé of publieke) repository op GitHub en upload de inhoud van deze map.
2. Ga naar **Actions** → "Haspeldata bijwerken" → **Run workflow** voor een eerste test.
3. Daarna draait hij elke nacht om 03:17. De log toont nieuwe (`+`) en verdwenen (`-`) artikelen.

Koppel de configurator aan de verse data met `data-bron`:

```html
<div data-hamer-haspelconfigurator
     data-bron="https://raw.githubusercontent.com/<ORG>/<REPO>/main/data/haspels.json"></div>
<script src="/content/files/haspelconfigurator/haspelconfigurator.js" defer></script>
```

Bij een **privé** repository is de raw-URL niet publiek bereikbaar; gebruik dan een publieke repository
(de data is toch al openbaar op de webshop) of optie B.

De widget toont direct de ingebouwde data en wisselt binnen een fractie van een seconde naar de verse data.
Lukt het laden niet, dan blijft de ingebouwde data staan.

## Optie B – eigen server met crontab

```bash
# eenmalig testen
node sync/haspel-sync.mjs --out /var/www/haspel/haspels.json
# crontab -e  → dagelijks 03:17
17 3 * * * cd /opt/haspelconfigurator && node sync/haspel-sync.mjs --out /var/www/haspel/haspels.json >> sync.log 2>&1
```

Zet `data-bron` op de URL van dat bestand. Staat het op een ander domein dan hamerdirect.nl, stuur dan de header
`Access-Control-Allow-Origin: https://www.hamerdirect.nl` mee.

## Optie C – handmatig (zonder koppeling)

Draai de sync met `--js dist/haspelconfigurator.js` en upload dat bestand opnieuw naar Sana. Geen `data-bron` nodig.

## Aandachtspunten

- De sync leest de openbare webshoppagina's (ca. 400 pagina's, rustig: 3 tegelijk met pauzes, ±5 minuten).
  Mocht hosting/beveiliging van de shop verzoeken vanaf GitHub blokkeren, whitelist dan de runner of gebruik optie B.
- Nieuwe artikelen worden ingedeeld op basis van de specificatietabel en de productnaam. Zijn de specificaties
  in Sana goed gevuld (Medium, Lengte slang, Diameter slang, Maximale werkdruk, Materiaal, Bediening, Uitvoering,
  Spanning, Kabel, IP-klasse), dan is de indeling betrouwbaar. Controleer nieuwe artikelen in de log.
- Een indeling corrigeren: pas de regel aan in `data/haspels.json`; de sync behoudt die indeling voortaan.
- De dagelijkse sync haalt Sana's prijzen excl. btw op (zoals de site ze voor anonieme bezoekers toont).
