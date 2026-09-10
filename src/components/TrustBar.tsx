import React from 'react';
import { ShieldCheck, Award, Zap, Star, CheckCircle } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-[#FAF8F3] text-slate-800 border-y border-stone-200 py-3.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center text-xs sm:text-sm">
          
          {/* Gas Safe */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#FFB800] text-slate-950 flex items-center justify-center font-black text-xs shrink-0 shadow-2xs">
              GAS
            </div>
            <div>
              <p className="font-bold text-slate-900 leading-tight">Gas Safe</p>
              <p className="text-slate-500 text-[11px]">#938210 Registered</p>
            </div>
          </div>

          {/* Worcester Accredited */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#009FA0] border border-teal-200 flex items-center justify-center shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-slate-900 leading-tight">Worcester Bosch</p>
              <p className="text-slate-500 text-[11px]">Diamond Accredited</p>
            </div>
          </div>

          {/* Guarantee */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#f78320] border border-amber-200 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-slate-900 leading-tight">Up to 12 Years</p>
              <p className="text-slate-500 text-[11px]">Parts &amp; Labour Guarantee</p>
            </div>
          </div>

          {/* Finance */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#009FA0] border border-teal-200 flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-slate-900 leading-tight">0% Finance</p>
              <p className="text-slate-500 text-[11px]">Spread Costs From £0 Dep</p>
            </div>
          </div>

          {/* Reviews */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-1 font-bold text-slate-900 leading-tight">
                <span>4.9 / 5.0</span>
                <span className="text-amber-500 text-xs">★★★★★</span>
              </div>
              <p className="text-slate-500 text-[11px]">150+ Leeds Reviews</p>
            </div>
          </div>

          {/* Fixed Pricing */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#009FA0] border border-teal-200 flex items-center justify-center shrink-0">
              <CheckCircle className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-slate-900 leading-tight">Fixed Price</p>
              <p className="text-slate-500 text-[11px]">Zero Hidden Extras</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
