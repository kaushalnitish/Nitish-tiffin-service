import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS } from '../config/siteContent';

interface FloatingMobileBarProps {
  onOrderClick: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ onOrderClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down 200px
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-t border-[#E5E1D6] p-3 shadow-lg transition-transform duration-300">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div className="text-left leading-tight">
          <span className="text-xs font-bold text-[#183824] block">
            {BUSINESS.name}
          </span>
          <span className="text-[11px] text-[#69796D] block">
            From ₹70 • Lunch ~1 PM & Dinner ~7:45 PM
          </span>
        </div>

        <button
          onClick={onOrderClick}
          className="px-5 py-2.5 rounded-full bg-[#183824] active:bg-[#102719] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm shrink-0"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>Order Now</span>
        </button>
      </div>
    </div>
  );
};
