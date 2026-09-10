import React from 'react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { ShieldCheck, Phone, CheckCircle2 } from 'lucide-react';

interface WhoAreWeSectionProps {
  onNavigate: (page: PageId) => void;
}

export const WhoAreWeSection: React.FC<WhoAreWeSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left: Illustration of Julian Gas Safe Registered Director */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex justify-center items-center"
          >
            <div className="relative max-w-md lg:max-w-lg w-full flex items-center justify-center">
              <img 
                src="/images/experienced-heating-engineer-leeds-for-boiler-services.png" 
                alt="Julian - Gas Safe Registered Director at Heatwise Heating Leeds"
                className="w-full h-auto max-h-[480px] object-contain drop-shadow-sm transition-transform hover:scale-[1.01]"
              />
            </div>
          </motion.div>

          {/* Right: Who Are We content exactly matching the screenshot */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <h2 className="text-4xl sm:text-5xl font-black text-[#f78320] tracking-tight">
                Who Are We?
              </h2>
              <p className="text-xl sm:text-2xl font-semibold text-[#009FA0] mt-1.5">
                Boiler installation specialists based in Leeds
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              <strong className="font-bold text-slate-900">Heatwise</strong> are a family run business offering a full range of heating services covering{' '}
              <strong className="font-bold text-slate-900">central heating</strong>,{' '}
              <strong className="font-bold text-slate-900">gas services</strong>,{' '}
              <strong className="font-bold text-slate-900">landlord gas safety certificates</strong> and{' '}
              <strong className="font-bold text-slate-900">powerflushing</strong>.
            </p>

            {/* Key trust bullets */}
            <div className="space-y-3 pt-2 text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Gas Safe Registered #938210 (No third-party subcontractors)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Worcester Bosch Diamond Accredited Installers</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Up to 12-Year Manufacturer Guarantees on new boilers</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                id="who-are-we-contact-btn"
                onClick={() => onNavigate('contact')}
                className="px-8 py-3.5 rounded-lg bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                Contact Us
              </button>

              <a
                href="tel:01132688570"
                className="px-6 py-3.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-slate-800 font-bold text-sm border border-stone-300 transition flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-teal-700" />
                <span>0113 268 8570</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
