import React from 'react';
import { motion } from 'motion/react';
import { PageId } from '../types';

interface ReplaceOldBoilerLogosSectionProps {
  onNavigate?: (page: PageId) => void;
}

const BRAND_LOGOS = [
  {
    name: 'Worcester Bosch Accredited Installer',
    src: '/images/worcester-bosch-accredited-installers-in-leeds.png',
    alt: 'Worcester Bosch Accredited Installer Leeds'
  },
  {
    name: 'BAXI Approved Installer',
    src: '/images/baxi-approved-installers-in-leeds.png',
    alt: 'BAXI Approved Installer Leeds'
  },
  {
    name: 'Ideal Boilers',
    src: '/images/ideal-boiler-installers-in-leeds.png',
    alt: 'Ideal Boilers Approved Installer'
  },
  {
    name: 'Gas Safe Register',
    src: '/images/gas-safe-registered-heating-engineers-in-leeds.png',
    alt: 'Gas Safe Register Official Heating Engineers'
  },
  {
    name: 'Checkatrade',
    src: '/images/checkatrade-reviews-for-heatwise-heating-engineers-in-leeds.png',
    alt: 'Checkatrade Verified Heatwise Reviews'
  },
  {
    name: 'Google Customer Reviews',
    src: '/images/google-reviews-for-heatwise-heating-engineers-inleeds.png',
    alt: 'Google Customer 5-Star Reviews Heatwise'
  },
  {
    name: 'Rated People',
    src: '/images/rated-people-reviews-for-heatwise-heating-engineers-in-leeds.png',
    alt: 'Rated People Vetted Heating Tradesperson'
  }
];

export const ReplaceOldBoilerLogosSection: React.FC<ReplaceOldBoilerLogosSectionProps> = ({ onNavigate }) => {
  return (
    <section 
      id="replace-old-boiler-section" 
      className="py-14 sm:py-20 bg-white border-b border-stone-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title: Looking to replace your old boiler? */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#f78320] tracking-tight">
          Looking to replace your old boiler?
        </h2>

        {/* Subtitle: Heatwise specialise in installing energy efficient combi boilers */}
        <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#009FA0] mt-2 sm:mt-3">
          Heatwise specialise in installing energy efficient combi boilers
        </p>

        {/* Centered Orange Separator Line */}
        <div className="w-24 h-1 bg-[#f78320] rounded-full mx-auto my-5 sm:my-6" />

        {/* Body Paragraph */}
        <p className="max-w-4xl mx-auto text-base sm:text-lg text-slate-700 leading-relaxed">
          Our <strong className="font-bold text-slate-900">Gas Safe engineers</strong> specialise in the replacement of both old combination boilers and converting traditional heating systems with hot water cylinders to <strong className="font-bold text-slate-900">new energy efficient combi boilers</strong>. We only <strong className="font-bold text-slate-900">install high quality boilers</strong> from the leading manufacturers.
        </p>

        {/* Logos Row exactly matching Screenshot 1 */}
        <div className="mt-10 sm:mt-14 pt-6 border-t border-stone-100">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 sm:gap-8 items-center justify-items-center">
            {BRAND_LOGOS.map((logo, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="w-full h-20 flex items-center justify-center p-2 rounded-xl bg-stone-50/70 hover:bg-stone-50 border border-stone-200/60 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
                onClick={() => onNavigate && onNavigate('brands')}
                title={logo.name}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-12 sm:max-h-14 w-auto max-w-[120px] object-contain filter grayscale-0 hover:brightness-105 transition-all"
                  loading="eager"
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
