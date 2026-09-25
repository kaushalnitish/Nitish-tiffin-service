import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { TodaysMenuSection } from '../components/TodaysMenuSection';
import { OrderSection } from '../components/OrderSection';
import { CONTACTS } from '../config/siteContent';

export const MenuPage: React.FC = () => {
  const openWhatsApp = (mealType?: string) => {
    const text = `Hello Nitish Tiffin Service, what is on today's ${mealType || 'lunch & dinner'} menu in Chamba?`;
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
        name: "Today's Menu",
        item: 'https://nitishtiffinservice.com/menu',
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="Today's Menu & Seasonal Cooking | Nitish Tiffin Service Chamba"
        description="Fresh home-cooked daily menu in Chamba, Himachal Pradesh. Cooked with seasonal local market vegetables, soft handmade phulkas, dal tadka, and rice. Inquire about today's meal."
        canonicalPath="/menu"
        schema={breadcrumbSchema}
      />

      <Breadcrumbs items={[{ name: "Today's Menu", url: '/menu' }]} />

      <main className="flex-1 w-full py-4 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
          <span className="text-xs font-bold text-[#55695A] uppercase tracking-wider block mb-1">
            FRESH DAILY COOKING
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#183824]">
            Daily Menu & Seasonal Food in Chamba
          </h1>
          <p className="text-sm sm:text-base text-[#4C5B50] mt-2 max-w-2xl mx-auto">
            Instead of a rigid frozen hotel menu, we cook according to what seasonal vegetables are freshest in Chamba market each morning.
          </p>
        </div>

        <TodaysMenuSection onOrderMenu={(meal) => openWhatsApp(meal)} />
        <OrderSection />
      </main>
    </>
  );
};
