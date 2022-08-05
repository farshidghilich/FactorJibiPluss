import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productListAction } from "../../actions/Action";
import Columnchart from "../common/columnchart";
import Tooltip from "../common/toolTip";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);

  return (
    <div className="container-fluid">
      <div className="block-header">
        <div className="row clearfix">
          <div className="col-md-6 col-sm-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"></li>
              </ol>
            </nav>
          </div>
          <div className="col-md-6 col-sm-12 text-right hidden-xs"></div>
        </div>
      </div>

      <div className="row clearfix">
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="body">
              <div className="d-flex align-items-center">
                <div className="icon-in-bg bg-indigo text-white rounded-circle">
                  <i className="fa fa-briefcase"></i>
                </div>
                <div className="ml-4">
                  <span>موجودی حساب (ریال)</span>
                  <h4 className="mb-0 font-weight-medium">7,805</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="body">
              <div className="d-flex align-items-center">
                <div className="icon-in-bg bg-azura text-white rounded-circle">
                  <i className="fa fa-credit-card"></i>
                </div>
                <div className="ml-4">
                  <span>درآمد امروز (ریال)</span>
                  <h4 className="mb-0 font-weight-medium">300,651,000</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="body">
              <div className="d-flex align-items-center">
                <div className="icon-in-bg bg-orange text-white rounded-circle">
                  <i className="fa fa-users"></i>
                </div>
                <div className="ml-4">
                  <span>فاکتور پرداخت شده امروز</span>
                  <h4 className="mb-0 font-weight-medium">5,805</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="body">
              <div className="d-flex align-items-center">
                <div className="icon-in-bg bg-pink text-white rounded-circle">
                  <i className="fa fa-sort-amount-asc"></i>
                </div>
                <div className="ml-4">
                  <span>فاکتور صادر شده امروز</span>
                  <h4 className="mb-0 font-weight-medium">12</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row clearfix">
        <div className="col-lg-4 col-md-12">
          <div className="card">
            <div className="header">
              <h2>مشتریان</h2>
            </div>
            <div className="body">
              <div className="row text-center">
                <div className="col-6 border-right pb-4 pt-4">
                  <label className="mb-0">مشتریان جدید</label>
                  <h4 className="font-30 font-weight-bold text-col-blue">
                    2,025
                  </h4>
                </div>
                <div className="col-6 pb-4 pt-4">
                  <label className="mb-0">همه مشتریان</label>
                  <h4 className="font-30 font-weight-bold text-col-blue">
                    14,254
                  </h4>
                </div>
              </div>
            </div>
            <div className="body">
              <div className="form-group">
                <label className="d-block">
                  مشتریان جدید <span className="float-right">77%</span>
                </label>
                <div className="progress progress-xxs">
                  <div
                    className="progress-bar progress-bar-success"
                    role="progressbar"
                    aria-valuenow="77"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "77%" }}
                  ></div>
                </div>
              </div>
              <div className="form-group">
                <label className="d-block">
                  Return Visitors <span className="float-right">50%</span>
                </label>
                <div className="progress progress-xxs">
                  <div
                    className="progress-bar progress-bar-warning"
                    role="progressbar"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </div>
              <div className="form-group">
                <label className="d-block">
                  بازدید <span className="float-right">23%</span>
                </label>
                <div className="progress progress-xxs">
                  <div
                    className="progress-bar progress-bar-info"
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
        <div className="col-lg-8 col-md-12">
          <div className="card user_statistics">
            <div className="header">
              <h2>فاکتورهای 5 ماه گذشته </h2>
            </div>
            <div className="body">
              <Columnchart />
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="table-responsive">
            <table className="table table-hover table-custom spacing5">
              <thead>
                <tr>
                  <th style={{ width: "20px" }}>#</th>
                  <th>مشتری</th>
                  <th style={{ width: "50px" }}>گردش حساب</th>
                  <th style={{ width: "50px" }}>وظعیت</th>
                  <th style={{ width: "110px" }}>اعمال</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span>01</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Tooltip text="Avatar Name" id="client1" />
                      <div
                        className="avtar-pic w35 bg-red"
                        data-for="client1"
                        data-tip
                        title="Avatar Name"
                      >
                        <span>SS</span>
                      </div>
                      <div className="ml-3">
                        <Link to="/page-invoices-details" title="">
                          South Shyanne
                        </Link>
                        <p className="mb-0">south.shyanne@example.com</p>
                      </div>
                    </div>
                  </td>
                  <td>$1200</td>
                  <td>
                    <span className="badge badge-success ml-0 mr-0">Done</span>
                  </td>
                  <td>
                    <Tooltip text="send" id="send" />
                    <button
                      type="button"
                      className="btn btn-sm btn-default"
                      title="Send Invoice"
                      data-for="send"
                      data-tip
                    >
                      <i className="icon-envelope"></i>
                    </button>
                    <Tooltip text="print" id="print" />
                    <button
                      type="button"
                      className="btn btn-sm btn-default "
                      title="Print"
                      data-for="print"
                      data-tip
                    >
                      <i className="icon-printer"></i>
                    </button>
                    <Tooltip text="delete" id="delete" />
                    <button
                      type="button"
                      className="btn btn-sm btn-default"
                      title="Delete"
                      data-for="delete"
                      data-tip
                    >
                      <i className="icon-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>02</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="../assets/images/xs/avatar2.jpg"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Avatar Name"
                        alt="Avatar"
                        className="w35 h35 rounded"
                      />
                      <div className="ml-3">
                        <Link to="/" title="">
                          Zoe Baker
                        </Link>
                        <p className="mb-0">zoe.baker@example.com</p>
                      </div>
                    </div>
                  </td>
                  <td>$378</td>
                  <td>
                    <span className="badge badge-success ml-0 mr-0">Done</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-sm btn-default"
                      title="Send Invoice"
                      data-toggle="tooltip"
                      data-placement="top"
                    >
                      <i className="icon-envelope"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-default "
                      title="Print"
                      data-toggle="tooltip"
                      data-placement="top"
                    >
                      <i className="icon-printer"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-default"
                      title="Delete"
                      data-toggle="tooltip"
                      data-placement="top"
                    >
                      <i className="icon-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>03</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div
                        className="avtar-pic w35 bg-indigo"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Avatar Name"
                      >
                        <span>CB</span>
                      </div>
                      <div className="ml-3">
                        <Link to="/" title="">
                          Colin Brown
                        </Link>
                        <p className="mb-0">colinbrown@example.com</p>
                      </div>
                    </div>
                  </td>
                  <td>$653</td>
                  <td>
                    <span className="badge badge-success ml-0 mr-0">Done</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-sm btn-default"
                      title="Send Invoice"
                      data-toggle="tooltip"
                      data-placement="top"
                    >
                      <i className="icon-envelope"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-default "
                      title="Print"
                      data-toggle="tooltip"
                      data-placement="top"
                    >
                      <i className="icon-printer"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-default"
                      title="Delete"
                      data-toggle="tooltip"
                      data-placement="top"
                    >
                      <i className="icon-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>04</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div
                        className="avtar-pic w35 bg-green"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Avatar Name"
                      >
                        <span>KG</span>
                      </div>
                      <div className="ml-3">
                        <Link to="/" title="">
                          Kevin Gill
                        </Link>
                        <p className="mb-0">kevin.gill@example.com</p>
                      </div>
                    </div>
                  </td>
                  <td>$451</td>
                  <td>
                    <span className="badge badge-warning  ml-0 mr-0">
                      Panding
                    </span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-sm btn-default"
                      title="Send Invoice"
                      data-toggle="tooltip"
                      data-placement="top"
                    >
                      <i className="icon-envelope"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-default "
                      title="Print"
                      data-toggle="tooltip"
                      data-placement="top"
                    >
                      <i className="icon-printer"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-default"
                      title="Delete"
                      data-toggle="tooltip"
                      data-placement="top"
                    >
                      <i className="icon-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>05</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="../assets/images/xs/avatar5.jpg"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Avatar Name"
                        alt="Avatar"
                        className="w35 h35 rounded"
                      />
                      <div className="ml-3">
                        <Link to="/" title="">
                          Brandon Smith
                        </Link>
                        <p className="mb-0">Maria.gill@example.com</p>
                      </div>
                    </div>
                  </td>
                  <td>$1,989</td>
                  <td>
                    <span className="badge badge-success  ml-0 mr-0">Done</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-sm btn-default"
                      title="Send Invoice"
                      data-toggle="tooltip"
                      data-placement="top"
                    >
                      <i className="icon-envelope"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-default "
                      title="Print"
                      data-toggle="tooltip"
                      data-placement="top"
                    >
                      <i className="icon-printer"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-default"
                      title="Delete"
                      data-toggle="tooltip"
                      data-placement="top"
                    >
                      <i className="icon-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>06</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="../assets/images/xs/avatar6.jpg"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Avatar Name"
                        alt="Avatar"
                        className="w35 h35 rounded"
                      />
                      <div className="ml-3">
                        <Link to="/" title="">
                          Kevin Baker
                        </Link>
                        <p className="mb-0">kevin.baker@example.com</p>
                      </div>
                    </div>
                  </td>
                  <td>$343</td>
                  <td>
                    <span className="badge badge-warning  ml-0 mr-0">
                      Panding
                    </span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-sm btn-default"
                      title="Send Invoice"
                      data-toggle="tooltip"
                      data-placement="top"
                    >
                      <i className="icon-envelope"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-default "
                      title="Print"
                      data-toggle="tooltip"
                      data-placement="top"
                    >
                      <i className="icon-printer"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-default"
                      title="Delete"
                      data-toggle="tooltip"
                      data-placement="top"
                    >
                      <i className="icon-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>07</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="../assets/images/xs/avatar2.jpg"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Avatar Name"
                        alt="Avatar"
                        className="w35 h35 rounded"
                      />
                      <div className="ml-3">
                        <Link to="/" title="">
                          Zoe Baker
                        </Link>
                        <p className="mb-0">zoe.baker@example.com</p>
                      </div>
                    </div>
                  </td>
                  <td>$378</td>
                  <td>
                    <span className="badge badge-success ml-0 mr-0">Done</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-sm btn-default"
                      title="Send Invoice"
                      data-toggle="tooltip"
                      data-placement="top"
                    >
                      <i className="icon-envelope"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-default "
                      title="Print"
                      data-toggle="tooltip"
                      data-placement="top"
                    >
                      <i className="icon-printer"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-default"
                      title="Delete"
                      data-toggle="tooltip"
                      data-placement="top"
                    >
                      <i className="icon-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <Link className="card" to="/">
            <div className="body text-center">
              <img
                className="img-thumbnail rounded-circle"
                src={require("./avatar1.jpg")}
                alt="avatar"
              />
              <h6 className="mt-3">فرشید قلج خانی</h6>
              <div className="text-center text-muted">برنامه نویس وب</div>
            </div>
            <div className="card-footer text-center">
              <div className="row clearfix">
                <div className="col-6">
                  <i className="fa fa-tag font-22"></i>
                  <div>
                    <span className="text-muted">شرکت ادریان سیستم</span>
                  </div>
                </div>
                <div className="col-6">
                  <i className="fa fa-dollar font-22"></i>
                  <div>
                    <span className="text-muted">$ 3.100</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <div className="card">
            <div className="body">
              <div className="card-text">
                <div className="mt-0">
                  <small className="float-right text-muted">10/200 GB</small>
                  <span>Memory</span>
                  <div className="progress progress-xxs">
                    <div
                      style={{ width: "60%" }}
                      className="progress-bar"
                    ></div>
                  </div>
                </div>
                <div className="mt-4">
                  <small className="float-right text-muted">40 MB</small>
                  <span>Bandwidth</span>
                  <div className="progress progress-xxs">
                    <div
                      style={{ width: "50%" }}
                      className="progress-bar"
                    ></div>
                  </div>
                </div>
                <div className="mt-4">
                  <small className="float-right text-muted">73%</small>
                  <span>Activity</span>
                  <div className="progress progress-xxs">
                    <div
                      style={{ width: "40%" }}
                      className="progress-bar"
                    ></div>
                  </div>
                </div>
                <div className="mt-4">
                  <small className="float-right text-muted">400 GB</small>
                  <span>FTP</span>
                  <div className="progress progress-xxs mb-0">
                    <div
                      style={{ width: "80%" }}
                      className="progress-bar bg-danger"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
