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
                $('body').css("background-color", "black")
            }
        }
    });
})



const addSection = () => {
    return `
    <summary>The code</summary>
    `;
}

$('#add').click(function() {

    $('#section').append(addSection)
});

