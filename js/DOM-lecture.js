
// get the thing
let navContent = document.getElementById("navContent");

// log the thing to make sure you got the thing
// console.log(navContent);

console.log(navContent.children);

// create an element
let nameElement = document.createElement("p");

// get the data and set it to the text of the new element
nameElement.innerText = getGitHubInfo().name;
nameElement.style["color"] = 'white';
console.log(nameElement)

// TODO: Add nameElement to the DOM - specifically in between the GitHub Logo and the ul on the navbar


// document.insertAdjacentElement('beforebegin', nameElement)

// nameElement.insertBefore(navContent, img)

let parent1 = document.getElementById("navContent").parentNode;

let childs = document.querySelector("ul")
console.log(childs)

childs.setAttribute('id', "child12")
console.log(childs)

nameElement.insertBefore('parent1', 'child12')




// PRETEND THIS IS AN API CALL ACROSS THE INTERWEBS
function getGitHubInfo(){
    return {
        name: "vegetasrevenge"
    };
}