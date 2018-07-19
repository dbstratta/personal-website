import Raven from 'raven-js';

import { isProductionEnvironment } from '../helpers';

export const initializeErrorTracking = (): void => {
  const sentryDsn =
    'https://4e2327c6719a41edab217142272e5a79@sentry.io/1245908';
  const ravenOptions: Raven.RavenOptions = {
    environment: process.env.NODE_ENV,
    debug: !isProductionEnvironment,
  };

  Raven.config(sentryDsn, ravenOptions);
};

export const captureException = (
  error: Error,
  options?: Raven.RavenOptions,
) => {
  Raven.captureException(error, options);
};
