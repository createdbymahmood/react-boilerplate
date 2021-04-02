const shell = require('shelljs');

module.exports = plop => {
    plop.setGenerator('component', {
        description: 'Create a component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your component name?',
            },
        ],
        actions: [
            {
                type: 'add',
                path:
                    '../../src/app/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
                templateFile: 'component/component.tsx.hbs',
            },
            {
                type: 'add',
                path:
                    '../../src/app/components/{{pascalCase name}}/{{pascalCase name}}.module.scss',
                templateFile: 'component/styles.module.scss.hbs',
            },
            {
                type: 'add',
                path: '../../src/app/components/{{pascalCase name}}/index.ts',
                templateFile: 'component/index.ts.hbs',
            },
        ],
    });

    plop.setGenerator('page', {
        description: 'Create a page',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your page name?',
            },
        ],
        actions: answers => {
            const actions = [
                {
                    type: 'add',
                    path:
                        '../../src/app/pages/{{pascalCase name}}/{{pascalCase name}}.tsx',
                    templateFile: 'page/page.tsx.hbs',
                },
                {
                    type: 'add',
                    path: '../../src/app/pages/{{pascalCase name}}/index.tsx',
                    templateFile: 'page/index.tsx.hbs',
                },
                {
                    type: 'add',
                    path:
                        '../../src/app/pages/{{pascalCase name}}/{{pascalCase name}}.module.scss',
                    templateFile: 'page/index.tsx.hbs',
                    templateFile: 'page/styles.module.scss.hbs',
                },
            ];

            actions.push({
                type: 'prettify',
            });

            return actions;
        },
    });

    plop.setActionType('prettify', (answers, config) => {
        shell.exec(`yarn run prettify`, { silent: true });
        return '';
    });
};
