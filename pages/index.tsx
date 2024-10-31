// pages/index.tsx
import { Box, Button, Heading, Stack } from '@chakra-ui/react';
import Link from 'next/link';

const Home = () => {
    return (
        <Box p={5}>
            <Heading mb={5}>Welcome to Hybrase Frontend</Heading>
            <Stack spacing={3}>
                <Link href="/projects" passHref>
                    <Button as="a" colorScheme="teal" size="md">
                        Go to Projects
                    </Button>
                </Link>
                <Link href="/register" passHref>
                    <Button as="a" colorScheme="teal" size="md">
                        Register
                    </Button>
                </Link>
                <Link href="/tasks" passHref>
                    <Button as="a" colorScheme="teal" size="md">
                        View Tasks
                    </Button>
                </Link>
            </Stack>
        </Box>
    );
};

export default Home;
