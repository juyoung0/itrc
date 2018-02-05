/**
 * Created by juyoung on 2018-02-05.
 */

//Fetch some data from a GeoJSON file - choropleth
function getColor(d) {
    return d > 1000 ? '#800026' :
        d > 500  ? '#BD0026' :
            d > 200  ? '#E31A1C' :
                d > 100  ? '#FC4E2A' :
                    d > 50   ? '#FD8D3C' :
                        d > 20   ? '#FEB24C' :
                            d > 10   ? '#FED976' :
                                '#FFEDA0';
}

function style(feature) {
    return {
        fillColor: getColor(1),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '2',
        fillOpacity: 0.3
    };
}

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '2',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

function resetHighlight(e) {
    mapManager.CHOROPLETH.resetStyle(e.target);
}

function zoomToFeature(e) {
    mapManager.MAP.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

$.getJSON("../static/data/skorea-municipalities-geo.json", function(json) {
    mapManager.CHOROPLETH = L.geoJson(json, {style: style,
        onEachFeature: onEachFeature
    }).addTo(mapManager.MAP);
});