let socket; 

//Get the url of the current video
function getUrl() {
  return window.location.toString().split("&")[0];
}

//Get video current timestamp
function getTimestamp(){
  return document.getElementsByTagName('video')[0].currentTime;
}

//Set video timestamp
function setTimestamp(timestamp){
  document.getElementsByTagName('video')[0].currentTime = timestamp;
}

//Send playPause when clicking on play/pause
function playPause() {
  socket.emit("playPause",getUrl()+":::"+getTimestamp());
}

//Join room
function sync() {
  //Create a new socket
  socket = io("https://yourdomain:8080", {
    reconnectionAttempts: 3
  });
  //Event listener for playPause
  socket.on("playPause", (timestamp) => {
    setTimestamp(timestamp);
    $(".ytp-play-button").click();
  });
  socket.emit("join", getUrl());
}

//Add listener to the sync and play/pause button
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.method == "sync") {
    sync();
  } else if (request.method == "playPause") {
    playPause();
  }
});
