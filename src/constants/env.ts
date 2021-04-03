import { isEqual } from 'lodash/fp';

const nodeEnvIs = (key: 'development' | 'production' | 'test'): boolean => {
    return isEqual(key)(process.env.NODE_ENV);
};

const isDevelopment = nodeEnvIs('development');
const isProduction = nodeEnvIs('production');
const isTest = nodeEnvIs('test');

const variables = { isDevelopment, isProduction, isTest };

export default variables;
