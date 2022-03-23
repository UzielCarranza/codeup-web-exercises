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


// Use .map to create an array of strings where each element is a user's email address

let usersEmail = users.map(user => user.email);
console.log(usersEmail)


// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.


//
// const sum = numbers.reduce((accumulation, currentNumber) => {
//     return accumulation + currentNumber;
// }, 0);


let totalYears = users.reduce((total, user) => {
    return total + user.yearsOfExperience
}, 0) / users.length;

console.log(totalYears)


// Use .reduce to get the longest email from the list of users.

//
// let biggestEmaillength = usersEmail.reduce((total, userEmail) =>{
//     return max
// }, 0)
// console.log(biggestEmaillength)


function maxValue(emails) {
    const max = usersEmail.reduce((total, email) => {
        return total < email ? total : email;
    });
    return max;
}

console.log(maxValue())

// items.reduce(
//     (accumulator, currentValue) => {
//         return [
//             Math.min(currentValue, accumulator[0]),
//             Math.max(currentValue, accumulator[1])
//         ];
//     }, [Number.MAX_VALUE, Number.MIN_VALUE]
// );

