import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Donut } from "react-dial-knob";
import { Sparklines, SparklinesBars } from "react-sparklines";
import { VectorMap } from "react-jvectormap";
import Donutchart from "../common/donutchart";
import Linechart from "../common/linechart";
import Barchart from "../common/barchart";
import Splinechart from "../common/splinechart";

const Dashboard4 = () => {
  const [isDropdown, setDropdown] = useState(false);
  const [isFullScreen, setFullScreen] = useState(false);
  return (
    <>
      <div className="container-fluid">
        <div className="block-header">
          <div className="row clearfix">
            <div className="col-md-6 col-sm-12">
              <h1>آنالیز سرویس</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"></li>
                  <li className="breadcrumb-item"></li>
                </ol>
              </nav>
            </div>
            <div className="col-md-6 col-sm-12 text-right hidden-xs">
              <a className="p-1 text-green mr-3" href="/">
                <i className="fa fa-save mr-1"></i> Save Report
              </a>
              <a className="p-1 text-red mr-3" href="/">
                <i className="fa fa-file-pdf-o mr-1"></i> Export to PDF
              </a>
              <a className="p-1 text-blue" href="/">
                <i className="fa fa-envelope mr-1"></i>Send to Email
              </a>
            </div>
          </div>
        </div>

        <div className="row clearfix">
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="body w_summary">
                <div className="c_know mt-1 mr-3">
                  <Donut
                    className="knob"
                    diameter={45}
                    min={0}
                    max={100}
                    step={1}
                    value={34}
                    theme={{
                      donutThickness: 2,
                      donutColor: "#9367B4",
                      centerColor: "#282B2F",
                      bgrColor: "#383b40",
                    }}
                  />
                </div>
                <div className="s_detail">
                  <h4 className="mb-0">34.80%</h4>
                  <span>% New Sessions</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="body w_summary">
                <div className="s_chart">
                  <Sparklines
                    data={[3, 5, 1, 6, 2, 4, 8, 5, 3, 2]}
                    style={{
                      display: "inline-block",
                      width: "47px",
                      height: "55px",
                      verticalAlign: "top",
                    }}
                  >
                    <SparklinesBars />
                  </Sparklines>
                </div>
                <div className="s_detail">
                  <h4 className="mb-0">23.15%</h4>
                  <span>Bounce Rate</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="body w_summary">
                <div className="c_know mt-1 mr-3">
                  <Donut
                    className="knob"
                    diameter={45}
                    min={0}
                    max={100}
                    step={1}
                    value={57}
                    theme={{
                      donutThickness: 2,
                      donutColor: "#9367B4",
                      centerColor: "#282B2F",
                      bgrColor: "#383b40",
                    }}
                  />
                </div>
                <div className="s_detail">
                  <h4 className="mb-0">1258</h4>
                  <span>Pages/Session</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="body w_summary">
                <div className="s_chart">
                  <Sparklines
                    data={[8, 5, 2, 9, 6, 3, 4, 5, 6, 7]}
                    style={{
                      display: "inline-block",
                      width: "47px",
                      height: "55px",
                      verticalAlign: "top",
                    }}
                  >
                    <SparklinesBars />
                  </Sparklines>
                </div>
                <div className="s_detail">
                  <h4 className="mb-0">1025</h4>
                  <span>Sessions</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row clearfix">
          <div className="col-sm-12">
            <div className="card">
              <div className="body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-0">Audience Metrics</h6>
                  </div>
                  <ul className="nav nav-tabs2">
                    <li className="nav-item">
                      <a
                        className="nav-link active show"
                        data-toggle="tab"
                        href="/"
                      >
                        Today
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="/">
                        Week
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="/">
                        Month
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="row clearfix">
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <small>
                      Audience It is a long established fact that a reader will
                      be distracted
                    </small>
                    <div className="d-flex justify-content-start mt-3">
                      <div className="mr-5">
                        <label className="mb-0">Users</label>
                        <h4>9,231</h4>
                      </div>
                      <div>
                        <label className="mb-0">Sessions</label>
                        <h4>10,850</h4>
                      </div>
                    </div>
                    <Donutchart />
                  </div>
                  <div className="col-lg-8 col-md-12 col-sm-12">
                    <Linechart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row clearfix">
          <div className="col-xl-3 col-lg-4 col-md-">
            <div className="card">
              <div className="body">
                <h6 className="mb-4 font300">Page Impressions</h6>
                <h3 className="mb-0 mt-3 font300">
                  24,301 <span className="text-green font-15">+3.7%</span>
                </h3>
                <small>
                  The total number of Page Impressions within the date range
                </small>
                <Barchart />
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-4 col-md-6">
            <div className="card">
              <div className="body">
                <h6 className="mb-4 font300">Sessions by Channel</h6>
                <div className="d-flex justify-content-start">
                  <div className="mr-4">
                    <h3 className="mb-0 mt-3 font300">3,095</h3>
                    <small>Organic Search</small>
                  </div>
                  <div className="mr-4">
                    <h3 className="mb-0 mt-3 font300">2,763</h3>
                    <small>Referral</small>
                  </div>
                  <div>
                    <h3 className="mb-0 mt-3 font300">763</h3>
                    <small>Other</small>
                  </div>
                </div>
                <Splinechart />
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="card w_card3">
              <div className="body">
                <div className="text-center">
                  <i className="icon-picture text-info"></i>
                  <h4 className="m-t-25 mb-0">104 Picture</h4>
                  <p>Your gallery download complete</p>
                  <a href="/" className="btn btn-info btn-round">
                    Download now
                  </a>
                </div>
              </div>
            </div>
            <div className="card w_card3">
              <div className="body">
                <div className="text-center">
                  <i className="icon-social-twitter text-primary"></i>
                  <h4 className="m-t-25 mb-0">3,756</h4>
                  <p>New Followers on Twitter</p>
                  <a href="/" className="btn btn-primary btn-round">
                    Find more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row clearfix">
          <div className="col-sm-12">
            <div className={`card ${isFullScreen ? " fullscreen" : ""}`}>
              <div className="header">
                <h2>Visitor's Locations</h2>
                <ul className="header-dropdown dropdown">
                  <li>
                    <a
                      href="/"
                      onClick={() => setFullScreen(!isFullScreen)}
                      className="full-screen"
                    >
                      <i className="icon-frame"></i>
                    </a>
                  </li>
                  <li className="dropdown">
                    <span
                      onClick={() => setDropdown(!isDropdown)}
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    ></span>
                    <ul className={`dropdown-menu${isDropdown ? " show" : ""}`}>
                      <li>
                        <a href="/">Action</a>
                      </li>
                      <li>
                        <a href="/">Another Action</a>
                      </li>
                      <li>
                        <a href="/">Something else</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="body">
                <div className="row clearfix">
                  <div className="col-lg-4 col-md-12">
                    <ul className="nav nav-tabs3">
                      <li className="nav-item">
                        <a
                          className="nav-link active show"
                          data-toggle="tab"
                          href="#TODAY"
                        >
                          TODAY
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#THIS-WEEK"
                        >
                          WEEK
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#THIS-MONTH"
                        >
                          MONTH
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane active show" id="TODAY">
                        <div className="big-text">
                          <h2>831</h2>
                        </div>
                        <span>VISITORS OPERATING SYSTEM</span>
                        <hr />
                        <div className="form-group mb-4">
                          <label className="d-block">
                            macOS{" "}
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
                            Windows{" "}
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
                            Linux{" "}
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
                        <div className="form-group mb-0">
                          <label className="d-block">
                            Ubuntu{" "}
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
                      </div>
                      <div className="tab-pane" id="THIS-WEEK">
                        <div className="big-text">
                          <h2>1,580</h2>
                        </div>
                        <span>VISITORS OPERATING SYSTEM</span>
                        <hr />
                        <div className="form-group mb-4">
                          <label className="d-block">
                            macOS{" "}
                            <span className="float-right">
                              62% <i className="fa fa-long-arrow-down"></i>
                            </span>
                          </label>
                          <div className="progress progress-xxs">
                            <div
                              className="progress-bar bg-azura"
                              role="progressbar"
                              aria-valuenow="62"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "62%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="form-group mb-4">
                          <label className="d-block">
                            Windows{" "}
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
                            Linux{" "}
                            <span className="float-right">
                              42% <i className="fa fa-long-arrow-up"></i>
                            </span>
                          </label>
                          <div className="progress progress-xxs">
                            <div
                              className="progress-bar bg-green"
                              role="progressbar"
                              aria-valuenow="42"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "42%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="form-group mb-0">
                          <label className="d-block">
                            Ubuntu{" "}
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
                      </div>
                      <div className="tab-pane" id="THIS-MONTH">
                        <div className="big-text">
                          <h2>4,305</h2>
                        </div>
                        <span>VISITORS OPERATING SYSTEM</span>
                        <hr />
                        <div className="form-group mb-4">
                          <label className="d-block">
                            macOS{" "}
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
                            Windows{" "}
                            <span className="float-right">
                              62% <i className="fa fa-long-arrow-up"></i>
                            </span>
                          </label>
                          <div className="progress progress-xxs">
                            <div
                              className="progress-bar bg-danger"
                              role="progressbar"
                              aria-valuenow="62"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "62%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="form-group mb-4">
                          <label className="d-block">
                            Linux{" "}
                            <span className="float-right">
                              11% <i className="fa fa-long-arrow-down"></i>
                            </span>
                          </label>
                          <div className="progress progress-xxs">
                            <div
                              className="progress-bar bg-green"
                              role="progressbar"
                              aria-valuenow="11"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "11%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="form-group mb-0">
                          <label className="d-block">
                            Ubuntu{" "}
                            <span className="float-right">
                              31% <i className="fa fa-long-arrow-down"></i>
                            </span>
                          </label>
                          <div className="progress progress-xxs">
                            <div
                              className="progress-bar bg-indigo"
                              role="progressbar"
                              aria-valuenow="31"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "31%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-12">
                    <VectorMap
                      containerStyle={{
                        height: "400px",
                      }}
                      map={"world_mill"}
                      backgroundColor="transparent"
                      borderColor="#fff"
                      borderOpacity={0.25}
                      borderWidth={0}
                      color="#e6e6e6"
                      regionStyle={{ initial: { fill: "#6c757d" } }}
                      markerStyle={{
                        initial: {
                          r: 5,
                          fill: "#fff",
                          "fill-opacity": 1,
                          stroke: "#000",
                          "stroke-width": 1,
                          "stroke-opacity": 0.4,
                        },
                      }}
                      markers={[
                        {
                          latLng: [21.0, 78.0],
                          name: "INDIA : 350",
                        },
                        {
                          latLng: [-33.0, 151.0],
                          name: "Australia : 250",
                        },
                        {
                          latLng: [36.77, -119.41],
                          name: "USA : 250",
                        },
                        {
                          latLng: [55.37, -3.41],
                          name: "UK   : 250",
                        },
                        {
                          latLng: [25.2, 55.27],
                          name: "UAE : 250",
                        },

                        {
                          latLng: [35.65, 139.83],
                          name: "JP : 37",
                        },
                        {
                          latLng: [-23.53, -46.62],
                          name: "BR : 162",
                        },
                        {
                          latLng: [50.43, 30.51],
                          name: "UA : 129",
                        },
                      ]}
                      series={{
                        regions: [
                          {
                            values: {
                              US: "#ffec94",
                              SA: "#ffaeae",
                              AU: "#64e2d4",
                              IN: "#b0e57c",
                              GB: "#b4d8e7",
                              JP: "#56baec",
                              BR: "#fe8282",
                              UA: "#e2ffcf",
                            },
                            attribute: "fill",
                          },
                        ],
                      }}
                      hoverOpacity={null}
                      normalizeFunction="linear"
                      zoomOnScroll={false}
                      scaleColors={["#000000", "#000000"]}
                      selectedColor="#000000"
                      selectedRegions={[]}
                      enableZoom={false}
                      hoverColor="#fff"
                    />
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

export default Dashboard4;
