"use strict";
//
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
let randomNums = Math.floor(Math.random() * 200) + 20;
console.log(randomNums);

for (var i = 0; i < randomNums; i++){
    if (i % 2 === 0){
        console.log(i + " is even")
    } else {
        console.log(i + " is odd")
    }
}