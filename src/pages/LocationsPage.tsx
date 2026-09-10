import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Search, 
  CheckCircle2, 
  Phone, 
  ArrowRight, 
  Flame, 
  Award,
  Navigation
} from 'lucide-react';
import { PageId } from '../types';
import { LEEDS_AREAS, COMPANY_DETAILS } from '../data/mockData';

interface LocationsPageProps {
  setCurrentPage: (page: PageId) => void;
  onRequestCallback: () => void;
}

export const LocationsPage: React.FC<LocationsPageProps> = ({ setCurrentPage, onRequestCallback }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredAreas = LEEDS_AREAS.filter(area => 
    area.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    area.postcode.toLowerCase().includes(searchQuery.toLowerCase()) ||
    area.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header with Visual Illustrated Map */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/70 text-[#009FA0] text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-[#009FA0]" />
                <span>Leeds & West Yorkshire Coverage</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                Areas We Cover in <span className="text-[#f78320]">Leeds</span>
              </h1>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                As Worcester Bosch Diamond Accredited heating engineers based in Moortown, Leeds, we provide rapid boiler installations, emergency repairs, and servicing across all Leeds suburbs and postcodes.
              </p>
              
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => navigateTo('quote')}
                  className="px-6 py-3 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-sm shadow transition cursor-pointer"
                >
                  Boiler Quote For Your Area
                </button>
                <a
                  href="tel:01132688570"
                  className="px-5 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-slate-800 font-bold text-sm border border-stone-300 transition flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#009FA0]" />
                  <span>0113 268 8570</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 flex items-center justify-center">
              <img 
                src="/images/worcester-bosch-boiler-installers-in-leeds.png" 
                alt="Leeds Landmarks Map - Moortown Golf Club, Tropical World, Roundhay Castle, Roundhay Lake"
                className="w-full max-h-[360px] object-contain"
              />
            </div>
          </div>
        </div>

        {/* Postcode Search & Quick Check */}
        <div className="max-w-xl mx-auto">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search your Leeds area or postcode (e.g. Moortown, LS17, Roundhay)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white rounded-2xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700 shadow-sm"
            />
          </div>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAreas.map((area) => (
            <div
              key={area.name}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-200">
                    {area.postcode}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-teal-600" />
                    <span>{area.responseTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{area.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{area.description}</p>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-100">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Frequent Services in {area.name}:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {area.popularServices.map((srv, idx) => (
                      <span key={idx} className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => navigateTo('quote')}
                    className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1"
                  >
                    <span>Instant Boiler Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={onRequestCallback}
                    className="text-xs text-slate-500 hover:text-slate-800"
                  >
                    Book Visit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coverage Highlights Box */}
        <div className="bg-gradient-to-r from-teal-950 to-slate-950 rounded-3xl p-8 sm:p-10 text-white space-y-6">
          <div className="max-w-2xl space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Based at 3 Carr Manor Road, Leeds (LS17 5AY)
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              Our central North Leeds office location means our engineers can reach most North, East, and West Leeds suburbs in 30 to 45 minutes for urgent heating breakdowns.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="p-4 bg-slate-900/80 rounded-xl border border-teal-800/60">
              <span className="font-bold text-teal-300 block mb-1">North Leeds Hub</span>
              <p className="text-slate-400">Moortown, Alwoodley, Chapel Allerton, Roundhay, Meanwood, Adel, Bramhope</p>
            </div>
            <div className="p-4 bg-slate-900/80 rounded-xl border border-teal-800/60">
              <span className="font-bold text-teal-300 block mb-1">Aireborough & Wharfe</span>
              <p className="text-slate-400">Horsforth, Rawdon, Guiseley, Yeadon, Otley, Ilkley, Wetherby, Boston Spa</p>
            </div>
            <div className="p-4 bg-slate-900/80 rounded-xl border border-teal-800/60">
              <span className="font-bold text-teal-300 block mb-1">City & West Leeds</span>
              <p className="text-slate-400">Leeds City Centre, Headingley, Kirkstall, Pudsey, Farsley, Calverley, Morley</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
