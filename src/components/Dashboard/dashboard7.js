import React from 'react';
import { Link } from 'react-router-dom';
import RevenueChart from '../common/dashboard7/revenueChart';
import VolumeChart from '../common/dashboard7/volumeChart';
import SatisfactionChart from '../common/dashboard7/satisfactionChart';
import { VectorMap } from 'react-jvectormap';
import SparklineCountryChart from '../common/dashboard7/sparklineCountryChart';
import Carousel from 'react-bootstrap/Carousel'

const Dashboard7 = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h1>Sales Monitoring</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                                    <li className="breadcrumb-item"><Link to="/">My page</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Sales Monitoring</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6 col-sm-12 text-right hidden-xs">
                            <a href="/" className="btn btn-sm btn-primary mr-1" title="">Create Campaign</a>
                            <Link to="https://themeforest.net/item/oculux-bootstrap-4x-admin-dashboard-clean-modern-ui-kit/23091507" className="btn btn-sm btn-success" title="Themeforest"><i className="icon-basket"></i> Buy Now</Link>
                        </div>
                    </div>
                </div>

                <div className="row clearfix">
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="body">
                                <div className="d-flex align-items-center">
                                    <div className="icon-in-bg bg-indigo text-white rounded-circle"><i className="fa fa-briefcase"></i></div>
                                    <div className="ml-4">
                                        <span>Total Revenue</span>
                                        <h4 className="mb-0 font-weight-medium">$87,805</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="body">
                                <div className="d-flex align-items-center">
                                    <div className="icon-in-bg bg-azura text-white rounded-circle"><i className="fa fa-credit-card"></i></div>
                                    <div className="ml-4">
                                        <span>Total Profit</span>
                                        <h4 className="mb-0 font-weight-medium">$53,651</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="body">
                                <div className="d-flex align-items-center">
                                    <div className="icon-in-bg bg-orange text-white rounded-circle"><i className="fa fa-users"></i></div>
                                    <div className="ml-4">
                                        <span>Total Cost</span>
                                        <h4 className="mb-0 font-weight-medium">$25,805</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="body">
                                <div className="d-flex align-items-center">
                                    <div className="icon-in-bg bg-pink text-white rounded-circle"><i className="fa fa-life-ring"></i></div>
                                    <div className="ml-4">
                                        <span>Total Quantity</span>
                                        <h4 className="mb-0 font-weight-medium">$13,651</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-6">
                        <div className="card">
                            <div className="header">
                                <h2>This Year's Total Revenue</h2>
                            </div>
                            <div className="body">
                                <small className="text-muted">Sales Performance for Online and Offline Revenue</small>
                                <div id="flotChart" className="flot-chart">
                                    <RevenueChart />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="header">
                                <h2>Volume Vs Service Level</h2>
                            </div>
                            <div className="body text-center">
                                <VolumeChart />
                                <hr />
                                <div className="row clearfix">
                                    <div className="col-6">
                                        <h6 className="mb-0">1,350</h6>
                                        <small className="text-muted">Volume</small>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="mb-0">587</h6>
                                        <small className="text-muted">Service</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="body">
                                <div id="slider2" className="carousel vert slide" data-ride="carousel" data-interval="1700">
                                    <div className="carousel-inner">
                                        <Carousel
                                            fade={false}
                                            indicators={false}
                                            interval={5000}
                                            keyboard={false}
                                            >
                                            <Carousel.Item >
                                                <div className="card-value float-right text-muted"><i className="wi wi-fog"></i></div>
                                                <h3 className="mb-1">12°C</h3>
                                                <div>London</div>
                                            </Carousel.Item  >
                                            <Carousel.Item>
                                                <div className="card-value float-right text-muted"><i className="wi wi-day-cloudy"></i></div>
                                                <h3 className="mb-1">18°C</h3>
                                                <div>New York</div>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <div className="card-value float-right text-muted"><i className="wi wi-sunrise"></i></div>
                                                <h3 className="mb-1">37°C</h3>
                                                <div>New Delhi</div>
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="header">
                                <h2>Customer Satisfaction</h2>
                            </div>
                            <div className="body text-center">
                                <SatisfactionChart />
                                <hr />
                                <div className="row clearfix">
                                    <div className="col-6">
                                        <h6 className="mb-0">$3,095</h6>
                                        <small className="text-muted">Last Month</small>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="mb-0">$2,763</h6>
                                        <small className="text-muted">This Month</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="body">
                                <div className="card-value float-right text-muted"><i className="icon-bubbles"></i></div>
                                <h3 className="mb-1">102</h3>
                                <div>Messages</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="header">
                                <h2>Sales Revenue by Customers in USA</h2>
                            </div>
                            <small className="text-muted">Sales Performance of all states in the United States</small>
                            <div className="body">
                                <VectorMap
                                    containerStyle={{
                                        height: '350px'
                                    }}
                                    map={'us_aea'}
                                    backgroundColor='transparent'

                                    showTooltip
                                    hoverColor='#ffffff'
                                    borderWidth={1}
                                    borderColor='#fff'
                                    regionStyle={{
                                        initial: { fill: '#77797c' }
                                    }}
                                    colors={{
                                        mo: '#9fceff',
                                        fl: '#60adff',
                                        or: '#409cff',
                                        ca: '#005cbf',
                                        tx: '#005cbf',
                                        wy: '#005cbf',
                                        ny: '#007bff'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="header">
                                <h2>Your Top Countries</h2>
                            </div>
                            <small className="text-muted">Sales performance revenue based by country</small>
                            <div className="table-responsive">
                                <table className="table table-hover table-custom spacing5 mb-0">
                                    <tbody>
                                        <tr>
                                            <td className="w40">
                                                <img src="../assets/images/flag/us.svg " className="w35 rounded-circle" alt="rounded"/>
                                            </td>
                                            <td>
                                                <small>United States</small>
                                                <h5 className="mb-0">$5,434</h5>
                                            </td>
                                            <td>
                                                <span className="chart">
                                                    <SparklineCountryChart />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="../assets/images/flag/au.svg" className="w35 rounded-circle" alt="rounded" />
                                            </td>
                                            <td>
                                                <small>Australia</small>
                                                <h5 className="mb-0">$2,015</h5>
                                            </td>
                                            <td>
                                                <span className="chart">
                                                    <SparklineCountryChart />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="../assets/images/flag/ca.svg" className="w35 rounded-circle" alt="rounded" />
                                            </td>
                                            <td>
                                                <small>Canada</small>
                                                <h5 className="mb-0">$1,005</h5>
                                            </td>
                                            <td>
                                                <span className="chart">
                                                    <SparklineCountryChart />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="../assets/images/flag/gb.svg" className="w35 rounded-circle" alt="rounded" />
                                            </td>
                                            <td>
                                                <small>United Kingdom</small>
                                                <h5 className="mb-0">$2,850</h5>
                                            </td>
                                            <td>
                                                <span className="chart">
                                                    <SparklineCountryChart />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="../assets/images/flag/nl.svg" className="w35 rounded-circle" alt="rounded" />
                                            </td>
                                            <td>
                                                <small>Netherlands</small>
                                                <h5 className="mb-0">$1,052</h5>
                                            </td>
                                            <td>
                                                <span className="chart">
                                                    <SparklineCountryChart />
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className="table header-border table-hover table-custom spacing5">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Product</th>
                                        <th>Popularity</th>
                                        <th>Sales</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="w60">1</th>
                                        <td>Home Decor Range</td>
                                        <td>
                                            <div className="progress progress-xxs progress-transparent custom-color-cyan mb-0 mt-0">
                                                <div className="progress-bar" data-transitiongoal="47" aria-valuenow="47" style={{ width: "47%" }}></div>
                                            </div>
                                        </td>
                                        <td><span className="badge badge-primary">70%</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <td>Bathroom Essentials</td>
                                        <td>
                                            <div className="progress progress-xxs progress-transparent custom-color-green mb-0 mt-0">
                                                <div className="progress-bar" data-transitiongoal="88" aria-valuenow="88" style={{ width: "88%" }}></div>
                                            </div>
                                        </td>
                                        <td><span className="badge badge-success">70%</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <td>Disney Princess Pink 18' School Bag</td>
                                        <td>
                                            <div className="progress progress-xxs progress-transparent custom-color-white mb-0 mt-0">
                                                <div className="progress-bar" data-transitiongoal="47" aria-valuenow="47" style={{ width: "47%" }}></div>
                                            </div>
                                        </td>
                                        <td><span className="badge badge-dark">70%</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>4</th>
                                        <td>iPhone XS and XS Max</td>
                                        <td>
                                            <div className="progress progress-xxs progress-transparent custom-color-red mb-0 mt-0">
                                                <div className="progress-bar" data-transitiongoal="62" aria-valuenow="62" style={{ width: "62%" }}></div>
                                            </div>
                                        </td>
                                        <td><span className="badge badge-danger">70%</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>5</th>
                                        <td>Apple Smartwatches</td>
                                        <td>
                                            <div className="progress progress-xxs progress-transparent custom-color-orange mb-0 mt-0">
                                                <div className="progress-bar" data-transitiongoal="21" aria-valuenow="21" style={{ width: "21%" }}></div>
                                            </div>
                                        </td>
                                        <td><span className="badge badge-warning">70%</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </>

    );

}


export default Dashboard7