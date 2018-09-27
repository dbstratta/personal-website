import ReactGA from 'react-ga';

import { env } from '../config';
import { isProductionEnvironment } from '../helpers';
import { Event } from './events';

const googleAnalyticsTrackingCode = 'UA-85159007-1';

export const initializeAnalytics = (): void => {
  const reactGAInitializeOptions: ReactGA.InitializeOptions = {
    debug: !isProductionEnvironment,
    testMode: !isProductionEnvironment || !env.enableAnalytics,
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
