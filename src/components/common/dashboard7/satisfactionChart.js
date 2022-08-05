import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';


class SatisfactionChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    name: "Last Month",
                    data: [11, 8, 15, 18, 19, 17]
                },
                {
                    name: "This Month",
                    data: [7, 7, 5, 7, 9, 12]
                }
            ],
            options: {
                chart: {
                    height: 130,
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
                colors: ['#bbbec2', '#57595d'],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 2
                },
                markers: {
                    size: 2,
                    strokeColor: ['#bbbec2', '#57595d'],
                },
                yaxis: {
                    min: 0,
                    max: 20,
                    show: false
                },
                xaxis: {
                    labels: {
                        show: false
                    },
                    show: false,
                    axisTicks: { show: false },
                    axisBorder: { show: false },
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
                },
                legend: {
                    show: false
                }
            },
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={130} />
        );
    }
}

export default SatisfactionChart;
