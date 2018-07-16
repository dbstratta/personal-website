import ReactGA from 'react-ga';

import { isProductionEnvironment } from '../helpers/environments';
import { Event } from './events';

export const initializeGoogleAnalytics = () => {
  const googleAnalyticsTrackingCode = 'UA-85159007-1';
  const reactGAInitializeOptions: ReactGA.InitializeOptions = {
    debug: !isProductionEnvironment,
    testMode: !isProductionEnvironment,
  };

  ReactGA.initialize(googleAnalyticsTrackingCode, reactGAInitializeOptions);
};

export const sendAnalyticsEvent = (event: Event): void =>
  ReactGA.event({ ...event, transport: 'beacon' });

export type SendPageVisitArgs = {
  path: string;
  title?: string;
};

export const sendPageVisit = (data: SendPageVisitArgs): void =>
  ReactGA.pageview(data.path, undefined, data.title);
