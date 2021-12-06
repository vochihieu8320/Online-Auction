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
                      <div className="profile-det-info">
                        <h3>ADMIN</h3>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-widget">
                    <nav className="dashboard-menu">
                      <ul>
                        <li>
                          <Link to="/admin-dashboard">
                            <i className="fas fa-columns" />
                            <span>Dashboard</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/edit-category">
                            <i class="fas fa-boxes"></i>
                            <span>Manage Category</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/upgrade-account">
                            <i className="fas fa-calendar-check" />
                            <span>Upgrade Account</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/edit-product">
                          <i class="fas fa-box-open"></i>
                            <span>Manage Product</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/my-customer">
                            <i className="fas fa-user-injured" />
                            <span>My Customers</span>
                          </Link>
                        </li>
               
                        <li>
                          <Link to="/admin-profile-settings">
                            <i className="fas fa-user-cog" />
                            <span>Profile Settings</span>
                          </Link>
                        </li>
                        {/* <li className={`${pathname === "social-media" ? "active" : ""}`}>
                          <Link to="/social-media">
                            <i className="fas fa-share-alt" />
                            <span>Social Media</span>
                          </Link>
                        </li> */}
                        <li>
                          <Link to="/change-password">
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