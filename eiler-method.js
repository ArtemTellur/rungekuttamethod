var interval = [0, 1];
var step = 0.01;
var points = [[interval[0], interval[1]]];
var rightPoint = interval[1];

function mainFunction(x, y) {
    return x*x - 2*y;
}

function nextPoint(x, y) {
    var nextY = y + step * mainFunction(x, y);
    points.push([x, nextY]);
    return nextY;
}

function setPoints() {
    var cachedY = interval[1];
        while (interval[0] <= rightPoint) {
            interval[0]+=step;
            cachedY = nextPoint(interval[0], cachedY);
        }
}

setPoints();

Highcharts.chart('eiler-first-order', {

    title: {
        text: 'First order Eiler method'
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