//on documnet ready

let socket;
let pageUrl = "asdasdsadsadsadasdasdsadasdasdadas";
$(document).ready(function(){
    socket = io("http://anonymz.internet-box.ch:3000/");
})


function sync(){
    socket.emit('join', pageUrl);
}

function play (){
    socket.emit('play', pageUrl);
}

function pause(){
    socket.emit('pause', pageUrl);
}