import React, { useState, useMemo } from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Calculator, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  Clock, 
  Lock,
  Percent,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_DETAILS } from '../data/mockData';

interface FinancePageProps {
  setCurrentPage: (page: PageId) => void;
  onRequestCallback: () => void;
}

export const FinancePage: React.FC<FinancePageProps> = ({ setCurrentPage, onRequestCallback }) => {
  const [boilerCost, setBoilerCost] = useState<number>(2495);
  const [deposit, setDeposit] = useState<number>(0);
  const [termMonths, setTermMonths] = useState<number>(24); // 12, 24 (0%), 36, 60, 120 (7.9%)

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const loanAmount = Math.max(0, boilerCost - deposit);
  const isInterestFree = termMonths === 12 || termMonths === 24;

  const calculations = useMemo(() => {
    if (isInterestFree) {
      const monthly = loanAmount / termMonths;
      return {
        monthly: Math.round(monthly * 100) / 100,
        totalInterest: 0,
        totalPayable: boilerCost,
        apr: '0% APR'
      };
    } else {
      const annualRate = 0.079;
      const monthlyRate = annualRate / 12;
      const monthly = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / (Math.pow(1 + monthlyRate, termMonths) - 1);
      const totalRepayments = monthly * termMonths;
      const totalInterest = totalRepayments - loanAmount;
      return {
        monthly: Math.round(monthly * 100) / 100,
        totalInterest: Math.round(totalInterest),
        totalPayable: Math.round(deposit + totalRepayments),
        apr: '7.9% APR'
      };
    }
  }, [loanAmount, termMonths, isInterestFree, boilerCost, deposit]);

  return (
    <div className="w-full bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-amber-700" />
            <span>Spread The Cost Simply</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Boiler Finance Options in Leeds
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">
            Finance your new Worcester Bosch, Ideal, or Baxi boiler with 0% interest-free credit or low monthly repayments spread up to 10 years. Zero deposit options available.
          </p>
        </div>

        {/* 2 Main Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: 0% Interest Free */}
          <div className="bg-white rounded-3xl p-8 border-2 border-teal-700 shadow-lg relative flex flex-col justify-between">
            <div className="absolute -top-3.5 right-6 bg-teal-700 text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
              Most Popular
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 font-black text-lg">
                  0%
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">Interest-Free Credit</h3>
                  <p className="text-xs text-slate-500">12 or 24 Months • £0 Upfront Deposit</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Spread the cost of your boiler replacement without paying a single penny in interest. 
                Pay back in equal monthly installments with zero hidden administration fees.
              </p>

              <div className="space-y-2 text-xs sm:text-sm text-slate-700 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                  <span><strong>0% APR Representative</strong> with Novuna Personal Finance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>Pay over 12 or 24 equal monthly payments</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>Pay off early at any time with no penalties</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 block">Typical 24m on £2,495:</span>
                <span className="text-2xl font-black text-teal-800">£103.95<span className="text-xs font-normal text-slate-500">/mo</span></span>
              </div>
              <button
                onClick={() => {
                  setTermMonths(24);
                  document.getElementById('finance-calculator-box')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2.5 bg-teal-700 hover:bg-teal-800 text-white rounded-xl font-bold text-xs shadow"
              >
                Calculate Plan ↓
              </button>
            </div>
          </div>

          {/* Card 2: 7.9% APR Spread up to 10 Years */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-black text-lg">
                  7.9%
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">Low Rate (Up to 10 Yrs)</h3>
                  <p className="text-xs text-slate-500">3, 5, or 10 Years • Lowest Monthly Outgoings</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Keep your monthly budget manageable with repayments from just £18-£25 per month. 
                Matches your boiler's 10 to 12-year warranty period for predictable heating costs.
              </p>

              <div className="space-y-2 text-xs sm:text-sm text-slate-700 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                  <span><strong>7.9% APR Representative</strong> interest-bearing credit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>Terms available for 36, 60, or 120 months</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>Overpay whenever you like to reduce total interest</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 block">Typical 120m on £2,495:</span>
                <span className="text-2xl font-black text-slate-900">£29.74<span className="text-xs font-normal text-slate-500">/mo</span></span>
              </div>
              <button
                onClick={() => {
                  setTermMonths(120);
                  document.getElementById('finance-calculator-box')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-xs"
              >
                Calculate Plan ↓
              </button>
            </div>
          </div>
        </div>

        {/* INTERACTIVE FULL FINANCE CALCULATOR */}
        <div 
          id="finance-calculator-box"
          className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200 space-y-8"
        >
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Interactive Boiler Finance Calculator
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Adjust the sliders below to see your exact monthly repayment and total cost.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sliders on Left */}
            <div className="lg:col-span-7 space-y-6">
              {/* Cost slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold text-slate-800">
                  <span>Estimated Total Boiler Cost:</span>
                  <span className="text-xl font-black text-slate-900">£{boilerCost.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="1800"
                  max="4000"
                  step="50"
                  value={boilerCost}
                  onChange={(e) => setBoilerCost(Number(e.target.value))}
                  className="w-full accent-teal-700 cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-400">
                  <span>£1,800</span>
                  <span>£2,500</span>
                  <span>£4,000</span>
                </div>
              </div>

              {/* Deposit slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold text-slate-800">
                  <span>Deposit Contribution:</span>
                  <span className="text-xl font-black text-teal-800">£{deposit.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1500"
                  step="50"
                  value={deposit}
                  onChange={(e) => setDeposit(Number(e.target.value))}
                  className="w-full accent-teal-700 cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-400">
                  <span>£0 (No deposit needed)</span>
                  <span>£500</span>
                  <span>£1,500</span>
                </div>
              </div>

              {/* Repayment Term Buttons */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Select Repayment Term:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {[
                    { months: 12, label: '12 Mos', apr: '0% APR' },
                    { months: 24, label: '24 Mos', apr: '0% APR' },
                    { months: 36, label: '3 Years', apr: '7.9%' },
                    { months: 60, label: '5 Years', apr: '7.9%' },
                    { months: 120, label: '10 Years', apr: '7.9%' }
                  ].map((t) => (
                    <button
                      key={t.months}
                      type="button"
                      onClick={() => setTermMonths(t.months)}
                      className={`p-3 rounded-xl border text-center transition ${
                        termMonths === t.months
                          ? 'border-teal-700 bg-teal-50 text-teal-900 font-bold shadow-sm'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="block text-sm font-bold">{t.label}</span>
                      <span className="text-[10px] text-slate-500">{t.apr}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Card on Right */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-teal-950 rounded-2xl p-6 text-white space-y-6 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs uppercase font-bold text-teal-400 tracking-wider block mb-1">
                  Calculated Repayment Plan
                </span>
                <div className="text-4xl font-black text-white">
                  £{calculations.monthly}
                  <span className="text-sm font-normal text-slate-300"> / month</span>
                </div>
                <p className="text-xs text-teal-300 mt-1">
                  Over {termMonths} monthly payments ({calculations.apr})
                </p>
              </div>

              <div className="space-y-2 py-4 border-y border-teal-800/60 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Cash Price:</span>
                  <span className="font-bold text-white">£{boilerCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Deposit Paid:</span>
                  <span className="font-bold text-white">£{deposit.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Total Loan Amount:</span>
                  <span className="font-bold text-white">£{loanAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Total Interest:</span>
                  <span className="font-bold text-amber-300">£{calculations.totalInterest}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-teal-800/40">
                  <span>Total Amount Payable:</span>
                  <span>£{calculations.totalPayable.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={() => navigateTo('quote')}
                className="w-full py-3.5 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-black text-sm shadow-md transition flex items-center justify-center gap-2"
              >
                <span>Apply This Plan in Quote Tool</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-4">
          <h3 className="text-xl font-bold text-slate-900">Are You Eligible For Boiler Finance?</h3>
          <p className="text-sm text-slate-600">
            Applying takes just a few minutes online or during our engineer survey. Basic requirements include:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm">
            {[
              'Minimum 18 years of age',
              'UK resident for at least 3 years',
              'Homeowner / Owner-occupier',
              'Regular income (employed, self-employed, or pension)',
              'UK personal bank account with direct debit',
              'Credit subject to status & affordability check'
            ].map((crit, i) => (
              <div key={i} className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span className="text-slate-800 font-medium">{crit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FCA Regulatory Notice */}
        <div className="p-4 bg-slate-100 rounded-2xl border border-slate-300 text-xs text-slate-600 space-y-2">
          <p className="font-bold text-slate-800 flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-teal-700" />
            <span>FCA Compliance Disclosure</span>
          </p>
          <p className="leading-relaxed">
            {COMPANY_DETAILS.legalName} is an Introducer Appointed Representative of TradeHelp Ltd, 
            which is authorized and regulated by the Financial Conduct Authority (FRN 697812). 
            We act as a credit broker and not a lender. Novuna Personal Finance is a trading style of Mitsubishi HC Capital UK PLC, 
            authorized and regulated by the Financial Conduct Authority (FRN 704348). 
            Credit is subject to status and affordability.
          </p>
        </div>
      </div>
    </div>
  );
};
