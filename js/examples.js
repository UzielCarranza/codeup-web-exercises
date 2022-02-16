/*
*  javascript with html examples
/*


let username = prompt("Enter your username");
let password = prompt("enter your password")

username = username.trim();
password = password.trim();

let passLength = password.length >= 5;
let passIndex = password.indexOf(username) === -1;
let userLength = username.length <= 20;

if (passLength || passIndex || userLength) {
    alert("thanks!!")
} else {
    alert("try again")
}
*/





//walkthrough


//alert("Welcome to my website")


//alert( prompt("What is your favorite color") + " " + "is my favorite color too");


/*
let lilMermaid = parseInt(prompt("how long did you rent little mermaid?"));


let broBear = parseInt(prompt("how long did you rent bro bear?"));


let herc = parseInt(prompt("how long did you rent hercules?"));

alert((lilMermaid + broBear + herc) * 3 )

*/

//console.log(lilMermaid ? lilMermaid * 3 : "you didnt enter a number");



/*

let googleHours = parseInt(prompt("how many hours did you work at google?")) * 400;

let facebookHours = parseInt(prompt("how many hours did you work at facebook?")) * 350;


let amazonHours = parseInt(prompt("how many hours did you work at amazon?")) * 380;

alert("your paycheck is " + (googleHours + facebookHours + amazonHours));

*/


/*
let nameOfCompanu = "google"

let rate = 400;
while (...) {
    parseInt(prompt("how many hours did you work  for ${nameOfCompany}?"))
}
*/


/*
let hasConflict = confirm("do you have a class at 10:00 am");
let seatsRemaining = 29;

if ( !hasConflict && seatsRemaining){
    alert("you are enrolled in theoretical class");
} else {
    alert("sorry you cannot enroll in this class")
}


*/




/*
*
*
* Functions notes js 1
*
*
*
* */





tryGetRideShare(15, true, getFundsAvailable());


function getFundsAvailable(){
    let moneyInAccount =parseFloat(prompt("how mush is in the account"))
    let creditsInAccount = parseFloat(prompt("how much is in the account"))

    return moneyInAccount + creditsInAccount;
    // can use only return to scape

}



function tryGetRideShare(costOfRide, driverAvailable, totalFundsAvailable){
    /*
       let numOfRiders;
       if(confirm("are you splitting this ride with someone else")){
           numOfRiders = prompt("how many riders do you have")
       }
       if (numOfRiders){

       }
   */
    if(driverAvailable && totalFundsAvailable >= costOfRide){
        console.log("driver is on the way");
    } else {
        console.log("driver is not available at this time");
    }
}




//exercise functions

function sayHello(name){
    return `Hello, ${name}`;
}


//2

let helloMessage = sayHello("uziel");


console.log("math---------")

let randomNum = Math.random() * (100);
console.log(randomNum)

let rangedNum = Math.floor((randomNum * 100 + 20)) + 20;
console.log(randomNum)



