/*Make a function named isLowerCase(letter) which returns
true if the parameter is lowercased; otherwise it returns false
 */

let result = "helLLo"

function isLowerCase(letter){
    if (letter === letter.toLowerCase())
        return true;
    {
        return false;
    }
}

console.log(isLowerCase(result));



/*
Write a function named double(n) that returns a number times two
 */


let number1 = 2

function double(n){
    return n * 2;
}

console.log(double(number1));

/*
Make a function named areIdentical(input1, input2) that returns
true if both inputs are same value and data type; otherwise it returns false.
 */

let color1 = "grey";
let color2 = "red";

function areIdentical(input1, input2){
    if(input1 === input2){
        return true
    }
    return false;
}

console.log(areIdentical(color1, color2));


