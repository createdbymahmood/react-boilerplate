const CracoAlias = require('craco-alias');
const WebpackBar = require('webpackbar');

module.exports = {
    style: {
        postcss: {
            plugins: [require('tailwindcss'), require('autoprefixer')],
        },
    },
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                // baseUrl SHOULD be specified
                // plugin does not take it from tsconfig
                baseUrl: 'src',
                /* tsConfigPath should point to the file where "baseUrl" and "paths"  are specified*/
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
        configure: (webpackConfig, { env, paths }) => {
            return webpackConfig;
        },
    },
    eslint: {
        enable: true /* (default value) */,
        mode: 'file' /* (default value) */,
        configure: eslintConfig => {
            return eslintConfig;
        },
        pluginOptions: eslintOptions => {
            return eslintOptions;
        },
    },
};
