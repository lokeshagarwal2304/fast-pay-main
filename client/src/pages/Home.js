import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="bg-light text-center py-5">
      <Container>
        <Row className="align-items-center flex-column-reverse flex-md-row">
          <Col md={6} className="mt-4 mt-md-0 text-md-start text-center">
            <h1 className="display-5 fw-bold">Fast & Secure Online Payments</h1>
            <p className="lead text-muted">
              Experience seamless transactions with PayEase. Whether you're a small business or an enterprise, our platform offers the tools you need to manage payments effortlessly.
            </p>
            <ul className="list-unstyled text-start mx-auto d-inline-block">
              <li>Easy integration with your website or app</li>
              <li>Accept payments globally in multiple currencies</li>
              <li>Real-time transaction monitoring and analytics</li>
            </ul>
            <div className="mt-4">
              <Button variant="primary" size="lg">Get Started</Button>
            </div>
          </Col>
          <Col md={6}>
            <Image
              src="https://via.placeholder.com/500x300"
              alt="Online payment illustration"
              fluid
              className="rounded shadow-sm"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
