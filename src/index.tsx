/**
 * Entry point of the application.
 */

import React from 'react';
import { hydrate, render } from 'react-dom';

import './globalStyles';

import Root from './components/Root';
import { register as registerServiceWorker } from './serviceWorker';
import theme from './theme';

main();

function main(): void {
  const rootElement = document.getElementById('root');

  if (!rootElement) {
    return;
  }

  const rootReactElement = <Root theme={theme} />;

  if (rootElement.hasChildNodes()) {
    hydrate(rootReactElement, rootElement);
  } else {
    render(rootReactElement, rootElement);
  }

  registerServiceWorker();
}
