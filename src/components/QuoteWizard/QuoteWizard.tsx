import React, { useState, useMemo } from 'react';
import { 
  Home, 
  Bath, 
  Flame, 
  MapPin, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Award, 
  Zap, 
  Info,
  Calendar,
  Phone,
  Printer,
  Download,
  Check,
  Plus,
  Minus
} from 'lucide-react';
import { QuotePropertyDetails, BoilerPackage } from '../../types';
import { BOILER_PACKAGES, QUOTE_ADDONS, COMPANY_DETAILS } from '../../data/mockData';

interface QuoteWizardProps {
  onQuoteComplete?: (summary: any) => void;
  onNavigateHome?: () => void;
}

export const QuoteWizard: React.FC<QuoteWizardProps> = ({ onQuoteComplete, onNavigateHome }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps = 7;

  // Form State
  const [details, setDetails] = useState<QuotePropertyDetails>({
    propertyType: 'semi-detached',
    bedrooms: 3,
    bathrooms: 1,
    showers: 1,
    currentBoilerType: 'combi',
    currentFuel: 'mains-gas',
    boilerLocation: 'same',
    flueLocation: 'horizontal',
    selectedPackageId: 'worcester-4000-30',
    financeOption: 'cash',
    depositAmount: 0,
    selectedAddons: ['magna-powerflush'],
    customerDetails: {
      fullName: '',
      email: '',
      phone: '',
      postcode: '',
      addressLine1: '',
      urgency: 'within-week',
      notes: ''
    }
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [quoteReference, setQuoteReference] = useState('HW-2026-8492');

  // Relocation price delta
  const relocationCost = useMemo(() => {
    return details.boilerLocation === 'same' ? 0 : 350;
  }, [details.boilerLocation]);

  // Selected package
  const selectedPackage = useMemo(() => {
    return BOILER_PACKAGES.find(p => p.id === details.selectedPackageId) || BOILER_PACKAGES[1];
  }, [details.selectedPackageId]);

  // Selected addons total
  const addonsTotal = useMemo(() => {
    return details.selectedAddons.reduce((sum, addonId) => {
      const addon = QUOTE_ADDONS.find(a => a.id === addonId);
      return sum + (addon ? addon.price : 0);
    }, 0);
  }, [details.selectedAddons]);

  // Total cash price
  const totalCashPrice = useMemo(() => {
    return selectedPackage.cashPrice + relocationCost + addonsTotal;
  }, [selectedPackage, relocationCost, addonsTotal]);

  // Finance calculation
  const financeDetails = useMemo(() => {
    const loanAmount = Math.max(0, totalCashPrice - details.depositAmount);
    
    // 0% for 24 months
    const zeroPercentMonthly = loanAmount / 24;

    // 7.9% APR for 60 months (5 years)
    const apr60 = 0.079;
    const monthlyRate60 = apr60 / 12;
    const monthlyPayment60 = (loanAmount * monthlyRate60 * Math.pow(1 + monthlyRate60, 60)) / (Math.pow(1 + monthlyRate60, 60) - 1);
    const totalPayable60 = monthlyPayment60 * 60 + details.depositAmount;

    // 7.9% APR for 120 months (10 years)
    const apr120 = 0.079;
    const monthlyRate120 = apr120 / 12;
    const monthlyPayment120 = (loanAmount * monthlyRate120 * Math.pow(1 + monthlyRate120, 120)) / (Math.pow(1 + monthlyRate120, 120) - 1);
    const totalPayable120 = monthlyPayment120 * 120 + details.depositAmount;

    return {
      loanAmount,
      zeroPercentMonthly: Math.round(zeroPercentMonthly * 100) / 100,
      monthlyPayment60: Math.round(monthlyPayment60 * 100) / 100,
      totalPayable60: Math.round(totalPayable60),
      monthlyPayment120: Math.round(monthlyPayment120 * 100) / 100,
      totalPayable120: Math.round(totalPayable120)
    };
  }, [totalCashPrice, details.depositAmount]);

  const toggleAddon = (addonId: string) => {
    setDetails(prev => ({
      ...prev,
      selectedAddons: prev.selectedAddons.includes(addonId)
        ? prev.selectedAddons.filter(id => id !== addonId)
        : [...prev.selectedAddons, addonId]
    }));
  };

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = `HW-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setQuoteReference(randomRef);
    setBookingConfirmed(true);
    if (onQuoteComplete) {
      onQuoteComplete({ reference: randomRef, details, totalCashPrice });
    }
  };

  const stepTitles = [
    'Property Type',
    'Rooms & Water Demand',
    'Current Boiler',
    'Boiler Position',
    'Choose Package',
    'Accessories & Upgrades',
    'Summary & Booking'
  ];

  return (
    <div className="w-full bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Wizard Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Flame className="w-3.5 h-3.5 text-teal-700" />
            <span>Leeds Online Boiler Quote Calculator</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Get Your Fixed-Price Boiler Quote
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-2">
            Answer a few quick questions about your home to see tailored Worcester Bosch, Ideal, and Baxi packages with up to 12 years guarantee.
          </p>
        </div>

        {/* Progress Stepper Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200 mb-8">
          <div className="flex items-center justify-between mb-3 text-xs sm:text-sm font-semibold text-slate-600">
            <span className="text-teal-800 font-bold">
              Step {currentStep} of {totalSteps}: {stepTitles[currentStep - 1]}
            </span>
            <span className="text-slate-400">
              {Math.round((currentStep / totalSteps) * 100)}% Completed
            </span>
          </div>

          {/* Progress track */}
          <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-teal-600 to-teal-500 transition-all duration-300 rounded-full"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>

          {/* Stepper Dots (Desktop) */}
          <div className="hidden md:flex justify-between items-center mt-4">
            {stepTitles.map((title, idx) => {
              const stepNum = idx + 1;
              const isCompleted = stepNum < currentStep;
              const isCurrent = stepNum === currentStep;
              return (
                <button
                  key={title}
                  onClick={() => stepNum <= currentStep && setCurrentStep(stepNum)}
                  disabled={stepNum > currentStep}
                  className={`flex flex-col items-center text-center group cursor-pointer transition ${
                    stepNum > currentStep ? 'opacity-40 cursor-not-allowed' : ''
                  }`}
                >
                  <div 
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mb-1 transition ${
                      isCompleted 
                        ? 'bg-teal-700 text-white' 
                        : isCurrent 
                          ? 'bg-teal-700 text-white ring-4 ring-teal-100 font-black' 
                          : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {isCompleted ? '✓' : stepNum}
                  </div>
                  <span className={`text-[11px] font-medium max-w-[90px] leading-tight ${
                    isCurrent ? 'text-teal-900 font-bold' : 'text-slate-500'
                  }`}>
                    {title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Wizard Step Body */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
          {/* STEP 1: PROPERTY TYPE */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-slate-900">What type of property is this for?</h2>
                <p className="text-sm text-slate-500">This helps us calculate heat loss and radiator distribution requirements.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { id: 'detached', title: 'Detached House', desc: 'Stand-alone building with higher external wall exposure' },
                  { id: 'semi-detached', title: 'Semi-Detached', desc: 'Shared wall on one side (most common in Leeds)' },
                  { id: 'terraced', title: 'Terraced House', desc: 'Mid or end-terrace property with shared party walls' },
                  { id: 'flat', title: 'Flat / Apartment', desc: 'Single-storey apartment or maisonette with lower heat loss' },
                  { id: 'bungalow', title: 'Bungalow', desc: 'Single-storey ground property, often with long pipework runs' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setDetails(prev => ({ ...prev, propertyType: item.id as any }))}
                    className={`p-5 text-left rounded-xl border-2 transition relative flex flex-col justify-between ${
                      details.propertyType === item.id
                        ? 'border-teal-700 bg-teal-50/50 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Home className={`w-6 h-6 ${details.propertyType === item.id ? 'text-teal-700' : 'text-slate-400'}`} />
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        details.propertyType === item.id
                          ? 'border-teal-700 bg-teal-700 text-white'
                          : 'border-slate-300'
                      }`}>
                        {details.propertyType === item.id && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">{item.title}</h3>
                      <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: BEDROOMS & BATHROOMS */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-slate-900">Rooms & Hot Water Demand</h2>
                <p className="text-sm text-slate-500">
                  Boiler output (kW) and domestic hot water flow rates (litres/min) depend on your simultaneous hot water usage.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Bedrooms Counter */}
                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="font-bold text-slate-900 text-sm">Bedrooms</label>
                    <span className="text-xs text-slate-500">Determines radiator count</span>
                  </div>
                  <div className="flex items-center justify-between bg-white rounded-xl border border-slate-200 p-2">
                    <button
                      type="button"
                      onClick={() => setDetails(prev => ({ ...prev, bedrooms: Math.max(1, prev.bedrooms - 1) }))}
                      className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold transition"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-2xl font-black text-slate-900">{details.bedrooms}</span>
                    <button
                      type="button"
                      onClick={() => setDetails(prev => ({ ...prev, bedrooms: Math.min(6, prev.bedrooms + 1) }))}
                      className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold transition"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-500 text-center">
                    {details.bedrooms <= 2 ? 'Typical: 6-9 radiators' : details.bedrooms <= 4 ? 'Typical: 10-15 radiators' : 'Typical: 16+ radiators'}
                  </p>
                </div>

                {/* Bathrooms Counter */}
                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="font-bold text-slate-900 text-sm">Bathrooms</label>
                    <span className="text-xs text-slate-500">Baths with taps</span>
                  </div>
                  <div className="flex items-center justify-between bg-white rounded-xl border border-slate-200 p-2">
                    <button
                      type="button"
                      onClick={() => setDetails(prev => ({ ...prev, bathrooms: Math.max(1, prev.bathrooms - 1) }))}
                      className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold transition"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-2xl font-black text-slate-900">{details.bathrooms}</span>
                    <button
                      type="button"
                      onClick={() => setDetails(prev => ({ ...prev, bathrooms: Math.min(4, prev.bathrooms + 1) }))}
                      className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold transition"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-500 text-center">
                    {details.bathrooms === 1 ? 'Standard Combi 30kW fits perfectly' : 'Higher kW or Worcester 8000 recommended'}
                  </p>
                </div>

                {/* Showers Counter */}
                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="font-bold text-slate-900 text-sm">Showers</label>
                    <span className="text-xs text-slate-500">En-suites / cubicles</span>
                  </div>
                  <div className="flex items-center justify-between bg-white rounded-xl border border-slate-200 p-2">
                    <button
                      type="button"
                      onClick={() => setDetails(prev => ({ ...prev, showers: Math.max(0, prev.showers - 1) }))}
                      className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold transition"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-2xl font-black text-slate-900">{details.showers}</span>
                    <button
                      type="button"
                      onClick={() => setDetails(prev => ({ ...prev, showers: Math.min(4, prev.showers + 1) }))}
                      className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold transition"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-500 text-center">
                    {details.showers >= 2 ? 'High flow rate required for multi-showers' : 'Single shower flow priority'}
                  </p>
                </div>
              </div>

              {/* Requirement Summary Callout */}
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 flex items-start gap-3">
                <Info className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div className="text-xs text-teal-950 space-y-1">
                  <p className="font-bold text-sm">
                    Estimated Heat Output Recommended: {details.bedrooms >= 4 || details.bathrooms >= 2 ? '32kW - 35kW (High Capacity)' : '28kW - 30kW (Optimal Efficiency)'}
                  </p>
                  <p className="text-teal-800">
                    Based on your home profile ({details.bedrooms} bedrooms, {details.bathrooms} bathrooms), an A-rated condensing combi or system boiler with at least 12.3 L/min hot water delivery will provide rapid heating and high shower pressure.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: CURRENT BOILER & FUEL TYPE */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-slate-900">What boiler do you currently have?</h2>
                <p className="text-sm text-slate-500">This determines whether pipework conversions or tank removals are needed.</p>
              </div>

              {/* Fuel Type */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  1. Current Fuel Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'mains-gas', name: 'Mains Natural Gas', note: 'Standard in Leeds' },
                    { id: 'lpg', name: 'LPG (Bottled/Tank)', note: 'Rural properties' },
                    { id: 'oil', name: 'Heating Oil', note: 'External tank' },
                    { id: 'electric', name: 'Electric Only', note: 'No gas line' }
                  ].map((fuel) => (
                    <button
                      key={fuel.id}
                      type="button"
                      onClick={() => setDetails(prev => ({ ...prev, currentFuel: fuel.id as any }))}
                      className={`p-3.5 text-left rounded-xl border transition ${
                        details.currentFuel === fuel.id
                          ? 'border-teal-700 bg-teal-50 text-teal-950 font-bold'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <p className="text-sm font-bold">{fuel.name}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">{fuel.note}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Current Boiler Type */}
              <div className="pt-4 border-t border-slate-100">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  2. Existing Boiler Setup
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    {
                      id: 'combi',
                      name: 'Combination (Combi) Boiler',
                      desc: 'Heats water on demand. No cylinder in airing cupboard, no cold tanks in loft.',
                      badge: 'Straightforward Swap'
                    },
                    {
                      id: 'system',
                      name: 'System Boiler',
                      desc: 'Boiler works with an unvented hot water cylinder. No water tanks in the loft.',
                      badge: 'High Pressure'
                    },
                    {
                      id: 'regular',
                      name: 'Regular / Conventional Boiler',
                      desc: 'Has hot water cylinder in cupboard AND cold water storage tanks in attic.',
                      badge: 'Conversion Option'
                    }
                  ].map((bType) => (
                    <button
                      key={bType.id}
                      type="button"
                      onClick={() => setDetails(prev => ({ ...prev, currentBoilerType: bType.id as any }))}
                      className={`p-4 text-left rounded-xl border-2 transition relative flex flex-col justify-between ${
                        details.currentBoilerType === bType.id
                          ? 'border-teal-700 bg-teal-50/60 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                            {bType.badge}
                          </span>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            details.currentBoilerType === bType.id
                              ? 'border-teal-700 bg-teal-700 text-white'
                              : 'border-slate-300'
                          }`}>
                            {details.currentBoilerType === bType.id && <Check className="w-3 h-3" />}
                          </div>
                        </div>
                        <h3 className="font-bold text-slate-900 text-sm mb-1">{bType.name}</h3>
                        <p className="text-xs text-slate-500">{bType.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: BOILER LOCATION & FLUE */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-slate-900">Where should your new boiler be fitted?</h2>
                <p className="text-sm text-slate-500">
                  Keeping your boiler in the same position is most cost-effective, but we can also relocate it to free up living space.
                </p>
              </div>

              {/* Position */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setDetails(prev => ({ ...prev, boilerLocation: 'same' }))}
                  className={`p-4 text-left rounded-xl border-2 transition ${
                    details.boilerLocation === 'same'
                      ? 'border-teal-700 bg-teal-50/60'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-900 text-sm">Same Location (Recommended)</span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      Included (No Extra Cost)
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Replace the boiler on the existing wall position using existing gas and water pipe runs.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setDetails(prev => ({ ...prev, boilerLocation: 'kitchen' }))}
                  className={`p-4 text-left rounded-xl border-2 transition ${
                    details.boilerLocation !== 'same'
                      ? 'border-teal-700 bg-teal-50/60'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-900 text-sm">Move to New Position</span>
                    <span className="text-xs font-bold text-teal-700 bg-teal-100 px-2 py-0.5 rounded">
                      +£350 Pipe Extension
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Move to a kitchen cupboard, utility room, airing cupboard, or loft space.
                  </p>
                </button>
              </div>

              {/* Specific room if moving */}
              {details.boilerLocation !== 'same' && (
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Select Target Room:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'kitchen', label: 'Kitchen Cupboard' },
                      { id: 'airing-cupboard', label: 'Airing Cupboard' },
                      { id: 'utility', label: 'Utility Room' },
                      { id: 'garage', label: 'Garage / Loft' }
                    ].map(room => (
                      <button
                        key={room.id}
                        type="button"
                        onClick={() => setDetails(prev => ({ ...prev, boilerLocation: room.id as any }))}
                        className={`py-2 px-3 text-xs rounded-lg font-medium border ${
                          details.boilerLocation === room.id
                            ? 'bg-teal-700 text-white border-teal-700'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        {room.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Flue Type */}
              <div className="pt-4 border-t border-slate-100">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Flue Outlet (Exhaust Pipe Direction)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setDetails(prev => ({ ...prev, flueLocation: 'horizontal' }))}
                    className={`p-3.5 text-left rounded-xl border transition ${
                      details.flueLocation === 'horizontal'
                        ? 'border-teal-700 bg-teal-50 font-bold text-teal-950'
                        : 'border-slate-200 text-slate-700'
                    }`}
                  >
                    <p className="text-sm font-bold">Horizontal (Through External Wall)</p>
                    <p className="text-xs text-slate-500">Most common. Flue terminates straight out the wall.</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDetails(prev => ({ ...prev, flueLocation: 'vertical' }))}
                    className={`p-3.5 text-left rounded-xl border transition ${
                      details.flueLocation === 'vertical'
                        ? 'border-teal-700 bg-teal-50 font-bold text-teal-950'
                        : 'border-slate-200 text-slate-700'
                    }`}
                  >
                    <p className="text-sm font-bold">Vertical (Through the Roof)</p>
                    <p className="text-xs text-slate-500">Requires pitched or flat roof flashing kit.</p>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: PACKAGE SELECTION & FINANCE CALCULATOR */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Recommended Boiler Packages</h2>
                  <p className="text-sm text-slate-500">
                    Sized for your {details.bedrooms}-bed home with up to 12 years guarantee.
                  </p>
                </div>

                {/* Cash vs Finance Toggle */}
                <div className="bg-slate-100 p-1 rounded-xl flex items-center shrink-0 border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setDetails(prev => ({ ...prev, financeOption: 'cash' }))}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                      details.financeOption === 'cash'
                        ? 'bg-teal-700 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Pay Cash / Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setDetails(prev => ({ ...prev, financeOption: '0-percent-24' }))}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                      details.financeOption === '0-percent-24'
                        ? 'bg-teal-700 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>0% Interest Free</span>
                    <span className="text-[10px] bg-amber-400 text-slate-950 px-1 py-0.2 rounded font-black">24m</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDetails(prev => ({ ...prev, financeOption: '7.9-percent-120' }))}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                      details.financeOption === '7.9-percent-120'
                        ? 'bg-teal-700 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Low Monthly (7.9% APR)
                  </button>
                </div>
              </div>

              {/* Deposit Slider for Finance Mode */}
              {details.financeOption !== 'cash' && (
                <div className="p-4 bg-teal-50/70 border border-teal-200 rounded-xl space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-teal-950">Optional Upfront Deposit:</span>
                    <span className="text-sm font-black text-teal-800">
                      £{details.depositAmount} {details.depositAmount === 0 && '(£0 Deposit Available)'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="50"
                    value={details.depositAmount}
                    onChange={(e) => setDetails(prev => ({ ...prev, depositAmount: Number(e.target.value) }))}
                    className="w-full accent-teal-700 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-teal-700">
                    <span>£0 (No deposit needed)</span>
                    <span>£500</span>
                    <span>£1,000 max deposit</span>
                  </div>
                </div>
              )}

              {/* Package Cards Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {BOILER_PACKAGES.slice(0, 3).map((pkg) => {
                  const isSelected = details.selectedPackageId === pkg.id;
                  const itemPrice = pkg.cashPrice + relocationCost;
                  const loanAmt = Math.max(0, itemPrice - details.depositAmount);
                  const pkgZeroPerMo = Math.round(loanAmt / 24);
                  const aprMonthly10Yr = Math.round(((loanAmt * (0.079 / 12) * Math.pow(1 + (0.079 / 12), 120)) / (Math.pow(1 + (0.079 / 12), 120) - 1)) * 100) / 100;

                  return (
                    <div
                      key={pkg.id}
                      className={`rounded-2xl border-2 transition-all duration-200 flex flex-col justify-between overflow-hidden relative ${
                        isSelected
                          ? 'border-teal-700 ring-2 ring-teal-500/30 bg-white shadow-xl -translate-y-1'
                          : 'border-slate-200 hover:border-slate-300 bg-white shadow-sm'
                      }`}
                    >
                      {/* Top Badge */}
                      {pkg.badge && (
                        <div className="bg-gradient-to-r from-teal-800 to-teal-700 text-white text-[11px] font-bold py-1.5 px-4 text-center uppercase tracking-wider flex items-center justify-center gap-1">
                          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                          <span>{pkg.badge}</span>
                        </div>
                      )}

                      <div className="p-6 space-y-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                              {pkg.tier}
                            </span>
                            <h3 className="text-lg font-black text-slate-900 leading-tight">
                              {pkg.brand} {pkg.model}
                            </h3>
                          </div>
                          <div className="px-2.5 py-1 rounded-lg bg-teal-50 border border-teal-200 text-teal-800 font-bold text-xs text-center shrink-0">
                            {pkg.warrantyYears} Years<br />
                            <span className="text-[10px] font-normal text-teal-600">Guarantee</span>
                          </div>
                        </div>

                        {/* Specs row */}
                        <div className="grid grid-cols-2 gap-2 py-2 border-y border-slate-100 text-xs">
                          <div>
                            <span className="text-slate-400 block">Heat Output:</span>
                            <span className="font-bold text-slate-800">{pkg.outputKw} kW</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block">Hot Water Flow:</span>
                            <span className="font-bold text-slate-800">{pkg.flowRateLpm} L/min</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block">Efficiency:</span>
                            <span className="font-bold text-emerald-600">{pkg.efficiencyRating}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block">Dimensions:</span>
                            <span className="font-semibold text-slate-600 text-[11px]">{pkg.dimensions.split('x')[0]} H</span>
                          </div>
                        </div>

                        {/* Features bullet list */}
                        <ul className="space-y-1.5 text-xs text-slate-600">
                          {pkg.features.slice(0, 3).map((feat, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Inclusions summary */}
                        <div className="bg-slate-50 rounded-xl p-3 text-[11px] text-slate-500 space-y-1">
                          <p className="font-bold text-slate-700">What's Included in this Price:</p>
                          <p>✓ Full Gas Safe registered install & chemical flush</p>
                          <p>✓ Adey magnetic system filter & wireless room stat</p>
                          <p>✓ Safe removal & eco disposal of old boiler</p>
                        </div>
                      </div>

                      {/* Pricing Footer */}
                      <div className="p-6 bg-slate-50/80 border-t border-slate-100 mt-auto">
                        <div className="mb-4">
                          {details.financeOption === 'cash' ? (
                            <div>
                              <div className="flex items-baseline gap-1">
                                <span className="text-xs text-slate-400 font-medium">Fixed Cash Price:</span>
                              </div>
                              <div className="text-2xl sm:text-3xl font-black text-slate-900">
                                £{itemPrice.toLocaleString()}
                              </div>
                              <span className="text-[11px] text-slate-500">Fully installed including VAT</span>
                            </div>
                          ) : details.financeOption === '0-percent-24' ? (
                            <div>
                              <div className="flex items-baseline gap-1">
                                <span className="text-xs text-slate-500 font-medium">0% Interest Free:</span>
                              </div>
                              <div className="text-2xl sm:text-3xl font-black text-teal-700">
                                £{pkgZeroPerMo}<span className="text-sm font-semibold text-slate-600">/mo</span>
                              </div>
                              <span className="text-[11px] text-slate-500">24 months (£{itemPrice} total)</span>
                            </div>
                          ) : (
                            <div>
                              <div className="flex items-baseline gap-1">
                                <span className="text-xs text-slate-500 font-medium">From only:</span>
                              </div>
                              <div className="text-2xl sm:text-3xl font-black text-teal-700">
                                £{aprMonthly10Yr}<span className="text-sm font-semibold text-slate-600">/mo</span>
                              </div>
                              <span className="text-[11px] text-slate-500">120 months @ 7.9% APR</span>
                            </div>
                          )}
                        </div>

                        <button
                          type="button"
                          onClick={() => setDetails(prev => ({ ...prev, selectedPackageId: pkg.id }))}
                          className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition flex items-center justify-center gap-2 ${
                            isSelected
                              ? 'bg-teal-700 text-white shadow-md'
                              : 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-300'
                          }`}
                        >
                          {isSelected ? (
                            <>
                              <Check className="w-4 h-4" />
                              <span>Package Selected</span>
                            </>
                          ) : (
                            <span>Select This Package</span>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 6: ACCESSORIES & UPGRADES */}
          {currentStep === 6 && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-slate-900">Optional Accessories & Upgrades</h2>
                <p className="text-sm text-slate-500">
                  Select recommended smart thermostats and system protection upgrades. These will be installed alongside your new boiler.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {QUOTE_ADDONS.map((addon) => {
                  const isChecked = details.selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-5 rounded-xl border-2 transition cursor-pointer flex flex-col justify-between ${
                        isChecked
                          ? 'border-teal-700 bg-teal-50/50 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            {addon.category}
                          </span>
                          <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition ${
                            isChecked
                              ? 'bg-teal-700 border-teal-700 text-white'
                              : 'border-slate-300 bg-white'
                          }`}>
                            {isChecked && <Check className="w-3.5 h-3.5" />}
                          </div>
                        </div>
                        <h3 className="font-bold text-slate-900 text-sm mb-1">{addon.name}</h3>
                        <p className="text-xs text-slate-500 line-clamp-2">{addon.description}</p>
                      </div>

                      <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-base font-black text-slate-900">+£{addon.price}</span>
                        <span className={`text-xs font-semibold ${isChecked ? 'text-teal-700' : 'text-slate-400'}`}>
                          {isChecked ? 'Added to Quote' : '+ Click to Add'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Running total footer bar */}
              <div className="bg-slate-900 text-white rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-400">Selected Boiler + Add-ons:</span>
                  <div className="text-xl font-bold">
                    {selectedPackage.brand} {selectedPackage.model} ({details.selectedAddons.length} upgrades added)
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400">Current Total:</span>
                  <div className="text-2xl font-black text-amber-300">
                    £{totalCashPrice.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 7: SUMMARY & BOOKING ENQUIRY */}
          {currentStep === 7 && (
            <div className="space-y-8">
              {bookingConfirmed ? (
                <div className="text-center py-8 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold font-mono">
                    Quote Reference: #{quoteReference}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                    Your Fixed-Price Quote is Locked In!
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto">
                    Thank you <strong className="text-slate-900">{details.customerDetails.fullName}</strong>. 
                    We have sent a copy of this quote to <strong className="text-slate-900">{details.customerDetails.email}</strong>. 
                    A Heatwise Gas Safe surveyor will review your installation requirements and contact you on <strong className="text-slate-900">{details.customerDetails.phone}</strong> to confirm your preferred installation date.
                  </p>

                  <div className="max-w-md mx-auto bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs space-y-2 text-slate-700">
                    <p className="font-bold text-slate-900 text-sm">Next Steps:</p>
                    <p>1. <strong>Survey Verification:</strong> We double check your pipe size and water pressure (video or in-person).</p>
                    <p>2. <strong>Guaranteed Date:</strong> We confirm your agreed installation slot.</p>
                    <p>3. <strong>Zero Deposit Option:</strong> No upfront payment required until installation is complete.</p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                    <button
                      onClick={() => window.print()}
                      className="px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-xl font-semibold text-xs flex items-center gap-2"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Print Quote Summary</span>
                    </button>
                    {onNavigateHome && (
                      <button
                        onClick={onNavigateHome}
                        className="px-6 py-2.5 bg-teal-700 hover:bg-teal-800 text-white rounded-xl font-bold text-xs shadow-md"
                      >
                        Return to Homepage
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Column: Itemized Quote Summary Breakdown */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="border-b border-slate-200 pb-3">
                      <h2 className="text-xl font-bold text-slate-900">Quote Itemized Breakdown</h2>
                      <p className="text-xs text-slate-500">Full transparent pricing with no hidden charges.</p>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
                      {/* Boiler package */}
                      <div className="flex items-start justify-between pb-3 border-b border-slate-200">
                        <div>
                          <p className="font-bold text-slate-900 text-sm">
                            {selectedPackage.brand} {selectedPackage.model}
                          </p>
                          <p className="text-xs text-slate-500">
                            {selectedPackage.outputKw}kW • {selectedPackage.flowRateLpm} L/min • {selectedPackage.warrantyYears} Years Guarantee
                          </p>
                          <span className="inline-block text-[10px] text-teal-700 font-bold bg-teal-100 px-1.5 py-0.5 rounded mt-1">
                            A-Rated Condensing
                          </span>
                        </div>
                        <span className="font-black text-slate-900 text-sm">
                          £{selectedPackage.cashPrice.toLocaleString()}
                        </span>
                      </div>

                      {/* Relocation fee if applicable */}
                      {relocationCost > 0 && (
                        <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                          <div>
                            <p className="font-bold text-slate-800">Boiler Relocation Pipework</p>
                            <p className="text-slate-500">Relocating to {details.boilerLocation}</p>
                          </div>
                          <span className="font-bold text-slate-800">+£{relocationCost}</span>
                        </div>
                      )}

                      {/* Add-ons list */}
                      {details.selectedAddons.length > 0 && (
                        <div className="space-y-2 pb-3 border-b border-slate-200">
                          <p className="text-xs font-bold text-slate-700 uppercase">Selected Upgrades:</p>
                          {details.selectedAddons.map(addonId => {
                            const addon = QUOTE_ADDONS.find(a => a.id === addonId);
                            if (!addon) return null;
                            return (
                              <div key={addon.id} className="flex items-center justify-between text-xs">
                                <span className="text-slate-600">{addon.name}</span>
                                <span className="font-semibold text-slate-800">+£{addon.price}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* Standard inclusions */}
                      <div className="space-y-1.5 text-[11px] text-slate-500 pb-2">
                        <p className="font-bold text-slate-700">Included as Standard:</p>
                        <p>✓ Complete Gas Safe installation & system commission</p>
                        <p>✓ Adey magnetic system filter protection</p>
                        <p>✓ Chemical system flush & corrosion inhibitor</p>
                        <p>✓ Building regulations compliance certificate</p>
                        <p>✓ Eco-removal and scrap disposal of old boiler</p>
                      </div>

                      {/* Total Bar */}
                      <div className="pt-3 border-t-2 border-slate-300">
                        <div className="flex items-baseline justify-between">
                          <span className="text-sm font-bold text-slate-900">Total Fixed Cash Price:</span>
                          <span className="text-2xl font-black text-teal-800">
                            £{totalCashPrice.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 text-right">All parts, labour & VAT included</p>

                        {/* Finance breakdown preview */}
                        <div className="mt-3 p-3 bg-teal-900 text-white rounded-xl text-xs space-y-1">
                          <p className="font-bold text-amber-300 flex items-center justify-between">
                            <span>0% Finance Option:</span>
                            <span>£{financeDetails.zeroPercentMonthly}/mo for 24 months</span>
                          </p>
                          <p className="text-slate-300 flex items-center justify-between">
                            <span>Or 10-Yr Low Rate (7.9% APR):</span>
                            <span>£{financeDetails.monthlyPayment120}/mo</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Customer Details & Booking Request Form */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="border-b border-slate-200 pb-3">
                      <h2 className="text-xl font-bold text-slate-900">Your Installation Details</h2>
                      <p className="text-xs text-slate-500">Lock in this fixed price with zero obligation.</p>
                    </div>

                    <form onSubmit={handleFinalSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Full Name *
                          </label>
                          <input
                            id="quote-fullname-input"
                            type="text"
                            required
                            placeholder="e.g. John Wilson"
                            value={details.customerDetails.fullName}
                            onChange={(e) => setDetails(prev => ({
                              ...prev,
                              customerDetails: { ...prev.customerDetails, fullName: e.target.value }
                            }))}
                            className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Phone Number *
                          </label>
                          <input
                            id="quote-phone-input"
                            type="tel"
                            required
                            placeholder="e.g. 07700 900123"
                            value={details.customerDetails.phone}
                            onChange={(e) => setDetails(prev => ({
                              ...prev,
                              customerDetails: { ...prev.customerDetails, phone: e.target.value }
                            }))}
                            className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Email Address *
                          </label>
                          <input
                            id="quote-email-input"
                            type="email"
                            required
                            placeholder="e.g. john@example.co.uk"
                            value={details.customerDetails.email}
                            onChange={(e) => setDetails(prev => ({
                              ...prev,
                              customerDetails: { ...prev.customerDetails, email: e.target.value }
                            }))}
                            className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Leeds Postcode *
                          </label>
                          <input
                            id="quote-postcode-input"
                            type="text"
                            required
                            placeholder="e.g. LS17 5AY"
                            value={details.customerDetails.postcode}
                            onChange={(e) => setDetails(prev => ({
                              ...prev,
                              customerDetails: { ...prev.customerDetails, postcode: e.target.value }
                            }))}
                            className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          First Line of Address
                        </label>
                        <input
                          id="quote-address-input"
                          type="text"
                          placeholder="e.g. 14 High Street"
                          value={details.customerDetails.addressLine1}
                          onChange={(e) => setDetails(prev => ({
                            ...prev,
                            customerDetails: { ...prev.customerDetails, addressLine1: e.target.value }
                          }))}
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          When do you need installation?
                        </label>
                        <select
                          id="quote-urgency-select"
                          value={details.customerDetails.urgency}
                          onChange={(e) => setDetails(prev => ({
                            ...prev,
                            customerDetails: { ...prev.customerDetails, urgency: e.target.value as any }
                          }))}
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white"
                        >
                          <option value="immediate">Urgent (Boiler broken down / ASAP)</option>
                          <option value="within-week">Within next 1–2 weeks</option>
                          <option value="within-month">Within the next month</option>
                          <option value="planning">Just budgeting / Planning ahead</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Any Notes or Existing Boiler Model (Optional)
                        </label>
                        <textarea
                          id="quote-notes-input"
                          rows={2}
                          placeholder="e.g. Boiler is currently in the kitchen cupboard..."
                          value={details.customerDetails.notes}
                          onChange={(e) => setDetails(prev => ({
                            ...prev,
                            customerDetails: { ...prev.customerDetails, notes: e.target.value }
                          }))}
                          className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                        />
                      </div>

                      <button
                        id="quote-submit-btn"
                        type="submit"
                        className="w-full py-4 px-6 bg-teal-700 hover:bg-teal-800 text-white rounded-xl font-black text-base shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2"
                      >
                        <ShieldCheck className="w-5 h-5 text-amber-300" />
                        <span>Lock In Fixed Quote & Request Survey</span>
                      </button>

                      <p className="text-[11px] text-center text-slate-500">
                        🔒 100% Free & No Obligation. We do not sell your data.
                      </p>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Stepper Navigation Buttons (Prev / Next) */}
          {!bookingConfirmed && (
            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-sm flex items-center gap-2 transition"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
              ) : (
                <div />
              )}

              {currentStep < totalSteps && (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-7 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-md hover:shadow-lg flex items-center gap-2 transition"
                >
                  <span>
                    {currentStep === 5 ? 'Continue to Accessories' : currentStep === 6 ? 'View Final Quote' : 'Next Step'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
