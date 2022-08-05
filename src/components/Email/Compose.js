import React from 'react';
import { Link } from 'react-router-dom';

const Compose = () => {
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
                                    <li className="breadcrumb-item active" aria-current="page">Compose Mail</li>
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
                                    <div className="mail-compose">
                                        <form>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="To" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Subject" />
                                            </div>
                                        </form>
                                        <div className="summernote">
                                            Hello!,
                                        <br />
                                            <br />
                                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,</p>
                                            <p><strong>Note:</strong> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                            <ul>
                                                <li>New code update on GitHub</li>
                                                <li>There are many variations of passages of Lorem Ipsum available</li>
                                            </ul>
                                            <span><strong>Thank you!</strong></span>
                                            <p>Oculux Admin</p>
                                        </div>
                                        <div className="m-t-30 text-right">
                                            <button type="button" className="btn btn-success btn-round">Send Message</button>
                                            <button type="button" className="btn btn-outline-secondary btn-round">Draft</button>
                                            <Link to="/app-inbox" className="btn btn-outline-secondary btn-round">Cancel</Link>
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
export default Compose
