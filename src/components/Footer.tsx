import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { BUSINESS, CONTACTS } from '../config/siteContent';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#EAE7DC] bg-[#FAF9F5] py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand & Location (4 cols) */}
          <div className="md:col-span-4 space-y-2">
            <Link
              to="/"
              onClick={scrollToTop}
              className="text-xl font-bold text-[#183824] block hover:opacity-90"
            >
              {BUSINESS.name}
            </Link>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#5A6C5F]">
              <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span>Chamba, Himachal Pradesh, India</span>
            </div>
            <p className="text-xs text-[#7A8A7D] max-w-xs leading-relaxed pt-1">
              Simple, home-style tiffin service in Chamba. Lunch delivered fresh around 1:00 PM and dinner warm by around 7:45 PM.
            </p>
          </div>

          {/* Quick Nav Links (4 cols) */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-xs font-bold text-[#183824] uppercase tracking-wider block">
              Pages & Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-medium text-[#465449]">
              <Link
                to="/"
                onClick={scrollToTop}
                className="hover:text-[#183824] transition-colors py-0.5"
              >
                Home
              </Link>
              <Link
                to="/plans"
                onClick={scrollToTop}
                className="hover:text-[#183824] transition-colors py-0.5"
              >
                Plans & Pricing
              </Link>
              <Link
                to="/menu"
                onClick={scrollToTop}
                className="hover:text-[#183824] transition-colors py-0.5"
              >
                Today's Menu
              </Link>
              <Link
                to="/service-area"
                onClick={scrollToTop}
                className="hover:text-[#183824] transition-colors py-0.5"
              >
                Service Areas
              </Link>
              <Link
                to="/about"
                onClick={scrollToTop}
                className="hover:text-[#183824] transition-colors py-0.5"
              >
                About Us
              </Link>
              <Link
                to="/articles"
                onClick={scrollToTop}
                className="hover:text-[#183824] transition-colors py-0.5"
              >
                Food Journal
              </Link>
              <Link
                to="/faq"
                onClick={scrollToTop}
                className="hover:text-[#183824] transition-colors py-0.5"
              >
                FAQ
              </Link>
              <Link
                to="/admin"
                onClick={scrollToTop}
                className="hover:text-[#183824] transition-colors py-0.5 text-[#86978A]"
              >
                Owner Portal
              </Link>
            </div>
          </div>

          {/* Contact Direct: Call & WhatsApp with both numbers (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-bold text-[#183824] uppercase tracking-wider block">
              Direct Contact & WhatsApp
            </span>

            <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
              {/* Call Column */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-[#183824] font-bold text-xs uppercase tracking-wide">
                  <Phone className="w-3.5 h-3.5 text-[#183824]" />
                  <span>Call Us:</span>
                </div>
                <div className="flex flex-col space-y-1">
                  <a
                    href={CONTACTS.phone1.tel}
                    className="font-semibold text-[#183824] hover:underline"
                  >
                    {CONTACTS.phone1.display}
                  </a>
                  <a
                    href={CONTACTS.phone2.tel}
                    className="font-semibold text-[#183824] hover:underline"
                  >
                    {CONTACTS.phone2.display}
                  </a>
                </div>
              </div>

              {/* WhatsApp Column */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-[#183824] font-bold text-xs uppercase tracking-wide">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp:</span>
                </div>
                <div className="flex flex-col space-y-1">
                  <a
                    href={CONTACTS.phone1.wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#183824] hover:underline"
                  >
                    {CONTACTS.phone1.display}
                  </a>
                  <a
                    href={CONTACTS.phone2.wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#183824] hover:underline"
                  >
                    {CONTACTS.phone2.display}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 pt-6 border-t border-[#EFECE1] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#7A887E]">
          <span>© 2026 {BUSINESS.name}. All rights reserved.</span>
          <span>Chamba, Himachal Pradesh, India</span>
        </div>
      </div>
    </footer>
  );
};
