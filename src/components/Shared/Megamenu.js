import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMegamenu } from "../../actions/settingsAction";

const Megamenu = ({ toggleMegamenu, isMegaMenu }) => {
  return (
    <>
      <div
        id="megamenu"
        className={`megamenu particles_js ${isMegaMenu ? " open" : ""}`}
      >
        <span
          onClick={() => toggleMegamenu(!isMegaMenu)}
          className="megamenu_toggle btn btn-danger"
        >
          <i className="icon-close"></i>
        </span>
        <div className="container">
          <div className="row clearfix">
            <div className="col-12">
              <ul className="q_links">
                <li onClick={() => toggleMegamenu(!isMegaMenu)}>
                  <Link to="/app-inbox">
                    <i className="icon-envelope"></i>
                    <span>پیام ها</span>
                  </Link>
                </li>
                <li onClick={() => toggleMegamenu(!isMegaMenu)}>
                  <Link to="/app-chat">
                    <i className="icon-bubbles"></i>
                    <span>پشتیبانی</span>
                  </Link>
                </li>
                <li onClick={() => toggleMegamenu(!isMegaMenu)}>
                  <Link to="/app-calendar">
                    <i className="icon-calendar"></i>
                    <span>رویداد</span>
                  </Link>
                </li>
                <li onClick={() => toggleMegamenu(!isMegaMenu)}>
                  <Link to="/page-profile">
                    <i className="icon-user"></i>
                    <span>صفحه شخصی</span>
                  </Link>
                </li>
                <li onClick={() => toggleMegamenu(!isMegaMenu)}>
                  <Link to="/page-invoices">
                    <i className="icon-printer"></i>
                    <span>صدور فاکتور</span>
                  </Link>
                </li>
                <li onClick={() => toggleMegamenu(!isMegaMenu)}>
                  <Link to="/page-timeline">
                    <i className="icon-list"></i>
                    <span>گزارش روزانه</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card w_card3">
                <div className="body">
                  <div className="text-center">
                    <i className="fa fa-file text-info"></i>
                    <h4 className="m-t-25 mb-0">۱۰۹فاکتور صادددر شده</h4>

                    <a href="/" className="btn btn-info btn-round">
                      مشاهده
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card w_card3">
                <div className="body">
                  <div className="text-center">
                    <i className="icon-diamond text-success"></i>
                    <h4 className="m-t-25 mb-0">ثبت فاکتور</h4>
                    <a href="/" className="btn btn-success btn-round">
                      ثبت فاکتور
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card w_card3">
                <div className="body">
                  <div className="text-center">
                    <i className="icon-users text-primary"></i>
                    <h4 className="m-t-25 mb-0">3,756</h4>
                    <p>مشتریان ثبت شده</p>
                    <a href="/" className="btn btn-primary btn-round">
                      گزارش{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="particles-js"></div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isMegaMenu: state.settings.isMegaMenu,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMegamenu: (e) => dispatch(toggleMegamenu(e)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Megamenu);
