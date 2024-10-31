// components/Chat.tsx
import { useState } from 'react';
import { Box, Button, Input, Stack, Text } from '@chakra-ui/react';

const Chat = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        setMessages([...messages, newMessage]);
        setNewMessage('');
    };

    return (
        <Box p={5}>
            <Stack spacing={3}>
                {messages.map((msg, index) => (
                    <Text key={index}>{msg}</Text>
                ))}
                <Input
                    placeholder="Type a message"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <Button onClick={handleSendMessage}>Send</Button>
            </Stack>
        </Box>
    );
};

export default Chat;
