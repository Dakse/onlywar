(window.webpackJsonponlywar=window.webpackJsonponlywar||[]).push([[0],{36:function(a,e,i){a.exports=i(46)},41:function(a,e,i){},46:function(a,e,i){"use strict";i.r(e);var n=i(0),r=i.n(n),o=i(7),t=i.n(o),s=(i(41),i(22)),z=i(15),c=i(28),u=i(29),l=i(32),w=i(66),y=i(64),d=i(65),p=i(67),k=i(47);function j(a,e){return Math.floor(Math.random()*a)+1}var g=function(a){function e(a){var i;return Object(s.a)(this,e),(i=Object(c.a)(this,Object(u.a)(e).call(this,a))).state={d100:null,rolltype:"none",action:""},i}return Object(l.a)(e,a),Object(z.a)(e,[{key:"searchForRolls",value:function(a,e){var i="battlefield"===e?function(a){return[{value:"1",string:"Sojuszniczy Macarius do\u0142\u0105cza na pole bitwy."},{value:"2",string:"Sojuszniczy Leman Russ Vanquisher do\u0142\u0105cza na pole bitwy."},{value:"3",string:"Sojuszniczy Leman Russ do\u0142\u0105cza na pole bitwy."},{value:"4",string:"Nagle z nieba sypie si\u0119 grad pocisk\xf3w boltowych kt\xf3re szatkuj\u0105 pozycje wroga. Thunderbolt przelatuje nad polem bitwy zrzucaj\u0105c dwie bomby na wrogie pozycje."},{value:"5-6",string:"Vox-Operator otrzymuje komunikat \u017ce bateria Bazyliszk\xf3w jest gotowa do strza\u0142u."},{value:"7-8",string:"Przez pole bitwy przetacza si\u0119 og\u0142uszaj\u0105cy huk, nagle przez \u015brodek pola walki przetacza si\u0119 zestrzelony Dakka-jet. Na rzucie parzystym pilot jest \u017cywy i gotowy do bitki."},{value:"9-10",string:"Nagle &D10+10& metr\xf3w od gracza wybucha pocisk artyleryjski, sw\xf3j czy wr\xf3g, &D10+3& pociski Earthshaker\xf3w zaczynaj\u0105 spada\u0107 w losowej odleg\u0142o\u015bc &D100+10& od \u015brodka pola bitwy."},{value:"11-12",string:"W kierunku graczy sypi\u0105 si\u0119 wi\u0105zki laserowe. Na pole bitwy przyby\u0142a wroga Chimera ze wsparciem &D6+6& przeciwnik\xf3w."},{value:"13-14",string:"S\u0142yszycie \u0142opotanie wirnik\xf3w. Warkopta przelatuje nisko nad ziemi\u0105 i zrzuca &D10+2& ork\xf3w."},{value:"15-16",string:"Przez Vox przewija si\u0119 ostrze\u017cenie o dw\xf3ch Wartrukkach wype\u0142nionych orkami, kt\xf3re przyb\u0119d\u0105 za &D10+2& rund."},{value:"17-18",string:"Wrogi Oficer! Je\u015bli go zabijecie, wrogie si\u0142y pogr\u0105\u017caj\u0105 si\u0119 w chaosie przez &D10+4& tur!"},{value:"19-20",string:"Gdzie\u015b przez g\u0142o\u015bniki zostaje nadana zagrzewaj\u0105ca do walki przemowa ecclesiarchy. Wszyscy dostaj\u0105 +10 do WS, BS, WP i unik\xf3w na 2 tury."},{value:"21-22",string:"Nagle pozycje wroga wybuchaj\u0105 \u017cywym ogniem! Kriegowcy musieli wysadzi\u0107 jeden ze swoich podkop\xf3w\u2026 ka\u017cdy z\u0142apany w zasi\u0119gu eksplozji (25 metr\xf3w) dostaje &2D10& nieuchronnych obra\u017ce\u0144 i jest podpalony."},{value:"23-24",string:"Przyby\u0142y posi\u0142ki! Na pole bitwy wkracza &D10+2& wrogiej piechoty."},{value:"25-26",string:"Komunikacja zerwana! Tracicie kontakt przez Vox!"},{value:"27-28",string:"Z\u0142amani! Z jakiego\u015b powodu wr\xf3g zaczyna panikowa\u0107. Przeciwnicy musz\u0105 wykona\u0107 test si\u0142y woli na -20 aby pozosta\u0107 na polu bitwy, albo wycofuj\u0105 si\u0119 na dalsze pozycje."},{value:"29-30",string:"Przyby\u0142y posi\u0142ki! Na pole bitwy wkracza &D10+2& sojuszniczej piechoty."},{value:"31-32",string:"Propaganda wroga! Przez vox-castery zostaje nada przemowa wrogiego dow\xf3dcy! Je\u015bli gracze nie zniszcz\u0105 g\u0142o\u015bnika w ci\u0105gu 2 tur przeciwnicy dostan\u0105 +10 do WS, BS, WP i unik\xf3w na 2 tury."},{value:"33-34",string:"Nad polem bitwy zaczyna opada\u0107 mg\u0142a, -10 BS i Per."},{value:"35-36",string:"Przez Vox dostajecie komunikat od pobliskiej dru\u017cyny ci\u0119\u017ckiego mo\u017adzierza \u017ce s\u0105 gotowi do udzielenia wsparcia."},{value:"37-38",string:"Na wasze pozycje zostaje zrzucone zaopatrzenie\u2026 skrzynie s\u0105 wype\u0142nione mono bagnetami."},{value:"39-40",string:"Widzicie jak na \u015brodku pola bitwy zapada si\u0119 ziemia, z kurzu  kt\xf3ry powstaje wybiega &D10+2& In\u017cynier\xf3w Korpus\xf3w \u015amierci z Krieg (parzyste)/(nieparzyste)Banda Chopakuff z toporami."},{value:"41-42",string:"Ciemne chmury przetaczaj\u0105 si\u0119 na niebie, huk piorunu rozpoczyna oberwanie chmury. Pole bitwy zamienia si\u0119 \u015bliskie grz\u0119zawisko i wszystkie testy WS i uniki maj\u0105 -20, ataki BS i testy percepcji -10."},{value:"43-44",string:"Burza piaskowa/lodowa! Widoczno\u015b\u0107 spada do 3 metr\xf3w, ka\u017cdy kto nie znajdzie os\u0142ony co tur\u0119 dostaje &D10+3& obra\u017ce\u0144 ignoruj\u0105cych pancerz!"},{value:"45",string:"Zaopatrzenie! Przez wasze linie przebiega grupa gwardzist\xf3w rozdaj\u0105ca granaty!(od\u0142amkowe) Niech ka\u017cdy rzuci D5 na to ile granat\xf3w dostanie."},{value:"46",string:"Zaopatrzenie! Przez wasze linie przebiega grupa gwardzist\xf3w rozdaj\u0105ca granaty! (kraki) Niech ka\u017cdy rzuci D5 na to ile granat\xf3w dostanie."},{value:"47-48",string:"Nagle z wojennego py\u0142u, kurzu i dymu wybiega &2D6+2& zagubionych Je\u017ad\u017ac\xf3w \u015amierci, kt\xf3rzy przebiegaj\u0105 dalej przez pole bitwy ostrzeliwuj\u0105c wrog\xf3w (nieparzyste)/(parzyste) rzucaj\u0105 si\u0119 na przeciwnik\xf3w."},{value:"49-50",string:"Na pole bitwy wkracza sojuszniczy Sentinel.[1-5](Multilaser),[6-7](Heavy Flamer),[8-9](Autocannon),[10](Lascannon)"},{value:"51-52",string:"Braterski Ogie\u0144! Wasi zaczynaj\u0105 wali\u0107 do was z broni r\u0119cznej!"},{value:"53-54",string:"Chaos komunikacyjny! Wszelkie pr\xf3by u\u017cycia Voxa maj\u0105 -20!"},{value:"55-56",string:"Monitorum spierdoli\u0142o i zrzuci\u0142o wam zaopatrzenie (rzu\u0107 100 na logi)"},{value:"57-58",string:"Lotnik! Padnij! Orkowa maszyna przelatuje w losowym kierunku zrzucaj\u0105c 3 bomby w miejscach intensywnej walki."},{value:"59-60",string:"Battlewagon wype\u0142niony orkami przebija si\u0119 przez wrogie lini\u0119."},{value:"61-62",string:"Do waszych linii przebiega goniec z innego regimentu, kt\xf3ry zaczyna b\u0142aga\u0107 was o skorzystanie z Voxa, poniewa\u017c ich zosta\u0142 zniszczony. Problem w tym \u017ce ma ci\u0119\u017cki do zrozumienia akcent i kto\u015b musi zda\u0107 Linguistic Low Gothic na -10 \u017ceby go zrozumie\u0107. Je\u015bli zrozumiej\u0105 i pozwol\u0105 mu na to, za 6 tur rozpocznie si\u0119 bombardowanie Earthshakerami na ca\u0142ej linii frontu."},{value:"63-64",string:"Nagle nawa\u0142nica artylerii po obu stronach narasta. Ka\u017cdy kto nie padnie na gleb\u0119 i nie znajdzie os\u0142ony dostaje zb\u0142\u0105kanym od\u0142amkiem zadaj\u0105cym obra\u017cenia &2D10&, je\u015bli tylko pad\u0142 na ziemi\u0119 mo\u017ce unika\u0107 obra\u017ce\u0144."},{value:"65-66",string:"Zasadzka! Z ukrytego tunelu w niedawno zaj\u0119tych pozycjach wybiega &D6+4& \u017co\u0142nierzy wroga!"},{value:"67-68",string:"Zb\u0142\u0105kany pocisk mo\u017adzierzowy otwiera dziur\u0119 z ziemi w kt\xf3rej by\u0142y uwi\u0119zione Gretchiny zaganiaj\u0105ce Squigi obwi\u0105zane materia\u0142ami wybuchowymi..."},{value:"69-70",string:"Na pole bitwy wkracza wrogi Sentinel.[1-5](Multilaser),[6-7](Heavy Flamer),[8-9](Autocannon),[10](Lascannon)"},{value:"71-72",string:"Wrogi Psyker!"},{value:"73-74",string:"Nagle w stron\u0119 wroga sypie si\u0119 grad wi\u0105zek laserowych, przyby\u0142a sojusznicza Chimera z &D6+6& gwardzistami."},{value:"75-76",string:"Na wasze pozycje spadaj\u0105 pociski dymne daj\u0105ce os\u0142on\u0119 wrogim piechurom\u2026 W dymie widzicie tylko na 3 metry.Bagnet na bro\u0144 i saperki w d\u0142o\u0144!"},{value:"77-78",string:"Napalm! Na gleb\u0119! Nad waszymi g\u0142owami przelatuj\u0105 sojusznicze maszyny kt\xf3re zrzucaj\u0105 bomby zapalaj\u0105ce na ca\u0142ej linii zadaj\u0105cych &3D10+8& obra\u017ce\u0144 wszystkim kt\xf3rzy nie znajd\u0105 os\u0142ony w nast\u0119pnej turze."},{value:"79-80",string:"Ryk pi\u0142 i silnik\xf3w przebija si\u0119 przez zgie\u0142k bitwy, na polu walki pojawia si\u0119 &D6& Deff Dread\xf3w"},{value:"81-82",string:"Przez Vox przetacza si\u0119 informacja \u017ce by\u0142 kr\xf3tkotrwa\u0142y wy\u0142om w waszych liniach! Za 10 tur [1-4](dwie dru\u017cyny piechoty zaatakuj\u0105 was od ty\u0142u.),[5-7](dwa Sentinele zaatakuj\u0105 was z flanki.),[8-9](Chimera przejedzie na wasze ty\u0142y i roz\u0142aduje 12 \u017co\u0142nierzy z ci\u0119\u017ckim miotaczem.),[10](spotkacie si\u0119 z HELLHOUNDEM!)"},{value:"83-84",string:"Powoli narasta p\u0119dz\u0105cy wiatr wzbijaj\u0105c w powietrze tumany py\u0142u. Wszystkie testy percepcji i BS s\u0105 na -20."},{value:"85-86",string:"Grot Tank przeje\u017cd\u017ca przez pole bitwy losowo atakuj\u0105c strony konfliktu."},{value:"87-88",string:"Na pozycje wroga spadaj\u0105 pociski gazowe! Lepiej za\u0142\xf3\u017ccie maski ochronne!"},{value:"89-90",string:"WAAAGH! Z pobliskich tuneli/zabudowa\u0144 wysypuje si\u0119 &2D10+10& zielonosk\xf3rych!"},{value:"91-92",string:"Ryk pi\u0142 i silnik\xf3w przebija si\u0119 przez zgie\u0142k bitwy, widzicie 2 KILLA KANY!"},{value:"93-94",string:"Wr\xf3g przej\u0105\u0142 Vox! Dostajecie fa\u0142szywe rozkazy. Test int -20 na rozgryzienie co jest prawd\u0105 a co nie."},{value:"95-96",string:"Kto\u015b co\u015b spierdoli\u0142 i sojusznicza artyleria zaczyna ostrzeliwa\u0107 wasze pozycje. Musicie nawi\u0105za\u0107 kontakt i przekona\u0107 dow\xf3dc\u0119, \u017ce wasze pozycje nie s\u0105 stracone."},{value:"97",string:"Ogie\u0144 zaporowy artylerii spada na pozycje graczy, os\u0142aniaj\u0105c natarcie plutonu piechoty."},{value:"98",string:"Wrogi Leman Russ do\u0142\u0105cza do bitwy."},{value:"99",string:"Wrogi Malcador do\u0142\u0105cza do bitwy."},{value:"100",string:"Wrogi Macharius do\u0142\u0105cza do bitwy."}].find(function(e){if(e.value.includes("-")){var i=e.value.split("-");return a>=parseInt(i[0])&&a<=parseInt(i[1])}return a===parseInt(e.value)})}(a).string:function(a){return[{value:"1",string:"Podczo\u0142gujesz si\u0119 do jednego z trup\xf3w i obracasz go z brzucha na plecy, pod nim znajdujesz [1-3](miecz \u0142a\u0144cuchowy najlepszej jako\u015bci),[4-6](hotshot laspistol najlepszej jako\u015bci),[8]( pistolet boltowy najlepszej jako\u015bci,[9] (dobrej jako\u015bci miecz energetyczny),[10]( pistolet plazmowy)"},{value:"2",string:"Patrz\u0105c do jednej z dziur znajdujecie zapomniany sk\u0142ad amunicji, kt\xf3ry przez ci\u0105g\u0142e walki musia\u0142 si\u0119 zawali\u0107. W \u015brodku znajduje si\u0119 skrzynia amunicji i skrzynka granat\xf3w od\u0142amkowych (24)."},{value:"3",string:"Znajdujesz trupa kt\xf3ry posiada [1-8](bandouliere z 10 granatami od\u0142amkowymi),[9-10](teczk\u0119 z 5 bombami rurowymi)"},{value:"4",string:"Znajdujecie wrak chimery, cho\u0107 wi\u0119kszo\u015b\u0107 pojazdu zosta\u0142a rozerwana eksplozj\u0105 to w cz\u0119\u015bci pasa\u017cerskiej znajduje si\u0119 nietkni\u0119ty Combat Shotgun najlepszej jako\u015bci z &D4+1& magazynkami."},{value:"5",string:"Znajdujecie martwego medyka kt\xf3ry ma pe\u0142n\u0105 torb\u0119 lek\xf3w i banda\u017cy."},{value:"6-10",string:"B\u0119d\u0105c w leju  po bombie s\u0142yszycie nad sob\u0105 trzask i wpada do was martwe cia\u0142o wroga z wielk\u0105 dziur\u0105 w g\u0142owie, kt\xf3ry mia\u0142 was usma\u017cy\u0107 miotaczem. Najwyra\u017aniej jaki\u015b Anio\u0142 Str\xf3\u017c daje wam os\u0142on\u0119 snajpersk\u0105."},{value:"11-15",string:"Znajdujecie zniszczon\u0105, zagrzeban\u0105 w b\u0142ocie ci\u0119\u017car\xf3wk\u0119 w kt\xf3rej jest nietkni\u0119ta:[1-5](skrzynia konserw i papieros\xf3w.),[6-8](skrzynia amunicji do CKMu),[9-10](skrzynia granat\xf3w mo\u017adzierzowych)"},{value:"16-20",string:"Medyk! Znajdujecie rannego oficera."},{value:"21-25",string:"Pod jednym ze \u015bwie\u017cych trup\xf3w znajduj\u0105 tabliczk\u0119 prawdziwej czekolady."},{value:"26-30",string:"Znajdujecie cia\u0142o wrogiego vox-operatora, kt\xf3ry mia\u0142 przy sobie kopi\u0119 kod\xf3w radiowych."},{value:"31-35",string:"Znajdujecie rannego wroga."},{value:"36-40",string:"W jednym ze starych okop\xf3w odnajdujecie dw\xf3jk\u0119 gwardzist\xf3w. Jeden ma przestrzelon\u0105 nog\u0119 i nie mo\u017ce chodzi\u0107, drugi le\u017cy plecami na ziemi z zabanda\u017cowan\u0105 szyj\u0105."},{value:"41-45",string:"Patrol wroga. &D10+4& zwyk\u0142ych \u017co\u0142nierzy i NCO."},{value:"46-50",string:"Znajdujecie odkryte przez bomb\u0119 wej\u015bcie do podkopu."},{value:"51-55",string:"Zaminowane cia\u0142o. Test Awareness na -30, je\u015bli nie zda bomba zadaje obra\u017cenia &2D10+3& w zasi\u0119gu 5 metr\xf3w od \u015brodka."},{value:"56-60",string:"Dostrzegacie posta\u0107 jakiego\u015b \u017co\u0142nierza, kt\xf3ry jak gdyby nigdy nic idzie przez pole bitwy. Po nawi\u0105zaniu kontaktu posta\u0107 okazuje si\u0119 duchem."},{value:"61-65",string:"Znajdujecie resztki starej kapliczki w kt\xf3rej znajduje si\u0119 czerwony kryszta\u0142. Po dotkni\u0119ciu gracz natychmiast dostaje punkt ob\u0142\u0119du z powodu wizji poleg\u0142ych i ich agonalnych zawodze\u0144. Po zdaniu wiedzy zakazanej o trudno\u015bci 0 okazuje si\u0119 \u017ce jest to kapliczka Khorna. Z powodu agonii i rozlewu krwi zakl\u0119te s\u0105 w nim dusze poleg\u0142ych."},{value:"66-70",string:"Zaczyna pada\u0107 rz\u0119sisty deszcz z wszystkimi efektami danej planety."},{value:"71-75",string:"Natykacie si\u0119 na przyjacielski patrol. &D10+4& zwyk\u0142ych \u017co\u0142nierzy i NCO."},{value:"76-80",string:"Zakamuflowany Ci\u0119\u017cki Stubber otwiera do was ogie\u0144."},{value:"81-85",string:"Zasadzka! &D10+2& przeciwnik\xf3w. BANZAI!"},{value:"86-90",string:"Znajdujecie cia\u0142o Ksi\u0119dza, kt\xf3ry trzyma przy piersi, w zaci\u015bni\u0119tej d\u0142oni Imperialn\u0105 Aquil\u0119 (najlepszej jako\u015bci, sacred, +10 do si\u0142y woli podczas test\xf3w korupcji, rzut 01-05 usuwa jeden punkt.)"},{value:"91-95",string:"Atak Gazowy! Spieprzajcie stamt\u0105d! (Rodzaj Gazu do wyboru przez MG)"},{value:"96",string:"Przebieraj\u0105c w\u015br\xf3d zw\u0142ok okaza\u0142o si\u0119, \u017ce jedne z nich nie s\u0105 wcale takie martwe: [1-5](Wr\xf3g jest ci\u0119\u017cko ranny i zaczyna krzycze\u0107 z b\xf3lu lub o pomoc zdradzaj\u0105c wasz\u0105 pozycj\u0119.),[6-9](Wr\xf3g w akcie przera\u017cenia i desperacji rzuca si\u0119 na ciebie.),[10](Wr\xf3g okazuje si\u0119 fanatykiem i wysadzi\u0142 si\u0119 granatem chc\u0105c zabra\u0107 jak najwi\u0119cej was ze sob\u0105.)"},{value:"97",string:"Zrobi\u0142e\u015b jeden mniej uwa\u017cny krok, nagle tracisz r\xf3wnowag\u0119 i osuwasz si\u0119 do jednego z lej\xf3w po bombie\u2026 w kt\xf3rym ukry\u0142o si\u0119 &D4& wrogich \u017co\u0142nierzy..."},{value:"98",string:"Z pod twojej nogi wydobywa si\u0119 mro\u017c\u0105ce krew w \u017cy\u0142ach KLIK! [1-3]( Mina eksploduje natychmiast.),[4-9]( mina jest stara lub wadliwa, wybuchnie je\u015bli zdejmiesz nog\u0119 bez rozbrojenia.),[10]( Mina jest tak stara, \u017ce nie ma szans na to by wybuchn\u0105\u0107 nawet przy pechu.)"},{value:"99",string:"Trzask! Tw\xf3j towarzysz pada martwy na ziemi\u0119! Snajper!"},{value:"100",string:"Nocny atak! B\u0142\u0105kaj\u0105c si\u0119 w \u015brodku ziemi niczyjej niebo rozb\u0142ys\u0142o przez flar\u0119 i jej \u015bwiat\u0142o rozpromieni\u0142o si\u0119 na pasie ziemi niczyjej. Zostajecie z\u0142apani przez nocn\u0105 ofensyw\u0119 i szybko zostajecie odci\u0119ci od swoich linii. Wasza artyleria zaczyna was ostrzeliwa\u0107, a wok\xf3\u0142 masy \u017co\u0142nierzy wroga i zero wsparcia!"}].find(function(e){if(e.value.includes("-")){var i=e.value.split("-");return a>=parseInt(i[0])&&a<=parseInt(i[1])}return a===parseInt(e.value)})}(a).string;if(i.includes("&")){var n=i.substring(i.indexOf("&")+1,i.lastIndexOf("&")),r=1;isNaN(n.substring(0,n.indexOf("D")))||(r=n.substring(0,n.indexOf("D")));var o=n.replace(1!==r&&r+"D","").split("+"),t=o[1]?j(o[0])+parseInt(o[1]):j(o[0]),s=i.replace(n,t).replace("&","").replace("&","");this.getAction(s)}else this.getAction(i)}},{key:"getAction",value:function(a){var e=this,i=j(10);a.includes("[")?a.split(",").forEach(function(n){if(n.substring(n.indexOf("[")+1,n.indexOf("]")).includes("-")){n.indexOf("]");var r=n.substring(parseInt(n.lastIndexOf("[")+1),parseInt(n.lastIndexOf("]"))).split("-");i>=parseInt(r[0])&&i<=parseInt(r[1])&&e.setState({action:a.substring(0,a.indexOf("["))+" "+n.substr(n.lastIndexOf("("),n.lastIndexOf(")"))})}else{n.indexOf("]");var o=n.substring(parseInt(n.lastIndexOf("[")+1),parseInt(n.lastIndexOf("]")));i===parseInt(o)&&e.setState({action:a.substring(0,a.indexOf("["))+" "+n.substr(n.lastIndexOf("("),n.lastIndexOf(")"))})}}):this.setState({action:a})}},{key:"render",value:function(){var a=this;return r.a.createElement(w.a,{fullScreen:!0,open:!0},r.a.createElement(y.a,null,r.a.createElement(d.a,{style:{textAlign:"center"}},"Generator zdarze\u0144 OnlyWar"," "),r.a.createElement("div",{style:{width:"100%",textAlign:"center"}},r.a.createElement(p.a,{onClick:function(){return a.searchForRolls(j(100),"battlefield")}},"Rzu\u0107 ko\u015bci\u0105 (Pole bitwy)"),r.a.createElement(p.a,{onClick:function(){return a.searchForRolls(j(100),"nomansland")}},"Rzu\u0107 ko\u015bci\u0105 (Ziemia niczyja)")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(k.a,{style:{textAlign:"center"},variant:"h4"},this.state.action&&this.state.action)))}}]),e}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(a){a.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.7633f066.chunk.js.map