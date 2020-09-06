import  React,{Component} from 'react'; 
class FinalPage extends Component{
    constructor(){
        super();
        this.call=this.call.bind(this);
        this.state={
             code:localStorage.getItem("code"), 
             data:"",
        }
    }   
    call(){
        if(this.state.data){
        return    this.state.data.map((data)=>{
                return(  
                              
                         <tr> 
                                     
                    <td id="td3"> <center> {data.username} </center></td> 
                    <td id="td3"><center>{data.winning} </center></td> 
                   
                    </tr> 
                   

                )
            })
        }
    }

    render(){ 
        return(
        <div>  
            <center>            
          <h1>Code:{this.state.code}</h1> 
          </center> 
          <center>
            <table id="table3">
                <tr> 
                    
                    <th id="th3">WinningName</th> 
                    <th id="th3">Winning</th> 
                </tr> 
                
                    {this.call()}
                
            </table> 
            </center> 
        <tile id="end">
            Sudheer Developers
         </tile>
        </div> 
        )
        
    } 
    componentDidMount(){
        fetch("http://localhost:8900/GetData?code="+this.state.code,{method:'GET'}) 
        .then((res)=>res.json()) 
        .then((data)=>{ 
            console.log(data);
            this.setState({data:data});
        })
    }
} 
export default FinalPage;


