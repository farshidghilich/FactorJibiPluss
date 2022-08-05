import React from "react";
import { connect } from "react-redux";
import { toggleNotificationBar } from "../../actions/settingsAction";

const Rightbar = ({ isNotificationbar, toggleNotificationBar }) => {
  return (
    <>
      <div
        id="rightbar"
        className={`rightbar${isNotificationbar ? " open" : ""}`}
      >
        <div className="body">
          <ul className="nav nav-tabs2">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#Chat-one">
                گفتگو
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#Chat-list">
                List
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#Chat-groups">
                Groups
              </a>
            </li>
            <span
              onClick={() => toggleNotificationBar(false)}
              className="search_toggle btn btn-danger"
            >
              <i className="icon-close"></i>
            </span>
          </ul>
          <hr />
          <div className="tab-content">
            <div
              className="tab-pane vivify fadeIn delay-100 active"
              id="Chat-one"
            >
              <div className="chat_detail">
                <ul className="chat-widget clearfix">
                  <li className="left float-left">
                    <div className="avtar-pic w35 bg-pink">
                      <span>KG</span>
                    </div>
                    <div className="chat-info">
                      <span className="message">
                        Hello, John
                        <br />
                        What is the update on Project X?
                      </span>
                    </div>
                  </li>
                  <li className="right">
                    <img
                      src="../assets/images/xs/avatar1.jpg"
                      className="rounded"
                      alt="avatar"
                    />
                    <div className="chat-info">
                      <span className="message">
                        Hi, Alizee
                        <br /> It is almost completed. I will send you an email
                        later today.
                      </span>
                    </div>
                  </li>
                  <li className="left float-left">
                    <div className="avtar-pic w35 bg-pink">
                      <span>KG</span>
                    </div>
                    <div className="chat-info">
                      <span className="message">
                        That's great. Will catch you in evening.
                      </span>
                    </div>
                  </li>
                  <li className="right">
                    <img
                      src="../assets/images/xs/avatar1.jpg"
                      className="rounded"
                      alt="avatar"
                    />
                    <div className="chat-info">
                      <span className="message">
                        Sure we'will have a blast today.
                      </span>
                    </div>
                  </li>
                </ul>
                <div className="input-group mb-0">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <a href="/" className="">
                        <i className="icon-camera text-warning"></i>
                      </a>
                    </span>
                  </div>
                  <textarea
                    type="text"
                    row=""
                    className="form-control"
                    placeholder="Enter text here..."
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="tab-pane vvivify fadeIn delay-100" id="Chat-list">
              <ul className="right_chat list-unstyled mb-0">
                <li className="offline">
                  <a href="/">
                    <div className="media">
                      <div className="avtar-pic w35 bg-red">
                        <span>FC</span>
                      </div>
                      <div className="media-body">
                        <span className="name">Folisise Chosielie</span>
                        <span className="message">offline</span>
                        <span className="badge badge-outline status"></span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="online">
                  <a href="/">
                    <div className="media">
                      <img
                        className="media-object "
                        src="../assets/images/xs/avatar3.jpg"
                        alt="avatar"
                      />
                      <div className="media-body">
                        <span className="name">Marshall Nichols</span>
                        <span className="message">online</span>
                        <span className="badge badge-outline status"></span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="online">
                  <a href="/">
                    <div className="media">
                      <div className="avtar-pic w35 bg-red">
                        <span>FC</span>
                      </div>
                      <div className="media-body">
                        <span className="name">Louis Henry</span>
                        <span className="message">online</span>
                        <span className="badge badge-outline status"></span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="online">
                  <a href="/">
                    <div className="media">
                      <div className="avtar-pic w35 bg-orange">
                        <span>DS</span>
                      </div>
                      <div className="media-body">
                        <span className="name">Debra Stewart</span>
                        <span className="message">online</span>
                        <span className="badge badge-outline status"></span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="offline">
                  <a href="/">
                    <div className="media">
                      <div className="avtar-pic w35 bg-green">
                        <span>SW</span>
                      </div>
                      <div className="media-body">
                        <span className="name">Lisa Garett</span>
                        <span className="message">offline since May 12</span>
                        <span className="badge badge-outline status"></span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="online">
                  <a href="/">
                    <div className="media">
                      <img
                        className="media-object "
                        src="../assets/images/xs/avatar5.jpg"
                        alt="avatar"
                      />
                      <div className="media-body">
                        <span className="name">Debra Stewart</span>
                        <span className="message">online</span>
                        <span className="badge badge-outline status"></span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="offline">
                  <a href="/">
                    <div className="media">
                      <img
                        className="media-object "
                        src="../assets/images/xs/avatar2.jpg"
                        alt="avatar"
                      />
                      <div className="media-body">
                        <span className="name">Lisa Garett</span>
                        <span className="message">offline since Jan 18</span>
                        <span className="badge badge-outline status"></span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="online">
                  <a href="/">
                    <div className="media">
                      <div className="avtar-pic w35 bg-indigo">
                        <span>FC</span>
                      </div>
                      <div className="media-body">
                        <span className="name">Louis Henry</span>
                        <span className="message">online</span>
                        <span className="badge badge-outline status"></span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="online">
                  <a href="/">
                    <div className="media">
                      <div className="avtar-pic w35 bg-pink">
                        <span>DS</span>
                      </div>
                      <div className="media-body">
                        <span className="name">Debra Stewart</span>
                        <span className="message">online</span>
                        <span className="badge badge-outline status"></span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="offline">
                  <a href="/">
                    <div className="media">
                      <div className="avtar-pic w35 bg-info">
                        <span>SW</span>
                      </div>
                      <div className="media-body">
                        <span className="name">Lisa Garett</span>
                        <span className="message">offline since May 12</span>
                        <span className="badge badge-outline status"></span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-pane vivify fadeIn delay-100" id="Chat-groups">
              <ul className="right_chat list-unstyled mb-0">
                <li className="offline">
                  <a href="/">
                    <div className="media">
                      <div className="avtar-pic w35 bg-cyan">
                        <span>DT</span>
                      </div>
                      <div className="media-body">
                        <span className="name">Designer Team</span>
                        <span className="message">offline</span>
                        <span className="badge badge-outline status"></span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="online">
                  <a href="/">
                    <div className="media">
                      <div className="avtar-pic w35 bg-azura">
                        <span>SG</span>
                      </div>
                      <div className="media-body">
                        <span className="name">Sale Groups</span>
                        <span className="message">online</span>
                        <span className="badge badge-outline status"></span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="online">
                  <a href="/">
                    <div className="media">
                      <div className="avtar-pic w35 bg-orange">
                        <span>NF</span>
                      </div>
                      <div className="media-body">
                        <span className="name">New Fresher</span>
                        <span className="message">online</span>
                        <span className="badge badge-outline status"></span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="offline">
                  <a href="/">
                    <div className="media">
                      <div className="avtar-pic w35 bg-indigo">
                        <span>PL</span>
                      </div>
                      <div className="media-body">
                        <span className="name">Project Lead</span>
                        <span className="message">offline since May 12</span>
                        <span className="badge badge-outline status"></span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isNotificationbar: state.settings.isNotificationbar,
});

const mapDispatchToProps = (dispatch) => ({
  toggleNotificationBar: (e) => dispatch(toggleNotificationBar(e)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Rightbar);
