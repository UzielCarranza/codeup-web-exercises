"use strict";
/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello(name){
    let message = "Hello" + " " + name;
    return message;
}

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

let helloMessage = sayHello("Uziel");
console.log(helloMessage);
/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
let myName = "Carranza";
console.log(sayHello(myName));


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);


/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(number){
    if(number === 2){
        return true;
    }
    return false;
}

isTwo(random);
console.log(isTwo(random));



/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip(tip, total){
    let tipTotal = (tip / 100) * total;
    return tipTotal;
}


/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

let askForTotal = prompt("What is your total amount to pay?");
let tipPercentaje = prompt("How much percentage do you want to tip")

var totalTip = calculateTip(askForTotal,tipPercentaje);
console.log(totalTip);
alert("You should tip: $" + totalTip);

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */



function applyDiscount(originalPrice, discountPercent){
    let discount = (discountPercent / 100) * originalPrice ;
    let newTotal =  originalPrice - discount;
    return newTotal;
}
let newPrice = applyDiscount(100, 10);
console.log(newPrice);


let getOriginalPrice = prompt("what is the original price?");
let getDiscount = prompt("Please enter your discount percentaje");
let newPrice2 = applyDiscount(getOriginalPrice, getDiscount);
console.log(newPrice2);
alert("Your new price is: " + newPrice2);





/*
// second try
function getDiscount(){
    let userDiscount = parseFloat(prompt("Please enter your discount here!"))
    if(userDiscount){

        console.log("this is your discount" + userDiscount)
        return userDiscount;
    } return alert("You must enter a number")
}

let userResponseDiscount = getDiscount();

console.log(userResponseDiscount);
*/


//walkthrough


//1st

function add(num1, num2){
    return num1 + num2;
}

console.log(add(19, 2))

//

let add2 = function(num1, num2){
    return num1 + num2;
}


console.log(add2(19, 2))

let add3 = (num1, num2) => {
    return num1 + num2;
}
console.log(add3);

//3




//IFFE


(function (){
    function add(num1, num2){
        return num1 + num2;
    }
})()









































