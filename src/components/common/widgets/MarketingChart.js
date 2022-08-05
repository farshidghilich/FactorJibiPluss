import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";

class MarketingChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        name: 'Last Month',
        data: [11, 8, 15, 18, 19, 17]
      }, {
        name: 'This Month',
        data: [7, 7, 5, 7, 9, 12]
      }],
      options: {
        chart: {
          height: 200,
          type: 'area',
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#467FD0', '#F66D9C'],
        markers: {
          size: 3,
          strokeColor: ['#467FD0', '#F66D9C'],
        },
        stroke: {
          width: 2,
          curve: 'smooth',
        },
        xaxis: {
          labels: {
            show: false,
          },
          axisTicks: { show: false },
          axisBorder: { show: false },
        },
        yaxis: {
          show: false,
          axisTicks: { show: false },
          axisBorder: { show: false },
        },
        legend: {
          show: false
        }
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
          height="190px"
        />
      </div>
    );
  }
}

export default MarketingChart;
