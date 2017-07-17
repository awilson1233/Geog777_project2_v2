// function main() {
var map = L.map('map', {
    center: L.latLng(39.09461, -120.08),
    zoom: 11
});

var basemap = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

basemap.addTo(map);

var cartoCSSPeaks = "#layer { "+
    //"marker-width: ramp([elevation], range(2, 8)," +
    //"quantiles(5));" +
    "marker-width: 8;" +
    "marker-fill: #594316;" +
    "marker-fill-opacity: 0.9;" +
    "marker-allow-overlap: true;" +
    "marker-line-width: 1;" +
    "marker-line-color: #FFF;" +
    "marker-line-opacity: 1;" +

  "}"

var peaksAreOn = false;

//add data to map
var peaks = cartodb.createLayer(map, {
    user_name: 'wilson38',
    type: 'cartodb',
    sublayers: [{type: "cartodb",
    sql: 'SELECT * FROM peaks',
    cartocss: cartoCSSPeaks,

}]
}, { https: true })

.addTo(map)
  .done(function(layer) {
            // add infowindow
            cartodb.vis.Vis.addInfowindow(map, layer.getSubLayer(0), ['name', 'elevation'])
          });




var cartoCSSRecreationActivity = "#layer {" +
  "marker-width: 8;" +
  "marker-fill: #FFB927;" +
  "marker-fill-opacity: 0.9;" +
  "marker-allow-overlap: true;" +
  "marker-line-width: 1;" +
  "marker-line-color: #FFF;" +
  "marker-line-opacity: 1;" +
"}"

//add data to map
var recreationActivity = cartodb.createLayer(map, {
    user_name: 'wilson38',
    type: 'cartodb',
    sublayers: [{type: "cartodb",
    sql: 'SELECT * FROM recreationactivities',
    cartocss: cartoCSSRecreationActivity,

}]
}, { https: true })

.addTo(map)
  .done(function(layer) {
            // add infowindow
            cartodb.vis.Vis.addInfowindow(map, layer.getSubLayer(0), ['recareanam', 'parentacti', 'openstatus', 'latitude', 'longitude'])
          });

var cartoCSSBikeTrails = "#layer {" +
  "line-width: 1.5;" +
  "line-color: #d34dee;" +
  "line-opacity: 1;" +
"}"

//add data to map
var bikeTrails = cartodb.createLayer(map, {
    user_name: 'wilson38',
    type: 'cartodb',
    sublayers: [{type: "cartodb",
    sql: 'SELECT * FROM bike_trails_proposed',
    cartocss: cartoCSSBikeTrails,

}]
}, { https: true })

.addTo(map)
.done(function(layer) {
          // add infowindow
          cartodb.vis.Vis.addInfowindow(map, layer.getSubLayer(0), ['name', 'miles', 'from_', 'to_'])
        });

var cartoCSSTrails = "#layer {" +
  "line-width: 1.5;" +
  "line-color: #1b8d63;" +
  "line-opacity: 1;" +
"}"

//add data to map
var trails = cartodb.createLayer(map, {
    user_name: 'wilson38',
    type: 'cartodb',
    sublayers: [{type: "cartodb",
    sql: 'SELECT * FROM trailnfs',
    cartocss: cartoCSSTrails,

}]
}, { https: true })

.addTo(map)
.done(function(layer) {
          // add infowindow
          cartodb.vis.Vis.addInfowindow(map, layer.getSubLayer(0), ['trail_name', 'segment_le', 'trail_type'])
        });

var cartoCSSRecreationFacility = "#layer {" +
  "polygon-fill: #d35b7b;" +
  "polygon-opacity: 0.5;" +
  "line-width: 1;" +
  "line-color: #FFF;" +
  "line-opacity: 0.5;" +
"}"

//add data to map
var recreationFacility = cartodb.createLayer(map, {
    user_name: 'wilson38',
    type: 'cartodb',
    sublayers: [{type: "cartodb",
    sql: 'SELECT * FROM recreation_facility',
    cartocss: cartoCSSRecreationFacility,
    layerIndex: 5
}]
}, { https: true })

.addTo(map)
.done(function(layer) {
          // add infowindow
          cartodb.vis.Vis.addInfowindow(map, layer.getSubLayer(0), ['facility', 'type', 'fac_open'])
        });

var cartoCSSScenicShorePoints = "#layer {" +
  "marker-width: 7;" +
  "marker-fill: #4ca3fa;" +
  "marker-fill-opacity: 0.9;" +
  "marker-allow-overlap: true;" +
  "marker-line-width: 1;" +
  "marker-line-color: #FFF;" +
  "marker-line-opacity: 1;" +
"}"

//add data to map
var scenicPoints = cartodb.createLayer(map, {
    user_name: 'wilson38',
    type: 'cartodb',
    sublayers: [{type: "cartodb",
    sql: 'SELECT * FROM scenic_shoreline_points',
    cartocss: cartoCSSScenicShorePoints,
    layerIndex: 4
}]
}, { https: true })

.addTo(map)
.done(function(layer) {
          // add infowindow
          cartodb.vis.Vis.addInfowindow(map, layer.getSubLayer(0), ['view_type', 'unit_name'])
        });

var cartoCSSRiver = "#layer {" +
  "line-width: 2.5;" +
  "line-color: #73def9;" +
  "line-opacity: 1;" +
"}"

//add data to map
var river = cartodb.createLayer(map, {
    user_name: 'wilson38',
    type: 'cartodb',
    sublayers: [{type: "cartodb",
    sql: 'SELECT * FROM wildscenicriversegment',
    cartocss: cartoCSSRiver,
    layerIndex: 6
}]
}, { https: true })

.addTo(map)
.done(function(layer) {
          // add infowindow
          cartodb.vis.Vis.addInfowindow(map, layer.getSubLayer(0), ['gnis_name', 'total_mile'])
        });


// var cartoCSSSoils = "#layer {" +
//   "polygon-fill: ramp([muname],(#5F4690, #1D6996, #38A6A5, #0F8554, #73AF48, #EDAD08, #E17C05, #CC503E, #94346E, #6255a5, #666666), ("Cagwin-Rock outcrop complex, 15 to 30 percent slopes, extremely stony", "Cagwin Rock outcrop complex, 30 to 50 percent slopes, extremely stony", "Cassenai gravelly loamy coarse sand, 30 to 50 percent slopes, very stony", "Cassenai gravelly loamy coarse sand, 15 to 30 percent slopes, very stony", "Temo-Witefels complex, 30 to 50 percent slopes", "Oxyaquic Cryorthents-Aquic Xerorthents-Tahoe complex, 0 to 15 percent slopes", "Cagwin-Rock outcrop complex, 5 to 15 percent slopes, extremely stony", "Cagwin-Rock outcrop complex, 50 to 70 percent slopes, extremely stony", "Temo-Witefels complex, 15 to 30 percent slopes", "Water"), "=");"
//   "line-width: 1;" +
//   "line-color: #FFF;" +
//   "line-opacity: 0.5;" +
// "}"

//add data to map
// cartodb.createLayer(map, {
//     user_name: 'wilson38',
//     type: 'cartodb',
//     sublayers: [{type: "cartodb",
//     sql: 'SELECT * FROM soil_survey_2003',
//     cartocss: cartoCSSSoils,
//     layerIndex: 6
// }]
// }, { https: true })
//
// .addTo(map)

// load main() function
// window.onload = main;
// };

var layers = {
    "River": river,
    "Scenic Points": scenicPoints,
    "Peaks": peaks,
    "Recreation Activities": recreationActivity,
    "Bike Trails": bikeTrails,
    "Trails": trails,
    "Recreation Facilities": recreationFacility,
};

L.control.layers(layers).addTo(map);

$('#searchButton').click(function(){
  input = $( "#ad").val();
  var sql = new cartodb.SQL({ user: 'wilson38' });
  sql.getBounds("SELECT * FROM recreationactivities '" + input + "'").done(function(bounds) {
     map.fitBounds(bounds)
     });
   });

var recreationLocations = null;
var sqlQuery = "SELECT * FROM recreationactivities";
var sqlQueryHiking = "SELECT * FROM recreationactivities WHERE parentacti='Hiking'"
var cartoDBUserName = "wilson38";
// Function to add all coffee shops
function showAll(){
    if(map.hasLayer(recreationLocations)){
        map.removeLayer(recreationLocations);
    };
    // Get CARTO selection as GeoJSON and Add to Map
    $.getJSON("https://"+cartoDBUserName+".carto.com/api/v2/sql?format=GeoJSON&q="+sqlQuery, function(data) {
        recreationLocations = L.geoJson(data,{
            onEachFeature: function (feature, layer) {
                layer.bindPopup('<p><b>' + feature.properties.recareanam + '</b><br /><em>' + feature.properties.parentacti + '</em></p>');
                layer.cartodb_id=feature.properties.cartodb_id;
            }
        }).addTo(map);
    });
};

// Run showAll function automatically when document loads
$( document ).ready(function() {
  showAll();
});

// Event Listeners
$('input[value=Hiking]').click(function(){
  showHiking();
});

$('input[value=all]').click(function(){
  showAll();
});


// Find five closest Recreation Activities

// Set Global Variable that will hold your location
var myLocation = null;

// Set Global Variable that will hold the marker that goes at our location when found
var locationMarker = null;


// Set 'Your Location' icon
// var redIcon = L.icon({
//     iconUrl: 'img/redIcon.png',
//     iconAnchor: [13, 41]
// });

// Listen for a click event on the Map element
map.on('click', locationFound);

// Function that will run when the location of the user is found
function locationFound(e){
    myLocation = e.latlng;
    closestRecreation();
    locationMarker = L.marker(e.latlng);
    map.addLayer(locationMarker);
};

// Function that will run if the location of the user is not found
function locationNotFound(e){
    alert(e.message);
};

// Function will find and load the five nearest coffee shops to a user location
function closestRecreation(){
  // Set SQL Query that will return five closest coffee shops
  var sqlQueryClosest = "SELECT * FROM recreationactivities ORDER BY the_geom <-> ST_SetSRID(ST_MakePoint("+myLocation.lng+","+myLocation.lat+"), 4326) LIMIT 5";

  // remove CoffeeShopLocations if on map
  if(map.hasLayer(recreationLocations)){
    map.removeLayer(recreationLocations);
  };

  // remove locationMarker if on map
  if(map.hasLayer(locationMarker)){
    map.removeLayer(locationMarker);
  };

  // Get GeoJSON of five closest points to the user
  $.getJSON("https://"+cartoDBUserName+".carto.com/api/v2/sql?format=GeoJSON&q="+sqlQueryClosest, function(data) {
    recreationLocations = L.geoJson(data,{
      onEachFeature: function (feature, layer) {
        layer.bindPopup('' + feature.properties.recareanam + '' + feature.properties.parentacti + '');
        layer.cartodb_id=feature.properties.cartodb_id;
      }
    }).addTo(map);
  });
};

// Add Data from CARTO using the SQL API
// Declare Variables
// Create Global Variable to hold CARTO points
var cartoDBPoints = null;
var cartoDBLines = null;
var cartoDBPolygons = null;
var cartoDBUserName2 = "wilson38";
// Write SQL Selection Query to be Used on CARTO Table
// Name of table is 'data_collector'
var sqlQueryAddData = "SELECT * FROM data_collector";

var geojsonMarkerOptions = {
        radius: 8,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };
    // L.geoJson(data, {
    //     pointToLayer: function (feature, latlng) {
    //         return L.circleMarker(latlng, geojsonMarkerOptions);
    //     }
    // }).addTo(map);
// Get CARTO selection as GeoJSON and Add to Map
function getGeoJSON(){
  $.getJSON("https://"+cartoDBUserName2+".carto.com/api/v2/sql?format=GeoJSON&q="+sqlQueryAddData, function(data) {
    cartoDBPoints = L.geoJson(data,{
      pointToLayer: function(feature,latlng){
        //var marker = L.marker(latlng);
        marker.bindPopup('' + feature.properties.description + ' submitted by ' + feature.properties.name + '');
        return L.circleMarker(latlng, geojsonMarkerOptions);
      }
    }).addTo(map);
  });
};

// Run showAll function automatically when document loads
$( document ).ready(function() {
  getGeoJSON();
});

// Initialise the FeatureGroup to store editable layers
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);


// Initialise the draw control and pass it the FeatureGroup of editable layers
// var drawControl = new L.Control.Draw({
//   edit: {
//     featureGroup: drawnItems
//   }
// });

// Create Leaflet Draw Control for the draw tools and toolbox
var drawControl = new L.Control.Draw({
  draw : {
    marker: true,
    polygon : true,
    polyline : true,
    rectangle : false,
    circle : false
  },
  edit: {
    featureGroup: drawnItems
  },
  remove: true
});

// map.addControl(drawControl);

map.on(L.Draw.Event.CREATED, function (e) {
  var type = e.layerType
  var layer = e.layer;

  // Do whatever else you need to. (save to db, add to map etc)

  drawnItems.addLayer(layer);
});


// Create Leaflet Draw Control for the draw tools and toolbox
//var drawControl = L.Toolbar()

//   draw : {
//     polygon : true,
//     polyline : false,
//     rectangle : false,
//     circle : false
//   },
//   edit : true,
//   remove: true
// });

// Boolean global variable used to control visiblity
var controlOnMap = false;

// Create variable for Leaflet.draw features
var drawnItems = new L.FeatureGroup();

// Function to add the draw control to the map to start editing
function startEdits(){
  if(controlOnMap == true){
    map.removeControl(drawControl);
    controlOnMap = false;
  }
  map.addControl(drawControl);
  controlOnMap = true;
};

// Function to remove the draw control from the map
function stopEdits(){
  map.removeControl(drawControl);
  controlOnMap = false;
};

// Use the jQuery UI dialog to create a dialog and set options
var dialog = $("#dialog").dialog({
  autoOpen: false,
  height: 300,
  width: 350,
  modal: true,
  position: {
    my: "center center",
    at: "center center",
    of: "#map"
  },
  buttons: {
    "Add to Database": setData,
    Cancel: function() {
      dialog.dialog("close");
      map.removeLayer(drawnItems);
    }
  },
  close: function() {
    // form[ 0 ].reset();
    console.log("Dialog closed");
  }
});

// Stops default form submission and ensures that setData or the cancel function run
var form = dialog.find("form").on("submit", function(event) {
  event.preventDefault();
});

// Function to run when feature is drawn on map
map.on('draw:created', function (e) {
  var layer = e.layer;
  drawnItems.addLayer(layer);
  map.addLayer(drawnItems);
  dialog.dialog("open");
});

// $("#dialog").dialog()


function setData() {
    var enteredUsername = username.value;
    var enteredDescription = description.value;
    drawnItems.eachLayer(function (layer) {
        var sql = "INSERT INTO data_collector (the_geom, name, description, latitude, longitude) VALUES (ST_SetSRID(ST_GeomFromGeoJSON('";
        var a = layer.getLatLng();
        var sql2 ='{"type":"Point","coordinates":[' + a.lng + "," + a.lat + "]}'),4326),'" + enteredDescription + "','" + enteredUsername + "','" + a.lat + "','" + a.lng +"')";
        var pURL = sql+sql2;
        submitToProxy(pURL);
        console.log("Feature has been submitted to the Proxy");
    });
    map.removeLayer(drawnItems);
    drawnItems = new L.FeatureGroup();
    console.log("drawnItems has been cleared");
    dialog.dialog("close");
};

// Submit data to the PHP using a jQuery Post method
 var submitToProxy = function(q){
   $.post("php/callProxy.php", {
     qurl:q,
     cache: false,
     timeStamp: new Date().getTime()
   }, function(data) {
     console.log(data);
     refreshLayer();
   });
 };

// refresh the layers to show the updated dataset
function refreshLayer() {
 if (map.hasLayer(cartoDBPoints)) {
   map.removeLayer(cartoDBPoints);
 };
 getGeoJSON();
};


// Function to add the draw control to the map to start editing
function startEdits(){
  if(controlOnMap == true){
    map.removeControl(drawControl);
    controlOnMap = false;
  }
  map.addControl(drawControl);
  controlOnMap = true;
};

// Function to remove the draw control from the map
function stopEdits(){
  map.removeControl(drawControl);
  controlOnMap = false;
};

// Function to run when feature is drawn on map
map.on('draw:created', function (e) {
  var layer = e.layer;
  drawnItems.addLayer(layer);
  map.addLayer(drawnItems);
  dialog.dialog("open");
});
