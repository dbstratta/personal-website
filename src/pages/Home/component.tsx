import React from 'react';

import Footer from '../../components/Footer';
import Main from '../../components/Main';
import NavBar from '../../components/NavBar';
import HomeHead from './HomeHead';
import Splash from './Splash';

export const Home: React.SFC = () => (
  <>
    <HomeHead />

    <NavBar />

    <Main>
      <Splash />
    </Main>

    <Footer />
  </>
);

export default Home;
