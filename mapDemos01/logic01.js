/*

    Leaflet maps consist of layers:
        base layer - tile
        mark layer(s) - the markers that go on top of the tile

*/

//tell where the map is going to be located - use L.map() in order to set the location of the map

// L - leaflet

// creat our initial map object by setting the latitude, longitude, and zoom level
// store this information into a variable 

// atlanta coordinates: 33.7488 N, 84.3877 W -> [33.7488, -84.3877]
var myMap = L.map("map", 
    {
        center: [33.7488, -84.3877],
        zoom: 10
    }
);


// add the initial tile layer to the map
// use L.tileLayer(tileattributes)
// .addTo(mapObject)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);
