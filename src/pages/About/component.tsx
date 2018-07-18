import React from 'react';
import { Helmet } from 'react-helmet';

import Footer from '../../components/Footer';
import Main from '../../components/Main';
import NavBar from '../../components/NavBar';
import AboutContent from './AboutContent';

export const About: React.SFC = () => (
  <>
    <Helmet>
      <title>Diego Stratta | About</title>
    </Helmet>

    <NavBar />

    <Main>
      <AboutContent />
    </Main>

    <Footer />
  </>
);

export default About;
