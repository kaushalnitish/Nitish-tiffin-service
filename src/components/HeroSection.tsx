import React from 'react';
import { MessageCircle, Clock, MapPin, ArrowRight } from 'lucide-react';
import { BUSINESS } from '../config/siteContent';
import { HERO_MASCOT_IMAGE } from '../config/images';

interface HeroSectionProps {
  onOrderTiffin: () => void;
  onViewPlans: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOrderTiffin,
  onViewPlans,
}) => {
  return (
    <section className="pt-6 sm:pt-10 pb-12 sm:pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Status Strip */}
      <div className="flex items-center gap-2 mb-6">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2EC] text-[#183824] text-xs font-semibold tracking-wide border border-[#D5E4D8]">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <span>Taking Orders Today in Chamba</span>
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Column: Editorial Copy & Conversion CTAs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#55695A] uppercase tracking-wider block">
              HOME-COOKED MEALS • CHAMBA, HP
            </span>

            {/* Exactly one meaningful H1 for the page */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#183824] leading-[1.08]">
              Home-Cooked Tiffin
              <br />
              <span className="font-normal text-[#2A4C36] italic">
                Service in Chamba
              </span>
            </h1>
          </div>

          {/* Natural, informative introductory paragraph */}
          <p className="text-base sm:text-lg text-[#4E5E52] leading-relaxed max-w-xl">
            Nitish Tiffin Service delivers simple, honest home-cooked food across Chamba. Prepared with the same care and fresh market ingredients that our own family eats, we provide daily lunch around 1:00 PM and warm dinner by around 7:45 PM.
          </p>

          {/* Quick Info Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-1 max-w-lg">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#E3DFD2] shadow-2xs">
              <Clock className="w-4 h-4 text-[#183824] shrink-0" />
              <div className="text-xs text-[#2E3C32]">
                <strong className="block font-semibold">Lunch ~1:00 PM</strong>
                <span className="text-[#68776C]">Dinner by ~7:45 PM</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#E3DFD2] shadow-2xs">
              <MapPin className="w-4 h-4 text-[#183824] shrink-0" />
              <div className="text-xs text-[#2E3C32]">
                <strong className="block font-semibold">Chamba Delivery</strong>
                <span className="text-[#68776C]">From ₹70 / meal</span>
              </div>
            </div>
          </div>

          {/* High-Converting CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md sm:max-w-none">
            <button
              onClick={onOrderTiffin}
              className="px-7 py-3.5 rounded-full bg-[#183824] hover:bg-[#11291A] text-white font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Order a Tiffin (WhatsApp)</span>
            </button>

            <button
              onClick={onViewPlans}
              className="px-6 py-3.5 rounded-full border border-[#CEC9B8] bg-[#FAF9F5] hover:bg-[#F0ECE1] text-[#183824] font-medium text-sm sm:text-base transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>View Plans (from ₹70)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#718074] pt-0.5">
            ✓ Pay on delivery (Cash or UPI) • 1-Day trial meal available
          </p>
        </div>

        {/* Right Column: Nitish Tiffin Service Mascot Logo */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] flex items-center justify-center p-1 sm:p-3 group">
            {/* Subtle warm ambient glow behind the circular badge */}
            <div className="absolute inset-6 rounded-full bg-amber-500/10 blur-2xl -z-10 group-hover:bg-amber-500/15 transition-all duration-500" />

            <picture className="w-full h-auto max-h-[380px] sm:max-h-[440px] flex items-center justify-center">
              <source
                type="image/avif"
                srcSet={HERO_MASCOT_IMAGE.avifSrcSet}
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 400px, 440px"
              />
              <source
                type="image/webp"
                srcSet={HERO_MASCOT_IMAGE.webpSrcSet}
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 400px, 440px"
              />
              <img
                src={HERO_MASCOT_IMAGE.fallbackSrc}
                srcSet={HERO_MASCOT_IMAGE.fallbackSrcSet}
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 400px, 440px"
                width={440}
                height={440}
                alt="Nitish Tiffin Service Mascot and Home-Style Thali in Chamba"
                className="w-full h-auto max-h-[380px] sm:max-h-[440px] object-contain drop-shadow-md group-hover:scale-102 transition-transform duration-500 select-none"
                loading="eager"
                fetchPriority="high"
                decoding="sync"
                referrerPolicy="no-referrer"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};
