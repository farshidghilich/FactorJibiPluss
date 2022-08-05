import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";

class BarEventchart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    type: 'bar',
                    height: 200,
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
                        columnWidth: '20%'
                    },
                },
                fill: {
                    colors: ['#f66d9b', '#467fcf']
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
                    name: "User",
                    data: [7, 7, 5, 7, 9, 12]
                },
                {
                    name: "VIP",
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
                    height="200px"
                />
            </div>
        );
    }
}

export default BarEventchart;
