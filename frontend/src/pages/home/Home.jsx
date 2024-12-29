// src/pages/home/Home.js
import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import HeroSection from './HeroSection';
import FeaturedHomestays from './FeaturedHomestays';
import HowItWorks from './HowItWorks';
import LocalHighlights from './LocalHighlights';
import TopDestinations from './TopDestinations';

const Home = () => {
  return (
    <div className="home font-sans">
      <Header />
      <HeroSection />
      {/*}
      <TopDestinations />
      <FeaturedHomestays />
      <HowItWorks />
      <LocalHighlights /> */}
      <Footer />
    </div>
  );
};

export default Home;
