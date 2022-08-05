import React from 'react';
import { Link } from 'react-router-dom';
import { Donut } from 'react-dial-knob'
import Sparklinechart from '../common/dashboard6/sparklinechart';
import Sparklinecustomchart from '../common/dashboard6/sparklinecustomchart';
import ShortTermChart from '../common/dashboard6/shortTermChart';
import FinancialChart from '../common/dashboard6/financialChart';

const Dashboard6 = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h1>Finance Performance</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                                    <li className="breadcrumb-item"><Link to="/">My page</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Finance Performance</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6 col-sm-12 text-right hidden-xs">
                            <a href="/" className="btn btn-sm btn-primary mr-1" title="">Create Campaign</a>
                            <a href="https://themeforest.net/item/oculux-bootstrap-4x-admin-dashboard-clean-modern-ui-kit/23091507" className="btn btn-sm btn-success" title="Themeforest"><i className="icon-basket"></i> Buy Now</a>
                        </div>
                    </div>
                </div>

                <div className="row clearfix">
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="body">
                                <div>Total Income</div>
                                <div className="py-4 m-0 text-center h1 text-success">$9,452</div>
                                <div className="d-flex">
                                    <small className="text-muted">Previous Month</small>
                                    <div className="ml-auto"><i className="fa fa-caret-up text-success"></i>4.00%</div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="body">
                                <div>Total Expenses</div>
                                <div className="py-4 m-0 text-center h1 text-info">$12,258</div>
                                <div className="d-flex">
                                    <small className="text-muted">Previous Month</small>
                                    <div className="ml-auto">0.67%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="body">
                                <div>Gross Profit Margin</div>
                                <div className="mt-4 text-center">
                                    <Donut
                                        className="knob"
                                        diameter={147}
                                        min={0}
                                        max={100}
                                        step={1}
                                        value={36}
                                        theme={{
                                            donutThickness: 5,
                                            donutColor: '#9367B4',
                                            centerColor: '#282B2F',
                                            bgrColor: '#383b40'
                                        }}
                                    />
                                </div>
                                <h3 className="mb-0 mt-3 font300">24,301 <span className="text-green font-15">+3.7%</span></h3>
                                <small>Lorem Ipsum is simply dummy text <br /> <a href="/">Read more</a> </small>
                                <div className="mt-4 text-center">
                                    <Sparklinechart />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-6">
                                <div className="card">
                                    <div className="body">
                                        <div className="card-value float-right text-blue">+15%</div>
                                        <h4 className="mb-1">$5,021.00</h4>
                                        <div className="text-muted">Your Balance</div>
                                    </div>
                                    <div className="card-chart-bg">
                                        <span id="linecustom">
                                            <Sparklinecustomchart />
                                        </span>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="body top_counter">
                                        <div className="icon bg-success text-white"><i className="fa fa-area-chart"></i> </div>
                                        <div className="content">
                                            <span>Growth</span>
                                            <h5 className="number mb-0">62%</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="body top_counter">
                                        <div className="icon bg-warning text-white"><i className="fa fa-building"></i> </div>
                                        <div className="content">
                                            <span>Properties</span>
                                            <h5 className="number mb-0">53,251</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="card">
                                    <div className="body">
                                        <div className="media">
                                            <img className="rounded mr-3" src="../assets/images/xs/avatar7.jpg" alt="avatar" />
                                            <div className="media-body">
                                                <h5 className="m-0">Betty Torres</h5>
                                                <p className="text-muted mb-0">Account Holder</p>
                                            </div>
                                        </div>
                                        <small className="text-muted">Account Number:- </small>
                                        <p>2154 - 1245 - 2185 - 5858</p>
                                        <small className="text-muted">Number:- </small>
                                        <p>+ 264-625-7262</p>
                                        <small className="text-muted">Account:- </small>
                                        <p>HDFC Bank</p>
                                        <small className="text-muted">Address:- </small>
                                        <p>Magnolia St. Orlando, FL 32806</p>
                                        <small className="text-muted">Account Type:- </small>
                                        <p className="mb-0">Current</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12">
                        <div className="card">
                            <div className="header">
                                <h2>Global Financial Performance</h2>
                            </div>
                            <div className="body">
                                <FinancialChart />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="card">
                            <div className="header">
                                <h2>Short Term Assets</h2>
                            </div>
                            <div className="body">
                                <ShortTermChart />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12">
                        <div className="card">
                            <div className="header">
                                <h2>Financial Management Review</h2>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-custom spacing5">
                                    <thead>
                                        <tr>
                                            <th>&nbsp;</th>
                                            <th>Actual Cost</th>
                                            <th>Forecast Cost</th>
                                            <th>Revenue</th>
                                            <th className="w100">% Margin</th>
                                            <th>Actual</th>
                                            <th className="w100">Forecast</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Building</td>
                                            <td>11,243</td>
                                            <td>399,21</td>
                                            <td>40,234</td>
                                            <td><span className="text-green">8.1%</span></td>
                                            <td>2,93,098</td>
                                            <td>1,02,243</td>
                                        </tr>
                                        <tr>
                                            <td>Digital</td>
                                            <td>1,22,877</td>
                                            <td>5,00,215</td>
                                            <td>40,159</td>
                                            <td><span className="text-red">6.4%</span></td>
                                            <td>2,93,091</td>
                                            <td>9,32,456</td>
                                        </tr>
                                        <tr>
                                            <td>Health</td>
                                            <td>32,375</td>
                                            <td>99,852</td>
                                            <td>20,194</td>
                                            <td><span className="text-green">12.9%</span></td>
                                            <td>18,654</td>
                                            <td>29,201</td>
                                        </tr>
                                        <tr>
                                            <td>Power</td>
                                            <td>76,877</td>
                                            <td>98,565</td>
                                            <td>123,022</td>
                                            <td><span className="text-red">17.0%</span></td>
                                            <td>10,800</td>
                                            <td>22,232</td>
                                        </tr>
                                        <tr>
                                            <td>Transport</td>
                                            <td>2,232</td>
                                            <td>3,099</td>
                                            <td>400</td>
                                            <td><span className="text-green">1.2%</span></td>
                                            <td>13,255</td>
                                            <td>14,765</td>
                                        </tr>
                                        <tr>
                                            <td>Total</td>
                                            <td>3,33,985</td>
                                            <td>4,68,444</td>
                                            <td>99,400</td>
                                            <td><span className="text-green">34.2%</span></td>
                                            <td>28,643,091</td>
                                            <td>42,31,765</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    );

}


export default Dashboard6