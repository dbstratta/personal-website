import React, { StrictMode } from 'react';
import { hot } from 'react-hot-loader';

import { initializeGoogleAnalytics } from '../../analytics';
import theme from '../../theme';
import App from '../App';

initializeGoogleAnalytics();

export const Root = () => (
  <StrictMode>
    <App theme={theme} />
  </StrictMode>
);

export default hot(module)(Root);
