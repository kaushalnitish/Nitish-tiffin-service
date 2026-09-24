import React, { useState } from 'react';
import { MessageCircle, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS, CONTACTS } from '../config/siteContent';

export const OrderSection: React.FC = () => {
  const [showCallChooser, setShowCallChooser] = useState(false);

  const openWhatsApp = (numberWa: string = CONTACTS.phone1.wa, customMessage?: string) => {
    const defaultText = `Hello Nitish Tiffin Service, I would like to order / inquire about a tiffin meal in Chamba.`;
    const message = customMessage || defaultText;
    window.open(`${numberWa}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="py-14 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* 1. Final CTA Card */}
      <div className="rounded-3xl bg-[#183824] text-white p-8 sm:p-12 lg:p-14 text-center max-w-3xl mx-auto shadow-sm">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Need a Tiffin?
        </h2>

        <p className="text-sm sm:text-base text-white/85 mt-2.5 max-w-md mx-auto leading-relaxed">
          Choose a plan or order a meal when you need one.
        </p>

        {/* Location tag */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-medium mt-4 border border-white/10">
          <MapPin className="w-3.5 h-3.5 text-emerald-300" />
          <span>Delivered across {BUSINESS.location}</span>
        </div>

        {/* Main Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          {/* Primary WhatsApp Order */}
          <a
            href={CONTACTS.phone1.wa}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-[#183824] font-bold text-sm sm:text-base hover:bg-[#F3F1EB] transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-emerald-700" />
            <span>Order on WhatsApp</span>
          </a>

          {/* Call Us Button / Chooser */}
          <div className="relative w-full sm:w-auto">
            <button
              onClick={() => setShowCallChooser(!showCallChooser)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/35 hover:border-white text-white font-semibold text-sm sm:text-base hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </button>

            {/* Quick Chooser Dropdown for Call */}
            {showCallChooser && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-56 bg-white text-[#183824] rounded-2xl p-2 shadow-xl border border-[#E5E1D6] z-20 space-y-1">
                <span className="text-[11px] font-semibold text-[#66776B] px-3 py-1 block border-b border-[#F0ECE1]">
                  Select number to call:
                </span>
                <a
                  href={CONTACTS.phone1.tel}
                  className="flex items-center justify-between px-3 py-2 text-xs font-bold rounded-xl hover:bg-[#F5F4EE] transition-colors"
                >
                  <span>{CONTACTS.phone1.display}</span>
                  <Phone className="w-3.5 h-3.5 text-emerald-700" />
                </a>
                <a
                  href={CONTACTS.phone2.tel}
                  className="flex items-center justify-between px-3 py-2 text-xs font-bold rounded-xl hover:bg-[#F5F4EE] transition-colors"
                >
                  <span>{CONTACTS.phone2.display}</span>
                  <Phone className="w-3.5 h-3.5 text-emerald-700" />
                </a>
              </div>
            )}
          </div>
        </div>

        <p className="text-xs text-white/60 mt-5">
          No advance payment required for single trial meal • Pay cash or UPI upon delivery
        </p>
      </div>

      {/* 2. Clean Dedicated Contact Section */}
      <div className="max-w-3xl mx-auto rounded-3xl bg-white border border-[#E3DFD2] p-6 sm:p-8 shadow-2xs">
        <div className="text-center sm:text-left mb-6 pb-4 border-b border-[#F0ECE1]">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#183824]">
            Contact Nitish Tiffin Service
          </h3>
          <p className="text-xs sm:text-sm text-[#5D6D60] mt-1">
            We are available every day for lunch and dinner orders in Chamba.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* CALL US CARD */}
          <div className="rounded-2xl bg-[#FAF9F5] border border-[#E6E2D4] p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-[#183824] text-white flex items-center justify-center">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <h4 className="text-sm font-bold text-[#183824] uppercase tracking-wider">
                Call Us
              </h4>
            </div>

            <div className="space-y-2">
              <a
                href={CONTACTS.phone1.tel}
                className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E3DFD2] hover:border-[#183824] text-sm font-bold text-[#183824] transition-all group shadow-2xs"
              >
                <span>{CONTACTS.phone1.display}</span>
                <span className="text-xs font-semibold text-emerald-700 group-hover:underline">
                  Call now →
                </span>
              </a>

              <a
                href={CONTACTS.phone2.tel}
                className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E3DFD2] hover:border-[#183824] text-sm font-bold text-[#183824] transition-all group shadow-2xs"
              >
                <span>{CONTACTS.phone2.display}</span>
                <span className="text-xs font-semibold text-emerald-700 group-hover:underline">
                  Call now →
                </span>
              </a>
            </div>
          </div>

          {/* WHATSAPP US CARD */}
          <div className="rounded-2xl bg-[#FAF9F5] border border-[#E6E2D4] p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-[#183824] text-white flex items-center justify-center">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <h4 className="text-sm font-bold text-[#183824] uppercase tracking-wider">
                WhatsApp Us
              </h4>
            </div>

            <div className="space-y-2">
              <a
                href={CONTACTS.phone1.wa}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E3DFD2] hover:border-[#183824] text-sm font-bold text-[#183824] transition-all group shadow-2xs"
              >
                <span>{CONTACTS.phone1.display}</span>
                <span className="text-xs font-semibold text-emerald-700 group-hover:underline">
                  Chat on WhatsApp →
                </span>
              </a>

              <a
                href={CONTACTS.phone2.wa}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E3DFD2] hover:border-[#183824] text-sm font-bold text-[#183824] transition-all group shadow-2xs"
              >
                <span>{CONTACTS.phone2.display}</span>
                <span className="text-xs font-semibold text-emerald-700 group-hover:underline">
                  Chat on WhatsApp →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
