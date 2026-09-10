import React from 'react';
import { 
  Flame, 
  ShieldCheck, 
  Wrench, 
  Droplets, 
  Sparkles, 
  Cpu, 
  FileText, 
  Leaf, 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  Calculator, 
  ChevronRight,
  Clock,
  HelpCircle,
  Award
} from 'lucide-react';
import { PageId, ServiceItem } from '../types';
import { SERVICES_LIST, COMPANY_DETAILS } from '../data/mockData';

interface ServicesPageProps {
  selectedServiceId: string | null;
  onSelectServiceDetail: (serviceId: string) => void;
  setCurrentPage: (page: PageId) => void;
  onRequestCallback: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  selectedServiceId,
  onSelectServiceDetail,
  setCurrentPage,
  onRequestCallback
}) => {
  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-6 h-6 text-teal-700" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-teal-700" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-teal-700" />;
      case 'Droplets': return <Droplets className="w-6 h-6 text-teal-700" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-teal-700" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-teal-700" />;
      case 'FileText': return <FileText className="w-6 h-6 text-teal-700" />;
      case 'Leaf': return <Leaf className="w-6 h-6 text-teal-700" />;
      default: return <Flame className="w-6 h-6 text-teal-700" />;
    }
  };

  // If a specific service detail is selected
  const activeService = SERVICES_LIST.find(s => s.id === selectedServiceId) || SERVICES_LIST[0];

  return (
    <div className="w-full bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Page Hero Header with Living Room Sofa Illustration */}
        <div className="bg-[#FAF8F3] rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/70 text-[#009FA0] text-xs font-bold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 text-[#009FA0]" />
                <span>Leeds Gas Safe Heating Services</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                Our Heating Services in <span className="text-[#f78320]">Moortown, Leeds</span>
              </h1>
              <p className="text-slate-700 text-base leading-relaxed">
                From <strong className="font-bold text-slate-900">brand new boiler</strong> installations to{' '}
                <strong className="font-bold text-slate-900">servicing</strong> to{' '}
                <strong className="font-bold text-slate-900">repairs</strong>, Heatwise have{' '}
                <strong className="font-bold text-slate-900">experience</strong> in all{' '}
                <strong className="font-bold text-slate-900">central heating services</strong>.
              </p>
              
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => navigateTo('quote')}
                  className="px-7 py-3 rounded-xl bg-[#f78320] hover:bg-[#ea6f0e] text-white font-bold text-sm shadow transition cursor-pointer"
                >
                  Boiler Quote
                </button>
                <button
                  onClick={onRequestCallback}
                  className="px-6 py-3 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-sm shadow transition cursor-pointer"
                >
                  Request Callback
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col items-center justify-center">
              <img 
                src="/images/heatwise-boiler-installations-in-leeds.png" 
                alt="Heatwise Heating Services - Living Room Sofa, Worcester Boiler, Gas Safe certificates"
                className="w-full max-h-[340px] object-contain drop-shadow-sm"
              />
              <div className="w-full h-2 bg-[#8bb3a8] rounded-full mt-[-6px] opacity-80" />
            </div>
          </div>
        </div>

        {/* Selected Service Detail Feature Hero */}
        {selectedServiceId && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-200 space-y-8 animate-in fade-in duration-200">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center">
                    {getServiceIcon(activeService.icon)}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                      Featured Service
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                      {activeService.title}
                    </h2>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {activeService.priceFrom && (
                  <div className="px-4 py-2 bg-slate-100 rounded-xl text-left">
                    <span className="text-[10px] text-slate-500 font-semibold uppercase block">Pricing</span>
                    <span className="text-lg font-black text-teal-800">{activeService.priceFrom}</span>
                  </div>
                )}
                <button
                  onClick={() => navigateTo('quote')}
                  className="px-5 py-3 bg-teal-700 hover:bg-teal-800 text-white rounded-xl font-bold text-sm shadow-md flex items-center gap-2"
                >
                  <Calculator className="w-4 h-4 text-amber-300" />
                  <span>Get Instant Quote</span>
                </button>
                <button
                  onClick={onRequestCallback}
                  className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-semibold text-sm"
                >
                  Book Engineer
                </button>
              </div>
            </div>

            {/* Service Details Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Description & Features */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Service Overview</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{activeService.fullDesc}</p>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">What's Included:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeService.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200/70">
                        <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Key Homeowner Benefits:</h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {activeService.benefits.map((ben, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Step-by-Step Process */}
              <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
                <h3 className="text-base font-bold text-slate-900">How We Deliver This Service:</h3>
                <div className="space-y-4">
                  {activeService.processSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-teal-700 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{step.title}</h4>
                        <p className="text-xs text-slate-500 mt-0.5">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {activeService.faqs.length > 0 && (
                  <div className="pt-4 border-t border-slate-200 space-y-2">
                    <p className="font-bold text-slate-800 text-xs uppercase tracking-wider">Common Question:</p>
                    <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs space-y-1">
                      <p className="font-bold text-slate-900">{activeService.faqs[0].q}</p>
                      <p className="text-slate-600">{activeService.faqs[0].a}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* All Services Grid */}
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">All Heating & Gas Services</h2>
            <span className="text-xs text-slate-500 font-medium">Click any service to inspect full specifications</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_LIST.map((srv) => (
              <div
                key={srv.id}
                onClick={() => onSelectServiceDetail(srv.id)}
                className={`p-6 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                  selectedServiceId === srv.id
                    ? 'border-teal-700 bg-white ring-2 ring-teal-600/20 shadow-md'
                    : 'border-slate-200 hover:border-teal-600 bg-white shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                      {getServiceIcon(srv.icon)}
                    </div>
                    {srv.badge && (
                      <span className="text-[10px] font-bold text-teal-800 bg-teal-100 px-2 py-0.5 rounded-full">
                        {srv.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-slate-900 text-base mb-1.5">{srv.title}</h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">{srv.shortDesc}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900">
                    {srv.priceFrom ? `From ${srv.priceFrom}` : 'Survey Required'}
                  </span>
                  <span className="text-teal-700 font-bold flex items-center gap-1">
                    <span>Inspect</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action card */}
        <div className="bg-gradient-to-r from-teal-900 to-slate-900 rounded-3xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl font-black text-white">Not Sure Which Service You Need?</h3>
            <p className="text-teal-200 text-xs sm:text-sm max-w-xl">
              Talk through your heating symptoms with a Gas Safe engineer. We provide honest trade advice with no pushy sales tactics.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_DETAILS.phoneLandline.replace(/\s+/g, '')}`}
              className="px-5 py-3 bg-white hover:bg-slate-100 text-slate-900 rounded-xl font-bold text-xs sm:text-sm shadow flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-teal-700" />
              <span>{COMPANY_DETAILS.phoneLandline}</span>
            </a>
            <button
              onClick={onRequestCallback}
              className="px-4 py-3 bg-teal-800 hover:bg-teal-700 text-white rounded-xl font-semibold text-xs sm:text-sm border border-teal-500/40"
            >
              Free Callback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
