import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { HomePage } from './pages/HomePage';
import { PlansPage } from './pages/PlansPage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { ServiceAreaPage } from './pages/ServiceAreaPage';
import { FAQPage } from './pages/FAQPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { AdminArticlesPage } from './pages/AdminArticlesPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { CONTACTS } from './config/siteContent';

export default function App() {
  const openWhatsAppWithPlan = (planTitle?: string) => {
    const text = planTitle
      ? `Hello Nitish Tiffin Service, I am interested in the ${planTitle} in Chamba. Please let me know how to start.`
      : `Hello Nitish Tiffin Service, I would like to order a tiffin meal in Chamba.`;
    window.open(`${CONTACTS.phone1.wa}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#1A251D] font-sans antialiased selection:bg-[#183824] selection:text-white pb-16 md:pb-0">
        {/* Semantic Header & Nav */}
        <Navbar onOrderClick={() => openWhatsAppWithPlan()} />

        {/* Dynamic Route Pages */}
        <div className="flex-1 w-full flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/plans" element={<PlansPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/service-area" element={<ServiceAreaPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/articles/:slug" element={<ArticleDetailPage />} />
            <Route path="/admin" element={<AdminArticlesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>

        {/* Semantic Footer */}
        <Footer />

        {/* Sticky Mobile Quick Order Bar */}
        <FloatingMobileBar onOrderClick={() => openWhatsAppWithPlan()} />
      </div>
    </BrowserRouter>
  );
}
