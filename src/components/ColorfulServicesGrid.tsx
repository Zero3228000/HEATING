import React from 'react';
import { motion } from 'motion/react';
import { PageId } from '../types';

interface ColorfulServicesGridProps {
  onNavigate: (page: PageId) => void;
  onSelectServiceDetail?: (serviceId: string) => void;
}

interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  bgColor: string;
  btnTextColor: string;
  btnText: string;
  targetPage: PageId;
  serviceDetailId?: string;
}

const CARDS: ServiceCardData[] = [
  {
    id: 'new-boiler',
    title: 'New Boiler',
    description: 'Save on your heating bills with a brand new energy efficient boiler installed by Gas Safe Registered heating engineers.',
    imageSrc: '/images/new-worcester-bosch-boiler-leeds.png',
    imageAlt: 'New energy efficient boiler with rosette guarantee ribbon',
    bgColor: 'bg-[#1ea83e]', // Vibrant kelly green
    btnTextColor: 'text-[#1ea83e]',
    btnText: 'New installation',
    targetPage: 'services',
    serviceDetailId: 'boiler-install'
  },
  {
    id: 'boiler-service',
    title: 'Boiler Service',
    description: 'An annual boiler service identifies faults and prolongs the life of your boiler. Book a service in today with one of our engineers.',
    imageSrc: '/images/boiler-service-in-leeds.png',
    imageAlt: 'Annual boiler service with heart health badge',
    bgColor: 'bg-[#00a2db]', // Ocean blue
    btnTextColor: 'text-[#00a2db]',
    btnText: 'Book a service',
    targetPage: 'services',
    serviceDetailId: 'boiler-service'
  },
  {
    id: 'boiler-repair',
    title: 'Boiler Repair',
    description: 'Our knowledgeable and friendly heating engineers have experience repairing a variety of boiler makes and models.',
    imageSrc: '/images/boiler-repairs-in-leeds.png',
    imageAlt: 'Boiler repair diagnostics with spanner badge',
    bgColor: 'bg-[#b886cd]', // Lilac lavender
    btnTextColor: 'text-[#9b66b2]',
    btnText: 'Book a repair',
    targetPage: 'services',
    serviceDetailId: 'boiler-repair'
  },
  {
    id: 'boiler-quote',
    title: 'Boiler Quote',
    description: "Whether it's a new boiler or an annual service you're looking for, get in touch with our team to talk about your heating requirements.",
    imageSrc: '/images/boiler-quote-installation-in-leeds.png',
    imageAlt: 'Boiler quote with £ price tag badge',
    bgColor: 'bg-[#e88b48]', // Warm peach orange
    btnTextColor: 'text-[#d77832]',
    btnText: 'Get a quote',
    targetPage: 'quote'
  }
];

export const ColorfulServicesGrid: React.FC<ColorfulServicesGridProps> = ({ 
  onNavigate, 
  onSelectServiceDetail 
}) => {
  const handleClick = (card: ServiceCardData) => {
    if (card.serviceDetailId && onSelectServiceDetail) {
      onSelectServiceDetail(card.serviceDetailId);
      onNavigate('service-detail');
    } else {
      onNavigate(card.targetPage);
    }
  };

  return (
    <section className="py-14 sm:py-18 bg-[#f5f5f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 4 Colorful Cards side by side directly from reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-7">
          {CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`${card.bgColor} rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-between text-center text-white shadow-md hover:shadow-2xl transition-all duration-300 min-h-[460px]`}
            >
              {/* Top Illustration of boiler with badge */}
              <div className="w-full flex items-center justify-center pt-2 pb-4">
                <div className="relative h-44 sm:h-48 w-full flex items-center justify-center">
                  <img
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    className="max-h-full max-w-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex-1 flex flex-col items-center justify-center my-2 space-y-3">
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  {card.title}
                </h3>
                <p className="text-sm text-white/95 leading-relaxed max-w-xs font-normal">
                  {card.description}
                </p>
              </div>

              {/* White Pill Button */}
              <div className="w-full pt-4">
                <button
                  id={`service-card-btn-${card.id}`}
                  onClick={() => handleClick(card)}
                  className={`w-full max-w-[200px] mx-auto py-2.5 px-6 rounded-full bg-white ${card.btnTextColor} font-black text-sm tracking-wide shadow-md hover:shadow-lg hover:bg-stone-50 active:scale-95 transition-all duration-200 cursor-pointer`}
                >
                  {card.btnText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Illustrated Cartoon Tree in bottom right corner (from screenshot) */}
      <div className="absolute -bottom-2 right-4 sm:right-10 pointer-events-none opacity-80 z-0">
        <svg width="60" height="120" viewBox="0 0 60 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Trunk */}
          <path d="M28 60 L28 120 L32 120 L32 60 Z" fill="#6B4226" />
          <path d="M30 75 L40 68" stroke="#6B4226" strokeWidth="2" strokeLinecap="round" />
          <path d="M30 90 L20 82" stroke="#6B4226" strokeWidth="2" strokeLinecap="round" />
          {/* Foliage layers */}
          <ellipse cx="30" cy="40" rx="18" ry="32" fill="#78B13F" />
          <ellipse cx="30" cy="36" rx="14" ry="26" fill="#88C545" />
          <ellipse cx="28" cy="30" rx="9" ry="18" fill="#9CD852" />
        </svg>
      </div>
    </section>
  );
};
