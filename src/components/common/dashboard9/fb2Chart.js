import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class Fb2Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    name: "Impressions",
                    data: [42, 63, 22, 74, 21, 33, 39]
                }
            ],
            options: {
                chart: {
                    // height: 100,
                    type: 'line',
                    dropShadow: {
                        enabled: true,
                        color: '#000',
                        top: 18,
                        left: 7,
                        blur: 10,
                        opacity: 0.2
                    },
                    toolbar: {
                        show: false
                    }
                },
                color: {
                    pattern: ['#3b5998']
                },
                stroke: {
                    width: 1,
                    curve: 'straight',
                },
                dataLabels: {
                    enabled: false
                },
                markers: {
                    size: 2,
                    strokeColor: ['#3b5998'],
                },
                xaxis: {
                    axisTicks: { show: false },
                    axisBorder: { show: false },
                    labels: { show: false }
                },
                yaxis: {
                    axisTicks: { show: false },
                    axisBorder: { show: false },
                    labels: { show: false }
                },
                legend: {
                    show: false
                }
            },
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={60} />
        );
    }
}

export default Fb2Chart;
