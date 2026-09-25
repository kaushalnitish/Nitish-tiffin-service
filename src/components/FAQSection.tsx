import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/faqs';
import { CONTACTS } from '../config/siteContent';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-[#F5F4EE] border-t border-[#EAE7DC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#55695A] uppercase tracking-wider block mb-1">
            CLEAR & HONEST ANSWERS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#183824]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#4C5B50] mt-2 leading-relaxed">
            Everything you need to know about our daily meals, delivery timings, pricing, and how to order in Chamba.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-white border border-[#E3DFD2] rounded-2xl overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF9F5]/70 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#183824] leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#183824] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-emerald-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-[#4D5D51] leading-relaxed border-t border-[#F2EFE8]">
                    <p className="pt-2">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp help */}
        <div className="mt-8 text-center bg-white border border-[#E3DFD2] rounded-2xl p-4 sm:p-5 max-w-xl mx-auto shadow-2xs">
          <span className="text-xs font-semibold text-[#183824] block mb-1">
            Have a specific dietary question or need custom arrangements?
          </span>
          <p className="text-xs text-[#637466] mb-3">
            Message us directly on WhatsApp. We are happy to help.
          </p>
          <a
            href={CONTACTS.phone1.wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#183824] text-white text-xs font-semibold hover:bg-[#11291A] transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Chat with us on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
