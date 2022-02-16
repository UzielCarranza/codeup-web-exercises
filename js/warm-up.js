// Write a function called findAverage that takes in
// an array of integers representing grades and returns the average.
//     Example input: [95, 74, 86, 100]
// Example output: 88.75 (edited)

// let arrExample = [95, 74, 86, 100];
//
// function findAverage(arrNum){
//     let average = arrNum.reduce((a,b) => a + b, 0) / arrNum.length;
//     return average;
// }
//
// console.log(findAverage(arrExample));
//
//
//
// function findAverage(grades){
//
//     let sum = 0;
//     for (let i = 0; i < grades.kength; i++){
//         sum += grades[i];
//     }
//     return sum / grades.length;
// }
//
// JS Object Warmup, pt 1:
// Create an object representing a person. It should have properties representing:
//     names (an array of strings)
// date of birth
// occupation
// Hard code some values in that object, then log it and its properties to the console


var person = {
    name: {
        firstName: "Uziel",
        lastName: "Carranza",
    },
    dateOfBirth: "01/01/1991",
    occupation: "developer"
}

console.log(person);