import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ForgotPassword extends Component {
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
                فاکتور جیبی
              </Link>
            </div>
            <div className="card forgot-pass">
              <div className="body">
                <p className="lead mb-3">
                  <strong>فراموشی رمز عبور </strong>
                  <br />{" "}
                </p>
                <p>ایمیل خود را جهت بازیابی رمز عبور وارد کنید...</p>
                <form className="form-auth-small" action="">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control round"
                      id="signup-email"
                      placeholder="ایمیل"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-round btn-primary btn-lg btn-block"
                  >
                    ارسال رمز عبور
                  </button>
                  <div className="bottom">
                    <span className="helper-text">
                      رمز عبور خود را بیاد دارید ؟ <Link to="/login">ورود</Link>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div id="particles-js"></div>
        </div>
      </>
    );
  }
}
