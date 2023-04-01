// Create map object
var myMap = L.map("map", {
    center: [40, -95],
    zoom: 5
  });

  // Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// URL for all earthquakes in the past 7 days from USGS Site
const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Get the data with d3.
d3.json(url).then(function(response) {

    // Loop through the data
    for (var i = 0; i < response.length; i++) {
        
    // Set the data location property to a variable
    var location = response.features[i].geometry;

    // Create a new choropleth color variable
    iconColor = L.choropleth(response, {

        // Define which property in the features to use
        valueProperty: location.coordinates[2],

        // Set the color scale.
        scale: ["#33ee33", "ccff00", "ffff66", "ffcc33", "ff9900", "ff0000"],

        // The number of breaks in the step range
        steps: 6,
        mode: "q",
        style: {
            // Border color
            color: "#fff",
            weight: 1,
            fillOpacity: 0.8
            },

     }).addTo(myMap);

    // Create markers
    var markers = L.circleMarker();
  
         // Check for the location property
      if (location) {
  
        // Add a new marker to the cluster group, and bind a popup
        markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
          .bindPopup(response.features[i].properties.title));
      }
  
    }
  
    // Add marker layer to the map.
    myMap.addLayer(markers);
  
  });
  