var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http); 
let x,a=[],d=[1],l=0;
app.get('/', function(req, res) {
   res.sendfile('NumGenerator');
});

io.on('connection', function(socket) {
   
    setTimeout(function() {  
        while(d.length!=0){ 
                               
          x=Math.floor(Math.random()*(90)+1);


          d=a.filter(function(number) { 
              return number==x;
         });         
         if(d.length !=0){
         x=Math.floor(Math.random()*(90)+1);  
            }
         else {  
              a[l]=x;     
              l++;  
              socket.broadcast.emit('newdata',{description:x}); 
              //this.setState({number1:x});   
         }  
        }

        if(l<90){
          d=[1];
        }     
        else{
          d=[0];
        }

      },10000)

         
      //socket.broadcast.emit('newclientconnect',{description : x});
   }); 
   http.listen(3000, function() {
    console.log('listening on localhost:3000');
 });
