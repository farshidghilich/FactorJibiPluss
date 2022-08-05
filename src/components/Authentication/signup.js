import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SignUp extends Component {
  render() {
    return (
      <>
        <div class="pattern">
          <span class="red"></span>
          <span class="indigo"></span>
          <span class="blue"></span>
          <span class="green"></span>
          <span class="orange"></span>
        </div>
        <div className="auth-main particles_js">
          <div className="auth_div vivify popIn">
            <div className="auth_brand">
              <Link className="navbar-brand" to="/">
                <img
                  src="../assets/images/icon.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top mr-2"
                  alt="Logo"
                />
                به فاکتور جیبی خوش آمدید
              </Link>
            </div>
            <div className="card">
              <div className="body">
                <p className="lead">ایجاد حساب کاربری</p>
                <form className="form-auth-small m-t-20">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control round"
                      placeholder="ایمیل خود را وارد کنید"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control round"
                      placeholder="گذرواژه خود را وارد کنید"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-round btn-block"
                  >
                    ثبت نام
                  </button>
                </form>
                <div className="separator-linethrough">
                  <span>روش های دیگر</span>
                </div>
                <button className="btn btn-round btn-signin-social">
                  <i className="fa fa-google-plus-square google-color"></i> ورود
                  با گوگل
                </button>
                <button className="btn btn-round btn-signin-social">
                  <i className="fa fa-phone phone-color"></i> تماس با پشتیبانی
                </button>
              </div>
            </div>
          </div>
          <div id="particles-js"></div>
        </div>
      </>
    );
  }
}
