import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ShieldCheck, ChevronLeft, ChevronRight, CheckCircle2, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const ReviewsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalReviews = TESTIMONIALS.length;

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalReviews);
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused, totalReviews]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  };

  const activeReview = TESTIMONIALS[currentIndex];

  return (
    <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Trust Badges */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Verified Customer Feedback</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Trusted by 1,000+ Homeowners Across Leeds
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-xl">
              Independent reviews verified on Google, Checkatrade, and TrustIndex. We pride ourselves on punctuality, pristine pipework, and honest advice.
            </p>
          </div>

          {/* Rating Summary Pill */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200/80 flex items-center gap-4 shrink-0">
            <div className="text-center border-r border-slate-200 pr-4">
              <span className="text-3xl font-black text-slate-900">4.9</span>
              <span className="text-slate-400 text-xs block">out of 5.0</span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-600 font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                <span>150+ Verified Reviews</span>
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/90 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Subtle Quote Background watermark */}
          <div className="absolute right-6 bottom-4 text-slate-100 pointer-events-none -rotate-6">
            <Quote className="w-40 h-40 opacity-40" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Active Review Quote with Smooth Fade & Slide */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeReview.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-2 text-amber-400">
                    {[...Array(activeReview.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-slate-500 ml-2">
                      Verified Google &amp; TrustIndex Review
                    </span>
                  </div>

                  <p className="text-lg sm:text-2xl text-slate-800 font-medium italic leading-relaxed">
                    "{activeReview.comment}"
                  </p>

                  <div className="pt-2 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-teal-600 text-white font-black flex items-center justify-center text-sm shadow-md">
                      {activeReview.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-base leading-tight">
                        {activeReview.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">
                        {activeReview.location} • {activeReview.service} • {activeReview.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Quick Cards Stack / Navigation Side */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full border-t lg:border-t-0 lg:border-l border-slate-200 lg:pl-8 pt-6 lg:pt-0">
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  More Recent Feedback
                </span>
                {TESTIMONIALS.filter((_, idx) => idx !== currentIndex).slice(0, 2).map((other) => (
                  <button
                    key={other.id}
                    onClick={() => setCurrentIndex(TESTIMONIALS.findIndex((t) => t.id === other.id))}
                    className="w-full text-left p-3 rounded-xl bg-slate-50 hover:bg-teal-50/60 border border-slate-200 transition text-xs cursor-pointer group"
                  >
                    <div className="flex items-center justify-between font-bold text-slate-800 mb-1">
                      <span className="group-hover:text-teal-700 transition">{other.name}</span>
                      <span className="text-slate-400 font-normal text-[11px]">{other.location}</span>
                    </div>
                    <p className="text-slate-600 line-clamp-2 italic">
                      "{other.comment}"
                    </p>
                  </button>
                ))}
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between pt-6 mt-4 border-t border-slate-100">
                <span className="text-xs font-semibold text-slate-500">
                  {currentIndex + 1} of {totalReviews}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous review"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next review"
                    className="p-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white transition shadow-sm cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
