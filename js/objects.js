(function () {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {};

    person.firstName = 'Uziel';
    person.lastName = 'Carranza';
    console.log(person.firstName);
    console.log(person.lastName);


    console.log('----------1st exercise-------------')


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        return "Hello from " + person.firstName + " " + person.lastName;
    };
    console.log(person.sayHello());

    console.log('----------2nd exercise-------------')

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    console.log(shoppers)

    //conditional how much each one needs to pay
    //if shopper spends more than 200
    //apply discount 12%
    //return name, amount before discount, the discount, amount after discount
    function applyingDiscount() {
        let discount = 0;
        let newTotal = 0;
        shoppers.forEach((i) => {
            if (i.amount > 200) {
                discount = (i.amount * 12) / 100;
                newTotal = i.amount - discount;
                console.log("your discount was $" + discount);
                console.log("your new total is $" + newTotal);
            }
        })

    }

    applyingDiscount();


    console.log('----------3rd exercise-------------')
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {title: 'Cracking the Coding Interview', author: {firstName: "Gayle", lastName: "McDowell"}},
        {title: 'Atomic Habits', author: {firstName: "James", lastName: "Clear"}},
        {title: "Can't Hurt Me ", author: {firstName: "David", lastName: "Goggins"}},
        {title: 'Deep Work', author: {firstName: "Cal", lastName: "Newport"}},
        {title: 'The 10x Rule', author: {firstName: "Grant", lastName: "Cardone"}},
    ];
    console.log(books[0].title);
    console.log(books[0].author.firstName);
    console.log(books[0].author.lastName);

    console.log('----------4th exercise-------------')

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    function getInfoBooksArr() {
        let bookNumber;
        let bookTitle;
        let authorName;
        let counter = 1;

        books.forEach((index, bookNum) => {

            bookNumber = "book # " + counter++;
            console.log(bookNumber);

            bookTitle = "title: " + books[bookNum].title;
            console.log(bookTitle);

            authorName = index.author.firstName + " " + index.author.lastName;
            console.log("Author: " + authorName);
            console.log("---");
        })
    }

    console.log(getInfoBooksArr(books));

    console.log('----------5th exercise-------------')


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
     console.log('------------------------')
    function createBook(title, ...author){
        let bookObj = {title, ...author}
        return bookObj;
        //return book object
    }

    //recreate array to use function instead
    var booksFunction = [
        {title: 'Be obsessed or be average', author: {firstName: "Grant", lastName: "Cardone"}},
        {title: 'Rich Dad Poor Dad', author: {firstName: "Robert", lastName: "Kiyosaki"}},
        {title: 'CashFlow Quadrant', author: {firstName: "Robert", lastName: "Kiyosaki"}},
        {title: '48 laws of Power', author: {firstName: "Robert", lastName: "Greene"}},
        {title: 'Mastery', author: {firstName: "Robert", lastName: "Greene"}},
    ];
    console.log(createBook(booksFunction));

    console.log('----------bonus 1 exercise-------------')

    function getInfoBooksArr2() {
        let bookNumber;
        let bookTitle;
        let authorName;
        let counter = 1;

        booksFunction.forEach((index, bookNum) => {
            bookNumber = "book # " + counter++;
            console.log(bookNumber);

            bookTitle = "title: " + booksFunction[bookNum].title;
            console.log(bookTitle);

            authorName = index.author.firstName + " " + index.author.lastName;
            console.log("Author: " + authorName);
        })

    }
    function showBookInfo(bookObj){
        return getInfoBooksArr2(bookObj);
    }
    console.log(showBookInfo(booksFunction))

    console.log('----------Bonus 2 exercise-------------')

})();