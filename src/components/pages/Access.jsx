import React from 'react';
import { Container, Row, Col, Card, Tabs, Tab } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Plane, Train, Bus, MapPin, Building2, Terminal } from 'lucide-react';

const Access = () => {
  const hubs = [
    { name: 'Shimla', air: 'Jubarhatti (22km)', rail: 'Shimla Railway Station (Kalka-Shimla Toy Train)', road: 'Well connected via NH5' },
    { name: 'Manali', air: 'Bhuntar (50km)', rail: 'Jogindernagar (160km) or Chandigarh (310km)', road: 'Well connected via NH3' },
    { name: 'Dharamshala', air: 'Gaggal (15km)', rail: 'Pathankot (90km)', road: 'Well connected via NH154' },
  ];

  return (
    <div className="access-page bg-white pt-5">
      {/* Header Section */}
      <section className="py-5 mb-5 bg-h-blue text-white overflow-hidden position-relative">
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-h-dark opacity-20"></div>
        <Container className="position-relative z-1">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="display-4 font-serif fw-bold mb-3">Access & Connectivity</h1>
            <p className="lead max-w-2xl opacity-80">
              Reaching the heights of Himachal is an experience in itself. 
              Whether by air, rail, or road, your journey to the hills starts here.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Main Transport Tabs */}
      <Container className="mb-5">
        <div className="bg-white shadow-lg rounded-4 overflow-hidden border">
          <Tabs defaultActiveKey="air" id="transport-tabs" className="bg-light p-2 border-0 custom-tabs sticky-top" fill>
            <Tab eventKey="air" title={<span className="d-flex align-items-center justify-content-center gap-2 py-2 fw-bold"><Plane size={20}/> By Air</span>}>
              <div className="p-4 p-lg-5">
                <Row className="align-items-center">
                  <Col lg={6}>
                    <h2 className="display-6 font-serif fw-bold text-h-dark mb-4">Flying to the Hills</h2>
                    <p className="lead text-muted mb-4">
                      Himachal Pradesh has three domestic airports providing convenient access to major tourist hubs.
                    </p>
                    <ul className="list-unstyled space-y-4">
                      <li className="d-flex gap-3">
                        <div className="bg-h-blue bg-opacity-10 p-2 rounded-3 text-h-blue h-fit"><Terminal size={24}/></div>
                        <div>
                          <h5 className="fw-bold mb-1">Gaggal Airport (Dharamshala)</h5>
                          <p className="small text-muted">The busiest airport, connecting Kangra valley and Dharamshala.</p>
                        </div>
                      </li>
                      <li className="d-flex gap-3">
                        <div className="bg-h-blue bg-opacity-10 p-2 rounded-3 text-h-blue h-fit"><Terminal size={24}/></div>
                        <div>
                          <h5 className="fw-bold mb-1">Bhuntar Airport (Kullu-Manali)</h5>
                          <p className="small text-muted">Gateway to the Kullu valley, Manali, and Kasol.</p>
                        </div>
                      </li>
                      <li className="d-flex gap-3">
                        <div className="bg-h-blue bg-opacity-10 p-2 rounded-3 text-h-blue h-fit"><Terminal size={24}/></div>
                        <div>
                          <h5 className="fw-bold mb-1">Jubarhatti Airport (Shimla)</h5>
                          <p className="small text-muted">Located 22km from Shimla, offering connectivity to the state capital.</p>
                        </div>
                      </li>
                    </ul>
                  </Col>
                  <Col lg={6} className="mt-5 mt-lg-0">
                    <img 
                      src="https://images.unsplash.com/photo-1436491865332-7a61a109c05d?q=80&w=800&auto=format&fit=crop" 
                      alt="Air Travel" 
                      className="img-fluid rounded-4 shadow-sm"
                    />
                  </Col>
                </Row>
              </div>
            </Tab>
            <Tab eventKey="rail" title={<span className="d-flex align-items-center justify-content-center gap-2 py-2 fw-bold"><Train size={20}/> By Rail</span>}>
              <div className="p-4 p-lg-5">
                <Row className="align-items-center">
                  <Col lg={6} className="order-2 order-lg-1 mt-5 mt-lg-0">
                    <img 
                      src="https://aggrp.in/wp-content/uploads/2022/10/AG-Bloges-Toy-Trains-1024x576.png" 
                      alt="Rail Travel" 
                      className="img-fluid rounded-4 shadow-sm"
                    />
                  </Col>
                  <Col lg={6} className="order-1 order-lg-2 px-lg-5">
                    <h2 className="display-6 font-serif fw-bold text-h-dark mb-4">The Iconic Toy Train</h2>
                    <p className="lead text-muted mb-4">
                      Experience the UNESCO World Heritage Kalka-Shimla railway, or reach the foothills via major broad-gauge stations.
                    </p>
                    <div className="bg-h-saffron bg-opacity-10 border-start border-h-saffron border-4 p-4 rounded-3 mb-4">
                       <h5 className="fw-bold text-h-dark mb-2">Kalka-Shimla Heritage Line</h5>
                       <p className="small text-muted mb-0">96km of breathtaking views, 103 tunnels, and 800+ bridges. A must-experience journey.</p>
                    </div>
                    <ul className="list-unstyled">
                       <li className="mb-2"><strong>Pathankot:</strong> Major hub for Kangra and Chamba.</li>
                       <li className="mb-2"><strong>Chandigarh:</strong> Nearest broad-gauge hub for Shimla and Manali.</li>
                       <li className="mb-2"><strong>Jogindernagar:</strong> Narrow gauge station in the Mandi district.</li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Tab>
            <Tab eventKey="road" title={<span className="d-flex align-items-center justify-content-center gap-2 py-2 fw-bold"><Bus size={20}/> By Road</span>}>
              <div className="p-4 p-lg-5">
                <h2 className="display-6 font-serif fw-bold text-h-dark mb-5 text-center">Connected by the Mountains</h2>
                <Row className="g-4">
                   <Col md={4}>
                      <Card className="h-100 border-0 bg-light p-4 rounded-4">
                         <div className="text-h-blue mb-3"><Building2 size={32}/></div>
                         <h5 className="fw-bold mb-3">Interstate Connectivity</h5>
                         <p className="small text-muted">Daily luxury and ordinary bus services from Delhi, Chandigarh, and Punjab via HRTC and HPTDC.</p>
                      </Card>
                   </Col>
                   <Col md={4}>
                      <Card className="h-100 border-0 bg-light p-4 rounded-4">
                         <div className="text-h-saffron mb-3"><MapPin size={32}/></div>
                         <h5 className="fw-bold mb-3">Self-Drive Routes</h5>
                         <p className="small text-muted">Excellent National Highways (NH5, NH3, NH154) offer smooth drives with stunning scenic pitstops.</p>
                      </Card>
                   </Col>
                   <Col md={4}>
                      <Card className="h-100 border-0 bg-light p-4 rounded-4">
                         <div className="text-h-green mb-3"><Bus size={32}/></div>
                         <h5 className="fw-bold mb-3">Local Transfers</h5>
                         <p className="small text-muted">Extensive network of local buses and reliable taxi services available at every major junction.</p>
                      </Card>
                   </Col>
                </Row>
              </div>
            </Tab>
          </Tabs>
        </div>
      </Container>

      {/* Major Hubs Connectivity Table */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-6 font-serif fw-bold text-h-dark">Connectivity at a Glance</h2>
            <div className="bg-h-blue mx-auto" style={{ width: '60px', height: '4px' }}></div>
          </div>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="table-responsive bg-white rounded-4 shadow-sm border overflow-hidden">
                <table className="table table-hover mb-0">
                  <thead className="bg-h-dark text-white">
                    <tr>
                      <th className="p-4 border-0">Destination Hub</th>
                      <th className="p-4 border-0">Nearest Airport</th>
                      <th className="p-4 border-0">Nearest Railhead</th>
                      <th className="p-4 border-0">Road Connectivity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hubs.map((hub, idx) => (
                      <tr key={idx}>
                        <td className="p-4 fw-bold text-h-blue">{hub.name}</td>
                        <td className="p-4 text-muted small">{hub.air}</td>
                        <td className="p-4 text-muted small">{hub.rail}</td>
                        <td className="p-4 text-muted small">{hub.road}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-h-dark text-white text-center">
         <Container>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="display-5 font-serif fw-bold mb-4">Start Your Journey Today</h3>
              <p className="lead opacity-75 mb-5 max-w-2xl mx-auto">
                No matter how you choose to arrive, the mountains are waiting to welcome you 
                with open arms and breathtaking views.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                 <button className="btn btn-h-saffron px-5 py-3 rounded-pill fw-bold">Book Bus Tickets</button>
                 <button className="btn btn-outline-light px-5 py-3 rounded-pill fw-bold">Hire Local Taxi</button>
              </div>
            </motion.div>
         </Container>
      </section>
    </div>
  );
};

export default Access;
