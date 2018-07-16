import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import Footer from '../../components/Footer';
import About from './About';
import Contact from './Contact';
import Splash from './Splash';

const ContentWrapper = styled.main`
  flex: 1 0 auto;
  align-self: flex-start;

  width: var(--main-content-width);
  margin: auto;
`;

export const Home: React.SFC = () => (
  <>
    <Helmet>
      <title>Diego Stratta</title>
    </Helmet>

    <ContentWrapper>
      <Splash />
      <About />
      <Contact />
    </ContentWrapper>

    <Footer />
  </>
);

export default Home;
