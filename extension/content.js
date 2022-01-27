socket = io("https://serv.elwan.ch:8080");

socket.on("playPause", () => {
  $(".ytp-play-button").click();
});

function getUrl() {
  return window.location.toString().split("&")[0];
}

function playPause() {
  socket.emit("playPause", getUrl());
}

function sync() {
  socket.emit("join", getUrl());
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "clicked_browser_action") {
    console.log(getUrl());
    playPause();
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.method == "sync") {
    sync();
  } else if (request.method == "playPause") {
    playPause();
  }
});
