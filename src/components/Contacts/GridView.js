import React from 'react';
import { Link } from 'react-router-dom';

const GridView = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h2>Contact Grid</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                                    <li className="breadcrumb-item"><Link to="/">App</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Contact</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6 col-sm-12 text-right hidden-xs">
                            <Link to="/" className="btn btn-sm btn-primary btn-round" title="">Add New</Link>
                        </div>
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <Link to="/" className="btn btn-sm btn-primary btn-block" title="">Add New</Link>
                        <ul className="list-group mt-2 mb-4">
                            <li className="list-group-item d-flex justify-content-between align-items-center">All Contacts<span className="badge badge-info">14</span></li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">Family<span className="badge badge-primary">2</span></li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">Friends<span className="badge badge-warning">1</span></li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">Co-workers<span className="badge badge-danger">14</span></li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">Favorites<span className="badge badge-success">2</span></li>
                        </ul>
                        <small className="text-muted">LOCATION</small>
                        <ul className="list-group mt-2 mb-4">
                            <li className="list-group-item d-flex justify-content-between align-items-center">San Francisco<span className="badge badge-info">14</span></li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">Los Angeles<span className="badge badge-primary">2</span></li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">New York<span className="badge badge-warning">1</span></li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">Las Vegas<span className="badge badge-danger">14</span></li>
                        </ul>
                        <small className="text-muted">JOB POSITION</small>
                        <ul className="list-group mt-2">
                            <li className="list-group-item">Software Engineer</li>
                            <li className="list-group-item">UI Designer</li>
                            <li className="list-group-item">Sales Representative</li>
                            <li className="list-group-item">Mechanical Engineer</li>
                        </ul>
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-12">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6">
                                <div className="card c_grid c_yellow">
                                    <div className="body text-center">
                                        <div className="circle">
                                            <img className="rounded-circle" src="../assets/images/sm/avatar1.jpg" alt="" />
                                        </div>
                                        <h6 className="mt-3 mb-0">Michelle Green</h6>
                                        <span>jason-porter@info.com</span>
                                        <ul className="mt-3 list-unstyled d-flex justify-content-center">
                                            <li><Link className="p-3"  to="/"><i className="fa fa-facebook"></i></Link></li>
                                            <li><Link className="p-3"  to="/"><i className="fa fa-slack"></i></Link></li>
                                            <li><Link className="p-3"  to="/"><i className="fa fa-linkedin"></i></Link></li>
                                        </ul>
                                        <button className="btn btn-default btn-sm mr-1">Follow</button>
                                        <button className="btn btn-default btn-sm">Message</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card c_grid c_indigo">
                                    <div className="body text-center">
                                        <div className="circle">
                                            <img className="rounded-circle" src="../assets/images/sm/avatar2.jpg" alt="" />
                                        </div>
                                        <h6 className="mt-3 mb-0">Jason Porter</h6>
                                        <span>Carol@info.com</span>
                                        <ul className="mt-3 list-unstyled d-flex justify-content-center">
                                            <li><a className="p-3"  href="/"><i className="fa fa-skype"></i></a></li>
                                            <li><a className="p-3"  href="/"><i className="fa fa-instagram"></i></a></li>
                                            <li><a className="p-3"  href="/"><i className="fa fa-dribbble"></i></a></li>
                                        </ul>
                                        <button className="btn btn-default btn-sm mr-1">Follow</button>
                                        <button className="btn btn-default btn-sm">Message</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card c_grid c_pink">
                                    <div className="body text-center">
                                        <div className="circle">
                                            <img className="rounded-circle" src="../assets/images/sm/avatar3.jpg" alt="" />
                                        </div>
                                        <h6 className="mt-3 mb-0">David Wallace</h6>
                                        <span>Michelle@info.com</span>
                                        <ul className="mt-3 list-unstyled d-flex justify-content-center">
                                            <li><a className="p-3"  href="/"><i className="fa fa-twitter"></i></a></li>
                                            <li><a className="p-3"  href="/"><i className="fa fa-dribbble"></i></a></li>
                                            <li><Link className="p-3"  to="/"><i className="fa fa-slack"></i></Link></li>
                                            <li><Link className="p-3"  to="/"><i className="fa fa-linkedin"></i></Link></li>
                                        </ul>
                                        <button className="btn btn-default btn-sm mr-1">Follow</button>
                                        <button className="btn btn-default btn-sm">Message</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card c_grid c_cyan">
                                    <div className="body text-center">
                                        <div className="circle">
                                            <img className="rounded-circle" src="../assets/images/sm/avatar4.jpg" alt="" />
                                        </div>
                                        <h6 className="mt-3 mb-0">Michelle Green</h6>
                                        <span>jason-porter@info.com</span>
                                        <ul className="mt-3 list-unstyled d-flex justify-content-center">
                                            <li><Link className="p-3"  to="/"><i className="fa fa-facebook"></i></Link></li>
                                            <li><Link className="p-3"  to="/"><i className="fa fa-slack"></i></Link></li>
                                            <li><Link className="p-3"  to="/"><i className="fa fa-linkedin"></i></Link></li>
                                        </ul>
                                        <button className="btn btn-default btn-sm mr-1">Follow</button>
                                        <button className="btn btn-default btn-sm">Message</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card c_grid c_red">
                                    <div className="body text-center">
                                        <div className="circle">
                                            <img className="rounded-circle" src="../assets/images/sm/avatar5.jpg" alt="" />
                                        </div>
                                        <h6 className="mt-3 mb-0">Michelle Green</h6>
                                        <span>jason-porter@info.com</span>
                                        <ul className="mt-3 list-unstyled d-flex justify-content-center">
                                            <li><Link className="p-3"  to="/"><i className="fa fa-facebook"></i></Link></li>
                                            <li><Link className="p-3"  to="/"><i className="fa fa-slack"></i></Link></li>
                                            <li><Link className="p-3"  to="/"><i className="fa fa-linkedin"></i></Link></li>
                                        </ul>
                                        <button className="btn btn-default btn-sm mr-1">Follow</button>
                                        <button className="btn btn-default btn-sm">Message</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card c_grid c_blue">
                                    <div className="body text-center">
                                        <div className="circle">
                                            <img className="rounded-circle" src="../assets/images/sm/avatar6.jpg" alt="" />
                                        </div>
                                        <h6 className="mt-3 mb-0">Michelle Green</h6>
                                        <span>jason-porter@info.com</span>
                                        <ul className="mt-3 list-unstyled d-flex justify-content-center">
                                            <li><Link className="p-3"  to="/"><i className="fa fa-facebook"></i></Link></li>
                                            <li><a className="p-3"  href="/"><i className="fa fa-pinterest"></i></a></li>
                                            <li><Link className="p-3"  to="/"><i className="fa fa-linkedin"></i></Link></li>
                                        </ul>
                                        <button className="btn btn-default btn-sm mr-1">Follow</button>
                                        <button className="btn btn-default btn-sm">Message</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card c_grid c_green">
                                    <div className="body text-center">
                                        <div className="circle">
                                            <img className="rounded-circle" src="../assets/images/sm/avatar1.jpg" alt="" />
                                        </div>
                                        <h6 className="mt-3 mb-0">Sean Black</h6>
                                        <span>jason-porter@info.com</span>
                                        <ul className="mt-3 list-unstyled d-flex justify-content-center">
                                            <li><Link className="p-3"  to="/"><i className="fa fa-facebook"></i></Link></li>
                                            <li><Link className="p-3"  to="/"><i className="fa fa-slack"></i></Link></li>
                                            <li><Link className="p-3"  to="/"><i className="fa fa-linkedin"></i></Link></li>
                                        </ul>
                                        <button className="btn btn-default btn-sm mr-1">Follow</button>
                                        <button className="btn btn-default btn-sm">Message</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card c_grid c_cyan">
                                    <div className="body text-center">
                                        <div className="circle">
                                            <img className="rounded-circle" src="../assets/images/sm/avatar2.jpg" alt="" />
                                        </div>
                                        <h6 className="mt-3 mb-0">David Wallace</h6>
                                        <span>jason-porter@info.com</span>
                                        <ul className="mt-3 list-unstyled d-flex justify-content-center">
                                            <li><a className="p-3"  href="/"><i className="fa fa-flickr"></i></a></li>
                                            <li><a className="p-3"  href="/"><i className="fa fa-dropbox"></i></a></li>
                                            <li><a className="p-3"  href="/"><i className="fa fa-apple"></i></a></li>
                                            <li><a className="p-3"  href="/"><i className="fa fa-pinterest"></i></a></li>
                                        </ul>
                                        <button className="btn btn-default btn-sm mr-1">Follow</button>
                                        <button className="btn btn-default btn-sm">Message</button>
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
export default GridView
