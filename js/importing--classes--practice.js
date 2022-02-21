/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Computer from "../js/objectClass--practice.js"

const workLaptop = new Computer(
    "uzielcaa09",
    "medium",
    'macOS',
    'silver',
    'uzielca',
    'uziel2',
    true,
    '25%',
    '2020'
);
console.log("uziel's work omputer", workLaptop);
console.log('days since acquired', workLaptop.computerAge());

const content = `
<main>
    <article>
        <h1>user: ${workLaptop.user}</h1>
        <ul>
            <li>user1: ${workLaptop.users.user1Name}</li>
            <li>size: ${workLaptop.size}</li>
            <li>os: ${workLaptop.os}</li>
            <li>color: ${workLaptop.color}</li>
            <li>status: ${workLaptop.isOn(false)}</li>
            <li>battery percentaje: ${workLaptop.batteryPercentage}</li>
            <li>days since I GOT IT: ${workLaptop.computerAge()}</li>
        </ul>
    </article>
</main>
`;

document.body.innerHTML = content;