//on documnet ready

let socket;
let pageUrl = "asdasdsadsadsadasdasdsadasdasdadas";
$(document).ready(function(){
    socket = io("https://serv.elwan.ch:8080");
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