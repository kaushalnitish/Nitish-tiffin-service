import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Clock, Calendar } from 'lucide-react';
import { getPublishedArticles, PUBLIC_ARTICLE_AUTHOR } from '../data/articles';

export const ArticlesTeaserSection: React.FC = () => {
  const articles = getPublishedArticles();
  const article = articles[0];

  if (!article) return null;

  return (
    <section className="py-14 sm:py-20 bg-[#FAF9F5] border-t border-[#EAE7DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-[#55695A] uppercase tracking-wider block mb-1">
              FOOD JOURNAL & LOCAL INSIGHTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#183824]">
              Stories & Insights from Chamba
            </h2>
            <p className="text-sm sm:text-base text-[#4C5B50] mt-1 max-w-xl">
              Practical guides on home food, seasonal cooking, and everyday meal routines for students and working professionals in Chamba.
            </p>
          </div>

          <Link
            to="/articles"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#183824] hover:underline shrink-0"
          >
            <span>View Food Journal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Single Featured Article Card */}
        <div className="max-w-4xl mx-auto">
          <article className="rounded-3xl bg-white border border-[#E3DFD2] overflow-hidden shadow-2xs grid grid-cols-1 md:grid-cols-12 group hover:border-[#183824]/40 transition-all">
            <div className="md:col-span-5 aspect-16/10 md:aspect-auto overflow-hidden bg-[#EAE8DE]">
              <img
                src={article.featuredImage}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                loading="lazy"
              />
            </div>

            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#6B7D6F] mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#EBF2EC] font-semibold text-[#183824]">
                    Featured Story
                  </span>
                  <span>•</span>
                  <span>{article.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readingTime}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#183824] leading-snug group-hover:text-emerald-800 transition-colors">
                  <Link to={`/articles/${article.slug}`}>{article.title}</Link>
                </h3>

                <p className="text-xs sm:text-sm text-[#4E5F52] mt-3 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[#F2EFE8] flex items-center justify-between">
                <div className="text-xs text-[#718275]">
                  <span className="font-medium text-[#183824] block">{PUBLIC_ARTICLE_AUTHOR}</span>
                  <span className="text-[11px] text-[#7E8E81]">Published on {article.publishedAt}</span>
                </div>

                <Link
                  to={`/articles/${article.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#183824] text-white text-xs font-semibold hover:bg-[#11291A] transition-all"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
