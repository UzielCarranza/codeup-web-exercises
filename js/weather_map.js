var units = 'Imperial'
//get location 7 days
let button = document.getElementById("get-location");
let latText = document.getElementById("latitude");
var longText = document.getElementById("longitude");

// button.addEventListener("click", function () {
//     navigator.geolocation.getCurrentPosition(function (position) {
//         let lat = position.coords.latitude;
//         let long = position.coords.longitude;
//
//         latText.innerText = lat.toFixed(2);
//         longText.innerText = long.toFixed(2);
//         userLon = parseFloat(longText.innerText)
//         userLat = parseFloat(latText.innerText)
//         console.log(userLon, "user long")
//         console.log(userLat, "user lat")


        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + 41.03 + "&lon=" + -85.12 + "&units=" + units + "&appid=" + OWM_KEY)
            // after response
            .then(response => response.json())

            .then(data => fiveDayForecast(data))
    // });


//7 day forecast function
function fiveDayForecast(data) {
    console.log(data.daily[0])
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
    html += '<ul class="ul-7days">'
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


        var iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";

        $('.wicon').attr('src', iconurl);
        html += `<li class="weather-days">${counter}day ${dailyTemp}${'&#8457'}
            <img href="#" class="wicon" src="http://openweathermap.org/img/wn/${iconcode}@2x.png"></img>
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