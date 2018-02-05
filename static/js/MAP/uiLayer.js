/**
 * Created by juyoung on 2017-11-20.
 */

var color_red = 'red';
var color_blue = 'blue';
var color_green = 'green';

Object.assign(mapManager, {
    loadToolbar : function (map){

        L.DrawToolbar = L.Toolbar.Control.extend({
            position: 'topleft',
            options: {
                actions: [
                    L.Draw.Polygon,
                    L.Draw.Polyline,
                    L.Draw.Marker,
                    L.Draw.Rectangle,
                    L.Draw.Circle
                ],
                className: 'leaflet-draw-toolbar' // Style the toolbar with Leaflet.draw's custom CSS
            }
        });
        new L.DrawToolbar().addTo(mapManager.MAP);

    },

    removeLayer : function(){
        mapManager.MAP.removeLayer(mapManager.HEAT);
        mapManager.MAP.removeLayer(mapManager.PATH);
    },

    drawHeatmap : function(){
        mapManager.HEAT.addTo(mapManager.MAP);
    },

    drawPath : function(){
       mapManager.PATH.addTo(mapManager.MAP);
    },

    drawMarker : function(){
       // mapManager.PATH.addTo(mapManager.MAP);
    },

    changeData : function (dataNum){
        mapManager.removeLayer();
        mapManager.HEAT = new HeatmapOverlay(cfg);

        if (dataNum == 1) {
            mapManager.HEAT.setData(heatOne);
            mapManager.PATH = L.curve(pathOne, {color: color_blue, fill: false});
        }else if (dataNum == 2) {
            mapManager.HEAT.setData(heatTwo);
            mapManager.PATH = L.curve(pathTwo, {color: color_red, fill: false,
                animate: {duration:3000, easing:"ease-in"}
            });

            var marker1 = L.marker([37.402244, 127.488785], {
                highlight: "temporary"
            }).addTo(mapManager.MAP);


        }else if (dataNum == 3) {
            mapManager.HEAT.setData(heatThree);
            mapManager.PATH = L.curve(pathThree,{color: color_green, fill: false});
        }

        mapManager.drawHeatmap();
        mapManager.drawPath();
    }
});