import React, { useState } from 'react';
import { Menu as MenuIcon, X, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS, CONTACTS } from '../config/siteContent';

interface NavbarProps {
  onOrderClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOrderClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-xs border-b border-[#EAE7DD]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-lg sm:text-xl font-bold tracking-tight text-[#183824] hover:opacity-90 transition-opacity shrink-0"
        >
          {BUSINESS.name}
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7 text-[15px] font-medium text-[#465449]">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hover:text-[#183824] transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo('plans')}
            className="hover:text-[#183824] transition-colors cursor-pointer"
          >
            Plans
          </button>
          <button
            onClick={() => scrollTo('today-menu')}
            className="hover:text-[#183824] transition-colors cursor-pointer"
          >
            Today's Menu
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="hover:text-[#183824] transition-colors cursor-pointer"
          >
            About Us
          </button>
        </nav>

        {/* Right Action Area */}
        <div className="flex items-center gap-3">
          {/* Small Call / WhatsApp on Desktop */}
          <div className="hidden lg:flex items-center gap-2 text-xs text-[#526356] bg-white/70 border border-[#E5E2D6] px-3 py-1.5 rounded-full">
            <span className="text-[#7A8A7E]">Call / WhatsApp:</span>
            <a
              href={CONTACTS.phone1.tel}
              className="font-semibold text-[#183824] hover:underline"
            >
              {CONTACTS.phone1.display}
            </a>
          </div>

          {/* Primary CTA (WhatsApp) */}
          <a
            href={CONTACTS.phone1.wa}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#183824] text-white text-xs sm:text-sm font-semibold hover:bg-[#11291A] transition-all flex items-center gap-1.5 shadow-xs active:scale-95 shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Order Now</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
            className="md:hidden p-2 text-[#183824] rounded-lg hover:bg-[#EFECE3]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#EAE7DD] bg-[#FAF9F5] px-5 py-4 space-y-4">
          <div className="flex flex-col space-y-2.5 text-sm font-medium text-[#2E3C32]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left py-2 border-b border-[#F0ECE1]"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('plans')}
              className="text-left py-2 border-b border-[#F0ECE1]"
            >
              Plans & Pricing
            </button>
            <button
              onClick={() => scrollTo('today-menu')}
              className="text-left py-2 border-b border-[#F0ECE1]"
            >
              Today's Menu
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="text-left py-2 border-b border-[#F0ECE1]"
            >
              About Us
            </button>
          </div>

          {/* Mobile Direct Contact Strip */}
          <div className="pt-1 space-y-2 text-xs">
            <span className="font-semibold text-[#5A6C5F] uppercase tracking-wider block text-[11px]">
              Direct Contact
            </span>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={CONTACTS.phone1.tel}
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white border border-[#E3DFD2] font-semibold text-[#183824]"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {CONTACTS.phone1.display}</span>
              </a>
              <a
                href={CONTACTS.phone2.tel}
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white border border-[#E3DFD2] font-semibold text-[#183824]"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {CONTACTS.phone2.display}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
