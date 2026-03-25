import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Trophy, Calendar, Award, MapPin } from 'lucide-react';

const AWARDS_DATA = [
  {
    id: "award-gold-egovernance",
    awardTitle: "National GOLD E-Governance Award",
    year: "2015-16",
    category: "E-Governance & ICT",
    presenter: "Ministry of Personnel, Govt. of India",
    summary: "Awarded for the 'Integrated Online Hotel Reservation System' under the Innovative use of ICT category.",
    imageDescriptor: "gold-trophy-ict-award",
    placeholderUrl: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "award-best-adventure",
    awardTitle: "Best Indian Destination for Adventure",
    year: "2016",
    category: "Adventure Travel",
    presenter: "Lonely Planet Magazine",
    summary: "Voted by readers as the top adventure spot in India; received by Sh. Anil Taneja in Mumbai.",
    imageDescriptor: "adventure-mountain-award",
    placeholderUrl: "https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "award-best-mountain",
    awardTitle: "Best Mountain and Hill Destination",
    year: "2013",
    category: "Tourism Excellence",
    presenter: "CNBC Awaaz Travel Awards",
    summary: "Recognized Dharamshala as a premier destination based on an exhaustive national consumer study.",
    imageDescriptor: "mountain-hill-destination-award",
    placeholderUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "award-best-family",
    awardTitle: "Best Family Destination",
    year: "2017",
    category: "Family Travel",
    presenter: "Travel + Leisure India",
    summary: "Won via public polling on the magazine's website, celebrating Himachal as a top family getaway.",
    imageDescriptor: "family-travel-award",
    placeholderUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "award-skoch-semi-finalist",
    awardTitle: "Skoch Award (Semi-Finalist)",
    year: "2020",
    category: "Crisis Management & Response",
    presenter: "Skoch Group",
    summary: "Recognized HPTDC’s highly commendable special efforts and robust response during the COVID-19 pandemic crisis.",
    imageDescriptor: "skoch-covid-response-award",
    placeholderUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Awards() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-32 pb-24 font-sans overflow-hidden relative">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden z-0 pointer-events-none">
        <motion.div 
          style={{ y }}
          className="absolute top-20 right-10 w-[600px] h-[600px] bg-gradient-to-bl from-yellow-400/10 via-yellow-600/5 to-transparent rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-80 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-[#002060]/5 to-transparent rounded-full blur-[80px]"
        />
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
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
            className="inline-flex items-center text-yellow-600 font-bold tracking-[0.2em] uppercase text-sm mb-6 drop-shadow-sm px-5 py-2 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-full border border-yellow-500/30 shadow-sm"
          >
            <Trophy className="w-4 h-4 mr-2" />
            Achievements
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#002060] mb-8 tracking-tight font-serif relative" 
            style={{ textShadow: "0 4px 20px rgba(0,32,96,0.05)" }}
          >
            Awards & Recognition
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-1.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full opacity-80"
            />
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed font-medium mt-4"
          >
            Celebrating excellence in hospitality, tourism, and governance. A timeline of our proudest milestones.
          </motion.p>
        </motion.div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-500/20 via-yellow-500/40 to-transparent -translate-x-1/2 rounded-full hidden md:block" />

          {AWARDS_DATA.map((award, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={award.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 60 }}
                className={`flex flex-col md:flex-row items-center mb-16 md:mb-24 last:mb-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Connector Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-white bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-[0_0_20px_rgba(234,179,8,0.4)] items-center justify-center z-10">
                  <span className="text-white font-bold text-xs">{award.year.substring(0, 4)}</span>
                </div>

                {/* Content Side */}
                <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}>
                  <div className="bg-white rounded-[2rem] p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-10px_rgba(234,179,8,0.2)] transition-all duration-500 group border border-gray-100 relative overflow-hidden">
                    {/* Golden accent line on top */}
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                    <div className="flex items-center gap-3 mb-4">
                      <div className="md:hidden w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-md">
                         <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <span className="md:hidden font-bold text-yellow-600 text-lg">{award.year}</span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-[#002060] mb-3 group-hover:text-yellow-600 transition-colors font-serif leading-tight">
                      {award.awardTitle}
                    </h3>
                    
                    <div className="flex flex-col gap-2 mb-6 text-sm font-semibold">
                      <div className="flex items-center text-gray-500">
                        <Award className="w-4 h-4 mr-2 text-yellow-500" />
                        <span className="text-gray-700">{award.category}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
                        <span className="text-gray-700">Presented by: <span className="text-[#002060]">{award.presenter}</span></span>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed italic border-l-4 border-yellow-400 pl-4 py-1 bg-yellow-50/50 rounded-r-lg">
                      "{award.summary}"
                    </p>
                  </div>
                </div>

                {/* Image Side */}
                <div className={`w-full md:w-1/2 mt-8 md:mt-0 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: isEven ? 2 : -2 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-lg group"
                  >
                    <img 
                      src={award.placeholderUrl} 
                      alt={award.awardTitle}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002060]/80 via-transparent to-transparent opacity-80" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
