"use strict";



// WHILE LOOPS EXTRAS
// Ramp-up
// A) Maths!
//     Write a function called add(num1, num2) which returns the sum of a and b

function add(num1, num2){
    return num1 + num2;
}

// Write a function named square(numToSqr) which takes in a number (numToSqr) and returns the number multiplied by itself

function square(numToSqr){
    return numToSqr * numToSqr;
}
// Write a function called sumOfSquares(a, b).
//     You should find the square of a, then the square of b.
//     Invoke add(num1, num2) and pass the new squared values in as arguments.
function sumOfSquares(a,b){
    return add(square(a), square(b));
}

console.log(sumOfSquares(2,2));

//B) FIZZ-BUZZZZZZZ
// Write a function named getFizzBuzz(startingNum) which performs the following actions:
//     If startingNum is divisible by 3
// console log "fizz"
// Else, if startingNum is divisible by 5
// console log "buzz"
// If startingNum is divisible by 3 AND divisible by 5
// return a string which says "FIZZ BUZZ"

function getFizzBuzz(startingNum){
    if (startingNum % 3 === 0){
        console.log("fizz")
    } else if (startingNum % 5 === 0) {
        console.log("buzz")
    } else if (startingNum % 3 === 0 && startingNum % 5 === 0){
        console.log("fizz buzz")
    } else {
        console.log("no value")
    }
}

getFizzBuzz(30);
// Thinking about getFizzBuzz(startingNum), let's console log the return value of this function
// What if getFizzBuzz doesn't return a value (VOID)?
// How do you want to handle that?
//write an else statement to log no value


//     WHILE LOOPS WITH FUNCTIONS
// A) getPaswordInput
// Define a function named getPassword() which performs the following actions:
//     Using prompt(), alert(), variables, and a while-loop, ask the user to input their password until their entry matches your hard-coded password value.
//     HINT: start by defining the correct password and don't forget to link your html file

let secretPassword = "password"
let isCorrect = false;
let attemp = "";
function getPassword(pass){
    while(!isCorrect){
        attemp = prompt("enter your password");
        isCorrect = attemp === secretPassword;
        if (!isCorrect){
            alert("not the right password")
        } else {
            alert("password correct!!")
        }
    }
}
getPassword();



// B) getMeaningOfLife
// Write a function named getMeaningOfLife which accepts one parameter, meaningfulNum.
//     This function will use a while loop to compare its current number (a variable named counter) against the meaningfulNum.
//     While the counter is not equivalent to the meaningfulNum, continue the loop.
//     Once that condition is broken, console log a string telling the user "The meaning of life, the universe, and everything is [your meaningful number]"

function getMeaningOfLife(meaningfulNum){
    let counter = 41;
    while(counter !== meaningfulNum || meaningfulNum === 'string'){
        console.log("will never know...");
        break;
    } if (counter === meaningfulNum){
        console.log("The meaning of life, the universe, and everything is " + meaningfulNum)
    } else if (meaningfulNum === 42){
        console.log("Did you bring your towel?")
    }
}

getMeaningOfLife(42);


// Thinking about the above function, getMeaningOfLife, let's ask a question: What happens if the value of meaningfulNum is a non-numeric?
// Write some code to account for this case. How the function handles the situation is up to you!


//created a break and log will never know




//     Let's continue with getMeaningOfLife: If the value of meaningfulNum happens to be 42, console log a separate message at the end of the function to say: "Did you bring your towel?"




// Write a loop that outputs the first 50 fibonacci numbers. // https://en.wikipedia.org/wiki/Fibonacci_number
// Recommend starting your loop at 1 and ending your loop once you've calculated 50 fibonacci numbers.





// Write the code necessary to output the first 50 prime numbers
// Recommend starting your loop at 1 and ending your loop once you've calcualted 50 primes.
// https://en.wikipedia.org/wiki/Prime_number








// LESSON EXERCISE WALK-THRU
