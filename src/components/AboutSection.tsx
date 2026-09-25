import React from 'react';
import { ABOUT } from '../config/siteContent';
import { KITCHEN_COOKING_IMAGE } from '../config/images';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-20 bg-[#F5F4EE] border-t border-[#EAE7DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden aspect-4/3 sm:aspect-5/4 border border-[#E3DFD2] shadow-sm bg-[#EAE8DE] group">
              <picture className="w-full h-full block">
                <source
                  type="image/avif"
                  srcSet={KITCHEN_COOKING_IMAGE.avifSrcSet}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                />
                <source
                  type="image/webp"
                  srcSet={KITCHEN_COOKING_IMAGE.webpSrcSet}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                />
                <img
                  src={KITCHEN_COOKING_IMAGE.fallbackSrc}
                  srcSet={KITCHEN_COOKING_IMAGE.fallbackSrcSet}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                  width={KITCHEN_COOKING_IMAGE.width}
                  height={KITCHEN_COOKING_IMAGE.height}
                  alt="Authentic Indian home cooking with fresh rotis and traditional spices"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              {/* Subtle genuine note */}
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs rounded-xl p-2.5 border border-white/80 flex items-center justify-between text-xs text-[#183824]">
                <span className="font-semibold">Ghar Jaisa Khana</span>
                <span className="text-[#657669]">Prepared with Care</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#183824]">
              {ABOUT.title}
            </h2>

            <div className="space-y-3 text-sm sm:text-base text-[#4C5B50] leading-relaxed pt-2">
              <p>{ABOUT.p1}</p>
              <p>{ABOUT.p2}</p>
              <p className="font-semibold text-[#183824]">{ABOUT.p3}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
