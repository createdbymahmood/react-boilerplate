import * as React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/',
    cache: new InMemoryCache(),
});

export const GraphqlService: React.FC = ({ children }) => (
    <ApolloProvider client={client}>{children}</ApolloProvider>
);
