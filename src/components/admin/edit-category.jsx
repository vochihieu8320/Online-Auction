import React from 'react';
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Admin_thumb_04 } from '../imagepath';
// Import Sidebar
import { LibrarienSidebar } from './admin_sidebar';

class EditCategory extends React.Component {

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
                                        <li className="breadcrumb-item active" aria-current="page">Edit Category</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Edit Category</h2>
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
                                    <LibrarienSidebar />
                                </StickyBox>
                                {/* /Profile Sidebar */}
                            </div>
                            <div className="col-md-7 col-lg-8 col-xl-9">
                                <div className="card">
                                    <div className="card-body">
                                        {/* Social Form */}
                                        <form>
                                            <div className="form-group">
                                                <div className="change-avatar">
                                                    <div className="profile-img">
                                                        <img src={Admin_thumb_04} alt="User Image" />
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
                                            <div className="row">
                                                <div className="col-md-12 col-lg-8">
                                                    <div className="form-group">
                                                        <label>ID Category</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 col-lg-8">
                                                    <div className="form-group">
                                                        <label>Name of Category</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="row">
                        <div className="col-md-12 col-lg-8">
                          <div className="form-group">
                            <label>Instagram URL</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div> */}
                                            {/* <div className="row">
                        <div className="col-md-12 col-lg-8">
                          <div className="form-group">
                            <label>Pinterest URL</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div> */}
                                            {/* <div className="row">
                        <div className="col-md-12 col-lg-8">
                          <div className="form-group">
                            <label>Linkedin URL</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div> */}
                                            {/* <div className="row">
                        <div className="col-md-12 col-lg-8">
                          <div className="form-group">
                            <label>Youtube URL</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div> */}
                                            <div className="submit-section">
                                                <button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
                                            </div>
                                        </form>
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
export default EditCategory;