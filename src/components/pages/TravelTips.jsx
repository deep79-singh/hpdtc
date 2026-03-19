import React from 'react';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Cloud, Briefcase, Heart, ShieldAlert, Zap, Globe } from 'lucide-react';

const TravelTips = () => {
  const tips = [
    {
      title: 'Weather & Clothing',
      icon: Cloud,
      color: 'blue',
      content: 'Weather in Himachal can change rapidly. Always carry layers. Heavy woolens are needed for winters (Oct-Mar), while light woolens or jackets are sufficient for summers (Apr-Jun). Rain gear is essential during monsoon (Jul-Sep).'
    },
    {
      title: 'Packing Essentials',
      icon: Briefcase,
      color: 'saffron',
      content: 'Carry a sturdy pair of walking shoes, a first-aid kit, power banks, and UV protection (sunglasses/sunscreen) as the sun can be very strong at high altitudes. Don\'t forget a reusable water bottle to reduce plastic waste.'
    },
    {
      title: 'Health & Safety',
      icon: Heart,
      color: 'green',
      content: 'Acclimatization is key when traveling to high altitudes like Spiti or Rohtang. Stay hydrated and avoid strenuous activity on your first day. Carry basic medicines for motion sickness and altitude sickness.'
    },
    {
      title: 'Permits & Documents',
      icon: ShieldAlert,
      color: 'dark',
      content: 'Certain areas near the international border (like Spiti and Kinnaur) require Inner Line Permits for foreigners. Indian nationals only need a valid ID (Aadhar/Passport). Rohtang Pass also requires a special permit for vehicles.'
    }
  ];

  const getColorClass = (color) => {
    switch (color) {
      case 'blue': return 'text-h-blue bg-h-blue bg-opacity-10';
      case 'saffron': return 'text-h-saffron bg-h-saffron bg-opacity-10';
      case 'green': return 'text-h-green bg-h-green bg-opacity-10';
      case 'dark': return 'text-h-dark bg-h-dark bg-opacity-10';
      default: return 'text-h-blue bg-h-blue bg-opacity-10';
    }
  };

  return (
    <div className="travel-tips bg-white pt-5">
      {/* Hero Section */}
      <section className="py-5 mb-5 bg-h-saffron text-white overflow-hidden position-relative">
        <div className="position-absolute top-0 end-0 w-50 h-100 bg-white opacity-10" style={{ transform: 'skewX(-20deg) translateX(50%)' }}></div>
        <Container className="position-relative z-1">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="display-4 font-serif fw-bold mb-3">Travel Tips</h1>
            <p className="lead max-w-2xl opacity-90">
              Essential advice and practical information to make your journey through 
              Himachal Pradesh smooth, safe, and unforgettable.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Quick Tips Cards */}
      <Container className="mb-5">
        <Row className="g-4">
          {tips.map((tip, idx) => (
            <Col key={idx} md={6} lg={3}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-100 border-0 shadow-sm rounded-4 text-center p-3">
                  <div className={`mx-auto p-4 rounded-circle mb-4 ${getColorClass(tip.color)}`} style={{ width: 'fit-content' }}>
                    <tip.icon size={32} />
                  </div>
                  <h5 className="fw-bold text-h-dark mb-3">{tip.title}</h5>
                  <p className="small text-muted mb-0">{tip.content}</p>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Detailed FAQ Section */}
      <section className="py-5 bg-light mb-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-6 font-serif fw-bold text-h-dark">Frequently Asked Questions</h2>
            <div className="bg-h-saffron mx-auto" style={{ width: '60px', height: '4px' }}></div>
          </div>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Accordion flush className="shadow-sm rounded-4 overflow-hidden border">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Is Himachal safe for solo travelers?</Accordion.Header>
                  <Accordion.Body>
                    Absolutely! Himachal is known for its friendly and hospitable locals. It is one of the safest states in India for solo male and female travelers. However, common travel sense and safety precautions apply.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Can I use credit/debit cards in Himachal?</Accordion.Header>
                  <Accordion.Body>
                    In major towns like Shimla, Manali, and Dharamshala, cards are widely accepted in hotels and restaurants. However, in smaller villages and tribal areas, cash is king. Always carry enough local currency (INR) and keep small change handy.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Is mobile connectivity available everywhere?</Accordion.Header>
                  <Accordion.Body>
                    Airtel and Jio have good coverage in most urban areas. BSNL is often the only network that works in remote parts of Lahaul and Spiti. In high-altitude areas, signal can be intermittent or non-existent.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>What about local etiquette and customs?</Accordion.Header>
                  <Accordion.Body>
                    Respect the local culture. Dress modestly while visiting temples and religious sites. Always ask before taking photos of people or their property. Using plastic is banned in the state, so avoid littering.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sustainable Travel Banner */}
      <Container className="mb-5 pb-5">
        <motion.div 
          className="bg-h-green text-white p-5 rounded-4 position-relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="position-relative z-1 d-flex flex-column flex-md-row align-items-center gap-5">
             <div className="bg-white bg-opacity-20 p-4 rounded-circle">
                <Globe size={64} />
             </div>
             <div>
                <h3 className="display-6 font-serif fw-bold mb-3">Be a Responsible Traveler</h3>
                <p className="lead opacity-75 mb-0">
                   Himachal's ecology is fragile. Help us preserve it by avoiding single-use plastics, 
                   respecting wildlife, and supporting local artisans. Together, we can keep the 
                   Himalayas pristine for generations to come.
                </p>
             </div>
          </div>
          <div className="position-absolute bottom-0 start-0 w-100 h-100 bg-white opacity-5" style={{ transform: 'translate(-50%, 50%) scale(2)' }}></div>
        </motion.div>
      </Container>
    </div>
  );
};

export default TravelTips;
