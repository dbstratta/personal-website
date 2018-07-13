import ReactGA from 'react-ga';

export const initializeGoogleAnalytics = () => {
  const googleAnalyticsTrackingCode = 'UA-85159007-1';
  const reactGAInitializeOptions: ReactGA.InitializeOptions = {
    debug: process.env.NODE_ENV !== 'production',
  };

  ReactGA.initialize(googleAnalyticsTrackingCode, reactGAInitializeOptions);
};
