import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Phone, 
  ArrowRight, 
  Calculator, 
  ShieldCheck,
  PhoneCall
} from 'lucide-react';
import { PageId } from '../types';
import { FAQS_DATA, COMPANY_DETAILS } from '../data/mockData';

interface FaqPageProps {
  setCurrentPage: (page: PageId) => void;
  onRequestCallback: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ setCurrentPage, onRequestCallback }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openIndexes, setOpenIndexes] = useState<Record<string, boolean>>({
    '0-0': true,
    '1-0': true
  });
  const [searchQuery, setSearchQuery] = useState('');

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleAccordion = (key: string) => {
    setOpenIndexes(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const categories = ['All', ...FAQS_DATA.map(c => c.category)];

  const allItems = FAQS_DATA.flatMap((cat, catIdx) => 
    cat.items.map((item, itemIdx) => ({
      ...item,
      category: cat.category,
      key: `${catIdx}-${itemIdx}`
    }))
  );

  const filteredItems = allItems.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-teal-700" />
            <span>Heating Answers & Advice</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">
            Everything you need to know about boiler installations, 12-year warranties, 0% finance, servicing, and repairs in Leeds.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search a question (e.g. installation time, 0% finance, error codes)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white rounded-2xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700 shadow-sm"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeCategory === cat
                  ? 'bg-teal-700 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
              <HelpCircle className="w-10 h-10 text-slate-300 mx-auto" />
              <h3 className="font-bold text-slate-800 text-base">No matching questions found</h3>
              <p className="text-xs text-slate-500">Try adjusting your search terms or contact our Leeds engineers directly.</p>
              <button
                onClick={onRequestCallback}
                className="px-4 py-2 bg-teal-700 text-white rounded-xl text-xs font-bold"
              >
                Ask An Engineer
              </button>
            </div>
          ) : (
            filteredItems.map((faq) => {
              const isOpen = !!openIndexes[faq.key];
              return (
                <div
                  key={faq.key}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(faq.key)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/70 transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-teal-50 text-teal-800 flex items-center justify-center font-bold text-xs shrink-0">
                        Q
                      </div>
                      <span className="font-bold text-slate-900 text-sm sm:text-base">
                        {faq.q}
                      </span>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                      <p className="pl-10">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-teal-900 to-slate-900 rounded-3xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white">Have a question not listed here?</h3>
            <p className="text-teal-200 text-xs sm:text-sm">
              Our Leeds heating team is happy to help with free, friendly advice.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => navigateTo('quote')}
              className="px-5 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold text-xs sm:text-sm shadow"
            >
              Get Boiler Quote
            </button>
            <button
              onClick={onRequestCallback}
              className="px-4 py-3 bg-teal-800 hover:bg-teal-700 text-white rounded-xl font-semibold text-xs sm:text-sm border border-teal-600"
            >
              Request Free Callback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
