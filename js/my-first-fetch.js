//
// fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + userLatOne + "&lon=" + userLonOne + "&units=" + "Imperial" + "&appid=" + OWM_KEY)
//     // after response
//     .then(response => response.json())
//     .then(data => sanitizeData(data))
// .then(data => oneDayForecast(data));
//


//one day forecast
let btn2 = document.getElementById('get-one--day')
//get location one day
    btn2.addEventListener("click", function () {
        navigator.geolocation.getCurrentPosition(function (position) {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;

            latText.innerText = lat.toFixed(2);
            longText.innerText = long.toFixed(2);
            userLonOne = parseFloat(longText.innerText)
            userLatOne = parseFloat(latText.innerText)
            console.log(userLonOne, "user long")
            console.log(userLatOne, "user lat")
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + userLatOne + "&lon=" + userLonOne + "&units=" + units + "&appid=" + OWM_KEY)
        // after response
        .then(response => response.json())
        .then(data => sanitizeData(data))
        .then(data => oneDayForecast(data))
        });
    });
//sanitize data
function sanitizeData(data){


    return {
        manDescription: data.current.weather[0].main,
        currentDayDescription: data.current.weather[0].description,
        currentDayIcon: data.current.weather[0].icon,
        userLan: data.lat,
        userLon: data.lon,
        currentTemp: data.current.temp
    }

}
//one day forecast function
function oneDayForecast(forecast) {
    $('#one-day--forecast').html(
        `
      <div class="card mt-4">
        <div class="px-2">
          <h3>Today's forecast:</h3> 
        </div>
        <div class="card">
          <p class="description">${forecast.currentDayDescription}</p>
          
          <img class="img-current" src="http://openweathermap.org/img/wn/${forecast.currentDayIcon}@2x.png" alt="image">
          
          <p class="current">The current temperature is: ${forecast.currentTemp}</p>
        </div>
        </div>
      </div>`
    );
};




    var units = "Imperial"
//get location 7 days
    let button = document.getElementById("get-location");
    let latText = document.getElementById("latitude");
    var longText = document.getElementById("longitude");

    button.addEventListener("click", function () {
        navigator.geolocation.getCurrentPosition(function (position) {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;

            latText.innerText = lat.toFixed(2);
            longText.innerText = long.toFixed(2);
            userLon = parseFloat(longText.innerText)
            userLat = parseFloat(latText.innerText)
            console.log(userLon, "user long")
            console.log(userLat, "user lat")


            fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + userLat + "&lon=" + userLon + "&units=" + units + "&appid=" + OWM_KEY)
                // after response
                .then(response => response.json())

                .then(data => fiveDayForecast(data))
        });
    });

//5day forecast function
function fiveDayForecast(data) {
    let html = "";
    let counter = 0;
    var iconcode;
    html += '<ul>'
    for (let i = 0; i < 7; i++) {
        // let days = ['monday', 'tuesday', 'wednesday', 'thrusday', 'friday', 'saturday', 'sunday']
        let days = data.daily[i];
        // console.log(days, "days")
        counter++
        iconcode = data.daily[i].weather[0].icon;
        let dailyTemp = data.daily[i].temp.day;

        var iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";

        $('.wicon').attr('src', iconurl);
        html += '<li>' + counter + ' day will be like: ' + dailyTemp + ' this is icon CODE: ' + iconcode +
            '<img href="#" class=wicon src="http://openweathermap.org/img/wn/' + iconcode + '@2x.png ">' + '</img>' + '</li> ';
    }
    html += '</ul>'
    $('#weather').html(html)

}

//cities

fetch("https://cost-of-living-and-prices.p.rapidapi.com/cities", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "cost-of-living-and-prices.p.rapidapi.com",
        "x-rapidapi-key": COL_P_KEY
    }
})
    .then(response => response.json()
    )
    .then(data => {
        // console.log(data.cities[0])

        let html = "";
        html += '<h1>'
        let cities = data.cities[0].city_name;
        html += cities;
        html += '</h1>'
        $('#cost-living').html(html)
/// 1st section portion
        let location = ""
        let ulHtml = "";
        ulHtml += '<ul>'
        let countryName = data.cities[0].country_name
        let countryLng = data.cities[0].lng
        let countryLat = data.cities[0].lat
        ulHtml = '<li>' + "country: " + countryName + '</li>' +
            '<li>' + "location: " + countryLng + countryLat + '</li>'
        ulHtml += '</ul>'
        $('#section').html(ulHtml)

        //search cities
        $('#search').keyup(function (e) {

            e.preventDefault()
            let userInput = $('#search').val();

            //
            let sectionDiv = '';
            let sectionDivCities;
            let sectionsDivsCountryes;
            for (let i = 0; i < 8000; i++) {
                sectionDivCities = data.cities[i].city_name;
                sectionsDivsCountryes = data.cities[i].country_name
                let newCitiesArray = [];
                if (sectionDivCities.toLowerCase().startsWith(userInput)) {
                    newCitiesArray.push(sectionDivCities)
                    for (let i in newCitiesArray) {
                        var appendThis = "<li>" + 'the city : ' + '<strong>' + newCitiesArray[i] + '</strong>' + ' is located in  the country of: ' + sectionsDivsCountryes + "</li>"
                        $('.addMe').html(appendThis)
                    }

                }
            }
        }) //search cities ends


    })
