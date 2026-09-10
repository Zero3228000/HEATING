import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Flame, 
  ShieldCheck, 
  Award, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Calculator, 
  Star, 
  MapPin, 
  HelpCircle, 
  FileText, 
  Zap, 
  Wrench, 
  Droplets, 
  Sparkles, 
  Cpu, 
  Leaf, 
  ChevronRight,
  PhoneCall
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_DETAILS, SERVICES_LIST, TESTIMONIALS, FAQS_DATA, LEEDS_AREAS, BOILER_BRANDS } from '../data/mockData';
import { TrustBar } from '../components/TrustBar';
import { HeroSlider } from '../components/HeroSlider';
import { ColorfulServicesGrid } from '../components/ColorfulServicesGrid';
import { WhoAreWeSection } from '../components/WhoAreWeSection';
import { LeedsLandmarkMapSection } from '../components/LeedsLandmarkMapSection';
import { BrandsMarquee } from '../components/BrandsMarquee';
import { AnimatedStats } from '../components/AnimatedStats';
import { ReviewsCarousel } from '../components/ReviewsCarousel';
import { BoilerShowcase } from '../components/BoilerShowcase';
import { HeatingServicesDetailSection } from '../components/HeatingServicesDetailSection';
import { ReplaceOldBoilerLogosSection } from '../components/ReplaceOldBoilerLogosSection';

interface HomePageProps {
  setCurrentPage: (page: PageId) => void;
  onSelectServiceDetail: (serviceId: string) => void;
  onRequestCallback: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setCurrentPage,
  onSelectServiceDetail,
  onRequestCallback
}) => {
  // Mini finance teaser state
  const [teaserPrice, setTeaserPrice] = useState(2495);
  const [teaserDeposit, setTeaserDeposit] = useState(0);
  const teaserLoan = Math.max(0, teaserPrice - teaserDeposit);
  const teaser0Percent = Math.round(teaserLoan / 24);
  const teaser10Year = Math.round(((teaserLoan * (0.079 / 12) * Math.pow(1 + 0.079 / 12, 120)) / (Math.pow(1 + 0.079 / 12, 120) - 1)) * 100) / 100;

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

  return (
    <div className="w-full bg-white">
      {/* MULTI-SLIDE ANIMATED SMART SLIDER HERO */}
      <HeroSlider 
        onNavigate={navigateTo} 
        onRequestCallback={onRequestCallback} 
      />

      {/* 4 COLORFUL SERVICE CARDS DIRECTLY MATCHING SCREENSHOT 2 */}
      <ColorfulServicesGrid 
        onNavigate={navigateTo}
        onSelectServiceDetail={onSelectServiceDetail}
      />

      {/* LOOKING TO REPLACE YOUR OLD BOILER & 7 BRAND/TRUST LOGOS - DIRECTLY FROM REFERENCE */}
      <ReplaceOldBoilerLogosSection onNavigate={navigateTo} />

      {/* BOILER SHOWCASE - POPULAR WORCESTER BOSCH BOILERS & GUARANTEES */}
      <BoilerShowcase onNavigate={navigateTo} />

      {/* IN-DEPTH HEATING SERVICES - SERVICING, REPAIRS, POWERFLUSHING & CP12 */}
      <HeatingServicesDetailSection 
        onNavigate={navigateTo}
        onSelectServiceDetail={onSelectServiceDetail}
      />

      {/* WHO ARE WE? JULIAN GAS SAFE DIRECTOR SECTION DIRECTLY MATCHING SCREENSHOT 3 */}
      <WhoAreWeSection onNavigate={navigateTo} />

      {/* LEEDS LOCAL LANDMARK MAP SECTION DIRECTLY MATCHING SCREENSHOT 4 */}
      <LeedsLandmarkMapSection onNavigate={navigateTo} />

      {/* Trust Badges Strip */}
      <TrustBar />

      {/* CONTINUOUS BRANDS & ACCREDITATION MARQUEE */}
      <BrandsMarquee onNavigate={navigateTo} />

      {/* ANIMATED EXPERIENCE & STATS TICKER */}
      <AnimatedStats />

      {/* WHY CHOOSE HEATWISE HEATING */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-14 space-y-3"
          >
            <span className="text-teal-800 font-bold text-xs uppercase tracking-wider bg-teal-100 px-3 py-1 rounded-full">
              Why Leeds Homeowners Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              A Family Heating Company Built on Trust &amp; Craftsmanship
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              With over 15 years in West Yorkshire, we combine genuine friendly customer care with accredited engineering excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-6 h-6 text-teal-700" />,
                title: 'Worcester Bosch Diamond Accredited',
                desc: 'Because of our advanced training and track record, we can provide exclusive extended 10 and 12-year guarantees on Worcester Bosch boilers.'
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-teal-700" />,
                title: 'Strictly Gas Safe Registered',
                desc: 'All work is completed by our own vetted, registered Gas Safe engineers. Never subcontracted. Building control certification included.'
              },
              {
                icon: <CheckCircle2 className="w-6 h-6 text-teal-700" />,
                title: 'Guaranteed Fixed Price Quotes',
                desc: 'The price we quote is the exact price you pay. All fittings, copper pipe, filters, powerflush, and VAT are fully included.'
              },
              {
                icon: <Zap className="w-6 h-6 text-teal-700" />,
                title: '0% Interest Free Credit & £0 Deposit',
                desc: 'Spread your boiler installation cost over 12 or 24 months with 0% interest, or up to 10 years at low 7.9% APR via TradeHelp.'
              },
              {
                icon: <Clock className="w-6 h-6 text-teal-700" />,
                title: 'Rapid 24-Hour Replacement',
                desc: 'Broken down in the middle of winter? We offer rapid priority emergency replacement so your home is never left without heating.'
              },
              {
                icon: <Sparkles className="w-6 h-6 text-teal-700" />,
                title: 'Clean & Respectful in Your Home',
                desc: 'We lay heavy-duty floor protection, wear shoe covers, and clean up after ourselves, leaving your home spotless.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-teal-500/50 transition-all space-y-3 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE SERVICES GRID */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-teal-800 font-bold text-xs uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full">
                Full Heating Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Our Heating & Gas Services
              </h2>
              <p className="text-slate-600 text-sm max-w-xl">
                From brand-new boiler installations and annual servicing to deep powerflushing and smart control upgrades.
              </p>
            </div>

            <button
              onClick={() => navigateTo('services')}
              className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-900 font-bold text-sm group shrink-0"
            >
              <span>Explore all services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_LIST.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: idx * 0.05, duration: 0.35 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => {
                  onSelectServiceDetail(service.id);
                  navigateTo('service-detail');
                }}
                className="group bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-teal-600 shadow-sm hover:shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-teal-50 border border-slate-200 group-hover:border-teal-200 flex items-center justify-center transition">
                      {getServiceIcon(service.icon)}
                    </div>
                    {service.badge && (
                      <span className="text-[10px] font-bold text-teal-800 bg-teal-100 px-2 py-0.5 rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-teal-800 transition">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/70 flex items-center justify-between text-xs">
                  {service.priceFrom ? (
                    <span className="font-bold text-slate-900">
                      From <strong className="text-teal-800">{service.priceFrom}</strong>
                    </span>
                  ) : (
                    <span className="font-medium text-slate-500">Free Assessment</span>
                  )}
                  <span className="text-teal-700 font-bold group-hover:translate-x-1 transition flex items-center gap-1">
                    Details →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BOILER BRANDS STRIP */}
      <section className="py-16 bg-[#FAF8F3] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-10 space-y-2"
          >
            <span className="text-[#009FA0] text-xs font-bold uppercase tracking-wider">
              Approved &amp; Accredited Installer
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              We Only Install A-Rated UK Market Leaders
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BOILER_BRANDS.map((brand, idx) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                onClick={() => navigateTo('brands')}
                className="bg-white hover:bg-stone-50 rounded-2xl p-6 border border-stone-200 hover:border-teal-400 transition-all cursor-pointer space-y-4 shadow-2xs hover:shadow-md group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#009FA0] transition">{brand.name}</h3>
                  <span className="text-xs font-bold text-[#f78320] bg-amber-50 border border-amber-200/80 px-2.5 py-0.5 rounded-full">
                    Up to {brand.guaranteeYears}-Yr Warranty
                  </span>
                </div>

                <p className="text-xs text-[#009FA0] font-semibold">{brand.tagline}</p>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">{brand.description}</p>

                <div className="pt-3 border-t border-stone-200/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">{brand.accreditationLevel}</span>
                  <span className="text-[#009FA0] font-bold group-hover:translate-x-1 transition flex items-center gap-1">Compare Models →</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE FINANCE TEASER CALCULATOR */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Info */}
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                  <Zap className="w-3.5 h-3.5 text-amber-700" />
                  <span>Flexible Boiler Financing</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Spread the Cost with 0% Interest-Free Credit
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Don't let an unexpected boiler breakdown drain your emergency savings. Through our partnership with TradeHelp and Novuna Personal Finance, we offer 0% APR for 12 or 24 months, or low monthly repayments spread up to 10 years.
                </p>

                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-700" />
                    <span>£0 upfront deposit available on all options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-700" />
                    <span>Soft credit check with quick decision in minutes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-700" />
                    <span>No penalties for early repayment or overpaying</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <button
                    onClick={() => navigateTo('finance')}
                    className="text-xs font-bold text-teal-700 hover:text-teal-900 underline"
                  >
                    View Full Finance Terms, Eligibility &amp; APR Details →
                  </button>
                </div>
              </div>

              {/* Right: Live Interactive Slider */}
              <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-5">
                <div>
                  <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1">
                    <span>Boiler Package Price:</span>
                    <span className="text-base text-slate-900">£{teaserPrice.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="1800"
                    max="3500"
                    step="50"
                    value={teaserPrice}
                    onChange={(e) => setTeaserPrice(Number(e.target.value))}
                    className="w-full accent-teal-700 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>£1,800</span>
                    <span>£2,500</span>
                    <span>£3,500</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1">
                    <span>Deposit Contribution:</span>
                    <span className="text-base text-slate-900">£{teaserDeposit}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="50"
                    value={teaserDeposit}
                    onChange={(e) => setTeaserDeposit(Number(e.target.value))}
                    className="w-full accent-teal-700 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>£0 Deposit</span>
                    <span>£500</span>
                    <span>£1,000</span>
                  </div>
                </div>

                {/* Calculation Outputs */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 bg-white rounded-xl border border-teal-200 text-center">
                    <span className="text-[10px] uppercase font-bold text-teal-700 block">
                      0% Interest (24 Mos)
                    </span>
                    <span className="text-2xl font-black text-slate-900">
                      £{teaser0Percent}
                    </span>
                    <span className="text-[10px] text-slate-500 block">per month</span>
                  </div>

                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-center">
                    <span className="text-[10px] uppercase font-bold text-slate-600 block">
                      10 Years (7.9% APR)
                    </span>
                    <span className="text-2xl font-black text-teal-800">
                      £{teaser10Year}
                    </span>
                    <span className="text-[10px] text-slate-500 block">per month</span>
                  </div>
                </div>

                <button
                  onClick={() => navigateTo('quote')}
                  className="w-full py-3 bg-teal-700 hover:bg-teal-800 text-white rounded-xl font-bold text-sm shadow-md transition"
                >
                  Configure My Boiler &amp; Finance Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT LEEDS REVIEWS - ANIMATED CAROUSEL */}
      <ReviewsCarousel />

      {/* LEEDS AREAS MAP STRIP */}
      <section className="py-14 bg-[#FAF8F3] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-[#009FA0] text-xs font-bold uppercase">
                <MapPin className="w-4 h-4" />
                <span>Local Leeds Coverage</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Rapid Heating Engineer Coverage Across All Leeds Postcodes
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Our mobile Gas Safe service vans operate daily across Moortown, Alwoodley, Roundhay, Chapel Allerton, Meanwood, Bramhope, Horsforth, and the wider West Yorkshire area.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 max-w-lg">
              {LEEDS_AREAS.slice(0, 8).map((area) => (
                <button
                  key={area.name}
                  onClick={() => navigateTo('locations')}
                  className="px-3 py-2 rounded-xl bg-white border border-stone-200 hover:border-teal-400 text-xs text-slate-700 hover:text-[#009FA0] shadow-2xs transition font-medium cursor-pointer"
                >
                  <span>{area.name}</span>{' '}
                  <span className="text-[#009FA0] font-mono font-bold">({area.postcode})</span>
                </button>
              ))}
              <button
                onClick={() => navigateTo('locations')}
                className="px-4 py-2 rounded-xl bg-[#009FA0] text-white text-xs font-bold hover:bg-[#008283] shadow-2xs transition cursor-pointer"
              >
                View All Areas →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS TEASER */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-2">
            <span className="text-teal-800 font-bold text-xs uppercase tracking-wider">
              Got Questions?
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS_DATA[0].items.slice(0, 3).map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => navigateTo('faqs')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-xl font-bold text-xs transition"
            >
              <span>View All Boiler & Heating FAQs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* FINAL CALLOUT BANNER */}
      <section className="bg-gradient-to-r from-teal-800 to-teal-700 py-12 px-4 text-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-black text-white">
              Need Heating Help or an Urgent Boiler Repair?
            </h3>
            <p className="text-teal-100 text-sm mt-1">
              Speak directly with a Gas Safe engineer today on 0113 268 8570.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${COMPANY_DETAILS.phoneLandline.replace(/\s+/g, '')}`}
              className="px-6 py-3 bg-white hover:bg-slate-100 text-teal-900 rounded-xl font-bold text-sm shadow transition flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-teal-700" />
              <span>Call Now</span>
            </a>
            <button
              onClick={onRequestCallback}
              className="px-5 py-3 bg-teal-900/60 hover:bg-teal-900 text-white rounded-xl font-semibold text-sm border border-teal-500/40 transition"
            >
              Request Callback
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
