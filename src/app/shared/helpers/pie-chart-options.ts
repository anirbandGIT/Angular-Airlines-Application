import { Options } from 'highcharts';

export const pieChartOptions: Options = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        type: 'pie',
        data: [
            {name: 'Non-veg Food', y: 15, color: '#E57373'},
            {name: 'Veg Food', y: 28, color: '#9CCC65'},
            {name: 'None', y: 50, color: '#BDBDBD'}
        ]
    }]
}
