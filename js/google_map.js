/**
 * Created by Haythem on 30/07/2015.
 *  @see <a href="https://developers.google.com/maps/tutorials/fundamentals/adding-a-google-map"></a>
 *  @see <a href="https://developers.google.com/maps/documentation/javascript/examples/marker-simple"></a>
 *
 */

function initialize(x, y, zoom, map_id) {

    var myLatlng = new google.maps.LatLng(x, y);
    var mapOptions = {
        zoom: zoom,
        center: myLatlng
    }
    var map = new google.maps.Map(document.getElementById(map_id), mapOptions);

    new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Farm location",
    });
}
/*
    Call the API
google.maps.event.addDomListener(window, 'load', initialize(-33.598800, 22.201733, 'map-canvas'));
*/


