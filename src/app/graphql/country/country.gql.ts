import { gql } from '@apollo/client';

const _COUNTRY_FRAGMENT_ = gql`
    fragment _COUNTRY_FRAGMENT_ on Country {
        code
        name
        native
        phone
    }
`;

const country = gql`
    query countries {
        countries {
            ..._COUNTRY_FRAGMENT_
        }
    }
`;
