import React from 'react';
import { Helmet } from 'react-helmet';

import Footer from '../../components/Footer';
import Main from '../../components/Main';
import NavBar from '../../components/NavBar';
import ContactContent from './ContactContent';

export const Contact: React.SFC = () => (
  <>
    <Helmet>
      <title>Diego Stratta | Contact</title>
    </Helmet>

    <NavBar />

    <Main>
      <ContactContent />
    </Main>

    <Footer />
  </>
);

export default Contact;
