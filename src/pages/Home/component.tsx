import React from 'react';

// import AboutMe from '../../components/AboutMe';
// import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import Splash from '../../components/Splash';

export const Home = () => (
  <>
    <NavBar />
    <Splash />
    {/* <AboutMe />
    <Contact /> */}
    <Footer />
  </>
);

export default Home;
