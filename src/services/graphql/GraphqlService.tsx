import * as React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { todos } from 'graphql/reactives';

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                todos: {
                    read() {
                        return todos();
                    },
                },
            },
        },
    },
});

const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/',
    cache,
});

export const GraphqlService: React.FC = ({ children }) => (
    <ApolloProvider client={client}>{children}</ApolloProvider>
);
