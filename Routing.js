import React from 'react' ; 
import { BrowserRouter, Route} from 'react-router-dom'; 
import Header from './Header';  
import Home from './Home';
import Navbar from './Navbar';  
import Ticket1 from './Ticket1'; 
import Ticket2 from './Ticket2';  
import Ticket3 from './Ticket3'; 
import Ticket4 from './Ticket4'; 
import Ticket5 from './Ticket5'; 
import Ticket6 from './Ticket6';
import Select from './Select';
import NumGenerator from './NumGenerator';
import Login from './Login';
import Signup from './Signup';
import FinalPage from './FinalPage';
const Routing = () =>{
return(
    <BrowserRouter> 
    <div>  
    <Route exact path="/"  component={Login}></Route>
    <Route path="/Header" component={Header}></Route>
        <Route path='/Signup' component={Signup}></Route>
       <Route path="/navbar" component={Navbar}></Route> 
        <Route path='/Ticket1' component={Ticket1}></Route> 
        <Route path='/Ticket2' component={Ticket2}></Route>  
        <Route path='/Ticket3' component={Ticket3}></Route>
        <Route path='/Select' component={Select}></Route> 
        <Route path='/Ticket4' component={Ticket4}></Route> 
        <Route path='/Ticket5' component={Ticket5}></Route>  
        <Route path='/Ticket6' component={Ticket6}></Route>  
        <Route path='/FinalPage' component={FinalPage}></Route>
    </div>
    </BrowserRouter>
);
} 
export default Routing; 

