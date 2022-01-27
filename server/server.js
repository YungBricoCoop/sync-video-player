var fs = require("fs");
var app = require("express")();
var https = require("https");
var cors = require("cors");
var crypto = require('crypto');

app.use(cors());

var server = https.createServer(
    {
      key: fs.readFileSync("/etc/letsencrypt/live/serv.elwan.ch/privkey.pem"),
      cert: fs.readFileSync("/etc/letsencrypt/live/serv.elwan.ch/cert.pem"),
      ca: fs.readFileSync("/etc/letsencrypt/live/serv.elwan.ch/chain.pem"),
      requestCert: false,
      rejectUnauthorized: false,
    },
    app
  );
  server.listen(8080);
  

var io = require("socket.io")(server,{
  cors: {
	  origin: "https://www.youtube.com",
    methods: ["GET", "POST"]
  }
});

io.sockets.on("connection", function (socket) {
	console.log("New connection")
  socket.on("join", function (room) {
    let roomId = crypto.createHash('md5').update(room).digest('hex');
    console.log("joining room: " + roomId);
	  socket.join(roomId);
  });
  socket.on("playPause", function (room) {
    let roomId = crypto.createHash('md5').update(room).digest('hex');
    console.log("playing in room: " + roomId);
    io.to(roomId).emit("playPause");
  });
});

app.get("/", function (request, response) {
  response.send("asd");
}); // needed to read certificates from disk


