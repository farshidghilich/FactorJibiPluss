import React, { useState } from "react";
import { Donut } from "react-dial-knob";
// import { Sparklines, SparklinesBars } from 'react-sparklines';
import SparkLineBoxChart from "../common/dashboard12/SparkLineBoxChart";
import Piechart from "../common/dashboard12/piechart";
import EmploymentGrowth from "../common/dashboard12/EmploymentGrowth";
import MembersBarChart from "../common/dashboard12/MembersBarChat";
import MarketingChart from "../common/dashboard12/MarketingChart";
import OverviewChart from "../common/dashboard12/OverviewChart";

const Dashboard12 = () => {
  const [isDropdown, setDropdown] = useState(false);
  const [isFullScreen, setFullScreen] = useState(false);
  return (
    <>
      <div className="container-fluid">
        <div className="block-header">
          <div className="row clearfix">
            <div className="col-md-6 col-sm-12">
              <h1>میز کار</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">فاکتور جیبی</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    میزکار
                  </li>
                </ol>
              </nav>
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
                      <div>فروش این هفته </div>
                      <div className="py-4 m-0 text-center h2 text-info">
                        ۱۲۰۰۰۰تومان{" "}
                      </div>
                      <div className="d-flex">
                        <small className="text-muted"> رشد</small>
                        <div className="ml-auto">0درصد</div>
                      </div>
                    </div>
                    <div className="back p-3 px-4 bg-info text-center">
                      <p className="text-light">هفته جاری</p>
                      <SparkLineBoxChart
                        data={[80, 71, 80, 44, 108, 70, 92, 114, 81]}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="card-wrapper flip-left">
                  <div className="card s-widget-top">
                    <div className="front p-3 px-4 bg-danger text-light">
                      <div>سفارشات</div>
                      <div className="py-4 m-0 text-center h2">۱۵۰</div>
                      <div className="d-flex">
                        <small>سفارش جدید</small>
                        <div className="ml-auto">
                          <i className="fa fa-caret-down" />
                          ۱۰٪
                        </div>
                      </div>
                    </div>
                    <div className="back p-3 px-4 text-center">
                      <p>هفته جاری</p>
                      <SparkLineBoxChart
                        data={[58, 71, 30, 20, 10, 40, 35, 31, 5]}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="card-wrapper flip-left">
                  <div className="card s-widget-top">
                    <div className="front p-3 px-4 bg-warning text-light">
                      <div>تعداد مشتریان</div>
                      <div className="py-4 m-0 text-center h2">۲۳۰</div>
                      <div className="d-flex">
                        <small>مشتریان جدید</small>
                        <div className="ml-auto">
                          <i className="fa fa-caret-up" />
                          ۲٪
                        </div>
                      </div>
                    </div>
                    <div className="back p-3 px-4 text-center">
                      <p>هفته جاری</p>
                      <SparkLineBoxChart
                        data={[1, 2, 10, 100, 140, 150, 170, 180, 200]}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="card-wrapper flip-left">
                  <div className="card s-widget-top">
                    <div className="front p-3 px-4">
                      <div>سود کلی</div>
                      <div className="py-4 m-0 text-center h2 text-success">
                        ۳۴۵۰۰۰۰تومان
                      </div>
                      <div className="d-flex">
                        <small className="text-muted">سود</small>
                        <div className="ml-auto">
                          <i className="fa fa-caret-up text-success" />
                          ۴٪
                        </div>
                      </div>
                    </div>
                    <div className="back p-3 px-4 bg-success text-center">
                      <p className="text-light">هفته جاری</p>
                      <SparkLineBoxChart
                        data={[64, 71, 80, 44, 108, 70, 92, 114, 81]}
                      />
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
                    تعداد فاکتور های صادره در این ماه
                    <span className="float-right">
                      ۷۷٪ <i className="fa fa-long-arrow-up" />
                    </span>
                  </label>
                  <div className="progress progress-xxs">
                    <div
                      className="progress-bar bg-azura"
                      role="progressbar"
                      aria-valuenow={77}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "77%" }}
                    />
                  </div>
                </div>
                <div className="form-group mb-4">
                  <label className="d-block">
                    مشتریان ثبت شده در این ماه
                    <span className="float-right">
                      ۵۰٪ <i className="fa fa-long-arrow-up" />
                    </span>
                  </label>
                  <div className="progress progress-xxs">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "50%" }}
                    />
                  </div>
                </div>
                <div className="form-group mb-4">
                  <label className="d-block">
                    تعداد فروشگاه ثبت شده در این ماه
                    <span className="float-right">
                      ۳٪ <i className="fa fa-long-arrow-up" />
                    </span>
                  </label>
                  <div className="progress progress-xxs">
                    <div
                      className="progress-bar bg-green"
                      role="progressbar"
                      aria-valuenow={23}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "23%" }}
                    />
                  </div>
                </div>
                <div className="form-group mb-4">
                  <label className="d-block">
                    مشتریان در هفته جاری
                    <span className="float-right">
                      ۵۰٪ <i className="fa fa-long-arrow-up" />
                    </span>
                  </label>
                  <div className="progress progress-xxs">
                    <div
                      className="progress-bar bg-indigo"
                      role="progressbar"
                      aria-valuenow={78}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "78%" }}
                    />
                  </div>
                </div>
                <div className="form-group mb-4">
                  <label className="d-block">
                    فاکتور صادرشده در هفته جاری
                    <span className="float-right">
                      {" "}
                      ۳۰٪ <i className="fa fa-long-arrow-up" />
                    </span>
                  </label>
                  <div className="progress progress-xxs">
                    <div
                      className="progress-bar bg-orange"
                      role="progressbar"
                      aria-valuenow={33}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "33%" }}
                    />
                  </div>
                </div>
                <div className="form-group mb-2">
                  <label className="d-block">
                    محصولات فروخته شده در هفته جاری
                    <span className="float-right">
                      ۵۰٪ <i className="fa fa-long-arrow-up" />
                    </span>
                  </label>
                  <div className="progress progress-xxs">
                    <div
                      className="progress-bar bg-red"
                      role="progressbar"
                      aria-valuenow={88}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "88%" }}
                    />
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
                    <div className="text-center d-flex justify-content-center">
                      <Donut
                        className="knob"
                        diameter={73}
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
                    <label className="mb-0 mt-2">کربران جدید</label>
                    <h4 className="h4 mb-0 font-weight-bold text-cyan">۲۲۳</h4>
                  </div>
                  <div className="col-12 col-md-2 col-lg-12">
                    <hr className="mt-4 mb-4" />
                  </div>
                  <div className="col-lg-12 col-md-5">
                    <div className="text-center d-flex justify-content-center">
                      <Donut
                        className="knob"
                        diameter={73}
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
                    <label className="mb-0 mt-2">بازدید کنندگان</label>
                    <h4 className="h4 mb-0 font-weight-bold text-info">۱۳۴</h4>
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
                <h2>فروش در این هفته</h2>
              </div>
              <div className="body">
                <Piechart />
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-6 col-sm-12">
            <div className="card">
              <div className="header">
                <h2>رشد کسب و کار</h2>
              </div>
              <div className="body">
                <EmploymentGrowth />
              </div>
            </div>
          </div>
        </div>
        <div className="row clearfix">
          <div className="col-lg-6 col-md-12">
            <div className={`card ${isFullScreen ? " fullscreen" : ""}`}>
              <div className="header">
                <h2>نمایش کلی</h2>
                <ul className="header-dropdown dropdown">
                  <li>
                    <span
                      onClick={() => setFullScreen(!isFullScreen)}
                      className="full-screen"
                    >
                      <i className="icon-frame"></i>
                    </span>
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
                        <a href="/">اعمال</a>
                      </li>
                      <li>
                        <a href="/">اعمال دیگر</a>
                      </li>
                      <li>
                        <a href="/">Something else</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="body">
                <OverviewChart />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="header">
                <h2>کاربران</h2>
              </div>
              <div className="body">
                <MembersBarChart />
              </div>
              <div className="card-footer text-center">
                <div className="row clearfix">
                  <div className="col-6">
                    <h6>۳۵۰</h6>
                    <span>معمولی</span>
                  </div>
                  <div className="col-6">
                    <h6>۸۷</h6>
                    <span>اشتراکی</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="header">
                <h2>فروشگاهی </h2>
              </div>
              <div className="body">
                <MarketingChart />
              </div>
              <div className="card-footer text-center">
                <div className="row clearfix">
                  <div className="col-6">
                    <h6>۲۳۵۰۰۰۰تومان</h6>
                    <span>ماه گذشته</span>
                  </div>
                  <div className="col-6">
                    <h6>۱۶۰۶۷۰۰۰تومان</h6>
                    <span>ماه جاری</span>
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

export default Dashboard12;
