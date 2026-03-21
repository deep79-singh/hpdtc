import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Flame, Mountain, Leaf, Landmark } from "lucide-react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CATEGORIES = {
  religious: {
    id: "religious",
    title: "Religious",
    icon: Flame,
    position: "top-[20%] left-[8%] md:top-[28%] md:left-[12%]",
    cards: [
      { title: "Monasteries", image: "#" },
      { title: "Temples", image: "#" },
      { title: "Gurudwaras", image: "#" },
      { title: "Mosques", image: "#" },
    ],
  },
  culture: {
    id: "culture",
    title: "Culture",
    icon: Landmark,
    position: "top-[20%] right-[8%] md:top-[28%] md:right-[12%]",
    cards: [
      { title: "Kangra Fort", image: "#" },
      { title: "Key Monastery", image: "#" },
      { title: "Naggar Castle", image: "#" },
      { title: "Gorton Castle", image: "#" },
    ],
  },
  adventure: {
    id: "adventure",
    title: "Adventure",
    icon: Mountain,
    position: "top-[75%] left-[9%] md:top-[70%] md:left-[15%]",
    cards: [
      { title: "Bir Billing", image: "#" },
      { title: "Rohtang Pass", image: "#" },
      { title: "Triund Trek", image: "#" },
      { title: "Solang Valley", image: "#" },
    ],
  },
  wellness: {
    id: "wellness",
    title: "Wellness",
    icon: Leaf,
    position: "top-[75%] right-[9%] md:top-[70%] md:right-[15%]",
    cards: [
      { title: "Vashisht Springs", image: "#" },
      { title: "Tirthan Retreats", image: "#" },
      { title: "Yoga & Meditation", image: "#" },
      { title: "Mashobra Spa", image: "#" },
    ],
  },
};

export default function Hero() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (id) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveCategory(id);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveCategory(null);
    }, 150);
  };

  return (
    <div className="position-relative vh-100 w-100 overflow-hidden">
      {/* Background Image/Video */}
      <div className="position-absolute top-0 start-0 w-100 h-100 z-0">
        <img
          src="#"
          alt="Spiti Valley, Himachal Pradesh"
          className="w-100 h-100 object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50" />
      </div>

      {/* Interactive Category Buttons (Floating UI) */}
      <motion.div
        className="position-absolute inset-0 z-40 pointer-events-none"
        initial={false}
        animate={{
          opacity: activeCategory ? 0 : 1,
          scale: activeCategory ? 0.95 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {Object.values(CATEGORIES).map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <motion.button
              key={cat.id}
              onMouseEnter={() => handleMouseEnter(cat.id)}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                if (isActive) setActiveCategory(null);
                else handleMouseEnter(cat.id);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`absolute bg-h-dark pointer-events-auto d-flex align-items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-pill border border-white/20 bg-white/10 hover:bg-white/30 backdrop-blur-md backdrop-saturate-150 text-white transition-all duration-300 ${cat.position}`}
            >
              <Icon size={18} className="text-white/90" />
              <span className="fw-medium tracking-wide text-sm md:text-base">
                {cat.title}
              </span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Glassmorphism Overlay System */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="position-absolute inset-0 z-50 d-flex align-items-center justify-content-center bg-white/20 backdrop-blur-2xl backdrop-saturate-180 pointer-events-auto"
            onMouseEnter={() => handleMouseEnter(activeCategory)}
            onMouseLeave={handleMouseLeave}
            onClick={() => setActiveCategory(null)}
          >
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 p-4 max-w-6xl w-full mx-auto"
              style={{ marginTop: "4rem" }}
            >
              {CATEGORIES[activeCategory].cards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative overflow-hidden rounded-2xl border border-white/40 bg-white/40 backdrop-blur-md backdrop-saturate-150 aspect-[3/4] md:aspect-[4/5] group cursor-pointer shadow-xl"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 bg-gray-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent opacity-90" />
                  <div className="position-absolute bottom-0 start-0 p-3 p-md-4 w-100 text-left">
                    <h3 className="text-slate-900 font-serif text-base md:text-xl fw-bold m-0 opacity-90 transition-opacity group-hover:opacity-100 drop-shadow-sm">
                      {card.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Core Typography & Book Now Button */}
      <Container className="position-relative h-100 d-flex flex-column align-items-center justify-content-center text-center pt-5 z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-100 pointer-events-auto"
          style={{ maxWidth: "800px" }}
        >
          <span
            className="text-h-saffron fw-semibold text-uppercase small mb-3 d-block"
            style={{ letterSpacing: "0.1em" }}
          >
            Devbhumi - Land of the Gods
          </span>
          <h1 className="display-1 font-serif fw-bold text-white mb-4">
            Find Your <br />
            <span className="fst-italic fw-light">Altitude.</span>
          </h1>
          <p
            className="lead text-dark mx-auto mb-5 fw-light"
            style={{ maxWidth: "600px" }}
          >
            From the snow-capped peaks of Spiti to the lush valleys of Kangra,
            discover the untamed beauty of Himachal Pradesh.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="d-flex justify-content-center mt-4 gap-3 gap-md-4 flex-column flex-sm-row"
          >
            {/* The existing Book Now button with subtle Framer Motion shimmer/lift upgrade */}
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#F97316] hover:bg-[#fb923c] text-white hover:text-zinc-900! rounded-pill fw-bold shadow-lg position-relative overflow-hidden group   backdrop-blur-md border border-white/50 transition-colors duration-200"
              style={{
                padding: "14px 32px",
                fontSize: "16px",
                border: "none",
              }}
            >
              <span className="position-relative z-10 d-block">Book Now</span>
              <div
                className="position-absolute top-0 start-0 w-100 h-100 -translate-x-full group-hover:animate-shimmer transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent"
                style={{
                  transform: "skewX(-20deg) translateX(-150%)",
                  transition: "transform 0.5s ease",
                }}
              />

            </motion.button>

            <motion.button
              onClick={() => {
                navigate("/weather");
                window.scrollTo(0, 0);
              }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#F97316] hover:bg-[#fb923c] text-white hover:text-zinc-900! rounded-pill fw-bold shadow-lg position-relative overflow-hidden group backdrop-blur-md border border-white/50 transition-colors duration-200"
              style={{
                padding: "14px 32px",
                fontSize: "16px",
              }}
            >
              <span className="position-relative z-10 d-block">
                Check Weather
              </span>
              <div
                className="position-absolute top-0 start-0 w-100 h-100 -translate-x-full group-hover:animate-shimmer transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent"
                style={{
                  transform: "skewX(-20deg) translateX(-150%)",
                  transition: "transform 0.5s ease",
                }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
