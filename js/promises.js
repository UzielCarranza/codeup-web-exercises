

const url = 'https://api.github.com/repos/UzielCarranza/codeup-web-exercises/commits';
// https://api.github.com/repos/gmPuryear/codeup-web-exercises/commits

fetch(url, {headers: {'Authorization': GIT_HUB}})
    .then(data => data.json())
    .then(data => console.log(data[0].commit.author.date))


// function getUser(username) {
//     return fetch(`https://api.github.com/users/${login}`)
//         .then(response => response.json())
//         .then(response => {
//             return response;
//         })
// }
//
// console.log(getUser());