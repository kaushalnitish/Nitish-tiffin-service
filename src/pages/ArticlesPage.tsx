import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getArticleBySlug, PUBLIC_ARTICLE_AUTHOR } from '../data/articles';
import { getOptimizedImage } from '../config/images';
import { OrderSection } from '../components/OrderSection';

export const ArticlesPage: React.FC = () => {
  const TARGET_SLUG = 'why-simple-home-cooked-food-matters-for-working-days-in-chamba';
  const article = getArticleBySlug(TARGET_SLUG);
  const optImage = article ? getOptimizedImage(article.featuredImage) : null;

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Food Journal & Guides | Nitish Tiffin Service Chamba',
    description:
      'A collection of practical guides on home cooking, local Himachali vegetables, and daily tiffin services in Chamba.',
    url: 'https://nitishtiffinservice.com/articles',
  };

  return (
    <>
      <SEOHead
        title="Food Journal & Local Guides | Nitish Tiffin Service Chamba"
        description="Practical guides on simple home food, seasonal Himachal vegetables, monthly tiffin comparisons, and healthy daily eating routines in Chamba town."
        canonicalPath="/articles"
        schema={collectionSchema}
      />

      <Breadcrumbs items={[{ name: 'Food Journal', url: '/articles' }]} />

      <main className="flex-1 w-full py-4 sm:py-8">
        {/* Header */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <span className="text-xs font-bold text-[#55695A] uppercase tracking-wider block mb-1">
            LOCAL EDITORIAL & FOOD STORIES
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#183824]">
            Food Journal & Guides from Chamba
          </h1>
          <p className="text-sm sm:text-base text-[#4C5B50] mt-2 max-w-2xl mx-auto leading-relaxed">
            Written from real daily kitchen experience in Chamba. Practical insights on eating simple, seasonal mountain food, and choosing the right meal routine for your workday.
          </p>
        </div>

        {/* Single Genuine Featured Article */}
        {article && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
            <article className="rounded-3xl bg-white border border-[#E3DFD2] overflow-hidden shadow-2xs grid grid-cols-1 lg:grid-cols-12 group hover:border-[#183824]/40 transition-all">
              <div className="lg:col-span-6 aspect-16/10 lg:aspect-auto overflow-hidden bg-[#EAE8DE]">
                {optImage && (
                  <picture className="w-full h-full block">
                    <source
                      type="image/avif"
                      srcSet={optImage.avifSrcSet}
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />
                    <source
                      type="image/webp"
                      srcSet={optImage.webpSrcSet}
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />
                    <img
                      src={optImage.fallbackSrc}
                      srcSet={optImage.fallbackSrcSet}
                      sizes="(max-width: 1024px) 100vw, 500px"
                      width={optImage.width}
                      height={optImage.height}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                      loading="eager"
                      fetchPriority="high"
                      decoding="sync"
                    />
                  </picture>
                )}
              </div>

              <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
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

                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#183824] leading-tight group-hover:text-emerald-800 transition-colors">
                    <Link to={`/articles/${article.slug}`}>{article.title}</Link>
                  </h2>

                  <p className="text-sm sm:text-base text-[#4E5F52] mt-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F2EFE8] flex items-center justify-between">
                  <div className="text-xs text-[#718275]">
                    <span className="font-medium text-[#183824] block">{PUBLIC_ARTICLE_AUTHOR}</span>
                    <span>Published on {article.publishedAt}</span>
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
        )}

        {/* Bottom CTA */}
        <OrderSection />
      </main>
    </>
  );
};
