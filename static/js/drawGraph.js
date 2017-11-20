/**
 * Created by 오주영 on 2017-11-14.
 */
window.filter = function(title) {
    var map = $('map');
    if (title == "path") {
        var pathOne = L.curve(['M', [37.417891, 126.718231],
            'Q', [37.662896, 126.810242],
            [37.480035, 126.888519],
            [37.712887, 127.270294],
            [37.461506, 127.139832],
            'T', [37.706368, 127.540833]], {animate: 3000}).addTo(map);
    }
}