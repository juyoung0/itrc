var config = {
    settings: {
        selectionEnabled: true
    },
    content: [{
        type: 'row',
        content: [
            {
                type: 'column',
                width: 20,
                content: [
                    {
                        type: 'stack',
                        height: 30,
                        content: [
                            {
                                type: 'component',
                                componentName: 'Menu',
                                componentState: {templateId: 'templateFilterMenu'}
                            }
                        ]
                    },
                    {
                        type: 'stack',
                        height: 25,
                        content: [
                            {
                                type: 'component',
                                componentName: 'CalendarPlot',
                                componentState: {templateId: 'templateCalendarPlot'}
                            }, {
                                type: 'component',
                                componentName: 'DetailCalendarPlot',
                                componentState: {templateId: 'templateDetailCalendarPlot'}
                            }, {
                                type: 'component',
                                componentName: 'DataTable',
                                componentState: {templateId: 'templateDataTable'}
                            }
                        ]
                    },
                    {
                        type: 'component',
                        height: 30,
                        componentName: 'AsterPlot',
                        componentState: {templateId: 'templateAsterPlot'}

                    }
                ]
            },
            {
                type: 'component',
                height: 75,
                componentName: 'Map',
                componentState: {templateId: 'templateMap'}
            },
            {
                type: 'component',
                width: 12,
                componentName: 'Snapshot',
                componentState: {templateId: 'templateSnapshot'}
            },
            {
                type: 'component',
                componentName: 'CCTV',
                width: 12,
                componentState: {templateId: 'templateCCTV'}
            }]
    }]
};

var myLayout = new GoldenLayout(config);

/*
myLayout.registerComponent('Map', function (container, componentState) {
    var templateHtml = $('#' + componentState.templateId).html();
    container.getElement().html(templateHtml);
    container.on('open', function () {
        mapManager.init(container);
    });
    container.on('resize', function () {
        $('#map').css('width', container.width)
            .css('height', container.height);
        if (mapManager.MAP != null)
            mapManager.MAP.invalidateSize();
    });
});

myLayout.registerComponent('DataTable', function (container, componentState) {
    var templateHtml = $('#' + componentState.templateId).html();
    container.getElement().html(templateHtml);

    mapManager.TABLE_CONTAINER = container;

    container.on('resize', function () {    // When the table container is resized, the height of scrollbar is resized
        $('#routeTable > tbody') // 20px is the height of header
            .css('height', container.height - $('#routeTable > thead').height() - $('#dataTable > h4').height() - 20);
        $('#rttable > tbody') // 20px is the height of header
            .css('height', container.height - $('#rttable > thead').height() - $('#dataTable > h4').height() - 20);
    });

    container.on('open', function () { // When the table container is opened by clicking the tab or loading layer, the height of scrollbar is resized
        $('#routeTable > tbody') // 20px is the height of header
            .css('height', container.height - $('#routeTable > thead').height() - $('#dataTable > h4').height() - 20);
        $('#rttable > tbody') // 20px is the height of header
            .css('height', container.height - $('#rttable > thead').height() - $('#dataTable > h4').height() - 20);
    });
});

myLayout.registerComponent('AsterPlot', function (container, componentState) {
    var templateHtml = $('#' + componentState.templateId).html();
    asterPlot.CT = container;
    container.getElement().html(templateHtml);
    container.on('open', function () {
        //asterPlot.drawAsterPlot();
    });
});

myLayout.registerComponent('CalendarPlot', function (container, componentState) {
    var templateHtml = $('#' + componentState.templateId).html();
    container.getElement().html(templateHtml);
    container.on('open', function () {
        $("#calendarPlot").parent().css('overflow-y', 'auto');
        calendarPlot.init(container);
    });
});
myLayout.registerComponent('DetailCalendarPlot', function (container, componentState) {
    calendarPlot.DCP = container;
    var templateHtml = $('#' + componentState.templateId).html();
    container.getElement().html(templateHtml);
    container.on('open', function () {
        $("#detailCalendarPlot").parent().css('overflow-y', 'auto');
        //$("#calendarPlot").parent().css('overflow-y', 'auto');
        //calendarPlot.init(container);
    });
});

myLayout.registerComponent('CalendarBig', function (container, componentState) {
    var templateHtml = $('#' + componentState.templateId).html();
    container.getElement().html(templateHtml);
});
/*
myLayout.registerComponent('linePlot', function (container, componentState) {
    console.log(componentState.templateId);
    var templateHtml = $('#' + componentState.templateId).html();
    container.getElement().html(templateHtml);
    container.on('open',function () {
        //linePlot.drawLinePlot(container.getElement());
    })
});


myLayout.registerComponent('Menu', function (container, componentState) {
    var templateHtml = $('#' + componentState.templateId).html();
    container.getElement().html(templateHtml);

    filterMenu.CT = container;
    container.on('open', function () {
        var $menu = $("#filterMenu");
        container.setSize($menu.width(), $menu.height() + 9);
        //container.setSize($menu.width(), $menu.parent().parent().parent().parent().height());
    });


});

myLayout.registerComponent('LoadSpeed15minUI', function(container, componentState) {
    var templateHtml = $('#' + componentState.templateId).html();
    container.getElement().html(templateHtml);
});


myLayout.registerComponent('Snapshot', function (container, componentState) {
    var templateHtml = $('#' + componentState.templateId).html();
    container.getElement().html(templateHtml);
    container.getElement().css("overflow-y", "auto");
    container.on('tab', function () {
        console.log(container, 'test');
        var btn_mini_aster = $('<i class="fa fa-pie-chart btn-mini-aster" aria-hidden="true"></i>');
        container.tab.header.controlsContainer.prepend(btn_mini_aster);
        btn_mini_aster.on('click', function (e) {
            //console.log('test');
            asterPlot.MINI == true ? asterPlot.MINI = false : asterPlot.MINI = true;
            if (asterPlot.MINI){
                $('.aster-mini').removeClass('hide');
            }
            else{
                $('.aster-mini').addClass('hide');
            }
        })
    })
});

myLayout.registerComponent('CCTV', function (container, componentState) {
    var templateHtml = $('#' + componentState.templateId).html();
    container.getElement().html(templateHtml);
    container.getElement().css("overflow-y", "auto");
});
*/

//myLayout.init();
