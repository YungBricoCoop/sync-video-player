//on documnet ready


function sync(){
    socket.emit('join', pageUrl);
}

function play (){
    socket.emit('play', pageUrl);
}

function pause(){
    socket.emit('pause', pageUrl);
}