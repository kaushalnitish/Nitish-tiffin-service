import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, UtensilsCrossed } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found | Nitish Tiffin Service Chamba"
        description="The requested page could not be found on Nitish Tiffin Service."
        noindex={true}
      />

      <main className="min-h-[60vh] flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full text-center bg-white border border-[#E3DFD2] rounded-3xl p-8 sm:p-10 shadow-2xs">
          <div className="w-12 h-12 rounded-2xl bg-[#F0ECE1] text-[#183824] flex items-center justify-center mx-auto mb-4">
            <UtensilsCrossed className="w-6 h-6" />
          </div>

          <span className="text-xs font-bold text-[#728376] uppercase tracking-wider block mb-1">
            404 ERROR
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#183824] mb-2">
            Page Not Found
          </h1>

          <p className="text-xs sm:text-sm text-[#55695B] leading-relaxed mb-6">
            The page you are looking for may have been moved, renamed, or is temporarily unavailable.
          </p>

          <div className="space-y-2 text-xs font-semibold">
            <Link
              to="/"
              className="w-full py-2.5 px-4 rounded-full bg-[#183824] text-white hover:bg-[#11291A] transition-colors flex items-center justify-center gap-1.5"
            >
              <Home className="w-4 h-4" />
              <span>Back to Homepage</span>
            </Link>

            <Link
              to="/plans"
              className="w-full py-2.5 px-4 rounded-full border border-[#D5D0C2] text-[#183824] hover:bg-[#FAF9F5] transition-colors block"
            >
              Explore Tiffin Plans
            </Link>

            <Link
              to="/articles"
              className="w-full py-2.5 px-4 rounded-full border border-[#D5D0C2] text-[#183824] hover:bg-[#FAF9F5] transition-colors block"
            >
              Read Food Journal & Guides
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};
