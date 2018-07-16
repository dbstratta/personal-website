import React from 'react';

import About from '../../components/About';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import Splash from '../../components/Splash';

export const Home = () => (
  <>
    <NavBar />
    <Splash />
    <About />
    <Contact />
    <Footer />
  </>
);

export default Home;
