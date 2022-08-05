import React from "react";
import { Link } from "react-router-dom";
import { Donut } from "react-dial-knob";
// import { Sparklines, SparklinesBars } from 'react-sparklines';
import DonutChart from "../components/common/dashboard11/donutChart";
import SalesChart from "../components/common/dashboard11/salesChart";
import Sparklinechart from "../components/common/dashboard11/sparklinechart";
import Sparklinecustomchart from "../components/common/dashboard11/sparklinecustomchart";
import SparkLineBoxChart from "../components/common/dashboard11/sparkLineBoxChart";
import FinancialChart from "../components/common/dashboard11/financialChart";
import BarChart from "../components/common/dashboard11/barChart";
// import BarChart from "../common/dashboard11/barChart";

const Products = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="block-header">
          <div className="row clearfix">
            <div className="col-md-6 col-sm-12">
              <h1>انبار </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">محصولات</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/">انبار</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    آنالیز محصولات
                  </li>
                </ol>
              </nav>
            </div>
            <div className="col-md-6 col-sm-12 text-right hidden-xs">
              <span className="btn btn-sm btn-primary mr-1" title="">
                اضافه کردن محصول
              </span>
              <Link
                to="https://themeforest.net/item/oculux-bootstrap-4x-admin-dashboard-clean-modern-ui-kit/23091507"
                className="btn btn-sm btn-success"
                title="Themeforest"
              >
                <i className="icon-basket"></i> ویرایش{" "}
              </Link>
            </div>
          </div>
        </div>

        <div className="row clearfix">
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="body">
                <div className="w_summary">
                  <div className="s_chart">
                    <span className="chart">
                      <SparkLineBoxChart />
                    </span>
                  </div>
                  <div className="s_detail">
                    <h4 className="font700 mb-0"> 1253</h4>
                    <span>
                      67% <i className="fa fa-level-up text-success"></i> فروخته
                      شده(تعداد)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="body">
                <div className="w_summary">
                  <div className="s_chart">
                    <span className="chart">
                      <SparkLineBoxChart />
                    </span>
                  </div>
                  <div className="s_detail">
                    <h4 className="font700 mb-0">150000000</h4>
                    <span>
                      15% <i className="fa fa-level-up text-success"></i> سود
                      خالص (ریال)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="body">
                <div className="w_summary">
                  <div className="s_chart">
                    <span className="chart">
                      <SparkLineBoxChart />
                    </span>
                  </div>
                  <div className="s_detail">
                    <h2 className="font700 mb-0">1896800000</h2>
                    <span>
                      23% <i className="fa fa-level-up text-success"></i> قیمت
                      کل محصولات
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="body">
                <div className="w_summary">
                  <div className="s_chart">
                    <span className="chart">
                      <SparkLineBoxChart />
                    </span>
                  </div>
                  <div className="s_detail">
                    <h2 className="font700 mb-0">156</h2>
                    <span>
                      52% <i className="fa fa-level-up text-success"></i> تعداد
                      محصول باقی مانده(تعداد)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row clearfix">
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="header">
                <h2>میانگین فروش </h2>
              </div>
              <div className="body text-center">
                <h4>میلیون6.25</h4>
                <p className="mb-2">
                  <span>
                    <i className="fa fa-caret-up text-success ml-1"></i> +1.12
                  </span>{" "}
                  vs ماه گذشته (4.0)
                </p>
                <div id="Page_Views" style={{ height: "140px" }}>
                  <BarChart />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="body">
                <div className="card-value float-right text-muted">
                  <i className="icon-bubbles"></i>
                </div>
                <h3 className="mb-1">2,54,021</h3>
                <div>Total Clicks</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="header">
                <h2>فروش</h2>
              </div>
              <div className="body text-center">
                <div id="Order_status" style={{ height: "268px" }}>
                  <DonutChart />
                </div>
                <hr />
                <div className="row clearfix">
                  <div className="col-6">
                    <h6 className="mb-0">$3,095</h6>
                    <small className="text-muted">ماه گذشته</small>
                  </div>
                  <div className="col-6">
                    <h6 className="mb-0">$2,763</h6>
                    <small className="text-muted">این هفته </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="card">
              <div className="header">
                <h2>گزارش فروش</h2>
              </div>
              <div className="body">
                <small className="text-muted">فروش انلاین</small>
                <SalesChart />
              </div>
            </div>
          </div>
        </div>

        <div className="row clearfix">
          <div className="col-lg-6 col-md-12">
            <div className="card">
              <div className="header">
                <h2>تعیین قیمت محصولات</h2>
              </div>
              <div className="body">
                <div id="chart-bar" style={{ height: "350px" }}>
                  <FinancialChart />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="header">
                <h2>سود خالص</h2>
              </div>
              <div className="body text-center">
                <div className="mt-4">
                  <Donut
                    className="knob"
                    diameter={147}
                    min={0}
                    max={100}
                    step={1}
                    value={34}
                    theme={{
                      donutThickness: 5,
                      donutColor: "#ffd861",
                      centerColor: "#282B2F",
                      bgrColor: "#383b40",
                    }}
                  />
                </div>
                <h3 className="mb-0 mt-3 font300">
                  24,301 <span className="text-green font-15">+3.7%</span>
                </h3>
                <small>
                  ریز گردش حساب <br /> <a href="/">گزارش</a>{" "}
                </small>
                <div className="mt-4">
                  <span className="chart_3">
                    <Sparklinechart />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="card">
              <div className="header">
                <h2>موجودی اصلی انبار</h2>
              </div>
              <div className="body">
                <div className="card-value float-right text-blue">+15%</div>
                <h4 className="mb-0 mt-2">$5,021.00</h4>
              </div>
              <div className="card-chart-bg">
                <span id="linecustom">
                  <Sparklinecustomchart />
                </span>
              </div>
            </div>
            <div className="card">
              <div className="body top_counter">
                <div className="icon bg-success text-white">
                  <i className="fa fa-area-chart"></i>{" "}
                </div>
                <div className="content">
                  <span>رشد</span>
                  <h5 className="number mb-0">62%</h5>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="body top_counter">
                <div className="icon bg-warning text-white">
                  <i className="fa fa-building"></i>{" "}
                </div>
                <div className="content">
                  <span>محصولات ثبت شده</span>
                  <h5 className="number mb-0">53,251</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row clearfix">
          <div className="col-12 col-sm-12">
            <div className="card">
              <div className="header">
                <h2>لیست محصولات ثبت شده</h2>
                <br />
                <p style={{ color: "gray" }}>
                  برای دیدن جزییات روی هر ردیف کلیک کنید
                </p>
              </div>
              <div className="col-md-6 col-sm-12 text-right hidden-xs">
                <span className="btn btn-sm btn-primary mr-1" title="">
                  اضافه کردن محصول
                </span>
                <Link
                  to="https://themeforest.net/item/oculux-bootstrap-4x-admin-dashboard-clean-modern-ui-kit/23091507"
                  className="btn btn-sm btn-success"
                  title="Themeforest"
                >
                  <i className="icon-basket"></i> ویرایش{" "}
                </Link>
              </div>
              <div className="table-responsive">
                <table className="table table-custom spacing5 mb-0">
                  <thead>
                    <tr>
                      <th>شماره\ردیف</th>
                      <th>نام محصول</th>
                      <th>شماره محصول</th>
                      <th>نوع محصول</th>
                      <th>قیمت محصول</th>
                      <th>نحوه فروش</th>
                      <th>وضعیت</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#01</td>
                      <td>Sean Black</td>
                      <td>PRO12345</td>
                      <td>Mi LED Smart TV 4A 80</td>
                      <td>$14,500</td>
                      <td>آنلاین</td>
                      <td>
                        <span className="badge badge-success">
                          تحویل داده شده
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>#02</td>
                      <td>Evan Rees</td>
                      <td>PRO8765</td>
                      <td>Thomson R9 122cm (48 inch) Full HD LED TV </td>
                      <td>$30,000</td>
                      <td>فروش نقدی</td>
                      <td>
                        <span className="badge badge-primary">در سبد خرید</span>
                      </td>
                    </tr>
                    <tr>
                      <td>#03</td>
                      <td>David Wallace</td>
                      <td>PRO54321</td>
                      <td>Vu 80cm (32 inch) HD Ready LED TV</td>
                      <td>$13,200</td>
                      <td>آنلاین</td>
                      <td>
                        <span className="badge badge-warning">درحال فروش</span>
                      </td>
                    </tr>
                    <tr>
                      <td>#04</td>
                      <td>Julia Bower</td>
                      <td>PRO97654</td>
                      <td>Micromax 81cm (32 inch) HD Ready LED TV</td>
                      <td>$15,100</td>
                      <td>فروش نقدی</td>
                      <td>
                        <span className="badge badge-secondary">
                          تحویل داده شده
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>#05</td>
                      <td>HP 200 Mouse &amp; Wireless Laptop Keyboard </td>
                      <td>Kevin James</td>
                      <td>PRO4532</td>
                      <td>$5,987</td>
                      <td>آنلاین</td>
                      <td>
                        <span className="badge badge-danger">
                          تحویل داده شده
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>#06</td>
                      <td>Theresa Wright</td>
                      <td>PRO6789</td>
                      <td>Digisol DG-HR3400 Router </td>
                      <td>$11,987</td>
                      <td>فروش نقدی</td>
                      <td>
                        <span className="badge badge-success">
                          تحویل داده شده
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>#07</td>
                      <td>Sebastian Black</td>
                      <td>PRO4567</td>
                      <td>Dell WM118 Wireless Optical Mouse</td>
                      <td>$4,700</td>
                      <td>آنلاین</td>
                      <td>
                        <span className="badge badge-secondary">
                          تحویل داده شده
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>#08</td>
                      <td>Kevin Glover</td>
                      <td>PRO32156</td>
                      <td>Dell 16 inch Laptop Backpack </td>
                      <td>$678</td>
                      <td>فروش نقدی</td>
                      <td>
                        <span className="badge badge-cyan">تحویل داده شده</span>
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

export default Products;
