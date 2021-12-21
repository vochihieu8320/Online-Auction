import React from 'react';
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
// Import Sidebar
import { CustomerSidebarTwo } from './customer-sidebar-2';
// Import Images
import { Clients_0 } from "../imagepath"

class PostProduct extends React.Component {

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
                                        <li className="breadcrumb-item active" aria-current="page">Profile Settings</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Profile Settings</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Breadcrumb */}
                {/* Page Content */}
                <div className="content">
                    <div className="container">
                        <div className="row">
                            {/* Profile Sidebar */}
                            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                                <StickyBox offsetTop={20} offsetBottom={20}>
                                    <CustomerSidebarTwo />
                                </StickyBox>
                            </div>
                            {/* /Profile Sidebar */}
                            <div className="col-md-7 col-lg-8 col-xl-9">
                                <div className="card">
                                    <div className="card-body">
                                        {/* Profile Settings Form */}
                                        <form>
                                            <div className="row form-row">

                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Name of Product</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Starting Price</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Price Buy Now</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label for="exampleFormControlTextarea1">Descripe Product</label>
                                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                    </div>
                                                </div>
                                                {/* <div className="col-12 col-md-6">
                                                     <div className="form-group">
                                                        <label>Last Name</label>
                                                        <input type="text" className="form-control" defaultValue="Wilson" />
                                                     </div>
                                                </div> */}
                                                {/* <div className="col-12 col-md-6">
                                                    <div className="form-group">
                                                        <label>Date of Birth</label>
                                                        <div>
                                                            <input type="date" className="form-control" defaultValue="07/24/1983" />
                                                        </div>
                                                    </div>
                                                </div> */}
                                                {/* <div className="col-12 col-md-6">
                                                    <div className="form-group">
                                                        <label>Blood Group</label>
                                                        <select className="form-control select">
                                                            <option>A-</option>
                                                            <option>A+</option>
                                                            <option>B-</option>
                                                            <option>B+</option>
                                                            <option>AB-</option>
                                                            <option>AB+</option>
                                                            <option>O-</option>
                                                            <option>O+</option>
                                                        </select>
                                                    </div>
                                                </div> */}
                                                {/* <div className="col-12 col-md-6">
                                                    <div className="form-group">
                                                        <label>Email ID</label>
                                                        <input type="email" className="form-control" defaultValue="richard@example.com" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <div className="form-group">
                                                        <label>Mobile</label>
                                                        <input type="text" defaultValue="+1 202-555-0125" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Address</label>
                                                        <input type="text" className="form-control" defaultValue="806 Twin Willow Lane" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <div className="form-group">
                                                        <label>City</label>
                                                        <input type="text" className="form-control" defaultValue="Old Forge" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <div className="form-group">
                                                        <label>State</label>
                                                        <input type="text" className="form-control" defaultValue="Newyork" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <div className="form-group">
                                                        <label>Zip Code</label>
                                                        <input type="text" className="form-control" defaultValue={13420} />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <div className="form-group">
                                                        <label>Country</label>
                                                        <input type="text" className="form-control" defaultValue="United States" />
                                                    </div>
                                                </div> */}
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <div className="change-avatar">
                                                            <div className="profile-img">
                                                                <img src={Clients_0} alt="User Image" />
                                                            </div>
                                                            <div className="profile-img">
                                                                <img src={Clients_0} alt="User Image" />
                                                            </div>
                                                            <div className="profile-img">
                                                                <img src={Clients_0} alt="User Image" />
                                                            </div>
                                                            <div className="upload-img">
                                                                <div className="change-photo-btn">
                                                                    <span><i className="fa fa-upload" /> Upload Photo</span>
                                                                    <input type="file" className="upload" />
                                                                </div>
                                                                <small className="form-text text-muted">Allowed JPG, GIF or PNG. Max size of 2MB</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="submit-section">
                                                <button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
                                            </div>
                                        </form>
                                        {/* /Profile Settings Form */}
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
export default PostProduct;