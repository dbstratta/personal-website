import ReactGA from 'react-ga';

import { isProductionEnvironment } from './environments';

export const initializeGoogleAnalytics = () => {
  const googleAnalyticsTrackingCode = 'UA-85159007-1';
  const reactGAInitializeOptions: ReactGA.InitializeOptions = {
    debug: !isProductionEnvironment,
    testMode: !isProductionEnvironment,
  };

  ReactGA.initialize(googleAnalyticsTrackingCode, reactGAInitializeOptions);
};
