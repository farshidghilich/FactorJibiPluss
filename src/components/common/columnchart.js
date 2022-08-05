import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class Columnchart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Income',
                data: [11, 8, 15, 18, 19, 17]
            }, {
                name: 'Growth',
                data: [8, 7, 11, 11, 4, 8]
            }, {
                name: 'Expense',
                data: [8, 9, 8, 10, 12, 14]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 284
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 16,
                    bottom: 20,
                    top: 0,
                    colors: ['#007FFF', '#2d96ff', '#2dd8ff']
                },
                xaxis: {
                    axisBorder: { show: false },
                    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun'],
                },
                yaxis: {
                    title: {
                        text: '$ (thousands)'
                    }
                },
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return "$ " + val + " thousands"
                        }
                    }
                }
            },
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={284} />
        );
    }
}

export default Columnchart;
