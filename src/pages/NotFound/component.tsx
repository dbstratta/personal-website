import React from 'react';
import { Helmet } from 'react-helmet';

import Footer from '../../components/Footer';
import Error from './Error';

export const NotFound: React.SFC = () => (
  <>
    <Helmet>
      <title>Diego Stratta | Page Not Found</title>
    </Helmet>

    <Error code={404} message="Page not found." />

    <Footer />
  </>
);

export default NotFound;
