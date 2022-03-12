const imageAdd = () => {
    return `
<div style="width:100%;height:0;padding-bottom:75%;position:relative;">
    <iframe src="https://giphy.com/embed/LjULRGiyt1KpO" width="50%" height="50%" style="position:absolute; margin-top:4em; margin-left: 25%"
            frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
</div>
    `;
};

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
                $('#video').append(imageAdd)
            }
        }
    });
})



const addSection = () => {
    return `
    <details>
    <summary>Here are some cheat cheat codes</summary>
    <p><i class="fa-solid fa-arrow-up"></i>  <i class="fa-solid fa-arrow-up"></i>  <i class="fa-solid fa-arrow-down-long"></i>  <i class="fa-solid fa-arrow-down-long"></i>  <i class="fa-solid fa-left-long"></i>   <i class="fa-solid fa-arrow-right-long"></i> <i class="fa-solid fa-left-long"></i>  <i class="fa-solid fa-arrow-right-long"></i> 
    <br> <span>b</span> a enter </p>
    </details>
    `;
};

$('#add').click(function() {

    $('body').append(addSection);
    $('details').css('text-align', "center")
    $('summary').css('font-size', "2em")
    $('.fa-solid').css('font-size', "2em")
    $('p').css('font-size', "4em")
});




