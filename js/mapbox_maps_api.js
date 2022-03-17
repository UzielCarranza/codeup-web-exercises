
    let startLan = 41.09 //= 41.117622667840116;
    // 41.117622667840116, -85.14417894635905
    let startLon = -85.13// = -85.14417894635905;

    let map = initMap(startLon, startLan);

    let marker = createMarker(startLon, startLan);
    let popup = createPopup(startLon, startLan);


    marker.setPopup(popup);

    function initMap(lon, lat) {
    mapboxgl.accessToken = MAP_KEY;
    return new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 5,
    center: [lon, lat]
});
    // map.center(-82.01, 90.21)
}


    map.setZoom(15)
    // map.secCenter([lat, lon])



    function createMarker(lon, lat) {
    return new mapboxgl.Marker()
    .setLngLat([lon, lat])
    .addTo(map)
}



    function createPopup(lon, lat) {
    return new mapboxgl.Popup()
    .setLngLat([lon, lat])

    .setHTML("<p>Codeup Rocks!</p>")

}

    $('#go').click(function () {
    geocode("315 W Coliseum Blvd, Fort Wayne, IN 46805", MAP_KEY).then(function (result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(15);
        marker.setPopup()
    });
        var oliveGarden = {
            address: "315 W Coliseum Blvd, Fort Wayne, IN 46805",
            popupHTML: "<p>Olive garden!</p>"
        };
        function placeMarkerAndPopup(info, token, map) {
            geocode(info.address, token).then(function(coordinates) {
                let popup = new mapboxgl.Popup()
                    .setHTML(info.popupHTML);
                let marker = new mapboxgl.Marker()
                    .setLngLat(coordinates)
                    .addTo(map)
                    .setPopup(popup);
            });
        }

        placeMarkerAndPopup(oliveGarden, MAP_KEY, map);
})
