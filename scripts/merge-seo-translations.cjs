const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', 'lib', 'translations');

const isPatch = {
  home: {
    serviceArea: {
      heading: 'Þjónusta á Austurlandi',
      description:
        'Ég þjónusta viðskiptavini í Neskaupstað og víðar á Austurlandi – þar á meðal Fjarðabyggð, Norðfirði, Eskifirði, Reyðarfirði og Egilsstöðum.',
      areas:
        'Neskaupstaður · Norðfjörður · Eskifjörður · Reyðarfjörður · Fjarðabyggð · Egilsstaðir · Austurland',
    },
    projectsLab: {
      heading: 'Ég smíða líka hugbúnaðarlausnir og tilraunaverkefni',
      description:
        'Auk hefðbundinnar tölvuþjónustu vinn ég að hugbúnaðarverkefnum – texti í tal, tæknileg tilraun og sérlausnir. Þetta er sérstakur hluti af starfseminni, en aðaláherslan er á viðgerðir og tækniaðstoð.',
      link: 'Skoða verkefni',
    },
    readMore: 'Nánar um þjónustuna',
  },
  services: {
    readMore: 'Nánar',
    detailPagesHeading: 'Nánar um þjónustuna',
  },
  projectsMuninn: {
    tag: 'Verkefnastjórnun · SaaS',
    title: 'Muninn — Verkefnastjórnun fyrir smáfyrirtæki',
    description:
      'Muninn er verkefnastjórnunar- og viðskiptakerfi sem hjálpar smáfyrirtækjum að halda utan um verkefni, viðskiptavini og samskipti á einum stað. Kanban-borð, tölvupóstur, rekja stöðu og prenta skýrslur — hannað fyrir íslenskt smáfyrirtæki.\n\nPrófaðu kynninguna eða sæktu um prufuaðgang.',
    features: {
      kanban: 'Kanban verkefnaborð',
      email: 'Tölvupóstur og samskipti',
      track: 'Rekja stöðu verkefna',
      print: 'Prenta skýrslur',
    },
    cta: 'Opna kynningu',
    trialCta: 'Sækja um prufuaðgang',
  },
  trial: {
    title: 'Prufuaðgangur að Muninn',
    subtitle: 'Verkefnastjórnun og viðskiptakerfi fyrir smáfyrirtæki',
    intro:
      'Muninn hjálpar þér að halda utan um verkefni, viðskiptavini og samskipti. Sæktu um prufuaðgang og fáðu eigin undirlén á muninn.tolvuhvislarinn.is.',
    bullet1: 'Kanban-borð og verkefnalisti',
    bullet2: 'Tölvupóstur og samskipti við viðskiptavini',
    bullet3: 'Rekja stöðu og prenta skýrslur',
    bullet4: 'Hannað fyrir íslenskt smáfyrirtæki',
    note: 'Prufuaðgangur er ókeypis og án skuldbindingar. Ég hafna samband við þig innan eins virks dags.',
    demoLink: 'Skoða kynningu á muninn.tolvuhvislarinn.is',
    form: {
      shopName: 'Nafn fyrirtækis / verslunar',
      contactName: 'Tengiliður',
      email: 'Netfang',
      phone: 'Sími',
      subdomain: 'Undirlén',
      subdomainHint: 't.d. min-verslun → min-verslun.muninn.tolvuhvislarinn.is',
      invalidSubdomain: 'Undirlén verður að vera 2–25 stafir, aðeins lágstafir, tölur og bandstrik.',
      message: 'Skilaboð (valfrjálst)',
      submit: 'Senda umsókn',
      sending: 'Sendi…',
      success: 'Takk! Umsóknin þín hefur borist. Ég hafna samband fljótlega.',
      error: 'Villa kom upp. Reyndu aftur eða hafðu samband beint.',
    },
  },
};

const enPatch = {
  home: {
    serviceArea: {
      heading: 'Serving East Iceland',
      description:
        'I serve customers in Neskaupstaður and across East Iceland – including Fjarðabyggð, Norðfjörður, Eskifjörður, Reyðarfjörður, and Egilsstaðir.',
      areas:
        'Neskaupstaður · Norðfjörður · Eskifjörður · Reyðarfjörður · Fjarðabyggð · Egilsstaðir · East Iceland',
    },
    projectsLab: {
      heading: 'I also build software and experimental projects',
      description:
        'Alongside traditional computer services, I work on software projects – text-to-speech, technical experiments, and custom solutions. This is a separate part of the business; the main focus is repairs and tech support.',
      link: 'View projects',
    },
    readMore: 'Learn more',
  },
  services: {
    readMore: 'Learn more',
    detailPagesHeading: 'Service details',
  },
  projectsMuninn: {
    tag: 'Project management · SaaS',
    title: 'Muninn — Project management for small businesses',
    description:
      'Muninn is a project management and business tool that helps small companies keep tasks, customers, and communication in one place. Kanban boards, email, status tracking, and printable reports — built for Icelandic small businesses.\n\nTry the demo or request a trial account.',
    features: {
      kanban: 'Kanban project boards',
      email: 'Email and communication',
      track: 'Track project status',
      print: 'Print reports',
    },
    cta: 'Open demo',
    trialCta: 'Request trial access',
  },
  trial: {
    title: 'Muninn trial access',
    subtitle: 'Project management and business tools for small companies',
    intro:
      'Muninn helps you manage projects, customers, and communication. Request a trial and get your own subdomain at muninn.tolvuhvislarinn.is.',
    bullet1: 'Kanban boards and task lists',
    bullet2: 'Email and customer communication',
    bullet3: 'Status tracking and printable reports',
    bullet4: 'Built for Icelandic small businesses',
    note: 'Trial access is free with no commitment. I will contact you within one business day.',
    demoLink: 'View demo at muninn.tolvuhvislarinn.is',
    form: {
      shopName: 'Business / shop name',
      contactName: 'Contact person',
      email: 'Email',
      phone: 'Phone',
      subdomain: 'Subdomain',
      subdomainHint: 'e.g. my-shop → my-shop.muninn.tolvuhvislarinn.is',
      invalidSubdomain: 'Subdomain must be 2–25 characters, lowercase letters, numbers, and hyphens only.',
      message: 'Message (optional)',
      submit: 'Submit request',
      sending: 'Sending…',
      success: 'Thank you! Your request was received. I will contact you soon.',
      error: 'Something went wrong. Please try again or contact us directly.',
    },
  },
};

function merge(base, patch) {
  for (const [key, value] of Object.entries(patch.home)) {
    base.home[key] = value;
  }
  for (const [key, value] of Object.entries(patch.services)) {
    base.services[key] = value;
  }
  if (patch.projectsMuninn) {
    base.projects.muninn = patch.projectsMuninn;
  }
  if (patch.trial) {
    base.trial = patch.trial;
  }
}

for (const [file, patch] of [
  ['is.json', isPatch],
  ['en.json', enPatch],
]) {
  const filePath = path.join(root, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  merge(data, patch);
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`);
  console.log(`Patched ${file}`);
}
