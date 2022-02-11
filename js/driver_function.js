
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

    let userLoc = confirm("This is your starting point: " + randArv)
    console.log(userLoc + " user confirms location");

}
userLocationRandom();
console.log("user is going to  " + arriveUserLocation());

// get user destination

function arriveUserLocation() {
    var arv  = ['Dallas', 'Irving', 'Plano', 'Duncanville', 'Richardson']
    var randArv = arv[Math.round(Math.random()*(arv.length-1))];
    alert("and you are going to: " + randArv )
    return randArv;

}



alert("getting you a ride right now...")
// get driver location


 let driverLocation = function DriverRandom() {
    var arv  = ['Dallas', 'Irving', 'Plano', 'Duncanville', 'Richardson']
    var randArv = arv[Math.round(Math.random()*(arv.length-1))];

    return randArv;
}

// user confirms drivers location
let userConfirmation = confirm( "A driver is available in the following location: " + " " + driverLocation() + ". do you want to continue?")
console.log("user confirms ride " + userConfirmation);



// estimate costs
function tripCost() {
    var tripCost = Math.floor(Math.random() * 500) + 100;
    //confirm("your total payment is $" + tripCost + ".00 Do you want to continue?")
    console.log("user confirms rate")
    return tripCost;
    console.log(tripCost)
}
//
// console.log(tripCost())
// //ask for funds
//
// let userFunds = function getFundsAvailable(){
//     let moneyInAccount = parseFloat(prompt("Enter available fund in your account"));
//     let creditsInAccount = parseFloat(prompt("How much credit available is in your account"));
//
//     return  moneyInAccount + creditsInAccount;
// }
// console.log(userFunds());



function tryGetRideshare(){

//     // TODO: This is some starter code for splitting the rideshare cost
     let numOfRiders;

     if(confirm("Are you splitting this ride with someone else?")){
         numOfRiders = parseInt(prompt("How many additional riders do you have?"));

     }
    while(numOfRiders > 4){
        alert("only 4 people are allowed in the vehicle!")
        numOfRiders = parseInt(prompt("How many additional riders do you have?"));
    }
     if (numOfRiders <= 4){
         confirm("your fare will be splitted between " + numOfRiders)
     }

     //estimate total after confirming splitting the payment
     var ridersSplitShare = (tripCost() / numOfRiders);
     confirm("your new total that you have to pay is: " + ridersSplitShare )


     //ask for funds

    function getFundsAvailable(){

         let moneyInAccount = 0
        console.log(ridersSplitShare)
        let creditsInAccount = parseFloat(prompt("enter available credits in your account"));
        while(isNaN(creditsInAccount)){
            creditsInAccount = parseFloat(prompt("enter available credits in your account"));
        }
        ridersSplitShare = ridersSplitShare - creditsInAccount;
        if (ridersSplitShare <= creditsInAccount ){
            confirm("you are all done and your driver is on the way!!!")
        }
        if (creditsInAccount < ridersSplitShare){
             moneyInAccount = confirm("you will need to pay the remaining balance of $" + ridersSplitShare + ".00 With funds in your account");
        }
        if (moneyInAccount){
            moneyInAccount = parseFloat(prompt("please pay the remaining balance of $" + ridersSplitShare + ".00 With funds in your account"));
        }
        if (ridersSplitShare = 0){
            alert("your ride is on the way!!!")
        } else {
            alert("sorry, you don't have enough money")
        }
    }
    console.log(getFundsAvailable());



    // if (driverLocation && userFunds >= calculatePercentaje){
    //     console.log("Your ride is on the way");
    // }else{
    //     console.log("No drivers are available at this time...");
    // }
}

console.log(tryGetRideshare())

//
// console.log(tryGetRideshare(tripCost, driverLocation, getFundsAvailable()))