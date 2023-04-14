# Leaflet Earthquake Map
D3 imports GeoJSON data from the U.S. Geological Survey (USGS)on the past 7 days of earthquakes worldwide. A Leaflet map plots all the earthquakes based on their longitude and latitude. The size of the markers represents the earthquake magnitude. The color of the markers represents the depth of each earthquake in km. Clicking on the markers provides additional information on the earthquake, including the data and time it occurred, the magnitude, the location of the earthquake, and the earthquake's depth. 

### Data and Code Sources
Dataset from the <a href=http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php>United States Geological Survey</a>.

Unix DateTime JavaScript conversion function `convertTimestamp` based on <a href=https://stackoverflow.com/questions/24170933/convert-unix-timestamp-to-date-time-javascript>StackOverflow answer by Kamal Shooryabi 7/21/2018 and modified by Ivan 6/21/2018</a>.

Color hex code sorting function `getColor` based on <a href=https://www.igismap.com/legend-in-leafletjs-map-with-topojson/>Create beautiful dynamic Legend map - Leafletjs TopoJson by Akshay Upadhyay on IGISMap</a>.
