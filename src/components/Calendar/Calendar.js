import React from 'react';
import { Link } from 'react-router-dom';
import Fullcalender from '../common/fullcalender';

const Messenger = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h2>Calendar</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="#">Oculux</Link></li>
                                    <li className="breadcrumb-item"><Link to="/">App</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Calendar</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6 col-sm-12 text-right hidden-xs">
                            <button className="btn btn-sm btn-primary btn-round" title="" data-toggle="modal" data-target="#addevent">Add New Event</button>
                        </div>
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-12">
                        <div className="card c_grid c_pink">
                            <div className="body text-center">
                                <div className="circle">
                                    <img className="rounded-circle" src="../assets/images/sm/avatar3.jpg" alt="avatar" />
                                </div>
                                <h6 className="mt-3 mb-0">David Wallace</h6>
                                <span>Michelle@info.com</span>
                                <ul className="mt-3 list-unstyled d-flex justify-content-center">
                                    <li><Link className="p-3"  to="/"><i className="fa fa-twitter"></i></Link></li>
                                    <li><Link className="p-3"  to="/"><i className="fa fa-dribbble"></i></Link></li>
                                    <li><Link className="p-3"  to="/"><i className="fa fa-slack"></i></Link></li>
                                    <li><Link className="p-3"  to="/"><i className="fa fa-linkedin"></i></Link></li>
                                </ul>
                                <button className="btn btn-default btn-sm mr-1">Follow</button>
                                <button className="btn btn-default btn-sm">Message</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="body">
                                <table className="table table-calendar mb-0">
                                    <tbody>
                                        <tr>
                                            <th>Mo</th>
                                            <th>Tu</th>
                                            <th>We</th>
                                            <th>Th</th>
                                            <th>Fr</th>
                                            <th>Sa</th>
                                            <th>Su</th>
                                        </tr>
                                        <tr>
                                            <td className="text-muted">27</td>
                                            <td className="text-muted">28</td>
                                            <td className="text-muted">29</td>
                                            <td className="text-muted">30</td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td><Link to="/" className="table-calendar-link" title="Meeting" data-toggle="tooltip">4</Link></td>
                                            <td>5</td>
                                            <td><Link to="/" className="table-calendar-link" title="Event" data-toggle="tooltip">6</Link></td>
                                            <td>7</td>
                                            <td>8</td>
                                            <td>9</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>11</td>
                                            <td><Link to="/" className="table-calendar-link" title="Outing with Friends" data-toggle="tooltip">12</Link></td>
                                            <td>13</td>
                                            <td>14</td>
                                            <td><Link to="/">15</Link></td>
                                            <td>16</td>
                                            <td>17</td>
                                        </tr>
                                        <tr>
                                            <td>18</td>
                                            <td><Link to="/" className="table-calendar-link" title="Product Event" data-toggle="tooltip">19</Link></td>
                                            <td><Link to="/" className="table-calendar-link" title="Meeting" data-toggle="tooltip">20</Link></td>
                                            <td>21</td>
                                            <td>22</td>
                                            <td>23</td>
                                            <td>24</td>
                                        </tr>
                                        <tr>
                                            <td>25</td>
                                            <td>26</td>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                            <td>30</td>
                                            <td className="text-muted">1</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card">
                            <div className="header">
                                <h2>Todo List</h2>
                            </div>
                            <div className="body">
                                <ul className="todo_list list-unstyled">
                                    <li>
                                        <label className="fancy-checkbox">
                                            <input type="checkbox" name="checkbox" defaultChecked />
                                            <span>Product Event at New York</span>
                                        </label>
                                        <Link to="/" className="todo-delete"><i className="icon-trash"></i></Link>
                                    </li>
                                    <li>
                                        <label className="fancy-checkbox">
                                            <input type="checkbox" name="checkbox" defaultChecked />
                                            <span>Meeting with Team</span>
                                        </label>
                                        <Link to="/" className="todo-delete"><i className="icon-trash"></i></Link>
                                    </li>
                                    <li>
                                        <label className="fancy-checkbox">
                                            <input type="checkbox" name="checkbox" />
                                            <span>Product Event for new product</span>
                                        </label>
                                        <Link to="/" className="todo-delete"><i className="icon-trash"></i></Link>
                                    </li>
                                    <li>
                                        <label className="fancy-checkbox">
                                            <input type="checkbox" name="checkbox" defaultChecked />
                                            <span>Lunch friends in Sunday</span>
                                        </label>
                                        <Link to="/" className="todo-delete"><i className="icon-trash"></i></Link>
                                    </li>
                                    <li>
                                        <label className="fancy-checkbox">
                                            <input type="checkbox" name="checkbox" />
                                            <span>Meeting with Team</span>
                                        </label>
                                        <Link to="/" className="todo-delete"><i className="icon-trash"></i></Link>
                                    </li>
                                    <li>
                                        <label className="fancy-checkbox">
                                            <input type="checkbox" name="checkbox" />
                                            <span>Product Event for new product</span>
                                        </label>
                                        <Link to="/" className="todo-delete"><i className="icon-trash"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="card">
                            <div className="body">
                                <div id="calendar">
                                    <Fullcalender />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Messenger
