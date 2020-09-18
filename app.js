'use strict'

correctPassword = prompt('Enter your password: ');
while (correctPassword !== password){
    correctPassword = prompt('Try again.  Enter your password: ');
}
var number = "8"
for(var i = 0; i < 8; i++){
    var correctNumber = prompt('Enter a number between 1 and 23: ');
    if (correctNumber === number){
        alert('You entered the right number!');
        break;
    }
    if (i === 8 && correctNumber != number){
        alert('You have been locked out for 2 minutes');
    }
}

// this will run until the correct number is put in
   correctNumber = prompt('Enter a number: ');
   while (correctNumber !== number){
       correctNumber = prompt('Try again. Enter a number: ');
   }

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
var greeting=("Toe Beans Are The Best Beans, ");

document.write(greeting + questionAnswer);
}

function askUserWhoIsTheBestDogQuestion(){
    var questionAnswer = prompt("Who's The Best Dog?");
    if (questionAnswer == ("all dogs"));{
        document.write("of course they are");
    } 
          
    }
    
    



