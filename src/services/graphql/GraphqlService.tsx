import { FC } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/',
    cache: new InMemoryCache(),
});

export const GraphqlService: FC = ({ children }) => (
    <ApolloProvider client={client}>{children}</ApolloProvider>
);
