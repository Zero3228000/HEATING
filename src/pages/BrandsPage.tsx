import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Calculator, 
  Info,
  Check,
  Zap
} from 'lucide-react';
import { PageId } from '../types';
import { BOILER_BRANDS } from '../data/mockData';

interface BrandsPageProps {
  setCurrentPage: (page: PageId) => void;
}

export const BrandsPage: React.FC<BrandsPageProps> = ({ setCurrentPage }) => {
  const [activeBrandId, setActiveBrandId] = useState<string>('worcester-bosch');

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedBrand = BOILER_BRANDS.find(b => b.id === activeBrandId) || BOILER_BRANDS[0];

  return (
    <div className="w-full bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-teal-700" />
            <span>Market-Leading Manufacturers</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Accredited Boiler Brands & Guarantees
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">
            Heatwise Heating is an accredited partner for the UK's leading boiler manufacturers. 
            We install A-rated systems with exclusive extended guarantees of up to 12 years.
          </p>
        </div>

        {/* Brand Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {BOILER_BRANDS.map((brand) => (
            <button
              key={brand.id}
              onClick={() => setActiveBrandId(brand.id)}
              className={`px-6 py-3.5 rounded-2xl font-black text-sm sm:text-base transition-all duration-200 border-2 flex items-center gap-2.5 ${
                activeBrandId === brand.id
                  ? 'bg-teal-700 text-white border-teal-700 shadow-md scale-105'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <Award className={`w-4 h-4 ${activeBrandId === brand.id ? 'text-amber-300' : 'text-slate-400'}`} />
              <span>{brand.name}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                activeBrandId === brand.id ? 'bg-teal-800 text-teal-100' : 'bg-slate-100 text-slate-600'
              }`}>
                Up to {brand.guaranteeYears} Yrs
              </span>
            </button>
          ))}
        </div>

        {/* Active Brand Detailed Showcase */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-200 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="space-y-2">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                {selectedBrand.accreditationLevel}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
                {selectedBrand.name} Boilers
              </h2>
              <p className="text-teal-900 font-semibold text-sm sm:text-base">
                {selectedBrand.tagline}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-4 bg-teal-50 border border-teal-200 rounded-2xl text-center">
                <span className="text-[11px] font-bold text-teal-700 block uppercase">Guarantee</span>
                <span className="text-2xl font-black text-teal-900">Up to {selectedBrand.guaranteeYears} Yrs</span>
              </div>
              <button
                onClick={() => navigateTo('quote')}
                className="px-6 py-4 bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm rounded-2xl shadow-md flex items-center gap-2"
              >
                <Calculator className="w-4 h-4 text-amber-300" />
                <span>Get Instant Quote</span>
              </button>
            </div>
          </div>

          {/* Description & Brand Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Brand Reputation & Accreditation</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{selectedBrand.description}</p>

              <div className="pt-2">
                <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Key Manufacturer Advantages:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedBrand.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200/70">
                      <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Accreditation Badge Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-teal-900 to-slate-900 rounded-2xl p-6 text-white space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-800 text-teal-200 text-xs font-bold">
                  <ShieldCheck className="w-4 h-4 text-amber-300" />
                  <span>Heatwise Heating Official Accreditation</span>
                </div>
                <h4 className="text-xl font-black text-white leading-tight">
                  Why buy your {selectedBrand.name} through an Accredited Installer?
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Non-accredited plumbers can typically only offer 5-7 years standard warranty. 
                  Because our engineers complete factory training at the manufacturer training academy, 
                  you receive the maximum full 10-12 year non-quibble parts and labour warranty.
                </p>
              </div>

              <div className="pt-4 border-t border-teal-800/80 flex items-center justify-between text-xs">
                <span className="text-teal-200 font-semibold">100% Genuine Factory Parts</span>
                <span className="text-amber-300 font-black">12-Year Cover</span>
              </div>
            </div>
          </div>

          {/* Popular Models Comparison Cards */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <h3 className="text-xl font-bold text-slate-900">
              Popular {selectedBrand.name} Models Fitted by Heatwise
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {selectedBrand.popularModels.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-slate-900 text-base">{m.model}</h4>
                      <span className="text-xs font-bold text-teal-800 bg-teal-100 px-2 py-0.5 rounded">
                        {m.warranty}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mb-3">{m.bestFor}</p>

                    <div className="space-y-1.5 text-xs text-slate-700 py-2 border-y border-slate-200/80">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Outputs:</span>
                        <span className="font-bold text-slate-900">{m.kw}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Flow Rate:</span>
                        <span className="font-bold text-slate-900">{m.flowRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Key Feature:</span>
                        <span className="font-medium text-teal-800 text-right">{m.keyFeature}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 block">Fully Installed From</span>
                      <span className="text-lg font-black text-slate-900">{m.approxPrice}</span>
                    </div>
                    <button
                      onClick={() => navigateTo('quote')}
                      className="px-3.5 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs font-bold transition"
                    >
                      Get Quote →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
          <h3 className="text-xl font-bold text-slate-900">Side-by-Side Brand Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 uppercase font-bold text-[11px]">
                  <th className="p-3">Brand</th>
                  <th className="p-3">Max Guarantee</th>
                  <th className="p-3">Manufacturing Base</th>
                  <th className="p-3">Accreditation Level</th>
                  <th className="p-3">Price Point</th>
                  <th className="p-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">Worcester Bosch</td>
                  <td className="p-3 text-teal-800 font-bold">12 Years</td>
                  <td className="p-3 text-slate-600">Worcester, UK</td>
                  <td className="p-3 text-slate-600">Diamond Accredited</td>
                  <td className="p-3 text-slate-900 font-semibold">Premium / Mid-High</td>
                  <td className="p-3 text-right">
                    <button onClick={() => navigateTo('quote')} className="text-xs text-teal-700 font-bold hover:underline">
                      Quote →
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">Ideal Heating</td>
                  <td className="p-3 text-teal-800 font-bold">10-12 Years</td>
                  <td className="p-3 text-slate-600">Hull, Yorkshire</td>
                  <td className="p-3 text-slate-600">Approved Specialist</td>
                  <td className="p-3 text-slate-900 font-semibold">Best Value / Mid</td>
                  <td className="p-3 text-right">
                    <button onClick={() => navigateTo('quote')} className="text-xs text-teal-700 font-bold hover:underline">
                      Quote →
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">Baxi Boilers</td>
                  <td className="p-3 text-teal-800 font-bold">10 Years</td>
                  <td className="p-3 text-slate-600">Preston, Lancashire</td>
                  <td className="p-3 text-slate-600">Baxi Approved Partner</td>
                  <td className="p-3 text-slate-900 font-semibold">Mid-Range</td>
                  <td className="p-3 text-right">
                    <button onClick={() => navigateTo('quote')} className="text-xs text-teal-700 font-bold hover:underline">
                      Quote →
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
