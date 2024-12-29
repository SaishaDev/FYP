import React from 'react';
import { HiSearch } from 'react-icons/hi';
import backgroundImage from '../../assets/images/Ghandruk-Village.webp'; 
import './styles/HeroSection.css';

const HeroSection = () => {
  return (
    <div
      className="hero-section-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-section-overlay">
        <h1 className="hero-section-title">Welcome to Your Homestay Experience</h1>
        <p className="hero-section-description">Find the perfect homestay across Nepal!</p>

        <div className="hero-section-search-container">
          <div className="relative w-96"> 
            <input
              type="text"
              placeholder="Search for homestays..."
              className="hero-section-search-input"
            />
            <div className="hero-section-search-icon">
              <HiSearch size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
