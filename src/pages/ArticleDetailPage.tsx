import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Clock, Calendar, User, ArrowLeft, MessageCircle, Phone, MapPin, Share2 } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getArticleBySlug, PUBLIC_ARTICLE_AUTHOR } from '../data/articles';
import { CONTACTS, BUSINESS } from '../config/siteContent';

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/articles" replace />;
  }

  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="py-20 text-center max-w-md mx-auto px-4">
        <h1 className="text-2xl font-bold text-[#183824] mb-2">Article Not Found</h1>
        <p className="text-sm text-[#4E5F52] mb-6">
          The requested guide could not be found. It may have been moved or updated.
        </p>
        <Link
          to="/articles"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#183824] text-white text-xs font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Food Journal</span>
        </Link>
      </div>
    );
  }

  // Schema: Article + BreadcrumbList
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.seoDescription || article.excerpt,
    image: article.featuredImage.startsWith('http')
      ? article.featuredImage
      : `https://nitishtiffinservice.com${article.featuredImage}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      '@type': 'Person',
      name: 'Admin',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nitish Tiffin Service',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nitishtiffinservice.com/nitish_tiffin_mascot_logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://nitishtiffinservice.com/articles/${article.slug}`,
    },
  };

  const breadcrumbs = [
    { name: 'Food Journal', url: '/articles' },
    { name: article.title, url: `/articles/${article.slug}` },
  ];

  return (
    <>
      <SEOHead
        title={`${article.seoTitle || article.title} | Nitish Tiffin Service`}
        description={article.seoDescription || article.excerpt}
        canonicalPath={`/articles/${article.slug}`}
        ogImage={article.featuredImage}
        ogType="article"
        publishedTime={article.publishedAt}
        author="Admin"
        schema={articleSchema}
      />

      <Breadcrumbs items={breadcrumbs} />

      <article className="py-6 sm:py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category & Meta */}
        <div className="flex items-center gap-2 text-xs text-[#6B7D6F] mb-4">
          <Link
            to="/articles"
            className="px-3 py-1 rounded-full bg-[#EBF2EC] font-semibold text-[#183824] hover:bg-[#DCE7DE] transition-colors"
          >
            {article.category}
          </Link>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readingTime}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {article.publishedAt}
          </span>
        </div>

        {/* Semantic H1 */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#183824] leading-tight mb-4">
          {article.title}
        </h1>

        {/* Excerpt / Lead */}
        <p className="text-base sm:text-lg text-[#47574B] leading-relaxed mb-6 font-normal">
          {article.excerpt}
        </p>

        {/* Author Byline: Always "Posted by Admin" & "Published on [date]" */}
        <div className="flex items-center justify-between py-3.5 border-y border-[#EAE7DD] mb-8 text-xs text-[#67776B]">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#183824] text-white flex items-center justify-center font-bold text-xs" aria-hidden="true">
              A
            </div>
            <div>
              <span className="font-semibold text-[#183824] block">{PUBLIC_ARTICLE_AUTHOR}</span>
              <span className="text-[11px] text-[#78887C]">Published on {article.publishedAt}</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-[#78887C]">
            <span>Nitish Tiffin Service • Chamba</span>
          </div>
        </div>

        {/* Featured Hero Image */}
        <div className="rounded-3xl overflow-hidden aspect-16/9 sm:aspect-21/10 mb-8 border border-[#E3DFD2] bg-[#EAE8DE] shadow-2xs">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {/* Article Body Content */}
        <div className="prose prose-stone max-w-none text-sm sm:text-base text-[#344238] leading-relaxed space-y-5">
          {article.content.split('\n\n').map((paragraph, idx) => {
            const trimmed = paragraph.trim();
            if (trimmed.startsWith('### ')) {
              return (
                <h2
                  key={idx}
                  className="text-xl sm:text-2xl font-bold text-[#183824] mt-8 mb-3 pt-2 border-t border-[#F0ECE1]"
                >
                  {trimmed.replace('### ', '')}
                </h2>
              );
            }
            if (trimmed.startsWith('- ')) {
              const items = trimmed.split('\n').map((li) => li.replace(/^- /, ''));
              return (
                <ul key={idx} className="list-disc pl-5 space-y-1.5 text-[#3D4C41]">
                  {items.map((item, itemIdx) => (
                    <li key={itemIdx}>{item}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={idx} className="text-[#3D4C41] leading-relaxed">
                {trimmed}
              </p>
            );
          })}
        </div>

        {/* Local Chamba Service Context Callout Box */}
        <div className="mt-10 rounded-2xl bg-[#F4F3ED] border border-[#E2DED1] p-5 sm:p-6 shadow-2xs">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#183824] text-white flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[#183824]">
                Local Home Food Service in Chamba
              </h3>
              <p className="text-xs sm:text-sm text-[#4E5E53] mt-1 leading-relaxed">
                Nitish Tiffin Service delivers fresh homemade meals daily to homes, offices, schools, and shops across Chamba town. Lunch is delivered around 1:00 PM and dinner by ~7:45 PM. Single trial meals start from ₹70.
              </p>
            </div>
          </div>
        </div>

        {/* Order CTA Banner */}
        <div className="mt-8 rounded-3xl bg-[#183824] text-white p-6 sm:p-8 text-center space-y-4 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-bold">
            Ready to Try Simple Home Food in Chamba?
          </h3>
          <p className="text-xs sm:text-sm text-white/85 max-w-md mx-auto">
            Order a ₹70 trial meal or subscribe to our ₹4,000 monthly lunch and dinner plan.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={CONTACTS.phone1.wa}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white text-[#183824] font-bold text-xs sm:text-sm hover:bg-[#F3F1EB] transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-700" />
              <span>Order on WhatsApp ({CONTACTS.phone1.display})</span>
            </a>

            <a
              href={CONTACTS.phone2.tel}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-white/40 text-white font-semibold text-xs sm:text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call ({CONTACTS.phone2.display})</span>
            </a>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            to="/articles"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#183824] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all Food Journal articles</span>
          </Link>
        </div>
      </article>
    </>
  );
};
