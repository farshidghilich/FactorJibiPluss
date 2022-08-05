import React from 'react';
import { Link } from 'react-router-dom';
import DonutChart from '../common/dashboard10/donutChart';
import CollectionChart from '../common/dashboard10/collectionChart';
import Carousel from 'react-bootstrap/Carousel'
import SurveyChart from '../common/dashboard10/surveyChart';

const Dashboard10 = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h1>University Analytics</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                                    <li className="breadcrumb-item"><Link to="/">My page</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">University Analytics</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6 col-sm-12 text-right hidden-xs">
                            <span className="btn btn-sm btn-primary mr-1" title="">Create Campaign</span>
                            <Link to="https://themeforest.net/item/oculux-bootstrap-4x-admin-dashboard-clean-modern-ui-kit/23091507" className="btn btn-sm btn-success" title="Themeforest"><i className="icon-basket"></i> Buy Now</Link>
                        </div>
                    </div>
                </div>

                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12">
                        <div className="card">
                            <div className="body">
                                <div className="row text-center">
                                    <div className="col-lg-4 col-sm-12 border-right pb-4 pt-4">
                                        <label className="mb-0">Total Students</label>
                                        <h4 className="font-30 font-weight-bold text-col-blue">2,025</h4>
                                    </div>
                                    <div className="col-lg-4 col-sm-12 border-right pb-4 pt-4">
                                        <label className="mb-0">New Students</label>
                                        <h4 className="font-30 font-weight-bold text-col-blue">754</h4>
                                    </div>
                                    <div className="col-lg-4 col-sm-12 pb-4 pt-4">
                                        <label className="mb-0">Teacher or Staff</label>
                                        <h4 className="font-30 font-weight-bold text-col-blue">54</h4>
                                    </div>
                                </div>
                                <hr />
                                <div className="mb-4 mt-3">
                                    <label className="d-block">Biology - BIO<span className="float-right">77%</span></label>
                                    <div className="progress progress-xxs">
                                        <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style={{ width: "77%" }}></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="d-block">Business Analysis - BUS<span className="float-right">50%</span></label>
                                    <div className="progress progress-xxs">
                                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100" style={{ width: "43%" }}></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="d-block">Computer Technology - CT <span className="float-right">69%</span></label>
                                    <div className="progress progress-xxs">
                                        <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="69" aria-valuemin="0" aria-valuemax="100" style={{ width: "69%" }}></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="d-block">Management - MGT <span className="float-right">23%</span></label>
                                    <div className="progress progress-xxs">
                                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="23" aria-valuemin="0" aria-valuemax="100" style={{ width: "23%" }}></div>
                                    </div>
                                </div>
                                <div className="mb-0">
                                    <label className="d-block">Premedical Studies - PMD <span className="float-right">48%</span></label>
                                    <div className="progress progress-xxs">
                                        <div className="progress-bar bg-indigo" role="progressbar" aria-valuenow="48" aria-valuemin="0" aria-valuemax="100" style={{ width: "48%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="body">
                                <h6 className="mb-0 font300">Fees Collection</h6>
                                <small>The total number of Page Impressions date revenue range.</small>
                                <h3 className="mb-4 mt-3 font300">$24,301 <span className="text-green font-15">+3.7%</span></h3>
                                <CollectionChart />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="body">
                                <div>Total revenue</div>
                                <div className="py-3 m-0 text-center h1 text-success">$79,452</div>
                                <div className="d-flex">
                                    <small className="text-muted">Income</small>
                                    <div className="ml-auto"><i className="fa fa-caret-up text-success"></i>4%</div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="body">
                                <div className="card-value float-right text-muted"><i className="fa fa-graduation-cap"></i></div>
                                <h3 className="mb-1">18</h3>
                                <div>Total Course</div>
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
                                        // pauseOnHover={true}
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
                </div>
                <div className="row clearfix">
                    <div className="col-lg-8 col-md-12">
                        <div className="card">
                            <div className="header">
                                <h2>University Survey</h2>
                            </div>
                            <div className="body">
                                <small className="text-muted">Sales Performance for Online and Offline Revenue</small>
                                <div id="University_Survey" className="flot-chart">
                                    <SurveyChart />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="card">
                            <div className="header">
                                <h2>Donut Chart</h2>
                            </div>
                            <div className="body">
                                <div className="row text-center">
                                    <div className="col-lg-6 border-right">
                                        <label className="mb-0">Boys</label>
                                        <h4 className="font-30">2,025</h4>
                                    </div>
                                    <div className="col-lg-6">
                                        <label className="mb-0">Girls</label>
                                        <h4 className="font-30">754</h4>
                                    </div>
                                </div>
                                <DonutChart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-12">
                        <div className="card">
                            <div className="header">
                                <h2>Todo List</h2>
                            </div>
                            <div className="body">
                                <div className="media mb-0">
                                    <img className="rounded mr-3" src="../assets/images/xs/avatar4.jpg" alt="avatar" />
                                    <div className="media-body">
                                        <h5 className="m-0">Deborah Cox</h5>
                                        <p className="text-muted mb-0">Professor</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row text-center">
                                    <div className="col-lg-6 border-right">
                                        <label className="mb-0">PROJECTS</label>
                                        <h4 className="font-30">13</h4>
                                    </div>
                                    <div className="col-lg-6">
                                        <label className="mb-0">TASKS</label>
                                        <h4 className="font-30">17</h4>
                                    </div>
                                </div>
                                <hr />
                                <ul className="todo_list list-unstyled">
                                    <li>
                                        <label className="fancy-checkbox">
                                            <input type="checkbox" name="checkbox" defaultChecked />
                                            <span>Product Event at New York</span>
                                        </label>
                                        <span className="todo-delete"><i className="icon-trash"></i></span>
                                    </li>
                                    <li>
                                        <label className="fancy-checkbox">
                                            <input type="checkbox" name="checkbox" defaultChecked />
                                            <span>Meeting with Team</span>
                                        </label>
                                        <span className="todo-delete"><i className="icon-trash"></i></span>
                                    </li>
                                    <li>
                                        <label className="fancy-checkbox">
                                            <input type="checkbox" name="checkbox" />
                                            <span>Product Event for new product</span>
                                        </label>
                                        <span className="todo-delete"><i className="icon-trash"></i></span>
                                    </li>
                                    <li>
                                        <label className="fancy-checkbox">
                                            <input type="checkbox" name="checkbox" defaultChecked />
                                            <span>Lunch friends in Sunday</span>
                                        </label>
                                        <span className="todo-delete"><i className="icon-trash"></i></span>
                                    </li>
                                    <li>
                                        <label className="fancy-checkbox">
                                            <input type="checkbox" name="checkbox" />
                                            <span>Meeting with Team</span>
                                        </label>
                                        <span className="todo-delete"><i className="icon-trash"></i></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="card">
                            <div className="header">
                                <h2>New Student List</h2>
                            </div>
                            <div className="body">
                                <div className="table-responsive">
                                    <table className="table table-striped mb-0">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Name</th>
                                                <th>Assigned Professor</th>
                                                <th>Date Of Admit</th>
                                                <th>Fees</th>
                                                <th>Branch</th>
                                                <th>Edit</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Jens Brincker</td>
                                                <td>Kenny Josh</td>
                                                <td>27/05/2016</td>
                                                <td>
                                                    <span className="label label-sm label-success">paid</span>
                                                </td>
                                                <td>Mechanical</td>
                                                <td>
                                                    <span><i className="fa fa-check"></i></span>
                                                    <span><i className="fa fa-trash"></i></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Mark Hay</td>
                                                <td> Mark</td>
                                                <td>26/05/2018</td>
                                                <td>
                                                    <span className="label label-sm label-warning">unpaid</span>
                                                </td>
                                                <td>Science</td>
                                                <td>
                                                    <span><i className="fa fa-check"></i></span>
                                                    <span><i className="fa fa-trash"></i></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Anthony Davie</td>
                                                <td>Cinnabar</td>
                                                <td>21/05/2018</td>
                                                <td>
                                                    <span className="label label-sm label-success ">paid</span>
                                                </td>
                                                <td>Commerce</td>
                                                <td>
                                                    <span><i className="fa fa-check"></i></span>
                                                    <span><i className="fa fa-trash"></i></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>David Perry</td>
                                                <td>Felix </td>
                                                <td>20/04/2019</td>
                                                <td>
                                                    <span className="label label-sm label-danger">unpaid</span>
                                                </td>
                                                <td>Mechanical</td>
                                                <td>
                                                    <span><i className="fa fa-check"></i></span>
                                                    <span><i className="fa fa-trash"></i></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>Anthony Davie</td>
                                                <td>Beryl</td>
                                                <td>24/05/2017</td>
                                                <td>
                                                    <span className="label label-sm label-success ">paid</span>
                                                </td>
                                                <td>M.B.A.</td>
                                                <td>
                                                    <span><i className="fa fa-check"></i></span>
                                                    <span><i className="fa fa-trash"></i></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>Alan Gilchrist</td>
                                                <td>Joshep</td>
                                                <td>22/05/2017</td>
                                                <td>
                                                    <span className="label label-sm label-warning ">unpaid</span>
                                                </td>
                                                <td>Science</td>
                                                <td>
                                                    <span><i className="fa fa-check"></i></span>
                                                    <span><i className="fa fa-trash"></i></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td>Mark Hay</td>
                                                <td>Jayesh</td>
                                                <td>18/06/2018</td>
                                                <td>
                                                    <span className="label label-sm label-success ">paid</span>
                                                </td>
                                                <td>Commerce</td>
                                                <td>
                                                    <span><i className="fa fa-check"></i></span>
                                                    <span><i className="fa fa-trash"></i></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>8</td>
                                                <td>Sue Woodger</td>
                                                <td>Sharma</td>
                                                <td>17/05/2019</td>
                                                <td>
                                                    <span className="label label-sm label-danger">unpaid</span>
                                                </td>
                                                <td>Mechanical</td>
                                                <td>
                                                    <span><i className="fa fa-check"></i></span>
                                                    <span><i className="fa fa-trash"></i></span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );

}


export default Dashboard10