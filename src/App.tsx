import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PlansSection } from './components/PlansSection';
import { TodaysMenuSection } from './components/TodaysMenuSection';
import { AboutSection } from './components/AboutSection';
import { OrderSection } from './components/OrderSection';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { CONTACTS } from './config/siteContent';

export default function App() {
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

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#1A251D] font-sans antialiased selection:bg-[#183824] selection:text-white pb-16 md:pb-0">
      {/* 1. Navigation */}
      <Navbar onOrderClick={() => openWhatsAppWithPlan()} />

      <main className="flex-1 w-full">
        {/* 2. Hero Section */}
        <HeroSection
          onOrderTiffin={() => openWhatsAppWithPlan()}
          onViewPlans={() => scrollTo('plans')}
        />

        {/* 3. Plans & Pricing + Timings */}
        <PlansSection
          onSelectPlan={(planTitle) => openWhatsAppWithPlan(planTitle)}
        />

        {/* 4. Today's Menu + Seasonal Food Message */}
        <TodaysMenuSection
          onOrderMenu={(mealType) => openWhatsAppWithPlan(`Today's ${mealType}`)}
        />

        {/* 5. About Us */}
        <AboutSection />

        {/* 6. Order / Contact CTA & Dedicated Contact Area */}
        <OrderSection />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* High-Converting Floating Mobile Bar */}
      <FloatingMobileBar onOrderClick={() => openWhatsAppWithPlan()} />
    </div>
  );
}
