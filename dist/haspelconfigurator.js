/*!
 * Haspelconfigurator \u2013 embed-widget voor hamerdirect.nl (Sana Commerce)
 * Gebruik ("shortcode"):
 *   <div data-hamer-haspelconfigurator></div>
 *   <script src="/content/files/haspelconfigurator/haspelconfigurator.js" defer></script>
 * Optionele attributen op de div:
 *   data-toepassing="lucht|water|hd|diesel|olie|vet|s230|s400|aard|lamp|gas|lint"  (slaat stap 1 over)
 *   data-titel="Eigen titel"      data-intro="Eigen introtekst"
 *   data-resultaten="10"          (aantal resultaten voordat "toon alle" verschijnt)
 *   data-btw="excl. btw"          (prijslabel)
 *   data-bron="https://\u2026/haspels.json" (actuele data uit de dagelijkse sync; valt terug op ingebouwde data)
 * Data: assortiment haspels hamerdirect.nl, stand 19-11-2026.
 */
(function(){
'use strict';
if(window.HamerHaspelConfigurator)return;

const BUILT_DATE='19 november 2026';
const RAW=`10023777|Zeca zwenkbare montagebeugel 1400 serie|70|1|acc|||||s|||||||1400
10003249|Zeca zwenkbare montagebeugel 1701|238|0|acc|||||s|||||||1700
10023776|Zeca montagebeugel 1400 serie|28|1|acc|||||s|||||||1400
10028849|Zeca kabelarm tbv 1700 serie -145 mm - type 2 1707|192|0|acc|||||s|||||||1700
10050125|Raasm S430 Draaiplateau 360\u00b0 gegalvaniseerd - 843014|95|0|acc|||||s|||||||S430
10003250|Zeca kabelarm tbv 1700 serie -115 mm type 1 - 1706|168|0|acc|||||s|||||||1700
10023775|Zeca beugel met slanggeleider 1406|77|0|acc|||||s|||||||1400
10004626|Raasm S540 scharnierende muurbeugel RVS - 854006|244|1|acc|||||r|||||||S540
10006887|Raasm lucht/water haspel gelakt staal S530 1" zonder slang|459|1|lw|LWD|0||20|s||V|||||S530
10006894|Raasm S530 diesel haspel gelakt staal 8 meter 1" slang|790|0|diesel|D|8|1|10|s||V|||||S530
10006890|Raasm S530 diesel haspel gelakt staal 12 meter \u00be" slang|754|1|diesel|D|12|\u00be|10|s||V|||||S530
10020938|Raasm S530 scharnierende muurbeugel gelakt staal|46|1|acc|||||s|||||||S530
10015823|Raasm S540 scharnierende muurbeugel gelakt staal|105|1|acc|||||s|||||||S540
10026905|Raasm S540 L/W/D haspel gelakt staal - zonder slang|399|0|lw|LWD|0||20|s||V|||||S540
10026914|Raasm S540 L/W/D haspel RVS - zonder slang|762|0|lw|LWD|0||20|r||V|||||S540
10039395|Raasm Zwenkbeugel RVS 316 voor S560 856007|668|1|acc|||||r|||||||S560
10026930|Raasm S560 L/W/D haspel RVS - zonder slang|1021|0|lw|LWD|0||20|r||V|||||S560
10026921|Raasm L/W/D haspel S560 20 bar 1" handbed. staal 75600.100|618|0|lw|LWD|0||20|s|H|V|||||S560
9065903|Raasm S540 L/W/D gelakt zonder slang 8540.100|583|1|lw|LWD|0||20|s||V|||||S540
9065922|Raasm S540 L/W/D haspel gelakt staal - \u00be" 15 meter slang|826|1|diesel|D|15|\u00be|10|s||V|||||S540
10039396|Raasm Zwenkbeugel Staal Gelakt voor S560 856005|231|1|acc|||||s|||||||S560
9065923|Raasm S540 L/W/D haspel gelakt staal - \u00be" 20 meter slang|901|0|diesel|D|20|\u00be|10|s||V|||||S540
9065925|Raasm S560 L/W/D haspel gelakt staal - \u00be" 30 meter slang|1498|0|lw|LD|30|\u00be|10|s||V|||||S560
9065927|Raasm S560 L/W/D haspel gelakt staal - \u00be" 40 meter slang|1609|0|diesel|D|40|\u00be|10|s||V|||||S560
9065929|Raasm S560 L/W/D haspel gelakt staal - 1" 30 meter slang|1767|0|lw|LD|30|1|10|s||V|||||S560
9065924|Raasm S540 L/W/D haspel gelakt staal - 1" 15 meter slang|983|1|lw|LWD|15|1|10|s||V|||||S540
9065939|Raasm S560 Diesel haspel RVS - 1" 30 meter slang|2382|0|diesel|D|30|1|10|r||V|||||S560
9065926|Raasm S560 L/W/D haspel gelakt staal - \u00be" 35 meter slang|1555|0|lw|LD|35|\u00be|10|s||V|||||S560
9071053|Raasm L/W/D haspel S560 gelakt staal - zonder slang|1055|1|lw|LWD|0||20|s||V|||||S560
9065938|Raasm S560 L/W/D haspel RVS - 1" 20 meter slang|2168|0|lw|WD|20|1|10|r||V|||||S560
10002303|Zeca aardingshaspel 16 meter 6mm kabel type 4106|223|1|aard||16|||k||||6|42||
10005849|Zeca 6193/PRC aardingshaspel 17 mtr 16 mm2|643|0|aard||17|||al||||16|42||
10005850|Zeca 6195/PRC aardingshaspel 24+2 mtr 6 mm2|643|1|aard||26|||al||||6|42||
10005848|Zeca 9006 aardingshaspel 7 mtr 6 mm2 kabel|132|0|aard||7|||k||||6|42||
10005853|Zeca 1711 aardingshaspel 32 meter 16mm2 Type 1711 IP65|1644|0|aard||32|||s||||16|65||
9071064|Raasm L/W/D haspel S560 RVS - zonder slang|1679|1|lw|LWD|0||20|r||V|||||S560
10005852|Zeca 6198/PRC aardingshaspel 28+2 mtr 2.5 mm2|627|0|aard||30|||al||||2.5|42||
10006086|Zeca 7116 aardingshaspel met 20+2 meter kabel|508|1|aard||22|||k||||16|42||
10005855|Zeca 1712 aardingshaspel 30+2 meter 25mm2 IP65|1895|0|aard||32|||s||||25|65||
10023488|Zeca 5832/XF aardingshaspel 10 mtr 16 mm\u00b2 kabel|246|0|aard||10|||k||||16|42||
10006079|Zeca aardingshaspel 11 meter 1x16mm2 4116|264|1|aard||11|||k||||16|42||
10023467|Zeca 1421 aardinghaspel 18 + 2 mtr 1x25 mm\u00b2|1105|0|aard||20|||s||||25|65||
10023466|Zeca 1420 aardinghaspel 20 + 2 mtr 1x16 mm\u00b2|988|0|aard||22|||s||||16|65||
10023490|Zeca 5836/XF aardingshaspel 16,5 mtr 2,5 mm\u00b2 kabel|199|1|aard||16.5|||k||||2.5|42||
10023489|Zeca 5834/XF aardingshaspel 14 mtr 6 mm\u00b2 kabel|214|1|aard||14|||k||||6|42||
10023492|Zeca 6193/PRC/IP65 aardingshaspel 15 + 2 mtr 16mm\u00b2 kabel|910|0|aard||17|||al||||16|65||
10032052|Mavel veiligheidslinthaspel 16 meter rood/wit - 811700|162|1|lint||16|||||Z|||||
10024341|Zeca Veiligheidslinthaspel 9801 RW rood/wit 8 meter|107|1|lint||8|||k|||||||
10037672|Mavel Veiligheidslint haspel 20 meter rood/wit - 808400|192|1|lint||20||||||||||
10050070|Zeca Veiligheidslinthaspel 4801 RW - rood/wit 20 meter|183|1|lint||20|||k|||||||
10001803|Raasm S450 vethaspel +12 meter 1/4" slang ABS - staal gesloten haspel - 9450.501|496|0|vet||12|\u00bc|400|as||V|||||S450
10001804|Raasm S450 Vethaspel + 18 meter \u00bc" slang ABS-staal - Gesloten - 9450.502|558|1|vet||18|\u00bc|400|as||V|||||S450
10001808|Raasm S450 kunststof-staal gesloten haspel met 15 meter \u215c" slang|588|0|vet||15|\u215c|400|as||V|||||S450
10001805|Raasm S450 vethaspel + 10 meter 3/8" slang ABS-staal - Gesloten - 9450.505|521|0|vet||10|\u215c|400|as||V|||||S450
10002176|Raasm S430 vethaspel ABS/staal +18 meter 1/4" slang - 9430.502|509|1|vet||18|\u00bc|400|as||V|||||S430
10002175|Raasm S430 vethaspel 12 meter \u00bc" slang kunststof - staal|447|1|vet||12|\u00bc|400|as||V|||||S430
10002177|Raasm S430 vethaspel 10 meter \u215c" slang kunststof - staal|473|0|vet||10|\u215c|400|as||V|||||S430
9041001|Raasm S390 vethaspel + 12 meter \u00bc" slang gelakt staal|455|1|vet||12|\u00bc|400|s||V|||||S390
10002178|Raasm S430 vethaspel 15 meter \u215c" slang kunststof - staal|539|1|vet||15|\u215c|400|as||V|||||S430
9041022|Raasm S430 vethaspel 10 meter \u215c" slang gelakt staal|533|1|vet||10|\u215c|600|s||V|||||S430
9041002|Raasm S390 vethaspel gelakt staal + 16 meter \u00bc" slang|486|1|vet||16|\u00bc|400|s||V|||||S390
9041035|Raasm S530 veerbed. haspel met 25 meter \u215c" slang gelakt staal|866|0|vet||25|\u215c|400|s|V|V|||||S530
9041034|Raasm S530 veerbediende haspel + 20 meter \u215c" slang gelakt staal|796|0|vet||20|\u215c|600|s|V|V|||||S530
9041023|Raasm S430 vethaspel + 15 meter 3/8" slang gelakt staal|600|1|vet||15|\u215c|600|s|||||||S430
9041037|Raasm S540 vethaspel 30 meter \u215c" slang gelakt staal|1026|0|vet||30|\u215c|400|s||V|||||S540
10000337|Zeca 4315/GS kabelhaspel 230v met 14+1 meter kabel met stekker|222|1|kabel||15.5|||k|||230v|3x1.5|42|1.8|
10000335|Zeca 4315 kabelhaspel 230v met 14+1 meter kabel|194|1|kabel||15|||k|||230v|||1.8|
10000334|Zeca 5843/XF kabelhaspel 7 meter - 5 x1,5mm\u00b2 400v|255|1|kabel||7|||k|||400v|5x1.5|42|1.9|
10000336|Zeca 4315/S kabelhaspel 230v met 14+1 meter kabel|194|1|kabel||15|||k|||230v|3x1.5|42|1.8|
10000338|Zeca 4315/S/GS kabelhaspel grijs 230v met 14+1 meter kabel met stekker|222|1|kabel||15.5|||k|||230v|3x1.5|42|1.8|
10000341|Zeca 4425 kabelhaspel 400v met 8+1 meter kabel|255|1|kabel||9|||k|||400v|4x2.5|42|2.7|
10000339|Zeca 4325 kabelhaspel 3x2,5 mm2 -230v 10 meter kabel|194|1|kabel||10|||k|||230v|3x2.5|42|2.5|
10000343|Zeca 4515 kabelhaspel 400v met 8+1 meter kabel|264|0|kabel||9|||k|||400v|5x1.5|42|1.9|
10000340|Zeca 4415 kabelhaspel 400v met 10+1 meter kabel|240|1|kabel||11|||k|||400v|4x1.5|42|1.9|
10000342|Zeca 4510 kabelhaspel 400v met 10,5+1 meter kabel|264|1|kabel||11.5|||k|||400v|5x1.0|42|1.5|
10000349|Zeca 6181/PRC kabelhaspel 400v met 21+2 meter kabel IP65|925|0|kabel||23||||||400v||65|1.1|
10000348|Zeca 6181/PRC kabelhaspel 400v met 21+2 meter kabel|637|0|kabel||22|||k|||400v||42|1.8|
10000345|Zeca 6186/PRC kabelhaspel 230v met 24+2 meter kabel IP65|861|0|kabel||26|||k|||230v|3x1.5|65|1.8|
10000353|Zeca 6022/PRC kabelhaspel 400v met 10+2 meter kabel|637|1|kabel||12|||al|||400v|5x2.5|42|3.0|
10000356|Zeca 7415 kabelhaspel 400v met 25+2 meter kabel|426|0|kabel||27||||||400v||42|1.8|
10000563|Zeca Kabelhaspel L=7+1 mtr 2x1 mm 230V 9001|133|1|kabel||8||||||230v|2x1||1.6|
10000653|Mavel veerbediende kabelhaspel 230V,3x2,5mm\u00b2, L=20mtr.820721|441|1|kabel||20|||k|V|Z|230v|3x2.5|24|3|
10000354|Zeca 7315 kabelhaspel 230v met 25+2 meter kabel|392|1|kabel||27||||||230v||42|1.8|
10000355|Zeca 7325 kabelhaspel 230v met 20+2 meter kabel|408|1|kabel||22|||k||Z|230v|3x2.5|42|3.0|
10001117|Mavel Roll Master plus kabelhaspel 15 meter 2 x 1 mm\u00b2 - 230v 811010|179|0|kabel||15|||k||Z|230v|2x1|24|2|
10000357|Zeca 7425 kabelhaspel 400v met 18+2 meter kabel|443|1|kabel||20|||k|||400v||42|3.0|
10001118|Mavel Roll Special kabelhaspel 10 meter 5 x 1.5 mm\u00b2 - 400v 824170|276|0|kabel||10|||k||Z|400v|5x1.5|20|3|
10006081|Zeca 4210 kabelhaspel 230v met 17+1 meter kabel|199|0|kabel||18||||||230v|2x1.0|42|1.4|
10001749|Zeca 7525 kabelhaspel 400v met 15+2 meter kabel|490|1|kabel||17|||k|||400v|5x2.5|42|3.0|
10004315|Mavel Roll Special Kabelhaspel 18 meter 3 x 1,5 mm2 - 230v 824132|210|1|kabel||18|||k|||230v|3x1.5|20|2|
10006083|Zeca 4215 kabelhaspel 230v met 15+1 meter kabel|223|0|kabel||16|||k|||230v|2x1.5|42|1.6|
10006087|Zeca 7215 kabelhaspel 230v met 25+2 meter kabel|362|0|kabel||27||||||230v||42|1.8|
10015486|Zeca 6061/PRC kabelhaspel 400v met 6+2 meter kabel|693|0|kabel||8||||||400v||42||
10006967|Mavel Roll Special Kabelhaspel 18 meter 3 x 1,5 mm2 + stekker - 230v 824142|225|1|kabel||18|||k||Z|230v|3x1.5|20|2.0|
10016092|Mavel veerbed.kabelhaspel 230V 3X2,5mm2+stekker 20mtr 820722|522|0|kabel||20|||k|V|Z|230v|3x2.5|24|3|
10023500|Mavel Roll Compact kabelhaspel 10 meter 5 x 1,5mm\u00b2 - 400v 808770|277|0|kabel||10|||k|||400v|5x1.5|24|3|
10021214|Mavel Roll Master Plus kabelhaspel 15 meter 3x1.5mm\u00b2 - 230v 811020|196|1|kabel||15|||k||Z|230v|3x1.5|24|2.0|
10023784|Mavel Roll Dynamic kabelhaspel 10 meter 5 x 1,5 mm\u00b2 400v - 826110|276|0|kabel||10|||k||V|400v|5x1.5|20|3|
10006089|Zeca 7515 kabelhaspel 400v met 20+2 meter kabel|490|0|kabel||22||||||400v||42|2.2|
10049348|Zeca Kabelhaspel 4315 IP65 3 x 1,5mm2 15 meter|274|1|kabel||15||||||230v|3x1.5|65|1.8|4000
9101015|Mavel Roll Classic kabelhaspel 20 meter 2 x 1 mm2 230V 808723|214|1|kabel||20|||k||Z|230v|2x1|24|2.0|
10023786|Mavel Roll Dynamic kabelhaspel 18 meter 3 x 1,5 mm\u00b2 - 826020|220|0|kabel||18|||k||V|230v|3x1.5|20|2.0|
9101002|Mavel Roll Compact kabelhaspel 18 meter 3 x 1,5 mm2 230v - 808732|220|1|kabel||18|||k|||230v|3x1.5|24|2.0|
9101001|Mavel Kabelhaspel 230v 3 x 1,5 mm2 10 meter Roll Classic plus 811190|177|1|kabel||10|||k||Z|230v|3x1.5|24|2|
10023785|Mavel Roll Dynamic kabelhaspel 15 meter 3 x 2,5 mm\u00b2 - 826070|293|1|kabel||15|||k||V|230v|3x2.5|20|3.5|
10000311|Zeca 9100/6 luchthaspel + 6,5 meter - 5,5 mm slang|132|1|lw|LW|6.5|5,5 mm|12|k||Z|||||
9101000|Mavel Kabelhaspel 230v 2 x 1 mm2 15 meter Roll Classic plus 811180|174|0|kabel||15|||k||Z|230v|2x1|24|2|
10000319|Zeca 813/8 lucht- waterhaspel geel + 12 meter 5/16" slang|372|1|lw|LW|12|5/16|12|k||Z|||||
10000321|Zeca 813/10 lucht- waterhaspel geel + 9 meter \u215c" slang|372|1|lw|LW|9|\u215c|12|k||Z|||||
10000322|Zeca 813/10/S lucht- waterhaspel grijs + 9 meter \u215c" slang|372|1|lw|LW|9|\u215c|12|al||Z|||||
10000320|Zeca 813/8/S lucht- waterhaspel grijs + 12 meter 5/16" slang|372|1|lw|LW|12|5/16|12|k||Z|||||
10001797|Raasm S450 lucht- waterhaspel + 18 meter 3/8" slang gesloten - 9450.102|524|0|lw|LW|18|3/8|20|as||V|||||S450
10004101|Ramex HR 1000 HAI RVS 304 haspel|584|1|lw|LW|0||200|r||V|||||
10004313|Mavel Roll Special Luchthaspel + 12 meter 5/16" slang - 823110|152|1|lw|LW|12|5/16|10|k||Z|||||
10001796|Raasm S450 lucht- waterhaspel + 12 meter 3/8" slang gesloten - 9450.101|469|1|lw|LW|12|3/8|20|s||V|||||S450
10004361|Raasm S450 waterhaspel ABS/ST gesloten 20 bar zonder slang - 9450.100|327|0|lw|W|0||20|as||V|||||S450
10015390|Zeca AL 83/10 luchthaspel met 16 meter \u215c" slang|304|1|lw|LW|16|\u215c|15|al||Z|||||
10004530|Raasm S260 Lucht- waterhaspel + 11 meter 5/16" slang 89109|198|1|lw|LW|11|5/16|20|k||Z|||||S260
10015657|Zeca AL 81/8 luchthaspel met 10 meter 5/16" slang|224|1|lw|LW|10|5/16|15|al||Z|||||
10015659|Zeca AL 83/8 luchthaspel met 16 meter 5/16" slang|304|1|lw|LW|16|5/16|15|al||Z|||||
10020946|Raasm S260 Lucht- waterhaspel + 11 meter 1/4" slang - 89110|191|0|lw|LW|11|\u00bc|20|k||Z|||||S260
10023782|Mavel Roll Dynamic luchthaspel met 12 meter 5/16" slang 826300|163|1|lw|LW|12|5/16|15|k||V|||||
10023783|Mavel Roll Dynamic luchthaspel met 15 meter \u00bc"slang 826250|166|0|lw|L|15|\u00bc|10|k||V|||||
10024106|Zeca AL 81/10 luchthaspel met 8 meter \u215c" slang|224|1|lw|LW|8|\u215c|15|al||Z|||||
10023781|Mavel Roll Dynamic luchthaspel met 8 meter 3/8" slang 826400|180|0|lw|LW|8|\u215c|15|k||V|||||
10024135|Raasm S280 L/W gesloten haspel + 10 meter 5/16" slang - 92808.101|274|0|lw|LW|10|5/16|20|k||Z|||||S280
10024151|Raasm lucht-/waterhaspel S280 kunststof gesloten 14 meter 5/16"|340|0|lw|LW|14|5/16|20|k||Z|||||S280
10024104|Zeca AL 83/13 luchthaspel met 11 meter \u00bd" slang|304|1|lw|LW|11|\u00bd|15|al||Z|||||
10026918|Raasm waterhaspel S540 200 bar RVS handbediend 75440.300|662|1|lw|W|0||200|r|H|V|||||S540
10028617|Zeca 8424 lucht/waterhaspel 20 meter 3/8" slang KPU|443|1|lw|LW|20|\u215c|20|as||V|||||
10026925|Raasm waterhaspel S560 200 bar gelakt staal - 75600.300|606|0|lw|W|0||200|s||V|||||S560
10024134|Raasm S280 Lucht-/waterhaspel kunststof gesloten 14 meter 5/16" 92808.102|275|0|lw|LW|14|5/16|20|k||Z|||||S280
10026915|Raasm S540 L/W/D haspel RVS 1/2" handbediend - 75420.105|658|0|lw|LWD|0||20|r|H|V|||||S540
10044721|Zeca 805/10/B SAFE + 10 mm 16 meter slang|243|1|lw|LW|16|\u215c|15|||||||||805
10041690|Mavel Roll Extra Lucht- waterhaspel + 20 meter 3/8" slang - geintegr. slowmotion 882100|332|1|lw|LW|20|\u215c|15|k|||||||
9071001|Mavel Major Plus luchthaspel + 15 meter \u215c" slang 821300|237|1|lw|LW|15|\u215c|15|k||Z|||||
9052083|Raasm S530 RVS waterhaspel zonder slang - 3/8"- Vast - 8534.350|951|1|lw|LW|0||400|r||V|||||S530
9071002|Mavel Major Plus luchthaspel + 15 meter 8mm slang 821100|206|1|lw|LW|15|5/16|15|k||Z|||||
9071031|Raasm S260 L/W Haspel 11 meter 5/16" slang - 89010|214|0|lw|LW|11|5/16|20|k||Z|||||S260
9071054|Raasm S430 RVS Lucht/Water haspel + 12 meter 3/8" slang - 8432.101|742|0|lw|LW|12|\u215c|20|r||Z|||||S430
9071048|Raasm S530 Lucht/Water haspel + 25 meter 1/2" slang - 8530.102|721|1|lw|LW|25|\u00bd|20|s||V|||||S530
9071057|Raasm S430 RVS Lucht/Water haspel + 15 meter 1/2" slang - 8432.104|794|1|lw|LW|15|\u00bd|20|r||V|||||S430
9071056|Raasm S430 RVS Lucht/Water haspel + 10 meter 1/2" slang - 8432.103|743|0|lw|LW|10|\u00bd|20|r||Z|||||S430
9071058|Raasm S530 RVS Lucht/Water haspel + 20 meter 1/2" slang - 8532.101|1016|0|lw|LW|20|\u00bd|20|r||V|||||S530
9071047|Raasm S530 Lucht/Water Haspel 20 meter 1/2" slang - 8530.101|670|0|lw|LW|20|\u00bd|20|s||V|||||S530
9071059|Raasm S530 RVS Lucht/Water haspel + 25 meter 1/2" slang - 8532.102|1069|0|lw|LW|25|\u00bd|20|r||V|||||S530
9071055|Raasm S430 RVS Lucht/Water haspel + 18 meter 3/8" slang - 8432.102|794|0|lw|LW|18|\u215c|20|r||Z|||||S430
9071062|Raasm S540 Lucht/Water RVS haspel + 20 mtr 3/4 slang vast - 8542.102|1359|1|lw|LW|20|\u00be|20|r||V|||||S540
9071080|Mavel Master Plus luchthaspel met 12 meter \u00bc" slang 804250|157|1|lw|L|12|\u00bc|10|k||Z|||||
9071083|Mavel compact luchthaspel met 12 meter \u00bc" slang 808075|177|1|lw|LW|12|\u00bc|15|k||Z|||||
9071082|Mavel Classic Plus luchthaspel met 10 meter \u00bc" slang 804300|150|0|lw|L|10|\u00bc|10|k||Z|||||
9071081|Mavel Roll Master Plus luchthaspel + 9 meter 5/16" slang 804200|154|1|lw|LW|9|5/16|10|k||Z|||||
9071086|Mavel Mega luchthaspel met 20 meter \u215c" slang 880100|322|1|lw|LW|20|\u215c|15|k||Z|||||
9071084|Mavel Roll Compact luchthaspel + 15 meter \u00bc" slang - 808650|178|1|lw|L|15|\u00bc|10|k||Z|||||
9071085|Mavel Roll Minor Luchthaspel 5+1 meter 8 mm - 810010|120|1|lw|L|6|\u00bc|10|k||Z|||||
10000176|Raasm S430 lucht-water haspel ABS-staal zonder slang|271|1|lw|LW|0||20|as||V|||||S430
9071087|Mavel Mega luchthaspel + 16 meter \u00bd" slang 880200|343|1|lw|LW|16|\u00bd|15|k||Z|||||
9071326|Raasm S390 Lucht/Water RVS304 Haspel + 12 meter 3/8" hygiene slang - 8393.201|687|0|lw|LW|12|\u215c|100|r||V|||||S390
10000346|Zeca 6184/PRC kabelhaspel 230v met 15+2 meter kabel - 3 x 2,5 mm2|577|1|kabel||17|||al|||230v|3x2.5|42|3.0|
10000352|Zeca 6067/PRC kabelhaspel 400v met 16+2 meter kabel|612|0|kabel||17|||k|||400v||42|2.2|
10000344|Zeca 6186/PRC kabelhaspel 230v met 24+2 meter kabel|612|0|kabel||26|||al|||230v|3x1.5|42|1.8|
10000350|Zeca 6179/PRC kabelhaspel 400v met 15+2 meter kabel|593|1|kabel||17|||k|||400v||42|3.0|
10000367|Zeca 5907/329 Kabelhaspel met led looplamp 15,5 meter 230V|243|1|lamp||15.5||||||230v||42||
10003302|Zeca AM80/8 Luchthaspel met 10 meter 5/16" slang|147|0|lw|L|10|5/16|15|k||Z|||||
10000560|Zeca 5908/T306 12v - 230v Kabelhaspel met looplamp 15 meter|271|0|lamp||15|||k|||12v-230v||20||
10000441|Raasm Zwenkbeugel Staal Gelakt voor S290, S330, S390, S430|43|1|acc|||||s|||||||S290
10003304|Zeca AM85/10 Luchthaspel met 16 meter \u215c" slang|198|1|lw|L|16|\u215c|15|k||Z|||||
10003375|Raasm S430 lucht-water haspel ABS + 12 meter \u215c" slang|410|0|lw|LW|12|\u215c|20|as||V|||||S430
10000568|Zeca 5907/T306 Kabelhaspel met looplamp 15 meter|166|0|lamp||15|||k|||230v||20||
10003377|Raasm S430 lucht-water haspel ABS + 10 meter \u00bd" slang|412|1|lw|LW|10|\u00bd|20|k||V|||||S430
10003380|Raasm S430 lucht-water haspel ABS/RVS + 18 meter \u215c" slang|554|0|lw|LW|18|\u215c|20|ar||V|||||S430
10003376|Raasm S430 lucht-water haspel ABS + 18 meter \u215c" slang|461|1|lw|LW|18|\u215c|20|k||V|||||S430
10003303|Zeca AM85/8 Luchthaspel met 16 meter 5/16" slang|192|0|lw|L|16|5/16|15|k||Z|||||
10003378|Raasm S430 lucht-water haspel ABS + 15 meter \u00bd" slang|461|1|lw|LW|15|\u00bd|20|as||V|||||S430
10003381|Raasm S430 lucht-water haspel ABS/RVS + 10 meter \u00bd" slang|503|0|lw|LW|10|\u00bd|20|ar||V|||||S430
10021708|Mavel Roll Major Plus Slow motion|40|1|acc||||||||||||Mavel
10003379|Raasm S430 lucht-water haspel ABS/RVS + 12 meter \u215c" slang|502|1|lw|LW|12|\u215c|20|ar||V|||||S430
10006420|Zeca 5907/329 Kabelhaspel met led looplamp 15,5 meter 24V|243|0|lamp||15.5||||||24v||42||
10003382|Raasm S430 lucht-water haspel ABS/RVS + 15 meter \u00bd" slang|554|0|lw|LW|15|\u00bd|20|ar||V|||||S430
10021709|Mavel Roll Master Plus Slow motion|40|1|acc||||||||||||Mavel
10023496|Zeca AM57/306 Kabelhaspel met looplamp 15 meter|145|0|lamp||15||||||230v||20||
10020751|ALBA-Krapf slangwagen 'Forever' 25 bar|576|0|lw|W|||25||H||||||
10021710|Mavel Roll Classic Plus Slow motion|40|1|acc||||||||||||Mavel
10023507|Raasm S330 waterhaspel 12 meter 3/8" slang 20 bar - vast - 8330.101|409|0|lw|W|12|\u215c|20|s||V|||||S330
10024156|Mavel Roll Dynamic Slow motion|40|1|acc||||||||||||Mavel
10026868|Raasm waterhaspel S430 200 bar ABS/ST. handbediend 74305.300|274|0|lw|W|0||200|as|H||||||S430
10026873|Raasm L/W haspel S430 20 bar ABS/RVS handbediend 74325.100|344|0|lw|LW|0||20|ar|H|V|||||S430
10026866|Raasm L/W haspel S430 20 bar ABS/ST. handbediend 74305.100|234|0|lw|LW|0||20|as|H|V|||||S430
10026875|Raasm waterhaspel S430 200 bar ABS/RVS handbediend 74345.300|389|0|lw|W|0||200|ar|H|V|||||S430
10026881|Raasm waterhaspel S430 200 bar gelakt staal handbediend 7430|314|0|lw|W|0||200|s|H|V|||||S430
10026892|Raasm L/W haspel S530 20 bar gelakt staal handbediend 75300.|300|0|lw|LW|0||20|s|H|V|||||S530
10026879|Raasm L/W haspel S430 20 bar gelakt staal handbediend 74300.100|280|0|lw|LW|0||20|s|H|V|||||S430
10026888|Raasm waterhaspel S430 200 bar RVS handbediend 74320.300|538|0|lw|W|0||200|r|H|V|||||S430
10026899|Raasm L/W haspel S530 20 bar RVS handbediend 75320.100|545|0|lw|LW|0||20|r|H|V|||||S530
10026886|Raasm L/W haspel S430 20 bar RVS handbediend 74320.100|484|1|lw|LW|0||20|r|H|V|||||S430
10026901|Raasm waterhaspel S530 200 bar RVS handbediend 75340.300|583|0|lw|W|0||200|r|H|V|||||S530
10026894|Raasm waterhaspel S530 200 bar gelakt staal handbediend 7530|327|0|lw|W|0||200|s|H|V|||||S530
10026909|Raasm waterhaspel S540 200 bar gelakt staal handbediend 75400.300|389|0|lw|W|0||200|s|H|V|||||S540
10026906|Raasm L/W/D stalen haspel S540 20 bar 1/2" handbed. 75400.1|360|0|lw|LWD|0||20|s|H|V|||||S540
10044079|Zeca L/W Haspel blauw + 16 meter 5/16" 805/8/A FLEX|231|1|lw|LW|16|5/16|15|k||Z|||||805
10044081|Zeca 805/10/A FLEX L/W haspel + 16 meter 3/8" slang|243|1|lw|LW|16|\u215c|15|k|||||||805
10026922|Raasm L/W haspel S560 20 bar 1/2" handbed. gelakt 75600.106|566|0|lw|LW|0||20|s|H|V|||||S560
10044080|Zeca 805/8 FLEX L/W Haspel + 16 meter 5/16" slang|231|1|lw|LW|16|5/16|15|k|||||||805
10031702|Raasm L/W haspel S280 kunststof gesloten 8+1 mtr 3/8"|135|1|lw|LW|9|\u215c|20|k||Z|||||S280
10044082|Zeca L/W Haspel + 16 meter slang 3/8" 805/10 FLEX|243|1|lw|LW|16|\u215c|15|k|||||||805
9051060|Raasm Water Haspel Rvs 25M.3/8 200 Bar V S530 8532.302|1243|0|lw|W|25|\u215c|200|r||V|||||S530
9051050|Raasm Rvs Waterhaspel 20M. 3/8 130\u00b0-200 Bar S530 8532.301|1176|1|lw|W|20|\u215c|200|r||V|||||S530
9051062|Raasm Water Haspel Rvs Zndr.Sl. 200 Bar V S560 8564.300|1669|0|lw|W|0||200|r||V|||||S560
9051061|Raasm Water Haspel Rvs 30M.3/8 200 Bar V S540 8542.301|1335|0|lw|W|30|\u215c|200|r||V|||||S540
9052026|Raasm S430 waterhaspel +18 meter 3/8" 200 bar - vast - 8430.302|616|0|lw|W|18|\u215c|200|s||V|||||S430
9071003|Raasm S430 Lucht/Water Haspel + 12 meter 3/8 slang - vast - 8430.101|467|1|lw|LW|12|\u215c|20|s||V|||||S430
9051072|Raasm Water Haspel Rvs 18M.3/8 Hyg.200B V S430 8434.302|1203|0|lw|W|18|\u215c|200|r||V|||||S430
9071005|Raasm Lucht/Water Haspel 18Mtr 3/8 Vast S430 8430.102|518|1|lw|LW|18|\u215c|20|s||V|||||S430
9108002|Raasm S430 lashaspel 13 meter 2 X 1/4" 20 bar Vast - 8430.701|610|0|gas||13|\u00bc|20|s||V|||||S430
9071232|Raasm Lucht/Water Rvs Haspel 12Mtr.3/8 Dr.S420 8422.101|766|1|lw|LW|12|\u215c|20|r||Z|||||S420
9071006|Raasm Lucht/Water Haspel 15Mtr 1/2 Vast S430 8430.104|518|1|lw|LW|15|\u00bd|20|s||V|||||S430
9095403|Raasm swivelset 150 bar - KG202|57|1|acc||||150|||||||||
9071046|Raasm Lucht/Water Haspel 10 Mtr 1/2 Vast S430 8430.103|468|1|lw|LW|10|\u00bd|20|s||V|||||S430
9071029|Raasm Lucht/Water Haspel 18 Mtr.3/8 Vast S390|485|1|lw|LW|18|\u215c|20|s||V|||||S390
10000328|Zeca 9004/GS kabelhaspel 6 meter - 3 x 1,5mm\u00b2 230v + stekker|174|0|kabel||6|||k||Z|230v|3x1.5|42|1.9|
10000177|Raasm S430 haspel 10 meter \u00bd" slang kunststof/staal open model|436|1|olie|O|10|\u00bd|150|as|||||||S430
10000332|Zeca kabelhaspel 7 meter 4 x 2,5 mm\u00b2 400v 5821/XF|246|1|kabel||7|||k|||400v|4x2.5|42|2.7|
10000330|Zeca kabelhaspel L= 8,5 mtr. 3x 2,5mm\u00b2 230V. 5825/XF|223|1|kabel||8.5||||||230v|3x2.5|||
10000365|Zeca 5907/328 Looplamphaspel neon 14+1,5 mtr 2 x 1,5 mm2 - 230V|125|1|lamp||15.5||||||230v|2x1.5|||
10000387|Zeca Neonlooplamp los zonder kabel 328/230V|109|1|acc||||||||230v|||||5907
10000395|Zeca fixeer kit 949 tbv haspels 804 en 4000 serie|11|1|acc|||||||||||||4000
10000442|Raasm Zwenkbeugel RVS 304 - S290/S330/S390/S430|83|1|acc|||||r|||||||S290
10000843|Raasm KR8705 Slangstop set Universeel 3/8" - 1"|27|1|acc|||||||||||||UNI
10000566|Zeca Kabelhaspel L=12.5 mtr 2x1.5 mm 230V 5830/XF|205|0|kabel||12.5||||||230v|2x1.5|||
10000443|Raasm S430 olie-koelvloeistof haspel ABS/staal 15 meter 1/2" slang|513|1|olie|O|15|\u00bd|150|as||V|||||S430
10000875|Raasm swivel KG195 voor haspel KG195|158|1|acc|||||||||||||
10001801|Raasm S450 oliehaspel 10 meter 1/2" 150 bar|484|1|olie|O|10|\u00bd|150|as||V|||||S450
10001802|Raasm S450 ABS gesloten olieslanghaspel met 15 meter \u00bd" slang - 150 bar|562|1|olie|O|15|\u00bd|150|k||V|||||S450
10004109|Ramex HR 3500 HAI RVS 304 haspel|833|1|lw|W|0||200|r||V|||||
10004105|Ramex HR 1200 HAI RVS 304 haspel|667|1|lw|W|0||100|r||V|||||
10004103|Ramex HR 1100 HAI RVS 304 haspel|611|1|lw|W|0||200|r||V|||||
10002384|Raasm S430 15 meter \u00bd" slang ABS/RVS open model - 9432.402|607|0|olie|O|15|\u00bd|150|ar|||||||S430
10004346|Raasm S430 oliehaspel ABS/RVS zonder slang 150 bar - 9430.400|294|1|olie|O|0||150|ar||V|||||S430
10002383|Raasm S430 oliehaspel ABS/RVS 10 meter 1/2" 150 bar|538|1|olie|O|10|\u00bd|150|ar|||||||S430
10004889|Ramex zwenkbeugel RVS ST HR 15|84|1|acc|||||r||||||||Ramex
10004890|Ramex zwenkbeugel RVS ST 20|84|1|acc|||||r||||||||Ramex
10004351|Raasm Waterhaspel ABS/RVS S430 150 bar zonder slang 9434.200|409|0|lw|W|0||150|ar||V|||||S430
10004888|Raasm swivel KG325|94|1|acc|||||||||||||
10008507|Raasm spare part KR7203 - detent kit|19|1|acc|||||||||||||
10008506|Raasm spare part .rack tbv haspel I122|5|0|acc|||||||||||||
10015267|Zeca Slangset PVC compleet 9 mtr - 10mm (813 serie) 6813.631|96|0|acc||9|||||||||||813
10006446|Mavel Roll Major Luchthaspel 14 + 1 meter 3/8" slang - 822300|194|1|lw|LW|15|\u215c|15|k||Z|||||
10015334|Raasm S430/S420 geleiderrollen KR8510|57|1|acc||||||||||||S430
10019928|Mavel Roll Master Plus kabelhaspel 15 meter 3 x 1,5 mm2 - 230v 811030|201|1|kabel||15|||k||Z|230v|3x1.5|24|2|
10021706|Mavel slowmotion tbv Roll Compact 400V Air 707030|40|1|acc|L|||||||400v|||||Mavel
10022041|Zeca 4315/GS 3 kabelhaspel 15 meter 3x1.5 mm2 230v + 3d contra stekker|222|1|kabel||15||||||230v|3x1.5|||
10023447|Zeca kabelhaspel L=18+2 mtr 4x2,5mm\u00b2 400V 1434|1057|0|kabel||20|||s|||400v|4x2.5|||
10023493|Zeca 6195/PRC/IP65 aardingshaspel 22 + 2 mtr 6 mm\u00b2 kabel|822|0|aard||24|||al||||6|65||
10020862|Zeca Deksel Veerzijde zwart 805 serie|6.5|1|acc|||||||||||||805
10023511|Raasm S330 waterhaspel - vast model - 200 bar 8330.300|324|0|lw|W|0||200|s||V|||||S330
10023559|Raasm duo haspel Olie/Verf znder slang 200 bar S530 8530.4000|299|1|olie|O|0||200|s||V|||||S530
10022294|Raasm L/W haspel zonder slang vast model S290 - 8290.100|261|0|lw|LW|0||20|s||V|||||S290
10023502|Raasm L/W haspel 10 meter 3/8" vast model S290 - 8290.101|393|1|lw|LW|10|\u215c|20|s||V|||||S290
10024113|Raasm S350 aardingshaspel 15 meter 6mm\u00b2 - 735131.60152|522|0|aard||15|||s||||6|||S350
10024114|Raasm S350 aardingshaspel 25 meter 6mm\u00b2 - 735131.60252|622|0|aard||25|||s||||6|||S350
10024117|Raasm aardingshaspel 15+1 mtr 6 mm\u00b2 - 1065F|342|0|aard||16|||k||||6|44||
10027920|Zeca Scharnierpen X4-X8 804 serie|1.65|0|acc|||||||||||||804
10023547|Raasm S330 waterhaspel + 12 meter 3/8" slang - vast model - 100 bar - 8330.201|479|0|lw|W|12|\u215c|100|s||V|||||S330
10027921|Zeca Wandbeugel X4 804 serie|15.5|0|acc|||||||||||||804
10028628|Mavel Roll Compact kabelhaspel 230v 3 x 2,5 mm\u00b2 - 15 meter + stekker 808757|341|0|kabel||15|||k||Z|230v|3x2.5|24|3|
10028710|Zeca Slangset Compl. KPU AM80/8 10 meter 8 mm|60|1|acc||10|||||||||||AM80
10028642|Zeca looplamphaspel 330 led 14+1,5 mtr 230V - 5907/330 - 230V|125|1|lamp||15.5||||||230v|2x1|||
10028780|Zeca kabelhaspel alu L=10+2 mtr 4x2,5mm\u00b2 400V 6521/PRC RNF|658|1|kabel||12|||al|||400v|4x2.5|||
10028688|Zeca Scharnierpen 805 serie|5.25|0|acc|||||||||||||805
10031303|Raasm Gasket H012|6|0|acc|||||||||||||
10030145|Zeca kabelhaspel L= 15 mtr.3x 2,5mm\u00b2 230V. 4325/15|311|1|kabel||15||||||230v|3x2.5|||
10031217|Raasm L/W haspel S280 kunststof gesloten 14 mtr 5/16" + speed control|185|1|lw|LW|14|5/16|20|k||Z|||||S280
10033439|Mavel veer + blokkeerpal 704903|5|1|acc|||||||||||||Mavel
10033786|Slangenset diesel 30 + 1 mtr 1" 20 bar RVS kopp dubb. nip wartelend|785|0|acc|D|30|1|20|r||||||||SET
10035657|Zeca Slangset PVC compl. 12mtr 8 mm. (813 serie) 6813.630|96|0|acc||12|||||||||||813
10034786|Mavel slangstop 11 mm - 323334|7.5|1|acc|||11 mm||k||||||||Mavel
10037675|Mavel 811001 aardingshaspel 15 meter 6 mm2 zonder klem|193|0|aard||15|||k||Z||6|24||
10036155|Mavel Kabelstop tbv Roll Master|4|1|acc|||||||||||||Mavel
10038282|Ramex HR3503 FE HAI diesel haspel zonder slang|991|0|diesel|D|0||20|s||V|||||
10037677|Mavel aardingshaspel 15mtr 6mm2 incl klem 811500|736|0|aard||15|||k||Z||6|24||
10040186|Hamer 1/2" slangenset Lucht/water 20 +1 meter + 1/2" RVS316 koppelingen - 16 bar|361|1|acc|LW|20|\u00bd|16|r||||||||SET
10038317|Zeca looplamphaspel 330 led 15,5 meter 24V - 5907/330 24V|117.5|1|lamp||15.5||||||24v|2x1|||
10040716|Ramex Waterpistool Blauw 1/2" 12 bar 50\u00b0C 7401 FOOD|139|0|acc|W|||12|||||||||W
10039151|RVS Wand Slanggeleider EFW1|140|0|acc|||||r||||||||UNI
10042540|Mavel L/W haspel Genius met 15 meter 5/16" slang i 884100|211|1|lw|LW|15|5/16|15|k||Z|||||
10041346|Ramex waterhaspel zndr slang 250bar RVS HR 3400 HAI|750|1|lw|W|0||250|r||V|||||
10042542|Mavel Roll Genius kabelhaspel + 25 meter 3 x 1,5 mm2 - 885100|337|1|kabel||25|||k||Z|230v|3x1.5|24|2|
10042543|Mavel kabelhaspel Genius 20 meter 3 x 2,5 mm2 kabel 885300|441|1|kabel||20|||k||Z|230v|3x2.5|24|3|
10044269|Zeca Geleiderol 4000.042|2|0|acc|||||||||||||4000
10044859|Zeca Aardingsklem 925 N|10|1|acc|||||||||||||AARD
10044851|Zeca Kabelhaspel 10.5+1.5M 4x1mm2 400v 5824/XF|223|1|kabel||12||||||400v|4x1|||
10045170|Faicom RVS swivel 3/8" binnendraad - 0066BX|53|0|acc|||||r|||||||||
10045209|Faicom lashaspel 20m 2 x 3/8" slang - 20 bar - OSVM201020|500|1|gas||20|\u215c|20|||||||||
10045975|Ramex AVC 1038 Luchthaspel + 10 mtr 3/8" PU slang|105|1|lw|L|10|\u215c|20|k|||||||
10046015|Ramex AVC 1514 Luchthaspel + 15 mtr 1/4" PU slang|120|1|lw|L|15|\u00bc|20||||||||
10046294|Ramex Waterpistool Blauw RVS316 1/2" 24 bar 95\u00b0C 7401 B|253|0|acc|W|||24|r||||||||W
10049637|Slangenset Water 20+0,6 1/2" 400 bar + 1/2" rvs kopeling|606|0|acc|W|20|\u00bd|400|r||||||||SET
10050036|Zeca haakse aansluiting voor AM86 incl. clip AM86.062 + AM86.065|5.5|0|acc|||||||||||||AM86
10050519|Ramex AVM 2090 FE Handbediende haspel 20 bar - zonder slang|3160|0|lw|LW|0||20|s|H||||||
9021004|Raasm S430 veerbediende haspel met 10 meter \u00bd" slang|495|1|olie|O|10|\u00bd|150|s|V|V|||||S430
10051467|Collector Zeca haspel 6521 (6521.010)|69|0|acc|||||||||||||6521
9021005|Raasm Oliehaspel S430 + 15 meter 1/2" slang - open / vast - 8430.402|570|1|olie|O|15|\u00bd|150|s||V|||||S430
9021008|Raasm S430 oliehaspel zonder slang 1/2" vast - 8430.400|352|1|olie|O|0||150|s||V|||||S430
9021012|Raasm S530 Oliehaspel zonder slang 1/2" Vast - 8530.400|440|1|olie|O|0||150|s||V|||||S530
9021006|Raasm S520 Oliehaspel 20 meter 1/2" slang zwenkbaar - 8520.401|716|1|olie|O|20|\u00bd|150|s||Z|||||S520
9021007|Raasm Oliehaspel S520 + 25 meter 1/2" slang - zwenkbaar - 8520.402|771|1|olie|O|25|\u00bd|150|s||Z|||||S520
9021014|Raasm Oliehaspel S440 10Mtr 1/2 Draaib.Gesl. 8440.401|547|1|olie|O|10|\u00bd|150|s||Z|||||S440
9021024|Raasm S530 Oliehaspel + 25 meter 1/2" slang - vast - 8530.402|748|0|olie|O|25|\u00bd|150|s||V|||||S530
9021026|Raasm Oliehaspel S540 20 Mtr 3/4 Open Vast 100 bar 8540.412|1046|0|olie|O|20|\u00be|100|s||V|||||S540
9021025|Raasm Oliehaspel S540 15 meter 3/4" slang 100 bar - 8540.411|908|1|olie|O|15|\u00be|100|s||V|||||S540
9021023|Raasm Oliehaspel S530 20 Mtr 1/2 Open Vast 8530.401|693|1|olie|O|20|\u00bd|150|s||V|||||S530
9021015|Raasm Oliehaspel S440 + 15 meter 1/2" slang - zwenkbaar - 8440.402|623|0|olie|O|15|\u00bd|150|s||Z|||||S440
9021028|Raasm Oliehaspel S540 30 Mtr 1/2 Open Vast 8540.406|954|0|olie|O|30|\u00bd|150|s||V|||||S540
9021027|Raasm Oliehaspel S540 15 Mtr1 Open vast 50 bar. 8540.413|1046|0|olie|O|15|1|50|s||V|||||S540
9021029|Raasm Oliehaspel S560 Zndr.Slang 1 Open Vast 8560.400|1046|0|olie|O|0||150|s||V|||||S560
9021031|Raasm Oliehaspel S420 10 Mtr 1/2 Open Draaib. 8420.401|513|1|olie|O|10|\u00bd|150|s||Z|||||S420
9021030|Raasm Oliehaspel S560 Zndr.Slang 1/2 Open Vast 8560.406|1024|0|olie|O|0||150|s||V|||||S560
9021032|Raasm S420 Oliehaspel + 15 meter 1/2" slang - 8420.402|589|1|olie|O|15|\u00bd|150|s||Z|||||S420
9021034|Raasm Oliehaspel S550 15 Mtr 3/4 Open zw.100 bar.8550.411|961|0|olie|O|15|\u00be|100|s||Z|||||S550
9021035|Raasm Oliehaspel S550 20 Mtr 3/4 Open Draaib.100 bar. 8550|1099|0|olie|O|20|\u00be|100|s||Z|||||S550
9021033|Raasm Oliehaspel S550 30 Mtr 1/2 Open Draaib. 8550.406|1007|0|olie|O|30|\u00bd|150|s||Z|||||S550
9021036|Raasm Oliehaspel S550 15 Mtr 1"Open Draaib.150 bar 8550.413|1099|0|olie|O|15|1|50|s||Z|||||S550
9021045|Raasm Olie Haspel Zonder Slang 1 Vast S540 8540.400|591|1|olie|O|0||150|s||V|||||S540
9021071|Raasm Olie Haspel Zonder Slang 1/2 Draai S380 8380.400|324|0|olie|O|0||150|s||Z|||||S380
9021074|Raasm Olie Haspel Zonder Slang 1/2 Draai S420 8420.400|370|0|olie|O|0||150|s||Z|||||S420
9021072|Raasm S380 Olie Haspel + 12 meter \u215c" slang draai - 8380.401|482|0|olie|O|12|\u215c|150|s||Z|||||S380
9021075|Raasm Olie Haspel Zonder Slang 1/2 Draai S520 8520.400|463|1|olie|O|0||150|s||Z|||||S520
9021073|Raasm S380 Haspel + 17 meter 3/8" slang - zwenkbaar - 8380.402|536|0|olie|O|17|\u215c|150|s||Z|||||S380
9028037|Raasm Zwenkbeugel gegalv. 180\u00b0 tbv 420 model (nieuw)|182|1|acc|||||s|||||||S420
9024101|Raasm S390 Oliehaspel 12 Meter 3/8" slang - vast model - 8390.401|473|1|olie|O|12|\u215c|150|s||V|||||S390
9021076|Raasm Olie Haspel Zonder Slang 1 Draai S550 8550.400|645|0|olie|O|0||150|s||Z|||||S550
9051049|Raasm Rvs Waterhaspel 12M. 3/8 130\u00b0-200 Bar 8432.301|811|0|lw|W|12|\u215c|200|r||V|||||S430
9024102|Raasm S390 Olie Haspel + 17 meter 3/8" slang - vast - 8390.402|526|0|olie|O|17|\u215c|150|s||V|||||S390
9051088|Raasm S520 Waterhaspel RVS + 25M 1/2" Hygiene slang 10 bar - 8524.102|977|1|lw|W|25|\u00bd|10|r||Z|||||S520
9071013|Raasm S420 lucht- waterhaspel + 15 meter 1/2" slang - 8420.104|536|1|lw|LW|15|\u00bd|20|s||Z|||||S420
9051051|Raasm S430 RVS waterhaspel 200 bar met 18 meter \u215c" slang|889|0|lw|W|18|\u215c|200|r||V|||||S430
9071030|Raasm Lucht/Water Haspel Zndr Slang 1/2 V S530 8530.100|418|1|lw|LW|0||20|s||V|||||S530
9071078|Raasm S540 L/W/D Haspel zonder slang RVS 304 - vast - 20 bar - 8542.100|957|1|lw|LWD|0||20|r||V|||||S540
9071098|Raasm Lucht/Water Haspel 40 Mtr.3/4 Vast S560 8560.103|1752|0|lw|LW|40|\u00be|20|s||V|||||S560
9071052|Raasm Lucht/Water Haspel 30 Mtr.1/2 Vast S540 8540.106|883|0|lw|LW|30|\u00bd|20|s||V|||||S540
9071221|Raasm S520 Lucht/Water Haspel zonder slang zwenkbaar - 8520.100|435|1|lw|LW|0||20|s||Z|||||S520
9071222|Raasm Lucht/Water Haspel Zndr.Sl.1 Draai. S550 8550.100|635|1|lw|LW|0||20|s||Z|||||S550
9071224|Raasm Lucht/Water Haspel 20Mtr.3/4 Draai. S550 8550.102|1044|1|lw|LW|20|\u00be|20|s||Z|||||S550
9095401|Raasm swivelset 600 Bar KG205|64|1|acc||||600|||||||||
9108001|Raasm Lashaspel Zonder Slang 20 Bar Vast S430 - 8430.700|220|1|gas||0||20|s||V|||||S430
9095406|Raasm Slangstop Universeel klein model 1/4-3/8-1/2|11|1|acc|||||||||||||UNI
9811940|Reelcraft 1" Swivel voor Haspel 9000 Serie|176|1|acc|||||||||||||
9108040|Raasm Gashaspel Zonder Slang 20 Bar Vast S430 8430.800|392|1|gas||0||20|s||V|||||S430`;

/* ---------- data ---------- */
const DIA={'1/4':'\u00bc','3/8':'\u215c','1/2':'\u00bd','3/4':'\u00be'};
function parseRow(c){
  c=c.map(v=>v==null?'':String(v));
  const o={sku:c[0],name:c[1],price:+c[2],stock:c[3]==='1',type:c[4],med:c[5]||'',
    len:c[6]===''?null:+c[6],dia:c[7]?(DIA[c[7]]||c[7]):'',bar:c[8]===''?null:+c[8],mat:c[9]||'',
    bed:c[10]||'',uitv:c[11]||'',volt:c[12]||'',kabel:c[13]||'',ip:c[14]?+c[14]:null,kw:c[15]?+c[15]:null,serie:c[16]||''};
  o.brand=o.name.split(/[\s-]/)[0];
  if(['lw','diesel','olie','vet','gas','kabel','aard','lamp'].includes(o.type)&&!o.bed) o.bed=/slangwagen/i.test(o.name)?'H':'V';
  const k=o.kabel.match(/^(\d)G?x([\d.]+)$/); if(k){o.aders=+k[1];o.mm2=+k[2];} else if(/^[\d.]+$/.test(o.kabel)){o.mm2=+o.kabel;}
  return o;
}
let ITEMS,REELS,ACC,DATA_DATE=BUILT_DATE;
function setData(rows,date){
  const items=rows.map(parseRow).filter(o=>o.sku&&o.name&&o.price>0&&o.type);
  ITEMS=items;REELS=items.filter(i=>i.type!=='acc');ACC=items.filter(i=>i.type==='acc');if(date)DATA_DATE=date;
}
setData(RAW.trim().split('\n').map(l=>l.split('|')));
const INSTANCES=[];
const loaded={};
function loadSource(url){
  if(loaded[url])return loaded[url];
  const day=new Date().toISOString().slice(0,10);
  return loaded[url]=fetch(url+(url.includes('?')?'&':'?')+'v='+day,{cache:'no-cache'}).then(r=>{if(!r.ok)throw new Error(r.status);return r.json();}).then(j=>{
    if(!j||!Array.isArray(j.items)||j.items.length<50)throw new Error('ongeldige data');
    const d=j.generated?new Date(j.generated).toLocaleDateString('nl-NL',{day:'numeric',month:'long',year:'numeric'}):null;
    setData(j.items,d); INSTANCES.forEach(fn=>fn()); return true;
  }).catch(e=>{console.warn('[Haspelconfigurator] data-bron niet geladen, ingebouwde data wordt gebruikt:',e.message);return false;});
}
const ONSITE=/(^|\.)hamerdirect\.nl$/i.test(location.hostname);
const eur=v=>'\u20ac '+v.toLocaleString('nl-NL',{minimumFractionDigits:2,maximumFractionDigits:2});
const link=s=>(ONSITE?'':'https://www.hamerdirect.nl')+'/search?q='+s;
const tgt=ONSITE?'':' target="_blank" rel="noopener"';
const HOSE=['lucht','water','hd','diesel','olie','vet','gas'];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* ---------- iconen ---------- */
const glyph={
  air:'<path d="M30 33h9a3 3 0 1 0-3-3M30 38h12a3 3 0 1 1-3 3"/>',
  drop:'<path d="M37 28c3 4 5 7 5 9.5a5 5 0 0 1-10 0c0-2.5 2-5.5 5-9.5z"/>',
  hd:'<path d="M37 28c3 4 5 7 5 9.5a5 5 0 0 1-10 0c0-2.5 2-5.5 5-9.5z"/><path d="M28 44h18"/>',
  fuel:'<path d="M31 30h9v14h-9zM40 33l3 2v7"/>',
  oil:'<path d="M30 40h12l2-5h-6l-3-3h-5zM44 33l2 3"/>',
  grease:'<path d="M31 29h7v14h-7zM38 34h6"/>',
  bolt:'<path d="M38 27l-6 10h5l-2 9 7-11h-5z"/>',
  earth:'<path d="M37 28v8M31 36h12M33 40h8M35 44h4"/>',
  lamp:'<path d="M33 30h8l-1 8h-6zM34 41h6M36 44h2"/>',
  gas:'<path d="M32 30h4v14h-4zM38 30h4v14h-4z"/>',
  tape:'<path d="M28 34l16-4v6l-16 4z"/>'
};
const icon=g=>`<svg class="ico" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="17" cy="20" r="13"/><circle cx="17" cy="20" r="4"/><path d="M17 7v4M17 29v4M4 20h4M26 20h4"/><path d="M28 26c4 2 0 6 0 10"/><g class="gl">${glyph[g]||''}</g></svg>`;

/* ---------- toepassingen ---------- */
const GROUPS=[
 {v:'lucht',t:'Perslucht',d:'Compressor, luchtgereedschap, banden oppompen',g:'air',f:i=>i.type==='lw'&&i.med.includes('L')},
 {v:'water',t:'Water (lage druk)',d:'Schoonmaken, spoelen, werkplaats en stal',g:'drop',f:i=>i.type==='lw'&&i.med.includes('W')&&(i.bar==null||i.bar<50)},
 {v:'hd',t:'Water hogedruk',d:'Hogedrukreiniger, 100 tot 400 bar',g:'hd',f:i=>i.type==='lw'&&i.med.includes('W')&&i.bar>=50},
 {v:'diesel',t:'Diesel / brandstof',d:'Tankinstallatie, machinepark, transport',g:'fuel',f:i=>i.type==='diesel'||i.med.includes('D')},
 {v:'olie',t:'Olie & koelvloeistof',d:'Werkplaats, olie-uitgifte tot 150 bar',g:'oil',f:i=>i.type==='olie'},
 {v:'vet',t:'Vet',d:'Vetpompen, 400 tot 600 bar',g:'grease',f:i=>i.type==='vet'},
 {v:'s230',t:'Stroom 230 V',d:'Kabelhaspel voor handgereedschap en verlichting',g:'bolt',f:i=>i.type==='kabel'&&i.volt==='230v'},
 {v:'s400',t:'Krachtstroom 400 V',d:'Kabelhaspel voor machines en compressoren',g:'bolt',f:i=>i.type==='kabel'&&i.volt==='400v'},
 {v:'aard',t:'Aarding',d:'Aardingshaspel voor tankwagens en lassen',g:'earth',f:i=>i.type==='aard'},
 {v:'lamp',t:'Looplamp',d:'Haspel met ge\u00efntegreerde looplamp',g:'lamp',f:i=>i.type==='lamp'},
 {v:'gas',t:'Lasgas',d:'Dubbele slang voor zuurstof en acetyleen',g:'gas',f:i=>i.type==='gas'},
 {v:'lint',t:'Veiligheidslint',d:'Afzetlint rood/wit op een haspel',g:'tape',f:i=>i.type==='lint'}
];
const G=v=>GROUPS.find(g=>g.v===v);
const DIAS=[['\u00bc','6 mm','licht en wendbaar, blaaspistool en kleine tools'],['5/16','8 mm','allround luchtslang'],['\u215c','10 mm','standaard voor slagmoersleutels en water'],['\u00bd','13 mm','meer doorstroom, water en olie'],['\u00be','19 mm','hoog debiet, brandstof'],['1','25 mm','maximaal debiet, diesel en industrie']];
const ADVICE={
  lucht:'<b>Tip voor perslucht:</b> \u215c\u2033 (10 mm) is de standaard voor slagmoersleutels en de meeste werkplaatsgereedschappen; \u00bc\u2033 of 5/16\u2033 is lichter voor blaaspistolen en bandenpompen. Kies een werkdruk boven de maximale druk van uw compressor.',
  water:'<b>Tip voor water:</b> de meeste haspels zijn niet geschikt voor warm water; controleer de maximale temperatuur op de productpagina. Voor food- en hygi\u00ebnetoepassingen kiest u RVS.',
  hd:'<b>Tip voor hogedruk:</b> kies een werkdruk boven de pompdruk van uw reiniger en let op de watertemperatuur. Veel hogedrukhaspels worden zonder slang geleverd, zodat u zelf de juiste hogedrukslang kiest.',
  diesel:'<b>Tip voor brandstof:</b> \u00be\u2033 of 1\u2033 geeft voldoende debiet voor tankinstallaties. Haspels met Viton\u00ae-pakkingen zijn bestand tegen diesel.',
  olie:'<b>Tip voor olie:</b> \u00bd\u2033 slang tot 150 bar dekt de meeste werkplaatspompen. Open stalen modellen zijn eenvoudig te onderhouden.',
  vet:'<b>Tip voor vet:</b> vetpompen werken met 400 tot 600 bar; kies \u00bc\u2033 voor handpistolen en \u215c\u2033 bij langere afstanden.',
  s230:'<b>Tip voor 230 V:</b> een kabelhaspel levert opgerold minder vermogen dan afgerold; rol de kabel bij zware machines altijd volledig af. Kies 2,5 mm\u00b2 bij lange kabels of vermogens boven 2 kW.',
  s400:'<b>Tip voor 400 V:</b> 5-aderige kabel (3 fasen + nul + aarde) is nodig voor de meeste CEE-aansluitingen; 4-aderig heeft geen nulleider.',
  aard:'<b>Tip voor aarding:</b> voor tankwagens en ATEX-omgevingen wordt meestal 16 of 25 mm\u00b2 gebruikt; een aardingsklem is los te bestellen.',
  lamp:'<b>Tip:</b> kies 24 V voor vochtige of besloten ruimtes zoals inspectieputten.',
  gas:'<b>Tip:</b> lasgashaspels hebben een dubbele slang voor zuurstof en brandgas. Laat de installatie keuren volgens de geldende voorschriften.',
  lint:'<b>Tip:</b> een zwenkbare linthaspel is handig bij wisselende afzetrichtingen.'};

/* ---------- styling (sluit aan op Sana-thema van hamerdirect.nl; neemt --theme-* variabelen over) ---------- */
const CSS=`
:host{
  --ink:var(--theme-text_Color,#141414); --muted:var(--theme-lighterText_Color,#484848); --line:var(--theme-table_BorderColor,#CBCBCB);
  --line2:var(--theme-searchBox_BorderColor,#E6E6E6); --soft:var(--theme-tag_BackgroundColor,#F7F7F7); --tint:var(--theme-table_Row_HighlightColor,#F3FBFE);
  --action:var(--theme-button_Action_BackgroundColor,#12AC74); --action-h:var(--theme-button_Action_Hover_BackgroundColor,#139666); --action-b:var(--theme-button_Action_BorderColor,#139666);
  --ok:var(--theme-status_Ok_Color,#12AC74); --red:var(--theme-status_Failed_Color,#E72E27); --step-act:var(--theme-checkout_ActiveStepHeader_BackgroundColor,#C2C2C2);
  --r-btn:var(--theme-button_BorderRadius,25px); --r-in:var(--theme-input_BorderRadius,5px);
  --font:var(--theme-baseFontFamily,"Open Sans"),"Open Sans",Arial,sans-serif;
  display:block;color:var(--ink);font:13px/1.55 var(--font);text-align:left;
}
*{box-sizing:border-box}
h2,h3{color:var(--theme-h_Color,#141414);font-family:var(--font);margin:0;text-wrap:balance}
button{font:inherit;color:inherit}
:focus-visible{outline:2px solid var(--ink);outline-offset:2px}
.hd{display:flex;justify-content:space-between;align-items:flex-end;gap:12px;flex-wrap:wrap;margin-bottom:14px}
.hd h2{font-size:24px;font-weight:700;line-height:1.25}
.hd p{margin:4px 0 0;color:var(--muted);font-size:14px;max-width:70ch}
/* stappen: horizontale voortgangsbalk */
ol.steps{list-style:none;margin:0 0 18px;padding:0;display:flex;align-items:flex-start;width:100%}
ol.steps li{flex:1 1 0;min-width:0;position:relative}
ol.steps li::before{content:"";position:absolute;top:15px;left:calc(-50% + 18px);right:calc(50% + 18px);height:2px;background:var(--line)}
ol.steps li:first-child::before{display:none}
ol.steps li.done::before,ol.steps li.cur::before{background:var(--action)}
ol.steps button{width:100%;border:0;background:none;padding:0 4px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:6px;text-align:center}
ol.steps button:disabled{cursor:default}
ol.steps .no{width:32px;height:32px;border-radius:50%;border:2px solid var(--line);background:#fff;display:grid;place-items:center;font-size:13px;font-weight:700;color:var(--muted);position:relative;z-index:1;transition:background .12s,border-color .12s}
ol.steps .lbl{font-size:13px;font-weight:600;line-height:1.25;max-width:100%;color:var(--muted)}
ol.steps .ans{display:block;font-weight:400;font-size:11.5px;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
ol.steps li.done .no{background:var(--action);border-color:var(--action);color:#fff}
ol.steps li.done .lbl{color:var(--ink)}
ol.steps li.cur .no{background:var(--ink);border-color:var(--ink);color:#fff}
ol.steps li.cur .lbl{color:var(--ink)}
ol.steps button:not(:disabled):hover .no{border-color:var(--ink)}
ol.steps button:disabled .no,ol.steps button:disabled .lbl{opacity:.55}
@media (max-width:760px){ol.steps .ans{display:none}}
@media (max-width:520px){ol.steps .lbl{display:none}ol.steps li.cur .lbl{display:block;position:absolute;top:40px;left:50%;transform:translateX(-50%);white-space:nowrap}ol.steps{margin-bottom:34px}ol.steps .no{width:28px;height:28px}ol.steps li::before{top:13px}}
/* paneel */
.panel{border:1px solid var(--line2);border-radius:var(--r-in);padding:22px 24px;background:var(--theme-page_BackgroundColor,#fff)}
@media (max-width:560px){.panel{padding:16px 14px}}
.kicker{font-size:12px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.05em}
.panel h3.st{font-size:20.7px;font-weight:700;margin:2px 0 4px}
.intro{color:var(--muted);font-size:14px;max-width:70ch;margin:0 0 6px}
.q{margin-top:20px}
.q h4{font-size:15px;font-weight:700;margin:0 0 2px}
.help{color:var(--muted);font-size:13px;margin:0 0 10px;max-width:75ch}
.opts{display:grid;grid-template-columns:repeat(auto-fill,minmax(185px,1fr));gap:10px}
.opts.big{grid-template-columns:repeat(auto-fill,minmax(215px,1fr))}
.opt{position:relative;text-align:left;border:1px solid var(--line);border-radius:var(--r-in);background:#fff;padding:12px 14px 12px;cursor:pointer;display:flex;flex-direction:column;gap:2px;transition:border-color .12s,background .12s,box-shadow .12s}
.opt:hover:not(:disabled){border-color:var(--ink)}
.opt[aria-pressed="true"]{border-color:var(--ink);box-shadow:inset 0 0 0 1px var(--ink);background:var(--tint)}
.opt[aria-pressed="true"]::after{content:"";position:absolute;top:10px;right:10px;width:18px;height:18px;border-radius:50%;background:var(--action) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M4 8.5l2.5 2.5L12 5.5' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center/14px no-repeat}
.opt:disabled{opacity:.45;cursor:not-allowed;background:var(--soft)}
.opt .t{font-weight:600;font-size:14px;padding-right:22px}
.opt .d{font-size:12.5px;color:var(--muted);line-height:1.4}
.opt .c{font-size:12px;color:var(--muted);font-variant-numeric:tabular-nums;margin-top:4px}
.opt .c b{color:var(--ink)}
.opt.any{border-style:dashed}
.ico{width:40px;height:40px;color:var(--ink);margin-bottom:4px}
.ico .gl{color:var(--action);stroke:var(--action)}
/* knoppen: pil-vorm zoals in de shop */
.nav{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:24px;flex-wrap:wrap}
.nav .r{display:flex;gap:8px;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:38px;border:1px solid var(--theme-button_BorderColor,#141414);background:var(--theme-button_BackgroundColor,#fff);color:var(--theme-button_Color,#484848);border-radius:var(--r-btn);padding:7px 20px;font-size:14px;font-weight:600;cursor:pointer;text-decoration:none;transition:background .12s,border-color .12s,color .12s}
.btn:hover:not(:disabled){color:var(--ink);border-color:var(--muted)}
.btn.action{background:var(--action);border-color:var(--action-b);color:#fff}
.btn.action:hover:not(:disabled){background:var(--action-h);border-color:var(--action);color:#fff}
.btn:disabled{opacity:.4;cursor:not-allowed}
.btn.sm{min-height:30px;padding:4px 14px;font-size:13px}
.range{display:flex;gap:16px;align-items:center;flex-wrap:wrap}
.range input[type=range]{flex:1;min-width:200px;accent-color:var(--action)}
.range output{font-size:22px;font-weight:700;font-variant-numeric:tabular-nums;min-width:120px}
.check{display:flex;gap:10px;align-items:center;margin-top:6px;cursor:pointer;font-size:14px}
.check input{width:17px;height:17px;accent-color:var(--action)}
.skip{font-size:12.5px;color:var(--muted);background:var(--soft);border-radius:var(--r-in);padding:8px 12px;margin-top:16px}
/* statusbalk */
.bar{position:sticky;bottom:0;z-index:3;margin-top:14px;background:#fff;border:1px solid var(--line);border-radius:var(--r-in);box-shadow:0 -2px 10px rgba(20,20,20,.06);padding:10px 14px;display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}
.bar .n{font-size:20px;font-weight:700;font-variant-numeric:tabular-nums}
.bar .s{font-size:12.5px;color:var(--muted)}
/* resultaten */
.sum{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0 16px}
.chip{display:inline-flex;align-items:center;gap:6px;font-size:12.5px;padding:4px 12px;border-radius:var(--r-btn);background:var(--soft);color:var(--ink)}
.chip button{border:0;background:none;padding:0;cursor:pointer;font-size:15px;line-height:1;color:var(--muted)}
.chip button:hover{color:var(--red)}
.advice{background:var(--tint);border-left:3px solid var(--action);padding:12px 14px;margin:0 0 16px;font-size:13.5px;max-width:85ch}
.results{display:flex;flex-direction:column}
.card{display:grid;grid-template-columns:56px 1fr 200px;gap:18px;align-items:start;padding:16px 0;border-top:1px solid var(--line2)}
.card:last-child{border-bottom:1px solid var(--line2)}
@media (max-width:640px){.card{grid-template-columns:44px 1fr}.card .pr{grid-column:2}}
.card .ico{width:52px;height:52px;margin:0}
.card h4{font-size:14px;font-weight:600;margin:0;line-height:1.35}
.card h4 a{color:var(--theme-link_Color,#141414);text-decoration:none}
.card h4 a:hover{color:var(--theme-link_Hover_Color,#484848);text-decoration:underline}
.meta{font-size:12px;color:var(--muted);margin-top:2px}
.specs{display:flex;flex-wrap:wrap;gap:4px;margin-top:8px}
.specs span{font-size:11.5px;padding:2px 8px;border-radius:3px;background:var(--soft);font-variant-numeric:tabular-nums}
.badge{display:inline-block;font-size:11px;font-weight:700;background:var(--action);color:#fff;border-radius:var(--r-btn);padding:1px 10px;margin-bottom:5px}
.pr{display:flex;flex-direction:column;gap:5px;align-items:flex-end;text-align:right}
@media (max-width:640px){.pr{align-items:flex-start;text-align:left}}
.eur{font-size:22px;font-weight:700;font-variant-numeric:tabular-nums;line-height:1.1;color:var(--theme-primaryPrice_Color,#141414)}
.vat{font-size:11px;color:var(--muted)}
.stock{font-size:12.5px;display:flex;align-items:center;gap:6px}
.stock::before{content:"";width:9px;height:9px;border-radius:50%;background:var(--ok)}
.stock.n::before{background:#A9A9A9}
.acc{margin-top:10px;font-size:12.5px}
.acc b{font-weight:600}
.acc ul{margin:3px 0 0;padding-left:16px}
.acc a{color:var(--ink)}
.empty{padding:16px;border:1px dashed var(--line);border-radius:var(--r-in);margin-bottom:12px}
.foot{color:var(--muted);font-size:11.5px;margin:12px 0 0}
@media (prefers-reduced-motion:reduce){*{transition:none!important}}
`;

/* ---------- widget ---------- */
function mount(host){
  if(host.__haspel)return; host.__haspel=true; host.setAttribute('data-mounted','');
  const root=host.attachShadow?host.attachShadow({mode:'open'}):host;
  const opt={pre:host.dataset.toepassing||null,title:host.dataset.titel||'Haspelconfigurator',
    intro:host.dataset.intro||'Beantwoord een paar vragen en vind in 6 stappen de haspel die bij uw toepassing past.',
    per:+host.dataset.resultaten||10,btw:host.dataset.btw||'excl. btw',bron:host.dataset.bron||window.HAMER_HASPEL_BRON||null};
  const S={group:null,a:{},max:null,stock:false,brand:null,step:0,showAll:false,touched:{},lastSku:null};
  const idx=document.querySelectorAll('[data-hamer-haspelconfigurator],hamer-haspelconfigurator').length>1?[...document.querySelectorAll('[data-hamer-haspelconfigurator],hamer-haspelconfigurator')].indexOf(host):0;
  const KEY='hdHaspel:'+location.pathname+':'+idx;
  const save=()=>{try{sessionStorage.setItem(KEY,JSON.stringify({...S,ts:Date.now()}));}catch(e){}};
  const restore=()=>{try{const j=JSON.parse(sessionStorage.getItem(KEY)||'null');if(!j||Date.now()-j.ts>4*3600e3||!j.group||!G(j.group))return false;
    Object.assign(S,{group:j.group,a:j.a||{},max:j.max??null,stock:!!j.stock,brand:j.brand||null,step:+j.step||0,showAll:!!j.showAll,touched:j.touched||{},lastSku:j.lastSku||null});return true;}catch(e){return false;}};
  const forget=()=>{try{sessionStorage.removeItem(KEY);}catch(e){}};
  const isHose=()=>HOSE.includes(S.group);
  const isElec=()=>['s230','s400','aard','lamp'].includes(S.group);
  const lenOpts=hose=>[
    ...(hose?[{v:'0',t:'Zonder slang',d:'Alleen de haspel; slang los kiezen',f:i=>i.len===0}]:[]),
    {v:'10',t:'Tot 10 meter',d:'Compacte werkplek',f:i=>i.len>0&&i.len<=10},
    {v:'15',t:'11 \u2013 15 meter',d:'Gemiddelde werkplaats',f:i=>i.len>10&&i.len<=15},
    {v:'20',t:'16 \u2013 20 meter',d:'Grotere werkplaats of buitenterrein',f:i=>i.len>15&&i.len<=20},
    {v:'30',t:'21 \u2013 30 meter',d:'Hal, erf of wasplaats',f:i=>i.len>20&&i.len<=30},
    {v:'40',t:'Meer dan 30 meter',d:'Grote afstanden',f:i=>i.len>30}];
  const STEPS=[
   {title:'Toepassing',intro:'Wat moet er door de haspel? Dit bepaalt welke haspels in aanmerking komen.',
    qs:[{key:'group',big:true,title:'Medium of toepassing',help:'Lucht/water-haspels die ook geschikt zijn voor diesel verschijnen in beide groepen.',opts:()=>GROUPS.map(g=>({v:g.v,t:g.t,d:g.d,ico:g.g,f:g.f})),noAny:true}]},
   {title:'Bediening',intro:'Hoe wordt de haspel gebruikt en opgehangen?',
    qs:[{key:'bed',title:'Oprollen',help:'Veerbediend rolt automatisch op. Handbediend (slinger) is geschikt voor lange of zware slangen en hogedruk.',
       opts:()=>[{v:'V',t:'Veerbediend',d:'Automatisch oprollen met vergrendeling',f:i=>i.bed==='V'},{v:'H',t:'Handbediend',d:'Oprollen met slinger',f:i=>i.bed==='H'}]},
        {key:'uitv',title:'Uitvoering',help:'Zwenkbaar draait mee in de trekrichting; vast is stabieler bij hogere druk.',
       opts:()=>[{v:'V',t:'Vast',d:'Staat vast op wand, plafond of vloer',f:i=>i.uitv==='V'},{v:'Z',t:'Zwenkbaar',d:'Draait mee, minder slijtage aan de slang',f:i=>i.uitv==='Z'}]}]},
   {title:'Lengte',intro:'Hoe ver moet de slang of kabel reiken? Meet van de ophangplek tot het verste werkpunt en tel 1 \u00e0 2 meter extra.',
    qs:[{key:'len',title:()=>isHose()?'Slanglengte':(S.group==='lint'?'Lintlengte':'Kabellengte'),help:()=>isHose()?'Kies "Zonder slang" als u zelf een slang monteert of een bestaande slang hergebruikt.':'Lengte inclusief aansluitkabel.',opts:()=>lenOpts(isHose())}]},
   {title:'Specificaties',intro:'Technische eisen van uw installatie.',
    qs:[{key:'dia',when:isHose,title:'Slangdiameter (binnen)',help:'Een grotere diameter geeft meer doorstroom maar weegt meer.',
       opts:()=>DIAS.map(([v,mm,d])=>({v,t:v+'\u2033 ('+mm+')',d,f:i=>i.dia===v}))},
        {key:'bar',when:isHose,title:'Maximale werkdruk',help:'Kies minimaal de druk van uw compressor of pomp.',
       opts:()=>[{v:'a',t:'Tot 25 bar',d:'Perslucht, leidingwater, brandstof',f:i=>i.bar!=null&&i.bar<=25},{v:'b',t:'50 \u2013 150 bar',d:'Olie, koelvloeistof, middeldruk water',f:i=>i.bar>=50&&i.bar<=150},{v:'c',t:'200 \u2013 250 bar',d:'Hogedrukreinigers',f:i=>i.bar>=200&&i.bar<=250},{v:'d',t:'400 \u2013 600 bar',d:'Vet en zware hogedruk',f:i=>i.bar>=400}]},
        {key:'mm2',when:isElec,title:'Kabeldoorsnede',help:()=>S.group==='aard'?'Dikkere aardingskabel = lagere weerstand. 16 of 25 mm\u00b2 voor tankwagens en lastoepassingen.':'1,5 mm\u00b2 voor licht werk, 2,5 mm\u00b2 voor zwaardere machines en lange kabels.',
       opts:()=>[1,1.5,2.5,6,16,25].map(m=>({v:String(m),t:String(m).replace('.',',')+' mm\u00b2',d:{1:'Licht werk, verlichting',1.5:'Algemeen handgereedschap',2.5:'Zware machines, lange afstand',6:'Aarding standaard',16:'Aarding zwaar',25:'Aarding extra zwaar'}[m],f:i=>i.mm2===m}))},
        {key:'ip',when:isElec,title:'Beschermingsklasse',help:'Hoger IP-getal = beter bestand tegen stof en water.',
       opts:()=>[{v:'in',t:'IP20 \u2013 IP24',d:'Binnen, droge werkplaats',f:i=>i.ip!=null&&i.ip<=24},{v:'sp',t:'IP42 \u2013 IP44',d:'Spatwaterbestendig',f:i=>i.ip>=42&&i.ip<=44},{v:'ip65',t:'IP65',d:'Stofdicht en straalwater, buiten',f:i=>i.ip>=65}]}]},
   {title:'Materiaal',intro:'De behuizing bepaalt de levensduur in uw omgeving.',
    qs:[{key:'mat',title:'Materiaal behuizing',help:'RVS voor voedingsmiddelen, hygi\u00ebne en agressieve omgevingen. Gelakt staal voor zwaar industrieel gebruik.',
       opts:()=>[{v:'k',t:'Kunststof / ABS',d:'Licht, corrosievrij, voordelig',f:i=>i.mat==='k'},{v:'as',t:'ABS met staal',d:'Gesloten kunststof kap, stalen frame',f:i=>i.mat==='as'},{v:'s',t:'Gelakt staal',d:'Robuust voor werkplaats en industrie',f:i=>i.mat==='s'},{v:'r',t:'RVS',d:'Hygi\u00ebnisch, voor food en buiten',f:i=>i.mat==='r'||i.mat==='ar'},{v:'al',t:'Aluminium',d:'Licht en sterk',f:i=>i.mat==='al'}]}]},
   {title:'Budget',intro:'Stel uw maximale budget in en kies of de haspel direct leverbaar moet zijn.',custom:'budget'},
   {title:'Resultaat',custom:'result'}];

  const qList=()=>{const out=[];STEPS.forEach((st,si)=>(st.qs||[]).forEach(q=>{if(!q.when||q.when())out.push({...q,si});}));return out;};
  const optFn=(key,val)=>{const q=qList().find(q=>q.key===key);const o=q&&q.opts().find(o=>o.v===val);return o?o.f:null;};
  const val=x=>typeof x==='function'?x():x;
  function filtered(o={}){
    let list=S.group?REELS.filter(G(S.group).f):REELS.slice();
    for(const x of qList()){ if(x.key==='group')continue; if(o.upto!=null&&x.si>o.upto)continue; if(o.except===x.key)continue;
      const v=S.a[x.key]; if(v==null)continue; const f=optFn(x.key,v); if(f)list=list.filter(f);}
    if(!o.noBudget&&o.upto==null){ if(S.max!=null)list=list.filter(i=>i.price<=S.max); if(S.stock)list=list.filter(i=>i.stock); if(S.brand)list=list.filter(i=>i.brand===S.brand);}
    return list;
  }
  const sorted=()=>filtered().sort((a,b)=>(b.stock-a.stock)||(a.price-b.price));
  function applicable(q,si){ if(q.key==='group')return true; const base=filtered({upto:si,except:q.key,noBudget:true}); return q.opts().filter(o=>base.some(o.f)).length>=2; }
  function stepApplicable(si){const st=STEPS[si];if(st.custom==='budget')return !!S.group&&filtered({noBudget:true}).length>1;if(st.custom)return !!S.group;return (st.qs||[]).some(q=>(!q.when||q.when())&&applicable(q,si));}
  const label=(key,v)=>{const q=qList().find(q=>q.key===key);const o=q&&q.opts().find(o=>o.v===v);return o?o.t:v;};

  root.innerHTML=`<style>${CSS}</style><div class="hd"><div><h2>${esc(opt.title)}</h2><p>${esc(opt.intro)}</p></div></div>
   <ol class="steps" aria-label="Stappen"></ol><div class="panel" aria-live="polite"></div>
   <div class="bar" role="status"><div><span class="n"></span> <span class="bl"></span><div class="s"></div></div><button class="btn action go" type="button">Toon resultaat</button></div>
   <p class="foot"></p>`;
  const q$=s=>root.querySelector(s);

  function renderSteps(){
    q$('.steps').innerHTML=STEPS.map((st,si)=>{
      const app=si===0||stepApplicable(si); let ans='';
      if(si===0&&S.group)ans=G(S.group).t;
      else if(st.qs){ans=st.qs.filter(q=>(!q.when||q.when())&&S.a[q.key]!=null).map(q=>label(q.key,S.a[q.key])).join(' \u00b7 '); if(!ans&&S.group&&!app)ans='n.v.t.'; else if(!ans&&si<S.step)ans='geen voorkeur';}
      else if(st.custom==='budget'&&S.group&&!app)ans='n.v.t.';
      else if(st.custom==='budget'&&S.group)ans=[S.max!=null?'max '+eur(S.max):'',S.stock?'op voorraad':'',S.brand||''].filter(Boolean).join(' \u00b7 ');
      const cls=si===S.step?'cur':(si<S.step?'done':'');
      return `<li class="${cls}"><button type="button" data-step="${si}" ${!S.group&&si>0?'disabled':''} ${si===S.step?'aria-current="step"':''}><span class="no">${si<S.step?'\u2713':si+1}</span><span class="lbl">${st.title}<span class="ans">${ans?esc(ans):'&nbsp;'}</span></span></button></li>`;
    }).join('');
  }
  function optHTML(q,o,base,sel){
    const m=base.filter(o.f),n=m.length,min=n?Math.min(...m.map(i=>i.price)):0;
    return `<button type="button" class="opt" data-k="${q.key}" data-v="${o.v}" aria-pressed="${sel===o.v}" ${n?'':'disabled'}>${o.ico?icon(o.ico):''}<span class="t">${o.t}</span>${o.d?`<span class="d">${o.d}</span>`:''}<span class="c"><b>${n}</b> ${n===1?'haspel':'haspels'}${n?' \u00b7 vanaf '+eur(min):''}</span></button>`;
  }
  function budgetHTML(){
    const base=filtered({noBudget:true}); if(!base.length)return '<p class="empty">Geen haspels met deze keuzes. Ga terug en verruim een eerdere keuze.</p>';
    const pr=base.map(i=>i.price),lo=Math.floor(Math.min(...pr)),hi=Math.ceil(Math.max(...pr));
    const cur=S.max==null?hi:Math.min(Math.max(S.max,lo),hi);
    const brands=[...new Set(base.map(i=>i.brand))].sort();
    let h=`<section class="q"><h4>Maximale prijs per stuk (${esc(opt.btw)})</h4><p class="help">Prijzen in deze selectie lopen van ${eur(lo)} tot ${eur(hi)}.</p>
      <div class="range"><input type="range" class="max" min="${lo}" max="${hi}" step="1" value="${cur}" aria-label="Maximale prijs"><output class="maxOut">${eur(cur)}</output></div></section>
      <section class="q"><h4>Levering</h4><label class="check"><input type="checkbox" class="stk" ${S.stock?'checked':''}> Alleen haspels die op voorraad zijn</label></section>`;
    if(brands.length>1)h+=`<section class="q"><h4>Merk</h4><div class="opts"><button type="button" class="opt any" data-brand="" aria-pressed="${!S.brand}"><span class="t">Alle merken</span><span class="c"><b>${base.length}</b> haspels</span></button>`+
      brands.map(b=>`<button type="button" class="opt" data-brand="${esc(b)}" aria-pressed="${S.brand===b}"><span class="t">${esc(b)}</span><span class="c"><b>${base.filter(i=>i.brand===b).length}</b> haspels</span></button>`).join('')+`</div></section>`;
    return h;
  }
  function specChips(i){
    const s=[];
    if(i.len!=null)s.push(i.len===0?'zonder slang':String(i.len).replace('.',',')+' m');
    if(i.dia)s.push(i.dia+(/mm/.test(i.dia)?'':'\u2033'));
    if(i.bar)s.push(i.bar+' bar');
    if(i.kabel)s.push(i.kabel.replace('x',' \u00d7 ').replace('.',',')+' mm\u00b2');
    if(i.volt)s.push(i.volt.toUpperCase());
    if(i.ip)s.push('IP'+i.ip);
    if(i.kw)s.push(String(i.kw).replace('.',',')+' kW afgerold');
    const mat={k:'kunststof',as:'ABS/staal',s:'gelakt staal',r:'RVS',ar:'ABS/RVS',al:'aluminium'}[i.mat]; if(mat)s.push(mat);
    if(i.bed)s.push(i.bed==='H'?'handbediend':'veerbediend');
    if(i.uitv)s.push(i.uitv==='Z'?'zwenkbaar':'vast');
    if(i.serie)s.push('serie '+i.serie);
    return s.map(x=>`<span>${esc(x)}</span>`).join('');
  }
  function accFor(i){
    const out=[];
    if(i.serie){const sn=i.serie.replace('S','');
      ACC.forEach(a=>{if(a.serie===i.serie||(a.name.includes(i.serie)&&/S\d{3}/.test(i.serie))||(a.serie==='S290'&&['S290','S330','S390','S430'].includes(i.serie))||a.serie===sn)out.push(a);});}
    if(i.brand==='Mavel'){const md=(i.name.match(/\b(major|master|classic|dynamic|compact)\b/i)||[])[1];if(md)ACC.filter(a=>/slow ?motion/i.test(a.name)&&new RegExp('\\b'+md+'\\b','i').test(a.name)).forEach(a=>out.push(a));}
    if(i.brand==='Ramex')ACC.filter(a=>a.serie==='Ramex').forEach(a=>out.push(a));
    if(i.type==='aard')ACC.filter(a=>a.serie==='AARD').forEach(a=>out.push(a));
    if(isHose()&&i.len>0)ACC.filter(a=>a.serie==='UNI'&&/slangstop/i.test(a.name)).forEach(a=>out.push(a));
    if(i.len===0&&['lucht','water'].includes(S.group))ACC.filter(a=>a.serie==='SET'&&a.med.includes('L')).forEach(a=>out.push(a));
    if(i.len===0&&S.group==='diesel')ACC.filter(a=>a.serie==='SET'&&a.med.includes('D')).forEach(a=>out.push(a));
    if(i.len===0&&S.group==='hd')ACC.filter(a=>a.serie==='SET'&&a.med==='W').forEach(a=>out.push(a));
    return [...new Map(out.map(a=>[a.sku,a])).values()].slice(0,4);
  }
  function resultHTML(){
    const list=sorted(); const chips=[`<span class="chip">${G(S.group).t}</span>`];
    qList().forEach(q=>{if(q.key!=='group'&&S.a[q.key]!=null){const l=label(q.key,S.a[q.key]);chips.push(`<span class="chip">${l}<button type="button" data-clear="${q.key}" aria-label="Verwijder ${esc(l)}">\u00d7</button></span>`);}});
    if(S.max!=null)chips.push(`<span class="chip">max ${eur(S.max)}<button type="button" data-clear="max" aria-label="Verwijder budget">\u00d7</button></span>`);
    if(S.stock)chips.push(`<span class="chip">op voorraad<button type="button" data-clear="stock" aria-label="Verwijder voorraadfilter">\u00d7</button></span>`);
    if(S.brand)chips.push(`<span class="chip">${esc(S.brand)}<button type="button" data-clear="brand" aria-label="Verwijder merk">\u00d7</button></span>`);
    let h=`<p class="intro">${list.length?`${list.length} ${list.length===1?'haspel past':'haspels passen'} bij uw keuzes. Op voorraad eerst, daarna op prijs.`:'Geen haspel voldoet aan alle keuzes.'}</p><div class="sum">${chips.join('')}</div>`;
    if(ADVICE[S.group])h+=`<div class="advice">${ADVICE[S.group]}</div>`;
    if(!list.length){
      const tries=[];
      qList().forEach(q=>{if(q.key!=='group'&&S.a[q.key]!=null){const sv=S.a[q.key];delete S.a[q.key];const n=filtered().length;S.a[q.key]=sv;if(n)tries.push(`<button type="button" class="btn sm" data-clear="${q.key}">"${label(q.key,sv)}" loslaten (${n})</button>`);}});
      if(S.max!=null){const m=S.max;S.max=null;const n=filtered().length;S.max=m;if(n)tries.push(`<button type="button" class="btn sm" data-clear="max">Budget verwijderen (${n})</button>`);}
      if(S.stock){S.stock=false;const n=filtered().length;S.stock=true;if(n)tries.push(`<button type="button" class="btn sm" data-clear="stock">Ook niet-voorradig (${n})</button>`);}
      h+=`<div class="empty"><p style="margin-top:0">Versoepel \u00e9\u00e9n keuze om alternatieven te zien:</p><div style="display:flex;gap:8px;flex-wrap:wrap">${tries.join('')||'<span>Begin opnieuw met een andere toepassing.</span>'}</div></div>`;
    }
    const show=S.showAll?list:list.slice(0,opt.per);
    h+=`<div class="results">`+show.map((i,ix)=>{const acc=accFor(i);
      return `<article class="card" data-sku="${i.sku}">${icon(G(S.group).g)}<div>${ix===0?'<span class="badge">Beste match</span>':''}<h4><a href="${link(i.sku)}"${tgt}>${esc(i.name)}</a></h4><div class="meta">${esc(i.brand)} \u00b7 Artikelnummer ${i.sku}</div><div class="specs">${specChips(i)}</div>
      ${acc.length?`<div class="acc"><b>Past erbij</b><ul>${acc.map(a=>`<li><a href="${link(a.sku)}"${tgt}>${esc(a.name)}</a> \u2013 ${eur(a.price)}</li>`).join('')}</ul></div>`:''}</div>
      <div class="pr"><span class="eur">${eur(i.price)}</span><span class="vat">${esc(opt.btw)}</span><span class="stock ${i.stock?'y':'n'}">${i.stock?'Op voorraad':'Niet op voorraad'}</span><a class="btn action sm" href="${link(i.sku)}"${tgt}>Bekijk product</a></div></article>`;}).join('')+`</div>`;
    if(list.length>opt.per&&!S.showAll)h+=`<div class="nav"><button type="button" class="btn more">Toon alle ${list.length} haspels</button></div>`;
    h+=`<div class="nav"><button type="button" class="btn prev">Vorige</button><span class="r"><button type="button" class="btn copy">Kopieer advies</button><button type="button" class="btn reset">Opnieuw beginnen</button></span></div>`;
    return h;
  }
  function renderPanel(){
    const st=STEPS[S.step]; let h=`<div class="kicker">Stap ${S.step+1} van ${STEPS.length}</div><h3 class="st">${st.custom==='result'?'Uw haspeladvies':st.title}</h3>`;
    if(st.intro)h+=`<p class="intro">${st.intro}</p>`;
    if(st.custom==='budget')h+=budgetHTML();
    else if(st.custom==='result')h+=resultHTML();
    else{ const skipped=[];
      for(const q of st.qs){ if(q.when&&!q.when())continue;
        if(!applicable(q,S.step)){skipped.push(val(q.title));continue;}
        const base=q.key==='group'?REELS:filtered({upto:S.step,except:q.key,noBudget:true}); const help=val(q.help);
        h+=`<section class="q"><h4>${val(q.title)}</h4>${help?`<p class="help">${help}</p>`:''}<div class="opts ${q.big?'big':''}">`;
        if(!q.noAny)h+=`<button type="button" class="opt any" data-k="${q.key}" data-v="" aria-pressed="${S.a[q.key]==null}"><span class="t">Geen voorkeur</span><span class="d">Alle opties tonen</span><span class="c"><b>${base.length}</b> haspels</span></button>`;
        const sel=q.key==='group'?S.group:S.a[q.key];
        h+=q.opts().map(o=>optHTML(q,o,base,sel)).join('')+`</div></section>`;
      }
      if(skipped.length)h+=`<p class="skip">Niet van toepassing voor deze keuze: ${skipped.join(', ').toLowerCase()}.</p>`;
    }
    if(st.custom!=='result')h+=`<div class="nav"><button type="button" class="btn prev" ${S.step===0?'disabled':''}>Vorige</button><button type="button" class="btn action next" ${S.group?'':'disabled'}>${S.step===STEPS.length-2?'Toon resultaat':'Volgende stap'}</button></div>`;
    q$('.panel').innerHTML=h;
  }
  function renderBar(){
    const list=S.group?filtered():[];
    q$('.bar .n').textContent=S.group?list.length:REELS.length;
    q$('.bar .bl').textContent=S.group?(list.length===1?'haspel past':'haspels passen'):'haspels in het assortiment';
    q$('.bar .s').textContent=S.group?(list.length?'vanaf '+eur(Math.min(...list.map(i=>i.price)))+' '+opt.btw+' \u00b7 '+list.filter(i=>i.stock).length+' op voorraad':'Versoepel een keuze'):'Kies eerst een toepassing';
    const g=q$('.bar .go'); g.disabled=!S.group; g.style.display=S.step===STEPS.length-1?'none':'';
  }
  const render=()=>{if(S.group&&!stepApplicable(STEPS.length-2)){S.max=null;S.stock=false;S.brand=null;}renderSteps();renderPanel();renderBar();save();q$('.foot').textContent='Assortiment en prijzen: stand '+DATA_DATE+'. Actuele prijs en voorraad staan op de productpagina.';};
  function go(step){
    let s=step;const dir=step>=S.step?1:-1;
    while(s>0&&s<STEPS.length-1&&!stepApplicable(s))s+=dir;
    S.step=Math.max(0,Math.min(STEPS.length-1,s));S.showAll=false;render();
    const top=host.getBoundingClientRect().top; if(top<0)host.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
  }
  function stepDone(si){const st=STEPS[si];if(!st.qs)return false;const qs=st.qs.filter(q=>(!q.when||q.when())&&applicable(q,si));return qs.length>0&&qs.every(q=>q.key==='group'?!!S.group:S.touched[q.key]);}
  let advT=null;
  const autoNext=()=>{clearTimeout(advT);if(stepDone(S.step)){const from=S.step;advT=setTimeout(()=>{if(S.step===from)go(S.step+1);},260);}};
  function cleanup(){
    qList().forEach(q=>{if(q.key==='group'||S.a[q.key]==null)return;const f=optFn(q.key,S.a[q.key]);const base=filtered({upto:q.si,except:q.key,noBudget:true});if(!f||!base.some(f))delete S.a[q.key];});
    Object.keys(S.a).forEach(k=>{if(!qList().some(q=>q.key===k))delete S.a[k];});
  }
  root.addEventListener('click',e=>{
    const a=e.target.closest('a[href]'); if(a){const card=a.closest('article.card');if(card){S.lastSku=card.dataset.sku;save();}return;}
    const b=e.target.closest('button'); if(!b)return; const c=b.classList;
    if(b.dataset.step!=null){go(+b.dataset.step);return;}
    if(b.dataset.k){const k=b.dataset.k,v=b.dataset.v;
      if(k==='group'){if(S.group!==v){S.group=v;S.a={};S.max=null;S.brand=null;S.stock=false;S.touched={};}render();autoNext();return;}
      if(v==='')delete S.a[k];else S.a[k]=v;S.touched[k]=1;cleanup();render();autoNext();return;}
    if(b.dataset.brand!=null){S.brand=b.dataset.brand||null;render();return;}
    if(b.dataset.clear){const k=b.dataset.clear;if(k==='max')S.max=null;else if(k==='stock')S.stock=false;else if(k==='brand')S.brand=null;else delete S.a[k];render();return;}
    if(c.contains('next'))return go(S.step+1);
    if(c.contains('go'))return go(STEPS.length-1);
    if(c.contains('prev'))return go(S.step-1);
    if(c.contains('more')){S.showAll=true;render();return;}
    if(c.contains('reset')){forget();S.touched={};S.lastSku=null;S.group=opt.pre&&G(opt.pre)?opt.pre:null;S.a={};S.max=null;S.stock=false;S.brand=null;go(S.group?1:0);return;}
    if(c.contains('copy')){
      const list=sorted().slice(0,5), base=ONSITE?location.origin:'https://www.hamerdirect.nl';
      const keuzes=[G(S.group).t,...qList().filter(q=>q.key!=='group'&&S.a[q.key]!=null).map(q=>label(q.key,S.a[q.key])),S.max!=null?'max '+eur(S.max):'',S.stock?'op voorraad':'',S.brand||''].filter(Boolean).join(', ');
      const txt='Haspeladvies \u2013 '+keuzes+'\n\n'+list.map((i,n)=>`${n+1}. ${i.name} (art. ${i.sku}) \u2013 ${eur(i.price)} ${opt.btw} \u2013 ${i.stock?'op voorraad':'niet op voorraad'}\n   ${base}/search?q=${i.sku}`).join('\n');
      const done=t=>{b.textContent=t;setTimeout(()=>b.textContent='Kopieer advies',1800);};
      try{navigator.clipboard.writeText(txt).then(()=>done('Gekopieerd'),()=>done('Kopi\u00ebren niet gelukt'));}catch(err){done('Kopi\u00ebren niet gelukt');}
    }
  });
  root.addEventListener('input',e=>{if(e.target.classList.contains('max')){S.max=+e.target.value;q$('.maxOut').textContent=eur(S.max);renderSteps();renderBar();}});
  root.addEventListener('change',e=>{
    if(e.target.classList.contains('stk')){S.stock=e.target.checked;renderSteps();renderBar();}
    if(e.target.classList.contains('max'))render();
  });
  const restored=restore();
  if(!restored&&opt.pre&&G(opt.pre)){S.group=opt.pre;S.step=1;while(S.step<STEPS.length-1&&!stepApplicable(S.step))S.step++;}
  if(restored){S.step=Math.min(S.step,STEPS.length-1);while(S.step>0&&S.step<STEPS.length-1&&!stepApplicable(S.step))S.step++;}
  render();
  if(restored&&S.lastSku&&S.step===STEPS.length-1){const want=S.lastSku;
    if(!S.showAll&&!sorted().slice(0,opt.per).some(i=>i.sku===want)&&sorted().some(i=>i.sku===want)){S.showAll=true;render();}
    requestAnimationFrame(()=>{const el=root.querySelector('article.card[data-sku="'+want+'"]');if(el)el.scrollIntoView({block:'center'});});}
  INSTANCES.push(()=>{cleanup();if(S.group&&!REELS.some(G(S.group).f)){S.group=null;S.step=0;}render();});
  if(opt.bron)loadSource(opt.bron);
}
function init(){document.querySelectorAll('[data-hamer-haspelconfigurator],hamer-haspelconfigurator').forEach(mount);}
window.HamerHaspelConfigurator={init,mount};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
/* Sana is een single-page app: nieuwe content-blokken na navigatie ook oppakken */
if('MutationObserver' in window)new MutationObserver(()=>{if(document.querySelector('[data-hamer-haspelconfigurator]:not([data-mounted]),hamer-haspelconfigurator:not([data-mounted])')){document.querySelectorAll('[data-hamer-haspelconfigurator],hamer-haspelconfigurator').forEach(el=>{el.setAttribute('data-mounted','');mount(el);});}}).observe(document.documentElement,{childList:true,subtree:true});
})();
