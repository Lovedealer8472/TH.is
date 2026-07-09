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
}

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: 'tolvuvidgerdir',
    metaTitle: 'Tölvuviðgerðir á Austurlandi | Tölvuhvíslarinn í Neskaupstað',
    metaDescription:
      'Tölvuviðgerðir, bilanagreining og viðhald fyrir borð- og fartölvur á Austurlandi. Persónuleg þjónusta í Neskaupstað – hafðu samband við Daða.',
    h1: 'Tölvuviðgerðir í Neskaupstað og á Austurlandi',
    intro:
      'Er tölvan hæg, frýs hún eða svarar hún ekki? Ég býð upp á tölvuviðgerðir og bilanagreiningu fyrir einstaklinga og smáfyrirtæki á Austurlandi – með heiðarlegum samskiptum og skýrum verðmati áður en viðgerð hefst.',
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
          'Ég greini og lagfæri algeng vandamál á borðtölvum og fartölvum: hæg vinnsla, skjár sem frýs, rafmagnshljóð, ofhitnun, bilun á disk eða minni, og hugbúnaðarvandamál eins og Windows-villur eða vírus.',
          'Fyrsta skrefið er alltaf bilanagreining. Ég skoða tölvuna, útskýri hvað er að og gef þér mat á kostnaði og tíma áður en nokkuð er gert. Engin viðgerð hefst nema með þínu samþykki.',
        ],
      },
      {
        heading: 'Algeng einkenni',
        paragraphs: [
          'Tölvan ræsist ekki eða tekur langan tíma að kveikja. Skjárinn er svartur eða tölvan frystir reglulega. Hljóð kemur frá viftu eða disk. Windows uppfærslur mistakast eða forrit hætta að virka eftir uppfærslu.',
          'Ef eitthvað af þessu hljómar kunnuglega, sendu mér línu eða hringdu. Oft er hægt að laga málið án þess að kaupa nýja tölvu.',
        ],
      },
      {
        heading: 'Fyrir hverja er þetta?',
        paragraphs: [
          'Fyrir einstaklinga sem vilja halda gömlu tölvunni gangandi og fyrir smáfyrirtæki sem þurfa áreiðanlega tækniaðstoð án stórra þjónustusamninga.',
          'Ég þjónusta viðskiptavini á Austurlandi og get oft tekið við tölvum í Neskaupstað með skýrum samningi um afhendingu og tíma.',
        ],
      },
    ],
    pricing:
      'Bilanagreining og almenn bilanaleit kostar 9.900 kr. með VSK. Viðgerðarkostnaður kemur í ljós eftir greiningu og er alltaf samþykktur áður en vinna hefst. Varahlutir reiknast sérstaklega.',
    timeline:
      'Bilanagreining tekur venjulega 1–2 virka daga eftir að tölvan berst. Einfaldar viðgerðir geta verið tilbúnar sama dag, flóknari viðgerðir taka 3–7 daga eftir að varahlutir berast.',
    audience: 'Einstaklingar og smáfyrirtæki á Austurlandi sem þurfa trausta og persónulega tölvuþjónustu.',
    faq: [
      {
        question: 'Þarf ég að færa tölvuna til þín?',
        answer:
          'Já, fyrir flestar viðgerðir þarf að skoða vélbúnaðinn á staðnum. Hafðu samband og við finnum tíma sem hentar.',
      },
      {
        question: 'Hvað ef viðgerðin er of dýr?',
        answer:
          'Þú færð verðmat áður en viðgerð hefst. Ef þú samþykkir ekki verðið er engin viðgerð framkvæmd og þú greiðir eingöngu fyrir greiningu.',
      },
      {
        question: 'Vinnur þú með öll merki?',
        answer:
          'Já, ég vinn með borðtölvum og fartölvum frá öllum helstu framleiðendum – HP, Lenovo, Dell, Asus, Apple og fleiri.',
      },
    ],
  },
  {
    slug: 'fartolvuvidgerdir',
    metaTitle: 'Fartölvuviðgerðir og bilanagreining | Tölvuhvíslarinn',
    metaDescription:
      'Fartölvuviðgerðir á Austurlandi – hæg fartölva, bilun á skjá, lyklaborð, rafhlaða og ofhitnun. Bilanagreining frá 9.900 kr. Hafðu samband.',
    h1: 'Fartölvuviðgerðir og bilanagreining',
    intro:
      'Fartölvan er oft mikilvægasta tölvan í heimilinu eða fyrirtækinu. Ég lagfæri algeng fartölvuvandamál – frá hægum vinnsluhraða og ofhitnun til bilana á lyklaborði, skjá eða rafhlöðu.',
    serviceAreas: ['Neskaupstaður', 'Fjarðabyggð', 'Austurland', 'Egilsstaðir'],
    overviewCardTitle: 'Fartölvuviðgerðir',
    sections: [
      {
        heading: 'Hvað er gert?',
        paragraphs: [
          'Ég skoða fartölvuna þína og finn út hvað veldur vandamálinu. Algeng verkefni eru hreinsun á kælikerfi og viftum, skipti á SSD eða RAM, lagfæring á Windows-vandamálum, og mat á því hvort viðgerð borgi sig.',
          'Fyrir sum vandamál – eins og bilun á skjá eða lyklaborði – get ég pantað varahluti og gefið skýrt verðmat áður en pöntun fer fram.',
        ],
      },
      {
        heading: 'Algeng einkenni',
        paragraphs: [
          'Fartölvan er ótrúlega hæg eða tekur langan tíma að ræsa. Hún verður heit við venjulega notkun og viftan gengur stöðugt. Rafhlaðan endist ekki lengur en nokkrar mínútur. Lyklar virka ekki eða línur eða dökkir blettir sjást á skjánum.',
          'Stundum er vandamálið einföld lausn – eins og hreinsun vegna ryks í kælikerfi – en stundum þarf varahluta. Ég segi þér hvað á við í þínu tilfelli.',
        ],
      },
      {
        heading: 'Fyrir hverja er þetta?',
        paragraphs: [
          'Nemendur, starfsfólk sem vinnur heima, og allir sem treysta á fartölvuna sína daglega og vilja ekki kaupa nýja án þess að skoða viðgerðarúrræði fyrst.',
        ],
      },
    ],
    pricing:
      'Bilanagreining kostar 9.900 kr. með VSK. Viðgerðir og varahlutir koma í ljós eftir greiningu. SSD-skipti og minnisuppfærslur eru oft hagkvæm leið til að bæta gamla fartölvu.',
    timeline:
      'Greining tekur 1–2 daga. Einfaldar lagfæringar eru oft tilbúnar sömu viku. Varahlutir geta tekið 3–10 daga eftir birgðastöðu.',
    audience: 'Einstaklingar og smáfyrirtæki með fartölvur sem þurfa áreiðanlega viðgerð eða uppfærslu.',
    faq: [
      {
        question: 'Er gamla fartölvan þess virði að laga?',
        answer:
          'Oft já – sérstaklega ef hún er 3–7 ára og vandamálið er diskur, minni eða hreinsun. Ég gef heiðarlegt mat eftir greiningu.',
      },
      {
        question: 'Af hverju hitnar fartölvan svona mikið?',
        answer:
          'Algengar ástæður eru stíflað kælikerfi vegna ryks, gömul rafhlaða sem keyrir viftu stöðugt, eða of mikið álag á örgjörva. Hreinsun og uppfærslur geta oft lagað þetta.',
      },
      {
        question: 'Geturðu skipt um rafhlöðu?',
        answer:
          'Ég met hvort rafhlöðuskipti borgi sig og get pantað varahlut ef við á. Sumar fartölvur eru erfiðari en aðrar – ég segi þér frá því fyrirfram.',
      },
    ],
  },
  {
    slug: 'ssd-uppfaersla',
    metaTitle: 'SSD uppfærsla – hæg tölva löguð | Tölvuhvíslarinn',
    metaDescription:
      'Er tölvan hæg? SSD uppfærsla getur gert hana mun hraðvirkari. Gagnaflutningur og uppsetning á Austurlandi. Fáðu mat á kostnaði.',
    h1: 'SSD uppfærsla og hæg tölva löguð',
    intro:
      'Ef tölvan ræsist hægt, forrit opnast seint og allt virkar eins og það sé á átta ára gömlum harðdiski, gæti SSD uppfærsla verið besta fjárfestingin. Ég set upp nýjan SSD, flyt gögn yfir og prófa allt áður en þú færð tölvuna til baka.',
    serviceAreas: ['Neskaupstaður', 'Fjarðabyggð', 'Austurland'],
    overviewCardTitle: 'SSD uppfærsla',
    sections: [
      {
        heading: 'Hvað er gert?',
        paragraphs: [
          'Ég athuga hvort tölvan þín henti fyrir SSD uppfærslu, ráðlegg réttan stærðarflokk og set upp diskinn. Gögnin þín – myndir, skjöl, forrit – eru flutt yfir á nýja diskinn eða Windows sett upp á nýtt ef það hentar betur.',
          'Að lokum prófa ég ræsingu, hraða og að allt virki eins og áður – bara mun hraðar.',
        ],
      },
      {
        heading: 'Algeng einkenni sem SSD leysir',
        paragraphs: [
          'Tölvan tekur 2–5 mínútur að ræsa. Windows segir að diskurinn sé fullur. Tölvan frystir þegar margt er opið. Hljóð kemur frá gömlum hörðum diski (HDD). Forrit taka langan tíma að opna.',
          'SSD er oft 5–10 sinnum hraðvirkari en gamall HDD og getur gefið tölvu sem er 5–8 ára nýtt líf.',
        ],
      },
      {
        heading: 'Fyrir hverja er þetta?',
        paragraphs: [
          'Allir sem vilja hraðari tölvu án þess að kaupa nýja vél. Sérstaklega gott fyrir heimilis- og vinnutölvur sem enn eru í góðu standi en hafa orðið hægar með árunum.',
        ],
      },
    ],
    pricing:
      'Verð fer eftir stærð SSD og hvort gögn eða Windows þurfa flutning. Hafðu samband og ég gef tilboð – SSD kostar venjulega 8.000–25.000 kr. auk vinnu og uppsetningar.',
    timeline:
      'SSD uppfærsla með gagnaflutningi tekur venjulega 1–3 virka daga eftir að varahlutur er til.',
    audience: 'Einstaklingar og fyrirtæki með hægar tölvur sem vilja skýrt verðmat og áreiðanlega uppsetningu.',
    faq: [
      {
        question: 'Hvenær borgar sig að setja SSD í gamla tölvu?',
        answer:
          'Ef tölvan er yngri en 8–10 ára og örgjörvinn er enn nógu öflugur fyrir þín verkefni, er SSD oft besta uppfærslan. Ég met þetta fyrir hverja tölvu.',
      },
      {
        question: 'Tapast gögnin mín?',
        answer:
          'Ég tek afrit áður en flutningur hefst og prófa allt vandlega. Öryggisafrit er hluti af ferlinu.',
      },
      {
        question: 'Get ég haldið gömlu gögnunum?',
        answer:
          'Já, í flestum tilfellum er hægt að flytja allt yfir á nýjan disk. Stundum er betra að setja Windows upp á nýtt og flytja aðeins valin gögn – ég ráðlegg eftir stöðu tölvunnar.',
      },
    ],
  },
  {
    slug: 'sersmidid-bordtolva',
    metaTitle: 'Sérsmíði borðtölva og leikjatölva | Tölvuhvíslarinn',
    metaDescription:
      'Sérsmíðaðar borðtölvur og leikjatölvur smíðaðar eftir þörfum á Austurlandi. Ráðgjöf, íhlutaval, samsetning og prófanir. Hafðu samband.',
    h1: 'Sérsmíði borðtölva og leikjatölva',
    intro:
      'Vantar þig nýja borðtölvu – til leiks, vinnu eða heimilisnotkunar? Ég smíða sérsniðnar borðtölvur eftir raunverulegum þörfum og fjárhagsáætlun, vel íhluti sem passa saman og set allt saman með prófunum fyrir afhendingu.',
    serviceAreas: ['Neskaupstaður', 'Fjarðabyggð', 'Austurland', 'Egilsstaðir'],
    overviewCardTitle: 'Sérsmíði borðtölva',
    sections: [
      {
        heading: 'Hvað er gert?',
        paragraphs: [
          'Við byrjum á samtali um hvað þú ætlar að nota tölvuna í – leikir, myndvinnsla, skrifstofuverk eða blanda. Ég vel íhluti sem passa saman, panta ef þarf, set saman, set upp Windows og prófa allt.',
          'Þú færð tölvu sem er tilbúin til notkunar – ekki kassa af íhlutum sem þú átt að finna út úr sjálfur.',
        ],
      },
      {
        heading: 'Leikjatölva, vinnutölva eða heimilistölva?',
        paragraphs: [
          'Leikjatölva þarf oft sterkara skjákort og nægilegt kælikerfi. Vinnutölva gæti þurft meira minni og hraðan disk en leikir krefjast. Heimilistölva getur verið hagstæð og þögul.',
          'Ég útskýri muninn án tæknimáls og hjálpa þér að velja eitthvað sem hentar raunverulegum notkun þinni – og fjárhagsáætlun.',
        ],
      },
      {
        heading: 'Fyrir hverja er þetta?',
        paragraphs: [
          'Leikjaspilarar, fermingarbörn sem fá fyrstu tölvuna, smáfyrirtæki sem þurfa áreiðanlega vinnutölvu, og allir sem vilja borðtölvu sem er smíðuð fyrir sig – ekki tilbúin lausn úr stórri verslun.',
        ],
      },
    ],
    pricing:
      'Verð fer eftir íhlutum og notkun. Einfaldar heimilistölvur geta byrjað um 120.000–180.000 kr., leikjatölvur 200.000–400.000 kr. og upp. Ég gef alltaf skriflegt tilboð áður en pöntun fer fram.',
    timeline:
      '2–4 vikur eftir samþykki, fer eftir birgðastöðu íhluta. Flýtitíma er hægt að ræða ef íhlutir eru til.',
    audience: 'Einstaklingar og fyrirtæki sem vilja sérsniðna borðtölvu með persónulegri ráðgjöf á Austurlandi.',
    faq: [
      {
        question: 'Er betra að smíða eða kaupa tilbúna tölvu?',
        answer:
          'Sérsmíði gefur betri stjórn á gæðum og uppfærslum. Tilbúnar tölvur geta hentað ef þú þarft strax og hefur takmarkaðan fjárhag – ég get líka ráðlagt þar.',
      },
      {
        question: 'Get ég uppfært tölvuna síðar?',
        answer:
          'Já, það er einn kostur sérsmíðaðra tölva. Ég vel íhluti sem auðvelt er að uppfæra – t.d. aukið minni eða stærra skjákort.',
      },
      {
        question: 'Hvað með ábyrgð?',
        answer:
          'Íhlutir koma með framleiðandaábyrgð. Ég stend við vinnuna mína og hjálpa ef eitthvað kemur upp eftir afhendingu.',
      },
    ],
  },
  {
    slug: 'taekniaadstod-fyrirtaeki',
    metaTitle: 'Tækniaðstoð fyrir smáfyrirtæki | Tölvuhvíslarinn',
    metaDescription:
      'Tækniráðgjöf og tölvuaðstoð fyrir smáfyrirtæki á Austurlandi. Kaupráðgjöf, uppsetning, netkerfi og öryggisafrit. 12.000 kr./klst.',
    h1: 'Tækniaðstoð fyrir smáfyrirtæki',
    intro:
      'Smáfyrirtæki á Austurlandi þurfa oft áreiðanlega tækniaðstoð án stórra IT-samninga. Ég býð upp á persónulega ráðgjöf, uppsetningu og lausnir sem henta raunverulegum þörfum – hvort sem um ræðir einn starfsmann eða lítið teymi.',
    serviceAreas: ['Neskaupstaður', 'Fjarðabyggð', 'Austurland', 'Egilsstaðir', 'Reyðarfjörður'],
    overviewCardTitle: 'Tækniaðstoð fyrir fyrirtæki',
    sections: [
      {
        heading: 'Hvað er gert?',
        paragraphs: [
          'Ráðgjöf við kaup á tölvum og búnaði, uppsetning nýrra vinnustöðva, skipulag á skráarsafni og öryggisafritum, netkerfisuppsetning, og aðstoð við hugbúnað og netöryggi.',
          'Ég tala íslensku og útskýri hlutina án flókins tæknimáls – svo þú getir tekið ákvarðanir með skýrri mynd af kostnaði og ávinningi.',
        ],
      },
      {
        heading: 'Algeng verkefni',
        paragraphs: [
          'Nýtt fyrirtæki þarf að koma tölvum og netkerfi á laggirnar. Gömul lausn er orðin hæg og óörugg. Starfsfólk þarf að vinna heima og þarf aðgang að skrám. Enginn ber ábyrgð á öryggisafritum og allt er á hættu ef diskur dettur út.',
          'Ég hjálpa til við að setja upp einfalt en áreiðanlegt kerfi sem hentar stærð fyrirtækisins – ekki of flókið, ekki of dýrt.',
        ],
      },
      {
        heading: 'Fyrir hverja er þetta?',
        paragraphs: [
          'Fyrir smáfyrirtæki, sjálfstætt starfandi einstaklinga, verslanir og þjónustufyrirtæki á Austurlandi sem vilja hafa einn tæknimann sem þau treysta.',
        ],
      },
    ],
    pricing:
      'Tækniráðgjöf er 12.000 kr./klst með VSK. Fyrir stærri verkefni er hægt að semja um fast verð eftir stöðu.',
    timeline:
      'Einföld ráðgjöf eftir samkomulagi. Uppsetning nýrrar vinnustöðvar 1–2 dagar. Stærri verkefni eftir umfangi.',
    audience: 'Smáfyrirtæki og sjálfstætt starfandi einstaklingar á Austurlandi.',
    faq: [
      {
        question: 'Er hægt að fá reglulega aðstoð?',
        answer:
          'Já, við getum samþykkt reglulegt samstarf eða aðstoð eftir þörfum – hringdu eða sendu línu.',
      },
      {
        question: 'Geturðu komið á staðinn?',
        answer:
          'Já, fyrir fyrirtæki á Austurlandi get ég mætt á staðinn eftir samkomulagi.',
      },
      {
        question: 'Hjálparðu við netöryggi?',
        answer:
          'Ég set upp grunn fyrir öryggisafrit, lykilorðastjórnun og ráðlegg um einfaldar öryggisreglur. Flóknari netöryggismál vísa ég á sérfræðinga ef þörf krefur.',
      },
    ],
  },
  {
    slug: 'vhs-minidv',
    metaTitle: 'VHS og MiniDV yfir á stafrænt form | Tölvuhvíslarinn',
    metaDescription:
      'Láttu gamlar VHS og MiniDV upptökur yfirfæra á stafrænt form á Austurlandi. Filmur eyðileggjast með tímanum – bjargaðu minningunum. Hafðu samband.',
    h1: 'VHS og MiniDV yfir á stafrænt form',
    intro:
      'Gamlar VHS-spólur og MiniDV-upptökur geyma minningar sem ekki er hægt að endurtaka – en segulböndin skemmast smám saman. Ég yfirfæri upptökur á stafrænt form svo þú getir varðveitt þær á hörðum diski, USB-lykli eða í skýi.',
    serviceAreas: ['Neskaupstaður', 'Fjarðabyggð', 'Austurland'],
    overviewCardTitle: 'VHS og MiniDV',
    sections: [
      {
        heading: 'Hvað er gert?',
        paragraphs: [
          'Ég tek við VHS spólum og MiniDV kasettum, yfirfæri efnið á stafrænt form (venjulega MP4) og afhendi á USB-stiku eða netdrif eftir samkomulagi.',
          'Þjónustan er takmörkuð við VHS og MiniDV eins og er – ég tek ekki við öllum gerðum af gömlum miðlum.',
        ],
      },
      {
        heading: 'Af hverju brýnt?',
        paragraphs: [
          'Segulband í VHS-spólum eyðileggst með tímanum – myndin verður skemmd eða kornótt, litirnir dofna og hljóðið tapast. MiniDV er stöðugri en kasettur geta líka skemmst.',
          'Ef þú átt upptökur frá barnæsku, brúðkaupum eða fjölskyldusamkomum er betra að bjarga þeim núna en að bíða.',
        ],
      },
      {
        heading: 'Fyrir hverja er þetta?',
        paragraphs: [
          'Einstaklingar og fjölskyldur á Austurlandi sem eiga gamlar upptökur og vilja varðveita þær á öruggan hátt án þess að kaupa dýran búnað sjálfir.',
        ],
      },
    ],
    pricing:
      'Verð fer eftir lengd efnisins og fjölda spóla. Hafðu samband og lýstu magni – ég gef skýrt verðmat. Þjónustan er hagkvæm á svæðinu.',
    timeline:
      'Venjulega 3–7 virkir dagar eftir að kasettur berast, eftir magni.',
    audience: 'Einstaklingar og fjölskyldur með VHS eða MiniDV upptökur sem vilja bjarga minningum.',
    faq: [
      {
        question: 'Hvaða snið fæ ég skrárnar?',
        answer:
          'Venjulega MP4 sem virkar á flestum tækjum – spilurum, símum, sjónvörpum og tölvum.',
      },
      {
        question: 'Get ég fengið skrárnar á USB?',
        answer:
          'Já, afhending á USB-stiku eða yfir net er algeng. Við finnum leið sem hentar þér.',
      },
      {
        question: 'Hvað ef spólan er skemmd?',
        answer:
          'Ég met ástand áður en vinna hefst. Stundum er hægt að bjarga hluta af efni – ég segi þér heiðarlega frá möguleikum.',
      },
    ],
  },
  {
    slug: 'gagnaflutningur',
    metaTitle: 'Gagnaflutningur og öryggisafrit | Tölvuhvíslarinn',
    metaDescription:
      'Gagnaflutningur, öryggisafrit og uppsetning nýrrar tölvu á Austurlandi. Myndir, skjöl og forrit flutt yfir á öruggan hátt. Hafðu samband.',
    h1: 'Gagnaflutningur, öryggisafrit og ný tölva sett upp',
    intro:
      'Keyptir þú nýja tölvu eða skiptirðu um disk? Ég flyt gögnin þín yfir á öruggan hátt, set upp Windows og forrit, og tryggi að öryggisafrit sé til staðar svo ekkert týnist.',
    serviceAreas: ['Neskaupstaður', 'Fjarðabyggð', 'Austurland'],
    overviewCardTitle: 'Gagnaflutningur',
    sections: [
      {
        heading: 'Hvað er gert?',
        paragraphs: [
          'Flutningur á myndum, skjölum, tölvupósti og forritum úr gömlu tölvunni yfir í þá nýju. Uppsetning Windows, uppfærslur og grunnforrit. Stilling öryggisafritunar – á USB, netdrif eða ský eftir þörfum.',
          'Ég passa að ekkert gleymist og að nýja tölvan sé tilbúin til notkunar þegar þú færð hana til baka.',
        ],
      },
      {
        heading: 'Algengar aðstæður',
        paragraphs: [
          'Ný tölva keypt og þarf að fá allt yfir. Gamla tölvan er að gefa sig og þarf að bjarga gögnunum. Windows þarf að setja upp á nýtt eftir vírus eða bilun. Engin afritun – og þú vilt ekki taka áhættuna.',
        ],
      },
      {
        heading: 'Fyrir hverja er þetta?',
        paragraphs: [
          'Einstaklingar sem keyptu nýja tölvu og vilja ekki missa af gögnum, og fyrirtæki sem þurfa skipulega flutning og afritun.',
        ],
      },
    ],
    pricing:
      'Verð fer eftir magni gagna og flækjustig. Einfaldur flutningur getur verið frá 12.000 kr., flóknari verkefni eftir stöðu. Hafðu samband fyrir tilboð.',
    timeline:
      'Einfaldur flutningur 1–2 dagar. Stærri verkefni með mörgum tölvum eftir samkomulagi.',
    audience: 'Einstaklingar og smáfyrirtæki sem kaupa nýja tölvu eða þurfa öryggisafrit.',
    faq: [
      {
        question: 'Tapast gögnin mín við flutning?',
        answer:
          'Ég tek afrit áður en vinna hefst og staðfesti að allt hafi flust rétt. Öryggi gagnanna er forgangsverkefni.',
      },
      {
        question: 'Geturðu flutt forrit líka?',
        answer:
          'Sum forrit er hægt að flytja yfir, önnur þurfa enduruppsetningu. Ég segi þér hvað er hægt fyrir hvert forrit.',
      },
      {
        question: 'Hjálparðu við öryggisafrit?',
        answer:
          'Já, ég set upp einfalt afritunarkerfi sem hentar þínum þörfum – svo þú sért ekki háður einum disk.',
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
