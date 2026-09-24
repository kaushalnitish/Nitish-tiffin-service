import React from 'react';
import { Clock, MessageCircle, Check } from 'lucide-react';
import { PRICING, DELIVERY, BUSINESS } from '../config/siteContent';

interface PlansSectionProps {
  onSelectPlan: (planTitle: string, price: number) => void;
}

export const PlansSection: React.FC<PlansSectionProps> = ({ onSelectPlan }) => {
  const plans = [
    {
      key: 'single',
      title: PRICING.singleMeal.title,
      price: PRICING.singleMeal.price,
      priceFormatted: `₹${PRICING.singleMeal.price}`,
      unit: '',
      description: PRICING.singleMeal.description,
      note: PRICING.singleMeal.note,
      cta: PRICING.singleMeal.cta,
      highlight: false,
    },
    {
      key: 'lunchDinner',
      title: PRICING.lunchDinnerDaily.title,
      price: PRICING.lunchDinnerDaily.price,
      priceFormatted: `₹${PRICING.lunchDinnerDaily.price}`,
      unit: '/ day',
      description: PRICING.lunchDinnerDaily.description,
      note: PRICING.lunchDinnerDaily.note,
      cta: PRICING.lunchDinnerDaily.cta,
      highlight: false,
    },
    {
      key: 'monthly',
      title: PRICING.monthly.title,
      price: PRICING.monthly.price,
      priceFormatted: `₹${PRICING.monthly.price.toLocaleString('en-IN')}`,
      unit: '/ month',
      description: PRICING.monthly.description,
      note: PRICING.monthly.note,
      cta: PRICING.monthly.cta,
      highlight: true,
    },
    {
      key: 'occasional',
      title: PRICING.occasional.title,
      price: PRICING.occasional.price,
      priceFormatted: `₹${PRICING.occasional.price}`,
      unit: '/ meal',
      description: PRICING.occasional.description,
      note: PRICING.occasional.note,
      cta: PRICING.occasional.cta,
      highlight: false,
    },
  ];

  return (
    <section id="plans" className="py-14 sm:py-20 bg-[#F5F4EE] border-y border-[#EAE7DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-bold text-[#55695A] uppercase tracking-wider block mb-1">
            PLANS & PRICING
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#183824]">
            Simple Plans. Clear Prices.
          </h2>
          <p className="text-sm sm:text-base text-[#56655A] mt-2">
            Choose lunch, dinner or a monthly plan depending on what you need.
          </p>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-8">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all ${
                plan.highlight
                  ? 'bg-white border-2 border-[#183824] shadow-sm relative'
                  : 'bg-white border border-[#E3DFD2] shadow-2xs hover:border-[#CDC7B7]'
              }`}
            >
              <div>
                {/* Plan Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xs sm:text-sm font-bold text-[#183824] tracking-wider uppercase">
                    {plan.title}
                  </h3>
                  {plan.highlight && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#EBF2EC] text-[#183824] border border-[#D0DEC4]">
                      Monthly
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="mt-4 mb-3">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#183824] tracking-tight">
                    {plan.priceFormatted}
                  </span>
                  {plan.unit && (
                    <span className="text-xs sm:text-sm font-medium text-[#68776C] ml-1">
                      {plan.unit}
                    </span>
                  )}
                </div>

                {/* What's Included */}
                <div className="pt-3 border-t border-[#F0ECE1] space-y-1.5">
                  <p className="text-sm font-medium text-[#2E3C32]">
                    {plan.description}
                  </p>
                  <p className="text-xs text-[#6A786E] leading-relaxed">
                    {plan.note}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-2">
                <button
                  onClick={() => onSelectPlan(plan.title, plan.price)}
                  className={`w-full py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 active:scale-95 ${
                    plan.highlight
                      ? 'bg-[#183824] hover:bg-[#11291A] text-white shadow-xs'
                      : 'bg-[#FAF9F5] hover:bg-[#183824] text-[#183824] hover:text-white border border-[#D5D0BF]'
                  }`}
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{plan.cta}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Timings Section directly near pricing */}
        <div className="mt-8 rounded-2xl bg-white border border-[#E3DFD2] p-6 sm:p-7 shadow-2xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-[#183824]" />
                <h4 className="text-base sm:text-lg font-bold text-[#183824]">
                  {DELIVERY.heading}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#5C6C60]">
                {DELIVERY.note}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 sm:gap-10 border-t lg:border-t-0 lg:border-l border-[#EBE7DB] pt-4 lg:pt-0 lg:pl-8">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <div>
                  <span className="text-[11px] text-[#718074] uppercase tracking-wider block">
                    Lunch Delivery
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[#183824]">
                    {DELIVERY.lunch}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#183824] inline-block" />
                <div>
                  <span className="text-[11px] text-[#718074] uppercase tracking-wider block">
                    Dinner Delivery
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[#183824]">
                    {DELIVERY.dinner}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
