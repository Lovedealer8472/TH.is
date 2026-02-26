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

export const newsArticles: NewsArticle[] = [
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
