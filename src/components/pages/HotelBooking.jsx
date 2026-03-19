import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Users, 
  Search, 
  MapPin, 
  CreditCard, 
  ShieldCheck, 
  ChevronRight, 
  Star,
  CheckCircle2,
  Lock,
  ArrowRight
} from 'lucide-react';

const FEATURED_HOTELS = [
  { id: 1, name: 'The Oberoi Cecil', location: 'Shimla', price: '₹ 12,500', rating: 4.9, image: 'https://images.unsplash.com/photo-1542314831-c6a4d1409e50?q=80&w=800&auto=format&fit=crop' },
  { id: 2, name: 'Wildflower Hall', location: 'Shimla', price: '₹ 25,000', rating: 5.0, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop' },
  { id: 3, name: 'Span Resort & Spa', location: 'Manali', price: '₹ 15,800', rating: 4.8, image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=800&auto=format&fit=crop' },
];

export default function HotelBooking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Guests, 1 Room',
  });

  return (
    <div className="pt-24 pb-16 bg-[#FDFEFE] min-h-screen font-sans text-[#1A1A1A]">
      {/* Hero Section */}
      <div className="relative h-[300px] mb-12 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#002060]">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FF5A2A] rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-[120px] opacity-10"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6"
          >
            <Lock className="w-4 h-4 text-[#FF5A2A]" />
            <span className="text-white text-xs font-bold uppercase tracking-widest">Secure Online Booking</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white"
          >
            Book Your Stay
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Booking Form */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,32,96,0.08)] border border-gray-100 p-8 md:p-12 mb-10"
            >
              <div className="flex items-center justify-between mb-10 border-b border-gray-100 pb-8">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${step >= num ? 'bg-[#002060] text-white' : 'bg-gray-100 text-gray-400'}`}>
                      {step > num ? <CheckCircle2 className="w-6 h-6" /> : num}
                    </div>
                    <span className={`hidden sm:block font-bold text-sm uppercase tracking-wider ${step >= num ? 'text-[#002060]' : 'text-gray-300'}`}>
                      {num === 1 ? 'Search' : num === 2 ? 'Details' : 'Confirm'}
                    </span>
                    {num < 3 && <div className="hidden md:block w-12 h-px bg-gray-100 mx-2"></div>}
                  </div>
                ))}
              </div>

              <div className="space-y-8">
                {/* Step 1: Search */}
                {step === 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Destination</label>
                      <div className="relative group">
                        <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#FF5A2A] transition-colors" />
                        <input 
                          type="text" 
                          placeholder="Where are you going?" 
                          className="w-full bg-[#F8FAFC] border-2 border-transparent focus:border-[#FF5A2A]/20 focus:bg-white rounded-2xl py-4 pl-14 pr-6 outline-none font-semibold transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Guests & Rooms</label>
                      <div className="relative group">
                        <Users className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#FF5A2A] transition-colors" />
                        <input 
                          type="text" 
                          value="2 Guests, 1 Room" 
                          readOnly
                          className="w-full bg-[#F8FAFC] border-2 border-transparent focus:border-[#FF5A2A]/20 focus:bg-white rounded-2xl py-4 pl-14 pr-6 outline-none font-semibold transition-all cursor-pointer"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Check-in</label>
                      <div className="relative group">
                        <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#FF5A2A] transition-colors" />
                        <input 
                          type="date" 
                          className="w-full bg-[#F8FAFC] border-2 border-transparent focus:border-[#FF5A2A]/20 focus:bg-white rounded-2xl py-4 pl-14 pr-6 outline-none font-semibold transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Check-out</label>
                      <div className="relative group">
                        <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#FF5A2A] transition-colors" />
                        <input 
                          type="date" 
                          className="w-full bg-[#F8FAFC] border-2 border-transparent focus:border-[#FF5A2A]/20 focus:bg-white rounded-2xl py-4 pl-14 pr-6 outline-none font-semibold transition-all"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div className="flex pt-6">
                  <button 
                    onClick={() => setStep(step + 1)}
                    className="w-full md:w-auto ml-auto bg-[#002060] hover:bg-[#FF5A2A] text-white px-12 py-5 rounded-2xl font-black text-lg transition-all shadow-[0_20px_40px_-12px_rgba(0,32,96,0.2)] hover:shadow-[0_20px_40px_-12px_rgba(255,90,42,0.3)] hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
                  >
                    Continue to Details
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <ShieldCheck className="text-green-500" />, title: 'Secure Payment', desc: '100% encrypted checkout process' },
                { icon: <CreditCard className="text-blue-500" />, title: 'No Hidden Fees', desc: 'Transparent pricing with no extras' },
                { icon: <Star className="text-yellow-500" />, title: 'Best Price', desc: 'Guaranteed lowest rates available' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 flex items-start gap-4">
                  <div className="p-3 bg-gray-50 rounded-2xl">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-[#002060] text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar: Featured Accommodations */}
          <div className="lg:col-span-4 space-y-8">
            <h3 className="text-xl font-bold text-[#002060] px-2 flex items-center justify-between">
              Featured Stays
              <span className="text-xs font-bold text-[#FF5A2A] uppercase tracking-widest cursor-pointer hover:underline">View All</span>
            </h3>
            
            <div className="space-y-6">
              {FEATURED_HOTELS.map((hotel) => (
                <motion.div 
                  key={hotel.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-1 shadow-lg">
                      <Star className="w-3.5 h-3.5 text-yellow-500 fill-current" />
                      <span className="text-xs font-black">{hotel.rating}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                      <MapPin className="w-3 h-3 mr-1 text-[#FF5A2A]" />
                      {hotel.location}
                    </div>
                    <h4 className="text-lg font-bold text-[#002060] mb-4 group-hover:text-[#FF5A2A] transition-colors">{hotel.name}</h4>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                      <div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase block">Starts from</span>
                        <span className="text-lg font-black text-[#002060]">{hotel.price}</span>
                      </div>
                      <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-[#FF5A2A] group-hover:text-white transition-all">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-[#002060] rounded-[32px] p-8 relative overflow-hidden group">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <h4 className="text-white font-black text-xl mb-4 leading-tight">Need Group Booking?</h4>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">Planning a corporate retreat or a destination wedding? Our concierge team is ready to help.</p>
                <button className="w-full bg-[#FF5A2A] text-white py-4 rounded-2xl font-black text-sm hover:bg-white hover:text-[#002060] transition-all shadow-xl">
                  Contact Specialist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
