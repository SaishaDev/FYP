import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Import the CSS file
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container mx-auto px-6">
        {/* Footer navigation */}
        <div className="footer-nav-links">
          <nav className="flex justify-center space-x-6">
            <Link to="/about" className="footer-nav-link">
              About Us
            </Link>
            <Link to="/contact" className="footer-nav-link">
              Contact
            </Link>
            <Link to="/privacy" className="footer-nav-link">
              Privacy Policy
            </Link>
            <Link to="/terms" className="footer-nav-link">
              Terms of Service
            </Link>
          </nav>
        </div>

        {/* Social media links */}
        <div className="footer-social-links">
          <Link to="https://www.facebook.com" className="footer-social-link">
            <FaFacebook className="text-xl" />
          </Link>
          <Link to="https://twitter.com" className="footer-social-link">
            <FaTwitter className="text-xl" />
          </Link>
          <Link to="https://www.instagram.com" className="footer-social-link">
            <FaInstagram className="text-xl" />
          </Link>
          <Link to="https://www.linkedin.com" className="footer-social-link">
            <FaLinkedin className="text-xl" />
          </Link>
        </div>

        {/* Copyright text */}
        <div className="footer-copyright">
          &copy; 2024 Find My Stay. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
