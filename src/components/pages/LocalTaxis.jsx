import React from 'react';
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Car, MapPin, ShieldCheck, CreditCard, Clock, PhoneCall } from 'lucide-react';

const LocalTaxis = () => {
  const services = [
    {
      title: 'Airport & Rail Transfers',
      icon: Clock,
      desc: 'Punctual pick-up and drop services from Gaggal, Bhuntar, and Jubarhatti airports, as well as Kalka and Pathankot stations.'
    },
    {
      title: 'Local Sightseeing',
      icon: MapPin,
      desc: 'Full-day and half-day customized tours to local attractions like temples, waterfalls, and viewpoints.'
    },
    {
      title: 'Inter-City Travel',
      icon: Car,
      desc: 'Comfortable outstation trips between major towns like Shimla to Manali, or Dharamshala to Dalhousie.'
    },
    {
      title: 'Adventure Drops',
      icon: ShieldCheck,
      desc: 'Specialized 4x4 vehicles for reaching remote trekking start points and high-altitude passes like Rohtang.'
    }
  ];

  const fares = [
    { route: 'Shimla Local Sightseeing', vehicle: 'Hatchback/Sedan', rate: '₹2,500 - ₹3,500' },
    { route: 'Manali to Rohtang Pass', vehicle: '4x4 SUV', rate: '₹4,000 - ₹5,500' },
    { route: 'Dharamshala to Mcleodganj', vehicle: 'Auto/Taxi', rate: '₹300 - ₹800' },
    { route: 'Airport Drop (Average)', vehicle: 'Sedan', rate: '₹1,500 - ₹2,500' },
  ];

  return (
    <div className="local-taxis bg-white pt-5">
      {/* Hero Section */}
      <section className="py-5 bg-h-green text-white position-relative overflow-hidden">
        <div className="position-absolute bottom-0 start-0 w-100 h-25 bg-white opacity-10" style={{ transform: 'skewY(-3deg) translateY(50%)' }}></div>
        <Container className="position-relative z-1">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="display-4 font-serif fw-bold mb-3 d-flex align-items-center gap-3">
              <Car size={48} className="text-h-saffron" /> Local Taxi Services
            </h1>
            <p className="lead max-w-2xl opacity-80 mb-0" style={{ color: "black" }}>
              Reliable, safe, and professional taxi services to take you through the 
              winding roads of Himachal Pradesh with ease and comfort.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid */}
      <Container className="py-5 my-5">
        <div className="text-center mb-5">
          <motion.img 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="https://manalitaxi.in/wp-content/uploads/2023/02/Manali-Taxi-Service-343543.jpg" 
            alt="Transport Offering" 
            className="img-fluid rounded-4 shadow-md mb-5"
            style={{ maxHeight: '400px', width: '100%', objectFit: 'cover', position: 'relative', bottom: '100px'}}
          />
          <h2 className="display-6 font-serif fw-bold text-h-dark">Our Transport Offerings</h2>
          <div className="bg-h-saffron mx-auto" style={{ width: '60px', height: '4px' }}></div>
        </div>
        <Row className="g-4">
          {services.map((service, idx) => (
            <Col key={idx} md={6} lg={3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-100 border-0 shadow-sm rounded-4 p-4 hover:bg-h-blue hover:text-white transition-all duration-300 group">
                  <div className="text-h-saffron mb-4 group-hover:text-white transition-colors">
                    <service.icon size={40} />
                  </div>
                  <h5 className="fw-bold mb-3">{service.title}</h5>
                  <p className="small opacity-75 mb-0">{service.desc}</p>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Booking Information Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-stretch">
            <Col lg={7}>
               <div className="bg-white p-4 p-lg-5 rounded-4 shadow-sm h-100">
                  <h3 className="font-serif fw-bold text-h-dark mb-4">Indicative Fare Guidelines</h3>
                  <p className="text-muted mb-4 small">
                    Fares are subject to seasonal variations and union regulations. These are 
                    standardised rates for reference.
                  </p>
                  <Table responsive hover className="mb-0">
                    <thead className="table-light">
                      <tr>
                        <th className="border-0">Route / Package</th>
                        <th className="border-0">Vehicle Type</th>
                        <th className="border-0 text-end">Estimated Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fares.map((fare, idx) => (
                        <tr key={idx}>
                          <td className="py-3 border-0 fw-medium">{fare.route}</td>
                          <td className="py-3 border-0 text-muted small">{fare.vehicle}</td>
                          <td className="py-3 border-0 text-end fw-bold text-h-blue">{fare.rate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
               </div>
            </Col>
            <Col lg={5} className="mt-4 mt-lg-0">
               <Card className="bg-h-dark text-white border-0 rounded-4 h-100 p-4 p-lg-5 position-relative overflow-hidden">
                  <div className="position-relative z-1">
                    <h3 className="font-serif fw-bold mb-4">Book Your Ride</h3>
                    <p className="opacity-75 mb-5">
                       Connect with our authorized taxi unions or book through the state 
                       tourism helpline for verified drivers and fixed pricing.
                    </p>
                    <div className="space-y-4">
                       <div className="d-flex align-items-center gap-3">
                          <div className="bg-h-saffron p-3 rounded-circle"><PhoneCall size={24}/></div>
                          <div>
                             <h6 className="mb-0 opacity-50 small uppercase tracking-widest">Helpline</h6>
                             <div className="fw-bold h5 mb-0">1800-419-1000</div>
                          </div>
                       </div>
                       <div className="d-flex align-items-center gap-3">
                          <div className="bg-h-blue p-3 rounded-circle"><CreditCard size={24}/></div>
                          <div>
                             <h6 className="mb-0 opacity-50 small uppercase tracking-widest">Pricing Policy</h6>
                             <div className="fw-bold h5 mb-0">Fixed Union Rates</div>
                          </div>
                       </div>
                    </div>
                    <Button className="btn-h-saffron w-100 mt-5 py-3 rounded-pill fw-bold">Open Booking Portal</Button>
                  </div>
                  <div className="position-absolute top-0 end-0 opacity-10" style={{ transform: 'translate(20%, -20%)' }}>
                     <Car size={200} />
                  </div>
               </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Trust & Safety Section */}
      <Container className="py-5 my-5 text-center">
         <Row className="justify-content-center">
            <Col lg={8}>
               <h2 className="display-6 font-serif fw-bold text-h-dark mb-4">Why Choose Authorized Taxis?</h2>
               <p className="lead text-muted mb-5">
                  Your safety and comfort are our top priorities. All authorized taxis under the 
                  state tourism initiative follow strict guidelines.
               </p>
               <Row className="g-4 text-start">
                  <Col md={4}>
                     <h6 className="fw-bold text-h-blue border-start border-3 border-h-blue ps-3 mb-2">Verified Drivers</h6>
                     <p className="small text-muted">All drivers undergo identity verification and mountain driving assessment.</p>
                  </Col>
                  <Col md={4}>
                     <h6 className="fw-bold text-h-blue border-start border-3 border-h-blue ps-3 mb-2">Fixed Tariff</h6>
                     <p className="small text-muted">No haggling required. All fares are governed by union-approved price charts.</p>
                  </Col>
                  <Col md={4}>
                     <h6 className="fw-bold text-h-blue border-start border-3 border-h-blue ps-3 mb-2">24/7 Support</h6>
                     <p className="small text-muted">A dedicated transport helpline is available for any assistance during your journey.</p>
                  </Col>
               </Row>
            </Col>
         </Row>
      </Container>
    </div>
  );
};

export default LocalTaxis;
