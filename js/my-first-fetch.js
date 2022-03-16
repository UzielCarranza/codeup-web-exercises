//do fetch stuff


//get it right away, no click
fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + 41.03 + "&lon=" + -87.23 + "&units=" + "Imperial" + "&appid=" + OWM_KEY)
    // after response
    .then(response => response.json())

    .then(data => {
        console.log(data.daily[0].weather[0].icon)
        let html = "";
        let counter = 0;
        var iconcode;
        console.log(iconurl)
        html += '<ul>'
        for (let i = 0; i < 5; i++) {
            // let days = ['monday', 'tuesday', 'wednesday', 'thrusday', 'friday', 'saturday', 'sunday']
            let days = data.daily[i];
            // console.log(days, "days")
            counter++
            iconcode = data.daily[i].weather[0].icon
            console.log(iconcode)
            let dailyTemp = data.daily[i].temp.day;

            var iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";

            $('.wicon').attr('src', iconurl);
            html += '<li>' + counter + ' day will be like: ' + dailyTemp + ' this is icon CODE: ' + iconcode +
                '<img href="#" class=wicon src="http://openweathermap.org/img/wn/' + iconcode + '@2x.png ">' + '</img>' + '</li> ';
        }
        html += '</ul>'
        $('#weather').html(html)

    });

let units = "Imperial"
//get location
let button = document.getElementById("get-location");
let latText = document.getElementById("latitude");
let longText = document.getElementById("longitude");

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

            .then(data => {
                console.log(data)
                let html = "";
                let counter = 0;
                var iconcode;
                console.log(iconurl)
                html += '<ul>'
                for (let i = 0; i < 7; i++) {
                    // let days = ['monday', 'tuesday', 'wednesday', 'thrusday', 'friday', 'saturday', 'sunday']
                    let days = data.daily[i];
                    // console.log(days, "days")
                    counter++
                    iconcode = data.daily[i].weather[0].icon
                    console.log(iconcode)
                    let dailyTemp = data.daily[i].temp.day;

                    var iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";

                    $('.wicon').attr('src', iconurl);
                    html += '<li>' + counter + ' day will be like: ' + dailyTemp + ' this is icon CODE: ' + iconcode +
                        '<img href="#" class=wicon src="http://openweathermap.org/img/wn/' + iconcode + '@2x.png ">' + '</img>' + '</li> ';
                }
                html += '</ul>'
                $('#weather').html(html)


            });
    });
});


//ends get location


// https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}

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
