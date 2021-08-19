import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** The `Upload` scalar type represents a file upload. */
    Upload: any;
};

export enum CacheControlScope {
    Public = 'PUBLIC',
    Private = 'PRIVATE',
}

export type Continent = {
    __typename?: 'Continent';
    code: Scalars['ID'];
    name: Scalars['String'];
    countries: Array<Country>;
};

export type ContinentFilterInput = {
    code: Maybe<StringQueryOperatorInput>;
};

export type Country = {
    __typename?: 'Country';
    code: Scalars['ID'];
    name: Scalars['String'];
    native: Scalars['String'];
    phone: Scalars['String'];
    continent: Continent;
    capital: Maybe<Scalars['String']>;
    currency: Maybe<Scalars['String']>;
    languages: Array<Language>;
    emoji: Scalars['String'];
    emojiU: Scalars['String'];
    states: Array<State>;
};

export type CountryFilterInput = {
    code: Maybe<StringQueryOperatorInput>;
    currency: Maybe<StringQueryOperatorInput>;
    continent: Maybe<StringQueryOperatorInput>;
};

export type Language = {
    __typename?: 'Language';
    code: Scalars['ID'];
    name: Maybe<Scalars['String']>;
    native: Maybe<Scalars['String']>;
    rtl: Scalars['Boolean'];
};

export type LanguageFilterInput = {
    code: Maybe<StringQueryOperatorInput>;
};

export type Query = {
    __typename?: 'Query';
    continents: Array<Continent>;
    continent: Maybe<Continent>;
    countries: Array<Country>;
    country: Maybe<Country>;
    languages: Array<Language>;
    language: Maybe<Language>;
};

export type QueryContinentsArgs = {
    filter: Maybe<ContinentFilterInput>;
};

export type QueryContinentArgs = {
    code: Scalars['ID'];
};

export type QueryCountriesArgs = {
    filter: Maybe<CountryFilterInput>;
};

export type QueryCountryArgs = {
    code: Scalars['ID'];
};

export type QueryLanguagesArgs = {
    filter: Maybe<LanguageFilterInput>;
};

export type QueryLanguageArgs = {
    code: Scalars['ID'];
};

export type State = {
    __typename?: 'State';
    code: Maybe<Scalars['String']>;
    name: Scalars['String'];
    country: Country;
};

export type StringQueryOperatorInput = {
    eq: Maybe<Scalars['String']>;
    ne: Maybe<Scalars['String']>;
    in: Maybe<Array<Maybe<Scalars['String']>>>;
    nin: Maybe<Array<Maybe<Scalars['String']>>>;
    regex: Maybe<Scalars['String']>;
    glob: Maybe<Scalars['String']>;
};

export type CountriesVariables = Exact<{ [key: string]: never }>;

export type Countries = {
    __typename?: 'Query';
    countries: Array<{
        __typename?: 'Country';
        code: string;
        name: string;
        native: string;
        phone: string;
    }>;
};

export const CountriesDocument = gql`
    query countries {
        countries {
            code
            name
            native
            phone
        }
    }
`;

/**
 * __useCountries__
 *
 * To run a query within a React component, call `useCountries` and pass it any options that fit your needs.
 * When your component renders, `useCountries` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountries({
 *   variables: {
 *   },
 * });
 */
export function useCountries(
    baseOptions?: Apollo.QueryHookOptions<Countries, CountriesVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<Countries, CountriesVariables>(
        CountriesDocument,
        options,
    );
}
export function useCountriesLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<Countries, CountriesVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<Countries, CountriesVariables>(
        CountriesDocument,
        options,
    );
}
export type CountriesHookResult = ReturnType<typeof useCountries>;
export type CountriesLazyQueryHookResult = ReturnType<
    typeof useCountriesLazyQuery
>;
export type CountriesQueryResult = Apollo.QueryResult<
    Countries,
    CountriesVariables
>;
