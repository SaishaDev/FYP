import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import AuthModal from "../modals/AuthModal";
import "./Header.css";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleForm = () => setIsSignIn(!isSignIn);

  return (
    <header className="header-container">
      <div className="header-left">
        <Link to="/" className="header-title"> Griha-sewa Nepal </Link>
        <p className="header-description">Your perfect homestay awaits!</p>
      </div>

      <nav className="header-nav-links">
        <Link to="/" className="header-nav-link"> Home </Link>
        <Link to="/homestays" className="header-nav-link"> Homestays </Link>
        <Link to="/about" className="header-nav-link"> About </Link>
        <Link to="/contact" className="header-nav-link"> Contact </Link>
        <Link to="/blog" className="header-nav-link"> Blog </Link>
      </nav>

      <div className="header-right">
        <Link to="/property" className="header-list-property-btn">
          List Your Property
        </Link>

        <FontAwesomeIcon
          icon={faUserCircle}
          className="header-user-icon"
          onClick={toggleModal} 
        />
      </div>

      <AuthModal
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        isSignIn={isSignIn}
        toggleForm={toggleForm}
      />
    </header>
  );
};

export default Header;
