import Raven from 'raven-js';

const sentryDsn = process.env.SENTRY_DSN!;

export const initializeErrorTracking = (): void => {
  if (
    process.env.NODE_ENV !== 'production' ||
    !process.env.ENABLE_ERROR_TRACKING
  ) {
    return;
  }

  const ravenOptions: Raven.RavenOptions = {
    environment: process.env.NODE_ENV,
  };

  Raven.config(sentryDsn, ravenOptions).install();
};

export const captureException = (
  error: Error,
  options?: Raven.RavenOptions,
) => {
  if (
    process.env.NODE_ENV !== 'production' ||
    !process.env.ENABLE_ERROR_TRACKING
  ) {
    return;
  }

  Raven.captureException(error, options);
};
