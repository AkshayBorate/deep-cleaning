import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 px-3">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-4">
            <div className="d-flex align-items-center mb-3">
              <img
                src="/assests/images/logo.jpeg"
                alt="DeepCleanPro"
                style={{
                  height: "50px",
                  width: "100px",
                  borderRadius: "8px",
                  objectFit: "contain",
                  backgroundColor: "#fff",
                  padding: "4px",
                }}
              />
            </div>
            <p className="text-white">
              DeepCleanPro delivers top-notch{" "}
              <span className="fw-semibold">residential</span> and{" "}
              <span className="fw-semibold">commercial cleaning</span> services,
              ensuring sparkling spaces and healthier lives.
            </p>
            <div className="d-flex gap-3 mt-4">
              <a href="#" className="text-white fs-5">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white fs-5">
                <FaYoutube />
              </a>
              <a href="#" className="text-white fs-5">
                <FaTwitter />
              </a>
              <a href="#" className="text-white fs-5">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2">
            <h6 className="fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled text-white-50">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="col-md-3">
            <h6 className="fw-semibold mb-3">Our Services</h6>
            <ul className="list-unstyled text-white">
              <li>Home Deep Cleaning</li>
              <li>Office Deep Cleaning</li>
              <li>Move-in/Move-out Cleaning</li>
              <li>Post-Construction Cleaning</li>
              <li>Sanitization Services</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="col-md-3">
            <h6 className="fw-semibold mb-3">Get a Free Quote</h6>
            <p className="text-white">Book your professional cleaning today!</p>
            <div className="d-flex gap-2">
              <button className="btn btn-primary px-3 py-2">
                Request Quote
              </button>
              <Link to="/contact" className="btn btn-outline-light px-3 py-2">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-5 pt-4 border-top border-secondary text-white d-flex flex-wrap justify-content-between align-items-center">
          <small>© 2025 Varsha Deep Cleaner. All Rights Reserved.</small>
          <div className="d-flex gap-3 mt-2 mt-md-0">
            <a href="#" className="text-white text-decoration-none">
              Terms of Service
            </a>
            <a href="#" className="text-white text-decoration-none">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
