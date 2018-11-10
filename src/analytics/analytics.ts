import ReactGA from 'react-ga';

import { Event } from './events';

const googleAnalyticsTrackingCode = 'UA-85159007-1';

export const initializeAnalytics = (): void => {
  const reactGAInitializeOptions: ReactGA.InitializeOptions = {
    debug: process.env.NODE_ENV !== 'production',
    testMode:
      process.env.NODE_ENV !== 'production' || !process.env.ENABLE_ANALYTICS,
  };

  ReactGA.initialize(googleAnalyticsTrackingCode, reactGAInitializeOptions);
};

export const sendAnalyticsEvent = (event: Event): void =>
  ReactGA.event({ ...event, transport: 'beacon' });

export type SendPageViewArgs = {
  path: string;
  title?: string;
};

export const sendPageView = (data: SendPageViewArgs): void =>
  ReactGA.pageview(data.path, undefined, data.title);
