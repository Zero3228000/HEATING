import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Flame, 
  Wrench, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  Calculator, 
  Phone, 
  ArrowRight,
  Droplets,
  Zap,
  Cpu,
  FileText,
  Sparkles
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_DETAILS } from '../data/mockData';

interface HeatingServicesDetailSectionProps {
  onNavigate: (page: PageId) => void;
  onSelectServiceDetail?: (serviceId: string) => void;
}

export const HeatingServicesDetailSection: React.FC<HeatingServicesDetailSectionProps> = ({
  onNavigate,
  onSelectServiceDetail
}) => {
  const [activeTab, setActiveTab] = useState<'service' | 'repairs' | 'powerflush' | 'landlord'>('service');

  return (
    <section id="heating-details-section" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Complete Central Heating &amp; Gas Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Comprehensive <span className="text-[#009FA0]">Heating Services</span> in Leeds
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Heatwise have extensive experience across all central heating services — from routine annual servicing and emergency repairs to full chemical powerflushing and smart control upgrades.
          </p>

          {/* Interactive Navigation Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab('service')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                activeTab === 'service'
                  ? 'bg-[#009FA0] text-white shadow-md'
                  : 'bg-[#FAF8F3] hover:bg-stone-100 text-slate-700 border border-stone-200'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Boiler Servicing (£79)</span>
            </button>

            <button
              onClick={() => setActiveTab('repairs')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                activeTab === 'repairs'
                  ? 'bg-[#009FA0] text-white shadow-md'
                  : 'bg-[#FAF8F3] hover:bg-stone-100 text-slate-700 border border-stone-200'
              }`}
            >
              <Wrench className="w-4 h-4" />
              <span>Boiler Repairs &amp; Diagnostics</span>
            </button>

            <button
              onClick={() => setActiveTab('powerflush')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                activeTab === 'powerflush'
                  ? 'bg-[#009FA0] text-white shadow-md'
                  : 'bg-[#FAF8F3] hover:bg-stone-100 text-slate-700 border border-stone-200'
              }`}
            >
              <Droplets className="w-4 h-4" />
              <span>Powerflushing &amp; Radiators</span>
            </button>

            <button
              onClick={() => setActiveTab('landlord')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                activeTab === 'landlord'
                  ? 'bg-[#009FA0] text-white shadow-md'
                  : 'bg-[#FAF8F3] hover:bg-stone-100 text-slate-700 border border-stone-200'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Landlord Gas Safety (CP12)</span>
            </button>
          </div>
        </div>

        {/* Tab 1: BOILER SERVICING */}
        {activeTab === 'service' && (
          <div className="bg-[#FAF8F3] rounded-3xl p-6 sm:p-10 border border-stone-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-black">
                  <span>Comprehensive Annual Maintenance</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  What’s Included in Our Boiler Services in Leeds?
                </h3>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Regular boiler services in Leeds are vital to keep your heating system running efficiently and safely. 
                  Our Gas Safe certified check ensures your warranty remains valid and identifies small issues before they cause costly winter breakdowns.
                </p>

                {/* Scraped Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/80 shadow-xs">
                    <span className="font-bold text-xs text-slate-900 flex items-center gap-1.5 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-[#009FA0]" />
                      Flue Gas Combustion Analysis
                    </span>
                    <p className="text-[11px] text-slate-500">
                      Using calibrated digital flue gas analysers to confirm clean combustion and zero carbon monoxide leaks.
                    </p>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/80 shadow-xs">
                    <span className="font-bold text-xs text-slate-900 flex items-center gap-1.5 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-[#009FA0]" />
                      Heat Exchanger &amp; Burner Cleaning
                    </span>
                    <p className="text-[11px] text-slate-500">
                      Clearing deposits, inspecting gaskets and checking spark electrodes for optimum heat transfer.
                    </p>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/80 shadow-xs">
                    <span className="font-bold text-xs text-slate-900 flex items-center gap-1.5 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-[#009FA0]" />
                      Pipe Seals, Water &amp; Gas Pressure
                    </span>
                    <p className="text-[11px] text-slate-500">
                      Inspecting internal and external connections for leaks, corrosion and testing operating pressures.
                    </p>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/80 shadow-xs">
                    <span className="font-bold text-xs text-slate-900 flex items-center gap-1.5 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-[#009FA0]" />
                      Digital Certificate &amp; Warranty Stamp
                    </span>
                    <p className="text-[11px] text-slate-500">
                      Complete Gas Safe documentation emailed to you and entered in your boiler service logbook.
                    </p>
                  </div>
                </div>

                {/* When to book callout box */}
                <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 space-y-1.5">
                  <span className="text-xs font-black text-amber-900 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-amber-600" />
                    When Should You Book Boiler Services in Leeds?
                  </span>
                  <p className="text-xs text-amber-800 leading-relaxed">
                    The ideal time to schedule a service is in late summer or early autumn, ahead of the colder months. 
                    Booking ahead gives you peace of mind and prevents the stress of an unexpected breakdown when heating demand peaks.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-6 py-3 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-sm shadow-sm transition flex items-center gap-2 cursor-pointer"
                  >
                    <span>Book a Service (£79)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="tel:01132688570"
                    className="px-5 py-3 rounded-xl bg-white hover:bg-stone-50 text-slate-800 font-bold text-sm border border-stone-300 transition flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#009FA0]" />
                    <span>0113 268 8570</span>
                  </a>
                </div>

              </div>

              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="relative w-full max-w-sm">
                  <img 
                    src="/images/worcester-boiler-service-in-leeds.png" 
                    alt="Worcester boiler service in Leeds illustration"
                    className="w-full h-auto object-contain drop-shadow"
                  />
                  <div className="mt-4 p-4 bg-white rounded-2xl border border-stone-200 text-center shadow-xs">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Fixed Price Servicing</span>
                    <span className="text-3xl font-black text-slate-900">£79 <span className="text-xs font-normal text-slate-500">inc. VAT</span></span>
                    <p className="text-[11px] text-teal-700 font-semibold mt-1">All Worcester, Ideal &amp; Baxi models</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 2: BOILER REPAIRS */}
        {activeTab === 'repairs' && (
          <div className="bg-[#FAF8F3] rounded-3xl p-6 sm:p-10 border border-stone-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-black">
                  <span>Fast, Reliable Emergency Repairs</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  Boiler Repairs in Leeds &amp; North Leeds Suburbs
                </h3>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Is your boiler playing up or stopped working altogether? Don’t worry! We understand how stressful it can be to lose heat or hot water. 
                  Our skilled engineers have vast experience diagnosing and repairing all makes and models quickly and cleanly.
                </p>

                {/* Signs & Common faults */}
                <div className="space-y-2.5 pt-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Common Faults We Diagnose &amp; Fix Daily:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-stone-200">
                      <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>Low Pressure (Error E119 / F1)</span>
                    </div>
                    <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-stone-200">
                      <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>No Ignition / Lockout (EA / 227)</span>
                    </div>
                    <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-stone-200">
                      <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>Kettling or Whistling Noise</span>
                    </div>
                    <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-stone-200">
                      <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>Leaking Diverter Valve / Water Drips</span>
                    </div>
                  </div>
                </div>

                {/* Honest advice callout */}
                <div className="p-4 bg-teal-50 rounded-2xl border border-teal-200 space-y-1">
                  <span className="text-xs font-black text-teal-900 block">
                    Not Sure If It’s Worth Repairing?
                  </span>
                  <p className="text-xs text-teal-800 leading-relaxed">
                    If your boiler is older, out of warranty, or facing repeated breakdowns, we give you transparent, honest advice. 
                    Sometimes investing in a new A-rated boiler with a 12-year guarantee saves more on monthly bills than sinking money into recurring repairs.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-6 py-3 rounded-xl bg-[#009FA0] hover:bg-[#008283] text-white font-bold text-sm shadow-sm transition flex items-center gap-2 cursor-pointer"
                  >
                    <span>Book a Repair Callout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="tel:07792710887"
                    className="px-5 py-3 rounded-xl bg-white hover:bg-stone-50 text-slate-800 font-bold text-sm border border-stone-300 transition flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-rose-600" />
                    <span>Emergency Mobile: 07792 710887</span>
                  </a>
                </div>

              </div>

              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="relative w-full max-w-sm">
                  <img 
                    src="/images/worcester-boiler-repairs-in-leeds.png" 
                    alt="Worcester boiler repairs in Leeds illustration"
                    className="w-full h-auto object-contain drop-shadow"
                  />
                  <div className="mt-4 p-4 bg-white rounded-2xl border border-stone-200 text-center shadow-xs">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Fast Local Callout</span>
                    <span className="text-xl font-black text-slate-900">Moortown • Alwoodley • Roundhay</span>
                    <p className="text-[11px] text-teal-700 font-semibold mt-1">Genuine Worcester Bosch &amp; manufacturer parts</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 3: POWERFLUSHING & RADIATORS */}
        {activeTab === 'powerflush' && (
          <div className="bg-[#FAF8F3] rounded-3xl p-6 sm:p-10 border border-stone-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-black">
                  <span>Kamco MagnaCleanse Chemical Flushing</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  Restore Sluggish Radiators &amp; Protect Boiler Longevity
                </h3>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Over time, untreated heating systems accumulate corrosive black iron oxide sludge (magnetite). 
                  This settles at the bottom of radiators causing cold spots, noisy pumps, and high gas bills. 
                  Our high-velocity powerflushing purges your entire system and restores optimal heat output.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="bg-white p-3 rounded-xl border border-stone-200">
                    <span className="font-bold text-xs text-slate-900 flex items-center gap-1.5 mb-1">
                      <Droplets className="w-4 h-4 text-blue-500" />
                      15% Lower Heating Bills
                    </span>
                    <p className="text-[11px] text-slate-500">
                      Clean radiator water conducts heat faster, so rooms warm up quicker and boilers use less gas.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-stone-200">
                    <span className="font-bold text-xs text-slate-900 flex items-center gap-1.5 mb-1">
                      <ShieldCheck className="w-4 h-4 text-teal-600" />
                      Protect New Boiler Warranties
                    </span>
                    <p className="text-[11px] text-slate-500">
                      Worcester Bosch requires clean system water to validate their full 12-year guarantee.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-stone-200">
                    <span className="font-bold text-xs text-slate-900 flex items-center gap-1.5 mb-1">
                      <Zap className="w-4 h-4 text-amber-500" />
                      Eliminates Cold Spots &amp; Noise
                    </span>
                    <p className="text-[11px] text-slate-500">
                      Removes sludge pockets and kettling noises from pipes and radiators instantly.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-stone-200">
                    <span className="font-bold text-xs text-slate-900 flex items-center gap-1.5 mb-1">
                      <Cpu className="w-4 h-4 text-purple-600" />
                      MagnaClean Filter Installation
                    </span>
                    <p className="text-[11px] text-slate-500">
                      Includes continuous magnetic protection to trap future debris before it reaches the boiler.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-6 py-3 rounded-xl bg-[#009FA0] hover:bg-[#008283] text-white font-bold text-sm shadow-sm transition flex items-center gap-2 cursor-pointer"
                  >
                    <span>Get a Powerflush Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onNavigate('quote')}
                    className="px-5 py-3 rounded-xl bg-white hover:bg-stone-50 text-slate-800 font-bold text-sm border border-stone-300 transition flex items-center gap-2 cursor-pointer"
                  >
                    <Calculator className="w-4 h-4 text-amber-500" />
                    <span>Boiler &amp; Flush Package</span>
                  </button>
                </div>

              </div>

              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="relative w-full max-w-sm">
                  <img 
                    src="/images/boiler-services-for-worcester-bosch-boilers.png" 
                    alt="Boiler services for Worcester Bosch boilers illustration"
                    className="w-full h-auto object-contain drop-shadow"
                  />
                  <div className="mt-4 p-4 bg-white rounded-2xl border border-stone-200 text-center shadow-xs">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Full System Chemical Flush</span>
                    <span className="text-xl font-black text-slate-900">Kamco &amp; Fernox Inhibitors</span>
                    <p className="text-[11px] text-teal-700 font-semibold mt-1">Includes pH &amp; turbidity water testing</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 4: LANDLORD GAS SAFETY CP12 */}
        {activeTab === 'landlord' && (
          <div className="bg-[#FAF8F3] rounded-3xl p-6 sm:p-10 border border-stone-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-black">
                  <span>Legal Compliance for Leeds Landlords</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  Landlord Gas Safety Certificates (CP12)
                </h3>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  As a landlord in Leeds or West Yorkshire, you have a legal duty under the Gas Safety (Installation and Use) Regulations 1998 to have an annual gas safety inspection carried out by a Gas Safe registered engineer.
                </p>

                <div className="space-y-2 pt-1 text-xs text-slate-700">
                  <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-[#009FA0] shrink-0" />
                    <span>Inspection of all gas appliances: boiler, gas hob, cooker and gas fires</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-[#009FA0] shrink-0" />
                    <span>Gas meter tightness test to detect any underground or concealed gas leaks</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-[#009FA0] shrink-0" />
                    <span>Flue flow and spillage tests to ensure poisonous fumes vent safely outside</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-[#009FA0] shrink-0" />
                    <span>Digital CP12 certificate issued same-day directly to landlord &amp; letting agent</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-6 py-3 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-sm shadow-sm transition flex items-center gap-2 cursor-pointer"
                  >
                    <span>Book Landlord Inspection</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="tel:01132688570"
                    className="px-5 py-3 rounded-xl bg-white hover:bg-stone-50 text-slate-800 font-bold text-sm border border-stone-300 transition flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#009FA0]" />
                    <span>0113 268 8570</span>
                  </a>
                </div>

              </div>

              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="relative w-full max-w-sm">
                  <img 
                    src="/images/qualified-heating-engineer-leeds-for-boiler-services.png" 
                    alt="Qualified heating engineer Leeds illustration"
                    className="w-full h-auto object-contain drop-shadow"
                  />
                  <div className="mt-4 p-4 bg-white rounded-2xl border border-stone-200 text-center shadow-xs">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <img
                        src="/images/gas-safe-registered-engineers-heatwise.png"
                        alt="Gas safe badge"
                        className="h-8 w-auto object-contain"
                      />
                      <span className="text-xs font-bold text-slate-800">Gas Safe #938210</span>
                    </div>
                    <span className="text-2xl font-black text-slate-900">From £65 <span className="text-xs font-normal text-slate-500">CP12</span></span>
                    <p className="text-[11px] text-teal-700 font-semibold mt-0.5">Discount for multi-property landlords</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
