import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";

class OverviewChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    type: 'bar',
                    height: 300,
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
                  colors: ['#AC7DF6', '#F66D9C', '#18C2D8']
                },
                yaxis: {
                    show: false
                },
                xaxis: {
                    axisTicks: { show: false },
                    axisBorder: { show: false },
                    categories: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6']
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
                    name: "Income",
                    data: [8000, 12000, 3600, 1300, 12000, 12000]
                },
                {
                    name: "Revenue",
                    data: [2000, 4000, 5000, 3000, 7000, 4000]
                },
                {
                  name: "Expense",
                  data: [1000, 2000, 4000, 6000, 3000, 2000]
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
                    height="270px"
                />
            </div>
        );
    }
}

export default OverviewChart;
