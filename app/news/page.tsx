'use client';

import { useI18n } from '@/lib/i18n';
import { newsArticles } from '@/lib/news';

export default function NewsPage() {
  const { language, t } = useI18n();
  const isIcelandic = language === 'is';

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-100 mb-8">
          {t.nav.news}
        </h1>

        <div className="space-y-8">
          {newsArticles.map((article) => (
            <article key={article.id} className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8">
              <time className="text-sm text-gray-400 mb-3 block">
                {article.date}
              </time>
              <h2 className="text-2xl font-bold text-gray-100 mb-4">
                {isIcelandic ? article.title.is : article.title.en}
              </h2>
              <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                {isIcelandic ? article.content.is : article.content.en}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
