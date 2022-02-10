"use strict";

function showMultiplicationTable(number){
    let multiply;
        for (var j = 1; j <= 10; j++) {
            multiply = (number * j);
            console.log(number + " * " + j + ' = ' + multiply);
        }
}

console.log(showMultiplicationTable(5))
