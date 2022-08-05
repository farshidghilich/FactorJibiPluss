import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";

class LineChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    type: 'line',
                    width: 100,
                    height: 35,
                    sparkline: {
                        enabled: true
                    }
                },
                colors: [this.props.color],
                tooltip: {
                    marker: {
                        show: true
                    }
                }
            },
            series: [{
                data: this.props.data,
            }]
        };
    }
    render() {
        return (
            <ReactApexChart
                options={this.state.options}
                series={this.state.series}
                type="area"
                height={42}
                width="100%"
            />
        );
    }
}

export default LineChart;
