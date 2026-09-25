import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS, CONTACTS } from '../config/siteContent';

interface NavbarProps {
  onOrderClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOrderClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-xs border-b border-[#EAE7DD]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-3 xl:gap-6">
        {/* Logo / Brand Name */}
        <Link
          to="/"
          onClick={handleNavClick}
          className="text-base sm:text-lg xl:text-xl font-bold tracking-tight text-[#183824] hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
        >
          {BUSINESS.name}
        </Link>

        {/* Desktop Links (Always single-line, zero wrapping, optimized responsive sizing) */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-2.5 xl:gap-4.5 2xl:gap-5.5 text-[12.5px] xl:text-[13.5px] font-medium text-[#465449] shrink-0">
          <Link
            to="/"
            onClick={handleNavClick}
            className={`whitespace-nowrap shrink-0 px-1 py-1 transition-colors hover:text-[#183824] ${
              isActive('/') ? 'text-[#183824] font-semibold' : ''
            }`}
          >
            Home
          </Link>
          <Link
            to="/plans"
            onClick={handleNavClick}
            className={`whitespace-nowrap shrink-0 px-1 py-1 transition-colors hover:text-[#183824] ${
              isActive('/plans') ? 'text-[#183824] font-semibold' : ''
            }`}
          >
            Plans & Pricing
          </Link>
          <Link
            to="/menu"
            onClick={handleNavClick}
            className={`whitespace-nowrap shrink-0 px-1 py-1 transition-colors hover:text-[#183824] ${
              isActive('/menu') ? 'text-[#183824] font-semibold' : ''
            }`}
          >
            Today's Menu
          </Link>
          <Link
            to="/service-area"
            onClick={handleNavClick}
            className={`whitespace-nowrap shrink-0 px-1 py-1 transition-colors hover:text-[#183824] ${
              isActive('/service-area') ? 'text-[#183824] font-semibold' : ''
            }`}
          >
            Service Areas
          </Link>
          <Link
            to="/about"
            onClick={handleNavClick}
            className={`whitespace-nowrap shrink-0 px-1 py-1 transition-colors hover:text-[#183824] ${
              isActive('/about') ? 'text-[#183824] font-semibold' : ''
            }`}
          >
            About Us
          </Link>
          <Link
            to="/articles"
            onClick={handleNavClick}
            className={`whitespace-nowrap shrink-0 px-1 py-1 transition-colors hover:text-[#183824] ${
              isActive('/articles') ? 'text-[#183824] font-semibold' : ''
            }`}
          >
            Food Journal
          </Link>
          <Link
            to="/faq"
            onClick={handleNavClick}
            className={`whitespace-nowrap shrink-0 px-1 py-1 transition-colors hover:text-[#183824] ${
              isActive('/faq') ? 'text-[#183824] font-semibold' : ''
            }`}
          >
            FAQ
          </Link>
        </nav>

        {/* Right Action Area */}
        <div className="flex items-center gap-2 xl:gap-3 shrink-0">
          {/* Small Call / WhatsApp on Desktop (appears on larger screens where space is ample) */}
          <div className="hidden xl:flex items-center gap-1.5 text-[11px] xl:text-xs text-[#526356] bg-white/80 border border-[#E5E2D6] px-2.5 py-1 rounded-full whitespace-nowrap shrink-0">
            <span className="text-[#7A8A7E]">Call / WA:</span>
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
            className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#183824] text-white text-xs sm:text-sm font-semibold hover:bg-[#11291A] transition-all flex items-center gap-1.5 shadow-xs active:scale-95 shrink-0 whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Order Now</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
            className="lg:hidden p-2 text-[#183824] rounded-lg hover:bg-[#EFECE3]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#EAE7DD] bg-[#FAF9F5] px-5 py-4 space-y-4">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-2 text-sm font-medium text-[#2E3C32]">
            <Link
              to="/"
              onClick={handleNavClick}
              className="text-left py-2 border-b border-[#F0ECE1] hover:text-[#183824]"
            >
              Home
            </Link>
            <Link
              to="/plans"
              onClick={handleNavClick}
              className="text-left py-2 border-b border-[#F0ECE1] hover:text-[#183824]"
            >
              Plans & Pricing
            </Link>
            <Link
              to="/menu"
              onClick={handleNavClick}
              className="text-left py-2 border-b border-[#F0ECE1] hover:text-[#183824]"
            >
              Today's Menu
            </Link>
            <Link
              to="/service-area"
              onClick={handleNavClick}
              className="text-left py-2 border-b border-[#F0ECE1] hover:text-[#183824]"
            >
              Service Areas in Chamba
            </Link>
            <Link
              to="/about"
              onClick={handleNavClick}
              className="text-left py-2 border-b border-[#F0ECE1] hover:text-[#183824]"
            >
              About Us
            </Link>
            <Link
              to="/articles"
              onClick={handleNavClick}
              className="text-left py-2 border-b border-[#F0ECE1] hover:text-[#183824]"
            >
              Food Journal & Articles
            </Link>
            <Link
              to="/faq"
              onClick={handleNavClick}
              className="text-left py-2 border-b border-[#F0ECE1] hover:text-[#183824]"
            >
              Frequently Asked Questions
            </Link>
          </nav>

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
