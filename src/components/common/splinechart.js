import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";

class Splinechart extends Component {
    constructor(props) {
        super(props);
        this.state = {

            series: [{
                name: 'Organic',
                data: [212, 182, 254, 284, 291, 380]
            }, {
                name: 'Referral',
                data: [172, 172, 154, 174, 191, 227]
            },
            {
                name: 'Other',
                data: [52, 22, 64, 14, 51, 87]
            }],
            options: {
                chart: {
                    height: 285,
                    type: 'area',
                    toolbar: {
                        show: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                colors: ['#17C2D7', '#9367B4', '#9367B4'],
                markers: {
                    size: 3,
                    strokeColor: ['#17C2D7', '#9367B4', '#9367B4'],
                  },
                stroke: {
                    width: 2,
                    curve: 'smooth',
                },
                xaxis: {
                    type: 'category',
                    axisTicks: { show: false },
                    axisBorder: { show: false },
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
                },
                yaxis: {
                    tickAmount: 8,
                    min: 0,
                    max: 400
                },
                legend: {
                    show: false
                }
                // tooltip: {
                //     x: {
                //         format: 'dd/MM/yy HH:mm'
                //     },
                // },
            },
        };
    }
    render() {
        return (
            <div>
                <ReactApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="area"
                    height="285px"
                />
            </div>
        );
    }
}

export default Splinechart;
