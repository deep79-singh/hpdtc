import React from 'react';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  FaCloudSun, 
  FaLuggageCart, 
  FaFileContract, 
  FaLeaf, 
  FaHandsHelping,
  FaCameraRetro,
  FaExclamationTriangle,
  FaFirstAid
} from 'react-icons/fa';
import { MdHealthAndSafety, MdSecurity, MdOutlineNoFood } from 'react-icons/md';

const TravelTips = () => {
  const tips = [
    {
      title: 'Weather & Seasons',
      icon: FaCloudSun,
      color: 'blue',
      content: 'Himachal\'s weather is diverse. Lower regions are warm, while high altitudes stay cool even in summer. Always check forecasts and pack layers—heavy woolens for winter (Oct-Mar) and light jackets for summer.'
    },
    {
      title: 'Permits & Documents',
      icon: FaFileContract,
      color: 'saffron',
      content: 'Foreigners need a valid VISA. Special Inner Line Permits are required for restricted areas in Kinnaur and Spiti (available at SDM offices). Always carry original ID proof for hotel check-ins and travel permits.'
    },
    {
      title: 'Local Etiquette',
      icon: FaHandsHelping,
      color: 'green',
      content: 'Respect the hills. Remove shoes before entering temples, dress modestly, and always ask before photographing locals. Use "Namaste" – a warm greeting goes a long way with the hospitable locals.'
    },
    {
      title: 'Mountain Safety',
      icon: FaExclamationTriangle,
      color: 'red',
      content: 'Nature is powerful. Avoid cliff edges and stay away from river banks – Himachal\'s river currents are deceptively strong and dangerous. Trust local advice over strangers and stay on marked trails.'
    },
    {
      title: 'Eco-Travel',
      icon: FaLeaf,
      color: 'green',
      content: 'Himachal is a non-biodegradable zone. Polythene bags are strictly banned. Help us keep the Himalayas pristine by avoiding single-use plastics and following the "Leave No Trace" principle.'
    },
    {
      title: 'Health & Hygiene',
      icon: MdHealthAndSafety,
      color: 'blue',
      content: 'Acclimatize gradually at high altitudes. Stay hydrated, avoid alcohol during initial transit, and don\'t accept food or drinks from strangers. Shop at Government Emporiums for authentic, safe local products.'
    }
  ];

  const getColorStyles = (color) => {
    switch (color) {
      case 'blue': return { text: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/20' };
      case 'saffron': return { text: 'text-accent', bg: 'bg-accent/10', border: 'border-accent/20' };
      case 'green': return { text: 'text-secondary', bg: 'bg-secondary/10', border: 'border-secondary/20' };
      case 'red': return { text: 'text-danger', bg: 'bg-danger/10', border: 'border-danger/20' };
      default: return { text: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/20' };
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="travel-tips-page bg-light min-vh-100">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-h-blue bg-primary">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        </div>
        
        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="display-3 font-serif fw-bold text-white mb-4">Travel Smart in the Himalayas</h1>
            <p className="lead text-white/90 max-w-3xl mx-auto px-3">
              Essential advice and practical information straight from Himachal Pradesh Tourism 
              to ensure your journey is safe, respectful, and unforgettable.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Quick Tips Grid */}
      <Container className="-mt-20 relative z-20 mb-5">
        <motion.div 
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {tips.map((tip, idx) => {
            const styles = getColorStyles(tip.color);
            return (
              <Col key={idx} lg={4} md={6} className="d-flex flex-column mb-4">
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
                >
                  <Card 
                    className="border-0 shadow-lg rounded-4 overflow-hidden group"
                    style={{ minHeight: '320px', flex: 1, display: 'flex', flexDirection: 'column' }}
                  >
                    <Card.Body className="p-4 d-flex flex-column">
                      <div className={`w-14 h-14 rounded-2xl ${styles.bg} ${styles.text} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300`}>
                        <tip.icon className="text-3xl" />
                      </div>
                      <h4 className="fw-bold mb-3 font-serif">{tip.title}</h4>
                      <p className="text-muted leading-relaxed mb-0">
                        {tip.content}
                      </p>
                    </Card.Body>
                    <div className={`h-1.5 w-0 group-hover:w-full transition-all duration-500 bg-${tip.color === 'blue' ? 'primary' : tip.color === 'saffron' ? 'accent' : tip.color === 'green' ? 'secondary' : 'danger'}`}></div>
                  </Card>
                </motion.div>
              </Col>
            );
          })}
        </motion.div>
      </Container>

      {/* FAQ & Guidelines Section */}
      <section className="py-5 bg-white border-top">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={5}>
              <div className="pe-lg-4">
                <span className="text-accent fw-bold tracking-widest uppercase mb-2 d-block">Supportive Information</span>
                <h2 className="display-5 font-serif fw-bold mb-4">Practical Guidelines for Your Visit</h2>
                <p className="text-muted mb-4">
                  Planning a trip to Himachal involves more than just booking a hotel. 
                  Understanding the local landscape and regulations ensures a hassle-free experience.
                </p>
                
                <div className="space-y-4">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-circle text-primary">
                      <MdSecurity size={20} />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Government Registered Only</h6>
                      <p className="small text-muted">Stay only in hotels or guesthouses registered with the Department of Tourism.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-accent/10 p-2 rounded-circle text-accent">
                      <MdOutlineNoFood size={20} />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Stranger Danger</h6>
                      <p className="small text-muted">Do not eat items offered by strangers on trains or roads to avoid potential health risks.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={7}>
              <Accordion defaultActiveKey="0" className="custom-accordion">
                <Accordion.Item eventKey="0" className="border-0 shadow-sm mb-3 rounded-3 overflow-hidden">
                  <Accordion.Header className="fw-bold font-serif">What is the best way to handle money?</Accordion.Header>
                  <Accordion.Body>
                    Exchange money only through authorized banks or foreign exchange outlets and always insist on a receipt. While major towns accept cards and UPI, carry sufficient cash for remote areas and tribal circuits.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="border-0 shadow-sm mb-3 rounded-3 overflow-hidden">
                  <Accordion.Header className="fw-bold font-serif">What about visiting temples and religious sites?</Accordion.Header>
                  <Accordion.Body>
                    Always remove shoes before entering. It is customary to cover your head when entering Gurudwaras or Dargahs. Dress modestly (shoulders and knees covered) to respect local sentiments.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="border-0 shadow-sm mb-3 rounded-3 overflow-hidden">
                  <Accordion.Header className="fw-bold font-serif">Are there any specific bans I should know about?</Accordion.Header>
                  <Accordion.Body>
                    Smoking in public places is strictly prohibited and carries fines. Polythene bags are also banned statewide. Help us keep Himachal clean by using reusable bags.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="border-0 shadow-sm mb-3 rounded-3 overflow-hidden">
                  <Accordion.Header className="fw-bold font-serif">What should I buy from Himachal?</Accordion.Header>
                  <Accordion.Body>
                    Shop at HP Government Emporiums for authentic handicrafts, shawls, and tea. Avoid buying antiques older than 100 years or products made from endangered wildlife as it is illegal.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Conservation Banner */}
      <Container className="py-5">
        <motion.div 
          className="bg-secondary p-5 rounded-4 text-white text-center shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Decorative element */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full"></div>
          
          <div className="relative z-1">
            <FaLeaf className="mx-auto text-5xl mb-4" />
            <h3 className="display-6 font-serif fw-bold mb-3">Be a Responsible Traveler</h3>
            <p className="lead opacity-90 mb-0 max-w-2xl mx-auto">
              The ecology of Himachal is fragile. Join us in preserving the pristine beauty of the Himalayas 
              for generations to come. Your respect for nature is our greatest pride.
            </p>
          </div>
        </motion.div>
      </Container>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-accordion .accordion-button:not(.collapsed) {
          background-color: var(--primary);
          color: white;
          box-shadow: none;
        }
        .custom-accordion .accordion-button:focus {
          box-shadow: none;
          border-color: rgba(0,0,0,.125);
        }
        .custom-accordion .accordion-button::after {
          filter: grayscale(1) invert(1);
        }
        .custom-accordion .accordion-button.collapsed::after {
          filter: none;
        }
      `}} />
    </div>
  );
};

export default TravelTips;
