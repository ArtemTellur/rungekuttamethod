var interval = [0, 1];
var step = 0.01;
var points = [[interval[0], interval[1]]];
var rightPoint = interval[1];

Highcharts.chart('eiler-second-order', {

    title: {
        text: 'Second order Eiler method'
    },

    xAxis: {
        tickInterval: 1
    },

    yAxis: {
        type: 'line',
        minorTickInterval: 0.1
    },

    tooltip: {
        headerFormat: '<b>{series.name}</b><br />',
        pointFormat: 'x = {point.x}, y = {point.y}'
    },

    series: [{
        name: 'Eiler',
        data: points,
        pointStart: 1
    }]
});