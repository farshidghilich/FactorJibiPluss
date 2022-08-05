import React from 'react';
import MembersBarChart from '../common/widgets/MembersBarChat';
import MarketingChart from '../common/widgets/MarketingChart';
import OverviewChart from '../common/widgets/OverviewChart';
import SparklineCountryChart from '../common/widgets/sparklineCountryChart';
import EarningReport from '../common/widgets/EarningReport';
import { Donut } from 'react-dial-knob';
import LineChart from '../common/widgets/LineChart';

const Widgets = () => {
  return (
    <div className="container-fluid">
      <div className="block-header">
        <div className="row clearfix">
          <div className="col-md-6 col-sm-12">
            <h2>Ready Widgets</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Oculux</a></li>
                <li className="breadcrumb-item"><a href="/">Extra</a></li>
                <li className="breadcrumb-item active" aria-current="page">Widgets</li>
              </ol>
            </nav>
          </div>
          <div className="col-md-6 col-sm-12 text-right hidden-xs">
            <a href="/" className="btn btn-sm btn-primary btn-round">Add New</a>
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="body">
              <div className="d-flex align-items-center">
                <div className="icon-in-bg bg-indigo text-white rounded-circle"><i className="fa fa-briefcase" /></div>
                <div className="ml-4">
                  <span>Total income</span>
                  <h4 className="mb-0 font-weight-medium">$7,805</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="body">
              <div className="d-flex align-items-center">
                <div className="icon-in-bg bg-azura text-white rounded-circle"><i className="fa fa-credit-card" /></div>
                <div className="ml-4">
                  <span>New expense</span>
                  <h4 className="mb-0 font-weight-medium">$3,651</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="body">
              <div className="d-flex align-items-center">
                <div className="icon-in-bg bg-orange text-white rounded-circle"><i className="fa fa-users" /></div>
                <div className="ml-4">
                  <span>Daily Visits</span>
                  <h4 className="mb-0 font-weight-medium">5,805</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="body">
              <div className="d-flex align-items-center">
                <div className="icon-in-bg bg-pink text-white rounded-circle"><i className="fa fa-life-ring" /></div>
                <div className="ml-4">
                  <span>Bounce rate</span>
                  <h4 className="mb-0 font-weight-medium">$13,651</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-lg-3 col-md-6">
          <span className="card">
            <div className="body text-center">
              <img className="img-thumbnail rounded-circle" src="../assets/images/sm/avatar1.jpg" alt="" />
              <h6 className="mt-3">Michelle Green</h6>
              <div className="text-center text-muted">Intranet Developer</div>
            </div>
            <div className="card-footer text-center">
              <div className="row clearfix">
                <div className="col-6">
                  <i className="fa fa-tag font-22" />
                  <div><span className="text-muted">9 Badges</span></div>
                </div>
                <div className="col-6">
                  <i className="fa fa-dollar font-22" />
                  <div><span className="text-muted">$ 3.100</span></div>
                </div>
              </div>
            </div>
          </span>
        </div>
        <div className="col-lg-3 col-md-6">
          <span className="card">
            <div className="body text-center">
              <img className="img-thumbnail rounded-circle" src="../assets/images/sm/avatar2.jpg" alt="" />
              <h6 className="mt-3">Louis Henry</h6>
              <div className="text-center text-muted">Angular Developer</div>
            </div>
            <div className="card-footer text-center">
              <div className="row clearfix">
                <div className="col-6">
                  <i className="fa fa-envelope font-22" />
                  <div><span className="text-muted">9 Emails</span></div>
                </div>
                <div className="col-6">
                  <i className="fa fa-bug font-22" />
                  <div><span className="text-muted">10 Bug</span></div>
                </div>
              </div>
            </div>
          </span>
        </div>
        <div className="col-lg-3 col-md-6">
          <span className="card">
            <div className="body text-center">
              <img className="img-thumbnail rounded-circle" src="../assets/images/sm/avatar3.jpg" alt="" />
              <h6 className="mt-3">Nathan Hunter</h6>
              <div className="text-center text-muted">Projects Manager</div>
            </div>
            <div className="card-footer text-center">
              <div className="row clearfix">
                <div className="col-6">
                  <i className="fa fa-briefcase font-22" />
                  <div><span className="text-muted">9 Project</span></div>
                </div>
                <div className="col-6">
                  <i className="fa fa-dollar font-22" />
                  <div><span className="text-muted">$ 3,100</span></div>
                </div>
              </div>
            </div>
          </span>
        </div>
        <div className="col-lg-3 col-md-6">
          <span className="card">
            <div className="body text-center">
              <img className="img-thumbnail rounded-circle" src="../assets/images/sm/avatar4.jpg" alt="" />
              <h6 className="mt-3">David Green</h6>
              <div className="text-center text-muted">Intranet Developer</div>
            </div>
            <div className="card-footer text-center">
              <div className="row clearfix">
                <div className="col-6">
                  <i className="fa fa-camera font-22" />
                  <div><span className="text-muted">17 Photos</span></div>
                </div>
                <div className="col-6">
                  <i className="fa fa-trophy font-22" />
                  <div><span className="text-muted">7 Awards</span></div>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="header">
              <h2>Members</h2>
            </div>
            <div className="body">
              <MembersBarChart />
            </div>
            <div className="card-footer text-center">
              <div className="row clearfix">
                <div className="col-6">
                  <h6>350</h6>
                  <span>Users</span>
                </div>
                <div className="col-6">
                  <h6>87</h6>
                  <span>VIP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="header">
              <h2>Marketing </h2>
            </div>
            <div className="body">
              <MarketingChart />
            </div>
            <div className="card-footer text-center">
              <div className="row clearfix">
                <div className="col-6">
                  <h6>$3,095</h6>
                  <span>Last Month</span>
                </div>
                <div className="col-6">
                  <h6>$2,763</h6>
                  <span>This Month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="card">
            <div className="header">
              <h2>Top Products</h2>
            </div>
            <div className="body">
              <OverviewChart />
            </div>
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-md-6">
          <div className="card">
            <article className="media body mb-0">
              <div className="mr-3">
                <img className="rounded mr-3" src="../assets/images/xs/avatar4.jpg" alt="" />
              </div>
              <div className="media-body">
                <div className="content">
                  <p className="h5">John Smith <small>@johnsmith</small> <small className="float-right text-muted">31 minutes ago</small></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
                </div>
                <nav className="d-flex text-muted">
                  <a href="/" className="icon mr-3"><i className="fa fa-repeat" /></a>
                  <a href="/" className="icon mr-3"><i className="fa fa-twitter" /> 24</a>
                  <a href="/" className="icon mr-3"><i className="fa fa-heart" /> 43</a>
                  <a href="/" className="text-muted ml-auto">5 notes</a>
                </nav>
              </div>
            </article>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <article className="media body mb-0">
              <div className="mr-3">
                <img className="rounded mr-3" src="../assets/images/xs/avatar4.jpg" alt="" />
              </div>
              <div className="media-body">
                <div className="content">
                  <p className="h5">John Smith <small>@johnsmith</small> <small className="float-right text-muted">31 minutes ago</small></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
                </div>
                <nav className="d-flex text-muted">
                  <a href="/" className="icon mr-3"><i className="fa fa-repeat" /></a>
                  <a href="/" className="icon mr-3"><i className="fa fa-twitter" /> 24</a>
                  <a href="/" className="icon mr-3"><i className="fa fa-heart" /> 43</a>
                  <a href="/" className="text-muted ml-auto">5 notes</a>
                </nav>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card">
            <div className="body small_state">
              <div className="details">
                <span className="mb-0">Population</span>
                <h5 className="mb-0">614</h5>
              </div>
              <div className="state_chart">
                <SparklineCountryChart />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card">
            <div className="body small_state">
              <div className="details">
                <span className="mb-0">Page Views</span>
                <h5 className="mb-0">3,025</h5>
              </div>
              <div className="state_chart">
                <SparklineCountryChart />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card">
            <div className="body small_state">
              <div className="details">
                <span className="mb-0">Growth</span>
                <h5 className="mb-0">$35M</h5>
              </div>
              <div className="state_chart">
                <SparklineCountryChart />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card">
            <div className="body small_state">
              <div className="details">
                <span className="mb-0">Usage</span>
                <h5 className="mb-0">98%</h5>
              </div>
              <div className="state_chart">
                <SparklineCountryChart />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="body w_knob">
              <div className="c_know">
                <Donut
                  className="knob"
                  diameter={50}
                  min={0}
                  max={100}
                  step={1}
                  value={22}
                  theme={{
                    donutThickness: 2,
                    donutColor: '#17C2D7',
                    centerColor: '#282B2F',
                    bgrColor: '#383b40'
                  }}
                />
              </div>
              <div>
                <h6>Events</h6>
                <span>12 of this month</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="body w_knob">
              <div className="c_know">
                <Donut
                  className="knob"
                  diameter={50}
                  min={0}
                  max={100}
                  step={1}
                  value={70}
                  theme={{
                    donutThickness: 2,
                    donutColor: '#2196f3',
                    centerColor: '#282B2F',
                    bgrColor: '#383b40'
                  }}
                />
              </div>
              <div>
                <h6>Birthday</h6>
                <span>4 of this month</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="body w_knob">
              <div className="c_know">
                <Donut
                  className="knob"
                  diameter={50}
                  min={0}
                  max={100}
                  step={1}
                  value={66}
                  theme={{
                    donutThickness: 2,
                    donutColor: '#f44336',
                    centerColor: '#282B2F',
                    bgrColor: '#383b40'
                  }}
                />
              </div>
              <div>
                <h6>Conferences</h6>
                <span>8 of this month</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="body w_knob">
              <div className="c_know">
                <Donut
                  className="knob"
                  diameter={50}
                  min={0}
                  max={100}
                  step={1}
                  value={50}
                  theme={{
                    donutThickness: 2,
                    donutColor: '#4caf50',
                    centerColor: '#282B2F',
                    bgrColor: '#383b40'
                  }}
                />
              </div>
              <div>
                <h6>Seminars</h6>
                <span>2 of this month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-lg-4 col-md-12">
          <div className="card">
            <div className="header">
              <h2>Users</h2>
            </div>
            <div className="body">
              <div className="row text-center">
                <div className="col-6 border-right pb-4 pt-4">
                  <label className="mb-0">New Users</label>
                  <h4 className="font-30 font-weight-bold text-col-blue">2,025</h4>
                </div>
                <div className="col-6 pb-4 pt-4">
                  <label className="mb-0">Return Visitors</label>
                  <h4 className="font-30 font-weight-bold text-col-blue">1,254</h4>
                </div>
              </div>
            </div>
            <div className="body">
              <div className="form-group">
                <label className="d-block">New Users <span className="float-right">77%</span></label>
                <div className="progress progress-xxs">
                  <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={77} aria-valuemin={0} aria-valuemax={100} style={{ width: '77%' }} />
                </div>
              </div>
              <div className="form-group">
                <label className="d-block">Return Visitors <span className="float-right">50%</span></label>
                <div className="progress progress-xxs">
                  <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }} />
                </div>
              </div>
              <div className="form-group">
                <label className="d-block">Engagement <span className="float-right">23%</span></label>
                <div className="progress progress-xxs">
                  <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={23} aria-valuemin={0} aria-valuemax={100} style={{ width: '23%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="card user_statistics">
            <div className="header">
              <h2>Earning Report</h2>
            </div>
            <div className="body">
              <EarningReport />
            </div>
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-md-4 col-sm-12">
          <div className="card w_card3">
            <div className="body">
              <div className="text-center"><i className="icon-picture text-info" />
                <h4 className="m-t-25 mb-0">104 Picture</h4>
                <p>Your gallery download complete</p>
                <a href="/" className="btn btn-info btn-round">Download now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="card w_card3">
            <div className="body">
              <div className="text-center"><i className="icon-diamond text-success" />
                <h4 className="m-t-25 mb-0">813 Point</h4>
                <p>You are doing great job!</p>
                <a href="/" className="btn btn-success btn-round">Read now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="card w_card3">
            <div className="body">
              <div className="text-center"><i className="icon-social-twitter text-primary" />
                <h4 className="m-t-25 mb-0">3,756</h4>
                <p>New Followers on Twitter</p>
                <a href="/" className="btn btn-primary btn-round">Find more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="body top_counter">
              <div className="icon bg-warning text-white"><i className="fa fa-building" /> </div>
              <div className="content">
                <span>Properties</span>
                <h5 className="number mb-0">53,251</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="body top_counter">
              <div className="icon bg-success text-white"><i className="fa fa-area-chart" /> </div>
              <div className="content">
                <span>Growth</span>
                <h5 className="number mb-0">62%</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="body top_counter">
              <div className="icon bg-info text-white"><i className="fa fa-shopping-cart" /> </div>
              <div className="content">
                <span>Total Sales</span>
                <h5 className="number mb-0">$3205</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="body top_counter">
              <div className="icon bg-danger text-white"><i className="fa fa-tag" /> </div>
              <div className="content">
                <span>Rented</span>
                <h5 className="number mb-0">3,217</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-lg-12">
          <div className="card">
            <div className="header">
              <h2>Summary</h2>
            </div>
            <div className="body">
              <div className="row clearfix">
                <div className="col-lg-3 col-md-6">
                  <div className="w_summary">
                    <div className="s_chart">
                      <SparklineCountryChart />
                    </div>
                    <div className="s_detail">
                      <h2 className="font700 mb-0">$15K</h2>
                      <span>67% <i className="fa fa-level-up text-success" /> Total income</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="w_summary">
                    <div className="s_chart">
                      <SparklineCountryChart />
                    </div>
                    <div className="s_detail">
                      <h2 className="font700 mb-0">$1258</h2>
                      <span>15% <i className="fa fa-level-up text-success" /> Total Expense</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="w_summary">
                    <div className="s_chart">
                      <SparklineCountryChart />
                    </div>
                    <div className="s_detail">
                      <h2 className="font700 mb-0">$2315</h2>
                      <span>23% <i className="fa fa-level-up text-success" /> Total Growth</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="w_summary">
                    <div className="s_chart">
                      <SparklineCountryChart />
                    </div>
                    <div className="s_detail">
                      <h2 className="font700 mb-0">$1025</h2>
                      <span>52% <i className="fa fa-level-up text-success" /> Bounce Rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-md-4 col-sm-12">
          <div className="card">
            <div className="body">
              <div className="row clearfix">
                <div className="col-7">
                  <h5 className="mb-0">Server</h5>
                  <small className="info">of 1Tb</small>
                </div>
                <div className="col-5 text-right">
                  <h2 className="m-b-0">62%</h2>
                </div>
                <div className="col-12">
                  <div className="progress progress-xxs progress-transparent custom-color-blue mb-0 mt-3">
                    <div className="progress-bar" data-transitiongoal={87} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="card">
            <div className="body">
              <div className="row clearfix">
                <div className="col-7">
                  <h5 className="mb-0">Email</h5>
                  <small className="info">of 31</small>
                </div>
                <div className="col-5 text-right">
                  <h2 className="m-b-0">62%</h2>
                </div>
                <div className="col-12">
                  <div className="progress progress-xxs progress-transparent custom-color-yellow mb-0 mt-3">
                    <div className="progress-bar" data-transitiongoal={54} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="card">
            <div className="body">
              <div className="row clearfix">
                <div className="col-7">
                  <h5 className="mb-0">Domians</h5>
                  <small className="info">of 10</small>
                </div>
                <div className="col-5 text-right">
                  <h2 className="m-b-0">2</h2>
                </div>
                <div className="col-12">
                  <div className="progress progress-xxs progress-transparent custom-color-green mb-0 mt-3">
                    <div className="progress-bar" data-transitiongoal={67} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-sm-6 col-lg-3">
          <div className="card">
            <div className="body">
              <div className="card-value float-right text-blue">+5%</div>
              <h4 className="mb-1">423</h4>
              <div className="text-muted">Paid Traffic</div>
            </div>
            <div className="card-chart-bg">
              <LineChart data={[30, 40, 10, 40, 12, 22, 40]} color="#395B8A" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="card">
            <div className="body">
              <div className="card-value float-right text-red">-3%</div>
              <h4 className="mb-1">423</h4>
              <div className="text-muted">Organic Traffic</div>
            </div>
            <div className="card-chart-bg">
              <LineChart data={[30, 40, 10, 40, 12, 22, 40]} color="#E74C3C" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="card">
            <div className="body">
              <div className="card-value float-right text-green">-3%</div>
              <h4 className="mb-1">423</h4>
              <div className="text-muted">Daily Visits</div>
            </div>
            <div className="card-chart-bg">
              <LineChart data={[30, 40, 10, 40, 12, 22, 40]} color="#5EB902" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="card">
            <div className="body">
              <div className="card-value float-right text-yellow">9%</div>
              <h4 className="mb-1">423</h4>
              <div className="text-muted">Conversion Rate</div>
            </div>
            <div className="card-chart-bg">
              <LineChart data={[30, 40, 10, 40, 12, 22, 40]} color="#F1C40E" />
            </div>
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-md-6 col-lg-3">
          <div className="card">
            <div className="body p-4">
              <div className="row clearfix">
                <div className="col-auto">
                  <div className="stamp stamp-md bg-warning">
                    <i className="fa fa-database" />
                  </div>
                </div>
                <div className="col text-right">
                  <div className="small text-muted">Capacity</div>
                  <div className="h4 m-0">105GB</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card ">
            <div className="body p-4">
              <div className="row clearfix">
                <div className="col-auto">
                  <div className="stamp stamp-md bg-success">
                    <i className="fa fa-institution" />
                  </div>
                </div>
                <div className="col text-right">
                  <div className="small text-muted">Revenue</div>
                  <div className="h4 m-0">$1,345</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card">
            <div className="body p-4">
              <div className="row clearfix">
                <div className="col-auto">
                  <div className="stamp stamp-md bg-danger">
                    <i className="fa fa-bug" />
                  </div>
                </div>
                <div className="col text-right">
                  <div className="small text-muted">Bugs</div>
                  <div className="h4 m-0">24</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card ">
            <div className="body p-4">
              <div className="row clearfix">
                <div className="col-auto">
                  <div className="stamp stamp-md bg-info">
                    <i className="fa fa-twitter" />
                  </div>
                </div>
                <div className="col text-right">
                  <div className="small text-muted">Followers</div>
                  <div className="h4 m-0">10K</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="body">
              <div>Total revenue</div>
              <div className="py-4 m-0 text-center h1 text-success">$9,452</div>
              <div className="d-flex">
                <small className="text-muted">Income</small>
                <div className="ml-auto"><i className="fa fa-caret-up text-success" />4%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="body">
              <div>Income status</div>
              <div className="py-4 m-0 text-center h1 text-info">$2,258</div>
              <div className="d-flex">
                <small className="text-muted">New income</small>
                <div className="ml-auto">0%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="body">
              <div>Customer status</div>
              <div className="py-4 m-0 text-center h1 text-warning">232</div>
              <div className="d-flex">
                <small className="text-muted">New users</small>
                <div className="ml-auto"><i className="fa fa-caret-up text-success" />3%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="body">
              <div>Order status</div>
              <div className="py-4 m-0 text-center h1 text-danger">428</div>
              <div className="d-flex">
                <small className="text-muted">New order</small>
                <div className="ml-auto"><i className="fa fa-caret-down text-danger" />10%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-lg-4 col-md-12">
          <div className="card">
            <div className="body">
              <div className="card-value float-right text-warning"><i className="wi wi-day-cloudy" /></div>
              <h3 className="mb-1">18°C</h3>
              <div>New York, USA</div>
            </div>
          </div>
          <div className="card">
            <div className="body">
              <div className="media">
                <img className="rounded mr-3" src="../assets/images/xs/avatar7.jpg" alt="" />
                <div className="media-body">
                  <h5 className="m-0">Betty Torres</h5>
                  <p className="text-muted mb-0">Mobile Designer</p>
                </div>
              </div>
              <table className="table card-table mb-0">
                <tbody>
                  <tr>
                    <td className="font-weight-bold">Apple</td>
                    <td className="text-right">984.52 <span className="text-success">(0.25%) <i className="fa fa-caret-up" /></span>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">Google</td>
                    <td className="text-right">956.3 <span className="text-danger">(-0.15%) <i className="fa fa-caret-down" /></span>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">DMKT</td>
                    <td className="text-right">89.74 <span className="text-success">(0.85%) <i className="fa fa-caret-up" /></span>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">TCS</td>
                    <td className="text-right">48.75 <span className="text-danger">(-0.63%) <i className="fa fa-caret-down" /></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card">
            <div id="slider4" className="carousel slide" data-ride="carousel" data-interval={2000}>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="card-img-top" src="../assets/images/image-gallery/10.jpg" alt="Card cap" />
                </div>
                <div className="carousel-item">
                  <img className="card-img-top" src="../assets/images/image-gallery/11.jpg" alt="Card cap" />
                </div>
                <div className="carousel-item">
                  <img className="card-img-top" src="../assets/images/image-gallery/12.jpg" alt="Card cap" />
                </div>
              </div>
            </div>
            <div className="card-footer text-center">
              <div className="row clearfix">
                <div className="col-6">
                  <i className="fa fa-camera font-22" />
                  <div><span className="text-muted">3 Photos</span></div>
                </div>
                <div className="col-6">
                  <i className="fa fa-eye font-22" />
                  <div><span className="text-muted">1k Views</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="header">
              <h2>December 2018</h2>
            </div>
            <div className="body">
              <table className="table table-calendar mb-3">
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
                    <td><span className="table-calendar-link">4</span></td>
                    <td>5</td>
                    <td><span className="table-calendar-link">6</span></td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td><span className="table-calendar-link">12</span></td>
                    <td>13</td>
                    <td>14</td>
                    <td><span>15</span></td>
                    <td>16</td>
                    <td>17</td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td><span className="table-calendar-link">19</span></td>
                    <td><span className="table-calendar-link">20</span></td>
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
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="card">
            <img className="card-img-top" src="../assets/images/image-gallery/1.jpg" alt="Card cap" />
            <div className="body">
              <h4 className="card-title">Card title</h4>
              <div className="card-subtitle">Lorem ipsum dolor sit amet.</div>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div className="card bg-success">
            <div className="body text-white">
              <div className="card-value float-right">58%</div>
              <h3 className="mb-1">6251</h3>
              <div>New Orders</div>
            </div>
          </div>
          <form className="card" method="post">
            <div className="header">
              <h2>Login to your account</h2>
            </div>
            <div className="body">
              <div className="form-group">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control round" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label className="form-label displayblock">Password<a href="/" className="float-right small">I forgot password</a></label>
                <input type="password" className="form-control round" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className="form-group">
                <div className="fancy-checkbox">
                  <label><input type="checkbox" /><span>Remember me</span></label>
                </div>
              </div>
              <div className="form-footer">
                <button type="submit" className="btn btn-primary btn-block">Sign in</button>
              </div>
            </div>
          </form>
          <div className="card border-danger">
            <div className="body text-danger">
              <h4 className="card-title">Danger card title</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="card">
            <div className="body">
              <div className="media mb-0">
                <img className="rounded mr-3" src="../assets/images/xs/avatar4.jpg" alt="" />
                <div className="media-body">
                  <h5 className="m-0">Deborah Cox</h5>
                  <p className="text-muted mb-0">Webdeveloper</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="header">
              <h2>Server params</h2>
            </div>
            <div className="body">
              <div className="card-text">
                <div className="mt-0">
                  <small className="float-right text-muted">10/200 GB</small>
                  <span>Memory</span>
                  <div className="progress progress-xxs">
                    <div style={{ width: '60%' }} className="progress-bar" />
                  </div>
                </div>
                <div className="mt-4">
                  <small className="float-right text-muted">20 GB</small>
                  <span>Bandwidth</span>
                  <div className="progress progress-xxs">
                    <div style={{ width: '50%' }} className="progress-bar" />
                  </div>
                </div>
                <div className="mt-4">
                  <small className="float-right text-muted">73%</small>
                  <span>Activity</span>
                  <div className="progress progress-xxs">
                    <div style={{ width: '40%' }} className="progress-bar" />
                  </div>
                </div>
                <div className="mt-4">
                  <small className="float-right text-muted">400 GB</small>
                  <span>FTP</span>
                  <div className="progress progress-xxs">
                    <div style={{ width: '80%' }} className="progress-bar bg-danger" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="header">
              <h2>Portfolio</h2>
            </div>
            <div className="body">
              <table className="table card-table mb-0">
                <tbody>
                  <tr>
                    <td className="font-weight-bold">Apple</td>
                    <td className="text-right">984.52 <span className="text-success">(0.25%) <i className="fa fa-caret-up" /></span>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">Google</td>
                    <td className="text-right">956.3 <span className="text-danger">(-0.15%) <i className="fa fa-caret-down" /></span>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">DMKT</td>
                    <td className="text-right">89.74 <span className="text-success">(0.85%) <i className="fa fa-caret-up" /></span>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">TMLS</td>
                    <td className="text-right">210.04 <span className="text-success">(0.65%) <i className="fa fa-caret-up" /></span>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">YOUS</td>
                    <td className="text-right">218.47 <span className="text-danger">(-0.42%) <i className="fa fa-caret-down" /></span>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">TCS</td>
                    <td className="text-right">48.75 <span className="text-danger">(-0.63%) <i className="fa fa-caret-down" /></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card">
            <div className="body">
              <div className="card-value float-right text-warning">27%</div>
              <h3 className="mb-1">2,510</h3>
              <div>Total Leads</div>
              <div className="mt-4">
                <div className="progress progress-xxs">
                  <div className="progress-bar bg-warning" style={{ width: '27%' }} />
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="body">
              <div className="card-value float-right text-danger">0%</div>
              <h3 className="mb-1">$5,853</h3>
              <div>Total Payment</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Widgets;