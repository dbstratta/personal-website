import React from 'react';
import { Helmet } from 'react-helmet';

import Footer from '../../components/Footer';
import Main from '../../components/Main';
import NavBar from '../../components/NavBar';
import SectionHeading from '../../components/SectionHeading';

export const Contact: React.SFC = () => (
  <>
    <Helmet>
      <title>Diego Stratta | Contact</title>
    </Helmet>

    <NavBar />

    <Main>
      <SectionHeading>Contact</SectionHeading>
    </Main>

    <Footer />
  </>
);

export default Contact;
