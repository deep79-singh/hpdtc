import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Map, Clock, Star, ArrowRight } from 'lucide-react';

const TouristCircuits = () => {
  const circuits = [
    {
      title: 'The Beas Circuit',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
      duration: '5-7 Days',
      rating: 4.8,
      desc: 'Follow the Roaring River Beas through Kullu, Manali, and Rohtang Pass.',
      highlights: ['River Rafting', 'Hadimba Temple', 'Solang Valley']
    },
    {
      title: 'The Dhauladhar Circuit',
      image: 'https://i0.wp.com/trailsofinju.com/wp-content/uploads/2020/06/A-Tiny-Speck-In-Front-Of-Dhauladhar.jpg?fit=1280%2C720&ssl=1',
      duration: '4-6 Days',
      rating: 4.9,
      desc: 'Explore the majestic Dhauladhar ranges covering Dharamshala and Dalhousie.',
      highlights: ['Tea Gardens', 'Bhagsunag Falls', 'Cricket Stadium']
    },
    {
      title: 'The Tribal Circuit',
      image: 'https://www.snowhillsvacation.com/wp-content/uploads/2019/09/Chandratal.jpg',
      duration: '10-12 Days',
      rating: 4.7,
      desc: 'A rugged journey through Kinnaur, Lahaul, and the mystical Spiti Valley.',
      highlights: ['Key Monastery', 'Chandratal Lake', 'High Passes']
    },
    {
      title: 'The Sutlej Circuit',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/A_view_of_Sutlej_river_Himachal_Pradesh_India_2014.jpg',
      duration: '6-8 Days',
      rating: 4.6,
      desc: 'Discover the heritage of Shimla and the beautiful valleys of the Sutlej river.',
      highlights: ['The Ridge', 'Jakhu Temple', 'Tattapani Hot Springs']
    }
  ];

  return (
    <div className="tourist-circuits bg-white pt-5">
      {/* Page Header */}
      <section className="bg-h-dark text-white py-5 mb-5 position-relative">
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-h-blue opacity-25"></div>
        <Container className="position-relative z-1">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="display-4 font-serif fw-bold mb-3">Tourist Circuits</h1>
            <p className="lead opacity-75 max-w-2xl">
              Embark on curated journeys that capture the soul of Himachal. 
              Each circuit is designed to offer a unique blend of culture, nature, and adventure.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Circuits List */}
      <Container className="mb-5 pb-5">
        <Row className="g-5">
          {circuits.map((circuit, idx) => (
            <Col key={idx} lg={12}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="border-0 shadow-sm overflow-hidden rounded-4 group">
                  <Row className="g-0">
                    <Col md={5} className="overflow-hidden">
                      <motion.img 
                        src={circuit.image} 
                        alt={circuit.title}
                        className="h-100 w-100 object-cover transition-all duration-700 group-hover:scale-110"
                        style={{ minHeight: '300px' }}
                      />
                    </Col>
                    <Col md={7}>
                      <Card.Body className="p-4 p-lg-5 d-flex flex-col h-100 justify-content-center">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <Badge className="bg-h-saffron px-3 py-2 rounded-pill">
                            <Clock size={14} className="me-1 mb-1" /> {circuit.duration}
                          </Badge>
                          <div className="text-h-saffron fw-bold">
                            <Star size={16} fill="currentColor" className="me-1 mb-1" /> {circuit.rating}
                          </div>
                        </div>
                        <Card.Title className="display-6 font-serif fw-bold text-h-dark mb-3">
                          {circuit.title}
                        </Card.Title>
                        <Card.Text className="text-muted lead mb-4">
                          {circuit.desc}
                        </Card.Text>
                        <div className="mb-4">
                          <h6 className="text-uppercase tracking-widest text-h-blue fw-bold mb-3" style={{ fontSize: '0.75rem' }}>
                            Highlights
                          </h6>
                          <div className="d-flex flex-wrap gap-2">
                            {circuit.highlights.map((h, i) => (
                              <Badge key={i} bg="light" className="text-h-dark border px-3 py-2 fw-medium rounded-pill">
                                {h}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button className="btn-h-blue d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill align-self-start fw-bold">
                          View Detailed Itinerary <ArrowRight size={18} />
                        </Button>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Map Interactive Placeholder Section */}
      <section className="py-5 bg-h-blue text-white overflow-hidden">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h2 className="display-5 font-serif fw-bold mb-4">Route Your Adventure</h2>
              <p className="lead opacity-75 mb-4">
                Not sure which circuit to choose? Use our interactive map to visualize 
                your path through the mountains. See distances, elevation, and point 
                of interest in real-time.
              </p>
              <Button variant="outline-light" className="px-4 py-2 rounded-pill fw-bold border-2">
                Launch Interactive Map
              </Button>
            </Col>
            <Col lg={6} className="mt-5 mt-lg-0">
               <div className="bg-white bg-opacity-10 p-5 rounded-4 text-center border border-white border-opacity-20 backdrop-blur-sm">
                  <Map size={120} className="mb-4 opacity-50" />
                  <h4 className="fw-bold mb-0">Map View Coming Soon</h4>
                  <p className="small opacity-50">Currently in Beta for registered travelers</p>
               </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default TouristCircuits;
