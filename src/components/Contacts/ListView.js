import React from 'react';
import { Link } from 'react-router-dom';

const ListView = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h2>Contact List</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                                    <li className="breadcrumb-item"><Link to="/">App</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Contact</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6 col-sm-12 text-right hidden-xs">
                            <a href="/" className="btn btn-sm btn-primary btn-round" title="">Add New</a>
                        </div>
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-12">
                        <div className="table-responsive">
                            <table className="table table-hover table-custom spacing5">
                                <tbody>
                                    <tr>
                                        <td className="w60">
                                            <img src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" data-placement="top" title="" alt="Avatar" className="w35 rounded" data-original-title="Avatar Name" />
                                        </td>
                                        <td>
                                            <a href="/" title="">Jason Porter</a>
                                            <p className="mb-0">+ 264-625-5858</p>
                                        </td>
                                        <td>
                                            <span>jason-porter@example.com</span>
                                        </td>
                                        <td>
                                            <span>123 6th St. Melbourne, FL 32904</span>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary btn-sm mr-1">Follow</button>
                                            <button className="btn btn-success btn-sm">Message</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w60">
                                            <img src="../assets/images/xs/avatar6.jpg" data-toggle="tooltip" data-placement="top" title="" alt="Avatar" className="w35 rounded" data-original-title="Avatar Name" />
                                        </td>
                                        <td>
                                            <a href="/" title="">Sean Black</a>
                                            <p className="mb-0">+ 264-625-7262</p>
                                        </td>
                                        <td>
                                            <span>denise-Alvarado@example.com</span>
                                        </td>
                                        <td>
                                            <span>514 S. Magnolia St. Orlando, FL 32806</span>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary btn-sm mr-1">Follow</button>
                                            <button className="btn btn-success btn-sm">Message</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w60">
                                            <img src="../assets/images/xs/avatar7.jpg" data-toggle="tooltip" data-placement="top" title="" alt="Avatar" className="w35 rounded" data-original-title="Avatar Name" />
                                        </td>
                                        <td>
                                            <a href="/" title="">David Wallace</a>
                                            <p className="mb-0">+ 264-625-9283</p>
                                        </td>
                                        <td>
                                            <span>Carol-coke@example.com</span>
                                        </td>
                                        <td>
                                            <span>44 Shirley Ave. West Chicago, IL 60185</span>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary btn-sm mr-1">Follow</button>
                                            <button className="btn btn-success btn-sm">Message</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w60">
                                            <img src="../assets/images/xs/avatar8.jpg" data-toggle="tooltip" data-placement="top" title="" alt="Avatar" className="w35 rounded" data-original-title="Avatar Name" />
                                        </td>
                                        <td>
                                            <a href="/" title="">Theresa Wright</a>
                                            <p className="mb-0">+ 264-625-2233</p>
                                        </td>
                                        <td>
                                            <span>Michelle-Schultz@example.com</span>
                                        </td>
                                        <td>
                                            <span>70 Bowman St. South Windsor, CT 06074</span>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary btn-sm mr-1">Follow</button>
                                            <button className="btn btn-success btn-sm">Message</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w60">
                                            <img src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="" alt="Avatar" className="w35 rounded" data-original-title="Avatar Name" />
                                        </td>
                                        <td>
                                            <a href="/" title="">Jason Porter</a>
                                            <p className="mb-0">+ 264-625-5858</p>
                                        </td>
                                        <td>
                                            <span>jason-porter@example.com</span>
                                        </td>
                                        <td>
                                            <span>123 6th St. Melbourne, FL 32904</span>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary btn-sm mr-1">Follow</button>
                                            <button className="btn btn-success btn-sm">Message</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w60">
                                            <div className="avtar-pic w35 bg-indigo"><span>DA</span></div>
                                        </td>
                                        <td>
                                            <a href="/" title="">Sean Black</a>
                                            <p className="mb-0">+ 264-625-7262</p>
                                        </td>
                                        <td>
                                            <span>denise-Alvarado@example.com</span>
                                        </td>
                                        <td>
                                            <span>514 S. Magnolia St. Orlando, FL 32806</span>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary btn-sm mr-1">Follow</button>
                                            <button className="btn btn-success btn-sm">Message</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w60">
                                            <img src="../assets/images/xs/avatar7.jpg" data-toggle="tooltip" data-placement="top" title="" alt="Avatar" className="w35 rounded" data-original-title="Avatar Name" />
                                        </td>
                                        <td>
                                            <a href="/" title="">David Wallace</a>
                                            <p className="mb-0">+ 264-625-9283</p>
                                        </td>
                                        <td>
                                            <span>Carol-coke@example.com</span>
                                        </td>
                                        <td>
                                            <span>44 Shirley Ave. West Chicago, IL 60185</span>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary btn-sm mr-1">Follow</button>
                                            <button className="btn btn-success btn-sm">Message</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w60">
                                            <div className="avtar-pic w35 bg-pink"><span>MS</span></div>
                                        </td>
                                        <td>
                                            <a href="/" title="">Theresa Wright</a>
                                            <p className="mb-0">+ 264-625-2233</p>
                                        </td>
                                        <td>
                                            <span>Michelle-Schultz@example.com</span>
                                        </td>
                                        <td>
                                            <span>70 Bowman St. South Windsor, CT 06074</span>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary btn-sm mr-1">Follow</button>
                                            <button className="btn btn-success btn-sm">Message</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                    <Link className="page-link" to="/" aria-label="Previous">
                                        <span aria-hidden="true">«</span>
                                        <span className="sr-only">Previous</span>
                                    </Link>
                                </li>
                                <li className="page-item active"><Link className="page-link" to="/">1</Link></li>
                                <li className="page-item"><Link className="page-link" to="/">2</Link></li>
                                <li className="page-item"><Link className="page-link" to="/">3</Link></li>
                                <li className="page-item">
                                    <Link className="page-link" to="/" aria-label="Next">
                                        <span aria-hidden="true">»</span>
                                        <span className="sr-only">Next</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );

}
export default ListView
