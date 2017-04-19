var px = -5,
    qx = 4,
    gx = 0,
    y0 = 1,
    diffY0 = 1,
    interval = [0, 2],
    h = 0.001,
    points = [],
    currentY = y0,
    currentU = diffY0,
    currentX = interval[0];

points.push([currentX, y0]);

function diffU(u, y) {
    return 5 * u - 4 * y;
}

function diffY(u) {
    return u;
}

function executenextValues(arrayOfPoints) {
    var k1 = h * diffY(currentU),
        l1 = h * diffU(currentU, currentY),
        k2 = h * diffY(currentU + k1 / 2),
        l2 = h * diffU(currentU + k1 / 2, currentY + l1 / 2),
        k3 = h * diffY(currentU + k2 / 2),
        l3 = h * diffU(currentU + k2 / 2, currentY + k2 / 2),
        k4 = h * diffY(currentU + k3),
        l4 = h * diffU(currentU + k3, currentY + l3);

    currentY += (1 / 6) * (k1 + 2 * k2 + 2 * k3 + k4);
    currentU += (1 / 6) * (l1 + 2 * l2 + 2 * l3 + l4);
    currentX += h;

    if (arrayOfPoints) {
        arrayOfPoints.push([currentX, currentY]);
    }
}

function executeFunction(arrayOfPoints) {
    while (currentX <= interval[1]) {
        executenextValues(arrayOfPoints);
    }
}

executeFunction(points);

Highcharts.chart('runge-kutta', {

    title: {
        text: '4th order Runge-Kutta method'
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
        name: 'Runge-Kutta',
        data: points,
        pointStart: 1
    }]
});

function executeFail() {
    var newPoints = [];

    h = h / 2;
    currentY = y0;
    currentU = diffY0;
    currentX = interval[0];

    executeFunction(newPoints);
    
    var rungeKuttaError = Math.abs((newPoints[newPoints.length - 1][1] - points[points.length - 1][1]) / 15);

    console.log('Runge-Kutta error: ' + rungeKuttaError);
}


executeFail();