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

const contect = `
<main>
    <article>
        <h1>Everyday Backpack</h1>
        <ul>
            <li>Volume:</li>
            <li>Color:</li>
            <li>Age:</li>
            <li>Number of pockets:</li>
            <li>Left strap length:</li>
            <li>Right strap length:</li>
            <li>Lid status:</li>
        </ul>
    </article>
</main>
`;

document.body.innerHTML = content;