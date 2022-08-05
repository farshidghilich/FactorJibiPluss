import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";

class VolumeChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    type: 'bar',
                    height: 130,
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
                        columnWidth: '40%'
                    },
                },
                fill: {
                    colors: ['#bbbec2', '#77797c']
                },
                yaxis: {
                    show: false
                },
                xaxis: {
                    labels: {
                        show: false
                    },
                    show: false,
                    axisTicks: { show: false },
                    axisBorder: { show: false },
                },
                legend: {
                    show: false
                }
            },
            series: [
                {
                    name: "Volume",
                    data: [7, 7, 5, 7, 9, 12]
                },
                {
                    name: "Service",
                    data: [11, 8, 15, 18, 19, 17]
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
                    height="130px"
                />
            </div>
        );
    }
}

export default VolumeChart;
