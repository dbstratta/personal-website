/**
 * Entry point of the application.
 */

import React from 'react';
import { hydrate, render } from 'react-dom';

import './globalStyles';

import Root from './components/Root';
import { register as registerServiceWorker } from './serviceWorker';

main();

function main(): void {
  const rootElement = document.getElementById('root');

  if (!rootElement) {
    return;
  }

  if (rootElement.hasChildNodes()) {
    hydrate(<Root />, rootElement);
  } else {
    render(<Root />, rootElement);
  }

  registerServiceWorker();
}
