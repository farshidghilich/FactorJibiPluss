import React, { Component } from 'react';
import Chart from "react-apexcharts";

class Barchart extends Component {
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
                        width: 10,
                    },
                },
                fill: {
                    colors: ['#9367B4', '#17C2D7']
                },
                yaxis: {
                    show: false
                },
                xaxis: {
                    axisTicks: { show: false },
                    axisBorder: { show: false },
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
                },
                legend: {
                    show: false
                }
            },
            series: [
                {
                    name: "User",
                    data: [110, 81, 158, 108, 149, 217]
                },
                {
                    name: "VIP",
                    data: [70, 192, 75, 97, 219, 152]
                }
            ]
        };
    }
    render() {
        return (
            <div>
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    // width="100%"
                    height="280px"
                />
            </div>
        );
    }
}

export default Barchart;
