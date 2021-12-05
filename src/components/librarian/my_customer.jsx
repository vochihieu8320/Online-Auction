import React from 'react';
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
// Import Sidebar
import { LibrarienSidebar } from './librarien_sidebar';
// Import Images
import { Clients_0,Clients_01,Clients_02,Clients_03,Clients_04,Clients_05,Clients_06,Clients_07,Clients_08,
  Clients_09,Clients_10,Clients_11 } from "../imagepath"

class MyCustomer extends React.Component {
	
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
                        <li className="breadcrumb-item active" aria-current="page">My Customers</li>
                      </ol>
                    </nav>
                    <h2 className="breadcrumb-title">My Customers</h2>
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
                <div className="row row-grid">
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <Link to="/customer-profile" className="booking-doc-img">
                              <img src={Clients_0} alt="User Image" />
                            </Link>
                            <div className="profile-det-info">
                              <h3><Link to="/customer-profile">Richard Wilson</Link></h3>
                              <div className="receiver-details">
                                <h5><b>Client ID :</b> CT0016</h5>
                                <h5 className="mb-0"><i className="fas fa-map-marker-alt" /> Alabama, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="receiver-info">
                          <ul>
                            <li>Phone <span>+1 952 001 8563</span></li>
                            <li>Age <span>38 Years, Male</span></li>
                            <li>Books Borrowed <span>12</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <Link to="/customer-profile" className="booking-doc-img">
                              <img src={Clients_01} alt="User Image" />
                            </Link>
                            <div className="profile-det-info">
                              <h3><Link to="/customer-profile">Charlene Reed</Link></h3>
                              <div className="receiver-details">
                                <h5><b>Client ID :</b> CT0001</h5>
                                <h5 className="mb-0"><i className="fas fa-map-marker-alt" /> North Carolina, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="receiver-info">
                          <ul>
                            <li>Phone <span>+1 828 632 9170</span></li>
                            <li>Age <span>29 Years, Female</span></li>
                            <li>Books Borrowed <span>08</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <a href="#" className="booking-doc-img">
                              <img src={Clients_02} alt="User Image" />
                            </a>
                            <div className="profile-det-info">
                              <h3>Travis Trimble </h3>
                              <div className="receiver-details">
                                <h5><b>Client ID :</b> CT0002</h5>
                                <h5 className="mb-0"><i className="fas fa-map-marker-alt" /> Maine, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="receiver-info">
                          <ul>
                            <li>Phone <span>+1 207 729 9974</span></li>
                            <li>Age <span>23 Years, Male</span></li>
                            <li>Books Borrowed <span>03</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <a href="#" className="booking-doc-img">
                              <img src={Clients_03} alt="User Image" />
                            </a>
                            <div className="profile-det-info">
                              <h3>Carl Kelly</h3>
                              <div className="receiver-details">
                                <h5><b>Client ID :</b> CT0003</h5>
                                <h5 className="mb-0"><i className="fas fa-map-marker-alt" /> Indiana, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="receiver-info">
                          <ul>
                            <li>Phone <span>+1 260 724 7769</span></li>
                            <li>Age <span>32 Years, Male</span></li>
                            <li>Books Borrowed <span>10</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <a href="#" className="booking-doc-img">
                              <img src={Clients_04} alt="User Image" />
                            </a>
                            <div className="profile-det-info">
                              <h3>Michelle Fairfax</h3>
                              <div className="receiver-details">
                                <h5><b>Client ID :</b> CT0004</h5>
                                <h5 className="mb-0"><i className="fas fa-map-marker-alt" /> Indiana, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="receiver-info">
                          <ul>
                            <li>Phone <span>+1 504 368 6874</span></li>
                            <li>Age <span>25 Years, Female</span></li>
                            <li>Books Borrowed <span>15</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <a href="#" className="booking-doc-img">
                              <img src={Clients_05} alt="User Image" />
                            </a>
                            <div className="profile-det-info">
                              <h3>Gina Moore</h3>
                              <div className="receiver-details">
                                <h5><b>Client ID :</b> CT0005</h5>
                                <h5 className="mb-0"><i className="fas fa-map-marker-alt" /> Florida, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="receiver-info">
                          <ul>
                            <li>Phone <span>+1 954 820 7887</span></li>
                            <li>Age <span>25 Years, Female</span></li>
                            <li>Books Borrowed <span>04</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <a href="#" className="booking-doc-img">
                              <img src={Clients_06} alt="User Image" />
                            </a>
                            <div className="profile-det-info">
                              <h3>Elsie Gilley</h3>
                              <div className="receiver-details">
                                <h5><b>Client ID :</b> CT0006</h5>
                                <h5 className="mb-0"><i className="fas fa-map-marker-alt" /> Kentucky, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="receiver-info">
                          <ul>
                            <li>Phone <span>+1 315 384 4562</span></li>
                            <li>Age <span>14 Years, Female</span></li>
                            <li>Books Borrowed <span>08</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <a href="#" className="booking-doc-img">
                              <img src={Clients_07} alt="User Image" />
                            </a>
                            <div className="profile-det-info">
                              <h3>Joan Gardner</h3>
                              <div className="receiver-details">
                                <h5><b>Client ID :</b> CT0007</h5>
                                <h5 className="mb-0"><i className="fas fa-map-marker-alt" /> California, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="receiver-info">
                          <ul>
                            <li>Phone <span>+1 707 2202 603</span></li>
                            <li>Age <span>25 Years, Female</span></li>
                            <li>Books Borrowed <span>01</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <a href="#" className="booking-doc-img">
                              <img src={Clients_08} alt="User Image" />
                            </a>
                            <div className="profile-det-info">
                              <h3>Daniel Griffing</h3>
                              <div className="receiver-details">
                                <h5><b>Client ID :</b> CT0007</h5>
                                <h5 className="mb-0"><i className="fas fa-map-marker-alt" /> New Jersey, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="receiver-info">
                          <ul>
                            <li>Phone <span>+1 973 773 9497</span></li>
                            <li>Age <span>28 Years, Male</span></li>
                            <li>Books Borrowed <span>03</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <a href="#" className="booking-doc-img">
                              <img src={Clients_09} alt="User Image" />
                            </a>
                            <div className="profile-det-info">
                              <h3>Walter Roberson</h3>
                              <div className="receiver-details">
                                <h5><b>Client ID :</b> CT0009</h5>
                                <h5 className="mb-0"><i className="fas fa-map-marker-alt" /> Florida, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="receiver-info">
                          <ul>
                            <li>Phone <span>+1 850 358 4445</span></li>
                            <li>Age <span>28 Years, Male</span></li>
                            <li>Books Borrowed <span>05</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <a href="#" className="booking-doc-img">
                              <img src={Clients_10} alt="User Image" />
                            </a>
                            <div className="profile-det-info">
                              <h3>Robert Rhodes</h3>
                              <div className="receiver-details">
                                <h5><b>Client ID :</b> CT0010</h5>
                                <h5 className="mb-0"><i className="fas fa-map-marker-alt" /> California, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="receiver-info">
                          <ul>
                            <li>Phone <span>+1 858 259 5285</span></li>
                            <li>Age <span>19 Years, Male</span></li>
                            <li>Books Borrowed <span>06</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <a href="#" className="booking-doc-img">
                              <img src={Clients_11} alt="User Image" />
                            </a>
                            <div className="profile-det-info">
                              <h3>Harry Williams</h3>
                              <div className="receiver-details">
                                <h5><b>Client ID :</b> CT0011</h5>
                                <h5 className="mb-0"><i className="fas fa-map-marker-alt" /> Colorado, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="receiver-info">
                          <ul>
                            <li>Phone <span>+1 303 607 7075</span></li>
                            <li>Age <span>9 Years, Male</span></li>
                            <li>Books Borrowed <span>14</span></li>
                          </ul>
                        </div>
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
export default MyCustomer;