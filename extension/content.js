socket = io("http://anonymz.internet-box.ch:3000/");


function getUrl(){
    return window.location.toString();
}

function playPause(){
    $(".ytp-play-button").click();
}

function sync(){
    socket.emit('join', pageUrl);
}


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {
        console.log(getUrl());
        playPause();
      }
    }
  );

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.method == "sync"){

        }
        else if ( request.method ==  "playPause"){
            playPause();
        }
    }
);