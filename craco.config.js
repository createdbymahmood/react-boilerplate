const WebpackBar = require('webpackbar');
const { shuffle, pipe, last } = require('lodash/fp');

const colors = [
    '#ff6be9',
    '#30d2ff',
    '#772194',
    '#0067b5',
    '#00d900',
    '#fc2e00',
    '#7875ff',
];
const pickRandomColor = pipe(shuffle, last);

module.exports = {
    plugins: [],
    webpack: {
        alias: {},
        plugins: {
            add: [
                new WebpackBar({ color: pickRandomColor(colors) }),
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
