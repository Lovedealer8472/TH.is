export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceSection {
  heading: string;
  paragraphs: string[];
}

export interface ServicePage {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  serviceAreas: string[];
  sections: ServiceSection[];
  pricing: string;
  timeline: string;
  audience: string;
  faq: ServiceFaq[];
  overviewCardTitle: string;
  image?: { src: string; alt: string; caption?: string };
}

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: 'tolvuvidgerdir',
    metaTitle: 'Tölvuviðgerðir á Austurlandi | Tölvuhvíslarinn í Neskaupstað',
    metaDescription:
      'Tölvuviðgerðir, bilanagreining og viðhald á borð- og fartölvum á Austurlandi. Persónuleg þjónusta í Neskaupstað. Bilanagreining 6.900 kr.',
    h1: 'Tölvuviðgerðir í Neskaupstað og á Austurlandi',
    intro:
      'Er tölvan hæg, frýs hún eða fer hún ekki í gang? Ég geri við tölvur og greini bilanir fyrir einstaklinga og smáfyrirtæki á Austurlandi. Þú færð heiðarleg svör og skýrt verðmat áður en viðgerð hefst.',
    serviceAreas: [
      'Neskaupstaður',
      'Norðfjörður',
      'Eskifjörður',
      'Reyðarfjörður',
      'Fjarðabyggð',
      'Egilsstaðir',
      'Austurland',
    ],
    overviewCardTitle: 'Tölvuviðgerðir',
    sections: [
      {
        heading: 'Hvað er gert?',
        paragraphs: [
          'Ég greini og laga algeng vandamál í borðtölvum og fartölvum. Þar má nefna hæga vinnslu, skjá sem frýs, óeðlileg hljóð, ofhitnun, bilaðan disk eða minni og hugbúnaðarvandamál eins og Windows-villur eða vírusa.',
          'Fyrsta skrefið er alltaf bilanagreining. Ég skoða tölvuna, útskýri hvað er að og gef þér mat á kostnaði og tíma áður en nokkuð er gert. Engin viðgerð hefst nema með þínu samþykki.',
        ],
      },
      {
        heading: 'Algeng einkenni',
        paragraphs: [
          'Tölvan ræsir sig ekki eða er lengi að fara í gang. Skjárinn er svartur eða tölvan frýs reglulega. Það heyrist óvenjulegt hljóð í viftu eða diski. Windows-uppfærslur mistakast eða forrit hætta að virka eftir uppfærslu.',
          'Ef eitthvað af þessu hljómar kunnuglega skaltu senda mér línu eða hringja. Oft er hægt að laga málið án þess að kaupa nýja tölvu.',
        ],
      },
      {
        heading: 'Fyrir hverja er þetta?',
        paragraphs: [
          'Fyrir einstaklinga sem vilja halda gömlu tölvunni gangandi og smáfyrirtæki sem þurfa áreiðanlega tækniaðstoð án stórra þjónustusamninga.',
          'Ég þjónusta viðskiptavini á Austurlandi og tek við tölvum í Neskaupstað. Við semjum fyrirfram um afhendingu og tíma.',
        ],
      },
    ],
    pricing:
      'Bilanagreining og almenn bilanaleit kostar 6.900 kr. með VSK. Viðgerðarkostnaður kemur í ljós eftir greiningu og þú samþykkir hann alltaf áður en vinna hefst. Varahlutir reiknast sérstaklega.',
    timeline:
      'Bilanagreining tekur venjulega 1–2 virka daga eftir að tölvan berst. Einfaldar viðgerðir geta verið tilbúnar samdægurs. Flóknari viðgerðir taka 3–7 daga eftir að varahlutir berast.',
    audience: 'Einstaklingar og smáfyrirtæki á Austurlandi sem þurfa trausta og persónulega tölvuþjónustu.',
    faq: [
      {
        question: 'Þarf ég að koma með tölvuna til þín?',
        answer:
          'Já, í flestum viðgerðum þarf ég að hafa tölvuna hjá mér til að skoða vélbúnaðinn. Hafðu samband og við finnum tíma sem hentar.',
      },
      {
        question: 'Hvað ef viðgerðin er of dýr?',
        answer:
          'Þú færð verðmat áður en viðgerð hefst. Ef þú samþykkir ekki verðið geri ég ekki við tölvuna og þú greiðir eingöngu fyrir greininguna, 6.900 kr.',
      },
      {
        question: 'Gerirðu við allar tegundir?',
        answer:
          'Já, ég geri við borðtölvur og fartölvur frá öllum helstu framleiðendum, til dæmis HP, Lenovo, Dell, Asus og Apple.',
      },
    ],
  },
  {
    slug: 'fartolvuvidgerdir',
    metaTitle: 'Fartölvuviðgerðir og bilanagreining | Tölvuhvíslarinn',
    metaDescription:
      'Fartölvuviðgerðir á Austurlandi. Hæg fartölva, bilaður skjár, lyklaborð, rafhlaða eða ofhitnun. Bilanagreining 6.900 kr. Hafðu samband.',
    h1: 'Fartölvuviðgerðir og bilanagreining',
    intro:
      'Fartölvan er oft mikilvægasta tölvan á heimilinu eða í fyrirtækinu. Ég laga algeng fartölvuvandamál, allt frá hægri vinnslu og ofhitnun til bilana í lyklaborði, skjá eða rafhlöðu.',
    serviceAreas: ['Neskaupstaður', 'Fjarðabyggð', 'Austurland', 'Egilsstaðir'],
    overviewCardTitle: 'Fartölvuviðgerðir',
    sections: [
      {
        heading: 'Hvað er gert?',
        paragraphs: [
          'Ég skoða fartölvuna þína og finn út hvað veldur vandamálinu. Algeng verk eru hreinsun á kælikerfi og viftum, skipti á SSD-diski eða vinnsluminni, lagfæring á Windows-vandamálum og mat á því hvort viðgerð borgi sig.',
          'Ef skipta þarf um skjá eða lyklaborð get ég pantað varahluti. Þú færð skýrt verðmat áður en ég panta.',
        ],
      },
      {
        heading: 'Algeng einkenni',
        paragraphs: [
          'Fartölvan er mjög hæg eða lengi að ræsa sig. Hún hitnar við venjulega notkun og viftan gengur stöðugt. Rafhlaðan endist bara í nokkrar mínútur. Sumir lyklar virka ekki eða það sjást línur eða dökkir blettir á skjánum.',
          'Stundum er lausnin einföld, til dæmis að hreinsa ryk úr kælikerfinu. Stundum þarf varahluti. Ég segi þér hvað á við í þínu tilfelli.',
        ],
      },
      {
        heading: 'Fyrir hverja er þetta?',
        paragraphs: [
          'Fyrir nemendur, fólk sem vinnur heima og alla sem treysta á fartölvuna daglega og vilja skoða viðgerð áður en þeir kaupa nýja.',
        ],
      },
    ],
    pricing:
      'Bilanagreining kostar 6.900 kr. með VSK. Kostnaður við viðgerð og varahluti kemur í ljós eftir greiningu. Nýr SSD-diskur eða meira vinnsluminni er oft hagkvæm leið til að hressa upp á gamla fartölvu.',
    timeline:
      'Greining tekur 1–2 daga. Einfaldar lagfæringar eru oft tilbúnar í sömu viku. Varahlutir geta tekið 3–10 daga eftir birgðastöðu.',
    audience: 'Einstaklingar og smáfyrirtæki með fartölvur sem þurfa áreiðanlega viðgerð eða uppfærslu.',
    faq: [
      {
        question: 'Borgar sig að gera við gamla fartölvu?',
        answer:
          'Oft, sérstaklega ef hún er 3–7 ára og vandamálið er diskur, minni eða ryk. Ég gef þér heiðarlegt mat eftir greiningu.',
      },
      {
        question: 'Af hverju hitnar fartölvan svona mikið?',
        answer:
          'Algengar ástæður eru ryk sem stíflar kælikerfið eða of mikið álag á örgjörvann. Hreinsun og uppfærslur laga þetta oft.',
      },
      {
        question: 'Geturðu skipt um rafhlöðu?',
        answer:
          'Ég met hvort rafhlöðuskipti borga sig og panta rafhlöðu ef svo er. Í sumum fartölvum er erfiðara að skipta en í öðrum og ég segi þér frá því fyrirfram.',
      },
    ],
  },
  {
    slug: 'ssd-uppfaersla',
    metaTitle: 'SSD uppfærsla – hæg tölva löguð | Tölvuhvíslarinn',
    metaDescription:
      'Er tölvan hæg? SSD-diskur getur gert hana mun hraðari. Ísetning SSD með fullri uppsetningu stýrikerfis kostar 14.900 kr. Þjónusta á Austurlandi.',
    h1: 'SSD uppfærsla fyrir hæga tölvu',
    intro:
      'Ef tölvan er lengi að ræsa sig og forrit opnast seint er hún líklega enn með gamlan harðan disk. Þá getur SSD-diskur verið besta fjárfestingin. Ég set nýjan SSD í tölvuna, flyt gögnin yfir og prófa allt áður en þú færð hana til baka.',
    serviceAreas: ['Neskaupstaður', 'Fjarðabyggð', 'Austurland'],
    overviewCardTitle: 'SSD uppfærsla',
    sections: [
      {
        heading: 'Hvað er gert?',
        paragraphs: [
          'Ég athuga hvort tölvan þín henti fyrir SSD uppfærslu, ráðlegg þér um stærð og set diskinn í. Myndir, skjöl og forrit flyt ég yfir á nýja diskinn. Stundum hentar betur að setja Windows upp á nýtt og þá geri ég það.',
          'Að lokum prófa ég ræsingu og hraða og geng úr skugga um að allt virki eins og áður, bara mun hraðar.',
        ],
      },
      {
        heading: 'Algeng einkenni sem SSD leysir',
        paragraphs: [
          'Tölvan er 2–5 mínútur að ræsa sig. Windows segir að diskurinn sé fullur. Tölvan frýs þegar margt er opið. Það heyrist í gamla harða diskinum. Forrit eru lengi að opnast.',
          'SSD er oft 5–10 sinnum hraðari en gamall harður diskur og getur gefið 5–8 ára gamalli tölvu nýtt líf.',
        ],
      },
      {
        heading: 'Fyrir hverja er þetta?',
        paragraphs: [
          'Fyrir alla sem vilja hraðari tölvu án þess að kaupa nýja. Þetta hentar sérstaklega vel fyrir heimilis- og vinnutölvur sem eru í góðu standi en hafa hægt á sér með árunum.',
        ],
      },
    ],
    pricing:
      'Ísetning SSD með fullri uppsetningu stýrikerfis kostar 14.900 kr. samkvæmt verðskrá. Diskurinn sjálfur bætist við og verðið á honum fer eftir stærð. Ef afrita þarf gögn kostar gagnaafritun 5.900 kr. fyrir allt að 30 GB og 7.900 kr. fyrir meira. Allt verð er með VSK.',
    timeline:
      'SSD uppfærsla með gagnaflutningi tekur venjulega 1–3 virka daga eftir að diskurinn er kominn.',
    audience: 'Einstaklingar og fyrirtæki með hægar tölvur sem vilja skýrt verð og vandaða uppsetningu.',
    faq: [
      {
        question: 'Hvenær borgar sig að setja SSD í gamla tölvu?',
        answer:
          'Ef tölvan er yngri en 8–10 ára og örgjörvinn ræður enn við það sem þú notar hana í er SSD oft besta uppfærslan. Ég met þetta fyrir hverja tölvu.',
      },
      {
        question: 'Tapast gögnin mín?',
        answer:
          'Ég tek afrit áður en flutningurinn hefst og prófa allt vandlega á eftir. Öryggisafrit er hluti af ferlinu.',
      },
      {
        question: 'Get ég haldið gömlu gögnunum?',
        answer:
          'Já, í flestum tilfellum er hægt að flytja allt yfir á nýja diskinn. Stundum er betra að setja Windows upp á nýtt og flytja aðeins valin gögn. Ég ráðlegg þér eftir ástandi tölvunnar.',
      },
    ],
  },
  {
    slug: 'sersmidid-bordtolva',
    metaTitle: 'Sérsmíði borðtölva og leikjatölva | Tölvuhvíslarinn',
    metaDescription:
      'Borðtölvur og leikjatölvur smíðaðar eftir þínum þörfum á Austurlandi. Ráðgjöf, val á íhlutum, samsetning og prófanir. Hafðu samband.',
    h1: 'Sérsmíði borðtölva og leikjatölva',
    intro:
      'Vantar þig nýja borðtölvu í leiki, vinnu eða heimilisnotkun? Ég smíða borðtölvur eftir þínum þörfum og fjárhag. Ég vel íhluti sem passa saman, set tölvuna saman og prófa hana fyrir afhendingu.',
    serviceAreas: ['Neskaupstaður', 'Fjarðabyggð', 'Austurland', 'Egilsstaðir'],
    overviewCardTitle: 'Sérsmíði borðtölva',
    sections: [
      {
        heading: 'Hvað er gert?',
        paragraphs: [
          'Við byrjum á að spjalla um í hvað þú ætlar að nota tölvuna, hvort sem það eru leikir, myndvinnsla, skrifstofuvinna eða blanda af þessu. Ég vel íhluti sem passa saman, panta þá ef þarf, set tölvuna saman, set upp Windows og prófa allt.',
          'Þú færð tölvu sem er tilbúin til notkunar, ekki kassa af íhlutum sem þú þarft að púsla saman á eigin spýtur.',
        ],
      },
      {
        heading: 'Leikjatölva, vinnutölva eða heimilistölva?',
        paragraphs: [
          'Leikjatölva þarf oft öflugra skjákort og góða kælingu. Vinnutölva þarf oft meira vinnsluminni og hraðan disk. Heimilistölva getur verið ódýr og hljóðlát.',
          'Ég útskýri muninn á mannamáli og hjálpa þér að velja tölvu sem hentar raunverulegri notkun þinni og fjárhag.',
        ],
      },
      {
        heading: 'Fyrir hverja er þetta?',
        paragraphs: [
          'Fyrir leikjaspilara, fermingarbörn sem fá fyrstu tölvuna, smáfyrirtæki sem þurfa áreiðanlega vinnutölvu og alla sem vilja borðtölvu sem er smíðuð fyrir þá en ekki staðlaða tölvu úr stórri verslun.',
        ],
      },
    ],
    pricing:
      'Verð fer eftir íhlutum og notkun. Einfaldar heimilistölvur geta byrjað í um 120.000–180.000 kr. og leikjatölvur kosta 200.000–400.000 kr. eða meira. Ég geri alltaf skriflegt tilboð áður en ég panta.',
    timeline:
      '2–4 vikur eftir að þú samþykkir tilboðið, eftir birgðastöðu íhluta. Ef íhlutirnir eru til getum við rætt hraðari afgreiðslu.',
    audience: 'Einstaklingar og fyrirtæki sem vilja sérsniðna borðtölvu með persónulegri ráðgjöf á Austurlandi.',
    faq: [
      {
        question: 'Er betra að láta smíða tölvu eða kaupa tilbúna?',
        answer:
          'Með sérsmíði ræður þú meiru um gæðin og það er auðveldara að uppfæra seinna. Tilbúin tölva getur hentað ef þig vantar tölvu strax og fjárhagurinn er þröngur. Ég get líka ráðlagt þér um slík kaup.',
      },
      {
        question: 'Get ég uppfært tölvuna síðar?',
        answer:
          'Já, það er einn af kostunum við sérsmíðaða tölvu. Ég vel íhluti sem auðvelt er að uppfæra, til dæmis með meira vinnsluminni eða öflugra skjákorti.',
      },
      {
        question: 'Hvað með ábyrgð?',
        answer:
          'Íhlutirnir eru í ábyrgð hjá framleiðanda. Ég stend við mína vinnu og hjálpa þér ef eitthvað kemur upp eftir afhendingu.',
      },
    ],
  },
  {
    slug: 'taekniaadstod-fyrirtaeki',
    metaTitle: 'Tækniaðstoð fyrir smáfyrirtæki | Tölvuhvíslarinn',
    metaDescription:
      'Tækniráðgjöf og tölvuaðstoð fyrir smáfyrirtæki á Austurlandi. Ráðgjöf við kaup, uppsetning, netkerfi og öryggisafrit. 15.900 kr./klst.',
    h1: 'Tækniaðstoð fyrir smáfyrirtæki',
    intro:
      'Smáfyrirtæki á Austurlandi þurfa oft áreiðanlega tækniaðstoð án þess að gera stóra þjónustusamninga. Ég býð persónulega ráðgjöf, uppsetningu og lausnir sem henta raunverulegum þörfum, hvort sem starfsmaðurinn er einn eða teymið lítið.',
    serviceAreas: ['Neskaupstaður', 'Fjarðabyggð', 'Austurland', 'Egilsstaðir', 'Reyðarfjörður'],
    overviewCardTitle: 'Tækniaðstoð fyrir fyrirtæki',
    sections: [
      {
        heading: 'Hvað er gert?',
        paragraphs: [
          'Ég veiti ráðgjöf við kaup á tölvum og búnaði, set upp nýjar vinnustöðvar, skipulegg skrár og öryggisafrit, set upp netkerfi og aðstoða við hugbúnað og netöryggi.',
          'Ég tala íslensku og útskýri hlutina á mannamáli svo þú getir tekið ákvarðanir með skýra mynd af kostnaði og ávinningi.',
        ],
      },
      {
        heading: 'Algeng verkefni',
        paragraphs: [
          'Nýtt fyrirtæki þarf að koma sér upp tölvum og netkerfi. Gamla kerfið er orðið hægt og óöruggt. Starfsfólk vinnur heima og þarf aðgang að skrám. Enginn ber ábyrgð á öryggisafritum og allt er í hættu ef diskur bilar.',
          'Ég hjálpa þér að setja upp einfalt og áreiðanlegt kerfi sem hentar stærð fyrirtækisins. Það á hvorki að vera of flókið né of dýrt.',
        ],
      },
      {
        heading: 'Fyrir hverja er þetta?',
        paragraphs: [
          'Fyrir smáfyrirtæki, sjálfstætt starfandi fólk, verslanir og þjónustufyrirtæki á Austurlandi sem vilja hafa einn tæknimann sem þau treysta.',
        ],
      },
    ],
    pricing:
      'Tækniráðgjöf kostar 15.900 kr./klst. með VSK. Fyrir stærri verkefni er hægt að semja um fast verð.',
    timeline:
      'Einföld ráðgjöf eftir samkomulagi. Uppsetning nýrrar vinnustöðvar tekur 1–2 daga. Stærri verkefni fara eftir umfangi.',
    audience: 'Smáfyrirtæki og sjálfstætt starfandi fólk á Austurlandi.',
    faq: [
      {
        question: 'Er hægt að fá reglulega aðstoð?',
        answer:
          'Já, við getum samið um reglulega aðstoð eða aðstoð eftir þörfum. Hringdu eða sendu mér línu.',
      },
      {
        question: 'Geturðu komið á staðinn?',
        answer:
          'Já, ég kem til fyrirtækja á Austurlandi eftir samkomulagi.',
      },
      {
        question: 'Aðstoðarðu við netöryggi?',
        answer:
          'Ég set upp öryggisafritun og lykilorðastjórnun og ráðlegg um einfaldar öryggisreglur. Flóknari netöryggismálum vísa ég til sérfræðinga þegar þess þarf.',
      },
    ],
  },
  {
    slug: 'vhs-minidv',
    image: {
      src: '/vhs/taekin.webp',
      alt: 'Myndbandstæki og upptökuvélar Tölvuhvíslarans: Panasonic, Sharp og Dantax VHS tæki, Sony Hi8 og Panasonic MiniDV vélar',
      caption: 'Tækin sem spólurnar þínar eru spilaðar í. Eitt þeirra spilar líka japanskar NTSC spólur.',
    },
    metaTitle: 'VHS, VHS-C og MiniDV yfir á stafrænt form | Tölvuhvíslarinn',
    // Time-limited Christmas offer (ends 31.12.2026): remove the offer sentences from metaDescription and intro afterwards
    metaDescription:
      'Gömlu VHS, VHS-C og MiniDV spólurnar á USB-lykil. Jólatilboð til 31.12.2026, ekkert upphafsgjald og 20% afsláttur. Pantanir sem berast fyrir 4. desember eru tilbúnar fyrir jól. Tek við spólum í pósti af öllu landinu.',
    h1: 'VHS, VHS-C og MiniDV yfir á stafrænt form',
    intro:
      'Gamlar VHS, VHS-C og MiniDV spólur geyma minningar sem verða ekki teknar upp aftur og segulböndin skemmast smám saman. Ég færi upptökurnar yfir á stafrænt form svo þú getir geymt þær á USB-lykli, hörðum diski eða í skýi. Þú getur sent spólurnar í pósti hvaðan sem er af landinu. Til 31. desember 2026 er jólatilboð. Þá er ekkert upphafsgjald og 20% afsláttur af allri yfirfærslu. Pantanir sem berast fyrir 4. desember eru tilbúnar fyrir jól.',
    serviceAreas: ['Neskaupstaður', 'Fjarðabyggð', 'Austurland', 'Allt landið í pósti'],
    overviewCardTitle: 'VHS, VHS-C og MiniDV',
    sections: [
      // Time-limited Christmas offer (ends 31.12.2026): remove this section afterwards
      {
        heading: 'Jólatilboð og gjafabréf',
        paragraphs: [
          'Til 31. desember 2026 fellur 2.900 kr. upphafsgjaldið niður og öll yfirfærsla er á 20% afslætti. USB-lykillinn fylgir eins og venjulega. Magnafslátturinn gildir áfram og þú færð alltaf þann afslátt sem er hærri.',
          // Worked example, list prices from pricing.detailedPricing.video: 3 × 4.900 = 14.700; + 2.900 = 17.600; 20% of 14.700 = 2.940; 14.700 − 2.940 = 11.760; 17.600 − 11.760 = 5.840
          'Tökum dæmi. Þú sendir þrjár spólur sem eru allt að 120 mínútur hver. Venjulega kostar það 3 × 4.900 kr. = 14.700 kr. og 2.900 kr. í upphafsgjald, samtals 17.600 kr. Á jólatilboðinu fellur upphafsgjaldið niður og 20% afsláttur af 14.700 kr. er 2.940 kr. Þú greiðir því 11.760 kr. og sparar 5.840 kr. Ef spólurnar koma í pósti bætist sendingarkostnaðurinn til baka við.',
          'Pantanir sem berast fyrir 4. desember eru tilbúnar fyrir jól. Það á líka við um spólur sem koma í pósti hvaðan sem er af landinu. Upptakan fer fram í rauntíma og því skiptir máli að senda spólurnar tímanlega.',
          'Gamlar fjölskylduupptökur á USB-lykli eru falleg jólagjöf. Oft eru spólurnar samt hjá ömmu og afa en ekki hjá þeim sem gefur gjöfina. Þá hentar gjafabréf vel. Þú velur upphæðina og ég sendi þér gjafabréf sem þú getur prentað út eða sent áfram. Gjafabréf sem er keypt fyrir áramót gildir á tilboðsverði allt árið 2027.',
        ],
      },
      {
        heading: 'Hvað er gert?',
        paragraphs: [
          'Ég tek við VHS, VHS-C og MiniDV spólum, færi efnið yfir á stafrænt form (venjulega MP4) og afhendi það á USB-lykli eða netdrifi eftir samkomulagi.',
          'Heimamyndböndin koma flokkuð og skipt í kafla eftir atburðum, svo þú finnur til dæmis jólin 1998 strax.',
          'Aðrar gerðir af gömlum miðlum en VHS, VHS-C og MiniDV tek ég ekki við eins og er.',
        ],
      },
      {
        heading: 'MiniDV beint af spólunni',
        paragraphs: [
          'MiniDV spólur geyma myndina stafrænt. Ég sæki hana beint af spólunni í gegnum FireWire, eins og hún var tekin upp. Engin umbreyting í hliðrænt merki og til baka, ekkert aukasuð og engin upplausn tapast.',
          'Hver upptaka fær sinn kafla, merktan dagsetningu og klukkutíma upptökunnar, því MiniDV vélin skráði það sjálf.',
        ],
      },
      {
        heading: 'Af hverju liggur á?',
        paragraphs: [
          'Segulbandið í VHS-spólum skemmist með tímanum. Myndin verður kornótt, litirnir dofna og hljóðið getur horfið. MiniDV-spólur endast betur en þær geta líka skemmst.',
          'Ef þú átt upptökur úr barnæsku, brúðkaupum eða fjölskylduboðum er betra að bjarga þeim núna en að bíða.',
        ],
      },
      {
        heading: 'Fyrir hverja er þetta?',
        paragraphs: [
          'Fyrir einstaklinga og fjölskyldur um allt land sem eiga gamlar upptökur og vilja varðveita þær á öruggan hátt án þess að kaupa dýran búnað.',
        ],
      },
      {
        heading: 'Sendu spólurnar í pósti',
        paragraphs: [
          'Ég er í Neskaupstað en tek við spólum í pósti af öllu landinu. Hafðu samband fyrst og ég sendi þér heimilisfangið og ráð um hvernig best er að pakka spólunum.',
          'Þegar yfirfærslan er tilbúin færðu niðurhalstengil strax. Spólurnar koma svo til baka í pósti ásamt USB-lyklinum. Eini aukakostnaðurinn er sendingin til baka.',
        ],
      },
    ],
    // Time-limited Christmas offer (ends 31.12.2026): remove the two offer sentences afterwards
    pricing:
      'Verðið fer eftir lengd hverrar spólu. Spóla sem er allt að 60 mínútur kostar 3.900 kr., allt að 120 mínútur 4.900 kr., allt að 180 mínútur 5.900 kr. og allt að 240 mínútur 6.900 kr. Upphafsgjald er venjulega 2.900 kr. á pöntun, óháð fjölda spóla, og innifelur USB-lykil allt að 64 GB og niðurhalstengil í 30 daga. Til 31. desember 2026 fellur upphafsgjaldið niður og 20% afsláttur er af allri yfirfærslu. USB-lykill og niðurhalstengill fylgja samt áfram. Magnafsláttur er 7–20% frá og með fjórum spólum og þú færð alltaf þann afslátt sem er hærri. Fyrir 20 spólur eða fleiri geri ég tilboð. Ef spóla reynist tóm eða ólæsileg rukka ég ekkert fyrir hana.',
    timeline:
      'Yfirfærslan fer fram í rauntíma. Þriggja tíma spóla tekur þrjá tíma í upptöku og því ræður magnið afgreiðslutímanum. Fáeinar spólur eru yfirleitt tilbúnar á 3–7 virkum dögum. Stærri söfn taka lengri tíma og tíu spólur eða fleiri geta tekið tvær til þrjár vikur. Ég gef alltaf upp áætlaða dagsetningu áður en vinna hefst.',
    audience: 'Einstaklingar og fjölskyldur sem eiga VHS, VHS-C eða MiniDV upptökur og vilja bjarga minningunum.',
    faq: [
      {
        question: 'Á hvaða sniði fæ ég skrárnar?',
        answer:
          'Venjulega MP4 sem virkar í flestum tækjum, til dæmis símum, sjónvörpum og tölvum.',
      },
      {
        question: 'Tekurðu við VHS-C spólum?',
        answer:
          'Já. Ég tek við VHS, VHS-C og MiniDV spólum.',
      },
      {
        question: 'Get ég fengið skrárnar á USB-lykli?',
        answer:
          'Já. USB-lykill allt að 64 GB er innifalinn í upphafsgjaldinu ásamt niðurhalstengli sem gildir í 30 daga. Ef efnið er meira en 64 GB útvega ég stærri lykil eða flakkara og það kostar kostnaðarverð að viðbættum 1.500 kr.',
      },
      {
        question: 'Hvað ef spólan er skemmd?',
        answer:
          'Ég met ástandið áður en vinna hefst. Stundum er hægt að bjarga hluta af efninu og ég segi þér heiðarlega hvað er hægt. Ef spólan reynist tóm eða ólæsileg rukka ég ekkert fyrir hana.',
      },
      {
        question: 'Get ég fengið betri mynd?',
        answer:
          'Já. Í vandaðri myndvinnslu hreinsa ég suð og kubba úr myndinni, skerpi hana varlega og skila henni í 1080p svo hún líti betur út í sjónvarpinu. Munurinn sést helst þar sem er hreyfing og mikið af smáatriðum. Myndin verður hreinni en hún verður aldrei eins og ný upptaka. Þetta kostar 1.500 kr. á spólu.',
      },
    ],
  },
  {
    slug: 'gagnaflutningur',
    metaTitle: 'Gagnaflutningur og öryggisafrit | Tölvuhvíslarinn',
    metaDescription:
      'Gagnaflutningur, öryggisafrit og uppsetning nýrrar tölvu á Austurlandi. Gagnaafritun frá 5.900 kr. Myndir, skjöl og forrit flutt yfir á öruggan hátt.',
    h1: 'Gagnaflutningur, öryggisafrit og ný tölva sett upp',
    intro:
      'Varstu að kaupa nýja tölvu eða skipta um disk? Ég flyt gögnin þín yfir á öruggan hátt, set upp Windows og forrit og geng frá öryggisafritun svo ekkert týnist.',
    serviceAreas: ['Neskaupstaður', 'Fjarðabyggð', 'Austurland'],
    overviewCardTitle: 'Gagnaflutningur',
    sections: [
      {
        heading: 'Hvað er gert?',
        paragraphs: [
          'Ég flyt myndir, skjöl, tölvupóst og forrit úr gömlu tölvunni yfir í þá nýju. Ég set upp Windows, uppfærslur og helstu forrit. Ég stilli líka öryggisafritun á USB-lykil, netdrif eða ský eftir þörfum.',
          'Ég passa að ekkert gleymist og að nýja tölvan sé tilbúin til notkunar þegar þú færð hana.',
        ],
      },
      {
        heading: 'Algengar aðstæður',
        paragraphs: [
          'Þú keyptir nýja tölvu og vilt fá allt yfir í hana. Gamla tölvan er að gefa sig og það þarf að bjarga gögnunum. Það þarf að setja Windows upp á nýtt eftir vírus eða bilun. Þú átt ekkert afrit og vilt ekki taka áhættuna lengur.',
        ],
      },
      {
        heading: 'Fyrir hverja er þetta?',
        paragraphs: [
          'Fyrir einstaklinga sem voru að kaupa nýja tölvu og vilja ekki missa gögnin sín og fyrirtæki sem þurfa skipulegan flutning og afritun.',
        ],
      },
    ],
    pricing:
      'Samkvæmt verðskrá kostar gagnaafritun 5.900 kr. fyrir allt að 30 GB og 7.900 kr. fyrir meira en 30 GB. Uppsetning stýrikerfis með uppfærslum kostar 12.900 kr. Í stærri verkefni með mörgum tölvum geri ég tilboð. Allt verð er með VSK.',
    timeline:
      'Einfaldur flutningur tekur 1–2 daga. Stærri verkefni með mörgum tölvum eftir samkomulagi.',
    audience: 'Einstaklingar og smáfyrirtæki sem kaupa nýja tölvu eða þurfa öryggisafrit.',
    faq: [
      {
        question: 'Tapast gögnin mín við flutninginn?',
        answer:
          'Ég tek afrit áður en vinna hefst og geng úr skugga um að allt hafi skilað sér. Öryggi gagnanna gengur fyrir.',
      },
      {
        question: 'Geturðu flutt forrit líka?',
        answer:
          'Sum forrit er hægt að flytja yfir en önnur þarf að setja upp aftur. Ég segi þér hvað á við um hvert forrit.',
      },
      {
        question: 'Aðstoðarðu við öryggisafrit?',
        answer:
          'Já, ég set upp einfalda afritun sem hentar þínum þörfum svo þú þurfir ekki að treysta á einn disk.',
      },
    ],
  },
  {
    slug: 'windows-11-ostudd-vel',
    metaTitle: 'Windows 11 á óstudda tölvu – Windows 10 runnið út | Tölvuhvíslarinn',
    metaDescription:
      'Segir Windows að tölvan þín uppfylli ekki kröfur fyrir Windows 11? Ég set Windows 11 upp á eldri vélar án TPM 2.0 á Austurlandi. Gögn afrituð, uppfærslur settar inn. Fast verð.',
    h1: 'Windows 11 á tölvu sem „má ekki“ fá Windows 11',
    intro:
      'Windows 10 hætti að fá öryggisuppfærslur 14. október 2025 og framlengda öryggisþjónustan fyrir heimili rann út 13. október 2026. Tölva með Windows 10 fær því engar öryggisuppfærslur lengur. Milljónir tölva sem virka ágætlega fá samt skilaboðin „Þessi tölva uppfyllir ekki kröfur fyrir Windows 11“, oftast vegna TPM 2.0 eða örgjörvans. Ég set Windows 11 upp á slíkar vélar, tek afrit af gögnunum áður og skila tölvunni uppfærðri.',
    serviceAreas: ['Neskaupstaður', 'Fjarðabyggð', 'Austurland'],
    overviewCardTitle: 'Windows 11 á óstudda vél',
    sections: [
      {
        heading: 'Hvað er gert?',
        paragraphs: [
          'Fyrst tek ég afrit af myndum, skjölum og öðru sem skiptir máli. Svo set ég Windows 11 upp á nýtt með uppsetningarmiðli sem fer fram hjá kröfum Microsoft um TPM 2.0, Secure Boot og tiltekna örgjörva. Að lokum set ég inn allar uppfærslur og rekla, færi gögnin þín til baka og athuga að allt ræsist og virki.',
          'Þetta er hrein uppsetning, ekki uppfærsla ofan á gamla Windows 10. Tölvan kemur til baka hraðari og laus við drasl sem hefur safnast upp árum saman.',
        ],
      },
      {
        heading: 'Hvaða tölvur henta?',
        paragraphs: [
          'Flestar fartölvur og borðtölvur frá 2012 og yngri með 64 bita örgjörva og að minnsta kosti 4 GB minni. Ef tölvan er enn með gamlan harðan disk mæli ég með SSD í leiðinni. Það munar meira um það en nokkuð annað.',
          'Ég segi þér hreint út ef vélin er of gömul til að þetta borgi sig. Þá er betra að vita það áður en vinnan hefst.',
        ],
      },
      {
        heading: 'Það sem þú þarft að vita',
        paragraphs: [
          'Microsoft styður ekki Windows 11 opinberlega á vélum sem uppfylla ekki kröfurnar og ábyrgist ekki uppfærslur á þeim. Í reynd hafa slíkar vélar fengið uppfærslur eins og aðrar, en það getur breyst. Ég segi þetta við hvern viðskiptavin áður en uppsetning hefst.',
          'Windows 11 leyfi fylgir tölvunni ef hún var með löglegt Windows 10. Það þarf ekki að kaupa nýtt.',
        ],
      },
    ],
    pricing:
      'Fast verð er 14.900 kr. fyrir uppsetningu Windows 11 á óstudda vél með öllum uppfærslum. Afritun gagna bætist við samkvæmt verðskrá, 5.900 kr. fyrir allt að 30 GB og 7.900 kr. fyrir meira. Allt verð er með VSK.',
    timeline:
      'Tölvan er yfirleitt tilbúin samdægurs eða næsta virka dag, eftir magni gagna og hraða vélarinnar.',
    audience: 'Heimili, einyrkjar og lítil fyrirtæki með tölvur sem virka vel en fá ekki Windows 11 í gegnum Windows Update.',
    faq: [
      {
        question: 'Er þetta löglegt?',
        answer:
          'Já. Þetta er venjulegt Windows 11 frá Microsoft sett upp með stillingum sem fara fram hjá vélbúnaðarkröfunum. Leyfið sem fylgdi Windows 10 gildir áfram. Microsoft styður uppsetninguna ekki opinberlega en bannar hana ekki.',
      },
      {
        question: 'Fæ ég áfram uppfærslur?',
        answer:
          'Hingað til hafa óstuddar vélar fengið sömu öryggisuppfærslur og aðrar. Microsoft ábyrgist það ekki og ég get ekki lofað því fyrir hönd Microsoft. Ef stór útgáfuuppfærsla vill ekki fara inn er hægt að endurtaka ferlið.',
      },
      {
        question: 'Get ég ekki bara verið áfram á Windows 10?',
        answer:
          'Tölvan heldur áfram að virka en hún fær engar öryggisuppfærslur lengur. Framlengda öryggisþjónustan fyrir heimili rann út 13. október 2026. Heimabankinn, tölvupósturinn og vafrinn eru því í meiri hættu með hverjum mánuðinum sem líður. Ef vélin á að vera áfram í notkun er Windows 11 skynsamlegri kostur.',
      },
      {
        question: 'Tapast gögnin mín?',
        answer:
          'Nei. Ég tek afrit á ytri disk áður en nokkuð er gert og flyt allt til baka eftir uppsetningu. Þú staðfestir að allt sé á sínum stað áður en afritinu er eytt.',
      },
    ],
  },
];

export function getServicePage(slug: string): ServicePage | undefined {
  return SERVICE_PAGES.find((page) => page.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICE_PAGES.map((page) => page.slug);
}

export function getServicePagePath(slug: string): string {
  return `/services/${slug}`;
}
