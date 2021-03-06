module.exports = {
    extends: [
        'react-app',
        'prettier',
        'plugin:prettier/recommended',
        'react-app/jest',
    ],
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
};
