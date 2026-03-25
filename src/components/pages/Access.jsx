import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MdFlight,
  MdDirectionsBus,
  MdDirectionsRailway,
  MdLocationOn,
  MdAirplanemodeActive,
  MdTrain,
  MdLocalTaxi,
} from 'react-icons/md';
import {
  FaRoad,
  FaMountain,
  FaBus,
  FaTrain,
  FaPlane,
  FaMapMarkerAlt,
  FaCar,
} from 'react-icons/fa';

const Access = () => {
  const [activeTab, setActiveTab] = useState('air');

  const hubs = [
    {
      name: 'Shimla',
      air: 'Jubarhatti Airport (22 km)',
      rail: 'Kalka–Shimla Toy Train (Heritage Line)',
      road: 'NH5 — well-connected to Chandigarh & Delhi',
    },
    {
      name: 'Manali',
      air: 'Bhuntar Airport, Kullu (50 km)',
      rail: 'Chandigarh (310 km) / Jogindernagar (160 km)',
      road: 'NH3 — scenic highway via Mandi',
    },
    {
      name: 'Dharamshala',
      air: 'Gaggal Airport (15 km)',
      rail: 'Pathankot (90 km) via narrow gauge',
      road: 'NH154 — direct route from Pathankot',
    },
    {
      name: 'Dalhousie',
      air: 'Pathankot Airport (70 km)',
      rail: 'Pathankot Railway Station (80 km)',
      road: 'NH154A — winding mountain road',
    },
    {
      name: 'Spiti Valley',
      air: 'Bhuntar Airport (230 km)',
      rail: 'Shimla (via Kinnaur, seasonal)',
      road: 'NH505 — open May to October only',
    },
  ];

  const tabs = [
    { key: 'air', label: 'By Air', Icon: FaPlane },
    { key: 'rail', label: 'By Rail', Icon: FaTrain },
    { key: 'road', label: 'By Road', Icon: FaBus },
  ];

  const tabContent = {
    air: {
      heading: 'Fly Into the Himalayas',
      intro:
        'Himachal Pradesh is served by three domestic airports. Flights operate from Delhi, Mumbai, and Chandigarh, making it easier than ever to reach the mountains.',
      items: [
        {
          Icon: MdAirplanemodeActive,
          title: 'Gaggal Airport — Dharamshala',
          desc: 'The state\'s busiest airport, 15 km from Dharamshala. Connects Kangra Valley with Delhi daily.',
          color: 'blue',
        },
        {
          Icon: MdAirplanemodeActive,
          title: 'Bhuntar Airport — Kullu-Manali',
          desc: 'Gateway to Kullu, Manali, and Kasol. Located 50 km from Manali in the Beas river valley.',
          color: 'saffron',
        },
        {
          Icon: MdAirplanemodeActive,
          title: 'Jubarhatti Airport — Shimla',
          desc: '22 km from Shimla, offering seasonal connectivity to Delhi with breathtaking mountain approaches.',
          color: 'green',
        },
      ],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPDK1QahosfFUs_psvd-97kXJeLIDCOIUSaQ&s',
      imgAlt: 'Airplane flying over mountains',
    },
    rail: {
      heading: 'The Iconic Train Journey',
      intro:
        'Himachal Pradesh isn\'t directly served by broad-gauge trains, but several nearby railheads provide convenient access. The Kalka–Shimla railway is a UNESCO World Heritage Site and a journey of a lifetime.',
      items: [
        {
          Icon: MdTrain,
          title: 'Kalka → Shimla (Heritage Line)',
          desc: '96 km of pure mountain magic with 103 tunnels, over 800 bridges, and countless breathtaking valleys.',
          color: 'blue',
        },
        {
          Icon: MdTrain,
          title: 'Pathankot Junction',
          desc: 'Major railhead for Dharamshala (90 km), Dalhousie (80 km), and Chamba. Well-connected from Delhi.',
          color: 'saffron',
        },
        {
          Icon: MdTrain,
          title: 'Chandigarh / Ambala',
          desc: 'Nearest broad-gauge hubs for Shimla (115 km) and Manali (310 km). All major trains stop here.',
          color: 'green',
        },
      ],
      img: 'https://www.hoteldekho.com/storage/img/tourattraction/1646027440kalka_shimla_train.jpg',
      imgAlt: 'Kalka Shimla Toy Train',
    },
    road: {
      heading: 'Drive Through Paradise',
      intro:
        'A network of National and State Highways connects Himachal to the rest of India. HPTDC and HRTC operate deluxe bus services from Delhi, Chandigarh, and Amritsar, while self-driving offers unmatched freedom.',
      items: [
        {
          Icon: FaBus,
          title: 'HPTDC / HRTC Buses',
          desc: 'Comfortable, air-conditioned Volvo and ordinary buses from Delhi, Chandigarh, Amritsar, and Punjab to all major hill stations.',
          color: 'blue',
        },
        {
          Icon: FaCar,
          title: 'Self-Drive via National Highways',
          desc: 'NH3, NH5, NH154 — smooth, scenic roads through gorges and forests. Best done in a 4WD for higher altitudes.',
          color: 'saffron',
        },
        {
          Icon: MdLocalTaxi,
          title: 'Local Taxis & Shared Cabs',
          desc: 'Reliable, metered taxis and shared cabs are available at every major junction for inter-town and last-mile travel.',
          color: 'green',
        },
      ],
      img: 'https://as1.ftcdn.net/jpg/04/21/49/34/1000_F_421493412_xgZVXqqiva8SaINHMOlbQ1XqUmhXpa5d.jpg',
      imgAlt: 'Mountain road in Himachal',
    },
  };

  const getIconColor = (color) => {
    switch (color) {
      case 'blue': return { iconBg: 'rgba(30,58,138,0.1)', iconText: 'var(--primary)' };
      case 'saffron': return { iconBg: 'rgba(249,115,22,0.1)', iconText: 'var(--accent)' };
      case 'green': return { iconBg: 'rgba(6,78,59,0.1)', iconText: 'var(--secondary)' };
      default: return { iconBg: 'rgba(30,58,138,0.1)', iconText: 'var(--primary)' };
    }
  };

  const active = tabContent[activeTab];

  return (
    <div className="access-page min-vh-100" style={{ backgroundColor: 'var(--background)' }}>

      {/* ── Hero ── */}
      <section
        className="position-relative overflow-hidden d-flex align-items-center"
        style={{ minHeight: '420px', background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)' }}
      >
        {/* Decorative blobs */}
        <div
          className="position-absolute rounded-circle"
          style={{ width: 400, height: 400, background: 'rgba(255,255,255,0.06)', top: '-100px', right: '-80px' }}
        />
        <div
          className="position-absolute rounded-circle"
          style={{ width: 250, height: 250, background: 'rgba(255,255,255,0.06)', bottom: '-60px', left: '-60px' }}
        />

        <Container className="position-relative z-1 py-5 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-uppercase fw-bold letter-spacing-2 mb-3 d-block" style={{ opacity: 0.8, letterSpacing: '3px', fontSize: '0.85rem' }}>
              Getting Here
            </span>
            <h1 className="display-3 font-serif fw-bold mb-4">Access &amp; Connectivity</h1>
            <p className="lead mx-auto" style={{ maxWidth: '600px', opacity: 0.85 }}>
              Reaching Himachal Pradesh is an adventure in itself. By air, rail, or road — 
              the mountains are never far away.
            </p>

            {/* Quick stat pills */}
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-5">
              {[
                { icon: MdFlight, text: '3 Domestic Airports' },
                { icon: MdDirectionsRailway, text: 'UNESCO Heritage Railway' },
                { icon: MdDirectionsBus, text: 'Daily HPTDC Bus Services' },
              ].map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className="d-flex align-items-center gap-2 px-4 py-2 rounded-pill"
                  style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.25)' }}
                >
                  <Icon size={18} />
                  <span className="small fw-semibold">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── Transport Tabs ── */}
      <Container className="py-5">
        {/* Tab Switcher */}
        <div className="d-flex justify-content-center mb-5">
          <div
            className="p-1 rounded-pill d-flex gap-1"
            style={{ background: 'var(--bs-white)', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.06)' }}
          >
            {tabs.map(({ key, label, Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className="btn d-flex align-items-center gap-2 px-4 py-2 rounded-pill fw-bold transition-all"
                style={{
                  background: activeTab === key ? 'var(--primary)' : 'transparent',
                  color: activeTab === key ? 'white' : 'var(--text)',
                  border: 'none',
                  transition: 'all 0.25s ease',
                  fontSize: '0.9rem',
                }}
              >
                <Icon size={17} />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            <Row className="g-5 align-items-center">
              {/* Image */}
              <Col lg={5} className={activeTab === 'rail' ? 'order-lg-2' : ''}>
                <motion.img
                  src={active.img}
                  alt={active.imgAlt}
                  className="img-fluid rounded-4 w-100"
                  style={{ objectFit: 'cover', maxHeight: '420px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </Col>

              {/* Info */}
              <Col lg={7} className={activeTab === 'rail' ? 'order-lg-1' : ''}>
                <h2 className="display-6 font-serif fw-bold mb-3" style={{ color: 'var(--text)' }}>
                  {active.heading}
                </h2>
                <p className="text-muted mb-4 lead" style={{ fontSize: '1rem' }}>
                  {active.intro}
                </p>

                <div className="d-flex flex-column gap-3">
                  {active.items.map(({ Icon, title, desc, color }, i) => {
                    const { iconBg, iconText } = getIconColor(color);
                    return (
                      <motion.div
                        key={i}
                        className="d-flex gap-3 p-3 rounded-4"
                        style={{
                          background: 'white',
                          boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                          border: '1px solid rgba(0,0,0,0.05)',
                          transition: 'transform 0.2s, box-shadow 0.2s',
                          cursor: 'default',
                          minHeight: '90px',
                        }}
                        whileHover={{ y: -3, boxShadow: '0 8px 28px rgba(0,0,0,0.1)' }}
                      >
                        <div
                          className="d-flex align-items-center justify-content-center flex-shrink-0 rounded-3"
                          style={{ width: 52, height: 52, background: iconBg, color: iconText }}
                        >
                          <Icon size={24} />
                        </div>
                        <div>
                          <h6 className="fw-bold mb-1">{title}</h6>
                          <p className="small text-muted mb-0">{desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </Col>
            </Row>
          </motion.div>
        </AnimatePresence>
      </Container>

      {/* ── Connectivity at a Glance ── */}
      <section className="py-5 bg-white border-top border-bottom">
        <Container>
          <div className="text-center mb-5">
            <span className="text-uppercase fw-bold d-block mb-2" style={{ color: 'var(--accent)', letterSpacing: '3px', fontSize: '0.8rem' }}>
              Quick Reference
            </span>
            <h2 className="display-6 font-serif fw-bold" style={{ color: 'var(--text)' }}>Connectivity at a Glance</h2>
            <div className="mx-auto mt-3 rounded-pill" style={{ width: 56, height: 4, background: 'var(--primary)' }} />
          </div>

          {/* Cards grid instead of table — fully responsive */}
          <Row className="g-4">
            {hubs.map((hub, idx) => (
              <Col key={idx} lg={4} md={6} className="d-flex flex-column">
                <motion.div
                  className="h-100"
                  style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <Card
                    className="border-0 rounded-4 overflow-hidden"
                    style={{
                      flex: 1,
                      minHeight: '260px',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
                    }}
                  >
                    {/* Card header */}
                    <div
                      className="d-flex align-items-center gap-2 px-4 py-3"
                      style={{ background: 'var(--primary)' }}
                    >
                      <MdLocationOn size={20} color="white" />
                      <span className="fw-bold text-white">{hub.name}</span>
                    </div>

                    <Card.Body className="p-4 d-flex flex-column gap-3">
                      <div className="d-flex gap-3 align-items-start">
                        <MdFlight size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: 2 }} />
                        <div>
                          <p className="small fw-semibold mb-0" style={{ color: 'var(--text)' }}>By Air</p>
                          <p className="small text-muted mb-0">{hub.air}</p>
                        </div>
                      </div>
                      <div className="d-flex gap-3 align-items-start">
                        <MdDirectionsRailway size={20} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} />
                        <div>
                          <p className="small fw-semibold mb-0" style={{ color: 'var(--text)' }}>By Rail</p>
                          <p className="small text-muted mb-0">{hub.rail}</p>
                        </div>
                      </div>
                      <div className="d-flex gap-3 align-items-start">
                        <MdDirectionsBus size={20} style={{ color: 'var(--secondary)', flexShrink: 0, marginTop: 2 }} />
                        <div>
                          <p className="small fw-semibold mb-0" style={{ color: 'var(--text)' }}>By Road</p>
                          <p className="small text-muted mb-0">{hub.road}</p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ── Travel Tips Strip ── */}
      <section className="py-5" style={{ background: 'var(--background)' }}>
        <Container>
          <Row className="g-4 justify-content-center">
            {[
              { Icon: FaRoad, title: 'Best Season to Drive', tip: 'April–June and September–October offer the clearest mountain passes and safest driving conditions.', color: 'var(--primary)' },
              { Icon: FaMountain, title: 'High-Altitude Routes', tip: 'Spiti and Lahaul roads (NH505) are only open May–October. Always check BRO advisories before departing.', color: 'var(--accent)' },
              { Icon: FaMapMarkerAlt, title: 'Download Offline Maps', tip: 'Mobile networks can be weak in tribal areas. Download offline maps (Google Maps or Maps.me) before you set out.', color: 'var(--secondary)' },
            ].map(({ Icon, title, tip, color }, i) => (
              <Col key={i} lg={4} md={6} className="d-flex flex-column">
                <motion.div
                  className="rounded-4 p-4 h-100"
                  style={{
                    flex: 1,
                    minHeight: '190px',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'white',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                    border: '1px solid rgba(0,0,0,0.05)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div
                      className="rounded-3 d-flex align-items-center justify-content-center"
                      style={{ width: 48, height: 48, background: color + '18', color }}
                    >
                      <Icon size={22} />
                    </div>
                    <h6 className="fw-bold mb-0">{title}</h6>
                  </div>
                  <p className="small text-muted mb-0">{tip}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, var(--text) 0%, #1a3a6e 100%)' }}>
        <Container>
          <motion.div
            className="text-white text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="display-5 font-serif fw-bold mb-3">Start Your Journey Today</h3>
            <p className="lead mb-5 mx-auto" style={{ maxWidth: 520, opacity: 0.8 }}>
              No matter how you choose to arrive, the mountains are always ready to welcome you
              with open arms and breathtaking views.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a
                href="https://hptdc.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn px-5 py-3 rounded-pill fw-bold"
                style={{ background: 'var(--accent)', color: 'white', border: 'none' }}
              >
                Book with HPTDC
              </a>
              <a
                href="https://www.hrtchp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light px-5 py-3 rounded-pill fw-bold"
              >
                HRTC Bus Tickets
              </a>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default Access;

