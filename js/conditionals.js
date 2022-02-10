"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(color){
    if (color === "blue"){
        return color + " as the sky";
    } else if (color === "red"){
        return color + " as an apple";
    } else if (color === "orange"){
        return color + " as an orange...idk";
    } else if (color === "yellow"){
        return color + " as a banana";
    } else if (color === "green"){
        return color + " as the grass";
    } else if (color === "indigo"){
        return color + " as something";
    } else if (color === "violet"){
        return color + " as something else...";
    }  else {
        return "i don't know this color...";
    }
}



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */


console.log(randomColor);
console.log(analyzeColor(randomColor))

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */



function analyzeColor(color){
    switch (color) {
        case "red":
            return color + " as an apple";
            break;
        case "orange":
            return color + " as an orange...idk";
            break;
        case "yellow":
            return color + " as a banana";
            break;
        case "green":
            return color + " as the grass";
            break;
        case "blue":
            return color + " as the sky";
            break;
        case "indigo":
            return color + " as something";
            break;
        default:
            return + "... i don't know this color...";
            break;
    }
}

console.log(analyzeColor(randomColor));



/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */


let userAnswer = prompt("enter your favorite color...")
console.log("answer is " + userAnswer);
alert(analyzeColor(userAnswer));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, totalAmount){
    let discount;
    if (luckyNumber == 0){
        return "sorry, you didn't get a discount";
    } else if (luckyNumber == 1){
        discount = (totalAmount * 10) / 100
        return "your new total is: $" + (totalAmount - discount) + "." + " You received a dscount of 10%";
    } else if (luckyNumber == 2){
        discount = (totalAmount * 25) / 100
        return "your new total is: $" + (totalAmount - discount) + "." + " You got a discount of 25%";
    } else if (luckyNumber == 3){
        discount = (totalAmount * 35) / 100
        return "your new total is: $" + (totalAmount - discount) + "." + " You received a discount of 35%";
    } else if (luckyNumber == 4){
        discount = (totalAmount * 50) / 100
        return "your new total is now " + (totalAmount - discount) + "." + " You received a discount of 50%";
    } else if (luckyNumber == 5){
        discount = (totalAmount * 100) / 100
        return "congrats, you get 100% off: $" + (totalAmount - discount);
    } else {
        return false;
    }
}
    console.log(calculateTotal(3, 100))





/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */


//Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

let usertotalBill = parseInt(prompt("what is your total bill?"))
alert("your lucky number was" + " " + luckyNumber)

let userGetsDiscounted = calculateTotal(luckyNumber, usertotalBill);
alert( userGetsDiscounted);


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

//exercise completed
function firstFunc() {
    let userConfirms = confirm(" do you want to enter a number?")
    if (userConfirms) {
        let askUserForNumber = parseInt(prompt("enter your number"));
        let sumOf100 = askUserForNumber + 100;
        while (!askUserForNumber) {
            alert("please enter a valid number");
            askUserForNumber = parseInt(prompt("enter your number"));
            sumOf100 = askUserForNumber + 100;
        }
        if (askUserForNumber % 2 === 0) {
            alert(askUserForNumber + " is is even and adding 100 is " + sumOf100)
        } else {
            (askUserForNumber % 2 === 1)
            alert("your number is odd and adding 100 is " + sumOf100)
        }
        if (askUserForNumber > 0) {
            alert(askUserForNumber + " is positive")
        } else {
            alert(askUserForNumber + " is negative")
        }
    }
}

console.log(firstFunc())



//mistake, will restructure
//needs to be a function
// function isNum() {
//     let ask = parseInt(prompt("enter a number"))
//     while (!ask) {
//         alert("entee a valid number")
//         ask = parseInt(prompt("enter your number"));
//     }
// }

//working to on a function to validate number

// function isNum(){
//     let userInput = prompt("enter a numberrrr");
//     if (userInput != null){
//         return tellingNumbers();
//     } else {
//         alert("only numbers are allowed");
//         isNum();
//     }
// }
// isNum();


//turn the answer into a function
// function tellingNumbers(number){
//
//     if (number){
//         let sumOf100 = number + 100;
//         if (number % 2 === 0){
//             alert(number + " is is even and adding 100 is " + " " + sumOf100)
//         } else {
//             (number % 2 === 1)
//             alert("your number is odd and adding 100 is " + sumOf100)
//         } if (number > 0){
//             alert(number + " is positive")
//         } else {
//             alert(number + " is negative")
//         }
//     }
// }
//
// console.log(tellingNumbers(ask))

