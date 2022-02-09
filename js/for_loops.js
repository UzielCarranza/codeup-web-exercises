"use strict";

function showMultiplicationTable(number){
let multiply;
    for (var i = 1; i < number; i++) {
        multiply = number[i] * i;
        console.log( + i + ', x = ');
    }
}

showMultiplicationTable(9);

//
// for (var i = 0, j = 9; i < 10; i++, j--) {
//     console.log('for loop iteration #' + i + ', j = ' + j);
// }