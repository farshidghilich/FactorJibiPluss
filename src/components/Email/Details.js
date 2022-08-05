import React from 'react';
import { Link } from 'react-router-dom';

const InboxDetails = () => {
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
                                    <li className="breadcrumb-item active" aria-current="page">Inbox Detail</li>
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
                                    <div className="mail-detail-full">
                                        <div className="mail-action clearfix">
                                            <Link to="/app-inbox" className="btn btn-primary btn-sm mr-1"><i className="fa fa-arrow-left"></i></Link>
                                            <Link to="/" className="btn btn-danger btn-sm mr-1"><i className="icon-trash"></i></Link>
                                            <Link to="/" className="btn btn-light btn-sm hidden-sm mr-1"><i className="icon-refresh"></i></Link>
                                            <div className="btn-group">
                                                <button className="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="icon-tag"></i></button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href>Tag 1</a>
                                                    <a className="dropdown-item" href>Tag 2</a>
                                                    <a className="dropdown-item" href>Tag 3</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="detail-header">
                                            <div className="media">
                                                <div className="float-left">
                                                    <div className="m-r-20"><img src="../assets/images/sm/avatar1.jpg" className="rounded" alt="avatar" /></div>
                                                </div>
                                                <div className="media-body">
                                                    <p className="mb-0"><strong className="text-muted m-r-5">From :</strong><a className="text-default" href>info@puffintheme.com</a><span className="text-muted text-sm float-right">12:48, 23.06.2018</span></p>
                                                    <p className="mb-0"><strong className="text-muted m-r-5">To :</strong>Me <small className="text-muted float-right"><i className="zmdi zmdi-attachment m-r-5"></i>(2 files, 89.2 KB)</small></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mail-cnt">
                                            <p>Hello <strong>Marshall Nichols</strong>,</p><br />
                                            <p>Lorem Ipsum is simply dummy text of only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                            <ul>
                                                <li>standard dummy text ever since the 1500s, when an unknown printer</li>
                                                <li>Lorem Ipsum has been the industry's standard dummy</li>
                                            </ul>
                                            <p>Thank youm,<br /><strong>Michael Bradley</strong></p>
                                            <hr />
                                            <strong>Click here to</strong>
                                            <Link className="btn btn-link" to="/app-compose">Reply</Link> or
                                        <Link className="btn btn-link" to="/app-compose">Forward</Link>
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
export default InboxDetails
