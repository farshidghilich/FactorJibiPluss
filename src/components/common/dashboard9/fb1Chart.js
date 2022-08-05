import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class Fb1Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    name: "Engaged",
                    data: [22, 14, 45, 28, 18, 27, 40]
                }
            ],
            options: {
                chart: {
                    height: 100,
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

export default Fb1Chart;
