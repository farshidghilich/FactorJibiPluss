import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard8 = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h1>Hospital Management</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                                    <li className="breadcrumb-item"><Link to="/">My page</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Hospital Management</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6 col-sm-12 text-right hidden-xs">
                            <a href="/" className="btn btn-sm btn-primary" title="">Create Campaign</a>
                            <a href="https://themeforest.net/item/oculux-bootstrap-4x-admin-dashboard-clean-modern-ui-kit/23091507" className="btn btn-sm btn-success" title="Themeforest"><i className="icon-basket"></i> Buy Now</a>
                        </div>
                    </div>
                </div>

                <div className="row clearfix">
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="card">
                            <div className="body">
                                <h6><i className="fa fa-hospital-o"></i> Total Beds</h6>
                                <div className="card-value text-danger float-left mr-3 pr-2 border-right">200</div>
                                <div className="font-12">Delux Room <span className="float-right">55</span></div>
                                <div className="font-12">General Ward <span className="float-right">105</span></div>
                                <div className="font-12">VIP Room <span className="float-right">40</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="card">
                            <div className="body">
                                <h6><i className="fa fa-users"></i> Total Patients</h6>
                                <div className="card-value text-info float-left mr-3 pr-2 border-right">150</div>
                                <div className="font-12">Brain Tumor <span className="float-right">35</span></div>
                                <div className="font-12">Viral Infection <span className="float-right">105</span></div>
                                <div className="font-12">Cancer <span className="float-right">10</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="card">
                            <div className="body">
                                <h6><i className="fa fa-hospital-o"></i> Total Beds</h6>
                                <div className="card-value text-green float-left mr-3 pr-2 border-right">175</div>
                                <div className="font-12">Delux Room <span className="float-right">55</span></div>
                                <div className="font-12">General Ward <span className="float-right">105</span></div>
                                <div className="font-12">VIP Room <span className="float-right">40</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="card">
                            <div className="body">
                                <h6><i className="fa fa-hospital-o"></i> Total Beds</h6>
                                <div className="card-value text-orange float-left mr-3 pr-2 border-right">135</div>
                                <div className="font-12">Delux Room <span className="float-right">55</span></div>
                                <div className="font-12">General Ward <span className="float-right">105</span></div>
                                <div className="font-12">VIP Room <span className="float-right">40</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-7 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="header">
                                <h2>Admitted Patient</h2>
                            </div>
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-12">
                                        <div className="input-group mb-3">
                                            <input data-provide="datepicker" data-date-autoclose="true" placeholder="From Date" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="input-group mb-3">
                                            <input data-provide="datepicker" data-date-autoclose="true" placeholder="To Date" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <button className="btn btn-info btn-block" type="button">Search</button>
                                    </div>
                                </div>
                                <div id="admitted-patient" className="mt-4" style={{ height: "300px" }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="header">
                                <h2>Patient Discharged & Readmitted</h2>
                            </div>
                            <div className="body">
                                <div id="chart-bar-rotated" style={{ height: "375px" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-12">
                        <div className="card">
                            <div className="header">
                                <h2>By Gender</h2>
                            </div>
                            <div className="body">
                                <div className="d-flex bd-highlight mb-3 text-center">
                                    <div className="flex-fill bd-highlight">
                                        <label className="mb-0 text-muted">Male</label>
                                        <h5>6,000</h5>
                                    </div>
                                    <div className="flex-fill bd-highlight">
                                        <label className="mb-0 text-muted">Female</label>
                                        <h5>4,000</h5>
                                    </div>
                                </div>
                                <div id="chart-donut" style={{ height: "300px" }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="card">
                            <div className="header">
                                <h2>Patients by Division</h2>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-custom2 table-hover">
                                    <thead>
                                        <tr>
                                            <th colSpan="3">Division</th>
                                            <th colSpan="2">Activity</th>
                                        </tr>
                                        <tr>
                                            <th>#</th>
                                            <th>Male</th>
                                            <th>Female</th>
                                            <th>InPatient</th>
                                            <th>OutPatient</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><span>Surgery</span></td>
                                            <td><span>25</span></td>
                                            <td><span>11</span></td>
                                            <td>2,025 <span className="text-green">8.5%</span></td>
                                            <td>1,250 <span className="text-red">13.25%</span></td>
                                        </tr>
                                        <tr>
                                            <td><span>Gynaecology</span></td>
                                            <td><span>43</span></td>
                                            <td><span>29</span></td>
                                            <td>521 <span className="text-green">18.3%</span></td>
                                            <td>842 <span className="text-red">23.4%</span></td>
                                        </tr>
                                        <tr>
                                            <td><span>Dermatology</span></td>
                                            <td><span>89</span></td>
                                            <td><span>56</span></td>
                                            <td>2,028 <span className="text-red">19.7%</span></td>
                                            <td>1,800 <span className="text-red">13.2%</span></td>
                                        </tr>
                                        <tr>
                                            <td><span>Neurology</span></td>
                                            <td><span>15</span></td>
                                            <td><span>35</span></td>
                                            <td>1,801 <span className="text-green">8.4%</span></td>
                                            <td>1,251 <span className="text-red">10.9%</span></td>
                                        </tr>
                                        <tr>
                                            <td><span>Oncology</span></td>
                                            <td><span>61</span></td>
                                            <td><span>21</span></td>
                                            <td>2,714 <span className="text-green">8.7%</span></td>
                                            <td>890 <span className="text-green">23.3%</span></td>
                                        </tr>
                                        <tr>
                                            <td><span>Orthopaedics</span></td>
                                            <td><span>85</span></td>
                                            <td><span>23</span></td>
                                            <td>1,205 <span className="text-green">8.5%</span></td>
                                            <td>523 <span className="text-green">13.8%</span></td>
                                        </tr>
                                        <tr>
                                            <td><span>Cardiology</span></td>
                                            <td><span>38</span></td>
                                            <td><span>18</span></td>
                                            <td>3,890 <span className="text-green">8.9%</span></td>
                                            <td>872 <span className="text-red">17.4%</span></td>
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


export default Dashboard8