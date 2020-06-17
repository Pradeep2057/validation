const userInput = document.getElementById("password").value;

const numCheck = /^(?=.*[0-9])$/;
const caseCheck = /^(?=.*[A-Z])$/;
const charCheck = /^(?=.*[!@#$%&^*])$/;

function validation(){
if(userInput.length >= 8){
    document.getElementById("length").style.color="green";
}else{
    document.getElementById("length").style.color="red";
}

if(numCheck.test(userInput)){
    document.getElementById("number").style.color="green";
}else{
    document.getElementById("number").style.color="red"; 
}

if(caseCheck.test(userInput)){
    document.getElementById("case").style.color="greem";
}else{
    document.getElementById("case").style.color="red"; 
}
if(charCheck.test(userInput)){
    document.getElementById("char").style.color="green";
}else{
    document.getElementById("char").style.color="red"; 
}
}