import React, { StrictMode } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { initializeGoogleAnalytics } from '../../analytics';
import { Theme } from '../../theme';
import App from '../App';

initializeGoogleAnalytics();

export type RootProps = {
  readonly theme: Theme;
};

export const Root = ({ theme }: RootProps) => (
  <Router>
    <ThemeProvider theme={theme}>
      <StrictMode>
        <App />
      </StrictMode>
    </ThemeProvider>
  </Router>
);

export default hot(module)(Root);
