/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CallbackModal } from './components/CallbackModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { BrandsPage } from './pages/BrandsPage';
import { FinancePage } from './pages/FinancePage';
import { LocationsPage } from './pages/LocationsPage';
import { FaqPage } from './pages/FaqPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { QuoteWizard } from './components/QuoteWizard/QuoteWizard';
import { Phone, Calculator, ArrowUp } from 'lucide-react';
import { COMPANY_DETAILS } from './data/mockData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [isCallbackOpen, setIsCallbackOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Monitor scroll for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePageChange = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceDetail = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setCurrentPage('service-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800 antialiased selection:bg-teal-100 selection:text-teal-900 pb-16 md:pb-0">
      {/* Top Header */}
      <Header 
        currentPage={currentPage} 
        setCurrentPage={handlePageChange} 
        onRequestCallback={() => setIsCallbackOpen(true)} 
      />

      {/* Main Multi-Page Route Render */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage 
            setCurrentPage={handlePageChange}
            onSelectServiceDetail={handleSelectServiceDetail}
            onRequestCallback={() => setIsCallbackOpen(true)}
          />
        )}

        {currentPage === 'quote' && (
          <div className="py-8 sm:py-12 bg-slate-50 min-h-[85vh]">
            <QuoteWizard onBackToHome={() => handlePageChange('home')} />
          </div>
        )}

        {(currentPage === 'services' || currentPage === 'service-detail') && (
          <ServicesPage 
            selectedServiceId={selectedServiceId}
            onSelectServiceDetail={(id) => setSelectedServiceId(id)}
            setCurrentPage={handlePageChange}
            onRequestCallback={() => setIsCallbackOpen(true)}
          />
        )}

        {currentPage === 'brands' && (
          <BrandsPage setCurrentPage={handlePageChange} />
        )}

        {currentPage === 'finance' && (
          <FinancePage 
            setCurrentPage={handlePageChange}
            onRequestCallback={() => setIsCallbackOpen(true)}
          />
        )}

        {currentPage === 'locations' && (
          <LocationsPage 
            setCurrentPage={handlePageChange}
            onRequestCallback={() => setIsCallbackOpen(true)}
          />
        )}

        {currentPage === 'faqs' && (
          <FaqPage 
            setCurrentPage={handlePageChange}
            onRequestCallback={() => setIsCallbackOpen(true)}
          />
        )}

        {currentPage === 'blog' && (
          <BlogPage 
            setCurrentPage={handlePageChange}
            onRequestCallback={() => setIsCallbackOpen(true)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage onRequestCallback={() => setIsCallbackOpen(true)} />
        )}
      </main>

      {/* Global Footer */}
      <Footer setCurrentPage={handlePageChange} />

      {/* Request Callback Modal */}
      <CallbackModal 
        isOpen={isCallbackOpen} 
        onClose={() => setIsCallbackOpen(false)} 
      />

      {/* Floating Mobile Bottom Action Bar (visible on mobile only) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-t border-slate-200 px-3 py-2 flex items-center gap-2 shadow-2xl">
        <a
          id="mobile-call-sticky"
          href={`tel:${COMPANY_DETAILS.phoneLandline.replace(/\s+/g, '')}`}
          className="flex-1 py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow"
        >
          <Phone className="w-3.5 h-3.5 text-teal-400" />
          <span>Call 0113 268 8570</span>
        </a>

        <button
          id="mobile-quote-sticky"
          onClick={() => handlePageChange('quote')}
          className="flex-1 py-2.5 px-3 bg-teal-700 hover:bg-teal-800 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow"
        >
          <Calculator className="w-3.5 h-3.5 text-amber-300" />
          <span>Instant Quote</span>
        </button>
      </div>

      {/* Back to Top Floating Button */}
      {showScrollTop && (
        <button
          id="back-to-top-btn"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-20 md:bottom-8 right-6 z-30 p-3 bg-teal-700 hover:bg-teal-800 text-white rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

