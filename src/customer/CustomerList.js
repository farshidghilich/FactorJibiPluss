import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCustomerListAction } from "../actions/Action";
import Tooltip from "../components/common/toolTip";
// import { getCustomerListAction } from "../../actions/Action";

function CustomerList() {
  const dispatch = useDispatch();
  const { customers, loading, error } = useSelector((state) => state.customers);
  useEffect(() => {
    dispatch(getCustomerListAction());
    // console.log(customers);
  }, [dispatch]);

  return (
    <>
      <div className="container-fluid">
        <div className="block-header">
          <div className="row clearfix">
            <div className="col-md-6 col-sm-12">
              <h2>User List</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Oculux</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/">Pages</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    User List
                  </li>
                </ol>
              </nav>
            </div>
            <div className="col-md-6 col-sm-12 text-right hidden-xs">
              <a href="/" className="btn btn-sm btn-primary btn-round" title="">
                Add New
              </a>
            </div>
          </div>
        </div>
        <div className="row clearfix">
          <div className="col-lg-12">
            <div className="card">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    className="nav-link active show"
                    data-toggle="tab"
                    href="#Users"
                  >
                    Users
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#addUser">
                    Add User
                  </a>
                </li>
              </ul>
              <div className="tab-content mt-0">
                <div className="tab-pane active show" id="Users">
                  <div className="table-responsive">
                    <table className="table table-hover table-custom spacing8">
                      <thead>
                        <tr>
                          <th className="w60">Name</th>
                          <th></th>
                          <th></th>
                          <th>Created Date</th>
                          <th>Role</th>
                          <th className="w100">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="width45">
                            <Tooltip id="avatar1" text="Avatar Name" />
                            <div
                              className="avtar-pic w35 bg-pink"
                              data-tip
                              data-for="avatar1"
                            >
                              <span>MN</span>
                            </div>
                          </td>
                          <td>
                            <h6 className="mb-0">Marshall Nichols</h6>
                            <span>marshall-n@gmail.com</span>
                          </td>
                          <td>
                            <span className="badge badge-danger">
                              Super Admin
                            </span>
                          </td>
                          <td>24 Jun, 2015</td>
                          <td>CEO and Founder</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../assets/images/xs/avatar5.jpg"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              alt="Avatar"
                              className="w35 h35 rounded"
                              data-original-title="Avatar Name"
                            />
                          </td>
                          <td>
                            <h6 className="mb-0">Susie Willis</h6>
                            <span>sussie-w@gmail.com</span>
                          </td>
                          <td>
                            <span className="badge badge-info">Admin</span>
                          </td>
                          <td>28 Jun, 2015</td>
                          <td>Team Lead</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-sm btn-default"
                              title="Edit"
                            >
                              <i className="fa fa-edit"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-default js-sweetalert"
                              title="Delete"
                              data-type="confirm"
                            >
                              <i className="fa fa-trash-o text-danger"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../assets/images/xs/avatar4.jpg"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              alt="Avatar"
                              className="w35 h35 rounded"
                              data-original-title="Avatar Name"
                            />
                          </td>
                          <td>
                            <h6 className="mb-0">Debra Stewart</h6>
                            <span>debra@gmail.com</span>
                          </td>
                          <td>
                            <span className="badge badge-info">Admin</span>
                          </td>
                          <td>21 July, 2015</td>
                          <td>Team Lead</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-sm btn-default"
                              title="Edit"
                            >
                              <i className="fa fa-edit"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-default js-sweetalert"
                              title="Delete"
                              data-type="confirm"
                            >
                              <i className="fa fa-trash-o text-danger"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../assets/images/xs/avatar7.jpg"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              alt="Avatar"
                              className="w35 h35 rounded"
                              data-original-title="Avatar Name"
                            />
                          </td>
                          <td>
                            <h6 className="mb-0">Erin Gonzales</h6>
                            <span>Erinonzales@gmail.com</span>
                          </td>
                          <td>
                            <span className="badge badge-default">
                              Employee
                            </span>
                          </td>
                          <td>21 July, 2015</td>
                          <td>Web Developer</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-sm btn-default"
                              title="Edit"
                            >
                              <i className="fa fa-edit"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-default js-sweetalert"
                              title="Delete"
                              data-type="confirm"
                            >
                              <i className="fa fa-trash-o text-danger"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div
                              className="avtar-pic w35 bg-blue"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="Avatar Name"
                            >
                              <span>MN</span>
                            </div>
                          </td>
                          <td>
                            <h6 className="mb-0">Ava Alexander</h6>
                            <span>alexander@gmail.com</span>
                          </td>
                          <td>
                            <span className="badge badge-success">
                              HR Admin
                            </span>
                          </td>
                          <td>21 July, 2015</td>
                          <td>HR</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-sm btn-default"
                              title="Edit"
                            >
                              <i className="fa fa-edit"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-default js-sweetalert"
                              title="Delete"
                              data-type="confirm"
                            >
                              <i className="fa fa-trash-o text-danger"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="tab-pane" id="addUser">
                  <div className="body mt-2">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name *"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>

                      <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Email ID *"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Confirm Password"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Mobile No"
                          />
                        </div>
                      </div>

                      <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Employee ID *"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username *"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="form-group">
                          <select className="form-control show-tick">
                            <option>Select Role Type</option>
                            <option>Super Admin</option>
                            <option>Admin</option>
                            <option>Employee</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-12">
                        <h6>Module Permission</h6>
                        <div className="table-responsive">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th></th>
                                <th>Read</th>
                                <th>Write</th>
                                <th>Delete</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Super Admin</td>
                                <td>
                                  <label className="fancy-checkbox">
                                    <input
                                      className="checkbox-tick"
                                      type="checkbox"
                                      name="checkbox"
                                      defaultChecked
                                    />
                                    <span></span>
                                  </label>
                                </td>
                                <td>
                                  <label className="fancy-checkbox">
                                    <input
                                      className="checkbox-tick"
                                      type="checkbox"
                                      name="checkbox"
                                      defaultChecked
                                    />
                                    <span></span>
                                  </label>
                                </td>
                                <td>
                                  <label className="fancy-checkbox">
                                    <input
                                      className="checkbox-tick"
                                      type="checkbox"
                                      name="checkbox"
                                      defaultChecked
                                    />
                                    <span></span>
                                  </label>
                                </td>
                              </tr>
                              <tr>
                                <td>Admin</td>
                                <td>
                                  <label className="fancy-checkbox">
                                    <input
                                      className="checkbox-tick"
                                      type="checkbox"
                                      name="checkbox"
                                      defaultChecked
                                    />
                                    <span></span>
                                  </label>
                                </td>
                                <td>
                                  <label className="fancy-checkbox">
                                    <input
                                      className="checkbox-tick"
                                      type="checkbox"
                                      name="checkbox"
                                      defaultChecked
                                    />
                                    <span></span>
                                  </label>
                                </td>
                                <td>
                                  <label className="fancy-checkbox">
                                    <input
                                      className="checkbox-tick"
                                      type="checkbox"
                                      name="checkbox"
                                    />
                                    <span></span>
                                  </label>
                                </td>
                              </tr>
                              <tr>
                                <td>Employee</td>
                                <td>
                                  <label className="fancy-checkbox">
                                    <input
                                      className="checkbox-tick"
                                      type="checkbox"
                                      name="checkbox"
                                      defaultChecked
                                    />
                                    <span></span>
                                  </label>
                                </td>
                                <td>
                                  <label className="fancy-checkbox">
                                    <input
                                      className="checkbox-tick"
                                      type="checkbox"
                                      name="checkbox"
                                    />
                                    <span></span>
                                  </label>
                                </td>
                                <td>
                                  <label className="fancy-checkbox">
                                    <input
                                      className="checkbox-tick"
                                      type="checkbox"
                                      name="checkbox"
                                    />
                                    <span></span>
                                  </label>
                                </td>
                              </tr>
                              <tr>
                                <td>HR Admin</td>
                                <td>
                                  <label className="fancy-checkbox">
                                    <input
                                      className="checkbox-tick"
                                      type="checkbox"
                                      name="checkbox"
                                      defaultChecked
                                    />
                                    <span></span>
                                  </label>
                                </td>
                                <td>
                                  <label className="fancy-checkbox">
                                    <input
                                      className="checkbox-tick"
                                      type="checkbox"
                                      name="checkbox"
                                      defaultChecked
                                    />
                                    <span></span>
                                  </label>
                                </td>
                                <td>
                                  <label className="fancy-checkbox">
                                    <input
                                      className="checkbox-tick"
                                      type="checkbox"
                                      name="checkbox"
                                    />
                                    <span></span>
                                  </label>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <button type="button" className="btn btn-primary">
                          Add
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          CLOSE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CustomerList;
