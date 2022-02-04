
/*
*
*
* Functions notes js 1
*
*
*
* */





tryGetRideShare(15, true, getFundsAvailable());


function getFundsAvailable(){
    let moneyInAccount =parseFloat(prompt("how mush is in the account"))
    let creditsInAccount = parseFloat(prompt("how much is in the account"))

    return moneyInAccount + creditsInAccount;
    // can use only return to scape

}



function tryGetRideShare(costOfRide, driverAvailable, totalFundsAvailable){
    /*
       let numOfRiders;
       if(confirm("are you splitting this ride with someone else")){
           numOfRiders = prompt("how many riders do you have")
       }
       if (numOfRiders){

       }
   */
    if(driverAvailable && totalFundsAvailable >= costOfRide){
        console.log("driver is on the way");
    } else {
        console.log("driver is not available at this time");
    }
}




//exercise functions

function sayHello(name){
    return `Hello, ${name}`;
}


//2

let helloMessage = sayHello("uziel");






