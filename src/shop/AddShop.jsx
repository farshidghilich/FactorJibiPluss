import React from "react";
import { Link } from "react-router-dom";

function AddShop() {
  return (
    <div className="container-fluid">
      <div className="block-header">
        <div className="row clearfix">
          <div className="col-md-6 col-sm-12">
            <h1>ثبت محصول جدید</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">ثبت فروشگاه</Link>
                </li>
                <li className="breadcrumb-item">
                  {/* <Link to="/">محصول جدید </Link> */}
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
              <h2> ثبت فروشگاه</h2>
            </div>
            <div className="body">
              <label htmlFor="fullName">نام فروشگاه</label>
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
                  placeholder="نام فروشگاه"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>

              <label htmlFor="phoneNumber"> آدرس</label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-usd"></i>
                  </span>
                </div>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="form-control"
                  placeholder=" آدرس فروشگاه"
                  aria-label="phoneNumber"
                  aria-describedby="basic-addon1"
                />
              </div>
              <label htmlFor="nationalCode"> کد فوشگاه</label>
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
                  placeholder=" کد فروشگاه"
                  aria-label="nationalCode"
                  aria-describedby="basic-addon1"
                />
              </div>
              <label htmlFor="address"> نوع فروشگاه </label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-text"></i>
                  </span>
                </div>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="form-control"
                  placeholder=" نوع فروشگاه"
                  aria-label="address"
                  aria-describedby="basic-addon1"
                />
              </div>
              <label htmlFor="sale"> نحوه فروش</label>

              <div className="input-group mb-3">
                <select className="custom-select" id="sale">
                  <option defaultValue>نحوه فروش...</option>
                  <option defaultValue="1">نقدی</option>
                  <option defaultValue="2">انلاین</option>
                  <option defaultValue="3">غیر قابل فروش</option>
                </select>
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

export default AddShop;
