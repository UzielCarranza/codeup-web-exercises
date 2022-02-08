"use strict";

//tuesday, february 8th



















//monday, february 7th, 2021



//example 1
var isAdmin = false;

if (isAdmin){
    console.log("you are an admin");
}

////example 2

var itemPrice =  4.99;
var moneyInWallet = 5.00;

if(moneyInWallet >= itemPrice){
    console.log("you can buy this items.log");
} else {
    console.log("you cannot buy this");
}

//example 3

var age = 20;
var priceOfDrink = 8.00;

if (age >= 21 && moneyInWallet >= priceOfDrink){
    console.log("you can buy the drink")
} else {
    console.log("you cannot buy a drink")
}


//mini-exercise
/*
IF / ELSE IF / ELSE
Create a function called getToDestination which will help determine how a person can get to their destination!
    It will accept 4 arguments and the parameter names are:
    age - the age of the rider
isInsured - a boolean telling the function if the rider has insurance
hasCar - a boolean describing if the rider has a car
canGetRideshare - boolean describing if the rider can get a ride share (Uber, etc)
If the rider is over 16, has insurance, and has a car then they can use their own vehicle
If the rider is not over 16, has no insurance, OR has no car but they CAN get a rideshare, then they call up a rideshare service
If the rider meets none of the above, they should call a friend for a ride!
    This getToDestination should not return any value, but rather console log based on the conditions met.
    getToDestination, part 2
Create a function called canGetRideshare() which will RETURN a boolean
It will determine if there are drivers nearby and the person has enough money for the ride
Now, when you call getToDestination(), instead of passing in a canGetRideShare parameter
Call canGetRideshare() in the else if after !isLegalDriver &&...
Be sure to log to the user if they can or cannot get a rideshare

 */

//walkthrough


/*
function getToDestination(age, isInsured, hasCar,){
    if (age > 16 && isInsured && hasCar){
        console.log("you can use your own vehicle")
    } else if (canGetRideShare(true, true)){
        //alternative
        //else if (canGetRideShare)
        console.log("you can get a rideshare")
    } else {
        console.log("better call a friend, sorry")
    }
}
 */

function getToDestination(age, isInsured, hasCar,hasMoney, driversNearby){
    if (age > 16 && isInsured && hasCar){
        console.log("you can use your own vehicle")
    } else if (canGetRideShare(driversNearby,hasMoney)){
        //alternative
        //else if (canGetRideShare)
        console.log("you can get a rideshare")
    } else {
        console.log("better call a friend, sorry")
    }
}




getToDestination(17, false, true, true, true, )



function canGetRideShare(hasDriversNearby, hasEnoughMoney){
    if (hasDriversNearby && hasEnoughMoney){
        return true;
    } else {
        return false;
    }
    //arternative
    //retunr !!(hasDriversNearby, hasEnoughMoney)
}

//2nd exercise
function checkWeather(todaysWeather){
    if (todaysWeather === "snowing"){
        console.log("please stay inside")
    } else if (todaysWeather === "raining"){
        console.log("grab an umbrella")
    } else if (todaysWeather === "hailing"){
        console.log("recover your car")
    } else {
        console.log("go play outside")
    }
}

checkWeather("raining");

//switch statement


checkWeather("raining");

function checkWeatherBreak(todaysWeather){
    switch(todaysWeather){
        case "snowing":
            console.log("please stay inside");
            break;
        case "raining":
            console.log("grab umbrella");
            break;
        case "hailing":
            console.log("cover your car");
            break;
        default:
            console.log("go play outside");
            break;
    }
}


checkWeatherBreak("raining");











/*
//extra project to work on it... make it better

//declare values
let ageUser = 16
let hasInsurance = false;
let hasCar = true;


//define whether or not to take a rideShare
function getToDestination(riderAge, isInsured, hasCar){
    if(riderAge >= 16 && (isInsured == false) && (hasCar == false || hasCar == true)
        && canGetRideshare(driverAva== true && hasMoney == true)){
        console.log("better to get a ride share!");
    } else if (riderAge > 16 && ((isInsured == true) || (hasCar == true))){
        console.log("you can use your own vehicle");
    } else if (riderAge <= 15 && hasCar == true && hasInsurance == true){
        console.log("better to call a friend");
    }else {
        console.log("just call a friend, sorry")
    }
}

//call the function
getToDestination(ageUser,hasInsurance,hasCar)
console.log(canGetRideshare(driverAva, hasMoney));



// //declare values for canGetRideshare()
let driverAva = true;
let hasMoney = true;


//can get a rideShare based on funds and driver availability
function canGetRideshare(driverAvailable,hasEnoughFunds){

    if (driverAvailable && hasEnoughFunds){
        return true;
    } else {
        return false;
    }
}

canGetRideshare(driverAva,hasMoney)



console.log("you" + getToDestination(ageUser, hasInsurance, hasCar, canGetRideshare(driverAva, hasMoney)));
 */



