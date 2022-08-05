import React from 'react';
import { Link } from 'react-router-dom';
import Spark1 from '../common/apexChart/spark1';
import Spark2 from '../common/apexChart/spark2';
import Spark3 from '../common/apexChart/spark3';
import Spark4 from '../common/apexChart/spark4';
import Spark5 from '../common/apexChart/spark5';
import Spark6 from '../common/apexChart/spark6';
import Stacked from '../common/apexChart/stacked';
import Timeline from '../common/apexChart/timeline';
import Timeline2 from '../common/apexChart/timeline2';
import BasicBar from '../common/apexChart/basicBar';
import BasicCandleStick from '../common/apexChart/basicCandleStick';
import BasicColumn from '../common/apexChart/basicColumn';
import Heatmap from '../common/apexChart/heatmap';
import Scatter from '../common/apexChart/scatter';
import BasicLineColumn from '../common/apexChart/basicLineColumn';
import Bubble from '../common/apexChart/bubble';
import BasicRadar from '../common/apexChart/basicRadar';
import BasicMultiRadar from '../common/apexChart/basicMultiRadar';
import Polyfill from '../common/apexChart/polyfill';
import Donut from '../common/apexChart/donut';
import Circle from '../common/apexChart/circle';
import CircleMultiple from '../common/apexChart/circleMultiple';
import CircleGradient from '../common/apexChart/circleGradient';
import Guage from '../common/apexChart/guage';

const ApexChart = () => {
    return (
        <div className="container-fluid">
            <div className="block-header">
                <div className="row clearfix">
                    <div className="col-md-6 col-sm-12">
                        <h2>C3 Chart</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                                <li className="breadcrumb-item"><Link to="/">Charts</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">C3 Chart</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="col-md-6 col-sm-12 text-right hidden-xs">
                        <span className="btn btn-sm btn-primary btn-round" title="">Add New</span>
                    </div>
                </div>
            </div>
            <div className="row clearfix">
                <div className="col-lg-4 col-md-12">
                    <div className="card">
                        <div className="body">
                            <div id="apexspark1">
                                <Spark1 />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="card">
                        <div className="body">
                            <div id="apexspark2">
                                <Spark2 />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="card">
                        <div className="body">
                            <div id="apexspark3">
                                <Spark3 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row clearfix">
                <div className="col-lg-3 col-md-6">
                    <div className="card">
                        <div className="body">
                            <div id="apexspark-chart1">
                                <Spark4 />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="card">
                        <div className="body">
                            <div id="apexspark-chart2">
                                <Spark5 />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="card">
                        <div className="body">
                            <div id="apexspark-chart3">
                                <Spark6 />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="card">
                        <div className="body">
                            <div id="apexspark-chart4">
                                <Spark6 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row clearfix">
                <div className="col-xl-6 col-lg-12">
                    <div className="card">
                        <div className="header">
                            <h2>Stacked Area</h2>
                        </div>
                        <div className="body">
                            <div id="apex-stacked-area">
                                <Stacked />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-12">
                    <div className="card">
                        <div className="header">
                            <h2>Area Datetime</h2>
                        </div>
                        <div className="body">
                            <button className="btn btn-sm btn-outline-secondary mr-1" id="one_month">1M</button>
                            <button className="btn btn-sm btn-outline-secondary mr-1" id="six_months">6M</button>
                            <button className="btn btn-sm btn-outline-secondary mr-1 active" id="one_year">1Y</button>
                            <button className="btn btn-sm btn-outline-secondary mr-1" id="ytd">YTD</button>
                            <button className="btn btn-sm btn-outline-secondary" id="all">ALL</button>
                            <div id="apex-timeline-chart">
                                <Timeline />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-12">
                    <div className="card">
                        <div className="header">
                            <h2>Timeline</h2>
                        </div>
                        <div className="body">
                            <div id="apex-timeline">
                                <Timeline2 />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-12">
                    <div className="card">
                        <div className="header">
                            <h2>Basic Bar</h2>
                        </div>
                        <div className="body">
                            <div id="apex-basic-bar">
                                <BasicBar />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-12">
                    <div className="card">
                        <div className="header">
                            <h2>Basic CandleStick</h2>
                        </div>
                        <div className="body">
                            <div id="apex-CandleStick">
                                <BasicCandleStick />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-12">
                    <div className="card">
                        <div className="header">
                            <h2>Basic Column</h2>
                        </div>
                        <div className="body">
                            <div id="apex-basic-column">
                                <BasicColumn />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-12">
                    <div className="card">
                        <div className="header">
                            <h2>Basic Heatmap Chart</h2>
                        </div>
                        <div className="body">
                            <div id="apex-basic-heatmap">
                                <Heatmap />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-12">
                    <div className="card">
                        <div className="header">
                            <h2>Basic Scatter Chart</h2>
                        </div>
                        <div className="body">
                            <div id="apex-basic-scatter">
                                <Scatter />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-12">
                    <div className="card">
                        <div className="header">
                            <h2>Basic Line Column</h2>
                        </div>
                        <div className="body">
                            <div id="apex-chart-line-column">
                                <BasicLineColumn />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-12">
                    <div className="card">
                        <div className="header">
                            <h2>Simple Bubble</h2>
                        </div>
                        <div className="body">
                            <div id="apex-simple-bubble">
                                <Bubble />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-deck">
                <div className="col-xl-4 col-lg-6 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Basic Radar</h2>
                        </div>
                        <div className="body">
                            <div id="apex-basic-radar">
                                <BasicRadar />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Radar Multiple Series</h2>
                        </div>
                        <div className="body">
                            <div id="apex-radar-multiple-series">
                                <BasicMultiRadar />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Radar with Polygon Fill</h2>
                        </div>
                        <div className="body">
                            <div id="apex-radar-polygon-fill">
                                <Polyfill />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Simple Donut</h2>
                        </div>
                        <div className="body">
                            <div id="apex-simple-donut">
                                <Donut />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Circle Chart</h2>
                        </div>
                        <div className="body">
                            <div id="apex-circle-chart">
                                <Circle />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Circle Chart Multiple</h2>
                        </div>
                        <div className="body">
                            <div id="apex-circle-chart-multiple">
                                <CircleMultiple />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Circle Gradient</h2>
                        </div>
                        <div className="body">
                            <div id="apex-circle-gradient">
                                <CircleGradient />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Stroked Gauge</h2>
                        </div>
                        <div className="body">
                            <div id="apex-stroked-gauge">
                                <Guage />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default ApexChart
