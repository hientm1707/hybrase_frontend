// pages/tasks.tsx
import { useEffect, useState } from 'react';
import { Box, Button, Input, List, ListItem, Stack, Heading } from '@chakra-ui/react';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        // Fetch tasks from the backend API
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tasks`)
            .then(response => response.json())
            .then(data => setTasks(data));
    }, []);

    const handleAddTask = async () => {
        // Send new task to the backend API
        const response = await fetch('/api/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: newTask }),
        });
        const task = await response.json();
        setTasks([...tasks, task]);
        setNewTask('');
    };

    return (
        <Box p={5}>
            <Heading mb={5}>Tasks</Heading>
            <Stack spacing={3}>
                <Input
                    placeholder="New Task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <Button onClick={handleAddTask}>Add Task</Button>
                <List spacing={3}>
                    {tasks.map((task: any) => (
                        <ListItem key={task.id}>{task.name}</ListItem>
                    ))}
                </List>
            </Stack>
        </Box>
    );
};

export default Tasks;
