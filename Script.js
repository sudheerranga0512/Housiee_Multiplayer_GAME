var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http); 
let x=[],p=[1],temp;

app.get('/Tambola', function(req, res) {
   res.sendfile("NumGenerator"); 
  // res.sendfile("Login");
});

io.on('connection', function(socket) {   
  socket.on('clientEvent',function(data){    
    // console.log(data.number); 
    socket.join("room-"+data.code);
     temp=data.number;  
     if(x[data.code]==undefined){
        x[data.code]="";
     }
     x[data.code]=data.number;
     console.log(x[data.code]); 
     console.log(data.code); 
     if(!data.number){
     io.sockets.in("room-"+data.code).emit('connectToRoom', {description:x[data.code]});}
   
     //  io.sockets.emit("connectToRoom",{description:temp})
 
  
}) 

  

  
 });
   
   http.listen(4000, function() {
    console.log('listening on localhost:4000');
 });
