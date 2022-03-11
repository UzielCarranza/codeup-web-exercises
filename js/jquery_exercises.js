$(document).ready(function() {
    alert( 'The DOM has finished loading!' );
});

//Use jQuery to select an element by the id. Alert the contents of the element.
let contents = $('#codeup').html();
alert(contents);
console.log(contents);
//

//Update the jQuery code to select and alert a different id.
let contents2 = $('#ul').html()
alert(contents2, "content of a different ID");
console.log(contents2);
//


// Use the same id on 2 elements. How does this change the jQuery selection?
// let contents3 = $('#ul').html()
// alert(contents3, "content of a different ID");
// console.log(contents3);

//I added an ID to a different element, used the code above to alert the content but instead I got
//the same content as of the first element with the ID.



$('.important').css('background-color', 'yellow');

$('p').css('font-size', '40px');
