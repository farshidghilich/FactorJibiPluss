import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleSearchBar } from '../../actions/settingsAction';

const Searchbar = ({ isSearchbar, toggleSearchBar }) => {
    return (
        <>
            <div className={`search_div${isSearchbar ? " open" : ""}`}>
                <div className="card">
                    <div className="body">
                        <form id="navbar-search" className="navbar-form search-form">
                            <div className="input-group mb-0">
                                <input type="text" className="form-control" placeholder="Search..." />
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="icon-magnifier"></i></span>
                                    <span onClick={() => toggleSearchBar(false)} className="search_toggle btn btn-danger"><i className="icon-close"></i></span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <span>Search Result <small className="float-right text-muted">About 90 results (0.47 seconds)</small></span>
                <div className="table-responsive">
                    <table className="table table-hover table-custom spacing5">
                        <tbody>
                            <tr>
                                <td className="w40">
                                    <span>01</span>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="avtar-pic w35 bg-red" data-toggle="tooltip" data-placement="top" title="" data-original-title="Avatar Name"><span>SS</span></div>
                                        <div className="ml-3">
                                            <Link to="/page-invoices-details" title="">South Shyanne</Link>
                                            <p className="mb-0">south.shyanne@example.com</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>02</span>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="" alt="Avatar" className="w35 h35 rounded" data-original-title="Avatar Name" />
                                        <div className="ml-3">
                                            <a href="/" title="">Zoes Baker</a>
                                            <p className="mb-0">zoe.baker@example.com</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>03</span>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="avtar-pic w35 bg-indigo" data-toggle="tooltip" data-placement="top" title="" data-original-title="Avatar Name"><span>CB</span></div>
                                        <div className="ml-3">
                                            <a href="/" title="">Colin Brown</a>
                                            <p className="mb-0">colinbrown@example.com</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>04</span>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="avtar-pic w35 bg-green" data-toggle="tooltip" data-placement="top" title="" data-original-title="Avatar Name"><span>KG</span></div>
                                        <div className="ml-3">
                                            <a href="/" title="">Kevin Gill</a>
                                            <p className="mb-0">kevin.gill@example.com</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>05</span>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img src="../assets/images/xs/avatar5.jpg" data-toggle="tooltip" data-placement="top" title="" alt="Avatar" className="w35 h35 rounded" data-original-title="Avatar Name" />
                                        <div className="ml-3">
                                            <a href="/" title="">Brandon Smith</a>
                                            <p className="mb-0">Maria.gill@example.com</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>06</span>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img src="../assets/images/xs/avatar6.jpg" data-toggle="tooltip" data-placement="top" title="" alt="Avatar" className="w35 h35 rounded" data-original-title="Avatar Name" />
                                        <div className="ml-3">
                                            <a href="/" title="">Kevin Baker</a>
                                            <p className="mb-0">kevin.baker@example.com</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>07</span>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="" alt="Avatar" className="w35 h35 rounded" data-original-title="Avatar Name" />
                                        <div className="ml-3">
                                            <a href="/" title="">Zoe Baker</a>
                                            <p className="mb-0">zoe.baker@example.com</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
const mapStateToProps = state => ({
    isSearchbar: state.settings.isSearchbar
})

const mapDispatchToProps = dispatch => ({
    toggleSearchBar: (e) => dispatch(toggleSearchBar(e))
})
export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);