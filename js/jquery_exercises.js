// $(document).ready(function() {
    // alert( 'The DOM has finished loading!' );
// });

//
// $('body').append(getTemplate("username"))
//
// function getTemplate(){
//     return `
//     <div>
//     <h1>template</h1>
//     <p>template ${some} literals</p>
//
//     </div
//     `
//}


//Use jQuery to select an element by the id. Alert the contents of the element.
// let contents = $('#codeup').html();
// alert(contents);
// console.log(contents);
//

//Update the jQuery code to select and alert a different id.
// let contents2 = $('#ul').html()
// alert(contents2);
// console.log(contents2);
//




// Use the same id on 2 elements. How does this change the jQuery selection?
// let contents3 = $('#ul').html()
// alert(contents3, "content of a different ID");
// console.log(contents3);

//I added an ID to a different element, used the code above to alert the content but instead I got
//the same content as of the first element with the ID.




//classes

//Update your code so that at least 3 different elements have the same class named codeup.
// $("h1").addClass('codeup')
//
// $("p").addClass('codeup')
//
// $("div").addClass('codeup')

// $('h1, p, div').attr("class","codeup");



// Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.

// $('.codeup').css('border', '2px solid red');

// Remove the class from one of the elements. Refresh and test that the border has been removed.
// $("h1").removeClass(["codeup"]);



// Give another element an id of codeup. Does this element get a border now?
// $('li').attr("id","newId");

//it didnt get the styling




//element selectors
// Remove your custom jQuery code from previous exercises.
// Using jQuery, set the font-size of all li elements to 20px.

// $('li').css("font-size", "20px");
//
//
// // Craft selectors that highlight all the h1, p, and li elements.
// $("h1").css('background-color', 'yellow');
//
// $("p").css('background-color', 'yellow');
//
// $("li").css('background-color', 'yellow');
//
// // Create a jQuery statement to alert the contents of your h1 element(s).
// let contentsh1 = $('h1').html()
//  alert(contentsh1);
// console.log(contentsh1);


//
// $('p').css('font-size', '40px');


//multiple selector
// Combine your selectors that highlight all the h1, p, and li elements.

// $('h1, p, li').css('background-color', 'yellow');



//mouse events

$('h1').click(function() {
 $(this).css('background-color', "#7FFFD4")
});

$('p').dblclick(function(e) {
 $(this).css('font-size', "18px")
});























