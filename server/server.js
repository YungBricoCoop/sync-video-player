var fs = require("fs");
var app = require("express")();
var https = require("https");
var cors = require("cors");
var crypto = require('crypto');

//Create a secured server using ssl certificate files
var server = https.createServer(
  {
    key: fs.readFileSync("/etc/letsencrypt/live/yourdomain/privkey.pem"),
    cert: fs.readFileSync("/etc/letsencrypt/live/yourdomain/cert.pem"),
    ca: fs.readFileSync("/etc/letsencrypt/live/yourdomain/chain.pem"),
    requestCert: false,
    rejectUnauthorized: false,
  },
  app
);

//Listen on port 8080
server.listen(8080);

//Allow cross-origin requests only from youtube.com
var io = require("socket.io")(server, {
  cors: {
    origin: "https://www.youtube.com",
    methods: ["GET", "POST"],
  },
});

io.sockets.on("connection", function (socket) {

  //listen on the join event
  socket.on("join", function (room) {
    //hash video url to create a roomId
    let roomId = crypto.createHash("md5").update(room).digest("hex");
    console.log(`Client[${socket.id}] Joined Room[${roomId}]`);
    socket.join(roomId);
  });

  //listen on the playPause event
  socket.on("playPause", function (data) {
    let roomId = data.split(":::")[0];
    //get timestamp
    let timestamp = data.split(":::")[1];
    //hash video url to create a roomId
    roomId = crypto.createHash("md5").update(roomId).digest("hex");
    console.log(
      `Client[${socket.id}] Played/Paused Room[${roomId}] Timestamp[${timestamp}]`
    );
    //broadcast the playPause event to all clients in the same room
    io.to(roomId).emit("playPause", timestamp);
  });

});
