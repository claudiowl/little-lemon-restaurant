import React from 'react';
import Hero from '../components/ui/Hero';
import Specials from '../components/ui/Specials';
import Testimonials from '../components/ui/Testimonials';
import About from '../components/ui/About';

const Homepage = () => {
  return <div className="grid-container">
    <Hero />
    <Specials />
    <Testimonials />
    <About />
  </div>;
}

export default Homepage;