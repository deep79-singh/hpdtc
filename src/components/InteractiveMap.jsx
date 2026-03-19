import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Map as MapIcon, ExternalLink } from 'lucide-react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

export default function InteractiveMap() {
  const [originInput, setOriginInput] = useState('');
  const [destInput, setDestInput] = useState('');
  const defaultMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546059.088195844!2d75.12946221162602!3d31.8157778918231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390453c367f901f7%3A0x7cfe04c5af620d!2sHimachal%20Pradesh!5e1!3m2!1sen!2sin!4v1710899478833!5m2!1sen!2sin";
  const [mapUrl, setMapUrl] = useState(defaultMapUrl);

  const handlePlanTour = (e) => {
    e.preventDefault();
    if (originInput && destInput) {
       // Updates the iframe directly using the embeddable maps URL format
       const url = `https://maps.google.com/maps?saddr=${encodeURIComponent(originInput)}&daddr=${encodeURIComponent(destInput)}&output=embed`;
       setMapUrl(url);
    }
  };

  return (
    <section id="interactive-map" className="py-5 bg-h-dark text-white position-relative">
      <Container className="py-5 position-relative z-1">
        <div className="text-center mb-5">
          <h2 className="display-4 font-serif fw-bold mb-4">
            Plan Your HP Adventure
          </h2>
          <p className="lead text-white-50 mx-auto" style={{ maxWidth: '700px' }}>
            Find the best routes for your trip. Enter your origin and destination below to get turn-by-turn directions directly on Google Maps.
          </p>
        </div>

        {/* Route Finder Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-dark p-4 rounded-4 shadow-lg mb-5 border border-secondary"
        >
          <Form onSubmit={handlePlanTour}>
            <Row className="g-3 align-items-end">
              <Col md={5}>
                <Form.Group>
                  <Form.Label className="text-white-50 small mb-1"><MapPin size={16} className="me-1" inline /> Starting Point</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="e.g. Chandigarh, Shimla" 
                    value={originInput}
                    onChange={(e) => setOriginInput(e.target.value)}
                    className="bg-dark-subtle border-secondary text-white"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group>
                  <Form.Label className="text-white-50 small mb-1"><Navigation size={16} className="me-1" inline /> Destination</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="e.g. Manali, Dharamshala" 
                    value={destInput}
                    onChange={(e) => setDestInput(e.target.value)}
                    className="bg-dark-subtle border-secondary text-white"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Button variant="primary" type="submit" className="w-100 rounded-pill d-flex align-items-center justify-content-center">
                  Get Route <ExternalLink size={16} className="ms-2" />
                </Button>
              </Col>
            </Row>
          </Form>
        </motion.div>

        {/* Free Embedded Map of HP */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="position-relative w-100 rounded-4 overflow-hidden shadow-lg border border-secondary bg-dark"
          style={{ height: '500px' }}
        >
          <iframe 
            src={mapUrl}
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Himachal Pradesh Map"
          ></iframe>
        </motion.div>
        
        <div className="mt-4 text-center text-white-50 small">
           <MapIcon size={16} className="me-1" inline /> Interactive map area of Himachal Pradesh
        </div>
      </Container>
    </section>
  );
}
