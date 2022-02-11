
(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ['Uziel', 'Imer', 'Maria', 'Miguel'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0], names[1], names[2], names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    function accessItem(){
        let items;
        for (let i = 0; i < names.length; i++){
            items = names[i];
            console.log(items);
        }
    }
    accessItem();

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(name){
        console.log("here are the names: " + name )
    })

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    //first element form array
    function first(arr){
        return arr[0];
    }

    console.log(first(names));


    //second element from array
    function second(arr){
        return  arr[1];
    }
    console.log(second(names));


    //last element
    function last(arr){
        return arr[arr.length -1]
    }
    console.log(last(names));


})();
