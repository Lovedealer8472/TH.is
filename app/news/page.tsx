'use client';

import { useI18n } from '@/lib/i18n';
import { formatNewsDate, newsArticles } from '@/lib/news';

function ArticleBody({ text }: { text: string }) {
  const blocks = text.split(/\n\n/).filter(Boolean);
  return (
    <div className="space-y-4 text-base text-gray-300 leading-relaxed max-w-prose">
      {blocks.map((block, i) => {
        const isClosing = blocks.length > 1 && i === blocks.length - 1;
        return (
          <p
            key={i}
            className={
              isClosing
                ? 'text-gray-200/95 italic pl-4 border-l-2 border-primary-500/35 text-[1.02rem]'
                : undefined
            }
          >
            {block}
          </p>
        );
      })}
    </div>
  );
}

export default function NewsPage() {
  const { language, t } = useI18n();
  const isIcelandic = language === 'is';
  const dateLocale = isIcelandic ? 'is' : 'en';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <header className="mb-12 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">
            {t.nav.news}
          </h1>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-primary-500/80 to-transparent rounded-full" />
        </header>

        <div className="space-y-10 sm:space-y-12">
          {newsArticles.map((article) => (
            <article
              key={article.id}
              className="group rounded-2xl border border-gray-700/50 bg-gray-800/25 backdrop-blur-sm p-7 sm:p-8 shadow-lg shadow-black/20 transition-colors duration-300 hover:border-primary-500/25 hover:bg-gray-800/35"
            >
              <time
                dateTime={article.date}
                className="mb-4 block text-xs font-medium uppercase tracking-wider text-primary-400/90"
              >
                {formatNewsDate(article.date, dateLocale)}
              </time>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-100 mb-5 leading-snug">
                {isIcelandic ? article.title.is : article.title.en}
              </h2>
              <ArticleBody
                text={isIcelandic ? article.content.is : article.content.en}
              />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
