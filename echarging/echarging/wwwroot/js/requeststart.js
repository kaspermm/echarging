var startposition = "Tour Eiffel, Paris, France";

var APPLICATION_ID = "ec911051";
var API_KEY = "4a5c61b68a3b8700c544e98c0941cc9f";

//Send request til database
sendGeocodingRequest(startposition)
    .then(function (data) {
        //and if it is success drawing map and marker
        drawMarker(data)
    })

function sendGeocodingRequest(startposition) {
    return fetch(`https://api.traveltimeapp.com/v4/geocoding/search?query=` + startposition, {
        method: "GET",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            "X-Application-Id": APPLICATION_ID,
            "X-Api-Key": API_KEY,
            "Accept-Language": "en"
        }

    })

    function drawMarker(response) {  // We need to extract the coordinates from the response.
        var coordinates = response.features[0].geometry.coordinates  // The coordinates are in a [<lng>, <lat>] format/
            .then(response => response.json()); // parses JSON response into native Javascript objects
        var marker2 = L.marker(coordinates.reverse())
    }
}
