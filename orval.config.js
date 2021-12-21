module.exports = {
    petstore: {
        output: {
            mode: 'single',
            target: './src/api/generated.ts',
            mock: false,
            client: 'react-query',
            override: {
                mutator: {
                    path: './src/services/xhr/xhrService.ts',
                    name: 'xhrServiceInstance',
                },
            },
        },
        input: {
            target: './petstore.yaml',
        },
    },
};
