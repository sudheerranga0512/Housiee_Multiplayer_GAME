import React,{Component} from 'react';
class Signup extends Component{
    constructor(props){
        super(props)
    } 
  submit(event){
   
    document.getElementById("f1").action="http://localhost:8900/signup"  
    
  
  } 
  cancel(event){
      window.open('/');
  }
    render(){
        return(
            <div class="container-fluid">
            <div class="img1">
                <div class="details"> 
               <h id="head" > Create Your Account</h> 
               <form id="f1" method="post">
              <div><input type="text" class="email" name="uname"  id="uname" placeholder="Enter email address"/></div>
              <div><input type="password" class="pas" name="psw"  id="psw" placeholder="create password"/></div>
               <div><input type="password"  name="cpsw" id="cpsw"class="repas" placeholder="re-enter password"/></div>
               <div ><input type="text" class="phone" name="ph" id="ph" placeholder="Enter phone number"/></div>
               
                
                <button id="cancel" class="btn btn-danger" type="submit" onClick={this.cancel}>cancel</button>
                <button id="submit" class="btn btn-success" type="submit" onClick={this.submit}> Submit</button>
                </form>
                </div>  
            
            </div>
            </div>
    
        )
    } 

} 
export default Signup;