import Raven from 'raven-js';

import { env } from '../config';
import { isProductionEnvironment } from '../helpers';

export const initializeErrorTracking = (): void => {
  if (!isProductionEnvironment) {
    return;
  }

  const sentryDsn =
    'https://4e2327c6719a41edab217142272e5a79@sentry.io/1245908';

  const ravenOptions: Raven.RavenOptions = {
    environment: env.environment,
  };

  Raven.config(sentryDsn, ravenOptions).install();
};

export const captureException = (
  error: Error,
  options?: Raven.RavenOptions,
) => {
  Raven.captureException(error, options);
};
