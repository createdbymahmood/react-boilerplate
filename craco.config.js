const WebpackBar = require('webpackbar');

module.exports = {
    style: {
        postcss: {
            plugins: [require('tailwindcss'), require('autoprefixer')],
        },
    },
    plugins: [],
    webpack: {
        alias: {},
        plugins: {
            add: [
                new WebpackBar({ color: '#772194' }),
            ] /* An array of plugins */,
            remove: [] /* An array of plugin constructor's names (i.e. "StyleLintPlugin", "ESLintWebpackPlugin" ) */,
        },
        configure: (webpackConfig, { env, paths }) => {
            webpackConfig.module.rules.push({
                type: 'javascript/auto',
                test: /\.mjs$/,
                use: [],
            });
            return webpackConfig;
        },
    },
    eslint: {
        enable: false /* (default value) */,
        mode: 'file' /* (default value) */,
        configure: eslintConfig => {
            return eslintConfig;
        },
        pluginOptions: eslintOptions => {
            return eslintOptions;
        },
    },

    babel: {
        presets: [],
        plugins: ['lodash'],
        loaderOptions: babelLoaderOptions => {
            return babelLoaderOptions;
        },
    },
};
