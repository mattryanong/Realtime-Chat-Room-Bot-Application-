import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.css'

import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

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
    }, [ ]);

    //function for sending messages
    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage('')); //callback fn clears textbox when message is sent
        }
    }

    console.log(message, messages);

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room}/>
                <Messages messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} /> 
            </div>
        </div>
    )
}

export default Chat;