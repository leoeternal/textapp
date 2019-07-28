/*global fetch*/

var numberInput=document.getElementById("number");
var textInput=document.getElementById("msg");
var button=document.getElementById("button");
var response=document.querySelector(".response");

button.addEventListener("click",send,false);

function send(){
    var number=numberInput.value.replace(/\D/g, "");
    var text=textInput.value;
    fetch("/",{
        method:"post",
        headers:{
            "Content-type":"application/json"
        },
        body:
         JSON.stringify({number:number,text:text})
    }).then(function(res){
        console.log(res);
    }).catch(function(err){
        console.log(err);
    })
}