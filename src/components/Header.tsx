import React, { useState } from 'react';
import { 
  Phone, 
  Flame, 
  Clock, 
  MapPin, 
  ChevronDown, 
  Menu, 
  X, 
  ShieldCheck, 
  Calculator, 
  Sparkles,
  Award,
  CalendarCheck,
  PhoneCall
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_DETAILS, SERVICES_LIST } from '../data/mockData';

interface HeaderProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  onSelectServiceDetail?: (serviceId: string) => void;
  onRequestCallback: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  setCurrentPage,
  onSelectServiceDetail,
  onRequestCallback
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [brandsDropdownOpen, setBrandsDropdownOpen] = useState(false);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setBrandsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToService = (serviceId: string) => {
    if (onSelectServiceDetail) {
      onSelectServiceDetail(serviceId);
    }
    setCurrentPage('service-detail');
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-md border-b border-slate-200">
      {/* Top Notification & Contact Bar */}
      <div className="bg-[#1f2937] text-slate-100 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-700/60">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2">
          {/* Left info: Phone */}
          <div className="flex items-center gap-3">
            <a 
              id="topbar-landline-link"
              href="tel:01132688570" 
              className="flex items-center gap-1.5 text-white hover:text-teal-300 font-semibold transition"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>Call us: <strong className="font-bold text-white">0113 268 8570</strong></span>
            </a>

            <span className="hidden sm:inline text-slate-500">|</span>

            <div className="hidden sm:flex items-center gap-1.5 text-slate-300 text-xs">
              <span className="font-medium text-amber-300">Worcester Bosch</span>
              <span className="text-slate-400 text-[11px]">Accredited Installer</span>
            </div>
          </div>

          {/* Right info: Reviews */}
          <div className="flex items-center gap-4 text-xs ml-auto">
            <div className="flex items-center gap-1 text-amber-400 font-bold">
              <span>★★★★★</span>
              <span className="text-white text-xs font-semibold ml-1">5 Star Customer Reviews</span>
            </div>

            <button
              id="topbar-callback-btn"
              onClick={onRequestCallback}
              className="hidden md:flex px-2.5 py-1 rounded bg-teal-700 hover:bg-teal-600 text-white text-[11px] font-medium transition items-center gap-1"
            >
              <PhoneCall className="w-3 h-3 text-teal-200" />
              <span>Request Callback</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            id="brand-logo-container"
            onClick={() => navigateTo('home')}
            className="flex items-center gap-3 cursor-pointer group select-none py-2"
          >
            <img 
              src="/images/heatwise-moortown-leeds-heating-engineers.png" 
              alt="Heatwise Heating - Moortown, Leeds" 
              className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              onError={(e) => {
                // Fallback in case image fails
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>

          {/* Desktop Navigation Links - Streamlined to core main items */}
          <nav className="hidden xl:flex items-center gap-1.5 2xl:gap-3 text-sm font-semibold text-slate-700">
            <button
              id="nav-home-btn"
              onClick={() => navigateTo('home')}
              className={`px-3 py-2 rounded-lg transition cursor-pointer ${
                currentPage === 'home'
                  ? 'text-teal-700 bg-teal-50 font-bold'
                  : 'hover:text-teal-700 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            {/* New Boiler */}
            <button
              id="nav-new-boiler-btn"
              onClick={() => navigateToService('boiler-install')}
              className={`px-3 py-2 rounded-lg transition cursor-pointer ${
                currentPage === 'services' || currentPage === 'service-detail'
                  ? 'text-teal-700 hover:bg-slate-50 font-semibold'
                  : 'hover:text-teal-700 hover:bg-slate-50'
              }`}
            >
              New Boiler
            </button>

            {/* Boiler Service */}
            <button
              id="nav-boiler-service-btn"
              onClick={() => navigateToService('boiler-service')}
              className="px-3 py-2 rounded-lg transition hover:text-teal-700 hover:bg-slate-50 cursor-pointer"
            >
              Boiler Service
            </button>

            {/* Boiler Repairs */}
            <button
              id="nav-boiler-repair-btn"
              onClick={() => navigateToService('boiler-repair')}
              className="px-3 py-2 rounded-lg transition hover:text-teal-700 hover:bg-slate-50 cursor-pointer"
            >
              Boiler Repairs
            </button>

            {/* Heating Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                id="nav-services-dropdown-btn"
                onClick={() => navigateTo('services')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition cursor-pointer ${
                  currentPage === 'services'
                    ? 'text-teal-700 bg-teal-50 font-bold'
                    : 'hover:text-teal-700 hover:bg-slate-50'
                }`}
              >
                <span>Heating Services</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-200 py-2.5 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 mb-1">
                    Central Heating Solutions
                  </div>
                  {SERVICES_LIST.map((srv) => (
                    <button
                      key={srv.id}
                      onClick={() => navigateToService(srv.id)}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-teal-50/80 group flex items-start justify-between transition cursor-pointer"
                    >
                      <div>
                        <div className="text-sm font-semibold text-slate-800 group-hover:text-teal-800">
                          {srv.title}
                        </div>
                        <div className="text-xs text-slate-500 line-clamp-1">
                          {srv.shortDesc}
                        </div>
                      </div>
                      {srv.priceFrom && (
                        <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-1.5 py-0.5 rounded shrink-0 ml-2">
                          {srv.priceFrom}
                        </span>
                      )}
                    </button>
                  ))}
                  <div className="pt-2 mt-1 border-t border-slate-100 flex items-center justify-between px-3">
                    <button
                      onClick={() => navigateTo('services')}
                      className="text-xs font-bold text-teal-700 hover:text-teal-900 py-1 cursor-pointer"
                    >
                      All Services →
                    </button>
                    <button
                      onClick={() => navigateTo('brands')}
                      className="text-xs font-bold text-slate-600 hover:text-slate-900 py-1 cursor-pointer"
                    >
                      Worcester Bosch Specs
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Areas We Cover */}
            <button
              id="nav-locations-btn"
              onClick={() => navigateTo('locations')}
              className={`px-3 py-2 rounded-lg transition cursor-pointer ${
                currentPage === 'locations'
                  ? 'text-teal-700 bg-teal-50 font-bold'
                  : 'hover:text-teal-700 hover:bg-slate-50'
              }`}
            >
              Areas We Cover
            </button>

            {/* Contact */}
            <button
              id="nav-contact-btn"
              onClick={() => navigateTo('contact')}
              className={`px-3 py-2 rounded-lg transition cursor-pointer ${
                currentPage === 'contact'
                  ? 'text-teal-700 bg-teal-50 font-bold'
                  : 'hover:text-teal-700 hover:bg-slate-50'
              }`}
            >
              Contact Us
            </button>
          </nav>

          {/* Right Action: Instant Quote CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-instant-quote-btn"
              onClick={() => navigateTo('quote')}
              className="px-6 py-2.5 rounded-lg bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-sm tracking-wide shadow-sm hover:shadow-md transition-all duration-150 flex items-center gap-2 cursor-pointer"
            >
              <span>Boiler Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              id="mobile-quote-cta-btn"
              onClick={() => navigateTo('quote')}
              className="sm:hidden px-3.5 py-2 bg-[#22c55e] text-white font-bold text-xs rounded-lg flex items-center gap-1.5 shadow-sm"
            >
              <Calculator className="w-3.5 h-3.5 text-white" />
              <span>Boiler Quote</span>
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 py-6 space-y-4 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200 shadow-xl">
          <div className="p-3 bg-teal-50 border border-teal-200 rounded-xl flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-teal-900">Need Immediate Advice or Repair?</p>
              <p className="text-xs text-teal-700">Call our Leeds team on 0113 268 8570</p>
            </div>
            <a
              href={`tel:${COMPANY_DETAILS.phoneLandline.replace(/\s+/g, '')}`}
              className="px-3 py-1.5 bg-teal-700 text-white rounded-lg font-bold text-xs flex items-center gap-1 shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>
          </div>

          <div className="space-y-1.5 text-base font-semibold text-slate-800">
            <button
              onClick={() => navigateTo('home')}
              className={`w-full text-left px-4 py-2.5 rounded-xl ${
                currentPage === 'home' ? 'bg-teal-50 text-teal-800 font-bold' : 'hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => navigateToService('boiler-install')}
              className="w-full text-left px-4 py-2.5 rounded-xl hover:bg-slate-50 text-slate-800"
            >
              New Boiler
            </button>

            <button
              onClick={() => navigateToService('boiler-service')}
              className="w-full text-left px-4 py-2.5 rounded-xl hover:bg-slate-50 text-slate-800"
            >
              Boiler Service
            </button>

            <button
              onClick={() => navigateToService('boiler-repair')}
              className="w-full text-left px-4 py-2.5 rounded-xl hover:bg-slate-50 text-slate-800"
            >
              Boiler Repairs
            </button>

            <button
              onClick={() => navigateTo('services')}
              className={`w-full text-left px-4 py-2.5 rounded-xl ${
                currentPage === 'services' ? 'bg-teal-50 text-teal-800 font-bold' : 'hover:bg-slate-50'
              }`}
            >
              All Heating Services
            </button>

            <button
              onClick={() => navigateTo('locations')}
              className={`w-full text-left px-4 py-2.5 rounded-xl ${
                currentPage === 'locations' ? 'bg-teal-50 text-teal-800 font-bold' : 'hover:bg-slate-50'
              }`}
            >
              Areas We Cover
            </button>

            <button
              onClick={() => navigateTo('contact')}
              className={`w-full text-left px-4 py-2.5 rounded-xl ${
                currentPage === 'contact' ? 'bg-teal-50 text-teal-800 font-bold' : 'hover:bg-slate-50'
              }`}
            >
              Contact Us
            </button>

            <div className="pt-2">
              <button
                onClick={() => navigateTo('quote')}
                className="w-full py-3 bg-[#22c55e] hover:bg-[#16a34a] text-white rounded-xl font-bold text-center flex items-center justify-center gap-2 shadow-sm"
              >
                <Calculator className="w-4 h-4 text-white" />
                <span>Get Instant Boiler Quote</span>
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestCallback();
              }}
              className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-teal-400" />
              <span>Request a Free Engineer Callback</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
