
//drag
const coordinates = document.getElementById('coordinates');

const markerDrag = new mapboxgl.Marker({
    draggable: true
})
markerDrag.setLngLat([startLon, startLan])
markerDrag.addTo(map);

// parseFloat(long.toFixed(2));
//on drag function
function onDragEnd() {
    const lngLat = markerDrag.getLngLat();
    let mapLon = parseFloat(lngLat.lng.toFixed(2));
    let mapLat = parseFloat(lngLat.lat.toFixed(2));
    console.log(mapLat,"map lat")
    console.log(mapLon,"map lat")
    coordinates.style.display = 'block';
    coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${mapLat}&lon=${mapLon}&units=${units}&appid=${OWM_KEY}`)
        // after response
        .then(response => response.json())
        .then(data => fiveDayForecastMap(data))
}
function fiveDayForecastMap(data) {
    $('#weather-map').fadeIn();
    let html = "";
    let iconcode;
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
        iconcode = data.daily[i].weather[0].icon;
        currentMain = data.daily[i].weather[0].main;
        days = data.daily[i];
        dailyTemp = data.daily[i].temp.day;
        currentDescription = data.daily[i].weather[0].description;
        humidity = data.daily[i].humidity;
        windSpeed = data.daily[i].wind_speed;
        pressure = data.daily[i].pressure;
        tempNight = data.daily[i].temp.night;
        dt = data.daily[i].dt;
        date = new Date(dt * 1000);
        allDates = date.toDateString();


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
            </li> `
    }
    html += '<span class="pull-right clickable close-icon mr-4" data-effect="fadeOut"><i class="fa fa-times"></i></span></ul>'
    $('#weather-map').html(html)
    $(".close-icon").click(function() {
        $(this).closest('#weather-map').fadeOut();
    })

}


markerDrag.on('dragend', onDragEnd);


console.log(markerDrag)
console.log(markerDrag._lngLat)