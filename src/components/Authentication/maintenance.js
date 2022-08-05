import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Maintenance extends Component {
  render() {
    return (
      <div id="wrapper">
        <div className="vertical-align-wrap">
          <div className="vertical-align-middle maintenance">
            <div className="text-center">
              <article>
                <h1>اپلیکیشن در حال بروز رسانی میباشد</h1>
                <div>
                  <p>
                    از صبر و شکیبایی شما ممنونیم <br /> لطفا دقایقی دیگر وارد
                    شوید.
                    <br /> اگر به پشتیبانی نیاز دارید{" "}
                    <Link to="/">پشتیبانی</Link>, در غیر این صورت ما بزودی
                    بازخواهیم گشت!
                  </p>
                  <p>شرکت آدریان سامنه نوین</p>
                </div>
              </article>
              <div className="margin-top-30">
                <Link to="/" className="mr-1 btn btn-default">
                  <i className="fa fa-arrow-left"></i>
                  <span>بازگشت</span>
                </Link>
                <Link to="/" className="btn btn-info">
                  <i className="fa fa-home"></i>
                  <span>صفحه اصلی</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
