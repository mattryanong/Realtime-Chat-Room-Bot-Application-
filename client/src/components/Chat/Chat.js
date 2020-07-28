import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

// import './Chat.css'

import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

import { Box, Container } from '@material-ui/core';

let socket;


const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000';

    //hook
    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, () => {
            console.log(name, room);
            //callback fn used for error handling
        });

        return () => {
            //fires when component is unmounted
            socket.emit('disconnect');
            //closes socket
            socket.off();
        }
    }, [ENDPOINT, location.search]); //array is added to only re render the component if ENDPOINT/ location.search changes

    useEffect(() => {
        socket.on('message', (message) => {
            //add any message sent to messages array
            setMessages(messages => [...messages, message]);
        })
    }, []);

    //function for sending messages
    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage('')); //callback fn clears textbox when message is sent
        }
    }

    console.log(message, messages);

    return (
        <div style={{ width: '100%' }}>
            <Container>
                <Box display="flex" flexDirection="column" p={1} bgcolor="background.paper"justifyContent="space-between">
                    <Box display="flex" p={2} bgcolor="background.paper" flexGrow={1}>
                        <InfoBar room={room} />
                    </Box>
                    <Box flexGrow={1}>
                        <Messages messages={messages} name={name} />
                    </Box>
                    <Box flexGrow={1}>
                        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
                    </Box>
                </Box>
            </Container>
        </div >
    );
}

export default Chat;