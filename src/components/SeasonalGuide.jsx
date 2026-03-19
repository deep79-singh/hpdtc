import React from 'react';
import { motion } from 'motion/react';
import { Sun, Snowflake, Leaf, CloudRain } from 'lucide-react';
import { Container, Row, Col, Badge } from 'react-bootstrap';

export default function SeasonalGuide() {
  const currentSeason = 'Winter'; 
  
  return (
    <section className="py-5 bg-h-white">
      <Container className="py-5">
        <Row className="align-items-center gy-5">
          
          <Col lg={4}>
            <h2 className="display-5 font-serif fw-bold text-h-dark mb-4">
              Seasonal Guide
            </h2>
            <p className="lead text-secondary mb-5">
              Himachal transforms with every season. Discover what's best to experience right now.
            </p>
            
            <div className="d-flex flex-column gap-3">
              {['Spring', 'Summer', 'Monsoon', 'Winter'].map((season) => (
                <div 
                  key={season}
                  className={`d-flex align-items-center p-3 rounded-4 cursor-pointer transition-all ${
                    season === currentSeason 
                      ? 'bg-white shadow-sm border-start border-4 border-h-saffron' 
                      : 'text-secondary hover-bg-light'
                  }`}
                >
                  <div className={`rounded-circle d-flex align-items-center justify-content-center me-3 ${
                    season === currentSeason ? 'bg-h-saffron bg-opacity-10 text-h-saffron' : 'bg-light'
                  }`} style={{ width: '40px', height: '40px' }}>
                    {season === 'Spring' && <Leaf size={20} />}
                    {season === 'Summer' && <Sun size={20} />}
                    {season === 'Monsoon' && <CloudRain size={20} />}
                    {season === 'Winter' && <Snowflake size={20} />}
                  </div>
                  <span className={`fw-semibold ${season === currentSeason ? 'text-h-dark' : ''}`}>
                    {season}
                  </span>
                  {season === currentSeason && (
                    <Badge bg="transparent" className="ms-auto text-h-saffron border border-h-saffron text-uppercase">
                      Current
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </Col>

          <Col lg={8} className="position-relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="position-relative rounded-4 overflow-hidden shadow-lg"
              style={{ height: '500px' }}
            >
              <img 
                src="#" 
                alt="Winter in Himachal" 
                className="w-100 h-100 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50" />
              
              <div className="position-absolute bottom-0 start-0 p-4 p-md-5 w-100">
                <div className="d-inline-flex align-items-center bg-white bg-opacity-25 backdrop-blur-md px-3 py-2 rounded-pill text-white small fw-semibold mb-3">
                  <Snowflake size={16} className="me-2" />
                  Dec - Feb
                </div>
                <h3 className="display-6 font-serif fw-bold text-white mb-3">
                  Winter Wonderland
                </h3>
                <p className="text-white-50 mb-4" style={{ maxWidth: '500px' }}>
                  Experience the magic of fresh snowfall in Shimla and Manali, or challenge yourself with winter sports in Solang Valley.
                </p>
                <div className="d-flex gap-2 flex-wrap">
                  <Badge bg="transparent" className="border border-white text-white px-3 py-2 rounded-2 fw-normal">Skiing</Badge>
                  <Badge bg="transparent" className="border border-white text-white px-3 py-2 rounded-2 fw-normal">Snow Trekking</Badge>
                  <Badge bg="transparent" className="border border-white text-white px-3 py-2 rounded-2 fw-normal">Festivals</Badge>
                </div>
              </div>
            </motion.div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}
