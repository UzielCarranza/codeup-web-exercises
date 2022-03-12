
const addSection = () => {
    return `
    <details>
    <summary>Here are some cheat cheat codes</summary>
    <p><i class="fa-solid fa-arrow-up"></i>  <i class="fa-solid fa-arrow-up"></i>  <i class="fa-solid fa-arrow-down-long"></i>  <i class="fa-solid fa-arrow-down-long"></i>  <i class="fa-solid fa-left-long"></i>   <i class="fa-solid fa-arrow-right-long"></i> <i class="fa-solid fa-left-long"></i>  <i class="fa-solid fa-arrow-right-long"></i> 
    <br> <span>b</span> a enter </p>
    </details>
    `;
};

const imageAdd = () => {
    return `
    <h1 width="50%" style="margin-top:3em; margin-left: 25% ">Enjoy!!!</h1>
<div style="width:100%;height:0;padding-bottom:75%;position:relative;">
    <iframe src="https://giphy.com/embed/LjULRGiyt1KpO" width="100%" height="50%" style="position:absolute; margin-top:1em; margin-left: 0%"
            frameBorder="0"></iframe>
</div>
<span>

<audio controls autoplay>
  <source src="sound/arcade_introduc.mp3" type="audio/ogg">
Your browser does not support the audio element.
</audio>
</span>
    `;
};



$('#add').click(function() {

    $('body').append(addSection);
    $('details').css({'text-align': 'center', 'margin-top': '-40%'})
    $('summary').css('font-size', "2em")
    $('.fa-solid').css('font-size', "2em")
    $('p').css('font-size', "4em")
});



//toggle

let contrastToggle = false;

let toggleContrast = () =>{
    contrastToggle = !contrastToggle;
    if (contrastToggle){
        document.body.classList += " dark-theme"
    }

    else {
        document.body.classList.remove("dark-theme")
    }
}


$(document).ready(function () {

    let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
    let userPosition = 0;
    $(document).keyup(function (event) {
        console.log(event.keyCode);
        let key = konamiCode[userPosition];
        let keyPressed = event.keyCode;
        if (key === keyPressed){
            userPosition++;
            if (userPosition === konamiCode.length){
                toggleContrast()
                $('details').remove();
                $('#video').append(imageAdd)
                // if ($('body').css('background-color', 'black')){
                //     toggleContrast();
                //     $('h1').css("color", "#fff")
                // }
                if ($('h1').css('color', '#fff')){
                    $('body').css("background-color", "#000")
                }
                 else if ($('body').css("background-color", "#fff")){
                    $('h1').css("color", "#000")
                }
            }
        }
    });
})



