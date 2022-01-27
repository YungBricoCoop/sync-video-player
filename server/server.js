const express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http,  { cors: { origin: '*' } });

io.on('connection', function(socket) {
    socket.on('join', function(room) {
        console.log("joining room: " + room);
        socket.join(room);
    });
    socket.on('play',function(room){
        console.log("playing in room: " + room);
        io.to("").emit("play");
    })
    socket.on('pause',function(room,){
        console.log(`pausing in room: ${room}`);
        io.to("some room").emit("pause");
    })
});


io.listen(3000, () => {
  console.log('listening on *:3000');
});