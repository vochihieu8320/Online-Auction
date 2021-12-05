import React from 'react';
import { Link } from "react-router-dom";
import {LoginBanner} from "../imagepath"

class Login extends React.Component {
	
    render() {
        return (
			<>
			  {/* Page Content */}
        <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {/* Login Tab Content */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img src={LoginBanner} className="img-fluid" alt="Dreams Library Login" />	
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>Login <span>Main Auction</span></h3>
                    </div>
                    <div>
                      <div className="form-group form-focus">
                        <input type="email" className="form-control floating" />
                        <label className="focus-label">Email</label>
                      </div>
                      <div className="form-group form-focus">
                        <input type="password" className="form-control floating" />
                        <label className="focus-label">Password</label>
                      </div>
                      <div className="text-right">
                        <Link className="forgot-link" to="/forgot-password">Forgot Password ?</Link>
                      </div>
                      <button className="btn btn-primary btn-block btn-lg login-btn" type="submit">
                        <Link to="/" style={{color:"white"}}>Login</Link></button>
                      <div className="login-or">
                        <span className="or-line" />
                        <span className="span-or">or</span>
                      </div>
                      <div className="row form-row social-login">
                        <div className="col-6">
                          <a href="#" className="btn btn-facebook btn-block"><i className="fab fa-facebook-f mr-1" /> Login</a>
                        </div>
                        <div className="col-6">
                          <a href="#" className="btn btn-google btn-block"><i className="fab fa-google mr-1" /> Login</a>
                        </div>
                      </div>
                      <div className="text-center dont-have">Don’t have an account? <Link to="/register">Register</Link></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Login Tab Content */}
            </div>
          </div>
        </div>
      </div>		
      {/* /Page Content */}
			</>
        )
    }
}
export default Login;