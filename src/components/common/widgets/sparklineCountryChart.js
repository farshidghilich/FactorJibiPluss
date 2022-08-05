import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";

class SparklineCountryChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    type: 'bar',
                    width: 51,
                    height: 35,
                    sparkline: {
                        enabled: true
                    }
                },
                colors: ["#77797C"],
                plotOptions: {
                    bar: {
                        columnWidth: '40%'
                    }
                },
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                xaxis: {
                    crosshairs: {
                        width: 0
                    },
                },
                tooltip: {
                    fixed: {
                        enabled: false
                    },
                    x: {
                        show: false
                    },
                    marker: {
                        show: false
                    }
                }
            },
            series: [{
                data: [5, 3, 7, 8, 6, 1, 4, 9]
            }]
        };
    }
    render() {
        return (
            <ReactApexChart
                options={this.state.options}
                series={this.state.series}
                type="bar" height={35} width={51}
            />
        );
    }
}

export default SparklineCountryChart;
