import React from 'react';
import ReactDOM from 'react-dom'; 
import Header from './component/Header'; 
import NumGenerator from './component/NumGenerator'; 
import Navbar from './component/Navbar';   
import Tambola from './component/Tambola'
import Routing from './component/Routing';  
import Login from './component/Login'; 
import Signup from './component/Signup'; 
//import app from "./component/app"; 
import Notconsider from './component/Notconsider.js'; 
import Detailsdisplay from './component/Detailsdisplay.js' 
import Breakfast from './component/Breakfast.js'

const App = () =>{
  return( 
    <div>   
    <Breakfast/>  
  
    </div>
  )
}  

ReactDOM.render(<App/>,document.getElementById(`root`))
