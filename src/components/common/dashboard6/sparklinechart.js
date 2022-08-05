import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";

class Sparklinechart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    type: 'bar',
                    width: 100,
                    height: 40,
                    sparkline: {
                        enabled: true
                    }
                },
                colors: ["#28a745"],
                plotOptions: {
                    bar: {
                        columnWidth: '60%'
                    }
                },
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                xaxis: {
                    crosshairs: {
                        width: 1
                    },
                },
                tooltip: {
                    fixed: {
                        enabled: false
                    },
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function (seriesName) {
                                return ''
                            }
                        }
                    },
                    marker: {
                        show: false
                    }
                }
            },
            series: [{
                data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
            }]
        };
    }
    render() {
        return (
            <ReactApexChart
                options={this.state.options}
                series={this.state.series}
                type="bar" height={40} width={100}
            />
        );
    }
}

export default Sparklinechart;
