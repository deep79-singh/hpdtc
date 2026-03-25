import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Building2, Map, Users } from 'lucide-react';

const CONTACT_DATA = {
  corporate: {
    city: "Dharamshala",
    title: "Corporate Office (Primary)",
    address: "Kashmir House, near Kotwali Bazar, Dharamshala, Distt. Kangra-176215.",
    tel: "01892-222977",
    email: "hptdc@hptdc.in"
  },
  marketing: [
    { city: "Shimla", address: "The Mall, Shimla - 171001", tel: "(0177) 2652561", email: "shimla@hptdc.in" },
    { city: "New Delhi", address: "Himachal Bhawan, 27 Sikandra Road", tel: "011-23716689", email: "newdelhi@hptdc.in" },
    { city: "Chandigarh", address: "Sector-28 B, Madhya Marg", tel: "0172-2637504", email: "chandigarh@hptdc.in" },
    { city: "Mumbai", address: "World Trade Centre, Cuffe Parade", tel: "(022) 22180080", email: "mumbai@hptdc.in" },
    { city: "Ahmedabad", address: "Ashram Road, Ahmedabad - 380009", tel: "(079) 27544800", email: "ahmedabad@hptdc.in" },
    { city: "Kolkata", address: "1/1 A, Biplabi Anukul Chandra St.", tel: "(033) 22126361", email: "kolkata@hptdc.in" },
    { city: "Chennai", address: "Wallajah Road, Chennai - 600102", tel: "(044) 25333689", email: "chennai@hptdc.in" }
  ],
  regional: [
    { city: "Manali", address: "The Mall, Manali - 175131", tel: "(01902) 253531" },
    { city: "Kullu", address: "Dhalpur, Kullu - 175101", tel: "(01902) 222349" }
  ]
};

const ContactCard = ({ city, address, tel, email, isPrimary = false }) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    whileHover={{ y: -5 }}
    className={`p-8 rounded-[2rem] border transition-all duration-300 relative overflow-hidden group ${
      isPrimary 
      ? 'bg-gradient-to-br from-[#002060] to-[#003B99] text-white shadow-2xl border-transparent md:col-span-2 lg:col-span-3' 
      : 'bg-white text-gray-800 border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,32,96,0.1)] hover:border-[#002060]/20'
    }`}
  >
    {/* Decorative blur blob for dark primary card */}
    {isPrimary && (
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    )}
    
    <div className="relative z-10 flex flex-col h-full">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className={`text-2xl font-bold font-serif mb-1 ${isPrimary ? 'text-white' : 'text-[#002060]'}`}>
            {city}
          </h3>
          {isPrimary && <span className="text-orange-400 font-semibold text-sm tracking-wider uppercase">Corporate Headquarters</span>}
        </div>
        <div className={`p-3 rounded-full ${isPrimary ? 'bg-white/10' : 'bg-[#002060]/5 text-[#002060]'}`}>
          {isPrimary ? <Building2 className="w-6 h-6 text-white" /> : <Map className="w-6 h-6" />}
        </div>
      </div>

      <div className="space-y-4 flex-grow">
        <div className="flex items-start space-x-3 group/link">
          <MapPin className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isPrimary ? 'text-orange-400' : 'text-gray-400 group-hover/link:text-[#FF5A2A]'}`} />
          <p className={`font-medium leading-relaxed ${isPrimary ? 'text-gray-200' : 'text-gray-600'}`}>
            {address}
          </p>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-dashed space-y-3 flex-shrink-0" style={{ borderColor: isPrimary ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)' }}>
        <a href={`tel:${tel}`} className="flex items-center space-x-3 group/link hover:opacity-80 transition-opacity w-fit">
          <Phone className={`w-4 h-4 ${isPrimary ? 'text-white' : 'text-[#002060]'}`} />
          <span className={`font-bold ${isPrimary ? 'text-white' : 'text-[#002060]'}`}>{tel}</span>
        </a>
        {email && (
          <a href={`mailto:${email}`} className="flex items-center space-x-3 group/link hover:opacity-80 transition-opacity w-fit">
            <Mail className={`w-4 h-4 ${isPrimary ? 'text-white' : 'text-[#002060]'}`} />
            <span className={`font-bold ${isPrimary ? 'text-white' : 'text-[#002060]'}`}>{email}</span>
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

export default function Contacts() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-32 pb-24 font-sans overflow-hidden">
      
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
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
            className="inline-flex items-center text-[#FF5A2A] font-bold tracking-[0.2em] uppercase text-sm mb-6 drop-shadow-sm px-5 py-2 bg-[#FF5A2A]/10 rounded-full border border-[#FF5A2A]/20 shadow-sm"
          >
            <Users className="w-4 h-4 mr-2" />
            Connect With Us
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold text-[#002060] mb-6 tracking-tight font-serif" 
          >
            Global Reach, <br/><span className="text-[#FF5A2A]">Local Presence.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed font-medium"
          >
            From the bustling streets of major metropolises to the serene heights of the Himalayas, our HPTDC offices are here to assist your journey.
          </motion.p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {/* Corporate Office spans full width on larger screens */}
          <ContactCard {...CONTACT_DATA.corporate} isPrimary={true} />
        </motion.div>

        {/* Marketing Offices */}
        <div className="mb-16">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-[#002060] font-serif mb-8 flex items-center gap-3 border-b border-gray-200 pb-4"
          >
            <Building2 className="w-6 h-6 text-[#FF5A2A]" /> Major Marketing Hubs
          </motion.h3>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {CONTACT_DATA.marketing.map((office, idx) => (
              <ContactCard key={idx} {...office} />
            ))}
          </motion.div>
        </div>

        {/* Regional Offices */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-[#002060] font-serif mb-8 flex items-center gap-3 border-b border-gray-200 pb-4"
          >
            <Map className="w-6 h-6 text-[#FF5A2A]" /> Regional Support
          </motion.h3>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {CONTACT_DATA.regional.map((office, idx) => (
              <ContactCard key={idx} {...office} />
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
