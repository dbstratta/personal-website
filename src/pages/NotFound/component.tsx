import React from 'react';

import Footer from '../../components/Footer';
import Error from './Error';
import NotFoundHead from './NotFoundHead';

export const NotFound: React.SFC = () => (
  <>
    <NotFoundHead />

    <Error code={404} message="Page not found." />

    <Footer />
  </>
);

export default NotFound;
