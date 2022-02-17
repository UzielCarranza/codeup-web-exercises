// Write a function called findAverage that takes in
// an array of integers representing grades and returns the average.
//     Example input: [95, 74, 86, 100]
// Example output: 88.75 (edited)

// let arrExample = [95, 74, 86, 100];
//
// function findAverage(arrNum){
//     let average = arrNum.reduce((a,b) => a + b, 0) / arrNum.length;
//     return average;
// }
//
// console.log(findAverage(arrExample));
//
//
//
// function findAverage(grades){
//
//     let sum = 0;
//     for (let i = 0; i < grades.kength; i++){
//         sum += grades[i];
//     }
//     return sum / grades.length;
// }
//
// JS Object Warmup, pt 1:
// Create an object representing a person. It should have properties representing:
//     names (an array of strings)
// date of birth
// occupation
// Hard code some values in that object, then log it and its properties to the console

//
// var person = {
//     name: {
//         firstName: "Uziel",
//         lastName: "Carranza",
//     },
//     dateOfBirth: "01/01/1991",
//     occupation: "developer"
// }
//
// person.age = 25;
// console.log(person);
// console.log("---");
// console.log(person.name.firstName);
// console.log(person.name.lastName);
// console.log(person.age);
//
//
// console.log("--------------------next example----------------------------")
//
// JS Object Warmup, pt 2:
// Create an object representing a person’s contact info. It should have:
//     phone number
// street address
// state
// postal code
// email address
// Hard code some values in that object, then log it and its properties to the console

//
// let personContactInfo = {
//     phoneNumber: '123-123-1234',
//         address: '1234 street',
//         zipCode: '123456',
//         city: 'city',
//         state: 'state'
//
// }
//
// console.log(personContactInfo)

// personContactInfo.forEach(()=>{
//
// })

//
// JS Object Warmup, pt 3:
// Create a property on the person object to store their contact info
//     -> Assign the contact info variable to that property
//     -> Log that entire object and its properties to the console

// person.contactInfo = personContactInfo;
//
// function PersonContact(names, occupation, dob){
//     this.names = names;
//     this.occupation = occupation;
//     this.dob = dob;
// }
//
// let person2 = new PersonContact(
//      ['eadeda'],
//     'coder',
//     '12-12-1222',
//     new Person(
//         "123-123-1212",
//
//     )
// )
//
// console.log(person2);
//
// //defines a contact info object
// function Person(phoneNumber, streetAddress, address,zipCode,city,state) {
//         this.phoneNumber = phoneNumber;
//         this.streetAddress = streetAddress;
//         this.address = address;
//         this.zipCode = zipCode;
//         this.city = city;
//         this.state = state;
// }
//
//
// console.log(person2)
//
// let person3 = new Person(
//     '2323',
//     '2121',
//     '1221333131',
//     '13313131313'
//
// )
//
// console.log(person3)


console.log('-----starts new warm up-------')

//warm-up 02/17/2022
//
// JS Object Warmup, pt 4:
// We are going to create a method which
// allows a user to input their desired amount of names names
// use prompt, alert, confirm inside of a while loop
//     assign each name to an array
// once the user decides they are done giving names, end the loop and return the string array
// then assigning that returned array by invoking your new function on the Person.names property value!
//     Things to consider:
//     Should this be a standalone function or should it be a method on the Person object?


// Defines a contact info object
function ContactInfo(phoneNumber, streetAddress, city, state, postalCode, emailAddress){
    this.phoneNumber = phoneNumber;
    this.streetAddress = streetAddress;
    this.city = city;
    this.state = state;
    this.postalCode = postalCode;
    this.emailAddress = emailAddress;
}
// Defines a person object
function Person(names, occupation, dob, contactInfo) {
    this.getNames = () => {
        let namesArr = [];
        let hasMoreNames = true;

        while(hasMoreNames){
            //get those names
            namesArr.push(prompt('please enter your name'));
            //prompt for names

            //if they want more names, keep looping. if not, break the loop
            hasMoreNames = confirm('would you like to enter another name')
        }
        return namesArr;
    }
    this.names = this.getNames();
    this.occupation = occupation;
    this.dob = dob;
    this.contactInfo = contactInfo;
}
// makes a new person object instance (by invoking the constructor)
let person2 = new Person(
    ["Casey", "J", "Edwards"],
    "Cat Herder / Firefighter",
    "11.30.1989",
    new ContactInfo(
        '123.456.7890',
        '123 Anywhere Ln',
        'Beverly Hills',
        'CA',
        '90210',
        'nope@no-no-no.no'));

console.log(person2.contactInfo.emailAddress);


//my response

//function
// function askUser(){
//     let userNames = {};
//
//     let userPrompt = prompt('what is your name?');
//     while(userPrompt){
//         askingUser = confirm('do you want to add more names?')
//         if (askingUser === false){
//             alert('thanks ' + userPrompt);
//             break;
//         } else if (askingUser){
//             userPrompt = prompt('enter your name')
//             userNames = userPrompt;
//             return userNames;
//             console.log(userNames)
//         }
//     }
// }
//
// askUser()
//
// //
//
// Person(askUser(),)
// console.log(Person)


//walkthrough

function getNames(){
    let namesArr = [];
    let hasMoreNames = true;

    while(hasMoreNames){
        //get those names
        namesArr.push(prompt('please enter your name'));
        //prompt for names

        //if they want more names, keep looping. if not, break the loop
        hasMoreNames = confirm('would you like to enter another name')
    }
    return namesArr;
}
getNames();

console.log(getNames());

let person = new Person(getNames());

















