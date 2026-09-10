import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Calculator, 
  Phone, 
  ShieldCheck, 
  Award, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_DETAILS } from '../data/mockData';

interface HeroSliderProps {
  onNavigate: (page: PageId) => void;
  onRequestCallback: () => void;
}

interface SlideData {
  id: number;
  tagline: string;
  title: string;
  titleColor: string;
  subtitle: string;
  subtitleColor: string;
  descriptionHtml: React.ReactNode;
  primaryBtnText: string;
  primaryBtnColor: string;
  primaryAction: 'quote' | 'contact' | 'services' | 'brands' | 'locations';
  secondaryBtnText?: string;
  secondaryAction?: 'quote' | 'contact' | 'services' | 'brands' | 'locations' | 'call' | 'callback';
  imageSrc: string;
  imageAlt: string;
  hasFloorLine?: boolean;
  floatingBadge?: {
    text: string;
    sub: string;
  };
}

const SLIDES: SlideData[] = [
  {
    id: 1,
    tagline: 'Worcester Bosch Diamond Accredited Installers',
    title: 'New Worcester Bosch Boilers',
    titleColor: 'text-[#009FA0]',
    subtitle: '12-Year Guarantee • Leeds & Moortown',
    subtitleColor: 'text-[#f78320]',
    descriptionHtml: (
      <span>
        Looking to <strong className="font-bold text-slate-900">replace your old boiler</strong>? Cut down on your heating bills with an <strong className="font-bold text-slate-900">A-rated Worcester Bosch boiler</strong>, fitted with an industry-leading <strong className="font-bold text-slate-900">12-year manufacturer guarantee</strong> by Gas Safe registered engineers.
      </span>
    ),
    primaryBtnText: 'Boiler Quote',
    primaryBtnColor: 'bg-[#22c55e] hover:bg-[#16a34a]',
    primaryAction: 'quote',
    secondaryBtnText: 'View Boiler Range',
    secondaryAction: 'brands',
    imageSrc: '/images/new-worcester-bosch-boiler-leeds.png',
    imageAlt: 'New Worcester Bosch Boiler Leeds with 12 year guarantee badge',
    hasFloorLine: false,
    floatingBadge: {
      text: '12 Year Guarantee',
      sub: 'Official Worcester Bosch Partner'
    }
  },
  {
    id: 2,
    tagline: 'Moortown, Leeds Heating Specialists',
    title: 'Our Heating Services',
    titleColor: 'text-[#009FA0]',
    subtitle: 'Moortown, Leeds',
    subtitleColor: 'text-[#f78320]',
    descriptionHtml: (
      <span>
        From <strong className="font-bold text-slate-900">brand new boiler</strong> installations to{' '}
        <strong className="font-bold text-slate-900">servicing</strong> to{' '}
        <strong className="font-bold text-slate-900">repairs</strong>, Heatwise have{' '}
        <strong className="font-bold text-slate-900">experience</strong> in all{' '}
        <strong className="font-bold text-slate-900">central heating services</strong>.
      </span>
    ),
    primaryBtnText: 'Boiler Quote',
    primaryBtnColor: 'bg-[#f78320] hover:bg-[#ea6f0e]',
    primaryAction: 'quote',
    secondaryBtnText: 'View All Services',
    secondaryAction: 'services',
    imageSrc: '/images/heatwise-boiler-installations-in-leeds.png',
    imageAlt: 'Heatwise Boiler Installations in Leeds living room illustration',
    hasFloorLine: true,
    floatingBadge: {
      text: 'Quality Beyond Compare',
      sub: 'A-Rated Efficiency & Comfort'
    }
  },
  {
    id: 3,
    tagline: 'North & West Leeds Local Landmarks',
    title: 'Quality Boiler Installers',
    titleColor: 'text-[#009FA0]',
    subtitle: 'Moortown, Leeds',
    subtitleColor: 'text-[#f78320]',
    descriptionHtml: (
      <span>
        As <strong className="font-bold text-slate-900">Worcester Bosch Accredited boiler installers</strong>, we
        can offer quality <strong className="font-bold text-slate-900">installs, repairs</strong> and{' '}
        <strong className="font-bold text-slate-900">servicing</strong> throughout{' '}
        <strong className="font-bold text-slate-900">Leeds</strong>.
      </span>
    ),
    primaryBtnText: 'Boiler Quote',
    primaryBtnColor: 'bg-[#f78320] hover:bg-[#ea6f0e]',
    primaryAction: 'quote',
    secondaryBtnText: 'Areas We Cover',
    secondaryAction: 'locations',
    imageSrc: '/images/heating-engineers-for-homes-in-leeds.png',
    imageAlt: 'Qualified Heating Engineers for homes in Leeds illustration',
    hasFloorLine: true,
    floatingBadge: {
      text: 'Covering All Leeds',
      sub: 'Moortown • Roundhay • Alwoodley'
    }
  },
  {
    id: 4,
    tagline: 'Family Run Heating Business in Leeds',
    title: 'Who Are We?',
    titleColor: 'text-[#f78320]',
    subtitle: 'Boiler installation specialists based in Leeds',
    subtitleColor: 'text-[#009FA0]',
    descriptionHtml: (
      <span>
        <strong className="font-bold text-slate-900">Heatwise</strong> are a family run business offering a full
        range of heating services covering <strong className="font-bold text-slate-900">central heating</strong>,{' '}
        <strong className="font-bold text-slate-900">gas services</strong>,{' '}
        <strong className="font-bold text-slate-900">landlord gas safety certificates</strong> and{' '}
        <strong className="font-bold text-slate-900">powerflushing</strong>.
      </span>
    ),
    primaryBtnText: 'Contact Us',
    primaryBtnColor: 'bg-[#22c55e] hover:bg-[#16a34a]',
    primaryAction: 'contact',
    secondaryBtnText: 'Meet Julian & Team',
    secondaryAction: 'call',
    imageSrc: '/images/experienced-heating-engineer-leeds-for-boiler-services.png',
    imageAlt: 'Julian Gas Safe Registered Director illustration at Heatwise',
    hasFloorLine: false,
    floatingBadge: {
      text: 'Julian - Gas Safe Director',
      sub: 'Registration #938210'
    }
  }
];

export const HeroSlider: React.FC<HeroSliderProps> = ({ onNavigate, onRequestCallback }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [quickProperty, setQuickProperty] = useState('semi');
  const [quickBeds, setQuickBeds] = useState('3');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto slide effect
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
      }, 7000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleAction = (action?: string) => {
    if (!action) return;
    if (action === 'call') {
      window.location.href = `tel:${COMPANY_DETAILS.phoneLandline.replace(/\s+/g, '')}`;
    } else if (action === 'callback') {
      onRequestCallback();
    } else {
      onNavigate(action as PageId);
    }
  };

  const current = SLIDES[currentIndex];

  return (
    <section 
      id="hero-slider-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full bg-[#FAF8F3] overflow-hidden border-b border-stone-200/80"
    >
      {/* Subtle background ambient warm gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 relative z-10">
        <div className="min-h-[460px] lg:min-h-[500px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Heading, Subtitle & Text directly matching Heatwise reference */}
              <div className="lg:col-span-6 space-y-4 sm:space-y-6">
                
                {/* Title */}
                <div>
                  <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black ${current.titleColor} tracking-tight leading-[1.1]`}>
                    {current.title}
                  </h1>

                  {/* Subtitle with underline */}
                  <div className="mt-1 sm:mt-2">
                    <p className={`text-xl sm:text-2xl lg:text-3xl font-semibold ${current.subtitleColor}`}>
                      {current.subtitle}
                    </p>
                    <div className="mt-2.5 h-1 w-20 bg-[#009FA0] rounded-full" />
                  </div>
                </div>

                {/* Body paragraph matching screenshot exactly */}
                <p className="text-base sm:text-lg text-slate-700 max-w-xl leading-relaxed">
                  {current.descriptionHtml}
                </p>

                {/* Trust mini badges */}
                <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-600 font-medium">
                  <div className="flex items-center gap-1.5 bg-white/80 border border-stone-200 px-3 py-1.5 rounded-full shadow-sm">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>Worcester Bosch Diamond Installer</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/80 border border-stone-200 px-3 py-1.5 rounded-full shadow-sm">
                    <ShieldCheck className="w-4 h-4 text-teal-600" />
                    <span>Gas Safe Registered #938210</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <button
                    id={`hero-slide-btn-${current.id}`}
                    onClick={() => handleAction(current.primaryAction)}
                    className={`px-7 py-3.5 sm:py-4 rounded-xl text-white font-black text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer ${current.primaryBtnColor}`}
                  >
                    <span>{current.primaryBtnText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {current.secondaryBtnText && (
                    <button
                      onClick={() => handleAction(current.secondaryAction)}
                      className="px-5 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-stone-50 text-slate-800 font-bold text-sm border border-stone-300 shadow-sm transition flex items-center gap-2 cursor-pointer"
                    >
                      <span>{current.secondaryBtnText}</span>
                    </button>
                  )}

                  <a
                    href="tel:01132688570"
                    className="hidden sm:inline-flex items-center gap-2 text-slate-700 hover:text-teal-700 text-xs font-bold px-3 py-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#009FA0]" />
                    <span>0113 268 8570</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Authentic Heatwise Illustrated Artwork */}
              <div className="lg:col-span-6 flex items-center justify-center relative">
                <div className="relative w-full max-w-lg lg:max-w-none flex flex-col items-center">
                  
                  {/* Floating Guarantee / Feature Pill */}
                  {current.floatingBadge && (
                    <motion.div
                      initial={{ scale: 0.85, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="absolute -top-3 right-4 sm:right-8 z-20 bg-white/95 backdrop-blur-sm border border-amber-300 shadow-md rounded-xl px-3.5 py-2 flex items-center gap-2.5"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <span className="block text-xs font-black text-slate-900 leading-tight">
                          {current.floatingBadge.text}
                        </span>
                        <span className="block text-[11px] font-medium text-slate-500">
                          {current.floatingBadge.sub}
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {/* Main Illustration Image */}
                  <div className="relative z-10 w-full flex items-center justify-center p-2">
                    <img 
                      src={current.imageSrc} 
                      alt={current.imageAlt}
                      className="w-full max-h-[380px] sm:max-h-[440px] lg:max-h-[480px] object-contain drop-shadow-sm transition-transform duration-300 hover:scale-[1.01]"
                      onError={(e) => {
                        console.error('Failed to load hero image:', current.imageSrc);
                      }}
                    />
                  </div>

                  {/* Floor line when applicable (like in living room sofa illustration) */}
                  {current.hasFloorLine && (
                    <div className="w-full h-2.5 bg-[#8bb3a8] rounded-full mt-[-8px] relative z-0 opacity-80" />
                  )}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controls Strip */}
        <div className="mt-8 pt-6 border-t border-stone-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Thumbnails / Indicators */}
          <div className="flex items-center gap-2 sm:gap-3">
            {SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(idx)}
                className={`group flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  currentIndex === idx
                    ? 'bg-[#009FA0] text-white shadow-sm'
                    : 'bg-white/80 hover:bg-white text-slate-600 border border-stone-200'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${currentIndex === idx ? 'bg-amber-300' : 'bg-slate-300 group-hover:bg-slate-400'}`} />
                <span className="hidden sm:inline">{slide.title}</span>
                <span className="sm:hidden">0{idx + 1}</span>
              </button>
            ))}
          </div>

          {/* Chevrons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="w-9 h-9 rounded-full bg-white hover:bg-stone-100 text-slate-700 border border-stone-300 flex items-center justify-center transition shadow-sm cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="w-9 h-9 rounded-full bg-white hover:bg-stone-100 text-slate-700 border border-stone-300 flex items-center justify-center transition shadow-sm cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
