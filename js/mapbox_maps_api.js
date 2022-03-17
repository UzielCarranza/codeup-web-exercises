
    let startLan = 29.4252;

    let startLon = -98.4916;

    let map = initMap(startLon, startLan);

    let marker = createMarker(startLon, startLan);
    let popup = createPopup(startLon, startLan);


    marker.setPopup(popup);

    function initMap(lon, lat) {
    mapboxgl.accessToken = MAP_KEY;
    return new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [lon, lat]
});
    // map.center(-82.01, 90.21)
}


    function createMarker(lon, lat) {
    return new mapboxgl.Marker()
    .setLngLat([lon, lat])
    .addTo(map)
}

    //
    // map.setZoom(5)
    // map.secCenter([lat, lon])


    function createPopup(lon, lat) {
    return new mapboxgl.Popup()
    .setLngLat([lon, lat])

    .setHTML("<p>Codeup Rocks!</p>")

}

    $('#go').click(function () {


    geocode("600 Navarro St #350, San Antonio, TX 78205", MAP_KEY).then(function (result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(20);
    });
})
