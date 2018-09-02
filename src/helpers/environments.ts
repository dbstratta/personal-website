import { env } from '../config';

export const isDevelopmentEnvironment = env.environment === 'development';

export const isProductionEnvironment = env.environment === 'production';
