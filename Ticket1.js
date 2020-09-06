import React,{Component} from 'react'; 
import tambola from 'tambola-generator';
//import Tambola from 'Tambola-generator';
//import tambola from 'Tambola-generator';  
//import {useSpeechSynthesis}  from 'react-speech-kit';   
import io from 'socket.io-client'; 
import $ from 'jquery' ;

let a=[],l=0,x="0",d=[1],jaldi=0,Line1=0,Line2=0,Line3=0,full=0,f=-1,display=0; 
const locurl="http://localhost:8900/Gendata";
class Ticket1 extends Component{ 
  
    constructor(props){ 
 super(props) 
  this.getInputs=this.getInputs.bind(this);  
  this.Send=this.Send.bind(this);
  this.Jaldi=this.Jaldi.bind(this);
  this.Line1=this.Line1.bind(this);
  this.Line2=this.Line2.bind(this); 
  this.Line3=this.Line3.bind(this); 
  this.full=this.full.bind(this); 
  this.change=this.change.bind(this); 
 
        this.state={  
            id:"1", 
            sudheer:'',
            number :tambola.getTickets(1),
            number1:"Click  Btn", 
            username:localStorage.getItem("username")    ,    
            code:localStorage.getItem("code"),      
            group:"", 
        
        } 
        
    }   
 
change=(event)=>{  
var x=event.target.innerText;   
console.log(x);
let p=event.target.id;  
if(document.getElementById("b"+x).style.backgroundColor=="tomato"){ 
    console.log(p);
    document.getElementById(p).style.backgroundColor = "blue";
}   
d=[1];
}
        
        getInputs = (event) => {   
                            if(display==0 ){ 
                            
                                      x="Game Starts"       
                                    this.setState({number1:x});   
                                    x=0;

                                  } 
                                  const socket = io("http://localhost:8900/"); 
                                  let z; 
                                  if(this.state.group=="active"){
                                  x=this.state.users[0].numbers[l]  
                                 
                                  //this.setState({l: l+1}); 
                                 // console.log(this.state.l);
                                  console.log(l); 
                                  
                              
                                  console.log(z); 
                                  console.log(x); 
                                 
                                  }    
                                  a[l]=x; 
                                  l=l+1;
                                 z=this.state.code; 

                                  socket.emit('clientEvent', {number:x,code:z});
                                  socket.on('connectToRoom',function(data){   
                                    console.log(data.description);
                                      if(data.description!=0 && data.description!="Game Starts" && data.description != null&&typeof(data.description)=="number"){
                                      console.log(data.description);  
                                   document.getElementById("b"+data.description).style.backgroundColor="tomato"; 
                                    document.getElementById("rNum").innerHTML=data.description;} 
                                    else if(data.description!=0 && data.description!="Game Starts" && data.description != null&&typeof(data.description)=="string"){
                                      
                                        if(data.description=="Jaldi"||data.description=="Line1"||data.description=="Line2"||data.description=="Line3"||data.description=="full"){
                                        document.getElementById(data.description).style.backgroundColor="black"; 
                                        document.getElementById(data.description).innerHTML="FINISH"; } 
                                        else{   
                                            
                                            document.getElementById("innerchat").innerHTML="";
                                            document.getElementById("innerchat").innerHTML="<p>"+data.description+"</P>"
                                        } 
                                  
                                    } 
                                  })  
                                  
                                
                }   
                Exit(event){
                    window.open("http://localhost:3000/FinalPage","_self");
                }
 Send(event){
     let z=this.state.code; 
     let p=document.getElementById("inputChat").value;
     let x=this.state.username +":"+p;  
     const socket = io("http://localhost:8900/");  
     socket.emit('clientEvent',{message:x,code:z});
 }
       
        
 Jaldi(event){
     var x=0; 
     let z=this.state.code; 
     const socket = io("http://localhost:8900/");  
    for(var i=1;i<=27&&jaldi==0;i++){
        if(document.getElementById(i).style.backgroundColor=="blue"){ 
            x++;
        }
    } 
    if(x==5){
        jaldi=1; 
        let p="Jaldi";
        document.getElementById("Jaldi").style.backgroundColor="black"; 
        document.getElementById("Jaldi").innerHTML="FINISH";  
        $.ajax({
            url: 'http://localhost:8900/store?username='+this.state.username+'&code='+this.state.code+'&Winning='+p, 
            type : 'post',  
            //data:text
            sucess:(post)=>{
                console.log("completed");
            }

        });

        const socket = io("http://localhost:8900/");  
       socket.emit('clientEvent', {display:"Jaldi",code:z});
    } 
    else{ 
        jaldi=0; 
    }  
   
   
     
 } 
 Line1(event){
var x=0; 
let z=this.state.code;
for(var i=1;i<=9 && Line1==0;i++){
    if(document.getElementById(i).style.backgroundColor=="blue"){ 
        x++;
    } 
    if(x==5){
        Line1=1;   
        let p="Line1";
        document.getElementById("Line1").style.backgroundColor="black"; 
        document.getElementById("Line1").innerHTML="FINISH" ;  
        $.ajax({
            url: 'http://localhost:8900/store?username='+this.state.username+'&code='+this.state.code+'&Winning='+p, 
            type : 'post',  
            //data:text
            sucess:(post)=>{
                console.log("completed");
            }

        });
        const socket = io("http://localhost:8900/");  
        socket.emit('clientEvent', {display:"Line1",code:z});
    } 
    else{ 
        Line1=0; 
    }
}
 } 
 Line2(event){ 
    var x=0; 
    let z=this.state.code;
    for(var i=10;i<=18 && Line2==0;i++){
        if(document.getElementById(i).style.backgroundColor=="blue"){ 
            x++;
        } 
        if(x==5){
            Line2=1;  
            let p="Line2";
            document.getElementById("Line2").style.backgroundColor="black"; 
            document.getElementById("Line2").innerHTML="FINISH";  
            $.ajax({
                url: 'http://localhost:8900/store?username='+this.state.username+'&code='+this.state.code+'&Winning='+p, 
                type : 'post',  
                //data:text
                sucess:(post)=>{
                    console.log("completed");
                }
    
            });    
            const socket = io("http://localhost:8900/");  
        socket.emit('clientEvent', {display:"Line2",code:z});
        } 
        else{ 
            Line2=0; 
        }

 }  
}
 Line3(event){
    var x=0; 
    let z=this.state.code;
    for(var i=19;i<=27&&Line3==0;i++){
        if(document.getElementById(i).style.backgroundColor=="blue"){ 
            x++;
        } 
        if(x==5){
            Line3=1;  
            let p="Line3";
            document.getElementById("Line3").style.backgroundColor="black"; 
            document.getElementById("Line3").innerHTML="FINISH";  
            $.ajax({
                url: 'http://localhost:8900/store?username='+this.state.username+'&code='+this.state.code+'&Winning='+p, 
                type : 'post',  
                //data:text
                sucess:(post)=>{
                    console.log("completed");
                }
    
            });
           
            const socket = io("http://localhost:8900/");  
        socket.emit('clientEvent', {display:"Line3",code:z});
        } 
        else{ 
            Line3=0; 
        }
 } 
} 
 full(event){ 
    var x=0; 
    let z=this.state.code;
    for(var i=1;i<=27 && full==0;i++){
        if(document.getElementById(i).style.backgroundColor=="blue"){ 
            x++;
        } 
        if(x==15){
            full=1;  
            let p="full";
            document.getElementById("full").style.backgroundColor="black"; 
            document.getElementById("full").innerHTML="FINISH";  
            $.ajax({
                url: 'http://localhost:8900/store?username='+this.state.username+'&code='+this.state.code+'&Winning='+p, 
                type : 'post',  
                //data:text
                sucess:(post)=>{
                    console.log("completed");
                }
    
            });    
            const socket = io("http://localhost:8900/");  
        socket.emit('clientEvent', {display:"full",code:z});
        } 
        else{ 
            full=0; 
        }

}
 }
    render(){   
        
        
     
        return(
            <div>  
                <h1>PlayerName:{this.state.username}</h1>   
                <h1>Code:{this.state.code}</h1> 
                <button id="Exit" class="btn btn-danger" type="submit" onClick={this.Exit}>ExitGame</button>
                <table style={{border:"1px solid black" },{ color:"red"}}> 
                  
                <tr>
        <th colspan="9"><center>Ticket {this.state.id}</center></th>
                </tr>
                    <tr>
                 <td><button id="1" onClick={this.change}> { this.state.number[0][0][0] }</button></td> 
                 <td><button id="2" onClick={this.change}> { this.state.number[0][0][1] }</button></td>
                 <td><button id="3" onClick={this.change}>{ this.state.number[0][0][2] }</button></td>
                 <td> <button id="4" onClick={this.change}>{ this.state.number[0][0][3] }</button></td>
                 <td><button id="5" onClick={this.change}> { this.state.number[0][0][4] }</button></td>
                 <td><button id="6" onClick={this.change}> { this.state.number[0][0][5] }</button></td>
                 <td><button id="7" onClick={this.change}>{ this.state.number[0][0][6] }</button></td>
                 <td><button id="8" onClick={this.change}> { this.state.number[0][0][7] }</button></td>
                 <td><button id="9" onClick={this.change}>{ this.state.number[0][0][8] }</button></td>
                    </tr>  
                  
                    <tr>
                 <td><button id="10" onClick={this.change}> { this.state.number[0][1][0] }</button></td> 
                 <td><button id="11" onClick={this.change}> { this.state.number[0][1][1] }</button></td>
                 <td><button id="12" onClick={this.change}>  { this.state.number[0][1][2] }</button></td>
                 <td><button id="13" onClick={this.change}> { this.state.number[0][1][3] }</button></td>
                 <td><button id="14" onClick={this.change}> { this.state.number[0][1][4] }</button></td>
                 <td><button id="15" onClick={this.change}>{ this.state.number[0][1][5] }</button></td>
                 <td><button id="16" onClick={this.change}>{ this.state.number[0][1][6] }</button></td>
                 <td><button id="17" onClick={this.change}> { this.state.number[0][1][7] }</button></td>
                 <td><button id="18" onClick={this.change}> { this.state.number[0][1][8] }</button></td>

                    </tr>  
        
                    <tr>
                <td><button id="19" onClick={this.change}> { this.state.number[0][2][0] }</button></td> 
                <td><button id="20" onClick={this.change}> { this.state.number[0][2][1] }</button></td> 
                <td><button id="21" onClick={this.change}> { this.state.number[0][2][2] }</button></td> 
                <td><button id="22" onClick={this.change}> { this.state.number[0][2][3] }</button></td> 
                <td><button id="23" onClick={this.change}> { this.state.number[0][2][4] }</button></td>
                <td><button id="24" onClick={this.change}>{ this.state.number[0][2][5] }</button></td>
                <td><button id="25" onClick={this.change}> { this.state.number[0][2][6] }</button></td>
                <td><button id="26" onClick={this.change}> { this.state.number[0][2][7] }</button></td>
                <td><button id="27" onClick={this.change}> { this.state.number[0][2][8] }</button></td>
                    </tr> 

                </table> 
                <div> 
            </div>
          
                <table id="number1"> 
                <center> 
              <tr> 
                  <th colspan="4">  
   <button type="button" class="btn btn-primary" id="Jaldi" onClick={this.Jaldi}>Jaldi</button>
      <button type="button" class="btn btn-info"   id="Line1" onClick={this.Line1} >1Line</button>
     <button type="button" class="btn btn-success" id="Line2" onClick={this.Line2}>2Line</button>
      <button type="button" class="btn btn-danger"  id="Line3" onClick={this.Line3}>3Line</button>
       <button type="button" class="btn btn-warning" id="full" onClick={this.full}>Tambola</button>
       
         </th>
          <th  colspan="6"  >  
                  <div id="generator">
          <div id="title"><p  style={{width:100},{height:50}}><center><b>Sudheer_ranga  Project Tambola Number Generator</b></center></p></div>
          <p id="rNum" class="heading"  >{ this.state.number1 }</p> 
            <div id="inputs">
              <input id="generate" type="submit" value="Generate Number" onClick={this.getInputs}/>
            </div>
        </div>
     </th>
              </tr> 
              <tr>
                  <td><button id="b1" value="1">1</button></td> 
                  <td><button id="b2" value="2">2</button></td>
                  <td><button id="b3" value="3">3</button></td>
                  <td><button id="b4" value="4">4</button></td>
                  <td><button id="b5" value="5">5</button></td>
                  <td><button id="b6" value="6">6</button></td>
                  <td><button id="b7" value="7">7</button></td>
                  <td><button id="b8" value="8">8</button></td>
                  <td><button id="b9" value="9">9</button></td>
                  <td><button id="b10" value="10">10</button></td>
   
              </tr> 
              <tr>
                  <td><button id="b11" value="11">11</button></td> 
                  <td><button id="b12" value="12">12</button></td>
                  <td><button id="b13" value="13">13</button></td>
                  <td><button id="b14" value="14">14</button></td>
                  <td><button id="b15" value="15">15</button></td>
                  <td><button id="b16" value="16">16</button></td>
                  <td><button id="b17" value="17">17</button></td>
                  <td><button id="b18" value="18">18</button></td>
                  <td><button id="b19" value="19">19</button></td>
                  <td><button id="b20" value="20">20</button></td>
   
              </tr>
              <tr>
                  <td><button id="b21" value="21">21</button></td> 
                  <td><button id="b22" value="22">22</button></td>
                  <td><button id="b23" value="23">23</button></td>
                  <td><button id="b24" value="24">24</button></td>
                  <td><button id="b25" value="25">25</button></td>
                  <td><button id="b26" value="26">26</button></td>
                  <td><button id="b27" value="27">27</button></td>
                  <td><button id="b28" value="28">28</button></td>
                  <td><button id="b29" value="29">29</button></td>
                  <td><button id="b30" value="30">30</button></td>
   
              </tr> 
              <tr>
                  <td><button id="b31" value="31">31</button></td> 
                  <td><button id="b32" value="32">32</button></td>
                  <td><button id="b33" value="33">33</button></td>
                  <td><button id="b34" value="34">34</button></td>
                  <td><button id="b35" value="35">35</button></td>
                  <td><button id="b36" value="36">36</button></td>
                  <td><button id="b37" value="37">37</button></td>
                  <td><button id="b38" value="38">38</button></td>
                  <td><button id="b39" value="39">39</button></td>
                  <td><button id="b40" value="40">40</button></td>
   
              </tr> 
              <tr>
                  <td><button id="b41" value="41">41</button></td> 
                  <td><button id="b42" value="42">42</button></td>
                  <td><button id="b43" value="43">43</button></td>
                  <td><button id="b44" value="44">44</button></td>
                  <td><button id="b45" value="45">45</button></td>
                  <td><button id="b46" value="46">46</button></td>
                  <td><button id="b47" value="47">47</button></td>
                  <td><button id="b48" value="48">48</button></td>
                  <td><button id="b49" value="49">49</button></td>
                  <td><button id="b50" value="50">50</button></td>
   
              </tr> 
              <tr>
                  <td><button id="b51" value="51">51</button></td> 
                  <td><button id="b52" value="52">52</button></td>
                  <td><button id="b53" value="53">53</button></td>
                  <td><button id="b54" value="54">54</button></td>
                  <td><button id="b55" value="55">55</button></td>
                  <td><button id="b56" value="56">56</button></td>
                  <td><button id="b57" value="57">57</button></td>
                  <td><button id="b58" value="58">58</button></td>
                  <td><button id="b59" value="59">59</button></td>
                  <td><button id="b60" value="60">60</button></td>
   
              </tr> 
              <tr>
                  <td><button id="b61" value="61">61</button></td> 
                  <td><button id="b62" value="62">62</button></td>
                  <td><button id="b63" value="63">63</button></td>
                  <td><button id="b64" value="64">64</button></td>
                  <td><button id="b65" value="65">65</button></td>
                  <td><button id="b66" value="66">66</button></td>
                  <td><button id="b67" value="67">67</button></td>
                  <td><button id="b68" value="68">68</button></td>
                  <td><button id="b69" value="69">69</button></td>
                  <td><button id="b70" value="70">70</button></td>
   
              </tr> 
              <tr>
                  <td><button id="b71" value="71">71</button></td> 
                  <td><button id="b72" value="72">72</button></td>
                  <td><button id="b73" value="73">73</button></td>
                  <td><button id="b74" value="74">74</button></td>
                  <td><button id="b75" value="75">75</button></td>
                  <td><button id="b76" value="76">76</button></td>
                  <td><button id="b77" value="77">77</button></td>
                  <td><button id="b78" value="78">78</button></td>
                  <td><button id="b79" value="79">79</button></td>
                  <td><button id="b80" value="80">80</button></td>
   
              </tr> 
              <tr>
                  <td><button id="b81" value="81">81</button></td> 
                  <td><button id="b82" value="82">82</button></td>
                  <td><button id="b83" value="83">83</button></td>
                  <td><button id="b84" value="84">84</button></td>
                  <td><button id="b85" value="85">85</button></td>
                  <td><button id="b86" value="86">86</button></td>
                  <td><button id="b87" value="87">87</button></td>
                  <td><button id="b88" value="88">88</button></td>
                  <td><button id="b89" value="89">89</button></td>
                  <td><button id="b90" value="90">90</button></td>
   
              </tr> 
              </center>
            </table>  
            <div>
            
        <center> 
            <div id="Chat"> 
            <h1 style={{fontSize:20}}>Group Chat With Your Tambola Friends</h1>
        <div class="scroll" id="innerchat">  
        <center>
        Say Hii To Your Friends To Join Group Chat  
        </center>  
        </div> 
        <input type="text" placeholder="Type Message" id="inputChat"/>
        <button type="button" id="chatButton" onClick={this.Send} class="btn btn-success" >Send</button>  
        </div>
        </center> 

        </div> 
        </div>
        )
    } 
    componentDidMount(){  
        fetch("http://localhost:8900/Getdata?code="+this.state.code+"&username="+this.state.username,{method:'GET'}) 
        .then((res)=>res.json()) 
        .then((data)=>{  
            
        let p =   data.filter((number)=>{
               return  number.username==this.state.username && number.code==this.state.code;
            })     
          //  console.log(p);
            //console.log(p.length);    
            console.log(p);
            this.setState({users:p}); 
            if(p.length!=0){
                this.setState({group:"active"}); 
               // a=this.state.users.number;
            } 
            else{
                this.setState({group:"inactive"})
            }  
            //console.log(this.state.users.numbers);
        }) 
    }


} 



export default Ticket1;