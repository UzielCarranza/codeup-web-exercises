"use strict";

function showMultiplicationTable(number){
 let multiply;
 let counter;
//     for (var i = 1; i < number; i++) {
//         multiply = number[i] * i;
//         console.log( + i + ', x = ');
//     }
    for (var i = 1, j = 1; i < 10, j < 10; i++, j++) {
        counter = number[i];
        multiply = ( i * j);
        console.log(i + " * " + j + ' = ' + multiply);
    }

}

console.log(showMultiplicationTable(5))
//
// for (var i = 0, j = 9; i < 10; i++, j--) {
//     console.log('for loop iteration #' + i + ', j = ' + j);
// }