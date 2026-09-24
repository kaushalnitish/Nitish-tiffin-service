import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS, CONTACTS } from '../config/siteContent';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-[#EAE7DC] bg-[#FAF9F5] py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand & Location (5 cols) */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-xl font-bold text-[#183824] block">
              {BUSINESS.name}
            </span>
            <span className="text-xs sm:text-sm text-[#5A6C5F] block">
              {BUSINESS.location}
            </span>
            <p className="text-xs text-[#7A8A7D] max-w-xs">
              Simple home-cooked tiffin service delivering lunch around 1:00 PM and dinner by around 7:45 PM.
            </p>
          </div>

          {/* Quick Nav Links (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-bold text-[#183824] uppercase tracking-wider block">
              Quick Links
            </span>
            <div className="flex flex-col space-y-2 text-xs sm:text-sm font-medium text-[#465449]">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-left hover:text-[#183824] transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => scrollTo('plans')}
                className="text-left hover:text-[#183824] transition-colors cursor-pointer"
              >
                Plans & Pricing
              </button>
              <button
                onClick={() => scrollTo('today-menu')}
                className="text-left hover:text-[#183824] transition-colors cursor-pointer"
              >
                Today's Menu
              </button>
              <button
                onClick={() => scrollTo('about')}
                className="text-left hover:text-[#183824] transition-colors cursor-pointer"
              >
                About Us
              </button>
            </div>
          </div>

          {/* Contact Direct: Call & WhatsApp with both numbers (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <span className="text-xs font-bold text-[#183824] uppercase tracking-wider block">
              Call & WhatsApp Us
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              {/* Call Column */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-[#183824] font-bold text-xs uppercase tracking-wide">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call:</span>
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
          <span>Chamba, Himachal Pradesh</span>
        </div>
      </div>
    </footer>
  );
};
