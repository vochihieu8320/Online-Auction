import React from 'react';
import { Link } from "react-router-dom";
import {LoginBanner} from "../imagepath"

class ForgotPassword extends React.Component {
	
    render() {
        return (
			<>
			   {/* Page Content */}
         <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {/* Account Content */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img src={LoginBanner} className="img-fluid" alt="Login Banner" />	
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>Forgot Password?</h3>
                      <p className="small text-muted">Enter your email to get a password reset link</p>
                    </div>
                    {/* Forgot Password Form */}
                    <div>
                      <div className="form-group form-focus">
                        <input type="email" className="form-control floating" />
                        <label className="focus-label">Email</label>
                      </div>
                      <div className="text-right">
                        <Link className="forgot-link" to="/login">Remember your password?</Link>
                      </div>
                      <button className="btn btn-primary btn-block btn-lg login-btn" type="submit">
                      <Link to="/login" style={{color:"white"}}>Reset Password</Link></button>
                    </div>
                    {/* /Forgot Password Form */}
                  </div>
                </div>
              </div>
              {/* /Account Content */}
            </div>
          </div>
        </div>
      </div>		
      {/* /Page Content */}
			</>
        )
    }
}
export default ForgotPassword;