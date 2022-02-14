
//arrays backwards
let numbers = [1,2,3,4,5,6];

for (let i = numbers.length -1; i >=0; i--){
    // if(i % 2 === 0) //even numbers
    console.log(numbers[i]);
}

//modifies the array





//sort modifies the array

let instructors =['Casey', 'Docrob', 'Ry', 'Jey', 'David'];

instructors.sort();
console.log(instructors);



//splitting and joining
//split converts into an array
//joins convert into string
// dont affect the original array
//creates a new one


let userInput = "uzi,carranza,02/16/1997,Uzielc,ford,mustang";

let userInfoArr = userInput.split(',');
console.log(userInfoArr);


//join
let userInfoAgain = userInfoArr.join('');
console.log(userInfoAgain);


//date
let dt = new Date().toString();
console.log(dt.split('T')[0]);

