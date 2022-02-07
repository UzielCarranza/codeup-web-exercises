
// TODO: Write a function to 'determine' if a driver is available to accept the ride
//  -> You can have the user give their location and mock up the location of the driver
//  -> ie: the driver is in Dallas, so they must give you either ['Dallas', 'Irving', 'Plano', 'Duncanville', or 'Richardson']

// TODO: Write a function to 'determine' the cost of the rideshare and pass that function's return value as an argument to the invocation of tryGetRideshare

// TODO: Write a function to orchestrate this program
//  -> This means you have one function which sets the execution order
//      -> 1) get the starting point and destination
//      -> 2) get the cost of the ride
//      -> 3) determine if the rider(s) has enough money
//      -> 4) hail the rideshare

//ask user's location
function userLocationRandom() {
    var arv  = ['Dallas', 'Irving', 'Plano', 'Duncanville', 'Richardson']
    var randArv = arv[Math.round(Math.random()*(arv.length-1))];

    return randArv;
}

console.log("you are at" + userLocationRandom());



//get driver location
 let driverLocation = function DriverRandom() {
    var arv  = ['Dallas', 'Irving', 'Plano', 'Duncanville', 'Richardson']
    var randArv = arv[Math.round(Math.random()*(arv.length-1))];

    return randArv;
}


//get user destination
function arriveUserLocation() {
    var arv  = ['Dallas', 'Irving', 'Plano', 'Duncanville', 'Richardson']
    var randArv = arv[Math.round(Math.random()*(arv.length-1))];
     alert("you are going to " + randArv )
    return randArv;
}

console.log("you are going to" + arriveUserLocation());



//user confirms drivers location
let userConfirmation = confirm( "A driver is available in" + " " + driverLocation() + "do you want to continue?")
console.log(userConfirmation);


//ask for funds
let userFunds = function getFundsAvailable(){
    let moneyInAccount = parseFloat(prompt("How much is in your account"));
    let creditsInAccount = parseFloat(prompt("How much credit available is in your account"));

    return  moneyInAccount + creditsInAccount;
}
console.log(userFunds())


let tripCost = Math.floor(Math.random() * 100);
confirm("your total payment is of " + tripCost + " do you want to continue?")


function tryGetRideshare(tripCost, driverLocation, userFunds,){

//     // TODO: This is some starter code for splitting the rideshare cost
     let numOfRiders;

     if(confirm("Are you splitting this ride with someone else?")){
         numOfRiders = prompt("How many additional riders do you have?");
     }
    if(numOfRiders > 4){
        alert("only 4 people are allowed in the vehicle!")
    }
     if (numOfRiders <= 4){
      // split the cost and 'message' (fake it up) the other rider
         prompt("your fare will be splitted between " + numOfRiders)
     }

     //solved
     let ridersSplitShare = (numOfRiders / 100) * tripCost;

    // function calculatePercentaje(ridersSplitShare, tripCost){
    //     let total = (numOfRiders / 100) * tripCost;
    //     return total;
    // }

    if (driverLocation && userFunds >= calculatePercentaje){
        console.log("Your ride is on the way");
    }else{
        console.log("No drivers are available at this time...");
    }
}


console.log(tryGetRideshare(tripCost, driverLocation, userFunds))