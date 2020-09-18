'use strict'

// correctPassword = prompt('Enter your password: ');
// while (correctPassword !== password){
//     correctPassword = prompt('Try again.  Enter your password: ');
// }
var correctNumber = 8;
for (var i = 0; i < 4; i++){
    var number = prompt('Enter a number between 1 and 10: ');
    if ((i === 3) && (correctNumber !== number)) {
        alert('Sooooo close');
    } else if (correctNumber === number) {
        alert('You entered the right number!'); 
    } else if (correctNumber !== number) {
        alert('No, try again!');
}
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
    
    



