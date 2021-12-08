import React from 'react';
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Admin_thumb_04 } from '../imagepath';
// Import Sidebar
import { LibrarienSidebar } from './admin_sidebar';


class EditEditCategory extends React.Component {

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
                                        <li className="breadcrumb-item active" aria-current="page">Cancel</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Cancel</h2>
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
                                            <div className="card-body">
                                            <div class="col d-flex justify-content-center">
                                            
                                            <h3>Do you want to cancel?</h3>
                                            </div>
                                            </div>
                                            
                                            <div className="submit-section" class="col d-flex justify-content-center">
                                                <button type="submit" className="btn btn-primary submit-btn">Accept</button>
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
export default EditEditCategory;