var rungeKuttaPoints = points,
    h = 0.01,
    n = 4,
    currentY = y0,
    currentU = diffY0,
    currentX = interval[0],
    adamsPoints = [],
    i = 3;

function executeMethod() {
    adamsPoints.push(rungeKuttaPoints[0]);
    adamsPoints.push(rungeKuttaPoints[1]);
    adamsPoints.push(rungeKuttaPoints[2]);
    adamsPoints.push(rungeKuttaPoints[3]);
    while (currentX <= interval[1]) {
        currentY = currentY + (h / 24) * (55 * adamsPoints[i][1] - 59 * adamsPoints[i - 1][1] + 37 * adamsPoints[i - 2][1] - 9 * adamsPoints[i - 3][1]);
        currentX += h;
        i++;
        adamsPoints.push([currentX, currentY]);
    }
}

executeMethod();

Highcharts.chart('adams', {

    title: {
        text: '4th order Adams method'
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
        name: 'Adams',
        data: adamsPoints,
        pointStart: 1
    }]
});

var adamsError = Math.abs(Math.exp(2) - adamsPoints[adamsPoints.length - 1][1]);

console.log('Adams error: ' + adamsError);
