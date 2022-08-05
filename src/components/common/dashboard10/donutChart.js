import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class DonutChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [63, 37],
            options: {
                chart: {
                    type: 'donut',
                    toolbar: {
                        show: false
                    }
                },
                legend: { show: false },
                labels: ['Boys', 'Girls'],
                colors: ['#6574cd', '#939edc'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 100
                        },
                        legend: {
                            show: false
                        }
                    }
                }],
                grid: {
                    padding: {
                        bottom: 20,
                        top: 0
                    },
                }
            }
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height="275px" />
        );
    }
}

export default DonutChart;
