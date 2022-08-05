import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class Piechart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [70, 25, 5],
            options: {
                chart: {
                    width: 380,
                    type: 'pie'
                },
                colors: ['#e96a8d', '#f3aca2', '#f9cdac'],
                labels: ['Male', 'Female', 'VIP'],
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
            <ReactApexChart options={this.state.options} series={this.state.series} type="pie" height={300} />
        );
    }
}

export default Piechart;
