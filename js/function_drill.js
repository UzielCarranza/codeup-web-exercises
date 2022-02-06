
/*# Function Drills

Functions using conditionals but not loops or arrays:

/*
Functions using conditionals but not loops or arrays:

- Make a function named `isOdd(number)`
- Make a function named `isEven(number)`
- Make a function named `identity(input)` that returns the input exactly as
  provided.
*/

function issOdd(number){

}


function isEven(number){

}

function identity(input){
    return input;

}

/*
- Make a function named `isFive(input)`
- Make a function named `addFive(input)` that adds five to some input.
- Make a function named `isMultipleOfFive(input)`
- Make a function named `isThree(input)`
- Make a function named `isMultipleOfThree(input)`
- Make a function named `isMultipleOfThreeAndFive(input)`
- Make a function named `isMultipleOf(target, n)` which checks if target is
  evenly divisible by `n`
*/

function isFive(input){

}

function addFive(input){
    return input + 5;
}

function isMultipleOfFive(input){

}

function isThree(input){

}


function isMultipleOfThree(input){

}

function isMultipleOfThreeAndFive(input){

}

function isMultipleOf(target, n){
    if( target % 2 === n ){
        return true;
    } return false;
}


/*
- Make a function named `isTrue(boolean)`
- Make a function named `isFalse(boolean)`
- Make a function named `isTruthy(input)`, remember that values other than true
  will behave like true
- Make a function named `isFalsy(input)`, remember that values other than false
  behave like false
*/

function isTrue(boolean){

}

function isFalse(boolean){

}

function isTruthy(input){
    if(Boolean(input)){
        return "truthy";
    } return "falsy";
}


function isFalsy(input){
    if(Boolean(input) == false){
        return "falsy";
    } return "truty";
}


/*
- Make a function named `isVowel(letter)`
- Make a function named `isConsonant(letter)`
- Make a function named `isCapital(letter)`
- Make a function named `isLowerCase(letter)`
 */

function isVowel(letter){

}

function isConsonant(letter){

}

function isCapital(letter){

}

function isLowerCase(letter){

}


/*
- Make a function named `hasLowerCase(string)` that returns if a string has any
  lower cased letter
- Make a function named `isSpace(letter)` that returns if a character is a space
  character
- Make a function named `isZero(number)`
- Make a function named `notZero(input)` that returns true if the input is not
  zero
 */

function hasLowerCase(string){
    return string.toUpperCase() != string;
}

function isSpace(letter){
    return /\s/g.test(letter);
}

function isZero(number){

}

function notZero(input){
    if(input !== 0){
        return true;
    }
    return "this is a zero";
}


/*
- Write a function named `lowerCase(string)`
- Write a function named `double(n)` that returns a number times two
- Write a function named `triple(n)` that returns a number times 3
- Write a function named `quadruple(n)` that returns a number times 4
- Write a function named `half(n)` that returns 1/2 of the provided input
- Write a function named `subtract(a, b)` that returns `a` minus `b`
- Write a function named `multiply(a, b)` that returns the product of `a` times
  `b`
 */

function lowerCase(string){

}

function double(n){
    return n * 2;
}

function triple(n){
    return n * 3;
}

function quadruple(n){
    return n * 4;
}
function half(n){
    return n / 2;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}




/*
- Write a function named divide(a, b) that returns `a` divided by ~b~
- Write a function named `remainder(a, b)` that returns the remainder after
  dividing a by b
- Make a function named `modulo(a, b)` that returns the returns the remainder
  after dividing a by b
- Write a function named `cube(n)` that returns n * n * n
- Write a function named `squareRoot(n)` that returns the square root of the
  input
 */

function divide(a, b){
    return a / b;
}

function remainder(a, b){
    return a % b;
}
function modulo(a, b){
    return a % b;
}

function cube(n){
    return n * n * n;
}

function squareRoot(n){
    return Math.sqrt(n);
}

/*
- Write a function named `cubeRoot(n)` that returns the cube root of the input
- Write a function named `invertSign(number)` that returns a negative version of
  a postive number, a positve version of negative, and false for all else.
- Write a function named `degreesToRadians(number)`
- Write a function named `radiansToDegrees(number)`
- Make a function named `isBlank(input)` that determines if a given input is
  spaces, newline characters, or tabs.
 */

function cubeRoot(n){
    return Math.cbrt(n);
}

function invertSign(number){
    return -(number);
}

function degreesToRadians(number){

}

function radiansToDegrees(number){

}
function isBlank(input){
        if(input.indexOf(' ') >= 0){
            return "it does!"
        }  else {
            return "no"
        }
}

/*
- Make a function named `trim(string)` that removes empty spaces before and
after the input.
- Make a function named `areEqual(input1, input2)` that returns if both inputs
have the same value
- Make a function named `areIdentical(input1, input2)` that returns if both
    inputs are same value and data type.
- Make a function named `not(input)` returns the input with a flipped boolean
- Make a function named `notNot(input)` that the negation of the negation of the
input.
 */
function trim(string){
    return string.trim();
}

function areEqual(input1, input2){
    if(input1 == input2){
        return "they are equal in value";
    } else {
        return "they are not!! equal in value";
    }
}

function areIdentical(input1, input2){
    if(input1 === input2){
        return true;
    } else {
        return "NO! they are not both equal to value or type"
    }
}

function not(input){
    return !input;
}

function notNot(input){
    return !!input;
}

/*
- Make a function named `and(predicate1, predicate2)` that returns the logical
  operation of AND
- Make a function named `c` that returns the logical
  operation of OR
- Write a function called `reverseString(string)` that reverses a string
- Make a function named `absoluteValue(number)` that returns the absolute value
  of a number.
- Make a function named `rollDice(sides)` that takes in an argument containing
  the number of sides the die should have. Generate a random number between 1 up
  to and including the number of sides.

 */

function and(predicate1, predicate2){
    if(predicate1 && predicate2){
        return true;
    } else {
        return false;
    }
}

function or(predicate1, predicate2){
    if(predicate1 || predicate2){
        return true;
    } else {
        return false;
    }
}

function reverseString(string){
    return string.split("").reverse().join("");
}

function absoluteValue(number){
    return Math.abs(number);
}

function rollDice(sides){
    let random =~~(Math.random(sides) * 6) + 1;
    return random;
}


// Simple Function Drills
/*

1. Make a function called returnTwo() that returns the number 2 when called

   Test this function with `console.log(returnTwo())`
 */


function returnTwo(){
    return 2;
}
console.log(returnTwo())

/*. Make a function called sayHowdy() which console.logs the string “Howdy!”

   Test this function by directly calling `sayHowdy()`

Remember this function does not need a defined return value
*/


function sayHowdy(){
    console.log("Howdy!")
}
sayHowdy();

/*
1. Make a function called returnName() that returns the string of your name

Test this function with `console.log(returnName())`
 */


function returnName(){
    return "Uziel";
}

console.log(returnName());

/*
    1. Make a function called addThree() which takes in a number input and returns the number plus 3.

Test this function with `console.log(addThree(5))`
 */

function addThree(number){
    return number + 3;
}
console.log(addThree(5))



/*
    1. Make a function called sayString() which returns the string input passed in.

Test this function with `console.log(sayString('codeup'))`
 */

function sayString(input){
    return input;
}
console.log(sayString('codeup'));



//## Challenge Function Drills

/*
- Write a function called `identity(input)` that takes in an argument called
input and returns that input.
 */
function identity(input){
    return input;
}

/*
- Write a function called `getRandomNumber(min, max)` that returns a random
number between min and max values sent to that function call.
 */

function getRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


/*
- Write a function called `first(input)` that returns the first character in the
provided string.
 */


function first(input){
    let firstIndex;
    for(let i = 0; i <= input.length; i++){
        firstIndex = input[0];
    }
    return firstIndex;
}



/*
- Write a function called `identity(input)` that takes in an argument called
input and returns that input.
 */

function identity(input){
    return input;
}




/*
- Write a function called `getRandomNumber(min, max)` that returns a random
number between min and max values sent to that function call.
 */
function getRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


/*
- Write a function called `last(input)` that returns the last character of a
string
 */
function last(input){
    return input.slice(-1);
}

/*
- Write a function called `rest(input)` that returns everything but the first
character of a string.
 */


function rest(input){
    return input.slice(1)
}




/*
- Write a function called `reverse(input)` that takes a string and returns it
reversed.
 */
function reverse(input){
    return input.split("").reverse().join("");
}

/*
- Write a function called `isNumeric(input)` that takes an input and returns a
boolean if the input is numeric.
 */

function isNumeric(input){
    if(typeof input == "number"){
        return true;
    } else {
        return false;
    }
}



/*
- Write a function called `count(input)` that takes in a string and returns the
number of characters.
 */

function count(input){
    return input.length;
}


/*
- Write a function called `add(a, b)` that returns the sum of a and b
 */

function add(a, b){
    return a + b;
}


/*
- Write a function called `subtract(a, b)` that return the difference between
the two inputs.
 */

function subtract(a, b){
    return Math.abs(a - b);
}

/*
- Write `multiply(a, b)` function that returns the product
 */

function multiply(a, b){
    let result = a * b;
    return result;
}


/*
- Write a `divide(numerator, denominator)` function that returns a divided by b
 */

function divide(numerator, denominator){
    return numerator / denominator;
}


/*
- Write a `remainder(number, divisor)` function that returns the remainder left
over when dividing `number` by the `divisor`
 */

function remainder(number, divisor){
    return number % divisor;
}

/*
- Write the function `square(a)` that takes in a number and returns the number
multiplied by itself.
 */

function square(a){
    return a * a;
}


/*
- Write a function called `sumOfSquares(a, b)` that uses only your `add()` function
and your square function and not + or * operators
 */
function sumOfSquares(a, b){
    let squareFunction = square();
    let addFunction = add();
}



/*
- Write a function called `doMath(operator, a, b)` that takes 3 parameters. The
first parameter is the name of the math function you want to apply. a and b
are the two numbers to run that function on.
 */

function doMath(operator, a, b){
    //operator caannot be used as a parameter
}

//## Even More Function Bonuses

/*
1. Create a function that will return how many whitespace characters are at the
beginning and end of a string.
*/


function countWhiteSpaces(str){

        let spacesAtStart = str.length - str.trimStart().length;

        let spacesAtRight = str.length - str.trimEnd().length;
        let totalCount = spacesAtStart + spacesAtRight;
        return totalCount;
}


/*
1. Create a function that takes in two string inputs.

- If the second string input is present in the first, return the first input
string with the second input string removed from it.
- If the second string input is present multiple times in the first, the
second string will only be removed where it first occurs in the first
string.
- If the second string input is not present in the first, return the first
string as entered in the function.
 */

function strings(str1, str2) {
    return str1;
}


/*
1. Create a function that takes in a string and returns true if the last letter
is an "a" (otherwise, return false).
 */

function lastElementA(input) {
        return input.charAt(input.length - 1);
}

/*
    1. EXTRA CHALLENGE: create a function that will return how many whitespace
    characters are at the beginning of a string (hint: use regex).
*/

function beginningSpaces(input){
 return input.search(/\S|$/);
}
    /*
    1. Create a function `returnTrueMessage()` that returns the string "Hey, it's true!"
    - Create a function `returnFalseMessage()` that returns the string "Hey, it's false!"
    - Create a function `returnMessage()` that takes in a function and returns the call to the function
    - Experiement passing in different functions.
     */

function returnTrueMessage(){
    return "Hey, it's true!"
}

function returnFalseMessage(){
    return "Hey, it's false!"
}
function returnMessage(){
    return returnTrueMessage();
}

/*
1. Create a function, `willLoginUser()` that takes in a username string,
   password string, user age, a boolean indicating if they are an admin.

   The function will return true if the username is not the same as the
   password and the user is at least 18 years old. If the user is an admin,
   they do not have to be a certain age but the password must still not match
   the username.
*/

function willLoginUser(userName, password, age,admin){
    //return true if username !== password
    // && user >= 18

    //if admin true no age limit
    //but uernsame !== password
    if((admin) && (password !== userName)){
        return "welcome admin"
    } else if ((!admin) && (password !== userName) && (age >= 18)){
        return "welcome!";
    } else if  ((!admin) && (password !== userName) && (age < 18)){
        return "must be older then 18";
    } else {
        return " password must not match username";
    }
}

