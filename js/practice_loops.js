"use strict";

console.log("Hello");


// TODO: Output numbers from 8-50
//TODO: output the odd numbers from 8-50

//
// let incrementor = 8;
//
// while(incrementor <= 50){
//     if (incrementor % 2 === 1){
//         console.log(incrementor);
//     }
//     incrementor++;
// }


//

// let fullNameEntered = false;
// let names = "";
//
//
// // WE DON'T KNOW HOW MANY NAMES THEY HAVE!
// while (!fullNameEntered){
//
//     fullNameEntered = confirm("Is this your full name?");
//     names += " ";
//     names +=  prompt("Please enter or add to your name") + " ";
// }
//
// alert("This is your name: " + names);
//
//


// // TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
//  Let's assume that there are allowing two cars into the parking lot at a time. As those cars take up spaces,
//  write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
//  is now full" to the console.
//

// let num1 = 30;
//
// do {
//     console.log("there are " + num1 + " remaining!")
//     num1 -= 2;
// } while (num1)
// console.log(num1);
//

//TODO: using prompt() and alert(), write a while loop that will continue to ask for the correct password until the
//  correct password is given.

let password = "uhuhj"
let isCorrect = false;
let attempt = "";


while(!isCorrect){
    attempt = prompt("enter your passwprd");
    isCorrect = attempt === password;
    if (!isCorrect){
        alert("not the password")
    }
}
alert("password correct")





