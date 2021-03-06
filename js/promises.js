

const url = 'https://api.github.com/repos/UzielCarranza/codeup-web-exercises/commits';


getLastCommit(getUserName())
getCommetLastCommit(getUserName())
function getUserName(){
    return "UzielCarranza"
}
function getLastCommit(username) {
    fetch(`https://api.github.com/repos/${username}/codeup-web-exercises/commits`,
        {headers: {'Authorization': GIT_HUB}})
        .then(data => data.json())
        .then(data => console.log(data[0].commit.author.date))
}



function getCommetLastCommit(username) {
    fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': GIT_HUB}})
        .then(data => data.json())
        .then(data => console.log(data[0].payload.commits[0].message))
}


function getUserLastPush(username) {
    return fetch(`https://api.github.com/users/${username}/events/public`)
        .then(res => res.json())
        .then(events => {
            for (let event of events) {
                if (event.type === 'PushEvent') {
                    console.log(event)

                    return event;
                }
            }
        })
}

getUserLastPush("UzielCarranza")