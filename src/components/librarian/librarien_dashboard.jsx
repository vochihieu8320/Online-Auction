import React, { Component } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
// Import Sidebar
import { LibrarienSidebar } from './librarien_sidebar';
// Import Images
import { ImgIcon1,ImgIcon2,ImgIcon3,Clients_0,Clients_01,Clients_02,Clients_03,Clients_04,Clients_05,
  Clients_06,Clients_07,Clients_08,Clients_09,Clients_10,Clients_11 } from "../imagepath"

class LibrarienDashboard extends Component {
	
    render() {
        return (
        <>
         {/* Breadcrumb */}
         <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-12 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Dashboard</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                {/* Profile Sidebar */}
                <StickyBox offsetTop={20} offsetBottom={20}>
					          <LibrarienSidebar/>
                </StickyBox>                
                {/* /Profile Sidebar */}
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card dash-card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-12 col-lg-4">
                            <div className="dash-widget dct-border-rht">
                              <div className="circle-bar">
                                <img src={ImgIcon1} className="img-fluid" alt="receiver" />
                              </div>
                              <div className="dash-widget-info">
                                <h6>Total Players</h6>
                                <h3>1500</h3>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 col-lg-4">
                            <div className="dash-widget dct-border-rht">
                              <div className="circle-bar">
                                <img src={ImgIcon2} className="img-fluid" alt="Player" />
                              </div>
                              <div className="dash-widget-info">
                                <h6>Today Players</h6>
                                <h3>160</h3>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 col-lg-4">
                            <div className="dash-widget">
                              <div className="circle-bar">
                                <img src={ImgIcon3} className="img-fluid" alt="Player" />
                              </div>
                              <div className="dash-widget-info">
                                <h6>Books Borrowed</h6>
                                <h3>85</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12"> 
                    <div className="appointment-tab">
                      {/* Appointment Tab */}
                      <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                        <li className="nav-item">
                          <a className="nav-link active" href="#upcoming-appointments" data-toggle="tab">Upcoming</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#today-appointments" data-toggle="tab">Today</a>
                        </li> 
                      </ul>
                      {/* /Appointment Tab */}
                      <div className="tab-content">
                        {/* Upcoming Appointment Tab */}
                        <div className="tab-pane show active" id="upcoming-appointments">
                          <div className="card card-table mb-0">
                            <div className="card-body">
                              <div className="table-responsive">
                                <table className="table table-hover table-center mb-0">
                                  <thead>
                                    <tr>
                                      <th>Customer Name</th>
                                      <th>Visit Date</th>
                                      <th>Purpose</th>
                                      <th>Type</th>
                                      <th className="text-center">Paid Amount</th>
                                      <th />
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/customer-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Clients_0} alt="User Image" /></Link>
                                          <Link to="/customer-profile">Richard Wilson <span>#CT0016</span></Link>
                                        </h2>
                                      </td>
                                      <td>11 Nov 2020 <span className="d-block text-info">10.00 AM</span></td>
                                      <td>Return Book</td>
                                      <td>New Customer</td>
                                      <td className="text-center">$150</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a href="" className="btn btn-sm bg-info-light mr-0">
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a href="" className="btn btn-sm bg-success-light mr-0">
                                            <i className="fas fa-check" /> Accept
                                          </a>
                                          <a href="" className="btn btn-sm bg-danger-light">
                                            <i className="fas fa-times" /> Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/customer-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Clients_01} alt="User Image" /></Link>
                                          <Link to="/customer-profile">Charlene Reed <span>#CT0001</span></Link>
                                        </h2>
                                      </td>
                                      <td>3 Nov 2020 <span className="d-block text-info">11.00 AM</span></td>
                                      <td>Borrow Book</td>
                                      <td>Old Customer</td>
                                      <td className="text-center">$200</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a href="" className="btn btn-sm bg-info-light mr-0">
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a href="" className="btn btn-sm bg-success-light mr-0">
                                            <i className="fas fa-check" /> Accept
                                          </a>
                                          <a href="" className="btn btn-sm bg-danger-light">
                                            <i className="fas fa-times" /> Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/customer-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Clients_02} alt="User Image" /></Link>
                                          <Link to="/customer-profile">Travis Trimble  <span>#CT0002</span></Link>
                                        </h2>
                                      </td>
                                      <td>1 Nov 2020 <span className="d-block text-info">1.00 PM</span></td>
                                      <td>General</td>
                                      <td>New Customer</td>
                                      <td className="text-center">$75</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a href="" className="btn btn-sm bg-info-light mr-0">
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a href="" className="btn btn-sm bg-success-light mr-0">
                                            <i className="fas fa-check" /> Accept
                                          </a>
                                          <a href="" className="btn btn-sm bg-danger-light">
                                            <i className="fas fa-times" /> Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/customer-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Clients_03} alt="User Image" /></Link>
                                          <Link to="/customer-profile">Carl Kelly <span>#CT0003</span></Link>
                                        </h2>
                                      </td>
                                      <td>30 Oct 2020 <span className="d-block text-info">9.00 AM</span></td>
                                      <td>Return Book</td>
                                      <td>Old Customer</td>
                                      <td className="text-center">$100</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a href="" className="btn btn-sm bg-info-light mr-0">
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a href="" className="btn btn-sm bg-success-light mr-0">
                                            <i className="fas fa-check" /> Accept
                                          </a>
                                          <a href="" className="btn btn-sm bg-danger-light">
                                            <i className="fas fa-times" /> Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/customer-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Clients_04} alt="User Image" /></Link>
                                          <Link to="/customer-profile">Michelle Fairfax <span>#CT0004</span></Link>
                                        </h2>
                                      </td>
                                      <td>28 Oct 2020 <span className="d-block text-info">6.00 PM</span></td>
                                      <td>General</td>
                                      <td>New Customer</td>
                                      <td className="text-center">$350</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a href="" className="btn btn-sm bg-info-light mr-0">
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a href="" className="btn btn-sm bg-success-light mr-0">
                                            <i className="fas fa-check" /> Accept
                                          </a>
                                          <a href="" className="btn btn-sm bg-danger-light">
                                            <i className="fas fa-times" /> Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/customer-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Clients_05} alt="User Image" /></Link>
                                          <Link to="/customer-profile">Gina Moore <span>#CT0005</span></Link>
                                        </h2>
                                      </td>
                                      <td>27 Oct 2020 <span className="d-block text-info">8.00 AM</span></td>
                                      <td>General</td>
                                      <td>Old Customer</td>
                                      <td className="text-center">$250</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a href="" className="btn btn-sm bg-info-light mr-0">
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a href="" className="btn btn-sm bg-success-light mr-0">
                                            <i className="fas fa-check" /> Accept
                                          </a>
                                          <a href="" className="btn btn-sm bg-danger-light">
                                            <i className="fas fa-times" /> Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>		
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /Upcoming Appointment Tab */}
                        {/* Today Appointment Tab */}
                        <div className="tab-pane" id="today-appointments">
                          <div className="card card-table mb-0">
                            <div className="card-body">
                              <div className="table-responsive">
                                <table className="table table-hover table-center mb-0">
                                  <thead>
                                    <tr>
                                      <th>Customer Name</th>
                                      <th>Visit Date</th>
                                      <th>Purpose</th>
                                      <th>Type</th>
                                      <th className="text-center">Paid Amount</th>
                                      <th />
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/customer-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Clients_06} alt="User Image" /></Link>
                                          <Link to="/customer-profile">Elsie Gilley <span>#CT0006</span></Link>
                                        </h2>
                                      </td>
                                      <td>14 Nov 2020 <span className="d-block text-info">6.00 PM</span></td>
                                      <td>Return Book</td>
                                      <td>Old Customer</td>
                                      <td className="text-center">$300</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a href="" className="btn btn-sm bg-info-light mr-0">
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a href="" className="btn btn-sm bg-success-light mr-0">
                                            <i className="fas fa-check" /> Accept
                                          </a>
                                          <a href="" className="btn btn-sm bg-danger-light">
                                            <i className="fas fa-times" /> Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/customer-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Clients_07} alt="User Image" /></Link>
                                          <Link to="/customer-profile">Joan Gardner <span>#CT0006</span></Link>
                                        </h2>
                                      </td>
                                      <td>14 Nov 2020 <span className="d-block text-info">5.00 PM</span></td>
                                      <td>Return Book</td>
                                      <td>Old Customer</td>
                                      <td className="text-center">$100</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a href="" className="btn btn-sm bg-info-light mr-0">
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a href="" className="btn btn-sm bg-success-light mr-0">
                                            <i className="fas fa-check" /> Accept
                                          </a>
                                          <a href="" className="btn btn-sm bg-danger-light">
                                            <i className="fas fa-times" /> Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/customer-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Clients_08} alt="User Image" /></Link>
                                          <Link to="/customer-profile">Daniel Griffing <span>#CT0007</span></Link>
                                        </h2>
                                      </td>
                                      <td>14 Nov 2020 <span className="d-block text-info">3.00 PM</span></td>
                                      <td>Borrow Book</td>
                                      <td>New Customer</td>
                                      <td className="text-center">$75</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a href="" className="btn btn-sm bg-info-light mr-0">
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a href="" className="btn btn-sm bg-success-light mr-0">
                                            <i className="fas fa-check" /> Accept
                                          </a>
                                          <a href="" className="btn btn-sm bg-danger-light">
                                            <i className="fas fa-times" /> Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/customer-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Clients_09} alt="User Image" /></Link>
                                          <Link to="/customer-profile">Walter Roberson <span>#CT0008</span></Link>
                                        </h2>
                                      </td>
                                      <td>14 Nov 2020 <span className="d-block text-info">1.00 PM</span></td>
                                      <td>Borrow Book</td>
                                      <td>Old Customer</td>
                                      <td className="text-center">$350</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a href="" className="btn btn-sm bg-info-light mr-0">
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a href="" className="btn btn-sm bg-success-light mr-0">
                                            <i className="fas fa-check" /> Accept
                                          </a>
                                          <a href="" className="btn btn-sm bg-danger-light">
                                            <i className="fas fa-times" /> Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/customer-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Clients_10} alt="User Image" /></Link>
                                          <Link to="/customer-profile">Robert Rhodes <span>#CT0010</span></Link>
                                        </h2>
                                      </td>
                                      <td>14 Nov 2020 <span className="d-block text-info">10.00 AM</span></td>
                                      <td>Borrow Book</td>
                                      <td>New Customer</td>
                                      <td className="text-center">$175</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a href="" className="btn btn-sm bg-info-light mr-0">
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a href="" className="btn btn-sm bg-success-light mr-0">
                                            <i className="fas fa-check" /> Accept
                                          </a>
                                          <a href="" className="btn btn-sm bg-danger-light">
                                            <i className="fas fa-times" /> Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/customer-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Clients_11} alt="User Image" /></Link>
                                          <Link to="/customer-profile">Harry Williams <span>#CT0011</span></Link>
                                        </h2>
                                      </td>
                                      <td>14 Nov 2020 <span className="d-block text-info">11.00 AM</span></td>
                                      <td>Return Book</td>
                                      <td>New Customer</td>
                                      <td className="text-center">$450</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a href="" className="btn btn-sm bg-info-light mr-0">
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a href="" className="btn btn-sm bg-success-light mr-0">
                                            <i className="fas fa-check" /> Accept
                                          </a>
                                          <a href="" className="btn btn-sm bg-danger-light">
                                            <i className="fas fa-times" /> Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>		
                              </div>	
                            </div>	
                          </div>	
                        </div>
                        {/* /Today Appointment Tab */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>		
        {/* /Page Content */}
        </>
        )
    }
}
export default LibrarienDashboard;