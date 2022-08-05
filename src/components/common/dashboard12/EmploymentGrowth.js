import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class EmploymentGrowth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    name: "Sales",
                    data: [2, 17, 18, 27, 15, 30, 29]
                },
                {
                    name: "Marketing",
                    data: [1, 5, 15, 21, 8, 21, 25]
                },
                {
                    name: "Development",
                    data: [0, 2, 8, 6, 7, 14, 21]
                }
            ],
            options: {
                chart: {
                    height: 100,
                    type: 'line',
                    dropShadow: {
                        enabled: true,
                        color: '#000',
                        top: 18,
                        left: 7,
                        blur: 10,
                        opacity: 0.2
                    },
                    toolbar: {
                        show: false
                    }
                },
                colors: ['#F9CDAC', '#F29C9D', '#B8428C'],
                stroke: {
                    width: 2
                },
                markers: {
                    strokeColor: ['#F9CDAC', '#F29C9D', '#B8428C'],
                },
                xaxis: {
                    categories: ['2012', '2013', '2014', '2015', '2016', '2017', '2018']
                },
            },
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={285} />
        );
    }
}

export default EmploymentGrowth;
