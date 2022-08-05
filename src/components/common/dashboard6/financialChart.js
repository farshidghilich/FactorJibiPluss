import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class FinancialChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Doller',
                data: [11, 8, 15, 18, -1, 17]
            }, {
                name: 'Euro',
                data: [22, -3, 25, 27, 17, 18]
            }, {
                name: 'Pound',
                data: [17, 18, 21, 28, 21, 27]
            }, {
                name: 'Rupee',
                data: [11, 15, -4, 22, 12, 25]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350,
                    toolbar: {
                        show: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 9,
                    bottom: 20,
                    top: 0,
                },
                colors: ['#93e3ff', '#69c1e0', '#41a7cb', '#2085a8'],
                xaxis: {
                    axisBorder: { show: false },
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
                },
                yaxis: {
                    labels: {
                        formatter: function (value) {
                            return "$" + value;
                        }
                    },
                    min: -5,
                    max: 30,
                    tickAmount: 7,

                },
                fill: {
                    opacity: 1
                }
            },
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
        );
    }
}

export default FinancialChart;
