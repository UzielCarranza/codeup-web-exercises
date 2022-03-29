

const url = 'https://api.github.com/repos/UzielCarranza/codeup-web-exercises/commits';
// https://api.github.com/repos/gmPuryear/codeup-web-exercises/commits

fetch(url, {headers: {'Authorization': GIT_HUB}})
    .then(data => data.json())
    .then(data => console.log(data[0].commit.author.date))




const url2 = 'https://api.github.com/users/UzielCarranza/events';
// https://api.github.com/repos/gmPuryear/codeup-web-exercises/commits

fetch(url2, {headers: {'Authorization': GIT_HUB}})
    .then(data => data.json())
    .then(data => console.log(data[0].payload.commits[0].message))
