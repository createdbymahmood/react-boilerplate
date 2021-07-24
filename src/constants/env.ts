const env = {
    IS_DEV: process.env.NODE_ENV === 'development',
    IS_PROD: process.env.NODE_ENV === 'production',
    IS_TEST: process.env.NODE_ENV === 'test',
};

export default env;
