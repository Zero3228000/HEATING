import React, { useState } from 'react';
import { X, PhoneCall, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const CallbackModal: React.FC<CallbackModalProps> = ({ isOpen, onClose, defaultService = 'Boiler Quote & Advice' }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [postcode, setPostcode] = useState('');
  const [service, setService] = useState(defaultService);
  const [preferredTime, setPreferredTime] = useState('As soon as possible (Within 15-30 mins)');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError('Please provide your name and contact phone number.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        id="callback-modal-card" 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-teal-800 to-teal-700 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-teal-600/60 border border-teal-400/40 flex items-center justify-center">
              <PhoneCall className="w-5 h-5 text-teal-200" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">Request a Free Callback</h3>
              <p className="text-teal-200 text-xs">Speak with a Leeds Gas Safe engineer</p>
            </div>
          </div>
          <button
            id="close-callback-modal-btn"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-teal-900/60 hover:bg-teal-900 text-teal-200 hover:text-white flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Callback Request Received!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Thank you <strong className="text-slate-900">{name}</strong>. A Heatwise Gas Safe engineer has been alerted and will call you on <strong className="text-slate-900">{phone}</strong> shortly.
              </p>
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-3.5 text-xs text-teal-900">
                Need urgent assistance right now? Call our direct line directly on{' '}
                <a href={`tel:${COMPANY_DETAILS.phoneLandline.replace(/\s+/g, '')}`} className="font-bold text-teal-700 underline">
                  {COMPANY_DETAILS.phoneLandline}
                </a>{' '}
                or mobile on{' '}
                <a href={`tel:${COMPANY_DETAILS.phoneMobile.replace(/\s+/g, '')}`} className="font-bold text-teal-700 underline">
                  {COMPANY_DETAILS.phoneMobile}
                </a>.
              </div>
              <button
                id="callback-done-btn"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full mt-4 py-2.5 px-4 bg-teal-700 hover:bg-teal-800 text-white rounded-xl font-semibold text-sm transition shadow-sm"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    id="callback-name-input"
                    type="text"
                    required
                    placeholder="e.g. David Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    id="callback-phone-input"
                    type="tel"
                    required
                    placeholder="e.g. 07123 456789"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Leeds Postcode</label>
                  <input
                    id="callback-postcode-input"
                    type="text"
                    placeholder="e.g. LS17 5AY"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Service Needed</label>
                  <select
                    id="callback-service-select"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 bg-white"
                  >
                    <option value="Boiler Quote & Advice">New Boiler Quote</option>
                    <option value="Urgent Boiler Repair">Urgent Boiler Repair / Breakdown</option>
                    <option value="Annual Boiler Service (£79)">Annual Boiler Service (£79)</option>
                    <option value="Combi Boiler Upgrade">Combi Boiler Conversion</option>
                    <option value="Powerflushing">Powerflushing & Sludge Clean</option>
                    <option value="Landlord CP12 Certificate">Landlord Gas Safety CP12</option>
                    <option value="General Heating Advice">General Heating Advice</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">When should we call you?</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    'As soon as possible (15-30 mins)',
                    'Today morning (9:00 - 12:00)',
                    'Today afternoon (12:00 - 17:00)',
                    'Tomorrow morning'
                  ].map((timeOption) => (
                    <label
                      key={timeOption}
                      className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition ${
                        preferredTime === timeOption
                          ? 'border-teal-600 bg-teal-50 text-teal-900 font-medium'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="preferredTime"
                        value={timeOption}
                        checked={preferredTime === timeOption}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="text-teal-600 focus:ring-teal-500"
                      />
                      <span>{timeOption}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  id="submit-callback-btn"
                  type="submit"
                  className="w-full py-3 px-4 bg-teal-700 hover:bg-teal-800 text-white rounded-xl font-bold text-sm transition shadow-md flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Me Back For Free</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-500">
                🔒 We respect your privacy. No pushy sales calls — only honest advice from Gas Safe engineers.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
