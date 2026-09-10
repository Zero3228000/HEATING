import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { MapPin, ArrowRight, ShieldCheck, Award, Sparkles, CheckCircle2, Phone } from 'lucide-react';

interface LeedsLandmarkMapSectionProps {
  onNavigate: (page: PageId) => void;
}

const AREAS = [
  { name: 'Moortown', postcode: 'LS17', tag: 'HQ Hub' },
  { name: 'Roundhay', postcode: 'LS8', tag: 'High Demand' },
  { name: 'Alwoodley', postcode: 'LS17', tag: 'Top Rated' },
  { name: 'Chapel Allerton', postcode: 'LS7', tag: 'Active Daily' },
  { name: 'Horsforth', postcode: 'LS18', tag: 'Fast Callout' },
  { name: 'Headingley', postcode: 'LS6', tag: 'Student & Res' },
  { name: 'Bramhope', postcode: 'LS16', tag: 'North Leeds' },
  { name: 'Adel & Cookridge', postcode: 'LS16', tag: 'Local Area' },
  { name: 'Guiseley', postcode: 'LS20', tag: 'West Leeds' },
  { name: 'Wetherby', postcode: 'LS22', tag: 'Outer Leeds' }
];

export const LeedsLandmarkMapSection: React.FC<LeedsLandmarkMapSectionProps> = ({ onNavigate }) => {
  const [selectedArea, setSelectedArea] = useState<string>('Moortown');

  return (
    <section id="leeds-coverage-section" className="py-16 sm:py-24 bg-[#FAF8F3] border-b border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching site */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-[#009FA0] font-black text-xs uppercase tracking-wider bg-teal-50 border border-teal-200/60 px-3.5 py-1 rounded-full inline-block">
            Local Heating Coverage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Quality Boiler Installers in <span className="text-[#f78320]">Moortown, Leeds</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            As <strong className="text-slate-900">Worcester Bosch Accredited boiler installers</strong>, we offer quality installs, repairs and servicing throughout North, East, and West Leeds.
          </p>
        </div>

        {/* Big Illustration & Coverage Stage */}
        <div className="relative bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Map image from site with rich landmark overlay */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-lg bg-stone-50 rounded-2xl p-4 sm:p-6 border border-stone-200/80 shadow-xs flex flex-col items-center">
                
                {/* Floating badge for active area */}
                <div className="w-full flex items-center justify-between mb-3 text-xs">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#f78320]" />
                    Coverage Map • North &amp; West Leeds
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 font-bold text-[11px]">
                    Same-Day Callouts
                  </span>
                </div>

                {/* Real Illustrated Map from Heatwise site */}
                <div className="relative w-full flex items-center justify-center min-h-[300px] sm:min-h-[360px]">
                  <img
                    src="/images/areas-we-cover-heatwise-heating.png"
                    alt="Areas We Cover - Heatwise Heating Leeds Moortown Roundhay Alwoodley Map"
                    className="w-full max-h-[380px] sm:max-h-[440px] object-contain drop-shadow-md transition-transform hover:scale-[1.02]"
                    loading="eager"
                  />

                  {/* Highlight pill for Moortown Base */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xs border border-stone-200 shadow-md rounded-xl p-2.5 flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#f78320] animate-ping shrink-0" />
                    <div className="text-left">
                      <span className="block text-[11px] font-black text-slate-900">Heatwise HQ: Moortown LS17</span>
                      <span className="block text-[10px] text-slate-500">Fast dispatch to all LS postcodes</span>
                    </div>
                  </div>
                </div>

                {/* Local Landmarks Footer */}
                <div className="w-full mt-4 pt-3 border-t border-stone-200/80 flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-600">
                  <span className="font-semibold text-slate-900">Local Landmarks:</span>
                  <span className="bg-white px-2 py-0.5 rounded border border-stone-200">Moortown Golf Club</span>
                  <span className="bg-white px-2 py-0.5 rounded border border-stone-200">Tropical World</span>
                  <span className="bg-white px-2 py-0.5 rounded border border-stone-200">Roundhay Lake</span>
                  <span className="bg-white px-2 py-0.5 rounded border border-stone-200">Kirkstall Abbey</span>
                </div>

              </div>
            </div>

            {/* Quick Leeds Area List & CTA */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#FAF8F3] p-6 sm:p-7 rounded-2xl border border-stone-200 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-slate-900 text-lg flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#f78320]" />
                    <span>Key Leeds Areas We Serve</span>
                  </h3>
                  <span className="text-xs font-bold text-[#009FA0]">100% LS Covered</span>
                </div>

                {/* Area Buttons Grid */}
                <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
                  {AREAS.map((area, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedArea(area.name)}
                      className={`flex items-center justify-between py-2 px-2.5 rounded-lg border transition text-left cursor-pointer ${
                        selectedArea === area.name
                          ? 'bg-[#009FA0] text-white border-[#009FA0] shadow-xs'
                          : 'bg-white hover:bg-stone-50 border-stone-200/80 text-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 truncate">
                        <span className={`w-2 h-2 rounded-full ${selectedArea === area.name ? 'bg-amber-300' : 'bg-[#f78320]'}`} />
                        <span className="truncate">{area.name}</span>
                      </div>
                      <span className={`text-[10px] ml-1 shrink-0 ${selectedArea === area.name ? 'text-teal-100' : 'text-slate-400'}`}>
                        {area.postcode}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="p-3 bg-white rounded-xl border border-stone-200/80 text-xs text-slate-600 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900">
                    <CheckCircle2 className="w-4 h-4 text-[#009FA0]" />
                    <span>Selected: {selectedArea} Priority Coverage</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Dedicated boiler installation, annual servicing (£79), and emergency repair vans in {selectedArea} every weekday.
                  </p>
                </div>

                <div className="pt-1 text-xs text-slate-500 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Same-day diagnostics &amp; fixed-price quotes available.</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => onNavigate('locations')}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#009FA0] hover:bg-[#00898a] text-white font-bold text-sm shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore All Areas We Cover</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('quote')}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#f78320] hover:bg-[#ea6f0e] text-white font-bold text-sm shadow-sm transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Get Boiler Quote For {selectedArea}</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
