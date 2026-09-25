import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { HeroSection } from '../components/HeroSection';
import { PlansSection } from '../components/PlansSection';
import { TodaysMenuSection } from '../components/TodaysMenuSection';
import { ServiceAreaSection } from '../components/ServiceAreaSection';
import { AboutSection } from '../components/AboutSection';
import { FAQSection } from '../components/FAQSection';
import { ArticlesTeaserSection } from '../components/ArticlesTeaserSection';
import { OrderSection } from '../components/OrderSection';
import { CONTACTS } from '../config/siteContent';

export const HomePage: React.FC = () => {
  const openWhatsAppWithPlan = (planTitle?: string) => {
    const text = planTitle
      ? `Hello Nitish Tiffin Service, I am interested in the ${planTitle} in Chamba. Please let me know how to start.`
      : `Hello Nitish Tiffin Service, I would like to order a tiffin meal in Chamba.`;
    window.open(`${CONTACTS.phone1.wa}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Nitish Tiffin Service',
    description:
      'Home-cooked tiffin service delivering fresh lunch around 1:00 PM and warm dinner by around 7:45 PM in Chamba, Himachal Pradesh.',
    image: 'https://nitishtiffinservice.com/nitish_tiffin_mascot_logo.png',
    url: 'https://nitishtiffinservice.com/',
    telephone: [CONTACTS.phone1.tel, CONTACTS.phone2.tel],
    priceRange: '₹70 - ₹4000',
    servesCuisine: ['Home-style', 'North Indian', 'Himachali'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chamba',
      addressRegion: 'Himachal Pradesh',
      addressCountry: 'IN',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Chamba, Himachal Pradesh',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '11:00',
        closes: '20:30',
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="Nitish Tiffin Service | Home-Cooked Tiffin in Chamba"
        description="Simple, honest home-cooked tiffins delivered daily in Chamba, Himachal Pradesh. Fresh daily lunch around 1:00 PM and warm dinner by ~7:45 PM. Single meals from ₹70."
        canonicalPath="/"
        schema={localBusinessSchema}
      />

      <main className="flex-1 w-full">
        {/* 1. Hero with Single Meaningful H1 */}
        <HeroSection
          onOrderTiffin={() => openWhatsAppWithPlan()}
          onViewPlans={() => scrollTo('plans')}
        />

        {/* 2. Plans & Pricing */}
        <PlansSection
          onSelectPlan={(planTitle) => openWhatsAppWithPlan(planTitle)}
        />

        {/* 3. Today's Menu */}
        <TodaysMenuSection
          onOrderMenu={(mealType) => openWhatsAppWithPlan(`Today's ${mealType}`)}
        />

        {/* 4. Verified Service Area */}
        <ServiceAreaSection />

        {/* 5. About Nitish Tiffin Service */}
        <AboutSection />

        {/* 6. Food Journal Teaser */}
        <ArticlesTeaserSection />

        {/* 7. FAQs */}
        <FAQSection />

        {/* 8. Order / Contact Area */}
        <OrderSection />
      </main>
    </>
  );
};
