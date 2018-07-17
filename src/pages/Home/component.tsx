import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
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
      <title>Diego Stratta | Web Developer</title>
    </Helmet>

    <NavBar />

    <ContentWrapper>
      <Splash />
    </ContentWrapper>

    <Footer />
  </>
);

export default Home;
