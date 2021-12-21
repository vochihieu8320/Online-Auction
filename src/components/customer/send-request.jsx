import React from 'react';
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
// Import Sidebar
import { CustomerSidebar } from './customer_sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CustomerUpgrade extends React.Component {
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
                                        <li className="breadcrumb-item active" aria-current="page">Change Password</li>
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
                                    <CustomerSidebar />
                                </StickyBox>
                                {/* /Profile Sidebar */}
                            </div>
                            <div className="col-md-7 col-lg-8 col-xl-9">
                                <div className="card">
                                    <div className="card-body">
                                        {/* Social Form */}
                                        {/* <form>
                                            <div className="card-body">
                                                <div className="success-cont">
                                                    <h3>Main Auction</h3>
                                                    <p>If you want to be a seller, click "Upgrade Account" , otherwise ring "Cancel"</p>
                                                </div>
                                            </div>

                                            <div className="submit-section" class="col d-flex justify-content-center">
                                                <button type="submit" className="btn btn-primary submit-btn">Accept</button>
                                                <button type="button" class="btn btn-primary btn-block ">Button 1</button>
                                                <button type="button" class="btn btn-default btn-block">Button 2</button>
                                            </div>
                                        </form> */}
                                        <div className="row form-row justify-content-center">
                                            {/* Success Card */}
                                            <div className="card success-card">
                                                <div className="card-body">
                                                    <div className="success-cont ">
                                                        <i class="fas fa-question-circle"></i>
                                                        <h3>Main Auction</h3>
                                                        <p>If you want to be a Seller, please click "Upgrade Account" , please click "Cancel" if you are still bidder</p>
                                                    </div>
                                                </div>
                                                <div className="submit-section" class="col d-flex justify-content-center">
                                                    <button type="button" class="btn btn-outline-warning btn-sm btn mr-3 submit-btn">Upgrade Account</button>
                                                    <button type="button" class="btn btn-outline-danger btn-sm btn mr-3 submit-btn" >Cancel</button>
                                                </div>
                                            </div>
                                            {/* accept */}

                                        </div>
                                        {/* /Social Form */}
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
export default CustomerUpgrade;