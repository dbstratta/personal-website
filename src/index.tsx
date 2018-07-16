/**
 * Entry point of the application.
 */

import React from 'react';
import { render } from 'react-dom';

import './globalStyles';

import Root from './components/Root';
import { register as registerServiceWorker } from './serviceWorker';
import theme from './theme';

main();

function main(): void {
  const rootElement = document.getElementById('root');

  if (!rootElement) {
    throw new Error('root element not found');
  }

  const rootReactElement = <Root theme={theme} />;

  render(rootReactElement, rootElement);

  registerServiceWorker();
}
