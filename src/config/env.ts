import { makeEnv, parsers } from '@strattadb/environment';

const env = makeEnv({
  environment: {
    parser: parsers.whitelist(['production', 'development', 'test']),
    required: true,
    envVarName: 'NODE_ENV',
  },
  enableAnalytics: {
    parser: parsers.boolean,
    required: false,
    defaultValue: false,
    envVarName: 'ENABLE_ANALYTICS',
  },
  enableErrorTracking: {
    parser: parsers.boolean,
    required: false,
    defaultValue: false,
    envVarName: 'ENABLE_ERROR_TRACKING',
  },
});

export default env;
