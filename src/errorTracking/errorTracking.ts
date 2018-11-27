import {
  captureException as captureExceptionInSentry,
  init as initializeSentry,
} from '@sentry/browser';

// eslint-disable-next-line typescript/no-non-null-assertion
const sentryDsn = process.env.SENTRY_DSN!;

export const initializeErrorTracking = (): void => {
  initializeSentry({
    dsn: sentryDsn,
    debug: process.env.NODE_ENV !== 'production',
    environment: process.env.NODE_ENV,
  });
};

export const captureException = (error: Error) => {
  captureExceptionInSentry(error);
};
