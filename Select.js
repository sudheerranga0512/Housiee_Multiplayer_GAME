import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
class Header extends Component{ 
    constructor(){
        super() 
        this.state={
            title:"edureka @ Internship",
            keyword : 'user text'
        }
    } 
    handlechange = (event)=>{
    this.setState({keyword:event.target.value?event.target.value:"user text"})
    }
    render(){
    return(
        <header> 
            
            
  <div className="container-fluid">
    <ul className="su"> 
    <li>Select Tickets</li><br></br>
      <li className="active"><Link to ='/Ticket1'>Ticket 1</Link></li><br></br>
      <li><Link to='/Ticket2'>Ticket 2</Link></li><br></br>
      <li><Link to='/Ticket3'>Ticket 3</Link></li> <br></br>
      <li><Link to='/Ticket4'>Ticket 4</Link></li> <br></br>
      <li><Link to='/Ticket5'>Ticket 5</Link></li> <br></br>
      <li><Link to='/Ticket6'>Ticket 6</Link></li> 
      
    </ul>
  </div>

        </header>
    )
} 
}
export default  Header;