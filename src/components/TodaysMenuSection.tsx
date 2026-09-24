import React from 'react';
import { MessageCircle, Check } from 'lucide-react';
import { BUSINESS, IMAGES, CONTACTS } from '../config/siteContent';

interface TodaysMenuSectionProps {
  onOrderMenu?: (mealType?: string) => void;
}

export const TodaysMenuSection: React.FC<TodaysMenuSectionProps> = ({ onOrderMenu }) => {
  const askMenuWhatsApp = () => {
    const text = `Hello Nitish Tiffin Service, what is on today's menu for lunch and dinner in Chamba?`;
    window.open(`${CONTACTS.phone1.wa}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="today-menu" className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-white border border-[#E3DFD2] p-8 sm:p-12 lg:p-14 shadow-2xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* LEFT COLUMN: Editorial Text (Preserved exactly as requested) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            {/* Small Label */}
            <span className="text-xs font-bold text-[#4B6050] uppercase tracking-wider block">
              DAILY MENU
            </span>

            {/* Large Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#183824] leading-tight">
              What's Cooking Today?
            </h2>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl font-medium text-[#294231]">
              There is no fixed menu here.
            </p>

            {/* Longer Explanation */}
            <p className="text-sm sm:text-base text-[#56655A] leading-relaxed max-w-xl">
              Our meals change with the season and what's fresh and available in the local market. So the menu is a little different every day — you know you're getting a home-style meal, but the exact dishes are a small surprise.
            </p>

            {/* Meal Contents Guarantee */}
            <div className="pt-2 border-t border-[#F0ECE1]">
              <span className="text-xs font-semibold text-[#183824] uppercase tracking-wider block mb-2">
                Every meal typically includes:
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-[#46574B]">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Fresh Home-Cooked Dal</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Seasonal Fresh Sabzi</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Hot Tawa Phulkas (Rotis)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Steamed Rice</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Inquiry */}
            <div className="pt-3">
              <button
                onClick={askMenuWhatsApp}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#183824] bg-white hover:bg-[#183824] text-[#183824] hover:text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-2xs active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask Today's Dishes on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Realistic Editorial Homestyle Tiffin & Fresh Ingredients Visual */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[380px] group">
              {/* Soft organic image container */}
              <div className="relative rounded-[26px] sm:rounded-[30px] overflow-hidden aspect-4/3 sm:aspect-5/4 shadow-sm border border-[#E4DFD2] bg-[#EAE7DC]">
                <img
                  src={IMAGES.todaysMeal}
                  alt="Real stainless-steel tiffin with fresh home-cooked meal and market vegetables"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Subtle, natural editorial handwritten/italic script note */}
                <div className="absolute top-3.5 right-3.5 pointer-events-none">
                  <span className="font-serif italic text-xs text-[#1E3626] bg-[#FAF9F5]/90 backdrop-blur-xs px-3 py-1 rounded-full border border-[#D5D2C2] shadow-2xs">
                    Different every day.
                  </span>
                </div>

                {/* Gentle soft ambient gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Bottom Caption placed naturally near the image */}
              <p className="mt-3 text-xs text-[#5D6D60] italic text-center sm:text-left tracking-wide pl-1">
                Different day. Different meal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

