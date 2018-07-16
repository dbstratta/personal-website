import React from 'react';

import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import About from './About';
import Splash from './Splash';

export const Home: React.SFC = () => (
  <>
    <NavBar />
    <Splash />
    <About />
    <Contact />
    <Footer />
  </>
);

export default Home;
