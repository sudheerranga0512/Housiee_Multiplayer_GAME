import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Detailsdisplay.css' 
var Detailsdisplay = (props) =>

{
    const renderdata=({restdata})=>
    {
        console.log(restdata)
        if(restdata==null)
        {
            console.log(restdata)
         
            
                return(
                    <div>        
                   

                        <div class="upperpart"> 
                    <logo class="logo">
                     <b>  e! </b>
                    </logo>   
            
                  &nbsp;&nbsp;&nbsp;&nbsp;   <button  class="create"> Create an account    </button> 
                    </div> 
                    <div class="heading"><b>Breakfast Places in Mumbai</b></div>
                   <div class="filter"> 
                       <br/>
                       <div class="filter1"><b>Filters</b></div> 
                       <div class="filter2"> Select Location</div>
                     <input list="area" id="location" placeholder="Select Location "/>
                     <datalist id="area"> 
                     <option>tata nagar</option>
                     </datalist>
                     <div  class="cuisine"> Cuisine</div>
                    
                         <input type="checkbox"class="size"/>
                         <label class="cuisine">North Indian  </label> <br/>
                         <input type="checkbox" class="size" />
                         <label class="cuisine">South Indian  </label><br/>
                         <input type="checkbox" class="size"/>
                         <label class="cuisine">Chinese </label><br/>
                         <input type="checkbox"  class="size" />
                         <label class="cuisine">Fast Food </label><br/>
                         <input type="checkbox"   class="size"/>
                         <label class="cuisine">Street Food </label>
                    
                         <div  class="cost"> Cost For Two</div>
                         <input type="radio" id="less than 500"  class="checkmark" name="1" value="1"/>
                         <label for="1" class="cuisine">Less than 500 </label><br/> 
                         <input type="radio" id="less than 500"  class="checkmark" name="2" value="2"/>
                         <label for="2" class="cuisine"> 500 - 1000 </label><br/> 
                         <input type="radio" id="less than 500"  class="checkmark" name="3" value="3"/>
                         <label for="3" class="cuisine"> 1000 - 1500 </label><br/> 
                         <input type="radio" id="less than 500"  class="checkmark" name="4" value="4"/>
                         <label for="4" class="cuisine"> 1500 - 2000 </label><br/>
                         <input type="radio" id="less than 500"  class="checkmark" name="5" value="5"/>
                         <label for="5" class="cuisine">2000+ </label> 
                          
                         <div class="sort"> <b>Sort</b></div>
             
                         <input type="radio" id="Price low to high"  class="checkmark" name="sort" value="6"/>
                         <label for="6" class="cuisine">Price low to high </label><br/>
                         <input type="radio" id="Price high to low"  class="checkmark" name="sort" value="7"/>
                         <label for="7" class="cuisine">Price high to low </label>
                    </div>  
                    <div class="tilecontainer">
                        <div class="tilecomponent">
                            <img src="Mask Group 2.png" /> 
                        </div>  
                        <div class="shopname">
                        <div class="shop">The Big Chilli Cakery</div>  
                        <div class="place">FORT</div>
                        <div class="address">Shop 1,Plot D,Samruddhi Complex,Chincholi..</div>
                        </div>  
                        <hr/> 
                        <div class="about">
                            <pre class="about1">
             CUSINES                  Bakery
             COST FOR TWO              700
                            </pre>
                        </div>
                    </div> 
                    <div class="tilecontainer1">
                        <div class="tilecomponent">
                            <img src="Mask Group 2.png" /> 
                        </div>  
                        <div class="shopname">
                        <div class="shop">The Big Chilli Cakery</div>  
                        <div class="place">FORT</div>
                        <div class="address">Shop 1,Plot D,Samruddhi Complex,Chincholi..</div>
                        </div>  
                        <hr/> 
                        <div class="about">
                            <pre class="about1">
             CUSINES                  Bakery
             COST FOR TWO              700
                            </pre>
                        </div> 
            
                    </div>   
                    <div style={{marginLeft:800}} class="b2" >  
                        <button  value="pre" class="pre" onclick="my1();"  >pre</button>
                        <button value="1" id="1"   >1</button> 
                        <button value="2"  id="2" >2</button>
                        <button value="3" id="3">3</button>
                        <button value="4" id="4">4</button> 
                        <button  value="next" class="next" onclick="my();" >next</button>
                    </div> 
                    </div>
                )
            
                }
   
    }  
    return(
        <div>
            {renderdata(props)}
 
        </div>
    )
}
export default Detailsdisplay;