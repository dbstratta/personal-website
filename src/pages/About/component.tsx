import React from 'react';

import Footer from '../../components/Footer';
import Main from '../../components/Main';
import NavBar from '../../components/NavBar';
import AboutContent from './AboutContent';
import AboutHead from './AboutHead';

export const About: React.SFC = () => (
  <>
    <AboutHead />

    <NavBar />

    <Main>
      <AboutContent />
    </Main>

    <Footer />
  </>
);

export default About;
