import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class Donutchart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [63, 37],
            options: {
                chart: {
                    type: 'donut',
                    toolbar: {
                        show: false
                    }
                },
                legend: { show: false },
                labels: ['Users', 'Sessions'],
                fill: {
                    colors: ['#9367B4', '#17C2D7']
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 100
                        },
                        legend: {
                            show: false
                        }
                    }
                }]
            }
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height={250} />
        );
    }
}

export default Donutchart;
