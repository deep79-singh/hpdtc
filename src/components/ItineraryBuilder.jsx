import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Map, Calendar, Compass, Sparkles } from 'lucide-react';
import { Container, Row, Col, Card, Button, ProgressBar } from 'react-bootstrap';

export default function ItineraryBuilder() {
  const [step, setStep] = useState(1);

  return (
    <section className="py-5 bg-h-blue text-white position-relative overflow-hidden">
      {/* Background Pattern */}
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <Container className="py-5 position-relative z-1">
        <Row className="align-items-center gy-5">
          
          <Col lg={6}>
            <div className="d-inline-flex align-items-center bg-white bg-opacity-10 px-3 py-2 rounded-pill small fw-semibold mb-4 border border-light border-opacity-25">
              <Sparkles size={16} className="me-2 text-h-saffron" />
              AI-Powered Planning
            </div>
            <h2 className="display-4 font-serif fw-bold mb-4">
              Design Your Perfect <br/>Himachal Journey
            </h2>
            <p className="lead text-white-50 mb-5" style={{ maxWidth: '500px' }}>
              Tell us what you love, and our intelligent builder will craft a personalized itinerary that matches your pace, interests, and budget.
            </p>
            
            <div className="d-flex flex-column gap-4">
              <div className="d-flex align-items-start">
                <div className="rounded-circle bg-white bg-opacity-10 d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: '48px', height: '48px' }}>
                  <Compass size={24} className="text-h-saffron" />
                </div>
                <div>
                  <h4 className="fs-5 fw-bold mb-1">Tailored Experiences</h4>
                  <p className="text-white-50 mb-0">From adrenaline-pumping treks to serene monastery visits.</p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <div className="rounded-circle bg-white bg-opacity-10 d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: '48px', height: '48px' }}>
                  <Map size={24} className="text-h-saffron" />
                </div>
                <div>
                  <h4 className="fs-5 fw-bold mb-1">Smart Routing</h4>
                  <p className="text-white-50 mb-0">Optimized travel times between destinations with real-time road conditions.</p>
                </div>
              </div>
            </div>
          </Col>

          {/* Interactive Builder Card */}
          <Col lg={6}>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 rounded-4 shadow-lg text-dark p-4 p-md-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="fs-4 font-serif fw-bold mb-0">Trip Builder</h3>
                  <span className="small fw-semibold text-secondary">Step {step} of 3</span>
                </div>
                
                {/* Progress Bar */}
                <ProgressBar now={(step / 3) * 100} variant="warning" className="mb-4" style={{ height: '8px' }} />

                {step === 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <h4 className="fs-5 fw-bold mb-3">What's your travel style?</h4>
                    <Row className="g-3 mb-4">
                      {['Adventure', 'Relaxation', 'Culture', 'Nature'].map((style) => (
                        <Col xs={6} key={style}>
                          <Button variant="outline-secondary" className="w-100 py-3 rounded-3 fw-semibold text-start border-2">
                            {style}
                          </Button>
                        </Col>
                      ))}
                    </Row>
                    <Button 
                      onClick={() => setStep(2)}
                      className="w-100 btn-h-blue py-3 rounded-3 fw-bold"
                    >
                      Next Step
                    </Button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <h4 className="fs-5 fw-bold mb-3">How long are you staying?</h4>
                    <div className="d-flex flex-column gap-3 mb-4">
                      {['Weekend Getaway (2-3 days)', 'Short Trip (4-6 days)', 'Explorer (1-2 weeks)', 'Nomad (2+ weeks)'].map((duration) => (
                        <Button key={duration} variant="outline-secondary" className="w-100 py-3 rounded-3 fw-semibold text-start border-2 d-flex align-items-center">
                          <Calendar size={20} className="me-3 text-secondary" />
                          {duration}
                        </Button>
                      ))}
                    </div>
                    <div className="d-flex gap-3">
                      <Button variant="outline-secondary" onClick={() => setStep(1)} className="w-25 py-3 rounded-3 fw-bold border-2">Back</Button>
                      <Button onClick={() => setStep(3)} className="w-75 btn-h-blue py-3 rounded-3 fw-bold">Next Step</Button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-4">
                    <div className="rounded-circle bg-success bg-opacity-10 d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '80px', height: '80px' }}>
                      <Sparkles size={40} className="text-success" />
                    </div>
                    <h4 className="fs-3 font-serif fw-bold mb-2">Ready to generate!</h4>
                    <p className="text-secondary mb-4">We have enough info to craft your perfect itinerary.</p>
                    <Button className="w-100 btn-h-saffron py-3 rounded-3 fw-bold shadow-sm">
                      Generate My Itinerary
                    </Button>
                  </motion.div>
                )}

              </Card>
            </motion.div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}
