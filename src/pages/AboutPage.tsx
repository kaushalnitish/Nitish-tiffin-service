import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AboutSection } from '../components/AboutSection';
import { OrderSection } from '../components/OrderSection';

export const AboutPage: React.FC = () => {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://nitishtiffinservice.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About Us',
        item: 'https://nitishtiffinservice.com/about',
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="About Nitish Tiffin Service | Simple Home Food in Chamba"
        description="Learn the story of Nitish Tiffin Service in Chamba, Himachal Pradesh. We cook the exact same simple, wholesome home meals that our own family eats every single day."
        canonicalPath="/about"
        schema={breadcrumbSchema}
      />

      <Breadcrumbs items={[{ name: 'About Us', url: '/about' }]} />

      <main className="flex-1 w-full py-4 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
          <span className="text-xs font-bold text-[#55695A] uppercase tracking-wider block mb-1">
            OUR STORY
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#183824]">
            About Nitish Tiffin Service
          </h1>
          <p className="text-sm sm:text-base text-[#4C5B50] mt-2 max-w-2xl mx-auto">
            Providing honest, home-style food to students, working professionals, and families in Chamba who need reliable everyday lunch and dinner.
          </p>
        </div>

        <AboutSection />
        <OrderSection />
      </main>
    </>
  );
};
