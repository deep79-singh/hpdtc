import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Compass, Shield, Clock, Phone } from 'lucide-react';

const PlanYourTrip = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const categories = [
    { title: 'Best Time to Visit', icon: Calendar, desc: 'Find the perfect season for your Himachal adventure.' },
    { title: 'Top Destinations', icon: MapPin, desc: 'Explore Shimla, Manali, Spiti and more.' },
    { title: 'Travel Circuits', icon: Compass, desc: 'Curated routes for a complete mountain experience.' },
    { title: 'Safety Guidelines', icon: Shield, desc: 'Stay safe with our local travel advisories.' },
    { title: 'Local Transport', icon: Clock, desc: 'Book taxis, buses and find the best ways to get around.' },
    { title: 'Help Desk', icon: Phone, desc: '24/7 support for all your travel queries.' },
  ];

  return (
    <div className="plan-your-trip bg-white pt-5">
      {/* Hero Section */}
      <section className="bg-h-blue text-white py-5 mb-5 overflow-hidden position-relative">
        <Container>
          <motion.div {...fadeInUp}>
            <h1 className="display-3 font-serif fw-bold mb-4">Plan Your Perfect Trip</h1>
            <p className="lead mb-4 opacity-75 max-w-2xl">
              From the snow-capped peaks of Spiti to the lush valleys of Kullu, 
              we help you create memories that last a lifetime.
            </p>
            <Button className="btn-h-saffron px-4 py-2 rounded-pill fw-bold">
              Start Building Itinerary
            </Button>
          </motion.div>
        </Container>
        {/* Decorative elements using h-saffron */}
        <div 
          className="position-absolute bottom-0 end-0 bg-h-saffron opacity-25 rounded-circle"
          style={{ width: '300px', height: '300px', transform: 'translate(50%, 50%)' }}
        ></div>
      </section>

      {/* Categories Grid */}
      <Container className="mb-5 pb-5">
        <Row className="g-4">
          {categories.map((cat, idx) => (
            <Col key={idx} md={6} lg={4}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-100 border-0 shadow-sm hover:shadow-lg transition-all duration-300 rounded-4">
                  <Card.Body className="p-4">
                    <div className="bg-h-blue bg-opacity-10 text-h-blue p-3 rounded-3 d-inline-block mb-4">
                      <cat.icon size={32} />
                    </div>
                    <Card.Title className="fw-bold text-h-dark h4 mb-3">{cat.title}</Card.Title>
                    <Card.Text className="text-muted line-height-relaxed">
                      {cat.desc}
                    </Card.Text>
                    <Button variant="link" className="text-h-saffron fw-bold p-0 mt-3 text-decoration-none transition-all hover:gap-2 d-flex align-items-center">
                      Learn More <span className="ms-1">→</span>
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Featured Experience Section */}
      <section className="py-5 bg-h-dark text-white text-center">
        <Container>
          <h2 className="display-5 font-serif fw-bold mb-4">Why Himachal?</h2>
          <Row className="justify-content-center">
            <Col lg={8}>
              <p className="lead opacity-75 mb-5">
                Nestled in the lap of the Himalayas, Himachal Pradesh is a paradise for nature lovers, 
                adventure seekers, and those looking for spiritual peace. Our curated planning 
                tools ensure you don't miss a single breathtaking moment.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <div className="text-center px-4">
                  <h3 className="h1 fw-bold text-h-saffron mb-2">12</h3>
                  <p className="small text-uppercase tracking-wider opacity-50">Districts</p>
                </div>
                <div className="vr opacity-25"></div>
                <div className="text-center px-4">
                  <h3 className="h1 fw-bold text-h-saffron mb-2">500+</h3>
                  <p className="small text-uppercase tracking-wider opacity-50">Attractions</p>
                </div>
                <div className="vr opacity-25"></div>
                <div className="text-center px-4">
                  <h3 className="h1 fw-bold text-h-saffron mb-2">10k+</h3>
                  <p className="small text-uppercase tracking-wider opacity-50">Happy Travelers</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default PlanYourTrip;
