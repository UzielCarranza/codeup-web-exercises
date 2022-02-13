"use strict";

//exercise from curriculum
 console.log("hello from external");

//exercise 1
 alert("Welcome to my website!")


//exercise 2
 var userResponse = prompt("What is your favorite color?")
 alert("Great," + " " + userResponse + " " + "is my favorite color too!!")



//exercise 3
let littleMermaid = prompt("how many days do you want to rent the movie: the little mermaid?")
console.log(littleMermaid);

let brotherbear = prompt("how many days do you want to rent the movie: brother bear?")
console.log(brotherbear);

let hercules = prompt("how many days do you want to rent the movie: hercules?")
console.log(hercules)

let totalPriceRent = 3;

let totalPrice = (littleMermaid * totalPriceRent) + (brotherbear * totalPriceRent) + (hercules * totalPriceRent);

alert("your total is: " + totalPrice);


let googleRate = 400;
let facebookRate = 350;
let amazonRate = 380;

let googleHrsWorked = prompt("how many hours did your work at Google?");

let facebookHrsWorked = prompt("how many hours did your work at Facebook?");

let amazonHrsWorked = prompt("how many hours did your work at Amazon?");

let totalPayment = (googleRate * googleHrsWorked) + (facebookHrsWorked * facebookRate) + (amazonHrsWorked * amazonRate);
console.log("total payment: " + totalPayment)
alert("your total payment is: " + totalPayment);





let classAvailable = prompt("How many students are in the class?")
console.log("number of students: " + classAvailable)

let classSchedule = prompt("does student has free time for the class?")
console.log("answer: " + classSchedule)

if (classAvailable <= 20 && classSchedule == "yes"){
    alert("student cam enroll in the class!!")
}  else {
    alert("the student cannot enroll!!!")
}



let buy2Items = prompt("did the customer bought 2 or more products??")
console.log("answer: " + buy2Items)

let offerExpired = prompt("is the offer expired??")
console.log("answer: " + offerExpired)

let userPremium = prompt("is the user a premium user?")

if ( (buy2Items == "yes" && offerExpired == "no") || userPremium == "yes"){
    alert("discount applied!!!")
} else {
    alert("discount wasnt applied!!! :(")
}



let enterUsername = prompt("enter your username");

if (enterUsername.length <= 20){
    alert("username pass")
}

let enterPassword = prompt("enter your new password!");

if(enterPassword.length <= 4 ){
   enterPassword = prompt("password must be more then 5 characters");
}
if ( enterPassword.includes(enterUsername)){
    alert("password must not contain username");
} else {
    alert("password meets standards");
}


//end of exercise 3 /////









































































