import React from 'react';
import { MessageCircle, Clock, MapPin, ArrowRight } from 'lucide-react';
import { BUSINESS, IMAGES } from '../config/siteContent';

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
              HOME-COOKED MEALS
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#183824] leading-[1.08]">
              Simple Food.
              <br />
              <span className="font-normal text-[#2A4C36] italic">
                Like We Eat at Home.
              </span>
            </h1>
          </div>

          <p className="text-base sm:text-lg text-[#4E5E52] leading-relaxed max-w-xl">
            {BUSINESS.subtext}
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

        {/* Right Column: Clean Photographic Visual */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden aspect-4/3 sm:aspect-5/4 border border-[#E3DFD2] bg-[#EAE8DE] shadow-xs group">
            <img
              src={IMAGES.hero}
              alt="Fresh home-cooked meal plate"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              loading="eager"
            />
            {/* Minimal Corner Note */}
            <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs rounded-xl p-2.5 border border-white/80 flex items-center justify-between text-xs text-[#183824]">
              <span className="font-semibold">Cooked fresh twice daily</span>
              <span className="text-[#657669]">Chamba, HP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
