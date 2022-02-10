


function oddNumber() {
    let counting = 50;
    do {
        userInput = parseInt(prompt("please enter an odd number!"));
        if (userInput % 2 === 1) {
            break;
        }
    } while (userInput % 2 === 0 || isNaN(userInput))

    for (let i = 1; i <= counting; i+= 2  ) {
        if (userInput === i){
            console.log("we don't want this number!!! " + userInput)
            continue;
        }
        console.log("here is an odd number " + i)
    }
}

console.log(oddNumber())