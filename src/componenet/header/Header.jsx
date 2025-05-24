import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaUser,
  FaShoppingCart,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar
        style={{ backgroundColor: "#0056a3", color: "white" }}
        className="py-2"
      >
        <Container
          fluid
          className="d-flex justify-content-between align-items-center"
        >
          <div className="d-flex gap-3">
            <Link to="#" className="social-icon">
              <FaFacebookF size={18} />
            </Link>
            <Link to="#" className="social-icon">
              <FaLinkedinIn size={18} />
            </Link>
            <Link to="#" className="social-icon">
              <FaInstagram size={18} />
            </Link>
          </div>

          <div className="d-flex align-items-center call-us">
            <FaPhoneAlt className="me-2" />
            <span>
              Call Us: <strong>+91-9307709206</strong>
            </span>
          </div>

          <div className="d-flex gap-3">
            <Link
              to="/login"
              className="btn account-btn d-flex align-items-center gap-2"
            >
              <FaUser /> My Account
            </Link>
            {/* Uncomment when cart is functional
            <Link
              to="/cart"
              className="btn cart-btn d-flex align-items-center gap-2 position-relative"
            >
              <FaShoppingCart /> My Cart
              <span className="cart-badge"></span>
            </Link>
            */}
          </div>
        </Container>
      </Navbar>

      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container fluid>
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img
              src="/assests/images/logo.jpeg"
              alt="FlexC Logo"
              style={{ width: "80px", height: "50px", borderRadius: "50%" }}
            />
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto menu-links">
              <Link to="/" className="nav-link">HOME</Link>
              <Link to="/about" className="nav-link">ABOUT US</Link>
              <Link to="/services" className="nav-link">SERVICES</Link>
              <Link to="/blogs" className="nav-link">BLOG</Link>
              <Link to="/privacy" className="nav-link">PRIVACY POLICY</Link>
              <Link to="/contact" className="nav-link">CONTACT</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
