// pages/register.tsx
import { useState } from 'react';
import { Box, Button, Input, Stack, Heading } from '@chakra-ui/react';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleRegister = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password, email }),
            });

            if (!response.ok) {
                throw new Error('Failed to register');
            }

            const data = await response.json();
            console.log(data.message);
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <Box p={5}>
            <Heading mb={5}>Register</Heading>
            <Stack spacing={3}>
                <Input
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={handleRegister}>Register</Button>
            </Stack>
        </Box>
    );
};

export default Register;
