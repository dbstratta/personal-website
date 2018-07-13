import React from 'react';
import ReactDOM from 'react-dom';

import './globalStyles';

import Root from './components/Root';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.register();
