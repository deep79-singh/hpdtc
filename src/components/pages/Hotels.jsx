import React from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Star, Wifi, Coffee, Car, Utensils } from 'lucide-react';

const HOTELS = [
  {
    id: 1,
    name: 'The Himalayan Retreat',
    location: 'Manali, Himachal Pradesh',
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/825045942.jpg?k=24e43ed0f939c8d308a048ec4d527b1f20bf622504555dbf95da3771d30a8556&o=',
    rating: 4.8,
    reviews: 124,
    price: '₹ 4,500',
    amenities: [<Wifi size={16} />, <Coffee size={16} />, <Car size={16} />, <Utensils size={16} />],
    featured: true
  },
  {
    id: 2,
    name: 'Shimla Heritage Grand',
    location: 'Shimla, Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop',
    rating: 4.6,
    reviews: 89,
    price: '₹ 3,800',
    amenities: [<Wifi size={16} />, <Coffee size={16} />, <Utensils size={16} />],
    featured: false
  },
  {
    id: 3,
    name: 'Spiti Valley Eco Resort',
    location: 'Kaza, Spiti Valley',
    image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    reviews: 210,
    price: '₹ 5,200',
    amenities: [<Wifi size={16} />, <Coffee size={16} />, <Car size={16} />],
    featured: true
  },
  {
    id: 4,
    name: 'Dharamshala Pine Views',
    location: 'Dharamshala, Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
    rating: 4.5,
    reviews: 76,
    price: '₹ 2,900',
    amenities: [<Wifi size={16} />, <Utensils size={16} />],
    featured: false
  },
  {
    id: 5,
    name: 'Dalhousie Heights',
    location: 'Dalhousie, Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1605649487212-4d43be6c2b1a?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    reviews: 154,
    price: '₹ 4,100',
    amenities: [<Wifi size={16} />, <Coffee size={16} />, <Car size={16} />, <Utensils size={16} />],
    featured: true
  },
  {
    id: 6,
    name: 'Kullu Riverside Camp',
    location: 'Kullu, Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1593181629936-11c609b8fd96?q=80&w=800&auto=format&fit=crop',
    rating: 4.4,
    reviews: 62,
    price: '₹ 2,100',
    amenities: [<Car size={16} />, <Utensils size={16} />],
    featured: false
  }
];

export default function Hotels() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-16 rounded-b-[40px] overflow-hidden">
        <img 
          src="https://www.incredibleindia.gov.in/content/dam/incredible-india/images/trips/himachal-pradesh/shimla/magnificent-tour-to-himachal-9-days-trip/kyelang-village-himachal-pradesh-tri-iter-day4.jpg" 
          alt="Luxury Hotel in Himachal" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002060]/90 to-[#002060]/40 flex flex-col items-center justify-center px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6"
          >
            Find Your Perfect Room
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
          >
            Discover handpicked hotels, cozy cottages, and luxury resorts across the beautiful landscapes of Himachal Pradesh.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-3 rounded-full flex items-center justify-between w-full max-w-3xl shadow-xl"
          >
            <div className="flex items-center flex-1 px-4 text-gray-600 border-r border-gray-200">
              <MapPin className="w-5 h-5 mr-3 text-[#FF5A2A]" />
              <input type="text" placeholder="Where do you want to stay?" className="w-full outline-none bg-transparent" />
            </div>
            <div className="hidden md:flex items-center flex-1 px-4 text-gray-600">
              <input type="date" className="w-full outline-none bg-transparent" />
            </div>
            <button className="bg-[#FF5A2A] hover:bg-[#e04a1f] text-white px-8 py-3 rounded-full font-bold transition-colors flex items-center">
              <Search className="w-5 h-5 mr-2 hidden sm:block" />
              Search
            </button>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-extrabold text-[#002060] mb-2">Recommended Stays</h2>
            <p className="text-gray-600">Highly rated accommodations for your next adventure</p>
          </div>
          <button className="text-[#FF5A2A] font-bold hover:underline hidden sm:block">View All Destinations</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOTELS.map((hotel, index) => (
            <motion.div 
              key={hotel.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group border border-gray-100 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img 
                  src={hotel.image} 
                  alt={hotel.name} 
                  variants={{
                    hover: { scale: 1.1 }
                  }}
                  transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  variants={{
                    hover: { opacity: 0.1 }
                  }}
                  className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500" 
                />
                {hotel.featured && (
                  <span className="absolute top-4 left-4 bg-[#FF5A2A] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    Featured
                  </span>
                )}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white transition-colors group/heart">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white group-hover/heart:text-red-500 transition-colors">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-[#002060] line-clamp-1">{hotel.name}</h3>
                  <div className="flex items-center bg-green-100 px-2 py-1 rounded text-green-800 text-sm font-bold">
                    <Star className="w-3.5 h-3.5 mr-1 fill-current" />
                    {hotel.rating}
                  </div>
                </div>
                
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                  {hotel.location}
                </div>
                
                <div className="flex items-center gap-3 text-gray-400 mb-6">
                  {hotel.amenities.map((icon, i) => (
                    <div key={i} className="bg-gray-50 p-2 rounded-full border border-gray-100 text-[#002060]">
                      {icon}
                    </div>
                  ))}
                  <span className="text-xs font-semibold ml-2">+{12 - hotel.amenities.length} more</span>
                </div>
                
                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                  <div>
                    <span className="text-gray-500 text-sm">Starting from</span>
                    <div className="text-xl font-extrabold text-[#FF5A2A]">{hotel.price}<span className="text-sm font-normal text-gray-500">/night</span></div>
                  </div>
                  <button className="bg-[#002060] hover:bg-[#001540] text-white px-5 py-2.5 rounded-xl font-semibold transition-colors shadow-md">
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 bg-[#002060] rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#FF5A2A]/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 md:w-2/3 mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Need help planning your perfect stay?</h3>
            <p className="text-white/80 text-lg max-w-2xl">Our travel experts can help you find accommodations that match your style and budget anywhere in Himachal.</p>
          </div>
          <div className="relative z-10">
            <button className="bg-[#FF5A2A] hover:bg-white hover:text-[#FF5A2A] text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg whitespace-nowrap">
              Contact an Expert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
