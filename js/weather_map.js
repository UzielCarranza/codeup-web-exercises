$('#navbar-location').click(function (e){
    e.preventDefault()
})


var units = 'Imperial'
//get location 7 days
let button = document.getElementById("get-location");
let latText = document.getElementById("latitude");
var longText = document.getElementById("longitude");

button.addEventListener("click", function () {
    navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        latText = lat.toFixed(2);
        longText = long.toFixed(2);
        userLon = parseFloat(longText)
        userLat = parseFloat(latText)
        console.log(userLon, "user long")
        console.log(userLat, "user lat")


        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + 41.03 + "&lon=" + -85.12 + "&units=" + units + "&appid=" + OWM_KEY)
            // after response
            .then(response => response.json())

            .then(data => fiveDayForecast(data))
    });
})

//7 day forecast function
function fiveDayForecast(data) {
    console.log(data.current)
    let html = "";
    let counter = 0;
    var iconcode;
    let currentMain;
    let days;
    let dailyTemp;
    let currentDescription;
    let humidity;
    let windSpeed;
    let pressure;
    let tempNight;
    let dt;
    let date;
    let allDates;

    html += '<ul class="card">'
    //iterate
    for (let i = 0; i < 5; i++) {
        counter++
        iconcode = data.daily[i].weather[0].icon;
        currentMain = data.daily[i].weather[0].main;
        days = data.daily[i];
        dailyTemp = data.daily[i].temp.day;
        currentDescription = data.daily[i].weather[0].description;
        humidity = data.daily[i].humidity;
        windSpeed = data.daily[i].wind_speed;
        pressure = data.daily[i].pressure;
        tempNight = data.daily[i].temp.night;
        dt = data.daily[i].dt
        date = new Date(dt*1000)
        allDates = date.toDateString()
        // console.log(data.daily[i].dt)


        html += `
        <li class="card-body my-0 py-0">
        <p>${allDates}</p>
        <p> day ${dailyTemp}${'&#8457'}/ night ${tempNight}${'&#8457'}</p>
            <img href="#" class="card-img-top" src="http://openweathermap.org/img/wn/${iconcode}@2x.png"></img>
             <p>${currentMain}</p>
            <p>Description: ${currentDescription}</p>
            <p>Humidity: ${humidity}</p>
            <p>Wind: ${windSpeed}</p>
            <p>Pressure: ${pressure}</p>
            </li> `;
    }

    html += '</ul>'
    $('#weather').html(html)

}



// function sanitizeData(data){
//
//
//     return {
//         manDescription: data.current.weather[0].main,
//         currentDayDescription: data.current.weather[0].description,
//         currentDayIcon: data.current.weather[0].icon,
//         userLan: data.lat,
//         userLon: data.lon,
//         currentTemp: data.current.temp
//     }
//
// }