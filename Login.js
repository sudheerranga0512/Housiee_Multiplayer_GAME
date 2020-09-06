import React,{Component} from 'react';   
//import { BrowserRouter, Route} from 'react-router-dom'; 
import {Redirect} from 'react-router-dom';  
import Header from './Header';
//import React,{ useState } from 'react';
const locurl="http://localhost:8900/about"; 
let x=[];

//let myWindow;
class Login extends Component{
    constructor(props){
        super(props)   
        this.f1=this.f1.bind(this);
        this.state={  
            //username:"",
            details:"",
        }
    } 
     f1 (event){ 
          let username = document.getElementById("uname").value; 
          let password = document.getElementById("psw").value ;
         let p=this.state.details.filter((detail)=>{
                return detail.email==username && detail.password==password; 
         }) 
        if(p.length==0){
            console.log("wrong psw");
        }  
        else{  
           this.props.history.push(`/Header?username=${username}`);
        }
     } 
     f2(event){ 
         //myWindow.close();
         window.open('/Signup','_self');
     }
    render(){
        return( 
            
    
           <div className="container">
            <img className="image"   src="images/background-image.jpg"/>
            <div className="image-container">
           <div className="log" >LOGIN</div>
           <div className="details1" > 
        <div > <input  id ="uname" type="text" name="uname" placeholder="Enter your email id" /></div><br></br><br></br> 
      
       <div>  <input type="password" name="psw"  id="psw" placeholder="enter password" /></div><br></br>  
      <button  id ="button10" type="submit" class=" btn btn-primary btn-sm" onClick={this.f1}  style={{width:50},{height:40}}  >login</button><br></br><br></br> 
      <button  id ="button10" type="text" class=" btn btn-success btn-sm" onClick={this.f2} style={{width:50},{height:40}}>CreateAccount</button><br></br><br></br>
       </div> 

        </div>
         </div>
        )
    } 
    componentDidMount(){ 
        fetch(locurl,{method:'GET'}) 
        .then((res)=>res.json()) 
        .then((data)=>{ 
            this.setState({details:data}); 
            console.log(this.state.details);
         this.setState({details:data})  
        
        })
    }
} 
export default Login;