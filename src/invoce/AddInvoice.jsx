import React from "react";
import { Link } from "react-router-dom";

function AddInvoice() {
  return (
    <div className="container-fluid">
      <div className="block-header">
        <div className="row clearfix">
          <div className="col-md-6 col-sm-12">
            <h1>ثبت محصول جدید</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">ثبت محصولات</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/">محصول جدید </Link>
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
              <h2> ثبت مجصول</h2>
            </div>
            <div className="body">
              <div className="col-lg-4 col-md-12">
                <label htmlFor="sale"> مشتری</label>

                <div className="input-group mb-3">
                  <select className="custom-select" id="sale">
                    <option defaultValue> مشتری</option>
                    <option defaultValue="1">فرشید قلج خانی</option>
                    <option defaultValue="2">محمد پارسانیک</option>
                    <option defaultValue="3"> محمد خانی </option>
                  </select>
                </div>
              </div>
              <label htmlFor="phoneNumber"> شماره فاکتور</label>
              <div className="col-lg-4 col-md-12">
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-shopping-cart"></i>
                      </span>
                    </div>
                    <input
                      data-provide="datepicker"
                      data-date-autoclose="true"
                      className="form-control"
                      placeholder="شماره فاکتور"
                    />
                  </div>
                </div>
              </div>
              <label htmlFor="nationalCode"> تاریخ </label>
              <div className="col-lg-4 col-md-12">
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="icon-calendar"></i>
                      </span>
                    </div>
                    <input
                      data-provide="datepicker"
                      data-date-autoclose="true"
                      className="form-control"
                      placeholder="تاریخ  "
                    />
                  </div>
                </div>
              </div>{" "}
              <label htmlFor="nationalCode"> تاریخ سررسید </label>
              <div className="col-lg-4 col-md-12">
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="icon-calendar"></i>
                      </span>
                    </div>
                    <input
                      data-provide="datepicker"
                      data-date-autoclose="true"
                      className="form-control"
                      placeholder="تاریخ سررسید "
                    />
                  </div>
                </div>
              </div>
              <label htmlFor="address"> عنوان</label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  {/* <span className="input-group-text">
                    <i className="fa fa-text"></i>
                  </span> */}
                </div>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="form-control"
                  // placeholder=" نوع محصول"
                  aria-label="address"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="col-lg-12">
                <div className="card">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>شرح کالا</th>
                          <th>تعداد</th>
                          <th>قیمت یک واحد</th>
                          <th>تخفیف</th>
                          <th>مالیات</th>
                          <th>مبلغ کل</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <input
                              placeholder="شرح کالا"
                              style={{
                                backgroundColor: "inherit",
                                border: "none",
                                padding: "15px",
                                width: "100%",
                                color: "white",
                                //      fontSize: "19px",s
                              }}
                            />
                          </td>
                          <td>
                            <input
                              placeholder="تعداد"
                              style={{
                                backgroundColor: "inherit",
                                border: "none",
                                padding: "15px",
                                width: "100%",
                                color: "white",
                                //      fontSize: "19px",
                              }}
                            />
                          </td>
                          <td>
                            <input
                              placeholder="قیمت یک واحد"
                              style={{
                                backgroundColor: "inherit",
                                border: "none",
                                padding: "15px",
                                width: "100%",
                                color: "white",
                                fontSize: "19px",
                              }}
                            />
                          </td>
                          <td>
                            <input
                              placeholder="تخفیف"
                              style={{
                                backgroundColor: "inherit",
                                border: "none",
                                padding: "15px",
                                width: "100%",
                                color: "white",
                                fontSize: "19px",
                              }}
                            />
                          </td>
                          <td>
                            <input
                              placeholder="مالیات"
                              style={{
                                backgroundColor: "inherit",
                                border: "none",
                                padding: "15px",
                                width: "100%",
                                color: "white",
                                fontSize: "19px",
                              }}
                            />
                          </td>
                          <td>
                            <input
                              placeholder="مبلغ کل"
                              style={{
                                backgroundColor: "inherit",
                                border: "none",
                                padding: "15px",
                                width: "100%",
                                color: "white",
                                fontSize: "19px",
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Larry</td>
                          <td>Jellybean</td>
                          <td>@lajelly</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Larry</td>
                          <td>Kikat</td>
                          <td>@lakitkat</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* <div className="input-group">
                <button className="btn btn-outline-success">ذخیره</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddInvoice;
