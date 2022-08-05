import React from "react";
import { Link } from "react-router-dom";
import { Donut } from "react-dial-knob";

const Dashboard2 = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="block-header">
          <div className="row clearfix">
            <div className="col-md-6 col-sm-12">
              <h1>Dashboard</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Oculux</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Dashboard
                  </li>
                </ol>
              </nav>
            </div>
            <div className="col-md-6 col-sm-12 text-right hidden-xs">
              <Link to="/" className="btn btn-sm btn-primary" title="">
                Create Campaign
              </Link>
              <Link
                to="https://themeforest.net/item/oculux-bootstrap-4x-admin-dashboard-clean-modern-ui-kit/23091507"
                className="btn btn-sm btn-success"
                title="Themeforest"
              >
                <i className="icon-basket"></i> Buy Now
              </Link>
            </div>
          </div>
        </div>

        <div className="row clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-6">
                <div className="card-wrapper flip-left">
                  <div className="card s-widget-top">
                    <div className="front p-3 px-4">
                      <div>Income status</div>
                      <div className="py-4 m-0 text-center h2 text-info">
                        $2,258
                      </div>
                      <div className="d-flex">
                        <small className="text-muted">New income</small>
                        <div className="ml-auto">0%</div>
                      </div>
                    </div>
                    <div className="back p-3 px-4 bg-info text-center">
                      <p className="text-light">This Week</p>
                      <span
                        id="minibar-chart2"
                        className="mini-bar-chart"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="card-wrapper flip-left">
                  <div className="card s-widget-top">
                    <div className="front p-3 px-4 bg-danger text-light">
                      <div>Order status</div>
                      <div className="py-4 m-0 text-center h2">428</div>
                      <div className="d-flex">
                        <small>New order</small>
                        <div className="ml-auto">
                          <i className="fa fa-caret-down"></i>10%
                        </div>
                      </div>
                    </div>
                    <div className="back p-3 px-4 text-center">
                      <p>This Week</p>
                      <span
                        id="minibar-chart4"
                        className="mini-bar-chart"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="card-wrapper flip-left">
                  <div className="card s-widget-top">
                    <div className="front p-3 px-4 bg-warning text-light">
                      <div>Customer status</div>
                      <div className="py-4 m-0 text-center h2">232</div>
                      <div className="d-flex">
                        <small>New users</small>
                        <div className="ml-auto">
                          <i className="fa fa-caret-up"></i>3%
                        </div>
                      </div>
                    </div>
                    <div className="back p-3 px-4 text-center">
                      <p>This Week</p>
                      <span
                        id="minibar-chart3"
                        className="mini-bar-chart"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="card-wrapper flip-left">
                  <div className="card s-widget-top">
                    <div className="front p-3 px-4">
                      <div>Total revenue</div>
                      <div className="py-4 m-0 text-center h2 text-success">
                        $9,653
                      </div>
                      <div className="d-flex">
                        <small className="text-muted">Income</small>
                        <div className="ml-auto">
                          <i className="fa fa-caret-up text-success"></i>4%
                        </div>
                      </div>
                    </div>
                    <div className="back p-3 px-4 bg-success text-center">
                      <p className="text-light">This Week</p>
                      <span
                        id="minibar-chart1"
                        className="mini-bar-chart"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
              <div className="body">
                <div className="form-group mb-4">
                  <label className="d-block">
                    Financials{" "}
                    <span className="float-right">
                      77% <i className="fa fa-long-arrow-up"></i>
                    </span>
                  </label>
                  <div className="progress progress-xxs">
                    <div
                      className="progress-bar bg-azura"
                      role="progressbar"
                      aria-valuenow="77"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "77%" }}
                    ></div>
                  </div>
                </div>
                <div className="form-group mb-4">
                  <label className="d-block">
                    Time to Market{" "}
                    <span className="float-right">
                      50% <i className="fa fa-long-arrow-up"></i>
                    </span>
                  </label>
                  <div className="progress progress-xxs">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
                <div className="form-group mb-4">
                  <label className="d-block">
                    Engagement{" "}
                    <span className="float-right">
                      23% <i className="fa fa-long-arrow-up"></i>
                    </span>
                  </label>
                  <div className="progress progress-xxs">
                    <div
                      className="progress-bar bg-green"
                      role="progressbar"
                      aria-valuenow="23"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "23%" }}
                    ></div>
                  </div>
                </div>
                <div className="form-group mb-4">
                  <label className="d-block">
                    Customers{" "}
                    <span className="float-right">
                      78% <i className="fa fa-long-arrow-up"></i>
                    </span>
                  </label>
                  <div className="progress progress-xxs">
                    <div
                      className="progress-bar bg-indigo"
                      role="progressbar"
                      aria-valuenow="78"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "78%" }}
                    ></div>
                  </div>
                </div>
                <div className="form-group mb-4">
                  <label className="d-block">
                    Competitors{" "}
                    <span className="float-right">
                      {" "}
                      33% <i className="fa fa-long-arrow-up"></i>
                    </span>
                  </label>
                  <div className="progress progress-xxs">
                    <div
                      className="progress-bar bg-orange"
                      role="progressbar"
                      aria-valuenow="33"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "33%" }}
                    ></div>
                  </div>
                </div>
                <div className="form-group mb-2">
                  <label className="d-block">
                    Exit Strategy
                    <span className="float-right">
                      88% <i className="fa fa-long-arrow-up"></i>
                    </span>
                  </label>
                  <div className="progress progress-xxs">
                    <div
                      className="progress-bar bg-red"
                      role="progressbar"
                      aria-valuenow="88"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "88%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
              <div className="body">
                <div className="row text-center">
                  <div className="col-lg-12 col-md-5">
                    <div className="text-center">
                      <Donut
                        className="knob"
                        diameter={68}
                        min={0}
                        max={100}
                        step={1}
                        value={77}
                        theme={{
                          donutThickness: 3,
                          donutColor: "#17C2D7",
                          centerColor: "#282B2F",
                          bgrColor: "#383b40",
                        }}
                      />
                    </div>
                    <label className="mb-0 mt-2">New Users</label>
                    <h4 className="h4 mb-0 font-weight-bold text-cyan">225</h4>
                  </div>
                  <div className="col-12 col-md-2 col-lg-12">
                    <hr className="mt-4 mb-4" />
                  </div>
                  <div className="col-lg-12 col-md-5">
                    <div className="text-center">
                      <Donut
                        className="knob"
                        diameter={68}
                        min={0}
                        max={100}
                        step={1}
                        value={38}
                        theme={{
                          donutThickness: 3,
                          donutColor: "#dc3545",
                          centerColor: "#282B2F",
                          bgrColor: "#383b40",
                        }}
                      />
                    </div>
                    <label className="mb-0 mt-2">Return Visitors</label>
                    <h4 className="h4 mb-0 font-weight-bold text-info">124</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row clearfix">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
              <div className="header">
                <h2>Sales This Week</h2>
              </div>
              <div className="body">
                <div id="chart-pie" style={{ height: "300px" }}></div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-6 col-sm-12">
            <div className="card">
              <div className="header">
                <h2>Employment Growth</h2>
              </div>
              <div className="body">
                <div id="chart-employment" style={{ height: "300px" }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="row clearfix">
          <div className="col-lg-6 col-md-12">
            <div className="card">
              <div className="header">
                <h2>Overview</h2>
                <ul className="header-dropdown dropdown">
                  <li>
                    <Link to="/" className="full-screen">
                      <i className="icon-frame"></i>
                    </Link>
                  </li>
                  <li className="dropdown">
                    <Link
                      to="/"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    ></Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/">Action</Link>
                      </li>
                      <li>
                        <Link to="/">Another Action</Link>
                      </li>
                      <li>
                        <Link to="/">Something else</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="body">
                <div id="stackedbar-chart" className="ct-chart"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="header">
                <h2>Members</h2>
              </div>
              <div className="body">
                <div id="chart-bar-stacked" style={{ height: "200px" }}></div>
              </div>
              <div className="card-footer text-center">
                <div className="row clearfix">
                  <div className="col-6">
                    <h6>350</h6>
                    <span>Users</span>
                  </div>
                  <div className="col-6">
                    <h6>87</h6>
                    <span>VIP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="header">
                <h2>Marketing </h2>
              </div>
              <div className="body">
                <div
                  id="chart-area-Marketing"
                  style={{ height: "200px" }}
                ></div>
              </div>
              <div className="card-footer text-center">
                <div className="row clearfix">
                  <div className="col-6">
                    <h6>$3,095</h6>
                    <span>Last Month</span>
                  </div>
                  <div className="col-6">
                    <h6>$2,763</h6>
                    <span>This Month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard2;
