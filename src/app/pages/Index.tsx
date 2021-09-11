import { FC } from 'react';
import { Box, DocumentTitle } from '@components';
import { useCountries } from '@graphql';
import { snakeCase } from 'lodash';

function useCountriesElement() {
    const { loading, data } = useCountries();
    if (loading) return `loading...`;
    return data?.countries.map(c => <div>{snakeCase(c.name)}</div>);
}

const Index: FC = () => {
    const ce = useCountriesElement();

    return (
        <Box>
            <DocumentTitle title='Home' />
            {ce}
        </Box>
    );
};

export default Index;
