import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";

class ShortTermChart extends Component {
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
                        columnWidth: "60%",
                    },
                },
                colors: ['#3a3f46', '#4a5461', '#6a717a'],
                yaxis: {
                    tickAmount: 12
                },
                xaxis: {
                    axisTicks: { show: false },
                    axisBorder: { show: false },
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
                },
                legend: {
                    show: true
                }
            },
            series: [
                {
                    name: "Cash",
                    data: [110, 80, 150, 180, 190, 170, 70, 140, 90, 210, 160, 130]
                },
                {
                    name: "Investments",
                    data: [70, 140, 90, 210, 160, 130, 180, 190, 170, 70, 140, 90]
                },
                {
                    name: "A/R",
                    data: [80, 110, 150, 170, 120, 180, 110, 80, 150, 180, 190, 170]
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
                    height="350px"
                />
            </div>
        );
    }
}

export default ShortTermChart;
