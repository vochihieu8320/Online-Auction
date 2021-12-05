import React from 'react';
import { Link } from "react-router-dom";
// Import Images
import {Admin_thumb_02} from '../imagepath';

class LibrarienSidebar extends React.Component {
    render() {
        const pathname = (window.location.pathname).split("/")[2];
        return(
            <div className="profile-sidebar">
                  <div className="widget-profile pro-widget-content">
                    <div className="profile-info-widget">
                      <a href="#" className="booking-doc-img">
                        <img src={Admin_thumb_02} alt="User Image" />
                      </a>
                      <div className="profile-det-info">
                        <h3>Darren Elder</h3>
                        <div className="receiver-details">
                          <h5 className="mb-0">B.Li.Sc., M.Li.Sc., Library and Information Science</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-widget">
                    <nav className="dashboard-menu">
                      <ul>
                        <li className={`${pathname === "librarian-dashboard" ? "active" : ""}`}>
                          <Link to="/librarian-dashboard">
                            <i className="fas fa-columns" />
                            <span>Dashboard</span>
                          </Link>
                        </li>
                        <li className={`${pathname === "appointments" ? "active" : ""}`}>
                          <Link to="/appointments">
                            <i className="fas fa-calendar-check" />
                            <span>Appointments</span>
                          </Link>
                        </li>
                        <li className={`${pathname === "my-customer" ? "active" : ""}`}>
                          <Link to="/my-customer">
                            <i className="fas fa-user-injured" />
                            <span>My Customers</span>
                          </Link>
                        </li>
                        <li className={`${pathname === "schedule-timings" ? "active" : ""}`}>
                          <Link to="/schedule-timings">
                            <i className="fas fa-hourglass-start" />
                            <span>Schedule Timings</span>
                          </Link>
                        </li>
                        <li className={`${pathname === "invoices" ? "active" : ""}`}>
                          <Link to="/invoices">
                            <i className="fas fa-file-invoice" />
                            <span>Invoices</span>
                          </Link>
                        </li>
                        <li className={`${pathname === "reviews" ? "active" : ""}`}>
                          <Link to="/reviews">
                            <i className="fas fa-star" />
                            <span>Reviews</span>
                          </Link>
                        </li>
                        <li className={`${pathname === "chat" ? "active" : ""}`}>
                          <Link to="/chat">
                            <i className="fas fa-comments" />
                            <span>Message</span>
                            <small className="unread-msg">23</small>
                          </Link>
                        </li>
                        <li className={`${pathname === "librarian-profile-settings" ? "active" : ""}`}>
                          <Link to="/librarian-profile-settings">
                            <i className="fas fa-user-cog" />
                            <span>Profile Settings</span>
                          </Link>
                        </li>
                        <li className={`${pathname === "social-media" ? "active" : ""}`}>
                          <Link to="/social-media">
                            <i className="fas fa-share-alt" />
                            <span>Social Media</span>
                          </Link>
                        </li>
                        <li className={`${pathname === "librarian-change-password" ? "active" : ""}`}>
                          <Link to="/librarian-change-password">
                            <i className="fas fa-lock" />
                            <span>Change Password</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <i className="fas fa-sign-out-alt" />
                            <span>Logout</span>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>       
        )
    }
}
export { LibrarienSidebar };