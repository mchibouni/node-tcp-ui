var net = require('net'),
io = require('socket.io').listen(8888);

var app = require('net')
  , fs = require('fs')

var sockets_list = [];

var server = app.createServer(function (socket) {
  sockets_list.push(socket);
  socket.setEncoding("utf8");

  socket.on('data', function(data) {
    console.log(data);
    for (var i = 0; i < sockets_list.length; i++) {
        sockets_list[i].write(data);
    }


  });

  socket.on('end', function() {
    var i = sockets_list.indexOf(socket);
    sockets_list.splice(i, 1);
  });


});



server.listen(81);

	io.sockets.on('connection', function (web_socket) {

var mud_socket = net.connect(81, function() { // localhost is assumed
console.log("bvoooo");
web_socket.on('input', function(input_data) {
  mud_socket.setEncoding("utf8");
	mud_socket.write(input_data);
});
});

mud_socket.on('data', function(data) {
//	mud_socket.write("UNNN");
	web_socket.emit('data', data);
});

mud_socket.on('end', function() {
	web_socket.disconnect()
});

});
