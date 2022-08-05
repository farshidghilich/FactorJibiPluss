import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  toggleMegamenu,
  toggleSearchBar,
  toggleNotificationBar,
  setOffcanvas,
} from "../../actions/settingsAction";

const Header = ({
  toggleMegamenu,
  isMegaMenu,
  toggleNotificationBar,
  toggleSearchBar,
  setOffcanvas,
  offcanvas,
}) => {
  const [scrolled, setScrolled] = useState(0);
  const scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolleda = `${(scrollPx / winHeightPx) * 100}%`;
    setScrolled(scrolleda);
  };
  window.addEventListener("scroll", scrollProgress);

  const progressContainerStyle = {
    background: "#f8bbd0",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    height: "2px",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    zIndex: 99,
  };

  const progressBarStyle = {
    // height: "2px",
    // background: "#e91e63",
    width: scrolled,
  };
  console.log(scrolled, "nbnvhffhfgh");
  return (
    <>
      <nav className="navbar top-navbar">
        <div className="container-fluid">
          <div className="navbar-left">
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <span
                  className="dropdown-toggle icon-menu"
                  data-toggle="dropdown"
                >
                  <i className="icon-envelope"></i>
                  <span className="notification-dot bg-green">4</span>
                </span>
                <ul className="dropdown-menu right_chat email vivify fadeIn">
                  <li className="header green">شما 5پیام خانده نشده دارید</li>
                  <li>
                    <Link to="/">
                      <div className="media">
                        <div className="avtar-pic w35 bg-red">
                          <span>FC</span>
                        </div>
                        <div className="media-body">
                          <span className="name">
                            محمد پارسانیک{" "}
                            <small className="float-right text-muted">
                              اکنون
                            </small>
                          </span>
                          <span className="message">بروز رسانی گیت</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <a href="/">
                      <div className="media">
                        <div className="avtar-pic w35 bg-indigo">
                          <span>FC</span>
                        </div>
                        <div className="media-body">
                          <span className="name">
                            فرشید{" "}
                            <small className="float-right text-muted">
                              12min ago
                            </small>
                          </span>
                          <span className="message">پیام جدید</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <div className="media">
                        <img
                          className="media-object "
                          src="../assets/images/xs/avatar5.jpg"
                          alt="avatar"
                        />
                        <div className="media-body">
                          <span className="name">
                            محمد خانی
                            <small className="float-right text-muted">
                              38min ago
                            </small>
                          </span>
                          <span className="message">Design bug fix</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <div className="media mb-0">
                        <img
                          className="media-object "
                          src="../assets/images/xs/avatar2.jpg"
                          alt="avatar"
                        />
                        <div className="media-body">
                          <span className="name">
                            پرورش
                            <small className="float-right text-muted">
                              2hr ago
                            </small>
                          </span>
                          <span className="message">Fix Bug</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <span
                  className="dropdown-toggle icon-menu"
                  data-toggle="dropdown"
                >
                  <i className="icon-bell"></i>
                  <span className="notification-dot bg-azura">4</span>
                </span>
                <ul className="dropdown-menu feeds_widget vivify fadeIn">
                  <li className="header blue">4 اعلان </li>
                  <li>
                    <a href="/">
                      <div className="feeds-left bg-red">
                        <i className="fa fa-check"></i>
                      </div>
                      <div className="feeds-body">
                        <h4 className="title text-danger">
                          کامبیز کامرانی{" "}
                          <small className="float-right text-muted">
                            9:10 AM
                          </small>
                        </h4>
                        <small>وروژه تکمیل شده</small>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <div className="feeds-left bg-info">
                        <i className="fa fa-user"></i>
                      </div>
                      <div className="feeds-body">
                        <h4 className="title text-info">
                          کاربر جدید
                          <small className="float-right text-muted">
                            9:15 AM
                          </small>
                        </h4>
                        <small>I feel great! Thanks team</small>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <div className="feeds-left bg-orange">
                        <i className="fa fa-question-circle"></i>
                      </div>
                      <div className="feeds-body">
                        <h4 className="title text-warning">
                          Server Warning{" "}
                          <small className="float-right text-muted">
                            9:17 AM
                          </small>
                        </h4>
                        <small>Your connection is not private</small>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <div className="feeds-left bg-green">
                        <i className="fa fa-thumbs-o-up"></i>
                      </div>
                      <div className="feeds-body">
                        <h4 className="title text-success">
                          2 New Feedback{" "}
                          <small className="float-right text-muted">
                            9:22 AM
                          </small>
                        </h4>
                        <small>
                          It will give a smart finishing to your site
                        </small>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>

              <li style={{ cursor: "pointer" }}>
                <span
                  onClick={() => toggleMegamenu(!isMegaMenu)}
                  className={`megamenu_toggle icon-menu`}
                  title="منو"
                >
                  منو سریع{" "}
                </span>
              </li>
              <li className="p_social">
                <Link to="/" className="social icon-menu" title="News">
                  شبکه های اجتماعی
                </Link>
              </li>
              <li className="p_news">
                <Link to="/" className="news icon-menu" title="News">
                  اخبار
                </Link>
              </li>
            </ul>
          </div>

          <div className="navbar-right">
            <div id="navbar-menu">
              <ul className="nav navbar-nav">
                <li>
                  <span
                    onClick={() => toggleSearchBar(true)}
                    className="search_toggle icon-menu"
                    title="Search Result"
                  >
                    <i className="icon-magnifier"></i>
                  </span>
                </li>
                <li>
                  <span
                    onClick={() => toggleNotificationBar(true)}
                    className="right_toggle icon-menu"
                    title="Right Menu"
                  >
                    <i className="icon-bubbles"></i>
                    <span className="notification-dot bg-pink">2</span>
                  </span>
                </li>
                <li>
                  <Link to="/login" className="icon-menu">
                    <i className="icon-power"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="progress-container">
          <div
            style={progressBarStyle}
            className="progress-bar"
            id="myBar"
          ></div>
        </div>
      </nav>
    </>
  );
};

const mapStateToProps = (state) => ({
  isMegaMenu: state.settings.isMegaMenu,
  offcanvas: state.settings.offcanvas,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMegamenu: (e) => dispatch(toggleMegamenu(e)),
  toggleSearchBar: (e) => dispatch(toggleSearchBar(e)),
  toggleNotificationBar: (e) => dispatch(toggleNotificationBar(e)),
  setOffcanvas: (e) => dispatch(setOffcanvas(e)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
