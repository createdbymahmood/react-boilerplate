import { Box, Link } from '@components';

export default function Index() {
    return (
        <Box as={Link} to='Profile' params={{ userId: '123', laptopId: '123' }}>
            Index Page
        </Box>
    );
}
