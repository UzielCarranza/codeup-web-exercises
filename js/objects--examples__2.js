/*
JS Object Warmup, pt 4:
We are going to create a method which
 allows a user to input their desired amount of names names
use prompt, alert, confirm inside of a while loop
assign each name to an array
once the user decides they are done giving names, end the loop and return the string array
then assigning that returned array by invoking your new function on the Person.names property value!
Things to consider:
Should this be a standalone function or should it be a method on the Person object?
* */

//defines a contact info object

function ContactInfo(phoneNumber, streetAddress, city, state, postalCode, emailAddress){
    this.phoneNumber = phoneNumber;
    this.streetAddress = streetAddress;
    this.city = city;
    this.state = state;
    this.postalCode = postalCode;
    this.emailAddress = emailAddress;
}

//defines a person onject

function Person(occupation, dob, contactInfo){

    //assign a property the value of a function *definition*
    //this helps get the names of a person, but is not executed until you invoke getNames
    this.getNames = getNames;

    //actually *invoke* this.getNames() so the names are given when the Person object is created
    this.names = this.getNames();

    this.occupation = occupation;
    this.dob = dob;
    this.contactInfo = contactInfo;
}




// This function helps define *how* a user gives their names and returns
// those names as a string array

function getNames(){
    let namesArr = [];
    let hasMoreNames = true;
    while(hasMoreNames){
        //get names
        namesArr.push(prompt('enter your name'));

        //if they want more names, keep logging, if not break the loop
        hasMoreNames = confirm("would you like to enter another name?")
    }
    return namesArr;
}

//make new Person pbject

let person2 = new Person(
    "cat / firefighter",
    "11.30.1989",
    new ContactInfo(
        '123-123-1234',
        '123 somewhere',
        "city",
        'ca',
        '12345',
        'some@email'
    )
);

console.log(person2);




















