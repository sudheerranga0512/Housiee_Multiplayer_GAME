var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);  
const port=8900;
const mongo=require('mongodb');  
//const hbs = require('express-handlebars');
const MongoClient=mongo.MongoClient; 
const mongourl="mongodb://localhost:27017";   
const cors=require("cors"); 
const bodyparser=require("body-parser"); 
const math=require('math');  
const otp=require("./otp");
var fs=require('fs'); 
const session=require('express-sessions')
const { SSL_OP_CIPHER_SERVER_PREFERENCE } = require('constants'); 
const opn = require("opn");
let db; 
let col_name="signup"; 
let ti_name="ticket"; 
let list=[];
let i=0; 
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json()); 
app.use(cors());   
let x=[],a=[];
//app.engine('handlebars',exphbs({defaultLayout: 'main'}))
//app.set('view engine', 'handlebars'); 
//var tambola = require('tambola-generator'); 
app.get("/",(req,res)=>{
    res.send("Ticket1");
})

 
MongoClient.connect(mongourl,(err,client)=>{
    if(err) throw err;
   db= client.db("test");
    console.log("successfully connected!!!") ;
    
})      
app.post('/link',(req,res)=>{
    console.log("node is ok") ;
    console.log(req.query.text); 
    console.log(req.query.code); 
    let p="s"+req.query.code;
    db.collection(p).insert([{"text":req.query.text,"code":req.query.code,"username":req.query.username}]),((err,result)=>{
        if(err) throw err;
        console.log("\n"+result.text);
    })
})
app.get('/numbers',(req,res)=>{
//c=tambola.getTickets(1); 
/*db.collection(ti_name).insert([{c}],(error,result)=>{
    if(error) throw error;  
    console.log(result);
})*/
db.collection(ti_name).find().toArray((err,result)=>{
if(err) throw err;
else 
res.send(result);
})

})  
app.get('/about', (req , res)=>{ 
    db.collection(col_name).find().toArray((err,result)=>{
        if(err){
            throw err
        } 
        else{
             res.send(result);
        }
    });
});



app.get("/",(req,res)=>{
    res.send("Hello World");
})
app.post("/signup",(req,res)=>{   
    let phonenumber=req.body.ph;

list[i]={email  :req.body.uname,
        password :req.body.psw,
       phonenumber:req.body.ph,  
       otp:phonenumber.slice(3,5)+phonenumber.slice(6,8)+phonenumber.slice(9,11)
    }    
   var c= otp(list[i].otp);
    res.writeHead(200,{'Content-Type':'text/html'});
        var myReadStream =fs.createReadStream('\otp.html','utf-8');
        myReadStream.pipe(res);  
        console.log(list);
       
    })   
    app.get("/Gendata",(req,res)=>{
        db.collection("number").find().toArray((err,result)=>{
            if(err) throw err;
            res.send(result);
        })
    })
app.post("/Gencode",(req,res)=>{  
    let l=0,d=[1],x;
      
    while(d.length != 0 && l<91) {
       d=a.filter(function(number) { 
         return number==x;
    });         
    if(d.length !=0){
    x=Math.floor(Math.random()*(90)+1);  }
    else{  
      a[l]=x; 
      l++; 
      d=[1]; 
      x=Math.floor(Math.random()*(90)+1) ;
      }      
    
     }        
   let p= "s"+req.query.invitecode
          
    
         db.collection(p).insert([{"username":req.query.username,"code":req.query.invitecode,"numbers":a}]); 
        // alert("send this code to play with ur friends");
        // opn("http://localhost:3000/Ticket1",target="_self");
     
})
app.post("/otp",(req,res)=>{
    var c=req.body.verification;   
     console.log(c);
    let p=list.filter(function(list1){
            return list1.otp==c;
    }) 
    if(p.length!=0){ 
        for(var l=0;l<i;l++) {
            if(list[l]==p){
                console.log("resultfound"); 
                break;
            }
        }   
        db.collection(col_name).insert([{
            "email":list[l].email,
            "password":list[l].password,
            "phonenumber":list[l].phonenumber
           //  "otp":Math.floor(math.random()*(99999-10000)+10000)
        }],(error,result)=>{
            if(error) throw error;
           // port=3000; 
           //window.open();
            //res.send("success"); 
            //res.redirect("http://localhost:3000")  
            
       /* return     res
                    .status(OK)
                    .json({ item })
      */ opn( 'http://localhost:3000',target='_self');
            
        })

    } 
    else{
        res.send("otp is incorrect so u r unsuccessful to create ur account"); 
    }
    }) 
    app.get("/GetData",(req,res)=>{
        let p= "s"+req.query.code; 
        console.log(p);
        db.collection(p).find().toArray((err,result)=>{
            if(err) throw err;
            res.send(result);
        })
        
    })   
    app.post("/store",(req,res)=>{
        var code="s"+req.query.code; 
        var winning=req.query.Winning; 
        console.log(winning);
        var username=req.query.username; 
        db.collection(code).insert([{"username":username,"winning":winning}],(err,result)=>{
            if(err) throw err; 
            console.log(result);
        })
    })
    io.on('connection', function(socket) {  
      //  console.log('connected');

        socket.on('clientEvent', function(data) {  
         //   console.log("hii"); 
           // console.log(data.number);
     socket.join("room-"+data.code);  
     if(x[data.code]==undefined){
        x[data.code]="";
     } 
     if(data.display==undefined && data.message==undefined){
    // console.log(data.number);
        io.sockets.in("room-"+data.code).emit('connectToRoom', {description:data.number}); 
     }  
     else if(data.number==undefined && data.display==undefined){ 
         console.log(data.message); 
         x[data.code]=x[data.code]+data.message+"</br>" 
         console.log(x[data.code]);
         io.sockets.in("room-"+data.code).emit('connectToRoom',{description:x[data.code]})
     }
     else{ 
         console.log(data.display); 
        
         io.sockets.in("room-"+data.code).emit('connectToRoom',{description:data.display})
     }
        });   
    
    })
    http.listen(port, function() {
        console.log('listening on localhost:'+port);
     });
    