import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { analytics } from '../../helpers';
import { Theme } from '../../theme';
import App from '../App';

analytics.initializeGoogleAnalytics();

export type RootProps = {
  theme: Theme;
};

export const Root = ({ theme }: RootProps) => (
  <Router>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>
);

export default hot(module)(Root);
