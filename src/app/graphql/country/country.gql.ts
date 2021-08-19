import { gql } from '@apollo/client';

const country = gql`
    query countries {
        countries {
            code
            name
            native
            phone
        }
    }
`;
