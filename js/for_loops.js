"use strict";
//

//Create a function named showMultiplicationTable that accepts a number
// and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)


function showMultiplicationTable(number){
    let multiply;
        for (var j = 1; j <= 10; j++) {
            multiply = (number * j);
            console.log(number + " * " + j + ' = ' + multiply);
        }
}

console.log(showMultiplicationTable(5))





//second exercise
//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20
// and 200 and output to the console whether each number is odd or even. For example:

function random() {


    for (var i = 0; i < 10; i++) {
        let randomNums = Math.floor(Math.random() * 180) + 20;
        if (i % 2 === 0) {
            console.log(randomNums + " is even")
        } else {
            console.log(randomNums + " is odd")
        }
    }
}

console.log(random())

//Create a for loop that uses console.log to create the output 100, 95, 90...


//
// generate piramid exercise 4

for (var i = 1; i < 10; i++){
    let result = i.toString();

    console.log(result.repeat(i));
}

