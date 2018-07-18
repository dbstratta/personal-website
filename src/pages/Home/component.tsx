import React from 'react';
import { Helmet } from 'react-helmet';

import Footer from '../../components/Footer';
import Main from '../../components/Main';
import NavBar from '../../components/NavBar';
import Splash from './Splash';

export const Home: React.SFC = () => (
  <>
    <Helmet>
      <title>Diego Stratta | Web Developer</title>
      <link rel="canonical" href="https://diegostratta.com" />
    </Helmet>

    <NavBar />

    <Main>
      <Splash />
    </Main>

    <Footer />
  </>
);

export default Home;
