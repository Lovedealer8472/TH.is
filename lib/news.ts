export interface NewsArticle {
  id: number;
  date: string;
  title: {
    is: string;
    en: string;
  };
  content: {
    is: string;
    en: string;
  };
}

/** Display ISO date (YYYY-MM-DD) in the site language; avoids UTC shift for calendar dates. */
export function formatNewsDate(isoDate: string, locale: "is" | "en"): string {
  const d = new Date(`${isoDate}T12:00:00`);
  return new Intl.DateTimeFormat(locale === "is" ? "is" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
}

export const newsArticles: NewsArticle[] = [
  {
    id: 3,
    date: "2026-08-20",
    title: {
      is: "Tölvuhvíslarinn hlaut styrk úr Uppbyggingarsjóði Austurlands",
      en: "Tölvuhvíslarinn awarded a grant from Uppbyggingarsjóður Austurlands"
    },
    content: {
      is: "Verkefnið Tölvuhvíslarinn hlaut styrk úr Uppbyggingarsjóði Austurlands fyrir árið 2026 — eitt af 54 verkefnum sem hlutu styrk af 97 umsóknum sem bárust.\n\nStyrkurinn nam 800.000 kr.\n\nVerkefninu er nú lokið og lokaskýrslu hefur verið skilað. Kærar þakkir til Uppbyggingarsjóðs Austurlands fyrir stuðninginn.",
      en: "The Tölvuhvíslarinn project was awarded a grant from Uppbyggingarsjóður Austurlands (the Eastern Iceland Regional Growth Fund) for 2026 — one of 54 projects to receive funding out of 97 applications submitted.\n\nThe grant amounted to 800,000 ISK.\n\nThe project is now complete, and the final report has been submitted. Many thanks to Uppbyggingarsjóður Austurlands for the support."
    }
  },
  {
    id: 2,
    date: "2026-04-10",
    title: {
      is: "Tölvuhvíslarinn tekur þátt í Tæknidegi fjölskyldunnar",
      en: "Tölvuhvíslarinn at Tæknidagur fjölskyldunnar (Family Tech Day)"
    },
    content: {
      is: "Þann 18. apríl.\n\nVerið þar eða verið ferhyrningar",
      en: "Join us on 18 April.\n\nBe there or be square!"
    }
  },
  {
    id: 1,
    date: "2025-02-26",
    title: {
      is: "Tölvuhvíslarinn er núna í samstarfi við Kísildal!",
      en: "Tölvuhvíslarinn is now in partnership with Kísildal!"
    },
    content: {
      is: "Ég mun sjá um bilanagreiningu og tilfallandi verkefni fyrir viðskiptavini þeirra hér fyrir austan.\n\nKísildalur hefur í mörg ár verið ein besta tölvuverslun og verkstæði landsins — það er bæði heiður og forréttindi að fá að vinna með þeim.\nSpennandi byrjun á góðu samstarfi!",
      en: "I will handle diagnostics and occasional projects for their customers here in the east.\n\nKísildal has for many years been one of the best computer shops and workshops in the country — it is both an honor and a privilege to get to work with them.\nExciting start to a good collaboration!"
    }
  }
];
