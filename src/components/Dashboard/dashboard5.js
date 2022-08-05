import React from 'react';
import { Link } from 'react-router-dom';
import Piechart from '../common/piechart';
import LineEventChart from '../common/lineeventchart';
import BarEventchart from '../common/bareventchart';

const Dashboard5 = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h1>Event Monitoring</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                                    <li className="breadcrumb-item"><Link to="/">My page</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Event Monitoring</li>
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
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="card">
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-7">
                                        <h5 className="mb-0">3,210</h5>
                                        <small className="text-muted">Interested</small>
                                    </div>
                                    <div className="col-5 text-right">
                                        <h2 className="m-b-0">47%</h2>
                                    </div>
                                    <div className="col-12">
                                        <div className="progress progress-xxs progress-transparent custom-color-blue mb-0 mt-3">
                                            <div className="progress-bar" data-transitiongoal="47" aria-valuenow="47" style={{ width: "47%" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="card">
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-7">
                                        <h5 className="mb-0">4,028</h5>
                                        <small className="text-muted">Going</small>
                                    </div>
                                    <div className="col-5 text-right">
                                        <h2 className="m-b-0">68%</h2>
                                    </div>
                                    <div className="col-12">
                                        <div className="progress progress-xxs progress-transparent custom-color-yellow mb-0 mt-3">
                                            <div className="progress-bar" data-transitiongoal="68" aria-valuenow="88" style={{ width: "88%" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="card">
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-7">
                                        <h5 className="mb-0">1,025</h5>
                                        <small className="info">Maybe</small>
                                    </div>
                                    <div className="col-5 text-right">
                                        <h2 className="m-b-0">2</h2>
                                    </div>
                                    <div className="col-12">
                                        <div className="progress progress-xxs progress-transparent custom-color-green mb-0 mt-3">
                                            <div className="progress-bar" data-transitiongoal="23" aria-valuenow="23" style={{ width: "23%" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="card">
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-7">
                                        <h5 className="mb-0">523</h5>
                                        <small className="text-muted">Not Going</small>
                                    </div>
                                    <div className="col-5 text-right">
                                        <h2 className="m-b-0">2</h2>
                                    </div>
                                    <div className="col-12">
                                        <div className="progress progress-xxs progress-transparent custom-color-purple mb-0 mt-3">
                                            <div className="progress-bar" data-transitiongoal="7" aria-valuenow="7" style={{ width: "7%" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row clearfix">
                    <div className="col-lg-8 col-md-12">
                        <div className="card">
                            <div className="body">
                                <div className="d-flex justify-content-start mb-3">
                                    <div className="mr-5">
                                        <label className="mb-0">Tickets Sold</label>
                                        <h4>8,200</h4>
                                        <small className="text-muted"><strong>9.5%</strong> of 10,000 Total</small>
                                    </div>
                                    <div className="mr-5">
                                        <label className="mb-0">Tickets Available</label>
                                        <h4>1,800</h4>
                                        <small className="text-muted"><strong>87.3%</strong> of 10,000 Total</small>
                                    </div>
                                    <div>
                                        <label className="mb-0">Net Revenue</label>
                                        <h4>$11,800</h4>
                                        <small className="text-muted"><strong>7.3%</strong> of Sales Avg.</small>
                                    </div>
                                </div>
                                <LineEventChart />
                            </div>
                        </div>
                        <div className="card">
                            <div className="header">
                                <h2>Upcoming Events</h2>
                            </div>
                            <div className="body">
                                <ul className="timeline">
                                    <li className="timeline-item">
                                        <div className="timeline-info">
                                            <span>Feb 15, 2015</span>
                                        </div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h3 className="timeline-title">Parramatta WordPress Meetup</h3>
                                            <p className="text-muted mt-0 mb-0">@ 6:00 pm - 9:00 pm Bay Area, San Francisco</p>
                                            <small>(4,325 tickets sold) <span className="text-danger">Sold Out</span></small>
                                            <p>Welcome to the Parramatta chapter of the WP <a href="/">Sydney</a> Meetup[...]</p>
                                            <ul className="list-unstyled team-info sm margin-0">
                                                <li><img src="../assets/images/xs/avatar7.jpg" alt="Avatar" /></li>
                                                <li><img src="../assets/images/xs/avatar8.jpg" alt="Avatar" /></li>
                                                <li><img src="../assets/images/xs/avatar9.jpg" alt="Avatar" /></li>
                                                <li><img src="../assets/images/xs/avatar2.jpg" alt="Avatar" /></li>
                                                <li><img src="../assets/images/xs/avatar3.jpg" alt="Avatar" /></li>
                                                <li className="ml-2"><span>5k +</span></li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className="timeline-item">
                                        <div className="timeline-info">
                                            <span>Feb 23, 2018</span>
                                        </div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h3 className="timeline-title">Women’s Javascript Study Group</h3>
                                            <p className="text-muted mt-0 mb-0">@ 7:00 pm - 10:00 pm Singapore</p>
                                            <small>(2,325 tickets sold) <span className="text-danger">Sold Out</span></small>
                                            <p>Overview We're a group of women who want to learn JavaScript[...]</p>
                                            <ul className="list-unstyled team-info sm margin-0">
                                                <li><img src="../assets/images/xs/avatar1.jpg" alt="Avatar" /></li>
                                                <li><img src="../assets/images/xs/avatar2.jpg" alt="Avatar" /></li>
                                                <li><img src="../assets/images/xs/avatar3.jpg" alt="Avatar" /></li>
                                                <li><img src="../assets/images/xs/avatar4.jpg" alt="Avatar" /></li>
                                                <li className="ml-2"><span>2k +</span></li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className="timeline-item period">
                                        <div className="timeline-info"></div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h2 className="timeline-title">March 2019</h2>
                                        </div>
                                    </li>

                                    <li className="timeline-item">
                                        <div className="timeline-info">
                                            <span>April 02, 2018</span>
                                        </div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h3 className="timeline-title">Santa Cruz WordPress Monthly Meetup</h3>
                                            <p className="text-muted mt-0 mb-0">@ 7:00 pm - 10:00 pm Singapore</p>
                                            <small>(20,512 tickets sold) <span className="text-danger">Sold Out</span></small>
                                            <p>We will provide an opportunity for learning, collaboration[...]</p>
                                            <ul className="list-unstyled team-info sm margin-0">
                                                <li><img src="../assets/images/xs/avatar10.jpg" alt="Avatar" /></li>
                                                <li><img src="../assets/images/xs/avatar8.jpg" alt="Avatar" /></li>
                                                <li><img src="../assets/images/xs/avatar1.jpg" alt="Avatar" /></li>
                                                <li><img src="../assets/images/xs/avatar4.jpg" alt="Avatar" /></li>
                                                <li><img src="../assets/images/xs/avatar5.jpg" alt="Avatar" /></li>
                                                <li className="ml-2"><span>10k +</span></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="card">
                            <div className="header">
                                <h2>Events Interest</h2>
                            </div>
                            <div className="body">
                                <Piechart />
                            </div>
                        </div>
                        <div className="card">
                            <div className="header">
                                <h2>Event Calendar</h2>
                            </div>
                            <div className="body">
                                <div className="d-flex align-items-center">
                                    <div className="icon-in-bg bg-azura text-white rounded-circle">15</div>
                                    <div className="ml-4">
                                        <span>Feb 2019</span>
                                        <h4 className="mb-0 font-weight-medium">Saturday</h4>
                                    </div>
                                </div>
                                <table className="table table-calendar mb-0 mt-5">
                                    <tbody>
                                        <tr>
                                            <th>Mo</th>
                                            <th>Tu</th>
                                            <th>We</th>
                                            <th>Th</th>
                                            <th>Fr</th>
                                            <th>Sa</th>
                                            <th>Su</th>
                                        </tr>
                                        <tr>
                                            <td className="text-muted">27</td>
                                            <td className="text-muted">28</td>
                                            <td className="text-muted">29</td>
                                            <td className="text-muted">30</td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td><span className="table-calendar-link">4</span></td>
                                            <td>5</td>
                                            <td><span className="table-calendar-link">6</span></td>
                                            <td>7</td>
                                            <td>8</td>
                                            <td>9</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>11</td>
                                            <td><span className="table-calendar-link">12</span></td>
                                            <td>13</td>
                                            <td>14</td>
                                            <td><span>15</span></td>
                                            <td>16</td>
                                            <td>17</td>
                                        </tr>
                                        <tr>
                                            <td>18</td>
                                            <td><span className="table-calendar-link">19</span></td>
                                            <td><span className="table-calendar-link">20</span></td>
                                            <td>21</td>
                                            <td>22</td>
                                            <td>23</td>
                                            <td>24</td>
                                        </tr>
                                        <tr>
                                            <td>25</td>
                                            <td>26</td>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                            <td>30</td>
                                            <td className="text-muted">1</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card">
                            <div className="header">
                                <h2>Events Members</h2>
                            </div>
                            <div className="body">
                                {/* <div id="chart-Members" style={{ height: "200px" }}></div> */}
                                <BarEventchart />
                            </div>
                            <div className="card-footer text-center">
                                <div className="row clearfix">
                                    <div className="col-6">
                                        <h6>8,705</h6>
                                        <span>User</span>
                                    </div>
                                    <div className="col-6">
                                        <h6>1295</h6>
                                        <span>VIP</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    );

}


export default Dashboard5