import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ShieldCheck, Award, Star, Clock, CheckCircle } from 'lucide-react';

interface StatItem {
  id: string;
  targetNumber: number;
  suffix: string;
  prefix?: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  iconBg: string;
}

const STATS_DATA: StatItem[] = [
  {
    id: 'years',
    targetNumber: 15,
    suffix: '+',
    title: 'Years in Leeds',
    subtitle: 'Heating & boiler specialists',
    icon: <Clock className="w-5 h-5 text-[#009FA0]" />,
    iconBg: 'bg-teal-50 border-teal-200/70'
  },
  {
    id: 'installs',
    targetNumber: 1250,
    suffix: '+',
    title: 'Boilers Installed',
    subtitle: 'Across West Yorkshire homes',
    icon: <Award className="w-5 h-5 text-[#f78320]" />,
    iconBg: 'bg-amber-50 border-amber-200/70'
  },
  {
    id: 'warranty',
    targetNumber: 12,
    suffix: ' Yrs',
    title: 'Max Guarantee',
    subtitle: 'Parts & labour warranty',
    icon: <ShieldCheck className="w-5 h-5 text-[#009FA0]" />,
    iconBg: 'bg-teal-50 border-teal-200/70'
  },
  {
    id: 'rating',
    targetNumber: 100,
    suffix: '%',
    title: 'Fixed Price Promise',
    subtitle: 'No hidden extras ever',
    icon: <CheckCircle className="w-5 h-5 text-emerald-600" />,
    iconBg: 'bg-emerald-50 border-emerald-200/70'
  },
  {
    id: 'reviews',
    targetNumber: 150,
    suffix: '+',
    title: '5-Star Reviews',
    subtitle: 'Rated on Google & TrustIndex',
    icon: <Star className="w-5 h-5 text-amber-500 fill-amber-500" />,
    iconBg: 'bg-amber-50 border-amber-200/70'
  }
];

const CounterDisplay: React.FC<{ target: number; suffix: string; prefix?: string }> = ({
  target,
  suffix,
  prefix = ''
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1600; // ms
    const steps = 50;
    const stepTime = duration / steps;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums font-black">
      {prefix}
      {target > 999 ? count.toLocaleString() : count}
      {suffix}
    </span>
  );
};

export const AnimatedStats: React.FC = () => {
  return (
    <section className="bg-[#FAF8F3] text-slate-900 border-b border-stone-200 py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.08, duration: 0.4, ease: 'easeOut' }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-5 rounded-2xl bg-white border border-stone-200/90 hover:border-teal-300 transition-all flex flex-col justify-between shadow-2xs hover:shadow-sm relative group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-xl border ${stat.iconBg} shadow-2xs`}>
                  {stat.icon}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  Heatwise
                </span>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl text-[#009FA0] mb-1 tracking-tight flex items-baseline font-black">
                  <CounterDisplay target={stat.targetNumber} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <h4 className="text-sm font-bold text-slate-900 leading-snug">
                  {stat.title}
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  {stat.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
