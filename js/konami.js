
const addSection = () => {
    return `
    <summary>The code</summary>
    `;
}

$('#add').click(function() {

    $('#section').append(addSection)
});

