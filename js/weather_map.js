$('#navbar-location').click(function (e) {
    e.preventDefault()
})


var units = 'Imperial'
//get location 5 days
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


        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + 88.02 + "&lon=" + -88.12 + "&units=" + units + "&appid=" + OWM_KEY)
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
        date = new Date(dt * 1000)
        allDates = date.toDateString()
        // console.log(data.daily[i].dt)


        html += `
        <li class="card-body my-0 py-0 px-0 m-4">
        <p>${allDates}</p>
        <p> day ${dailyTemp}${'&#8457'} / night ${tempNight}${'&#8457'}</p>
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


//1 day forecast
let btn2 = document.getElementById('get-location-oneday')
//get location one day
btn2.addEventListener("click", function () {
    navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        latText = lat.toFixed(2);
        longText = long.toFixed(2);
        userLonOne = parseFloat(longText)
        userLatOne = parseFloat(latText)
        console.log(userLonOne, "user long")
        console.log(userLatOne, "user lat")
fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + 88.12 + "&lon=" + -82.21 + "&units=" + units + "&appid=" + OWM_KEY)
    // after response
    .then(response => response.json())
    .then(data => sanitizeData(data))
    .then(data => oneDayForecast(data))
    });
});

function sanitizeData(data) {

    return {
        manDescription: data.current.weather[0].main,
        currentDayDescription: data.current.weather[0].description,
        currentDayIcon: data.current.weather[0].icon,
        userLan: data.lat,
        userLon: data.lon,
        currentTemp: data.current.temp,
        dt: data.current.dt,
        wind: data.current.wind_speed,
        humidity: data.current.humidity,
        pressure: data.current.pressure,
        currentMain: data.current.weather[0].main,
        feelsLike: data.current.feels_like,
    }

}

//language: HTML
function oneDayForecast(forecast) {


    let date = new Date(`${forecast.dt}` * 1000);
    let allDates = date.toDateString();
    $('#weather').html(
        `
      <div class="card mt-4 one-day">
          <h3 class="ml-4 text-center">` + allDates + `</h3> 
        <div class="card">
          <img src="http://openweathermap.org/img/wn/${forecast.currentDayIcon}@2x.png" alt="image">
         
           <p>${forecast.currentMain}</p>
            <p>Temperature: ${forecast.currentTemp}${'&#8457'}</p>        
            <p>Feels like: ${forecast.feelsLike}${'&#8457'}</p>
               <p>description: ${forecast.currentDayDescription}</p> 
            <p>Humidity: ${forecast.humidity}</p>
            <p>Wind speed: ${forecast.wind}</p>
            <p>Pressure: ${forecast.pressure}</p>
        </div>
        </div>
      </div>`
    );
};
