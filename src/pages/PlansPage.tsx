import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PlansSection } from '../components/PlansSection';
import { OrderSection } from '../components/OrderSection';
import { CONTACTS } from '../config/siteContent';

export const PlansPage: React.FC = () => {
  const openWhatsApp = (planTitle: string) => {
    const text = `Hello Nitish Tiffin Service, I am interested in the ${planTitle} in Chamba. Please let me know how to start.`;
    window.open(`${CONTACTS.phone1.wa}?text=${encodeURIComponent(text)}`, '_blank');
  };

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
        name: 'Plans & Pricing',
        item: 'https://nitishtiffinservice.com/plans',
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="Meal Plans & Pricing in Chamba | Nitish Tiffin Service"
        description="Affordable home-cooked meal plans in Chamba, Himachal Pradesh. Single trial meal ₹70, daily lunch & dinner ₹140, and monthly packages for ₹4,000. No advance required for trials."
        canonicalPath="/plans"
        schema={breadcrumbSchema}
      />

      <Breadcrumbs items={[{ name: 'Plans & Pricing', url: '/plans' }]} />

      <main className="flex-1 w-full py-4 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
          <span className="text-xs font-bold text-[#55695A] uppercase tracking-wider block mb-1">
            TRANSPARENT PRICING
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#183824]">
            Tiffin Plans & Pricing in Chamba
          </h1>
          <p className="text-sm sm:text-base text-[#4C5B50] mt-2 max-w-2xl mx-auto">
            Clear, honest pricing with zero hidden charges. Start with a single ₹70 trial meal or save with our ₹4,000 monthly lunch and dinner plan.
          </p>
        </div>

        <PlansSection onSelectPlan={(plan) => openWhatsApp(plan)} />
        <OrderSection />
      </main>
    </>
  );
};
