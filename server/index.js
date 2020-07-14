const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const PORT = process.env.PORT || 5000

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);

io.on('connection', (socket) => {
    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });

        //using callback for error handling  
        if(error) {
            return callback(error);
        }      

        //if no error detected, join user to the room
        socket.join(user.room)

        //Sending messages from backend to front
        //lets user know he is in the chat
        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room ${user.room}`});
        //lets everyone else know he is in the chat
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!`});

        // console.log(user.room);

        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});

        callback()
    });

    //Expecting messages from front end
    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);
        // console.log(user);
        // console.log(user.room);
        io.to(user.room).emit('message', { user: user.name, text: message});
        io.to(user.room).emit('roomData', { user: user.name, text: message, users: getUsersInRoom(user.room)});

        callback();
    });

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);

        if(user) {
            io.to(user.room).emit('message', { user: 'admin' , text: `${user.name} has left.`})
        }
    })
})


server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));