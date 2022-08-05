import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class Piechart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [47, 33, 10, 9],
            options: {
                chart: {
                    width: 10,
                    type: 'pie'
                },
                plotOptions: {
                    pie: {
                        // donut: {
                        size: '65%'
                        // }
                    }
                },
                colors: ['#973491', '#DB5087', '#F9CDAC', '#ED8495'],
                labels: ['Apple', 'Nokia', 'Vivo', 'MI'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                legend: {
                    position: 'bottom',
                    markers: {
                        radius: 0
                    }
                }
            },
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="pie" height={270} />
        );
    }
}

export default Piechart;
