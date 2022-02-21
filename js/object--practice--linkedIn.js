/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const backPack1 = {
    size: "medium",
    numOfPockets: 4,
    strapLength: {
        strapLeft: 4,
        strapRight: 4
    },
    color: "red",
    isOpen: false,
    3: "invalid input",
}

console.log(backPack1);
console.log("the backpack is color:", backPack1.color);
console.log("the length of the left strap is:",backPack1.strapLength.strapLeft)
console.log(backPack1["3"]);

console.log("----------second exercise-----------");
/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
    name: "Everyday Backpack",
    enterName: function (strName){
        this.name = strName;
    },
    volume: 30,
    newVolume: function (num){
        this.volume = num;
    },
    color: "grey",
    newColor: function (newColor){
        this.color = newColor;
    },
    pocketNum: 15,
    changingPockets: function (morePockets){
        this.pocketNum = morePockets;
    },
    strapLength: {
        left: 26,
        right: 26,
    },
    lidOpen: false,
    toggleLid: function (lidStatus) {
        this.lidOpen = lidStatus;
    },
    newStrapLength: function (lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    },
};

//not making changes to the function
console.log('before calling the function',backpack.lidOpen);
//calling the function after
backpack.toggleLid(true);
console.log('after calling the function',backpack.lidOpen);


//changing the value once again without using the function
backpack.lidOpen = true;
console.log(backpack.lidOpen);

console.log(backpack);
console.log('---straps funcction-----');

backpack.newStrapLength(2,2);
console.log(backpack.strapLength);

console.log('----------function for name-----');

console.log('before calling function',backpack.name);
backpack.enterName("Favorite backpack");
console.log('after calling function',backpack.name);

console.log('-----adding method to volume-------')
console.log(backpack.volume);
backpack.newVolume(45);
console.log(backpack.volume);

console.log('-----adding method to color--------');
console.log(backpack.color);
backpack.newColor("blue");
console.log(backpack.color);

console.log('------adding method to pocket num-------')

console.log(backpack.pocketNum);
backpack.changingPockets(6);
console.log(backpack.pocketNum);



















