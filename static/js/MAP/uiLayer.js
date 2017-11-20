/**
 * Created by juyoung on 2017-11-20.
 */
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
    },

    drawHeatmap : function(){
        mapManager.HEAT.addTo(mapManager.MAP);
    },

    drawPath : function(){
       mapManager.PATH.addTo(mapManager.MAP);
    },

    drawColor : function(){
       // mapManager.PATH.addTo(mapManager.MAP);
    }
});