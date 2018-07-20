import React from 'react';

import Footer from '../../components/Footer';
import Main from '../../components/Main';
import NavBar from '../../components/NavBar';
import ContactContent from './ContactContent';
import ContactHead from './ContactHead';

export const Contact: React.SFC = () => (
  <>
    <ContactHead />

    <NavBar />

    <Main>
      <ContactContent />
    </Main>

    <Footer />
  </>
);

export default Contact;
