let navContent = document.getElementById("nav")
// console.log(navContent);

console.log(navContent.children);

//create element


//API RETURN
let nameElement = document.createElement("p");
console.log(nameElement);
function getGitHub(){
    return {
        name: "vegetas"
    };
}

console.log(getGitHub().name);

nameElement.innerText = getGitHub().name;
console.log(nameElement)
navContent[1]
