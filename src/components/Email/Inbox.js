import React from 'react';
import { Link } from 'react-router-dom';

const Inbox = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h2>Inbox</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                                    <li className="breadcrumb-item"><Link to="/">App</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Inbox</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6 col-sm-12 text-right hidden-xs">
                            <Link to="/" className="btn btn-sm btn-primary btn-round" title="">Add New</Link>
                        </div>
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="mail-inbox">
                                <div className="mobile-left">
                                    <Link to="/" className="btn btn-primary toggle-email-nav"><i className="fa fa-bars"></i></Link>
                                </div>
                                <div className="body mail-left">
                                    <div className="mail-compose m-b-20">
                                        <Link to="/app-compose" className="btn btn-danger btn-block btn-round">Compose</Link>
                                    </div>
                                    <div className="mail-side">
                                        <ul className="nav">
                                            <li className="active"><Link to="/app-inbox"><i className="icon-drawer"></i>Inbox<span className="badge badge-primary float-right">6</span></Link></li>
                                            <li><Link to="/"><i className="icon-cursor"></i>Sent<span className="badge badge-warning float-right">6</span></Link></li>
                                            <li><Link to="/"><i className="icon-envelope-open"></i>Draft</Link></li>
                                            <li><Link to="/"><i className="icon-action-redo"></i>Outbox</Link></li>
                                            <li><Link to="/"><i className="icon-trash"></i>Trash</Link></li>
                                        </ul>
                                        <h3 className="label">Labels</h3>
                                        <ul className="nav">
                                            <li><Link to="/"><i className="fa fa-circle-o text-danger"></i>Workshop</Link></li>
                                            <li><Link to="/"><i className="fa fa-circle-o text-info"></i>Private</Link></li>
                                            <li><Link to="/"><i className="fa fa-circle-o text-dark"></i>Paypal</Link></li>
                                            <li><Link to="/"><i className="fa fa-circle-o text-primary"></i>Comapny</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="body mail-right check-all-parent">

                                    <div className="mail-action clearfix m-l-15">
                                        <div className="pull-left">
                                            <div className="fancy-checkbox d-inline-block">
                                                <label>
                                                    <input className="check-all" type="checkbox" name="checkbox" />
                                                    <span></span>
                                                </label>
                                            </div>
                                            <Link to="/" className="btn btn-danger btn-sm mr-1"><i className="icon-trash"></i></Link>
                                            <Link to="/" className="btn btn-light btn-sm hidden-sm mr-1"><i className="icon-refresh"></i></Link>
                                            <div className="btn-group mr-1">
                                                <button className="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="icon-tag"></i></button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="/">Tag 1</a>
                                                    <a className="dropdown-item" href="/">Tag 2</a>
                                                    <a className="dropdown-item" href="/">Tag 3</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pull-right ml-auto">
                                            <div className="pagination-email d-flex">
                                                <p>1-50/295</p>
                                                <div className="btn-group m-l-20">
                                                    <button type="button" className="btn btn-default btn-sm"><i className="fa fa-angle-left"></i></button>
                                                    <button type="button" className="btn btn-default btn-sm"><i className="fa fa-angle-right"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mail-list">
                                        <ul className="list-unstyled">
                                            <li className="clearfix">
                                                <div className="md-left">
                                                    <label className="fancy-checkbox">
                                                        <input type="checkbox" name="checkbox" className="checkbox-tick" />
                                                        <span></span>
                                                    </label>
                                                    <a href="/" className="mail-star active"><i className="fa fa-star"></i></a>
                                                </div>
                                                <div className="md-right">
                                                    <img className="rounded" src="../assets/images/xs/avatar1.jpg" alt="avatar" />
                                                    <p className="sub"><Link to="/app-inbox-detail" className="mail-detail-expand">Michael Bradley</Link></p>
                                                    <p className="dep"><span className="m-r-10">[ThemeForest]</span>Lorem Ipsum is simply dumm dummy text of the printing and typesetting industry.</p>
                                                    <span className="time">23 Jun</span>
                                                </div>
                                            </li>
                                            <li className="clearfix">
                                                <div className="md-left">
                                                    <label className="fancy-checkbox">
                                                        <input type="checkbox" name="checkbox" className="checkbox-tick" />
                                                        <span></span>
                                                    </label>
                                                    <Link to="/" className="mail-star"><i className="fa fa-star"></i></Link>
                                                </div>
                                                <div className="md-right">
                                                    <img className="rounded" src="../assets/images/xs/avatar2.jpg" alt="avatar" />
                                                    <p className="sub"><Link to="/app-inbox-detail" className="mail-detail-expand">Megan Duncan</Link></p>
                                                    <p className="dep"><span className="m-r-10">[Support]</span>There are many variations of passages of Lorem Ipsum available, but the majority</p>
                                                    <span className="time"><i className="fa fa-paperclip"></i> 22 Jun</span>
                                                </div>
                                            </li>
                                            <li className="clearfix unread">
                                                <div className="md-left">
                                                    <label className="fancy-checkbox">
                                                        <input type="checkbox" name="checkbox" className="checkbox-tick" />
                                                        <span></span>
                                                    </label>
                                                    <Link to="/" className="mail-star"><i className="fa fa-star"></i></Link>
                                                </div>
                                                <div className="md-right">
                                                    <img className="rounded" src="../assets/images/xs/avatar3.jpg" alt="avatar" />
                                                    <p className="sub"><Link to="/app-inbox-detail" className="mail-detail-expand">Peter Collins</Link></p>
                                                    <p className="dep"><span className="m-r-10">[Support]</span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                    <span className="time">20 Jun</span>
                                                </div>
                                            </li>
                                            <li className="clearfix">
                                                <div className="md-left">
                                                    <label className="fancy-checkbox">
                                                        <input type="checkbox" name="checkbox" className="checkbox-tick" />
                                                        <span></span>
                                                    </label>
                                                    <Link to="/" className="mail-star"><i className="fa fa-star"></i></Link>
                                                </div>
                                                <div className="md-right">
                                                    <img className="rounded" src="../assets/images/xs/avatar4.jpg" alt="avatar" />
                                                    <p className="sub"><Link to="/app-inbox-detail" className="mail-detail-expand">Nathan Hunter</Link></p>
                                                    <p className="dep"><span className="m-r-10">[CSS]</span>There are many variations of passages of Lorem Ipsum available, but the majority</p>
                                                    <span className="time">14 Jun</span>
                                                </div>
                                            </li>
                                            <li className="clearfix">
                                                <div className="md-left">
                                                    <label className="fancy-checkbox">
                                                        <input type="checkbox" name="checkbox" className="checkbox-tick" />
                                                        <span></span>
                                                    </label>
                                                    <Link to="/" className="mail-star"><i className="fa fa-star"></i></Link>
                                                </div>
                                                <div className="md-right">
                                                    <img className="rounded" src="../assets/images/xs/avatar5.jpg" alt="avatar" />
                                                    <p className="sub"><Link to="/app-inbox-detail" className="mail-detail-expand">Beverly Oliver</Link></p>
                                                    <p className="dep"><span className="m-r-10">[GetBootstrap]</span>Lorem Ipsum is simply dumm dummy text of the printing and typesetting industry.</p>
                                                    <span className="time"><i className="fa fa-paperclip"></i> 11 Jun</span>
                                                </div>
                                            </li>
                                            <li className="clearfix">
                                                <div className="md-left">
                                                    <label className="fancy-checkbox">
                                                        <input type="checkbox" name="checkbox" className="checkbox-tick" />
                                                        <span></span>
                                                    </label>
                                                    <Link to="/" className="mail-star"><i className="fa fa-star"></i></Link>
                                                </div>
                                                <div className="md-right">
                                                    <img className="rounded" src="../assets/images/xs/avatar6.jpg" alt="avatar" />
                                                    <p className="sub"><Link to="/app-inbox-detail" className="mail-detail-expand">Nathan Hunter</Link></p>
                                                    <p className="dep"><span className="m-r-10">[Awwwards]</span>There are many variations of passages of Lorem Ipsum available, but the majority</p>
                                                    <span className="time">29 May</span>
                                                </div>
                                            </li>
                                            <li className="clearfix">
                                                <div className="md-left">
                                                    <label className="fancy-checkbox">
                                                        <input type="checkbox" name="checkbox" className="checkbox-tick" />
                                                        <span></span>
                                                    </label>
                                                    <Link to="/" className="mail-star"><i className="fa fa-star"></i></Link>
                                                </div>
                                                <div className="md-right">
                                                    <img className="rounded" src="../assets/images/xs/avatar2.jpg" alt="avatar" />
                                                    <p className="sub"><Link to="/app-inbox-detail" className="mail-detail-expand">Megan Duncan</Link></p>
                                                    <p className="dep"><span className="m-r-10">[Support]</span>There are many variations of passages of Lorem Ipsum available, but the majority</p>
                                                    <span className="time"><i className="fa fa-paperclip"></i> 22 Jun</span>
                                                </div>
                                            </li>
                                            <li className="clearfix unread">
                                                <div className="md-left">
                                                    <label className="fancy-checkbox">
                                                        <input type="checkbox" name="checkbox" className="checkbox-tick" />
                                                        <span></span>
                                                    </label>
                                                    <Link to="/" className="mail-star"><i className="fa fa-star"></i></Link>
                                                </div>
                                                <div className="md-right">
                                                    <img className="rounded" src="../assets/images/xs/avatar3.jpg" alt="avatar" />
                                                    <p className="sub"><Link to="/app-inbox-detail" className="mail-detail-expand">Peter Collins</Link></p>
                                                    <p className="dep"><span className="m-r-10">[Support]</span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                    <span className="time">20 Jun</span>
                                                </div>
                                            </li>
                                            <li className="clearfix">
                                                <div className="md-left">
                                                    <label className="fancy-checkbox">
                                                        <input type="checkbox" name="checkbox" className="checkbox-tick" />
                                                        <span></span>
                                                    </label>
                                                    <Link to="/" className="mail-star"><i className="fa fa-star"></i></Link>
                                                </div>
                                                <div className="md-right">
                                                    <img className="rounded" src="../assets/images/xs/avatar4.jpg" alt="avatar" />
                                                    <p className="sub"><Link to="/app-inbox-detail" className="mail-detail-expand">Nathan Hunter</Link></p>
                                                    <p className="dep"><span className="m-r-10">[CSS]</span>There are many variations of passages of Lorem Ipsum available, but the majority</p>
                                                    <span className="time">14 Jun</span>
                                                </div>
                                            </li>
                                            <li className="clearfix">
                                                <div className="md-left">
                                                    <label className="fancy-checkbox">
                                                        <input type="checkbox" name="checkbox" className="checkbox-tick" />
                                                        <span></span>
                                                    </label>
                                                    <Link to="/" className="mail-star"><i className="fa fa-star"></i></Link>
                                                </div>
                                                <div className="md-right">
                                                    <img className="rounded" src="../assets/images/xs/avatar2.jpg" alt="avatar" />
                                                    <p className="sub"><Link to="/app-inbox-detail" className="mail-detail-expand">Megan Duncan</Link></p>
                                                    <p className="dep"><span className="m-r-10">[Support]</span>There are many variations of passages of Lorem Ipsum available, but the majority</p>
                                                    <span className="time"><i className="fa fa-paperclip"></i> 22 Jun</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <ul className="pagination mb-0">
                                        <li className="page-item"><Link className="page-link" to="#">Previous</Link></li>
                                        <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">Next</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Inbox
