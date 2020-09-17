'use strict'

function askUserTimeQuestion(){
    var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';    
}   else if (hourNow > 12) {
    greeting = 'Good afternoon!'; 
}   else if (hourNow >= 0) {
    greeting = 'Good morning!';
}   else {
    greeting = 'Something went wrong!';
}

document.write(greeting);

}

function askUserNameQuestion(){
    var questionAnswer = prompt(" What is your name?")
var greeting=("Toe Beans Are The Best Beans ");

document.write(greeting + questionAnswer);
}

function askUserWhoIsTheBestDogQuestion(){
    
    var questionAnswer = prompt("Who's The Best Dog?");
    if (questionAnswer = All Dogs){
        alert('You have entered it correctly!')
    } 
    
    }



