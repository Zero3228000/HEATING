import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Award, 
  ArrowRight,
  Lock,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_DETAILS } from '../data/mockData';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
  onSelectServiceDetail?: (serviceId: string) => void;
  onRequestCallback?: () => void;
}

const COVERED_AREAS = [
  'Leeds',
  'Moortown',
  'Alwoodley',
  'Roundhay',
  'Chapel Allerton',
  'Meanwood',
  'Bramhope',
  'Adel',
  'Horsforth',
  'Shadwell',
  'Scarcroft'
];

export const Footer: React.FC<FooterProps> = ({
  setCurrentPage,
  onSelectServiceDetail,
  onRequestCallback
}) => {
  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToService = (serviceId: string) => {
    if (onSelectServiceDetail) {
      onSelectServiceDetail(serviceId);
    }
    setCurrentPage('service-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-white text-slate-700 border-t border-stone-200">
      
      {/* 1. Disciplined Light CTA Header Strip - Perfectly Matching Site Palette */}
      <div className="bg-[#FAF8F3] py-10 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-[#009FA0] text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Instant Fixed-Price Quotes in Under 2 Minutes</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Looking to replace your boiler or need a service?
            </h3>
            <p className="text-slate-600 text-sm max-w-2xl">
              Gas Safe registered heating engineers based in Moortown, Leeds. Fixed pricing, no hidden extras, and up to 12 years guarantee.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              id="footer-get-quote-cta"
              onClick={() => navigateTo('quote')}
              className="px-6 py-3.5 bg-[#f78320] hover:bg-[#ea6f0e] text-white rounded-xl font-bold text-sm shadow-sm hover:shadow transition transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
            >
              <span>Get Your Boiler Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              id="footer-call-cta"
              href={`tel:${COMPANY_DETAILS.phoneLandline.replace(/\s+/g, '')}`}
              className="px-5 py-3.5 bg-white hover:bg-stone-50 text-slate-800 border border-stone-300 rounded-xl font-bold text-sm shadow-2xs transition flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#009FA0]" />
              <span>0113 268 8570</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Footer 4 Columns - Clean, Balanced Typography */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand, Intro & Leeds Coverage (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block">
              <img
                src="/images/heatwise-moortown-leeds-heating-engineers.png"
                alt="Heatwise Heating Engineers Moortown Leeds"
                className="h-11 w-auto object-contain"
              />
            </div>

            <p className="text-sm font-semibold text-slate-800 leading-snug">
              Boiler Installation, Service and Repair in Leeds.
            </p>
            
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-900">Heatwise</strong> provide friendly, reliable and professional heating services throughout <strong className="text-slate-900">Leeds</strong> and West Yorkshire.
            </p>

            {/* Official Accreditations Row */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
                <div className="w-4 h-4 rounded bg-[#FFB800] text-slate-950 font-black text-[9px] flex items-center justify-center">
                  G
                </div>
                <span>Gas Safe #938210</span>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold">
                <Award className="w-3.5 h-3.5 text-[#009FA0]" />
                <span>Worcester Accredited</span>
              </div>
            </div>

            {/* Areas Covered Link Pills */}
            <div className="pt-2">
              <span className="block text-xs font-bold text-slate-900 mb-1.5">
                Areas We Cover:
              </span>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {COVERED_AREAS.map((area, idx) => (
                  <button
                    key={idx}
                    onClick={() => navigateTo('locations')}
                    className="text-slate-600 hover:text-[#009FA0] hover:underline"
                  >
                    {area}{idx < COVERED_AREAS.length - 1 ? ',' : ''}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Our Services (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-black text-[#f78320] uppercase tracking-wider border-b border-stone-200 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => navigateTo('services')} 
                  className="hover:text-[#009FA0] transition flex items-center gap-1.5 text-slate-700 font-medium"
                >
                  <span>- New Boilers &amp; Replacements</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('services')} 
                  className="hover:text-[#009FA0] transition flex items-center gap-1.5 text-slate-700 font-medium"
                >
                  <span>- Boiler Installations Leeds</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToService('repairs')} 
                  className="hover:text-[#009FA0] transition flex items-center gap-1.5 text-slate-700 font-medium"
                >
                  <span>- Boiler Repairs &amp; Diagnostics</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToService('servicing')} 
                  className="hover:text-[#009FA0] transition flex items-center gap-1.5 text-slate-700 font-medium"
                >
                  <span>- Annual Boiler Servicing (£79 Fixed)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('quote')} 
                  className="hover:text-[#009FA0] transition flex items-center gap-1.5 text-[#009FA0] font-bold"
                >
                  <span>- Instant Boiler Quote</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('finance')} 
                  className="hover:text-[#009FA0] transition flex items-center gap-1.5 text-slate-700 font-medium"
                >
                  <span>- 0% Boiler Finance</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToService('powerflush')} 
                  className="hover:text-[#009FA0] transition flex items-center gap-1.5 text-slate-700 font-medium"
                >
                  <span>- Powerflushing &amp; MagnaCleanse</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToService('smart-controls')} 
                  className="hover:text-[#009FA0] transition flex items-center gap-1.5 text-slate-700 font-medium"
                >
                  <span>- Smart Thermostats &amp; Controls</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('faqs')} 
                  className="hover:text-[#009FA0] transition flex items-center gap-1.5 text-slate-700 font-medium"
                >
                  <span>- Frequently Asked Questions</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Boiler Models & Fault Codes (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-black text-[#f78320] uppercase tracking-wider border-b border-stone-200 pb-2">
              Boiler Models
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => navigateTo('brands')} className="hover:text-[#009FA0] transition text-slate-700 font-medium">
                  - Worcester Bosch
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('brands')} className="hover:text-[#009FA0] transition text-slate-700 font-medium">
                  - Baxi Boilers
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('brands')} className="hover:text-[#009FA0] transition text-slate-700 font-medium">
                  - Ideal Heating
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('brands')} className="hover:text-[#009FA0] transition text-slate-700 font-medium">
                  - Combi Boilers
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('brands')} className="hover:text-[#009FA0] transition text-slate-700 font-medium">
                  - System Boilers
                </button>
              </li>
            </ul>

            <h5 className="text-xs font-black text-slate-900 uppercase tracking-wider pt-3 border-t border-stone-100">
              Error Code Guides
            </h5>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button onClick={() => navigateTo('brands')} className="hover:text-[#009FA0] transition text-slate-600">
                  - Worcester Bosch Codes
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('brands')} className="hover:text-[#009FA0] transition text-slate-600">
                  - Baxi Error Codes
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('brands')} className="hover:text-[#009FA0] transition text-slate-600">
                  - Ideal Fault Codes
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Get in Touch & Office Hours (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-black text-[#f78320] uppercase tracking-wider border-b border-stone-200 pb-2">
              Get in Touch
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#009FA0] shrink-0 mt-0.5" />
                <div>
                  <a 
                    href={`tel:${COMPANY_DETAILS.phoneLandline.replace(/\s+/g, '')}`} 
                    className="block font-bold text-slate-900 hover:text-[#009FA0]"
                  >
                    {COMPANY_DETAILS.phoneLandline}
                  </a>
                  <a 
                    href={`tel:${COMPANY_DETAILS.phoneMobile.replace(/\s+/g, '')}`} 
                    className="block text-slate-600 hover:text-[#009FA0]"
                  >
                    {COMPANY_DETAILS.phoneMobile}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#009FA0] shrink-0" />
                <a 
                  href={`mailto:${COMPANY_DETAILS.email}`} 
                  className="hover:text-[#009FA0] text-slate-700 font-medium"
                >
                  {COMPANY_DETAILS.email}
                </a>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-[#009FA0] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-bold">Heatwise Heating</strong>
                  <span>{COMPANY_DETAILS.address.street}</span>
                  <span className="block">{COMPANY_DETAILS.address.city}, {COMPANY_DETAILS.address.postcode}</span>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-[#009FA0] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-bold">Office Hours</strong>
                  <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
                  <span className="block text-slate-500 text-[11px]">Sat - Sun: Closed (Emergency Callout)</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button 
                onClick={() => navigateTo('blog')}
                className="text-xs font-bold text-[#009FA0] hover:underline"
              >
                Read Our Heating Advice Blog →
              </button>
            </div>
          </div>

        </div>

        {/* 3. FCA Regulatory Notice Box - Clean Light Stone Theme */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-[#FAF8F3] border border-stone-200 text-xs text-slate-600 leading-relaxed space-y-2">
          <div className="flex items-center gap-2 text-slate-900 font-bold">
            <Lock className="w-4 h-4 text-[#009FA0]" />
            <span>Financial Conduct Authority (FCA) Regulatory Disclosure</span>
          </div>
          <p className="text-[11px] text-slate-600">
            Heatwise Plumbing Ltd is an Introducer Appointed Representative of TradeHelp Ltd, which is authorized and regulated by the Financial Conduct Authority (FRN 697812). Heatwise Heating acts as a credit broker and not a lender, offering credit products from Novuna Personal Finance (a trading style of Mitsubishi HC Capital UK PLC). Credit is subject to status and affordability checks. Terms and conditions apply. UK residents aged 18+ only.
          </p>
        </div>

        {/* 4. Disciplined Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Heatwise Heating Engineers Leeds. Gas Safe Register #938210. Registered in England &amp; Wales.
          </div>
          <div className="flex items-center gap-4 font-medium">
            <button onClick={() => navigateTo('faqs')} className="hover:text-slate-800">
              FAQs
            </button>
            <button onClick={() => navigateTo('blog')} className="hover:text-slate-800">
              Blog
            </button>
            <button onClick={() => navigateTo('contact')} className="hover:text-slate-800">
              Contact Us
            </button>
            <button onClick={() => navigateTo('quote')} className="text-[#009FA0] hover:text-[#008283] font-bold">
              Instant Quote
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
