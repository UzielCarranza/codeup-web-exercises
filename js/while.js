"use strict";

//while loops
let incrementor = 1;

while(incrementor <= 32768){
    incrementor *= 2;
    console.log(incrementor)
}



// This is how you get a random number between 50 and 100
var allConesForToday = Math.floor(Math.random() * 50) + 50;

do {
// This expression will generate a random number between 1 and 5
    console.log("there are " + allConesForToday + " remaining")
   let takingCones =  Math.floor(Math.random() * 5) + 1;
    console.log(takingCones + " sold for today")
    if ( allConesForToday < takingCones){
        console.log("sorry, I dont have that many cones to sell you")
        continue;
    }
    allConesForToday -= takingCones
} while (allConesForToday > 0 )
console.log(allConesForToday + " cones... yay, I sold all the cones!!")


