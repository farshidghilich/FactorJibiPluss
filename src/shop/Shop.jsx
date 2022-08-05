import React from "react";
import { Link } from "react-router-dom";
import Fb1Chart from "../components/common/dashboard9/fb1Chart";
import Fb2Chart from "../components/common/dashboard9/fb2Chart";
import Fb3Chart from "../components/common/dashboard9/fb3Chart";
import Fb4Chart from "../components/common/dashboard9/fb4Chart";
import LinkedinChart from "../components/common/dashboard9/linkedinChart";
import RealtimeChart from "../components/common/dashboard9/realtimeChart";
import SubscriberChart from "../components/common/dashboard9/subscribersChart";

const Shop = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="block-header">
          <div className="row clearfix">
            <div className="col-md-6 col-sm-12">
              <h1>گزارش جامع فروشگاه ها</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">فروشگاه</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/">گزارش کل</Link>
                  </li>
                </ol>
              </nav>
            </div>
            {/* <div className="col-md-6 col-sm-12 text-right hidden-xs">
              <span className="btn btn-sm btn-primary mr-1" title="">
                Create Campaign
              </span>
              <a
                href="https://themeforest.net/item/oculux-bootstrap-4x-admin-dashboard-clean-modern-ui-kit/23091507"
                className="btn btn-sm btn-success"
                title="Themeforest"
              >
                <i className="icon-basket"></i> Buy Now
              </a>
            </div> */}
          </div>
        </div>
        <div className="row clearfix">
          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="card w_card3">
                  <div className="body">
                    <div className="text-center">
                      <i className="fa fa-shopping-cart"></i>
                      <h6 className="m-t-20 mb-0">1500تعداد کل فروشگاه</h6>
                      {/* <p className="text-muted">New Followers</p> */}
                      <a href="/" className="btn btn-info btn-round">
                        لیست فروشگاه
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="card w_card3">
                  <div className="body">
                    <div className="text-center">
                      <i className="fa fa-check-circle"></i>
                      <h5 className="m-t-20 mb-0">813 فعال</h5>
                      <p className="text-muted"></p>
                      <a href="/" className="btn btn-success btn-round">
                        لیست
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="card w_card3">
                  <div className="body">
                    <div className="text-center">
                      <i className="fa fa-user"></i>
                      <h5 className="m-t-20 mb-0">3,756 کارمند</h5>
                      <p className="text-muted"></p>
                      <a href="/" className="btn btn-primary btn-round">
                        لیست
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="card w_card3">
                  <div className="body">
                    <div className="text-center">
                      <i className="fa fa-usd"></i>
                      <h5 className="m-t-20 mb-0">گردش مالی</h5>
                      <p className="text-muted"></p>
                      <a href="/" className="btn btn-primary btn-round">
                        گزارش
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12">
            <div className="card">
              <div className="body">
                <div>نمودار ثبت فروشگاه در یک ماه اخیر</div>
                <p className="text-muted">
                  The global and country campaign stats show how popular your ad
                  is relative to your other ads.
                </p>
                <RealtimeChart />
              </div>
            </div>
          </div>
        </div>
        <div className="row clearfix">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="card">
              <div className="header">
                <h2>گردش مالی </h2>
              </div>
              <div className="body">
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="mb-1">Feb 21, 2019 to Feb 28 2019</p>
                    <small className="text-muted">
                      {/* Note Enim omittam, ex quo dictas complectitur */}
                    </small>
                  </div>
                  <div>
                    <div className="form-group">
                      <select className="custom-select">
                        <option defaultValue="">7 Day</option>
                        <option defaultValue="1">15 Day</option>
                        <option defaultValue="2">1 Month</option>
                        <option defaultValue="3">1 Year</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-12  mt-4">
                    <span>
                      Engaged Users{" "}
                      <span className="text-success">
                        (1%) <i className="fa fa-caret-up"></i>
                      </span>
                    </span>
                    <h4 className="mb-0">18,254</h4>
                    <small className="text-muted">Vs. 27,540 Pre</small>
                    <Fb1Chart />
                  </div>
                  <div className="col-lg-6 col-md-12  mt-4">
                    <span>
                      Page Impressions{" "}
                      <span className="text-success">
                        (5%) <i className="fa fa-caret-up"></i>
                      </span>
                    </span>
                    <h4 className="mb-0">1,28,823</h4>
                    <small className="text-muted">Vs. 112,540 Pre</small>
                    <Fb2Chart />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="header">
                <h2>تعداد کارمندان</h2>
              </div>
              <div className="body">
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="mb-1">Jan 01, 2019 to Jan 31 2019</p>
                    <small className="text-muted">
                      Note Enim omittam, ex quo dictas complectitur
                    </small>
                  </div>
                  <div>
                    <div className="form-group">
                      <select className="custom-select">
                        <option defaultValue="">1 Month</option>
                        <option defaultValue="1">15 Day</option>
                        <option defaultValue="2">1 Month</option>
                        <option defaultValue="3">1 Year</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-12  mt-4">
                    <span>
                      Total Page Likes{" "}
                      <span className="text-success">
                        (11%) <i className="fa fa-caret-up"></i>
                      </span>
                    </span>
                    <h4 className="mb-0">42,254</h4>
                    <small className="text-muted">Vs. 27,540 Pre</small>
                    <Fb3Chart />
                  </div>
                  <div className="col-lg-6 col-md-12  mt-4">
                    <span>
                      New Page Likes{" "}
                      <span className="text-success">
                        (7%) <i className="fa fa-caret-up"></i>
                      </span>
                    </span>
                    <h4 className="mb-0">21,823</h4>
                    <small className="text-muted">Vs. 112,540 Pre</small>
                    <Fb4Chart />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="card">
              <div className="header">
                <h2>ثبت فروشگاه در هفته اخیر</h2>
              </div>
              <div className="body">
                <SubscriberChart />
              </div>
            </div>
            <div className="card">
              <div className="header">
                <h2>Linkedin Key Metrics ( Last 30 Days)</h2>
              </div>
              <div className="body">
                <LinkedinChart />
                <div className="form-group mb-3">
                  <label className="d-block">
                    Clicks{" "}
                    <span className="float-right">
                      77% <i className="fa fa-long-arrow-up"></i>
                    </span>
                  </label>
                  <div className="progress progress-xxs">
                    <div
                      className="progress-bar bg-blue"
                      role="progressbar"
                      aria-valuenow="77"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "77%" }}
                    ></div>
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label className="d-block">
                    Likes{" "}
                    <span className="float-right">
                      50% <i className="fa fa-long-arrow-up"></i>
                    </span>
                  </label>
                  <div className="progress progress-xxs">
                    <div
                      className="progress-bar bg-blue"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
                <div className="form-group mb-0">
                  <label className="d-block">
                    Shares{" "}
                    <span className="float-right">
                      23% <i className="fa fa-long-arrow-up"></i>
                    </span>
                  </label>
                  <div className="progress progress-xxs">
                    <div
                      className="progress-bar bg-blue"
                      role="progressbar"
                      aria-valuenow="23"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "23%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row clearfix">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="card">
              <div className="header">
                <h2>
                  Your Top Countries{" "}
                  <small className="text-muted">
                    Campaigns revenue based by country
                  </small>
                </h2>
              </div>
              <div className="table-responsive">
                <table className="table table-hover table-custom spacing5 mb-0">
                  <tbody>
                    <tr>
                      <td className="w40">
                        <img
                          src="../assets/images/flag/us.svg "
                          className="w35 rounded-circle"
                          alt="avtar"
                        />
                      </td>
                      <td>
                        <small>United States</small>
                        <h6 className="mb-0">$5,434</h6>
                      </td>
                      <td>
                        <span className="chart">
                          <canvas
                            width="51"
                            height="35"
                            style={{
                              display: "inline-block",
                              width: "51px",
                              height: "35px",
                              verticalAlign: "top",
                            }}
                          ></canvas>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="../assets/images/flag/au.svg"
                          className="w35 rounded-circle"
                          alt="avtar"
                        />
                      </td>
                      <td>
                        <small>Australia</small>
                        <h6 className="mb-0">$2,015</h6>
                      </td>
                      <td>
                        <span className="chart">
                          <canvas
                            width="51"
                            height="35"
                            style={{
                              display: "inline-block",
                              width: "51px",
                              height: "35px",
                              verticalAlign: "top",
                            }}
                          ></canvas>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="../assets/images/flag/ca.svg"
                          className="w35 rounded-circle"
                          alt="avtar"
                        />
                      </td>
                      <td>
                        <small>Canada</small>
                        <h6 className="mb-0">$1,005</h6>
                      </td>
                      <td>
                        <span className="chart">
                          <canvas
                            width="51"
                            height="35"
                            style={{
                              display: "inline-block",
                              width: "51px",
                              height: "35px",
                              verticalAlign: "top",
                            }}
                          ></canvas>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="../assets/images/flag/gb.svg"
                          className="w35 rounded-circle"
                          alt="avatar"
                        />
                      </td>
                      <td>
                        <small>United Kingdom</small>
                        <h6 className="mb-0">$2,850</h6>
                      </td>
                      <td>
                        <span className="chart">
                          <canvas
                            width="51"
                            height="35"
                            style={{
                              display: "inline-block",
                              width: "51px",
                              height: "35px",
                              verticalAlign: "top",
                            }}
                          ></canvas>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="../assets/images/flag/nl.svg"
                          className="w35 rounded-circle"
                          alt="avatar"
                        />
                      </td>
                      <td>
                        <small>Netherlands</small>
                        <h6 className="mb-0">$1,052</h6>
                      </td>
                      <td>
                        <span className="chart">
                          <canvas
                            width="51"
                            height="35"
                            style={{
                              display: "inline-block",
                              width: "51px",
                              height: "35px",
                              verticalAlign: "top",
                            }}
                          ></canvas>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="card">
              <div className="header">
                <h2>
                  لیست فروشگاه ها{" "}
                  <small className="text-muted">لیست تمامی فروشگاه ها </small>
                </h2>
              </div>
              <div className="table-responsive">
                <table className="table table-hover table-custom spacing5">
                  <tbody>
                    <tr>
                      <td>
                        <a href="/">Defecting Buyers Email 1</a>
                        <p className="mb-0 text-muted">
                          Sent on 23-Feb-2019 11:38am
                        </p>
                      </td>
                      <td className="text-right">
                        <h6 className="font-14 mb-0">1.3MB</h6>
                        <span className="text-muted">Emails deliverd</span>
                      </td>
                      <td className="w350">
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar bg-azura"
                            style={{ width: "45%" }}
                          ></div>
                          <div
                            className="progress-bar bg-cyan"
                            style={{ width: "20%" }}
                          ></div>
                        </div>
                        <div className="d-flex bd-highlight mt-2">
                          <div className="flex-fill bd-highlight">
                            <small>
                              <i className="fa fa-check-square text-blue"></i>{" "}
                              37.2% Clicks
                            </small>
                          </div>
                          <div className="flex-fill bd-highlight">
                            <small>
                              <i className="fa fa-check-square text-info"></i>{" "}
                              12.2% Opens
                            </small>
                          </div>
                          <div className="flex-fill bd-highlight">
                            <small>
                              <i className="fa fa-check-square"></i> Deliveries
                            </small>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="/">Defecting Buyers Email 2</a>
                        <p className="mb-0 text-muted">
                          Sent on 23-Feb-2019 11:38am
                        </p>
                      </td>
                      <td className="text-right">
                        <h6 className="font-14 mb-0">11.3MB</h6>
                        <span className="text-muted">Emails deliverd</span>
                      </td>
                      <td className="w350">
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar bg-azura"
                            style={{ width: "45%" }}
                          ></div>
                          <div
                            className="progress-bar bg-cyan"
                            style={{ width: "20%" }}
                          ></div>
                        </div>
                        <div className="d-flex bd-highlight mt-2">
                          <div className="flex-fill bd-highlight">
                            <small>
                              <i className="fa fa-check-square text-blue"></i>{" "}
                              37.2% Clicks
                            </small>
                          </div>
                          <div className="flex-fill bd-highlight">
                            <small>
                              <i className="fa fa-check-square text-info"></i>{" "}
                              12.2% Opens
                            </small>
                          </div>
                          <div className="flex-fill bd-highlight">
                            <small>
                              <i className="fa fa-check-square"></i> Deliveries
                            </small>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="/">Defecting Buyers Email 3</a>
                        <p className="mb-0 text-muted">
                          Sent on 23-Feb-2019 11:38am
                        </p>
                      </td>
                      <td className="text-right">
                        <h6 className="font-14 mb-0">8.3MB</h6>
                        <span className="text-muted">Emails deliverd</span>
                      </td>
                      <td className="w350">
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar bg-azura"
                            style={{ width: "63%" }}
                          ></div>
                          <div
                            className="progress-bar bg-cyan"
                            style={{ width: "24%" }}
                          ></div>
                        </div>
                        <div className="d-flex bd-highlight mt-2">
                          <div className="flex-fill bd-highlight">
                            <small>
                              <i className="fa fa-check-square text-blue"></i>{" "}
                              63.2% Clicks
                            </small>
                          </div>
                          <div className="flex-fill bd-highlight">
                            <small>
                              <i className="fa fa-check-square text-info"></i>{" "}
                              24.2% Opens
                            </small>
                          </div>
                          <div className="flex-fill bd-highlight">
                            <small>
                              <i className="fa fa-check-square"></i> Deliveries
                            </small>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="/">Defecting Buyers Email 4</a>
                        <p className="mb-0 text-muted">
                          Sent on 23-Feb-2019 11:38am
                        </p>
                      </td>
                      <td className="text-right">
                        <h6 className="font-14 mb-0">12.1MB</h6>
                        <span className="text-muted">Emails deliverd</span>
                      </td>
                      <td className="w350">
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar bg-azura"
                            style={{ width: "71%" }}
                          ></div>
                          <div
                            className="progress-bar bg-cyan"
                            style={{ width: "8%" }}
                          ></div>
                        </div>
                        <div className="d-flex bd-highlight mt-2">
                          <div className="flex-fill bd-highlight">
                            <small>
                              <i className="fa fa-check-square text-blue"></i>{" "}
                              71.2% Clicks
                            </small>
                          </div>
                          <div className="flex-fill bd-highlight">
                            <small>
                              <i className="fa fa-check-square text-info"></i>{" "}
                              8.2% Opens
                            </small>
                          </div>
                          <div className="flex-fill bd-highlight">
                            <small>
                              <i className="fa fa-check-square"></i> Deliveries
                            </small>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="/">Defecting Buyers Email 5</a>
                        <p className="mb-0 text-muted">
                          Sent on 23-Feb-2019 11:38am
                        </p>
                      </td>
                      <td className="text-right">
                        <h6 className="font-14 mb-0">7.6MB</h6>
                        <span className="text-muted">Emails deliverd</span>
                      </td>
                      <td className="w350">
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar bg-azura"
                            style={{ width: "23%" }}
                          ></div>
                          <div
                            className="progress-bar bg-cyan"
                            style={{ width: "41%" }}
                          ></div>
                        </div>
                        <div className="d-flex bd-highlight mt-2">
                          <div className="flex-fill bd-highlight">
                            <small>
                              <i className="fa fa-check-square text-blue"></i>{" "}
                              23.2% Clicks
                            </small>
                          </div>
                          <div className="flex-fill bd-highlight">
                            <small>
                              <i className="fa fa-check-square text-info"></i>{" "}
                              41.2% Opens
                            </small>
                          </div>
                          <div className="flex-fill bd-highlight">
                            <small>
                              <i className="fa fa-check-square"></i> Deliveries
                            </small>
                          </div>
                        </div>
                      </td>
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
};

export default Shop;
