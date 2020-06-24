function validation(){
const userInput = document.querySelector("#password").value;

if(userInput.length >=8){
    document.getElementById("length").style.color="green";
}else{
    document.getElementById("length").style.color="red";
}

let numCheck =  /[0-9]/g;
if(numCheck.test(userInput)){
    document.getElementById("number").style.color="green";
}else{
    document.getElementById("number").style.color="red"; 
}

let caseCheck = /[A-Z]/g;
if(caseCheck.test(userInput)){
    document.getElementById("case").style.color="green";
}else{
    document.getElementById("case").style.color="red"; 
}

let charCheck =/[!@#$%^&*]/g ;
if(charCheck.test(userInput)){
    document.getElementById("char").style.color="green";
}else{
    document.getElementById("char").style.color="red"; 
}
}