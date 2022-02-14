// Write a function called findAverage that takes in
// an array of integers representing grades and returns the average.
//     Example input: [95, 74, 86, 100]
// Example output: 88.75 (edited)

let arrExample = [95, 74, 86, 100];

function findAverage(arrNum){
    let average = arrNum.reduce((a,b) => a + b, 0) / arrNum.length;
    return average;
}

console.log(findAverage(arrExample));