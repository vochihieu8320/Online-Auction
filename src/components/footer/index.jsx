import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
 
  render() {
    const exclusionArray = ["chat", "chat-stylist", "voice-call", "video-call", "map-grid", "map-list"];
    if (
      exclusionArray.indexOf(this.props.location.pathname.split("/")[1]) >= 0
    ) {
      return "";
    }

    return (
      <>
       {/* Footer */}
       <footer className="footer">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-about">
                  <h2 className="footer-title">ABOUT MAIN AUCTION</h2>
                  <div className="footer-about-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris </p>
                  </div>
                </div>
                {/* /Footer Widget */}
              </div>
              <div className="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">For Bidder</h2>
                  <ul>
                    <li><Link to="/search">Search Librarian</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/favourites">Favourites</Link></li>
                    <li><Link to="/customer-dashboard">Customer Dashboard</Link></li>
                  </ul>
                </div>
                {/* /Footer Widget */}
              </div>
              <div className="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">For Seller</h2>
                  <ul>
                    <li><Link to="/my-customer">Customer List</Link></li>
                    <li><Link to="/chat">Chat</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/librarian-dashboard">Librarian Dashboard</Link></li>
                  </ul>
                </div>
                {/* /Footer Widget */}
              </div>
              <div className="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">NEWSLETTER</h2>
                  <p>Sign Up to Our Newsletter to Get Latest Updates &amp; Services</p>
                  <div className="input-group my-3 footer-newsletter">
                    <form>
                      <input type="text" placeholder="Enter Your Email" />
                      <div>
                        <button className="btn btn-newsletter" type="submit"><i className="fa fa-paper-plane text-white" aria-hidden="true" /></button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* /Footer Widget */}
              </div>
            </div>
          </div>
        </div>
        {/* /Footer Top */}
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            {/* Copyright */}
            <div className="copyright">
              <div className="row">
                <div className="col-md-4 col-12">
                  <div className="copyright-text text-left">
                    <p>© 2021 Main Auction</p>
                  </div>
                </div>
                <div className="col-md-5 col-12">
                  <div className="copyright-text">
                    <p><Link to="/term-condition" className="text-white">Terms - Privacy Policy &amp; Safety - Send feedback</Link></p>
                  </div>
                </div>
                <div className="col-md-3 col-12">
                  <div className="social-icon text-md-right">
                    <ul>
                      <li>
                        <a href="#"><i className="fab fa-facebook-f top-icons" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="fab fa-instagram top-icons" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="fab fa-linkedin-in top-icons" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="fab fa-twitter top-icons" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* /Copyright */}
          </div>
        </div>
        {/* /Footer Bottom */}
      </footer>
      {/* /Footer */}
      </>
    );
  }
}

export default Footer;
