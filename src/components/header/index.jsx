import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Flag_us_01, Course, Logo, Flag_us, Flag_vn, Clients_0, Flag_fr } from '../imagepath';

class Header extends Component {
  componentDidMount() {
    $('.main-nav a').on('click', function (e) {
      if ($(this).parent().hasClass('has-submenu')) {
        e.preventDefault();
      }
      if (!$(this).hasClass('submenu')) {
        $('ul', $(this).parents('ul:first')).slideUp(350);
        $('a', $(this).parents('ul:first')).removeClass('submenu');
        $(this).next('ul').slideDown(350);
        $(this).addClass('submenu');
      } else if ($(this).hasClass('submenu')) {
        $(this).removeClass('submenu');
        $(this).next('ul').slideUp(350);
      }
    });
  }

  render() {
    const pathname = this.props.location.pathname.split("/")[1];
    return (
      <header className={`header${pathname === "/" || pathname === "" ? " header-top" : ""}`}>
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <a id="mobile_btn" href="">
              <span className="bar-icon">
                <span />
                <span />
                <span />
              </span>
            </a>
            <Link to="/" className="navbar-brand logo">
              <img src={Logo} className="img-fluid" alt="Logo" />
            </Link>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link to="/" className="menu-logo">
                <img src={Logo} className="img-fluid" alt="Logo" />
              </Link>
              <a id="menu_close" className="menu-close" href="">
                <i className="fas fa-times" />
              </a>
            </div>

            <ul className="main-nav bg-trans">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li >
                <Link to="/admin-dashboard">Admin</Link>
              </li>
              <li>
                <Link to="/search">Bidding</Link>
              </li>
              <li>
                <Link to="/search">Selling</Link>
              </li>
              {/* <li>
                <Link to="/customer-dashboard">Customer</Link>
              </li> */}
              {/* <li className={`has-submenu ${pathname === ('search') ? 'active' : pathname === ('librarian-profile') ? 'active' :
                pathname === ('booking') ? 'active' : pathname === ('checkout') ? 'active' :
                  pathname === ('booking-success') ? 'active' : pathname === ('customer-dashboard') ? 'active' :
                    // pathname === ('favourites') ? 'active' : pathname === ('chat') ? 'active' :
                    pathname === ('profile-settings') ? 'active' : pathname === ('change-password') ? 'active' : ''}`}>
                <a href="">Customer <i className="fas fa-chevron-down" /></a> */}
              {/* <ul className="submenu"> */}

              {/* <li className={`has-submenu ${pathname === ('map-grid') ? 'active' : pathname === ('map-list') ? 'active' : ''}`}>
                    <a href="#">Browse Listing</a>
                    <ul className="submenu">
                      <li className={pathname === "map-grid" ? "active" : ""}>
                        <li className={`has-submenu ${pathname === ('map-grid') ? 'active' : pathname === ('map-list') ? 'active' : ''}`}>
                          <a href="#">Electronic</a>
                          <ul className="submenu">
                            <li className={pathname === "map-grid" ? "active" : ""}>
                              <Link to="/map-grid">Cellphone
                              </Link>
                              <Link to="/map-grid">Laptop
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </li>
                    </ul>
                  </li> */}

              {/* <li className={pathname === "librarian-profile" ? "active" : ""}><Link to="/librarian-profile">Librarian Profile</Link></li> */}
              {/* <li className={pathname === "booking" ? "active" : ""}><Link to="/booking">Booking</Link></li> */}

              {/* <li className={pathname === "booking-success" ? "active" : ""}><Link to="/booking-success">Booking Success</Link></li> */}

              {/* <li className={pathname === "favourites" ? "active" : ""}><Link to="/favourites">Favourites</Link></li> */}
              {/* <li className={pathname === "checkout" ? "active" : ""}><Link to="/checkout">Checkout</Link></li> */}
              {/* <li className={pathname === "profile-settings" ? "active" : ""}><Link to="/profile-settings">Profile Settings</Link></li>
                  <li className={pathname === "change-password" ? "active" : ""}><Link to="/customer-change-password">Change Password</Link></li> */}
              {/* </ul> */}
              {/* </li> */}


              {/* <li className={`has-submenu ${pathname === ('voice-call') ? 'active' : pathname === ('video-call')
                ? 'active' : pathname === ('calendar') ? 'active' : pathname === ('components') ? 'active' :
                  pathname === ('invoice-view') ? 'active' :
                    pathname === ('blank-page') ? 'active' : pathname === ('login') ? 'active' :
                      pathname === ('register') ? 'active' : pathname === ('forgot-password') ? 'active' : ''}`}> */}
              {/* <li>

                <a href="">Sell <i className="fas fa-chevron-down" /></a>
                {/* <ul className="submenu"> */}

              {/* <li><Link to="/search">Search </Link></li> */} */
              {/* <li className={pathname === "calendar" ? "active" : ""}><Link to="/calendar">Calendar</Link></li> */}
              {/* <li className={pathname === "components" ? "active" : ""}><Link to="/components">Components</Link></li>
                  <li className={`has-submenu ${pathname === ('invoice-view') ? 'active' : ''}`}>
                    <Link to="/invoices">Invoices</Link>
                    <ul className="submenu">
                      <li><Link to="/invoices">Invoices</Link></li>
                      <li className={pathname === "invoice-view" ? "active" : ""}><Link to="/invoice-view">Invoice View</Link></li>
                    </ul>
                  </li> */}
              {/* <li className={pathname === "blank-page" ? "active" : ""}><Link to="/blank-page">Starter Page</Link></li> */}

              {/* <li className={pathname === "forgot-password" ? "active" : ""}><Link to="/forgot-password">Forgot Password</Link></li> */}
              {/* </ul> */}
              {/* </li> */}
              <li className="searchbar">
                <i className="fa fa-search" aria-hidden="fasle" />
                <div className="togglesearch">
                  <input type="text" placeholder="" className="top-search" />
                  <button className="btn btn-toogle">search</button>
                </div>
              </li>
              <li className="login-link">
                <Link to="/login">Login / Signup</Link>
              </li>
            </ul>
          </div>
          <ul className="nav header-navbar-rht align-items-center">



            {/* Flag */}
            {/* <li className="nav-item dropdown flag-nav">
              <a className="nav-link dropdown-toggle align-items-center text-center" data-toggle="dropdown" href="#" role="button">
                <figure>
                  <figure>
                    <img src={Flag_us_01} alt="" width={18} height={12} className="lang-flag" />
                    <figcaption> ENG </figcaption>
                  </figure>
                </figure>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a href="" className="dropdown-item">
                  <img src={Flag_us} alt="" height={16} /> ENG
                </a>
                <a href="" className="dropdown-item">
                  <img src={Flag_fr} alt="" height={16} /> VND
                </a>

              </div>
            </li> */}
            {/* /Flag */}


            {/* <li className="nav-item d-flex">
              <Link to="/booking" className="nav-booking mr-2">
                <img src={Course} width={22} alt="" />
              </Link>
              <Link to="/booking" className="nav-book-content">
                <span>Courses</span>
                <p>$200</p>
              </Link>
            </li> */}


            {/* Login */}
            {pathname === "/" || pathname === "" ? <li className="nav-item contact-item">
              <i className="far fa-user mr-2" />
              <Link to="/login">SIGN UP / SIGN IN</Link>
            </li> :

              <li className="nav-item dropdown has-arrow logged-item">
                <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false">
                  <span className="user-img">
                    <img className="rounded-circle" src={Clients_0} width={31} alt="Darren Elder" />
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <div className="user-header">
                    <div className="avatar avatar-sm">
                      <img src={Clients_0} alt="User Image" className="avatar-img rounded-circle" />
                    </div>
                    <div className="user-text">
                      <h6>Darren Elder</h6>
                      <p className="text-muted mb-0">Librarian</p>
                    </div>
                  </div>
                  <Link className="dropdown-item" to="/admin-dashboard">Dashboard</Link>
                  <Link className="dropdown-item" to="/admin-profile-settings">Profile Settings</Link>
                  <Link className="dropdown-item" to="/login">Logout</Link>
                </div>
              </li>}
            {/* /Login */}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
