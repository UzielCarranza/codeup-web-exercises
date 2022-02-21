/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const backPack = {
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

console.log(backPack);
console.log("the backpack is color:", backPack.color);
console.log("the length of the left strap is:",backPack.strapLength.strapLeft)
console.log(backPack["3"]);
