var http=require('http');

var connected_users={};

var server=http.createServer(function(req,res){
    res.end('hi');
});

server.on('connection',function(socket){
    socket.__fd=socket.fd;
    connected_users[socket.__fd]=socket.remoteAddress;
    console.log(connected_users);
    socket.on('close',function(){
        delete connected_users[socket.__fd];
        console.log(connected_users);
    }); 
    socket.on('data',function(data){
    	socket.write(data);
        console.log(data);
    });
});
server.listen(4321);
