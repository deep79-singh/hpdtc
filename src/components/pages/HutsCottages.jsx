import React from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Star, Wifi, Coffee, Car, Utensils, Home, TreePine } from 'lucide-react';

const COTTAGES = [
  {
    id: 1,
    name: 'Pine Wood Chalet',
    location: 'Kufri, Shimla',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    reviews: 156,
    price: '₹ 6,500',
    amenities: [<Wifi size={16} />, <Coffee size={16} />, <TreePine size={16} />, <Utensils size={16} />],
    featured: true
  },
  {
    id: 2,
    name: 'Riverside Log House',
    location: 'Kasol, Parvati Valley',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    reviews: 92,
    price: '₹ 4,800',
    amenities: [<Wifi size={16} />, <Car size={16} />, <Utensils size={16} />],
    featured: false
  },
  {
    id: 3,
    name: 'Apple Orchard Cottage',
    location: 'Thanedar, Himachal',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    reviews: 124,
    price: '₹ 5,500',
    amenities: [<Wifi size={16} />, <Coffee size={16} />, <TreePine size={16} />],
    featured: true
  },
  {
    id: 4,
    name: 'Snowy Peaks Hut',
    location: 'Solang Valley, Manali',
    image: 'https://images.unsplash.com/photo-1481328105043-169b29b045a5?q=80&w=800&auto=format&fit=crop',
    rating: 4.6,
    reviews: 88,
    price: '₹ 3,900',
    amenities: [<Wifi size={16} />, <Utensils size={16} />],
    featured: false
  },
  {
    id: 5,
    name: 'Cedar Shadow Retreat',
    location: 'Mashobra, Shimla',
    image: 'https://images.unsplash.com/photo-1449156006071-7009405f6eb6?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    reviews: 210,
    price: '₹ 7,200',
    amenities: [<Wifi size={16} />, <Coffee size={16} />, <Car size={16} />, <TreePine size={16} />],
    featured: true
  },
  {
    id: 6,
    name: 'Eagle Eye Cabin',
    location: 'Bir Billing, Kangra',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop',
    rating: 4.5,
    reviews: 74,
    price: '₹ 4,200',
    amenities: [<Car size={16} />, <Utensils size={16} />],
    featured: false
  }
];

export default function HutsCottages() {
  return (
    <div className="pt-24 pb-16 bg-[#f8fafc] min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative h-[450px] mb-16 rounded-b-[50px] overflow-hidden shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop" 
          alt="Cozy Cottage in Himachal" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002060]/95 via-[#002060]/50 to-transparent flex flex-col items-center justify-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-4 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/30 flex items-center gap-2"
          >
            <Home className="w-4 h-4 text-white" />
            <span className="text-white text-xs font-bold uppercase tracking-widest">Cozy Retreats in Nature</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight"
          >
            Huts & Cottages
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-medium leading-relaxed"
          >
            Escape the ordinary and find your perfect slice of mountain paradise in our handpicked rustic retreats.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-xl p-2 rounded-3xl flex items-center justify-between w-full max-w-2xl shadow-2xl border border-white/20"
          >
            <div className="flex items-center flex-1 px-4 text-white/90">
              <MapPin className="w-5 h-5 mr-3 text-[#FF5A2A]" />
              <input type="text" placeholder="Search cottages..." className="w-full outline-none bg-transparent placeholder-white/50 font-medium" />
            </div>
            <button className="bg-[#FF5A2A] hover:bg-[#e04a1f] text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-lg active:scale-95">
              Explore
            </button>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[2px] bg-[#FF5A2A]"></span>
              <span className="uppercase text-[#FF5A2A] font-bold text-xs tracking-widest">Selected for you</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#002060]">Rustic Perfection</h2>
          </div>
          <div className="flex gap-4">
            <button className="p-3 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 transition-colors shadow-sm text-gray-600">
              <Search className="w-5 h-5" />
            </button>
            <select className="bg-white border border-gray-200 rounded-2xl px-6 py-3 font-semibold text-gray-700 outline-none focus:ring-2 focus:ring-[#FF5A2A] transition-all shadow-sm">
              <option>Filter by Price</option>
              <option>₹ 2000 - ₹ 5000</option>
              <option>₹ 5000+</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {COTTAGES.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full group"
            >
              <div className="relative h-72 overflow-hidden">
                <motion.img 
                  src={item.image} 
                  alt={item.name} 
                  variants={{
                    hover: { scale: 1.15 }
                  }}
                  transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  variants={{
                    hover: { opacity: 0.15 }
                  }}
                  className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 pointer-events-none" 
                />
                {item.featured && (
                  <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md text-[#FF5A2A] text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-[0.2em] shadow-lg border border-[#FF5A2A]/20">
                    Premium Choice
                  </div>
                )}
                <button className="absolute top-5 right-5 w-11 h-11 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center hover:bg-[#FF5A2A] transition-all duration-300 group/heart border border-white/30 active:scale-90">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-white group-hover/heart:text-white transition-colors">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </button>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#002060] mb-1 leading-tight group-hover:text-[#FF5A2A] transition-colors">{item.name}</h3>
                    <div className="flex items-center text-gray-500 font-medium text-sm">
                      <MapPin className="w-4 h-4 mr-1.5 text-[#FF5A2A]/70" />
                      {item.location}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 py-6 border-y border-gray-50 mb-6">
                  {item.amenities.map((icon, i) => (
                    <div key={i} className="text-gray-400 group-hover:text-[#002060] transition-colors">
                      {icon}
                    </div>
                  ))}
                  <div className="ml-auto flex items-center bg-[#f8fafc] px-3 py-1.5 rounded-xl border border-gray-100">
                    <Star className="w-3.5 h-3.5 mr-1.5 text-yellow-500 fill-current" />
                    <span className="text-sm font-bold text-gray-700">{item.rating}</span>
                    <span className="text-xs text-gray-400 font-medium ml-1">({item.reviews})</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-gray-400 text-xs font-bold uppercase tracking-wider block mb-0.5">Price / Night</span>
                    <div className="text-2xl font-black text-[#002060]">{item.price}</div>
                  </div>
                  <button className="bg-[#002060] hover:bg-[#FF5A2A] text-white px-7 py-3.5 rounded-2xl font-extrabold transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(0,32,96,0.3)] hover:shadow-[0_10px_30px_-10px_rgba(255,90,42,0.4)] hover:-translate-y-1 active:translate-y-0">
                    Reserve
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 relative rounded-[40px] overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-[400px] object-cover transition-transform duration-1000 group-hover:scale-105" 
            alt="Newsletter background"
          />
          <div className="absolute inset-0 bg-[#002060]/80 backdrop-blur-[2px] flex flex-col items-center justify-center p-10 text-center">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 max-w-2xl leading-tight">Can't decide? Let us help you find your sanctuary.</h3>
            <p className="text-white/70 text-lg mb-10 max-w-xl font-medium">Join 50,000+ travelers who receive our curated list of hidden gems in the Himalayas every month.</p>
            <div className="bg-white/10 backdrop-blur-md p-1.5 rounded-2xl flex w-full max-w-md border border-white/20">
              <input type="email" placeholder="Your email address" className="bg-transparent text-white px-5 py-3 outline-none flex-1 placeholder-white/40 font-medium" />
              <button className="bg-white text-[#002060] px-8 rounded-xl font-black text-sm hover:bg-[#FF5A2A] hover:text-white transition-all shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 py-20 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-10 opacity-40 grayscale hover:grayscale-0 transition-all cursor-crosshair">
            <img src="https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=150&auto=format&fit=crop" alt="Partner 1" className="h-10" />
            <img src="https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=150&auto=format&fit=crop" alt="Partner 2" className="h-10" />
            <img src="https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=150&auto=format&fit=crop" alt="Partner 3" className="h-10" />
          </div>
          <p className="text-gray-400 font-bold text-sm tracking-[0.2em] uppercase">Trusted by Nature Lovers Worldwide</p>
        </div>
      </div>
    </div>
  );
}
