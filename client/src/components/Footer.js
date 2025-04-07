import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-primary text-light mt-5 py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <h5 className="mb-0">Fast-Pay</h5>
            <small>&copy; {new Date().getFullYear()} All rights reserved.</small>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="/" className="text-light me-3">Home</a>
            <a href="/login" className="text-light me-3">Login</a>
            <a href="/signup" className="text-light">Signup</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
