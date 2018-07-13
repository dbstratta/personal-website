/**
 * Entry point of the application.
 */

import React from 'react';
import { render } from 'react-dom';

import './globalStyles';

import Root from './components/Root';
import { register as registerServiceWorker } from './serviceWorker';

const rootElement = document.getElementById('root');
render(<Root />, rootElement);

registerServiceWorker();
