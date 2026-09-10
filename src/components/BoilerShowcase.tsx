import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Calculator, 
  Flame, 
  Zap, 
  Clock, 
  ArrowRight,
  SlidersHorizontal,
  Home,
  Bath,
  Check,
  Phone
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_DETAILS } from '../data/mockData';

interface BoilerShowcaseProps {
  onNavigate: (page: PageId) => void;
  onSelectBoiler?: (boilerModel: string) => void;
}

interface BoilerPackage {
  id: string;
  name: string;
  brand: 'Worcester Bosch' | 'Ideal' | 'Baxi';
  type: 'Combi' | 'System' | 'Regular';
  outputs: string;
  guaranteeYears: number;
  efficiency: string;
  homeSize: string;
  bedrooms: string;
  bathrooms: string;
  priceEstimate: number;
  monthlyFrom: number;
  popular?: boolean;
  features: string[];
  imageSrc: string;
  badgeText: string;
}

const BOILER_PACKAGES: BoilerPackage[] = [
  {
    id: 'worcester-4000',
    name: 'Worcester Bosch Greenstar 4000',
    brand: 'Worcester Bosch',
    type: 'Combi',
    outputs: '25kW / 30kW',
    guaranteeYears: 12,
    efficiency: '94% A-Rated ERP',
    homeSize: 'Small to Medium Homes',
    bedrooms: '2 - 4 Bedrooms',
    bathrooms: '1 - 2 Bathrooms',
    priceEstimate: 1995,
    monthlyFrom: 19.80,
    popular: true,
    features: [
      '12-Year Worcester Bosch Guarantee',
      'Quiet Mark Certified ultra-quiet operation',
      'Modern sleek curved design with full colour display',
      'QuickTap water-saving feature',
      '20% Hydrogen blend ready for the future',
      'Full chemical powerflush & magnetic filter included'
    ],
    imageSrc: '/images/new-worcester-bosch-boiler-leeds.png',
    badgeText: 'Leeds #1 Most Installed'
  },
  {
    id: 'worcester-8000',
    name: 'Worcester Bosch Greenstar 8000 Life & Style',
    brand: 'Worcester Bosch',
    type: 'Combi',
    outputs: '30kW - 50kW',
    guaranteeYears: 12,
    efficiency: '94% A-Rated ERP',
    homeSize: 'Large Executive Homes',
    bedrooms: '4 - 6 Bedrooms',
    bathrooms: '2 - 3 Bathrooms',
    priceEstimate: 2495,
    monthlyFrom: 24.50,
    popular: false,
    features: [
      '12-Year Worcester Bosch Guarantee',
      'High flow rate up to 18 litres/min for multiple showers',
      'Full-colour intuitive digital touchscreen display',
      'Wireless connectivity with Worcester EasyControl',
      'Available in premium high-gloss black or white',
      'Gas Safe installation by Heatwise engineers'
    ],
    imageSrc: '/images/heatwise-boiler-installations-in-leeds.png',
    badgeText: 'Ultimate Power & Style'
  },
  {
    id: 'worcester-2000',
    name: 'Worcester Bosch Greenstar 2000',
    brand: 'Worcester Bosch',
    type: 'Combi',
    outputs: '25kW / 30kW',
    guaranteeYears: 10,
    efficiency: '93% A-Rated ERP',
    homeSize: 'Apartments & Terraces',
    bedrooms: '1 - 3 Bedrooms',
    bathrooms: '1 Bathroom',
    priceEstimate: 1749,
    monthlyFrom: 17.20,
    popular: false,
    features: [
      '10-Year Worcester Bosch Guarantee',
      'Compact kitchen cupboard fit design',
      'Whisper-quiet performance',
      'Quick installation with pre-piped jig',
      'Push-button digital controls',
      'Fixed transparent pricing with no hidden fees'
    ],
    imageSrc: '/images/new-worcester-bosch-boiler-leeds.png',
    badgeText: 'Best Compact Cupboard Fit'
  },
  {
    id: 'ideal-logic-plus',
    name: 'Ideal Logic+ Combi Boiler',
    brand: 'Ideal',
    type: 'Combi',
    outputs: '24kW / 30kW / 35kW',
    guaranteeYears: 10,
    efficiency: '94% A-Rated ERP',
    homeSize: 'All Sized Properties',
    bedrooms: '2 - 4 Bedrooms',
    bathrooms: '1 - 2 Bathrooms',
    priceEstimate: 1695,
    monthlyFrom: 16.50,
    popular: false,
    features: [
      '10-Year Comprehensive Parts & Labour Warranty',
      'Award-winning Queen’s Award for Enterprise',
      'Compact dimensions for easy cupboard installation',
      'Simple user-friendly backlit digital display',
      'Built-in frost protection',
      'Complete installation and old boiler disposal'
    ],
    imageSrc: '/images/boiler-quote-installation-in-leeds.png',
    badgeText: 'Affordable British Engineering'
  }
];

export const BoilerShowcase: React.FC<BoilerShowcaseProps> = ({ onNavigate }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'worcester' | 'combi'>('all');

  const filteredBoilers = BOILER_PACKAGES.filter((b) => {
    if (selectedFilter === 'worcester') return b.brand === 'Worcester Bosch';
    if (selectedFilter === 'combi') return b.type === 'Combi';
    return true;
  });

  return (
    <section id="boilers-showcase-section" className="py-16 sm:py-20 bg-[#FAF8F3] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Heatwise authentic styling */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Worcester Bosch Accredited Boiler Specialists</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Our Most Popular <span className="text-[#009FA0]">New Boilers</span> in Leeds
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Every boiler installation by Heatwise includes a <strong className="text-slate-900 font-semibold">12-year guarantee</strong>, 
            full magnetic system filtration, chemical powerflush, and Gas Safe registration.
          </p>

          {/* Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-[#009FA0] text-white shadow-sm'
                  : 'bg-white hover:bg-stone-100 text-slate-700 border border-stone-200'
              }`}
            >
              All Recommended Boilers
            </button>
            <button
              onClick={() => setSelectedFilter('worcester')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition cursor-pointer ${
                selectedFilter === 'worcester'
                  ? 'bg-[#009FA0] text-white shadow-sm'
                  : 'bg-white hover:bg-stone-100 text-slate-700 border border-stone-200'
              }`}
            >
              Worcester Bosch 12-Yr Range
            </button>
            <button
              onClick={() => setSelectedFilter('combi')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition cursor-pointer ${
                selectedFilter === 'combi'
                  ? 'bg-[#009FA0] text-white shadow-sm'
                  : 'bg-white hover:bg-stone-100 text-slate-700 border border-stone-200'
              }`}
            >
              High Efficiency Combi Boilers
            </button>
          </div>
        </div>

        {/* Boiler Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBoilers.map((boiler) => (
            <div
              key={boiler.id}
              className={`relative bg-white rounded-2xl p-5 border transition-all duration-200 hover:shadow-xl flex flex-col justify-between group ${
                boiler.popular 
                  ? 'border-teal-500 shadow-md ring-2 ring-teal-500/20' 
                  : 'border-stone-200 hover:border-teal-300'
              }`}
            >
              {/* Badge */}
              <div className="absolute -top-3 left-4 right-4 flex justify-between items-center pointer-events-none">
                <span className={`px-3 py-1 rounded-full text-[11px] font-black tracking-wide shadow-sm ${
                  boiler.popular 
                    ? 'bg-[#f78320] text-white' 
                    : 'bg-slate-900 text-white'
                }`}>
                  {boiler.badgeText}
                </span>

                <span className="bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded-full text-[10px] font-bold">
                  {boiler.guaranteeYears} Yr Guarantee
                </span>
              </div>

              {/* Boiler Visual / Artwork */}
              <div className="pt-4 pb-2 flex flex-col items-center">
                <div className="relative w-full h-44 flex items-center justify-center p-2">
                  <img
                    src={boiler.imageSrc}
                    alt={`${boiler.name} installation Leeds`}
                    className="max-h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Guarantee sticker overlay */}
                  <img
                    src={
                      boiler.guaranteeYears === 12
                        ? '/images/12-year-guarantee-with-new-worcester-bosch-boiler.png'
                        : '/images/10-year-guarantee-with-new-worcester-bosch-boiler.png'
                    }
                    alt={`${boiler.guaranteeYears} year guarantee sticker`}
                    className="absolute -bottom-1 -right-1 w-12 h-12 object-contain drop-shadow"
                  />
                </div>

                <div className="text-center mt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#009FA0]">
                    {boiler.brand} • {boiler.type}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 leading-snug mt-0.5">
                    {boiler.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Outputs: <strong className="text-slate-700">{boiler.outputs}</strong>
                  </p>
                </div>
              </div>

              {/* Home Sizing Indicators */}
              <div className="bg-stone-50 rounded-xl p-2.5 my-3 grid grid-cols-2 gap-2 text-center text-xs">
                <div className="flex items-center justify-center gap-1 text-slate-700">
                  <Home className="w-3.5 h-3.5 text-[#009FA0]" />
                  <span className="text-[11px] font-semibold">{boiler.bedrooms}</span>
                </div>
                <div className="flex items-center justify-center gap-1 text-slate-700">
                  <Bath className="w-3.5 h-3.5 text-[#009FA0]" />
                  <span className="text-[11px] font-semibold">{boiler.bathrooms}</span>
                </div>
              </div>

              {/* Key Features List */}
              <div className="space-y-1.5 my-3 text-xs text-slate-600 flex-1">
                {boiler.features.slice(0, 4).map((feat, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span className="leading-tight">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Pricing & CTA */}
              <div className="pt-3 border-t border-stone-100 mt-auto">
                <div className="flex items-baseline justify-between mb-3">
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold block uppercase">From</span>
                    <span className="text-xl font-black text-slate-900">£{boiler.priceEstimate.toLocaleString()}</span>
                    <span className="text-[10px] text-slate-500 ml-1">inc. VAT &amp; fitting</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 font-semibold block">Or pay monthly</span>
                    <span className="text-xs font-bold text-[#009FA0]">£{boiler.monthlyFrom}/mo</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => onNavigate('quote')}
                    className="w-full py-2.5 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition cursor-pointer"
                  >
                    <Calculator className="w-3.5 h-3.5" />
                    <span>Get Instant Quote</span>
                  </button>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1 transition cursor-pointer"
                  >
                    <span>Book Free Home Survey</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* All-inclusive Installation Guarantee Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-2">
              <div className="flex items-center gap-2">
                <img
                  src="/images/12-year-guarantee-with-new-worcester-bosch-boiler.png"
                  alt="12 Year Guarantee badge"
                  className="h-10 w-auto object-contain"
                />
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  What’s Included with Every Heatwise Boiler Installation?
                </h3>
              </div>
              <p className="text-sm text-slate-600">
                Unlike national providers, we provide a complete, fixed-price package with zero hidden charges.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#009FA0] shrink-0" />
                  <span>Up to 12-Year Worcester Bosch parts &amp; labour guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#009FA0] shrink-0" />
                  <span>Full Kamco chemical powerflush &amp; system inhibitor</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#009FA0] shrink-0" />
                  <span>High-efficiency magnetic filter (MagnaClean) to protect boiler</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#009FA0] shrink-0" />
                  <span>Gas Safe registration certificate &amp; building regulation notice</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#009FA0] shrink-0" />
                  <span>Removal and eco-friendly disposal of your old boiler</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#009FA0] shrink-0" />
                  <span>Smart thermostat setup &amp; full demonstration by Julian</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-4 bg-[#FAF8F3] rounded-xl border border-stone-200 text-center space-y-3">
              <div className="flex items-center gap-2">
                <img
                  src="/images/gas-safe-registered-engineers-heatwise.png"
                  alt="Gas safe registered logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-semibold block">Need advice on the best size?</span>
                <span className="text-sm font-black text-slate-900">Speak directly to an engineer</span>
              </div>
              <a
                href="tel:01132688570"
                className="w-full py-2.5 px-4 bg-[#009FA0] hover:bg-[#008283] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition"
              >
                <Phone className="w-4 h-4" />
                <span>Call 0113 268 8570</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
