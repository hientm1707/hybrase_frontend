// pages/projects.tsx
import { useEffect, useState } from 'react';
import { Box, Heading, List, ListItem } from '@chakra-ui/react';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch projects from the backend API
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`)
            .then(response => response.json())
            .then(data => setProjects(data));
    }, []);

    return (
        <Box p={5}>
            <Heading mb={5}>Projects</Heading>
            <List spacing={3}>
                {projects.map((project: any) => (
                    <ListItem key={project.id}>{project.name}</ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Projects;
