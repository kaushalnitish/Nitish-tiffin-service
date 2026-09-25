import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs text-[#6B7C70]">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-1 hover:text-[#183824] transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-[#183824]" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.name} className="inline-flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-[#A3B1A6]" />
              {isLast || !item.url ? (
                <span className="font-semibold text-[#183824] line-clamp-1" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.url}
                  className="hover:text-[#183824] transition-colors line-clamp-1"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
