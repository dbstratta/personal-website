import Raven from 'raven-js';

import { env } from '../config';
import { isProductionEnvironment } from '../helpers';

const sentryDsn = 'https://4e2327c6719a41edab217142272e5a79@sentry.io/1245908';

export const initializeErrorTracking = (): void => {
  if (!isProductionEnvironment || !env.enableErrorTracking) {
    return;
  }

  const ravenOptions: Raven.RavenOptions = {
    environment: env.environment,
  };

  Raven.config(sentryDsn, ravenOptions).install();
};

export const captureException = (
  error: Error,
  options?: Raven.RavenOptions,
) => {
  if (!isProductionEnvironment || !env.enableErrorTracking) {
    return;
  }

  Raven.captureException(error, options);
};
