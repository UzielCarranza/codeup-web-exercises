"use strict";
//

//Create a function named showMultiplicationTable that accepts a number
// and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)


// function showMultiplicationTable(number){
//     let multiply;
//         for (var j = 1; j <= 10; j++) {
//             multiply = (number * j);
//             console.log(number + " * " + j + ' = ' + multiply);
//         }
// }
//
// console.log(showMultiplicationTable(5))





//second exercise
//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20
// and 200 and output to the console whether each number is odd or even. For example:


// let randomNums = Math.floor(Math.random() * 200) + 20;
// console.log(randomNums);
//
// for (var i = 0; i < randomNums; i++){
//     if (i % 2 === 0){
//         console.log(i + " is even")
//     } else {
//         console.log(i + " is odd")
//     }
// }


//Create a for loop that uses console.log to create the output 100, 95, 90...

// for (let i = 100; i >= 5; i-= 5 ){
//     console.log(i)
//
// }


//generate piramid exercise 4

let numberRows = 4;
let result = 0;

for (let i = 1; i <= numberRows; i++) {
    for (let j = 1; j <= i; j++) {

        result += j + " "
        result++
        console.log(result)
    }
}

