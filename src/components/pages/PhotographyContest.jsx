import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Camera, Image as ImageIcon, Map, Building, PartyPopper, UploadCloud, CheckCircle, FileText, AlertCircle, ArrowRight, X, ShieldCheck } from 'lucide-react';

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 15 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function PhotographyContest() {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-28 pb-24 font-sans overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden z-0 pointer-events-none">
        <motion.div 
          style={{ y }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3], rotate: [0, 5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-bl from-teal-500/10 via-[#002060]/5 to-transparent rounded-full blur-[80px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-40 -left-20 w-[600px] h-[600px] bg-gradient-to-tr from-[#FF5A2A]/10 to-transparent rounded-full blur-[80px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="text-center flex flex-col items-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="inline-flex items-center text-teal-600 font-bold tracking-[0.2em] uppercase text-sm mb-6 drop-shadow-sm px-5 py-2 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full border border-teal-500/20 shadow-sm"
          >
            <Camera className="w-4 h-4 mr-2" />
            Guest Exclusive
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#002060] mb-8 tracking-tight font-serif relative" 
            style={{ textShadow: "0 4px 20px rgba(0,32,96,0.05)" }}
          >
            HPTDC Photography Contest
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-1.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent rounded-full opacity-80"
            />
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed font-medium mt-4 mb-4"
          >
            Explore the hidden beauty of Himachal Pradesh and showcase your photography skills. Exclusive to guests staying at any HPTDC property.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-teal-50 border border-teal-200 text-teal-800 px-6 py-3 rounded-2xl flex items-center font-bold tracking-wide shadow-sm"
          >
            🏆 Win "Photo of the Week" on the Official HPTDC Homepage!
          </motion.div>
        </motion.div>

        {/* Categories Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {/* Theme 1 */}
          <motion.div variants={fadeInVariants} className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 mb-5 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 relative z-10">
              <Building className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#002060] mb-2 relative z-10">Exterior Views</h3>
            <p className="text-gray-500 text-sm relative z-10">Capture the stunning architecture and exterior beauty of HPTDC hotels.</p>
          </motion.div>

          {/* Theme 2 */}
          <motion.div variants={fadeInVariants} className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 mb-5 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 relative z-10">
              <ImageIcon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#002060] mb-2 relative z-10">Interior Beauty</h3>
            <p className="text-gray-500 text-sm relative z-10">Highlight elegant dining halls, cozy rooms, and grand reception lobbies.</p>
          </motion.div>

          {/* Theme 3 */}
          <motion.div variants={fadeInVariants} className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 mb-5 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 relative z-10">
              <Map className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#002060] mb-2 relative z-10">Natural Landscapes</h3>
            <p className="text-gray-500 text-sm relative z-10">Breath-taking panoramas and sceneries visible directly from the property.</p>
          </motion.div>

          {/* Theme 4 */}
          <motion.div variants={fadeInVariants} className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#FF5A2A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-16 h-16 rounded-2xl bg-orange-50 text-[#FF5A2A] mb-5 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#FF5A2A] group-hover:text-white transition-all duration-300 relative z-10">
              <PartyPopper className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#002060] mb-2 relative z-10">Special Events</h3>
            <p className="text-gray-500 text-sm relative z-10">Moments from marriages, conferences, or festivals hosted at HPTDC venues.</p>
          </motion.div>
        </motion.div>

        {/* Detailed Info Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Submission Guidelines */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full blur-[30px] -mr-16 -mt-16 pointer-events-none" />
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <UploadCloud className="w-6 h-6 text-teal-600" />
              <h3 className="text-2xl font-bold text-[#002060]">Submission Guidelines</h3>
            </div>
            <ul className="space-y-4 relative z-10">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Submission Limit:</strong> Submit up to 5 spectacular photos per participant.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Formats Allowed:</strong> High-resolution PNG, JPG, or JPEG images.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Size Constraint:</strong> Maximum file size of 1 MB per photo is strictly enforced.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Device Welcome:</strong> High-pixel mobile photography is completely accepted.</span>
              </li>
            </ul>
          </motion.div>

          {/* Terms & Conditions */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full blur-[30px] -mr-16 -mt-16 pointer-events-none" />
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <ShieldCheck className="w-6 h-6 text-[#FF5A2A]" />
              <h3 className="text-2xl font-bold text-[#002060]">Terms & Conditions</h3>
            </div>
            <ul className="space-y-4 relative z-10">
              <li className="flex items-start">
                <AlertCircle className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Digital Only:</strong> Only entirely digital submissions via this portal are accepted. No physical prints.</span>
              </li>
              <li className="flex items-start">
                <AlertCircle className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Marketing Rights:</strong> By submitting, you grant HPTDC the unrestricted right to utilize your media in marketing materials, books, websites, and films.</span>
              </li>
              <li className="flex items-start">
                <AlertCircle className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Verification:</strong> Contest is exclusive to current/past guests possessing valid booking proofs at participating properties.</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
        >
          <button 
            onClick={() => setIsApplicationOpen(true)} 
            className="w-full max-w-sm flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-[#002060] to-[#0A3080] text-white font-bold hover:shadow-xl hover:shadow-blue-900/20 transition-all transform hover:-translate-y-1 text-lg"
          >
            <Camera className="w-5 h-5 mr-1" />
            Submit Your Photos
          </button>
        </motion.div>

      </div>

      {/* Upload Form Modal */}
      <AnimatePresence>
        {isApplicationOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsApplicationOpen(false)}
              className="absolute inset-0 bg-[#002060]/40 backdrop-blur-sm cursor-pointer"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 flex flex-col"
            >
              {/* Header */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-100 p-6 flex justify-between items-center z-20 rounded-t-3xl shadow-sm">
                <div>
                  <h2 className="text-2xl font-bold text-[#002060] font-serif">Photography Contest Entry</h2>
                  <p className="text-gray-500 text-sm mt-1">Share your stunning captures from your HPTDC stay.</p>
                </div>
                <button 
                  onClick={() => setIsApplicationOpen(false)}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors focus:outline-none"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Form Content */}
              <div className="p-6 md:p-8 flex-1 overflow-y-auto">
                <form 
                  onSubmit={(e) => { 
                    e.preventDefault(); 
                    alert("Photos successfully submitted! Best of luck in the HPTDC Photography Contest."); 
                    setIsApplicationOpen(false); 
                  }} 
                  className="space-y-8"
                >
                  {/* Participant Details */}
                  <div className="space-y-5">
                    <h3 className="text-lg font-bold text-[#002060] flex items-center gap-3 border-b border-gray-100 pb-3">
                      <span className="w-7 h-7 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-xs">1</span>
                      Participant Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                        <input type="text" required className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all font-medium" placeholder="Enter your full name" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                        <input type="email" required className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all font-medium" placeholder="you@domain.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Mobile Number *</label>
                        <input type="tel" required className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all font-medium" placeholder="Your 10-digit number" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Address *</label>
                        <input type="text" required className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all font-medium" placeholder="Your residential address" />
                      </div>
                    </div>
                  </div>

                  {/* Media Uploads */}
                  <div className="space-y-5">
                    <h3 className="text-lg font-bold text-[#002060] flex items-center gap-3 border-b border-gray-100 pb-3">
                      <span className="w-7 h-7 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-xs">2</span>
                      Media Uploads <span className="text-gray-400 font-normal text-sm ml-auto opacity-80">(Max 5 Photos)</span>
                    </h3>
                    
                    <div className="space-y-4">
                      {/* Photo 1 (Mandatory) */}
                      <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 grid md:grid-cols-[1fr,2fr] gap-4 items-center">
                        <div>
                          <label className="block text-sm font-bold text-[#002060] mb-2">Photo 1 (Mandatory) *</label>
                          <input type="file" required accept=".png,.jpg,.jpeg" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 transition-colors" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 mb-1">Caption / Location description *</label>
                          <input type="text" required className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all text-sm font-medium" placeholder="e.g. Sunset viewing from Balcony at The Peterhof, Shimla" />
                        </div>
                      </div>

                      {/* Optional Photos 2-5 iteration loop */}
                      {[2, 3, 4, 5].map((num) => (
                        <div key={num} className="bg-white p-4 rounded-2xl border border-gray-200 grid md:grid-cols-[1fr,2fr] gap-4 items-center shadow-sm">
                          <div>
                            <label className="block text-sm font-semibold text-gray-600 mb-2">Photo {num} (Optional)</label>
                            <input type="file" accept=".png,.jpg,.jpeg" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 transition-colors" />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-gray-500 mb-1">Caption / Location description</label>
                            <input type="text" className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-200 transition-all text-sm font-medium" placeholder="Optional caption" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Conditions & Submit */}
                  <div className="pt-6 mt-4 border-t border-gray-100 space-y-6">
                    <label className="flex items-start gap-4 p-4 rounded-xl bg-blue-50/50 border border-blue-100 cursor-pointer group">
                      <input type="checkbox" required className="mt-1 w-5 h-5 rounded text-[#002060] focus:ring-[#002060]" />
                      <span className="text-sm text-gray-700 leading-relaxed">
                        I hereby agree to the <strong className="text-[#002060]">Terms and Conditions</strong>. I confirm these photos were taken by me during my stay at an HPTDC property and I grant HPTDC the right to use them in promotional materials.
                      </span>
                    </label>

                    <button type="submit" className="w-full py-4 rounded-xl bg-[#002060] text-white font-bold hover:bg-[#002060]/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-lg">
                      Submit Your Entries
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
