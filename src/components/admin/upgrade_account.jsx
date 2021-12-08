import React from 'react';
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
// Import Sidebar
import { LibrarienSidebar } from './admin_sidebar';
// Import Images
import { Clients_01,Clients_02,Clients_03,Clients_04,Clients_05,Clients_06,Clients_07,Clients_08,
  Clients_09,Clients_10,Clients_11,Clients_0 } from "../imagepath"

class UpgradeAccount extends React.Component {
	
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
                    <li className="breadcrumb-item active" aria-current="page">Upgrade Account</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Upgrade Account</h2>
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
                <div className="appointments">
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <Link to="/customer-profile" className="booking-doc-img">
                        <img src={Clients_0} alt="User Image" />
                      </Link>
                      <div className="profile-det-info">
                        <h3><Link to="/customer-profile">Richard Wilson</Link></h3>
                        <div className="receiver-details">
                          <h5><i className="far fa-clock" /> 14 Nov 2019, 10.00 AM</h5>
                          <h5><i className="fas fa-map-marker-alt" /> Newyork, United States</h5>
                          <h5><i className="fas fa-envelope" /> richard@example.com</h5>
                          <h5 className="mb-0"><i className="fas fa-phone" /> +1 923 782 4575</h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                        <i className="far fa-eye" /> View
                      </a>
                      <a href="" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a href="" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <Link to="/customer-profile" className="booking-doc-img">
                        <img src={Clients_01} alt="User Image" />
                      </Link>
                      <div className="profile-det-info">
                        <h3><Link to="/customer-profile">Charlene Reed </Link></h3>
                        <div className="receiver-details">
                          <h5><i className="far fa-clock" /> 12 Nov 2019, 5.00 PM</h5>
                          <h5><i className="fas fa-map-marker-alt" /> North Carolina, United States</h5>
                          <h5><i className="fas fa-envelope" /> charlenereed@example.com</h5>
                          <h5 className="mb-0"><i className="fas fa-phone" /> +1 828 632 9170</h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                        <i className="far fa-eye" /> View
                      </a>
                      <a href="" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a href="" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <Link to="/customer-profile" className="booking-doc-img">
                        <img src={Clients_02} alt="User Image" />
                      </Link>
                      <div className="profile-det-info">
                        <h3><Link to="/customer-profile">Travis Trimble</Link></h3>
                        <div className="receiver-details">
                          <h5><i className="far fa-clock" /> 11 Nov 2019, 8.00 PM</h5>
                          <h5><i className="fas fa-map-marker-alt" /> Maine, United States</h5>
                          <h5><i className="fas fa-envelope" /> travistrimble@example.com</h5>
                          <h5 className="mb-0"><i className="fas fa-phone" /> +1 207 729 9974</h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                        <i className="far fa-eye" /> View
                      </a>
                      <a href="" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a href="" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <Link to="/customer-profile" className="booking-doc-img">
                        <img src={Clients_03} alt="User Image" />
                      </Link>
                      <div className="profile-det-info">
                        <h3><Link to="/customer-profile">Carl Kelly</Link></h3>
                        <div className="receiver-details">
                          <h5><i className="far fa-clock" /> 9 Nov 2019, 9.00 AM</h5>
                          <h5><i className="fas fa-map-marker-alt" /> Newyork, United States</h5>
                          <h5><i className="fas fa-envelope" /> carlkelly@example.com</h5>
                          <h5 className="mb-0"><i className="fas fa-phone" /> +1 260 724 7769</h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                        <i className="far fa-eye" /> View
                      </a>
                      <a href="" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a href="" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <Link to="/customer-profile" className="booking-doc-img">
                        <img src={Clients_04} alt="User Image" />
                      </Link>
                      <div className="profile-det-info">
                        <h3><Link to="/customer-profile">Michelle Fairfax</Link></h3>
                        <div className="receiver-details">
                          <h5><i className="far fa-clock" /> 9 Nov 2019, 1.00 PM</h5>
                          <h5><i className="fas fa-map-marker-alt" /> Indiana, United States</h5>
                          <h5><i className="fas fa-envelope" /> michellefairfax@example.com</h5>
                          <h5 className="mb-0"><i className="fas fa-phone" /> +1 504 368 6874</h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                        <i className="far fa-eye" /> View
                      </a>
                      <a href="" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a href="" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <Link to="/customer-profile" className="booking-doc-img">
                        <img src={Clients_05} alt="User Image" />
                      </Link>
                      <div className="profile-det-info">
                        <h3><Link to="/customer-profile">Gina Moore</Link></h3>
                        <div className="receiver-details">
                          <h5><i className="far fa-clock" /> 8 Nov 2019, 3.00 PM</h5>
                          <h5><i className="fas fa-map-marker-alt" /> Florida, United States</h5>
                          <h5><i className="fas fa-envelope" /> ginamoore@example.com</h5>
                          <h5 className="mb-0"><i className="fas fa-phone" /> +1 954 820 7887</h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                        <i className="far fa-eye" /> View
                      </a>
                      <a href="" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a href="" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <Link to="/customer-profile" className="booking-doc-img">
                        <img src={Clients_06} alt="User Image" />
                      </Link>
                      <div className="profile-det-info">
                        <h3><Link to="/customer-profile">Elsie Gilley</Link></h3>
                        <div className="receiver-details">
                          <h5><i className="far fa-clock" /> 6 Nov 2019, 9.00 AM</h5>
                          <h5><i className="fas fa-map-marker-alt" /> Kentucky, United States</h5>
                          <h5><i className="fas fa-envelope" /> elsiegilley@example.com</h5>
                          <h5 className="mb-0"><i className="fas fa-phone" /> +1 315 384 4562</h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                        <i className="far fa-eye" /> View
                      </a>
                      <a href="" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a href="" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <Link to="/customer-profile" className="booking-doc-img">
                        <img src={Clients_07} alt="User Image" />
                      </Link>
                      <div className="profile-det-info">
                        <h3><Link to="/customer-profile">Joan Gardner</Link></h3>
                        <div className="receiver-details">
                          <h5><i className="far fa-clock" /> 5 Nov 2019, 12.00 PM</h5>
                          <h5><i className="fas fa-map-marker-alt" /> California, United States</h5>
                          <h5><i className="fas fa-envelope" /> joangardner@example.com</h5>
                          <h5 className="mb-0"><i className="fas fa-phone" /> +1 707 2202 603</h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                        <i className="far fa-eye" /> View
                      </a>
                      <a href="" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a href="" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <Link to="/customer-profile" className="booking-doc-img">
                        <img src={Clients_08} alt="User Image" />
                      </Link>
                      <div className="profile-det-info">
                        <h3><Link to="/customer-profile">Daniel Griffing</Link></h3>
                        <div className="receiver-details">
                          <h5><i className="far fa-clock" /> 5 Nov 2019, 7.00 PM</h5>
                          <h5><i className="fas fa-map-marker-alt" /> New Jersey, United States</h5>
                          <h5><i className="fas fa-envelope" /> danielgriffing@example.com</h5>
                          <h5 className="mb-0"><i className="fas fa-phone" /> +1 973 773 9497</h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                        <i className="far fa-eye" /> View
                      </a>
                      <a href="" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a href="" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <Link to="/customer-profile" className="booking-doc-img">
                        <img src={Clients_09} alt="User Image" />
                      </Link>
                      <div className="profile-det-info">
                        <h3><Link to="/customer-profile">Walter Roberson</Link></h3>
                        <div className="receiver-details">
                          <h5><i className="far fa-clock" /> 4 Nov 2019, 10.00 AM</h5>
                          <h5><i className="fas fa-map-marker-alt" /> Florida, United States</h5>
                          <h5><i className="fas fa-envelope" /> walterroberson@example.com</h5>
                          <h5 className="mb-0"><i className="fas fa-phone" /> +1 850 358 4445</h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                        <i className="far fa-eye" /> View
                      </a>
                      <a href="" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a href="" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <Link to="/customer-profile" className="booking-doc-img">
                        <img src={Clients_10} alt="User Image" />
                      </Link>
                      <div className="profile-det-info">
                        <h3><Link to="/customer-profile">Robert Rhodes</Link></h3>
                        <div className="receiver-details">
                          <h5><i className="far fa-clock" /> 4 Nov 2019, 11.00 AM</h5>
                          <h5><i className="fas fa-map-marker-alt" /> California, United States</h5>
                          <h5><i className="fas fa-envelope" /> robertrhodes@example.com</h5>
                          <h5 className="mb-0"><i className="fas fa-phone" /> +1 858 259 5285</h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                        <i className="far fa-eye" /> View
                      </a>
                      <a href="" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a href="" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <Link to="/customer-profile" className="booking-doc-img">
                        <img src={Clients_11} alt="User Image" />
                      </Link>
                      <div className="profile-det-info">
                        <h3><Link to="/customer-profile">Harry Williams</Link></h3>
                        <div className="receiver-details">
                          <h5><i className="far fa-clock" /> 3 Nov 2019, 6.00 PM</h5>
                          <h5><i className="fas fa-map-marker-alt" /> Colorado, United States</h5>
                          <h5><i className="fas fa-envelope" /> harrywilliams@example.com</h5>
                          <h5 className="mb-0"><i className="fas fa-phone" /> +1 303 607 7075</h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                        <i className="far fa-eye" /> View
                      </a>
                      <a href="" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a href="" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                </div>
              </div>
            </div>
          </div>
        </div>		
        {/* /Page Content */}
         {/* Appointment Details Modal */}
      <div className="modal fade custom-modal" id="appt_details">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Appointment Details</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <ul className="info-details">
                <li>
                  <div className="details-header">
                    <div className="row">
                      <div className="col-md-6">
                        <span className="title">#APT0001</span>
                        <span className="text">21 Oct 2019 10:00 AM</span>
                      </div>
                      <div className="col-md-6">
                        <div className="text-right">
                          <button type="button" className="btn bg-success-light btn-sm" id="topup_status">Completed</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <span className="title">Status:</span>
                  <span className="text">Completed</span>
                </li>
                <li>
                  <span className="title">Confirm Date:</span>
                  <span className="text">29 Jun 2019</span>
                </li>
                <li>
                  <span className="title">Paid Amount</span>
                  <span className="text">$450</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* /Appointment Details Modal */}
			</>
        )
    }
}
export default UpgradeAccount;