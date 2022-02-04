/* TODO: MINI-EXERCISE:
*   -> Write a function named getName() which will return the result of the user inputting their name(s)
*   -> Console log the invocation of getName() to ensure it works properly
*   -> Now, write a function named showName(username).
*       -> It takes in 'username' as an argument and alerts the user to their name
*       -> Pass an invocation of getName() as an argument to the invocation of showName()
*       -> showName() should be void function. That is, it should not return a value - only execute code
*   -> Test to ensure your code is working as expected
* */


let myName = "Uziel"

function getName(name){
    return name;
}

console.log(getName(myName))


function showName(username){
    alert( myName + " " + "this is your username" );
}
let showNameInvoc = showName(myName);

console.log(showNameInvoc);

/*
let enterName = prompt("enter your name");
let userPrompt = getName(enterName);
let result = showName("this is your username" + " " + userPrompt)
console.log(result);
*/





//solution


/*
function getName(){
   return  prompt("what is you name")
}

console.log(getName())

function showName(username){
    alert(username)
}

showName(getName());

////////


/*

keep asking
 */

/*
function getName(){
    let addMoreNames = true;
    let username = " ";
    while (addMoreNames){
    username +=  prompt("what is you name");
        addMoreNames = confirm("would you like to add anohter name?");
        if (addMoreNames){
        username += " "
        }
    }
    return username
}

function showName(username){
    alert(username)
}

showName(getName());

*/



