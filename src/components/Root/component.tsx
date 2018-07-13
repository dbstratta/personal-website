import React from 'react';
import { hot } from 'react-hot-loader';

import { analytics } from '../../helpers';
import Splash from '../Splash';

analytics.initializeGoogleAnalytics();

const Root = () => <Splash />;

export default hot(module)(Root);
