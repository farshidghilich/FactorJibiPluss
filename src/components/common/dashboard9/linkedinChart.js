import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";

class LinkedinChart extends Component {
    constructor(props) {
        super(props);
        this.state = {

            series: [{
                name: 'Clicks',
                data: [22, 14, 45, 28, 18, 27, 40, 55, 26, 88, 43, 62, 12, 18, 27]
            }, {
                name: 'Likes',
                data: [13, 11, 21, 24, 8, 63, 34, 51, 10, 55, 29, 57, 18, 21, 29]
            }],
            options: {
                chart: {
                    height: 60,
                    type: 'area',
                    toolbar: {
                        show: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                colors: ['#46aace', '#dcecc9'],
                markers: {
                    size: 3,
                    colors: ['#46aace', '#dcecc9']
                },
                transition: {
                    duration: 0
                },
                stroke: {
                    width: 1,
                    curve: 'straight',
                },
                xaxis: {
                    axisTicks: { show: false },
                    axisBorder: { show: false },
                    labels: { show: false },
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
                },
                yaxis: {
                    axisTicks: { show: false },
                    axisBorder: { show: false },
                    labels: { show: false },
                    tickAmount: 8,
                    min: 0,
                    max: 400
                },
                legend: {
                    show: false
                }
            },
        };
    }
    render() {
        return (
            <div>
                <ReactApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="area"
                    height="90px"
                />
            </div>
        );
    }
}


export default LinkedinChart;
