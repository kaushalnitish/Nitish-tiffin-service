import React from 'react';
import { MapPin, Clock, MessageCircle, CheckCircle2 } from 'lucide-react';
import { VERIFIED_SERVICE_AREAS, SERVICE_AREA_POLICY } from '../data/serviceAreas';
import { CONTACTS } from '../config/siteContent';

export const ServiceAreaSection: React.FC = () => {
  return (
    <section id="service-area" className="py-14 sm:py-20 bg-[#FAF9F5] border-t border-[#EAE7DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#55695A] uppercase tracking-wider block mb-1">
            LOCAL DELIVERY COVERAGE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#183824]">
            Service Areas in Chamba
          </h2>
          <p className="text-sm sm:text-base text-[#4C5B50] mt-2 leading-relaxed">
            Freshly cooked lunch and dinner delivered warm across key residential and commercial areas in Chamba town.
          </p>
        </div>

        {/* Timings Highlight Box */}
        <div className="max-w-3xl mx-auto mb-8 bg-white border border-[#E3DFD2] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EAF2EC] text-[#183824] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#183824] uppercase tracking-wide block">
                Daily Delivery Schedule
              </span>
              <span className="text-xs sm:text-sm text-[#465449]">
                Lunch: <strong>~1:00 PM</strong> • Dinner: <strong>~7:45 PM</strong>
              </span>
            </div>
          </div>

          <a
            href={CONTACTS.phone1.wa}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#183824] text-white text-xs font-semibold hover:bg-[#11291A] transition-all flex items-center justify-center gap-1.5 shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Confirm My Location</span>
          </a>
        </div>

        {/* Verified Area Display */}
        <div className="max-w-xl mx-auto">
          {VERIFIED_SERVICE_AREAS.map((area) => (
            <div
              key={area.id}
              className="bg-white border border-[#E3DFD2] rounded-3xl p-6 sm:p-7 hover:border-[#183824]/40 transition-colors shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#EAF2EC] text-[#183824] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#55695A] uppercase tracking-wider block">
                      CONFIRMED SERVICE LOCATION
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#183824] leading-snug">
                      {area.name}
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#5D6E61] leading-relaxed mb-4 pl-1">
                  {area.landmark}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2EFE8] space-y-2 text-xs text-[#637466]">
                <div className="flex items-center gap-2 text-[#183824] font-semibold text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{area.deliveryTime}</span>
                </div>
                <p className="text-[#6D7D70] pl-6 leading-relaxed">{area.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Policy Footer */}
        <div className="max-w-2xl mx-auto mt-8 text-center text-xs text-[#6C7D70] bg-[#F2EFE7]/80 rounded-xl p-3 border border-[#E5E1D5]">
          <p>{SERVICE_AREA_POLICY.generalNotice}</p>
        </div>
      </div>
    </section>
  );
};
