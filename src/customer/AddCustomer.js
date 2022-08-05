import React from "react";
import { Link } from "react-router-dom";

function AddCustomer() {
  return (
    <div className="container-fluid">
      <div className="block-header">
        <div className="row clearfix">
          <div className="col-md-6 col-sm-12">
            <h1>ثبت مشتری جدید</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">مشتریان</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/">ثبت مشتری</Link>
                </li>
                {/* <li className="breadcrumb-item active" aria-current="page">
                  Basic Form Elements
                </li> */}
              </ol>
            </nav>
          </div>
          {/* <div className="col-md-6 col-sm-12 text-right hidden-xs">
            <span className="btn btn-sm btn-primary mr-1" title="">
              Create Campaign
            </span>
            <Link
              to="https://themeforest.net/item/oculux-bootstrap-4x-admin-dashboard-clean-modern-ui-kit/23091507"
              className="btn btn-sm btn-success"
              title="Themeforest"
            >
              <i className="icon-basket"></i> Buy Now
            </Link>
          </div> */}
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-lg-12 col-md-12">
          <div className="card">
            <div className="header">
              <h2> ثبت مشتری</h2>
            </div>
            <div className="body">
              <label htmlFor="fullName">نام کامل</label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="form-control"
                  placeholder="نام کامل"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>

              <label htmlFor="phoneNumber"> تلفن</label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-phone"></i>
                  </span>
                </div>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="form-control"
                  placeholder=" تلفن"
                  aria-label="phoneNumber"
                  aria-describedby="basic-addon1"
                />
              </div>
              <label htmlFor="nationalCode"> کد ملی</label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-barcode"></i>
                  </span>
                </div>
                <input
                  type="text"
                  id="nationalCode"
                  name="nationalCode"
                  className="form-control"
                  placeholder=" کدملی"
                  aria-label="nationalCode"
                  aria-describedby="basic-addon1"
                />
              </div>
              <label htmlFor="address"> آدرس </label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-home"></i>
                  </span>
                </div>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="form-control"
                  placeholder=" آدرس"
                  aria-label="address"
                  aria-describedby="basic-addon1"
                />
              </div>
              <label htmlFor="postalCode"> کدپستی </label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-barcode"></i>
                  </span>
                </div>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  className="form-control"
                  placeholder=" کدپستی"
                  aria-label="postalCode"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group">
                <button className="btn btn-outline-success">ذخیره</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCustomer;
