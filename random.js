function getRandomNumber(min,max){
    let step1= max-min +1;
    let step2=Math.random()*step1;
    let result =Math.floor(step2) + min; 
    return result;
} 

function createArrayOfNumbers(start,end){
    let myArray = [];
    for(let i=start;i<=end;i++){
        myArray.push(i);
    } 
    return myArray;
} 
let numberArray = createArrayOfNumbers(1,100); 
function my(){
    if(numbersArray.length == 0){
        document.getElementById("display").innerHTML = "";
    } 
    let randomIndex = getRandomNumber(0,numbersArray.length-1);
    let randomNumber = numbersArray[randomIndex];
    numbersArray.splice(randomIndex,1); 
    document.getElementById.innerHTML=randomNumber;

}