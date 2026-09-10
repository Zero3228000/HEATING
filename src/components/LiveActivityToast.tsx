import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Flame, Wrench, X, Calculator, ShieldCheck } from 'lucide-react';

interface ActivityItem {
  id: number;
  text: string;
  subtext: string;
  timeAgo: string;
  icon: React.ReactNode;
  iconBg: string;
}

const ACTIVITIES: ActivityItem[] = [
  {
    id: 1,
    text: 'Worcester Bosch 4000 Installed',
    subtext: 'Completed in Moortown, Leeds (LS17)',
    timeAgo: '14 mins ago',
    icon: <Flame className="w-4 h-4 text-teal-400" />,
    iconBg: 'bg-teal-900/60 border-teal-500/30'
  },
  {
    id: 2,
    text: 'Fixed Price Quote Generated',
    subtext: '4-Bed Detached home in Alwoodley',
    timeAgo: '26 mins ago',
    icon: <Calculator className="w-4 h-4 text-amber-300" />,
    iconBg: 'bg-amber-900/60 border-amber-500/30'
  },
  {
    id: 3,
    text: 'Gas Safe Annual Service Booked',
    subtext: 'Chapel Allerton homeowner',
    timeAgo: '38 mins ago',
    icon: <ShieldCheck className="w-4 h-4 text-cyan-300" />,
    iconBg: 'bg-cyan-900/60 border-cyan-500/30'
  },
  {
    id: 4,
    text: '0% Finance Option Selected',
    subtext: 'Ideal Logic Max 30 in Roundhay',
    timeAgo: '51 mins ago',
    icon: <CheckCircle2 className="w-4 h-4 text-emerald-300" />,
    iconBg: 'bg-emerald-900/60 border-emerald-500/30'
  },
  {
    id: 5,
    text: 'Emergency Breakdown Dispatched',
    subtext: 'Bramhope heating engineer on way',
    timeAgo: '1 hour ago',
    icon: <Wrench className="w-4 h-4 text-amber-400" />,
    iconBg: 'bg-slate-800 border-amber-500/40'
  }
];

export const LiveActivityToast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Initial delay before first toast
    const initialTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    // Cycle toasts every 12 seconds
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % ACTIVITIES.length);
        setIsVisible(true);
      }, 1200);
    }, 11000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [isDismissed]);

  if (isDismissed) return null;

  const currentItem = ACTIVITIES[currentIndex];

  return (
    <div className="fixed bottom-20 md:bottom-6 left-4 z-30 max-w-sm pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="pointer-events-auto bg-slate-900/95 backdrop-blur-md text-white border border-slate-700/80 rounded-2xl p-3 sm:p-3.5 shadow-2xl flex items-center gap-3 relative"
          >
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${currentItem.iconBg}`}>
              {currentItem.icon}
            </div>

            <div className="flex-1 pr-4">
              <div className="flex items-center justify-between">
                <h5 className="font-bold text-xs sm:text-sm text-white leading-tight">
                  {currentItem.text}
                </h5>
                <span className="text-[10px] text-slate-400 font-medium ml-2 shrink-0">
                  {currentItem.timeAgo}
                </span>
              </div>
              <p className="text-[11px] text-teal-300 font-medium leading-tight mt-0.5">
                {currentItem.subtext}
              </p>
            </div>

            <button
              onClick={() => {
                setIsVisible(false);
                setIsDismissed(true);
              }}
              className="absolute top-2 right-2 text-slate-400 hover:text-white p-1 transition"
              aria-label="Close notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
