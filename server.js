var net = require('net'),
io = require('socket.io').listen(8888);
 
io.sockets.on('connection', function (web_socket) {
 
var mud_socket = net.connect(4321, function() { // localhost is assumed
// client connected
web_socket.on('input', function(input_data) {
mud_socket.write(input_data);
});
});
 
mud_socket.on('data', function(data) {
web_socket.emit('data', data);
});
 
mud_socket.on('end', function() {
web_socket.disconnect()
});
 
});
