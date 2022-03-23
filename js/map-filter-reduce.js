const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let knowsThreeLanguages = users.filter(user => user.languages.length >= 3);
console.log(knowsThreeLanguages)


// let knows3Languages = users.filter(function (user){
//     return user.languages.length >= 3;
// })
//
// knows3Languages.forEach(function (user){
//     console.log(user.languages)
// })

// Use .map to create an array of strings where each element is a user's email address

let usersEmail = users.map(user => user.email);
console.log(usersEmail)

// let emailAdresses = users.map(function (user){
//     return user.email
// })
// emailAdresses.forEach(function (user){
//     console.log(email)
// })


// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.


let totalYears = users.reduce((total, user) => {
    return total + user.yearsOfExperience
}, 0) / users.length;

console.log(totalYears)


// Use .reduce to get the longest email from the list of users.
function maxValue(emails) {
    const max = usersEmail.reduce((total, email) => {
        return total < email ? total : email;
    });
    return max;
}

console.log(maxValue())

