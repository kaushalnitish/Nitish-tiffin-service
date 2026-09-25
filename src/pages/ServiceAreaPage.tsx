import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ServiceAreaSection } from '../components/ServiceAreaSection';
import { OrderSection } from '../components/OrderSection';

export const ServiceAreaPage: React.FC = () => {
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
        name: 'Service Areas',
        item: 'https://nitishtiffinservice.com/service-area',
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="Tiffin Service Areas in Chamba, HP | Nitish Tiffin Service"
        description="Confirmed lunch and dinner tiffin delivery in Chamba, Himachal Pradesh: Surara Mohalla and nearby central residential lanes. Delivery at ~1 PM & ~7:45 PM."
        canonicalPath="/service-area"
        schema={breadcrumbSchema}
      />

      <Breadcrumbs items={[{ name: 'Service Areas', url: '/service-area' }]} />

      <main className="flex-1 w-full py-4 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
          <span className="text-xs font-bold text-[#55695A] uppercase tracking-wider block mb-1">
            LOCAL DELIVERY COVERAGE
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#183824]">
            Tiffin Delivery Areas in Chamba
          </h1>
          <p className="text-sm sm:text-base text-[#4C5B50] mt-2 max-w-2xl mx-auto">
            Find out which residential mohallas and office complexes we deliver to every day, along with exact lunch and dinner drop timings.
          </p>
        </div>

        <ServiceAreaSection />
        <OrderSection />
      </main>
    </>
  );
};
