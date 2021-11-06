import {
    styled,
    Button as OriginalButton,
    Container as OriginalContainer,
} from '@mui/material';
import { spacing } from '@mui/system';

const Button = styled(OriginalButton)(spacing);
const Container = styled(OriginalContainer)(spacing);

export default function Home() {
    return (
        <Container mt={2}>
            <Button variant='contained'>Salam</Button>
        </Container>
    );
}
