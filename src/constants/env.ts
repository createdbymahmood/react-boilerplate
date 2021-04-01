import { isEqual, get, pipe } from 'lodash/fp';

const nodeEnvIs = (key: 'development' | 'production' | 'test'): boolean => {
    return pipe(
        get('env'),
        get('NODE_ENV'),
        isEqual(key),
    )(process.env.NODE_ENV);
};

const isDevelopment = nodeEnvIs('development');
const isProduction = nodeEnvIs('production');
const isTest = nodeEnvIs('test');

export default { isDevelopment, isProduction, isTest };
