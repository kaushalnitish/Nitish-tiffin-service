import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FAQSection } from '../components/FAQSection';
import { OrderSection } from '../components/OrderSection';
import { FAQS } from '../data/faqs';

export const FAQPage: React.FC = () => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <SEOHead
        title="Frequently Asked Questions | Nitish Tiffin Service Chamba"
        description="Clear, honest answers about Nitish Tiffin Service in Chamba, HP. Delivery timings (~1 PM & ~7:45 PM), meal prices (₹70 trial to ₹4,000/mo), menu variety, and areas served."
        canonicalPath="/faq"
        schema={faqSchema}
      />

      <Breadcrumbs items={[{ name: 'FAQ', url: '/faq' }]} />

      <main className="flex-1 w-full py-4 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
          <span className="text-xs font-bold text-[#55695A] uppercase tracking-wider block mb-1">
            HELP & COMMON QUESTIONS
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#183824]">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-[#4C5B50] mt-2 max-w-2xl mx-auto">
            Everything you need to know about our daily meals, monthly packages, pause policies, and how delivery operates in Chamba.
          </p>
        </div>

        <FAQSection />
        <OrderSection />
      </main>
    </>
  );
};
