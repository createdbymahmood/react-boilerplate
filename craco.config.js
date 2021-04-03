const CracoAlias = require('craco-alias');
const WebpackBar = require('webpackbar');

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                // baseUrl SHOULD be specified
                // plugin does not take it from tsconfig
                baseUrl: 'src',
                /* tsConfigPath should point to the file where "baseUrl" and "paths" 
           are specified*/
                tsConfigPath: './tsconfig.paths.json',
            },
        },
    ],
    webpack: {
        alias: {},
        plugins: {
            add: [
                new WebpackBar({ color: '#772194' }),
            ] /* An array of plugins */,
            remove: [] /* An array of plugin constructor's names (i.e. "StyleLintPlugin", "ESLintWebpackPlugin" ) */,
        },
        configure: {
            /* Any webpack configuration options: https://webpack.js.org/configuration */
        },
        configure: (webpackConfig, { env, paths }) => {
            return webpackConfig;
        },
    },
    eslint: {
        enable: false /* (default value) */,
        mode: 'extends' /* (default value) */,
        configure: {
            /* Any eslint configuration options: https://eslint.org/docs/user-guide/configuring */
        },
        configure: (eslintConfig, { env, paths }) => {
            return eslintConfig;
        },
        pluginOptions: {
            /* Any eslint plugin configuration options: https://github.com/webpack-contrib/eslint-webpack-plugin#options. */
        },
        pluginOptions: (eslintOptions, { env, paths }) => {
            return eslintOptions;
        },
    },
};
