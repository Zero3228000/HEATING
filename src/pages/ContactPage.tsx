import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Award,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';

interface ContactPageProps {
  onRequestCallback: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onRequestCallback }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [postcode, setPostcode] = useState('');
  const [reason, setReason] = useState('New Boiler Installation Quote');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim()) {
      setError('Please fill in your name, email, and phone number.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5 text-teal-700" />
            <span>Get in Touch with Our Leeds Team</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Contact Heatwise Heating
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">
            Whether you need an urgent boiler repair, an annual safety service, or a free home survey in Leeds, we are here to help.
          </p>
        </div>

        {/* 2 Column Layout: Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Details & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Phone Box */}
            <div className="bg-gradient-to-br from-teal-900 to-slate-950 rounded-3xl p-7 text-white space-y-6 shadow-xl">
              <div>
                <span className="text-xs font-bold text-teal-300 uppercase tracking-wider block mb-1">
                  Immediate Telephone Support
                </span>
                <h3 className="text-2xl font-black text-white">Call an Engineer Directly</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Speak with our local engineers without sitting on an automated telephone tree.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  id="contact-landline-box"
                  href={`tel:${COMPANY_DETAILS.phoneLandline.replace(/\s+/g, '')}`}
                  className="p-4 bg-slate-900/80 hover:bg-slate-900 rounded-2xl border border-teal-700/50 flex items-center justify-between transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400 font-semibold">Leeds Office Line</p>
                      <p className="text-lg font-black text-white group-hover:text-teal-300 transition">
                        {COMPANY_DETAILS.phoneLandline}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-teal-400">Call Now →</span>
                </a>

                <a
                  id="contact-mobile-box"
                  href={`tel:${COMPANY_DETAILS.phoneMobile.replace(/\s+/g, '')}`}
                  className="p-4 bg-slate-900/80 hover:bg-slate-900 rounded-2xl border border-teal-700/50 flex items-center justify-between transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-800 text-teal-200 flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400 font-semibold">Engineer Mobile / Emergency</p>
                      <p className="text-lg font-black text-white group-hover:text-teal-300 transition">
                        {COMPANY_DETAILS.phoneMobile}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-teal-400">Call Now →</span>
                </a>
              </div>

              <div className="space-y-3 pt-2 text-xs text-slate-300 border-t border-teal-800/60">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Office Address:</strong> {COMPANY_DETAILS.address.street}, {COMPANY_DETAILS.address.city}, {COMPANY_DETAILS.address.postcode}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>
                    <strong>Email:</strong> {COMPANY_DETAILS.email}
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <p><strong>Opening Hours:</strong> {COMPANY_DETAILS.openingHours.weekdays}</p>
                    <p className="text-slate-400">{COMPANY_DETAILS.openingHours.saturday}</p>
                    <p className="text-amber-300 font-semibold">{COMPANY_DETAILS.openingHours.emergencyNotice}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Leeds Landmark Map Visual */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-800">Moortown & North Leeds Base:</span>
                <span className="text-[#009FA0] font-semibold">LS17 5AY</span>
              </div>
              <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 bg-[#FAF8F3] p-2 flex items-center justify-center">
                <img
                  src="/images/worcester-bosch-boiler-installers-in-leeds.png"
                  alt="Leeds boiler installers map with Moortown Golf Club and Roundhay Lake"
                  className="w-full max-h-56 object-contain"
                />
              </div>
              <p className="text-xs text-slate-500 text-center">
                Covering Moortown, Roundhay, Alwoodley, Chapel Allerton, and all West Yorkshire.
              </p>
            </div>

            {/* Julian Gas Safe Director Card */}
            <div className="bg-[#FAF8F3] rounded-3xl p-6 border border-stone-200 shadow-sm flex items-center gap-4">
              <img 
                src="/images/experienced-heating-engineer-leeds-for-boiler-services.png"
                alt="Julian - Gas Safe Director"
                className="w-24 h-24 object-contain shrink-0"
              />
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#f78320] uppercase">Family Run Team</span>
                <h4 className="font-bold text-slate-900 text-sm">Julian & The Heatwise Team</h4>
                <p className="text-xs text-slate-600">
                  Gas Safe Registered Director (#938210) & Worcester Bosch Diamond Accredited.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-2xl font-black text-slate-900">Send an Enquiry Online</h2>
              <p className="text-xs text-slate-500 mt-1">
                Fill in the form below and an engineer will respond within 1 business hour.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Enquiry Received!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you <strong className="text-slate-900">{name}</strong>. Your message has been sent to our Leeds engineering desk. We will contact you at <strong className="text-slate-900">{phone}</strong> or <strong className="text-slate-900">{email}</strong> shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setPhone('');
                      setMessage('');
                    }}
                    className="px-6 py-2.5 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs font-bold shadow"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      id="contact-name-input"
                      type="text"
                      required
                      placeholder="e.g. Rachel Adams"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-700"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Contact Phone *
                    </label>
                    <input
                      id="contact-phone-input"
                      type="tel"
                      required
                      placeholder="e.g. 07123 456789"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-700"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      id="contact-email-input"
                      type="email"
                      required
                      placeholder="e.g. rachel@example.co.uk"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-700"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Leeds Postcode
                    </label>
                    <input
                      id="contact-postcode-input"
                      type="text"
                      placeholder="e.g. LS17 5AY"
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nature of Enquiry
                  </label>
                  <select
                    id="contact-reason-select"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-700 bg-white"
                  >
                    <option value="New Boiler Installation Quote">New Boiler Installation Quote (Worcester / Ideal / Baxi)</option>
                    <option value="Annual Boiler Service (£79)">Annual Boiler Service (£79)</option>
                    <option value="Urgent Boiler Repair / Breakdown">Urgent Boiler Repair / Breakdown</option>
                    <option value="Powerflushing & Sludge Clean">Powerflushing & Radiator Cleansing</option>
                    <option value="Landlord Gas Safety CP12">Landlord Gas Safety CP12 Inspection</option>
                    <option value="Smart Thermostat Fitting">Smart Thermostat / Hive / Nest Installation</option>
                    <option value="Other">General Heating Advice / Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Message or Heating Details
                  </label>
                  <textarea
                    id="contact-message-input"
                    rows={4}
                    placeholder="Tell us about your boiler model, symptoms, or preferred dates..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-700"
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="w-full py-4 px-6 bg-teal-700 hover:bg-teal-800 text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry to Heatwise Heating</span>
                </button>

                <p className="text-[11px] text-center text-slate-500">
                  🔒 We treat your information with confidentiality. Gas Safe registered engineers only.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
