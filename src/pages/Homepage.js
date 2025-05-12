import React from 'react';
import Hero from '../components/feature/Hero';
import Specials from '../components/feature/Specials';
import Testimonials from '../components/feature/Testimonials';
import About from '../components/feature/About';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import style from './pages.module.css';

const HomePage = () => {

  const location = useLocation();

useEffect(() => {
  if (location.hash === '#about-section') {
    setTimeout(() => {
      const element = document.getElementById('about-section');
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // Small delay ensures component is mounted
  }
}, [location]);

  return <div className={style["grid-container"]}>
    <Hero />
    <Specials />
    <Testimonials />
    <About />
  </div>;
}

export default HomePage;