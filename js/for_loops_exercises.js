
// TODO: Use a for loop to print the even numbers between 0 and 30, inclusive.
//  HINT: remember the remainder operator (modulo)
console.log("hello");


let limitNumber = 30;
let showEvenNumbers = 0;

for (let i = 0; i <= limitNumber; i++){
    if (i % 2 === 0){
        showEvenNumbers = i;
        console.log(showEvenNumbers)
    }
}

// TODO: loop through numbers 1 - 40. Print "marco" if it's divisible by 3. Print "polo" if it's divisible by 5.
//  -> If it's neither print "I'm not playing"
//  -> Print "marco polo" if it's divisible by 3 and 5.

let limitNumber2 = 40;
let showMarco = 0;
let polo = 0;
let marcoPolo = 0;
for (let i = 0; i <= limitNumber2; i++){
    if (i % 3 === 0){
        showMarco = i;
        console.log(showMarco + "Marco")
    } else if (i % 5 === 0){
        polo = i;
        console.log(polo + "polo")
    }
    if ( i % 3 == 0 && i % 5 === 0){
        marcoPolo = i;
        console.log(marcoPolo + "Marco Polo");
    }
}
