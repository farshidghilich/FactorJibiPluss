import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";

class SubscriberChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    type: 'bar',
                    height: 210,
                    stacked: true,
                    toolbar: {
                        show: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                plotOptions: {
                    bar: {
                        columnWidth: 50,
                        width: 10,
                    },
                },
                colors: ['#dcecc9', '#3d91be'],
                yaxis: {
                    min: 0,
                    max: 45,
                    tickAmount: 9
                },
                xaxis: {
                    axisTicks: { show: false },
                    axisBorder: { show: false },
                    type: 'category',
                    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
            },
            series: [
                {
                    name: "Lost",
                    data: [7, 7, 5, 7, 9, 12, 11]
                },
                {
                    name: "Galned",
                    data: [11, 8, 15, 18, 19, 17, 32]
                }
            ]
        };
    }
    render() {
        return (
            <div>
                <ReactApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    height="210px"
                />
            </div>
        );
    }
}

export default SubscriberChart;
