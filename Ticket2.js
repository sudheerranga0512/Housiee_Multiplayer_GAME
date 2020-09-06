import React,{Component} from 'react'; 
import tambola from 'tambola-generator';
//import Tambola from 'Tambola-generator';
//import tambola from 'Tambola-generator'; 
const locurl="http://localhost:8900/numbers"; 
let a=[],l=0,x="0",d=[1];

class Ticket2 extends Component{
    constructor(props){
        super(props) 
        this.state={  
            id:1, 
            number :tambola.getTickets(2),
            number1:"Click  Btn",

        }
    } 
   
    change=(event)=>{  
        var x=event.target.innerText; 
        let p=event.target.id; 
        d=a.filter(function(number) { 
            return number==x;
        });
        if(d.length !=0){
            document.getElementById(p).style.backgroundColor = "blue";
        }
        d=[1];
        }
        generateNumber = () => {  
            x=Math.floor(Math.random()*(90)+1) ;    
           while(d.length != 0) {
              d=a.filter(function(number) { 
                return number==x;
           });         
           if(d.length !=0){
           x=Math.floor(Math.random()*(90)+1);
           } 
            }        
            d=[1];
                   if(l<90){  
                     console.log(l);
                   a[l]=x; 
                   console.log(a);  
                   l++;
                   }      
                  return x;
                } 
                sudheer = (x)=>{ 
                  var c="b"+x; 
                 document.getElementById(c).style.backgroundColor="green";
                  
                }
                
                getInputs = () => { 
             if(x!=0){
                 this.sudheer(x);} 
                   if(l<90){  
                    this.setState({ 
                      number1 : this.generateNumber()  
                    })
                   }
                } 
        
        


                
                                      
               
    


    render(){ 
        return(
            <div>   
            
                <table style={{border:"1px solid black" },{ color:"red"}}> 
                <tr>
                    <th colspan="9"><center>Ticket {this.state.id}</center></th>
                </tr>
                    <tr>
                 <td><button id="1" onClick={this.change1}> { this.state.number[0][0][0] }</button></td> 
                 <td><button id="2" onClick={this.change2}> { this.state.number[0][0][1] }</button></td>
                 <td><button id="3" onClick={this.change3}>{ this.state.number[0][0][2] }</button></td>
                 <td> <button id="4" onClick={this.change4}>{ this.state.number[0][0][3] }</button></td>
                 <td><button id="5" onClick={this.change5}> { this.state.number[0][0][4] }</button></td>
                 <td><button id="6" onClick={this.change6}> { this.state.number[0][0][5] }</button></td>
                 <td><button id="7" onClick={this.change7}>{ this.state.number[0][0][6] }</button></td>
                 <td><button id="8" onClick={this.change8}> { this.state.number[0][0][7] }</button></td>
                 <td><button id="9" onClick={this.change9}>{ this.state.number[0][0][8] }</button></td>
                    </tr>  
                  
                    <tr>
                 <td><button id="10" onClick={this.change10}> { this.state.number[0][1][0] }</button></td> 
                 <td><button id="11" onClick={this.change11}> { this.state.number[0][1][1] }</button></td>
                 <td><button id="12" onClick={this.change12}>  { this.state.number[0][1][2] }</button></td>
                 <td><button id="13" onClick={this.change13}> { this.state.number[0][1][3] }</button></td>
                 <td><button id="14" onClick={this.change14}> { this.state.number[0][1][4] }</button></td>
                 <td><button id="15" onClick={this.change15}>{ this.state.number[0][1][5] }</button></td>
                 <td><button id="16" onClick={this.change16}>{ this.state.number[0][1][6] }</button></td>
                 <td><button id="17" onClick={this.change17}> { this.state.number[0][1][7] }</button></td>
                 <td><button id="18" onClick={this.change18}> { this.state.number[0][1][8] }</button></td>

                    </tr>  
        
                    <tr>
                <td><button id="19" onClick={this.change19}> { this.state.number[0][2][0] }</button></td> 
                <td><button id="20" onClick={this.change20}> { this.state.number[0][2][1] }</button></td> 
                <td><button id="21" onClick={this.change21}> { this.state.number[0][2][2] }</button></td> 
                <td><button id="22" onClick={this.change22}> { this.state.number[0][2][3] }</button></td> 
                <td><button id="23" onClick={this.change23}> { this.state.number[0][2][4] }</button></td>
                <td><button id="24" onClick={this.change24}>{ this.state.number[0][2][5] }</button></td>
                <td><button id="25" onClick={this.change25}> { this.state.number[0][2][6] }</button></td>
                <td><button id="26" onClick={this.change26}> { this.state.number[0][2][7] }</button></td>
                <td><button id="27" onClick={this.change27}> { this.state.number[0][2][8] }</button></td>
                    </tr>
                    <tr>
                    <th colspan="9"><center>Ticket {this.state.id + 1}</center></th>
                </tr>
                    <tr>
                 <td><button id="28" onClick={this.change28}> { this.state.number[1][0][0] }</button></td> 
                 <td><button id="29" onClick={this.change29}> { this.state.number[1][0][1] }</button></td>
                 <td><button id="30" onClick={this.change30}>{ this.state.number[1][0][2] }</button></td>
                 <td> <button id="31" onClick={this.change31}>{ this.state.number[1][0][3] }</button></td>
                 <td><button id="32" onClick={this.change32}> { this.state.number[1][0][4] }</button></td>
                 <td><button id="33" onClick={this.change33}> { this.state.number[1][0][5] }</button></td>
                 <td><button id="34" onClick={this.change34}>{ this.state.number[1][0][6] }</button></td>
                 <td><button id="35" onClick={this.change35}> { this.state.number[1][0][7] }</button></td>
                 <td><button id="36" onClick={this.change36}>{ this.state.number[1][0][8] }</button></td>
                    </tr>  
                  
                    <tr>
                 <td><button id="37" onClick={this.change37}> { this.state.number[1][1][0] }</button></td> 
                 <td><button id="38" onClick={this.change38}> { this.state.number[1][1][1] }</button></td>
                 <td><button id="39" onClick={this.change39}> { this.state.number[1][1][2] }</button></td>
                 <td><button id="40" onClick={this.change40}> { this.state.number[1][1][3] }</button></td>
                 <td><button id="41" onClick={this.change41}> { this.state.number[1][1][4] }</button></td>
                 <td><button id="42" onClick={this.change42}>{ this.state.number[1][1][5] }</button></td>
                 <td><button id="43" onClick={this.change43}>{ this.state.number[1][1][6] }</button></td>
                 <td><button id="44" onClick={this.change44}> { this.state.number[1][1][7] }</button></td>
                 <td><button id="45" onClick={this.change45}> { this.state.number[1][1][8] }</button></td>

                    </tr>  
                
                    <tr>
                <td><button id="46" onClick={this.change46}> { this.state.number[1][2][0] }</button></td> 
                <td><button id="47"  onClick={this.change47}> { this.state.number[1][2][1] }</button></td> 
                <td><button id="48" onClick={this.change48}> { this.state.number[1][2][2] }</button></td> 
                <td><button id="49" onClick={this.change49}> { this.state.number[1][2][3] }</button></td> 
                <td><button id="50" onClick={this.change50}> { this.state.number[1][2][4] }</button></td>
                <td><button id="51" onClick={this.change51}>{ this.state.number[1][2][5] }</button></td>
                <td><button id="52" onClick={this.change52}> { this.state.number[1][2][6] }</button></td>
                <td><button id="53" onClick={this.change53}> { this.state.number[1][2][7] }</button></td>
                <td><button id="54" onClick={this.change54}> { this.state.number[1][2][8] }</button></td>
                    </tr>
               
                </table> 
                <table id="number2"> 
                <center> 
              <tr>
                  <th  colspan="10"  >  
                  <div id="generator">
          <div id="title"><p  style={{width:100},{height:50}}><center><b>Sudheer_ranga  Project Tambola Number Generator</b></center></p></div>
          <p id="rNum" class="heading" >{ this.state.number1 }</p>
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

            </div>
        )
    } 
    componentDidMount(){ 
        fetch(locurl,{method:'GET'}) 
        .then((res)=>res.json()) 
        .then((data)=>{
  this.setState({sudheer:data[0].c})
        })
    }
} 
export default Ticket2;