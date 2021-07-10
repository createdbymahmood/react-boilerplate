import styled from 'styled-components';

import { space, layout, color, compose } from 'styled-system';

const Box = styled('div')(compose(space, layout, color));

export default function Index() {
    return (
        <Box color="red" bg="white">
            Salam
        </Box>
    );
}
