import { Button, Container, Stack, TextField } from '@mui/material';
import { FC } from 'react';

const Index: FC = () => {
    return (
        <Container>
            <Stack spacing={1}>
                <TextField
                    sx={{ mt: 2 }}
                    fullWidth
                    placeholder='Salam'
                    label='Username'
                    variant='outlined'
                />
                <Button size='large' fullWidth variant='contained'>
                    Sign In
                </Button>
            </Stack>
        </Container>
    );
};

export default Index;
