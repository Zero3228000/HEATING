import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { PageId } from '../types';

interface BrandsMarqueeProps {
  onNavigate?: (page: PageId) => void;
}

interface BrandItem {
  id: string;
  name: string;
  badge: string;
  rating?: string;
  highlight: string;
  tagColor: string;
}

const BRANDS_LIST: BrandItem[] = [
  {
    id: 'worcester',
    name: 'Worcester Bosch',
    badge: 'Diamond Accredited Installer',
    rating: 'Up to 12 Yrs Guarantee',
    highlight: 'UK Market Leader',
    tagColor: 'border-teal-300 bg-teal-50 text-[#009FA0]'
  },
  {
    id: 'gas-safe',
    name: 'Gas Safe Register',
    badge: 'Registration No. 938210',
    rating: '100% Certified Engineers',
    highlight: 'Official UK Standard',
    tagColor: 'border-amber-300 bg-amber-50 text-amber-800'
  },
  {
    id: 'baxi',
    name: 'BAXI Approved',
    badge: 'Authorised Specialist Installer',
    rating: 'Up to 10 Yrs Guarantee',
    highlight: 'British Manufactured',
    tagColor: 'border-blue-300 bg-blue-50 text-blue-800'
  },
  {
    id: 'ideal',
    name: 'Ideal Heating',
    badge: 'Accredited Heating Partner',
    rating: 'Logic+ & Vogue Specialists',
    highlight: 'Compact Cupboard Fit',
    tagColor: 'border-cyan-300 bg-cyan-50 text-cyan-800'
  },
  {
    id: 'google',
    name: 'Google Reviews',
    badge: '5.0 ★ Verified Local Rating',
    rating: '150+ 5-Star Reviews',
    highlight: 'Top Rated in Leeds',
    tagColor: 'border-emerald-300 bg-emerald-50 text-emerald-800'
  },
  {
    id: 'checkatrade',
    name: 'Checkatrade',
    badge: '9.9 / 10 Verified Rating',
    rating: 'Vetted & Inspected Work',
    highlight: 'Background Checked',
    tagColor: 'border-red-300 bg-red-50 text-red-800'
  },
  {
    id: 'rated-people',
    name: 'Rated People',
    badge: 'Quality Heating Contractor',
    rating: '5/5 Recommendation Rate',
    highlight: 'Customer Endorsed',
    tagColor: 'border-orange-300 bg-orange-50 text-[#f78320]'
  },
  {
    id: 'tradehelp',
    name: 'Novuna / TradeHelp',
    badge: 'FCA Authorised Broker',
    rating: '0% APR & Flexible Terms',
    highlight: 'Affordable Finance',
    tagColor: 'border-purple-300 bg-purple-50 text-purple-800'
  },
  {
    id: 'vaillant',
    name: 'Vaillant Advance',
    badge: 'Advance Partner Installer',
    rating: 'EcoTEC Plus Certified',
    highlight: 'German Engineering',
    tagColor: 'border-teal-300 bg-teal-50 text-teal-800'
  }
];

export const BrandsMarquee: React.FC<BrandsMarqueeProps> = ({ onNavigate }) => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate list to create seamless infinite loop
  const marqueeItems = [...BRANDS_LIST, ...BRANDS_LIST];

  return (
    <div className="w-full bg-white border-b border-stone-200 py-6 overflow-hidden relative">
      {/* Edge gradient masks for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Header Eyebrow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#009FA0] animate-ping" />
          <p className="text-xs font-black text-[#009FA0] uppercase tracking-wider">
            Accreditations &amp; Trusted Partnerships
          </p>
        </div>
        {onNavigate && (
          <button
            onClick={() => onNavigate('brands')}
            className="text-xs font-bold text-slate-600 hover:text-[#009FA0] transition flex items-center gap-1 cursor-pointer"
          >
            <span>View all brands</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* Infinite Scrolling Track */}
      <div 
        className="flex"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-4 shrink-0"
          animate={{
            x: isPaused ? undefined : ['0%', '-50%']
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 34,
              ease: 'linear'
            }
          }}
        >
          {marqueeItems.map((brand, index) => (
            <motion.div
              key={`${brand.id}-${index}`}
              whileHover={{ scale: 1.02, y: -2 }}
              onClick={() => onNavigate && onNavigate('brands')}
              className="w-64 sm:w-72 shrink-0 p-3.5 rounded-xl bg-[#FAF8F3] hover:bg-stone-50 border border-stone-200/90 hover:border-teal-300 transition-all shadow-2xs hover:shadow-xs cursor-pointer flex flex-col justify-between"
            >
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight">
                    {brand.name}
                  </h4>
                  <p className="text-[#009FA0] font-semibold text-xs leading-tight">
                    {brand.badge}
                  </p>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${brand.tagColor} shrink-0`}>
                  {brand.highlight}
                </span>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 border-t border-stone-200/70 pt-2 mt-1">
                <span className="font-medium text-slate-700">{brand.rating}</span>
                <span className="text-[#009FA0] font-bold hover:underline">Learn more →</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
