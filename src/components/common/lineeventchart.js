import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';


class LineEventChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    name: "Sold",
                    data: [9, 14, 18, 21, 12, 21, 23, 18, 13, 9]
                },
                {
                    name: "Available",
                    data: [15, 18, 11, 15, 17, 16, 14, 17, 16, 14]
                }
            ],
            options: {
                chart: {
                    height: 350,
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
                colors: ['#e96a8d', '#f3aca2'],
                dataLabels: {
                    enabled: true
                },
                stroke: {
                    width: 1
                },
                markers: {
                    size: 1
                },
                xaxis: {
                    axisTicks: { show: false },
                    axisBorder: { show: false },
                    categories: ['Feb 15', 'Feb 16', 'Feb 17', 'Feb 18', 'Feb 19', 'Feb 20', 'Feb 21', 'Feb 22', 'Feb 23', 'Feb 24']
                },
                yaxis: {
                    min: 8,
                    max: 24,

                },
                legend: {
                    position: 'bottom',
                    markers: {
                        radius: 0
                    }
                }
            },
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={300} />
        );
    }
}

export default LineEventChart;
