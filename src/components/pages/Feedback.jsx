import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, User, Send, CheckCircle2, MessageSquare, Star, MessageSquareHeart } from 'lucide-react';

export default function Feedback() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    natureOfFeedback: 'Appreciation',
    serviceArea: 'Hotel / Accommodation',
    rating: 'Excellent',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call delay for UX
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-32 pb-24 font-sans overflow-hidden relative">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden z-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 right-10 w-[600px] h-[600px] bg-gradient-to-bl from-teal-400/10 to-transparent rounded-full blur-[80px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-[#002060]/10 to-transparent rounded-full blur-[80px]"
        />
      </div>

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="text-center flex flex-col items-center"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="inline-flex items-center text-teal-600 font-bold tracking-[0.2em] uppercase text-sm mb-6 drop-shadow-sm px-5 py-2 bg-gradient-to-r from-teal-500/10 to-teal-600/10 rounded-full border border-teal-500/20 shadow-sm"
          >
            <MessageSquareHeart className="w-4 h-4 mr-2" />
            Guest Services
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold text-[#002060] mb-6 tracking-tight font-serif relative" 
          >
            We Value Your Voice
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed font-medium"
          >
            Your feedback helps us elevate our hospitality and preserve the pristine beauty of your Himalayan experiences.
          </motion.p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Panel: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/3"
          >
            <div className="bg-[#002060] rounded-[2rem] p-10 text-white shadow-2xl relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-[50px] transform translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-400 opacity-10 rounded-full blur-[40px] transform -translate-x-1/2 translate-y-1/2" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-serif font-bold mb-8">Reach Out Directly</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-teal-500 transition-colors flex-shrink-0">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-teal-300 font-semibold uppercase tracking-wider mb-1">Web Information Manager</p>
                      <p className="font-medium text-lg">Sh. Dhiraj Bali</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-teal-500 transition-colors flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-teal-300 font-semibold uppercase tracking-wider mb-1">Email Support</p>
                      <a href="mailto:hptdc@hptdc.in" className="block font-medium text-lg hover:text-teal-300 transition-colors">hptdc@hptdc.in</a>
                      <a href="mailto:shimla@hptdc.in" className="block font-medium text-lg mt-1 hover:text-teal-300 transition-colors">shimla@hptdc.in</a>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-teal-500 transition-colors flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-teal-300 font-semibold uppercase tracking-wider mb-1">Helpline</p>
                      <a href="tel:+911772652561" className="block font-medium text-lg hover:text-teal-300 transition-colors">+91 177 2652561</a>
                      <a href="tel:+911772658302" className="block font-medium text-lg mt-1 hover:text-teal-300 transition-colors">+91 177 2658302</a>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-sm leading-relaxed text-gray-200">
                    "We are committed to providing you with world-class hospitality intertwined with authentic Himachali warmth. Your words guide our future."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel: Feedback Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-2/3"
          >
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-100 relative">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit} 
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
                  >
                    
                    {/* Full Name */}
                    <div className="md:col-span-1">
                      <label className="block text-sm font-bold text-[#002060] mb-2">Full Name <span className="text-red-500">*</span></label>
                      <input 
                        type="text" name="fullName" required 
                        value={formData.fullName} onChange={handleChange}
                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        placeholder="e.g. Aditi Sharma"
                      />
                    </div>

                    {/* Email */}
                    <div className="md:col-span-1">
                      <label className="block text-sm font-bold text-[#002060] mb-2">Email Address <span className="text-red-500">*</span></label>
                      <input 
                        type="email" name="email" required 
                        value={formData.email} onChange={handleChange}
                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        placeholder="guest@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div className="md:col-span-1">
                      <label className="block text-sm font-bold text-[#002060] mb-2">Mobile Number <span className="text-red-500">*</span></label>
                      <input 
                        type="tel" name="phone" required pattern="[0-9]{10}"
                        value={formData.phone} onChange={handleChange}
                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        placeholder="10-digit number"
                      />
                    </div>

                    {/* Address */}
                    <div className="md:col-span-1">
                      <label className="block text-sm font-bold text-[#002060] mb-2">City / Location</label>
                      <input 
                        type="text" name="address" 
                        value={formData.address} onChange={handleChange}
                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        placeholder="e.g. New Delhi"
                      />
                    </div>

                    {/* Nature of Feedback */}
                    <div className="md:col-span-1">
                      <label className="block text-sm font-bold text-[#002060] mb-2">Nature of Feedback <span className="text-red-500">*</span></label>
                      <select 
                        name="natureOfFeedback" required
                        value={formData.natureOfFeedback} onChange={handleChange}
                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                      >
                        <option value="Appreciation">Appreciation & Praise</option>
                        <option value="Suggestion">Suggestion for Improvement</option>
                        <option value="Complaint">Complaint / Issue</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>

                    {/* Service Area */}
                    <div className="md:col-span-1">
                      <label className="block text-sm font-bold text-[#002060] mb-2">Service Evaluated <span className="text-red-500">*</span></label>
                      <select 
                        name="serviceArea" required
                        value={formData.serviceArea} onChange={handleChange}
                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                      >
                        <option value="Hotel / Accommodation">Hotel / Accommodation</option>
                        <option value="Transport / Bus Service">Transport / Bus Service</option>
                        <option value="Food & Beverage / Restaurant">Food & Beverage / Restaurant</option>
                        <option value="Staff Behavior & Hospitality">Staff Behavior & Hospitality</option>
                        <option value="Website / Booking System">Website / Booking System</option>
                      </select>
                    </div>

                    {/* Satisfaction Rating */}
                    <div className="md:col-span-2 mt-2">
                      <label className="block text-sm font-bold text-[#002060] mb-3">Overall Satisfaction Rating <span className="text-red-500">*</span></label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {['Excellent', 'Good', 'Average', 'Poor'].map((ratingOption) => (
                          <label key={ratingOption} className={`relative flex items-center justify-center p-3 rounded-xl border-2 cursor-pointer transition-all ${formData.rating === ratingOption ? 'border-teal-500 bg-teal-50 text-teal-700' : 'border-gray-200 bg-gray-50 text-gray-600 hover:border-teal-200'}`}>
                            <input 
                              type="radio" name="rating" value={ratingOption} className="sr-only"
                              checked={formData.rating === ratingOption} onChange={handleChange}
                            />
                            <span className="font-semibold">{ratingOption}</span>
                            {formData.rating === ratingOption && (
                              <Star className="absolute top-2 right-2 w-3 h-3 text-teal-500 fill-teal-500" />
                            )}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Message Area */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-[#002060] mb-2">Detailed Comments <span className="text-red-500">*</span></label>
                      <textarea 
                        name="message" required rows={4} minLength={10}
                        value={formData.message} onChange={handleChange}
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                        placeholder="Please share your experience with us in detail..."
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 mt-6 relative z-10">
                      <motion.button 
                        whileHover={{ scale: 1.015, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting}
                        type="submit"
                        className="group relative w-full py-4 md:py-5 rounded-full overflow-hidden shadow-[0_10px_30px_-10px_rgba(20,184,166,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(20,184,166,0.6)] transition-all duration-500 disabled:opacity-80 disabled:cursor-not-allowed border border-teal-400/30 bg-[#002060]"
                      >
                        {/* Animated continuous background gradient */}
                        <motion.div 
                          animate={{ x: ["-50%", "0%", "-50%"] }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 bg-gradient-to-r from-[#002060] via-teal-500 to-[#002060] w-[200%] z-0"
                        />
                        
                        {/* Shimmer light effect triggering on hover */}
                        <div className="absolute inset-0 w-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full skew-x-[-20deg] group-hover:translate-x-full transition-transform duration-1000 ease-in-out z-0" />

                        <div className="relative flex items-center justify-center text-white font-extrabold text-[1.1rem] tracking-wide z-10 drop-shadow-sm">
                          {isSubmitting ? (
                            <span className="flex items-center gap-3">
                              <span className="w-5 h-5 border-[3px] border-white/30 border-t-white rounded-full animate-spin" />
                              Transmitting Securely...
                            </span>
                          ) : (
                            <span className="flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                              Submit Your Feedback 
                              <Send className="w-5 h-5 transform group-hover:-translate-y-0.5 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300 drop-shadow-md" />
                            </span>
                          )}
                        </div>
                      </motion.button>
                      
                      {/* Ambient Underglow */}
                      <div className="absolute -inset-1 -z-10 bg-teal-400 opacity-20 blur-xl rounded-full group-hover:opacity-40 transition-opacity duration-500" />

                      <p className="text-center text-xs text-gray-400 mt-5 font-medium flex items-center justify-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" /> By submitting, you allow HPTDC to review and respond to your queries.
                      </p>
                    </div>
                  </motion.form>
                ) : (
                  /* Success State */
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16 px-4"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 12, delay: 0.2 }}
                      className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-6"
                    >
                      <CheckCircle2 className="w-12 h-12 text-green-500" />
                    </motion.div>
                    <h2 className="text-3xl font-bold text-[#002060] mb-4 font-serif">Thank You for Your Feedback!</h2>
                    <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
                      Your response has been securely submitted to our Web Information Manager. We appreciate you taking the time to help us grow.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-teal-600 font-semibold hover:text-teal-700 underline underline-offset-4"
                    >
                      Submit another response
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
