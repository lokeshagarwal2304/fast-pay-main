import React, { useEffect, useState } from 'react';
import {
    Container,
    Nav,
    Navbar,
    NavDropdown
} from 'react-bootstrap';
import { FaHome, FaSignInAlt, FaSignOutAlt, FaUserCircle, FaUserPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <Navbar bg="primary" variant="dark" expand="md" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          🚀 Fast-Pay
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <Nav className="align-items-center gap-2">
            {user ? (
              <>
                <Nav.Link as={Link} to="/transaction">
                  <FaHome className="me-1" />
                  Dashboard
                </Nav.Link>
                <NavDropdown
                  title={
                    <span>
                      <FaUserCircle className="me-2" />
                      {user.email}
                    </span>
                  }
                  id="user-nav-dropdown"
                  align="end"
                >
                  <NavDropdown.Item onClick={handleLogout}>
                    <FaSignOutAlt className="me-2" />
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  <FaSignInAlt className="me-1" />
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  <FaUserPlus className="me-1" />
                  Signup
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
