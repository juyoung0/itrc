/**
 * Created by juyoung on 2017-11-20.
 */
/**
 * Created by skyjin on 2017-07-19.
 */
var mapManager = {
    MAP: null,
    ROUTE_L: null,
    TARGET: null,
    ROADS: [],
    INIT_C:0,
    MAX_BOUNDS: [[35.228794142471024, 128.58123779296878], [35.76991491635478, 129.82131958007815]],
    BOUNDS: [[35.50651802802079, 129.23681259155276], [35.57412411048198, 129.39182281494143]],
    snapshot_idx: 0,
    cctv_idx: 0,
    WAY: "both",    // basic setting is both way
    TRAFFIC_LAYERS: [],
    TRAFFIC_LAYERS_ID: [], // JSON format
    TRAFFIC_LAYERS_MODE: null, // trafficLayer or trafficLayer15min


    init: function (container) {
        $("#map").width(container.width).height(container.height);
        console.log("map is initialized");
     //   d3.queue()
     //       .defer(d3.csv, "static/data/cctv.csv")
     //       .defer(d3.json, "static/data/dot.json")
     //       .await(function (error, cctvData, vdsData) {
                var northEast = [37.788522, 127.679672];
                var southWest = [37.364052, 126.237717];
                var map = L.map('map', {
                    center: [37.53, 127.02],
                    zoom: 10,
                    maxBounds: [northEast, southWest],
                    attributionControl: false
                });
               // map.setMaxBounds(mapManager.MAX_BOUNDS);
               // map.fitBounds(mapManager.BOUNDS);

                // create layer groups of snapshot to increase search performance
                mapManager.MAP = map;
                var snapshot_layergroup = L.layerGroup([]);
                mapManager.SNAPSHOT_LAYERS_GROUP = snapshot_layergroup;
                var snapshot_boxgroup = L.layerGroup([]);
                mapManager.SNAPSHOT_BOX_GROUP = snapshot_boxgroup;
                snapshot_boxgroup.addTo(mapManager.MAP);


                /* make dot pins */
                var loadIcon = L.Icon.extend({
                    options: {
                        iconUrl: 'static/images/pinMarker.png',
                        iconSize: [20, 26]
                    }
                });

                /*
                var vdsIcon = new loadIcon();
                var vdsMarkers = [];
                for (var i = 0; i < vdsData.length; i++) {
                    var lat = vdsData[i].location[0];
                    var lon = vdsData[i].location[1];
                    vdsMarkers.push(L.marker([lat, lon], {icon: vdsIcon})
                        .bindPopup(vdsData[i].name).on('click', function (e) {
                            console.log('test', e.target._popup._content);
                            mapManager.setDestination(e.target._popup._content);
                        }))
                }

                var vdsLayer = L.layerGroup(vdsMarkers);

                */

                var OSMLayer = L.tileLayer('http://ivaderlab.unist.ac.kr:8085/styles/osm-bright/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                }); // OSM Baselayer
              //  var heat = L.heatLayer(TOTALPoints, {radius: 12, blur: 25, maxZoom: 11});
               // mapManager.VDS = vdsLayer;
                mapManager.OSM = OSMLayer;
                OSMLayer.addTo(mapManager.MAP);
                //vdsLayer.addTo(mapManager.MAP);

                var pathLayer = L.curve(pathOne);
                pathLayer.addTo(mapManager.MAP);
                mapManager.PATH = pathLayer;

                var heatmapLayer = new HeatmapOverlay(cfg);
                // addressPoints = addressPoints.map(function (p) { return [p[0], p[1]]; });
                mapManager.HEAT = heatmapLayer;
                heatmapLayer.setData(heatOne);
                heatmapLayer.addTo(mapManager.MAP);

                var overlayMaps = {
//                    "<img src='static/images/vdsMarker.png' width='15' height='19'> ": vdsLayer,
                };
                var layerControl = L.control.layers(null, overlayMaps, {collapsed: false});

              //  mapManager.loadToolbar(mapManager.MAP);
                mapManager.MAP.addControl(layerControl);

                // add route search interaction using drag
                mapManager.SELECTION = [];
                var counter = 0;
                var prevBounds = null;

                if ($('.leaflet-zoom-box-control').hasClass('active'))
                    prevBounds = map.getBounds();
          //  });

        /*
        L.control.weather({
            lang: "es",
            units: "metric"
        }).addTo(mapManager.MAP);
        */

        //Fetch some data from a GeoJSON file
        $.getJSON("../static/data/points.json", function(json) {
            var testlayer = L.geoJson(json, {
                onEachFeature: function(feature,layer) {
                    layer.bindPopup(feature.properties.time);
                }
            });

            //For a Range-Slider use the range property:
            var sliderControl = L.control.sliderControl({
                position: "topright",
                layer: testlayer,
                range: true
            });

            //Make sure to add the slider to the map ;-)
            mapManager.MAP.addControl(sliderControl);
            //And initialize the slider
            sliderControl.startSlider();
        });

 //       $('#slider-timestamp').html(options.markers[ui.value].feature.properties.time.substr(0,10));

        $('#clear').on('click', function(){
            console.log("clear");
            mapManager.removeLayer();
        });

        $('#path').on('click', function(){
            console.log("draw path");
            mapManager.drawPath();
        });

        $('#heatmap').on('click', function(){
            console.log("draw heatmap");
            mapManager.drawHeatmap();
        });

        $('#color').on('click', function(){
            console.log("draw color");
            mapManager.drawColor();
        });

        $('#first').on('click', function(){
            console.log("first data");
            mapManager.changeData(1);
        });

        $('#second').on('click', function(){
            console.log("second data");
            mapManager.changeData(2);
        });

        $('#third').on('click', function(){
            console.log("third data");
            mapManager.changeData(3);
        });
    }

};
