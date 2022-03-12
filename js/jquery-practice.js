
//1. select the elements to apply listener
// $('main div:first-child').hover(function (){
//     //2. get the content from the hovered element
//    let content =  $(this).html();
//    //3. set the content pf a different element
//    $('main div:nth-child(3').html(content);
// });

//
// const hoverIn = () => {
//     $(this).css('background-color', "black");
// }


$('.card').hover(function(){
    $(this).css('background-color', "grey")
})
