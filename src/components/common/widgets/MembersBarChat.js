import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";

class MembersBarChat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    type: 'bar',
                    height: 280,
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
                        columnWidth: 20,
                        width: 5
                    },
                },
                fill: {
                    colors: ['#F66D9C', '#467FD0']
                },
                yaxis: {
                    show: false
                },
                xaxis: {
                    labels: {
                        show: false,
                    },
                    axisTicks: { show: false },
                    axisBorder: { show: false },
                },
                legend: {
                    show: false
                },
                grid: {
                    bottom: 20,
                    top: 0,
                    left: 6
                }
            },
            series: [
                {
                    name: "User",
                    data: [11, 8, 15, 18, 19, 17]
                },
                {
                    name: "VIP",
                    data: [7, 7, 5, 7, 9, 12]
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
                    height="195px"
                />
            </div>
        );
    }
}

export default MembersBarChat;
