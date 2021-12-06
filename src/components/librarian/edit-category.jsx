import React from 'react';
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
// Import Sidebar
import { LibrarienSidebar } from './librarien_sidebar';
// import {AddCategory} from'./add-category';
// Import Images
import {
    Clients_01, Clients_02, Clients_03, Clients_04, Clients_05, Clients_06, Clients_07, Clients_08,
    Clients_09, Clients_10, Clients_11, Clients_0
} from "../imagepath"

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
                                        <li className="breadcrumb-item active" aria-current="page">Category</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Category</h2>
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
                                <div className="appointments">
                                    <Link to="/add-category">
                                        <h4 className="d-flex justify-content-between">
                                            <a>
                                                <i class="fas fa-plus-square"> Add Category</i>
                                            </a>
                                        </h4>
                                    </Link>
                                    {/* Appointment List */}
                                    <div className="appointment-list">
                                        <div className="profile-info-widget">
                                            <Link to="" className="booking-doc-img">
                                                <img src={Clients_0} alt="User Image" />
                                            </Link>
                                            <div className="profile-det-info">
                                                <h3><Link to="">Richard Wilson</Link></h3>

                                            </div>
                                        </div>
                                        <div className="appointment-action">
                                            <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                                <i className="far fa-eye" /> Detail
                                            </a>
                                            <a href="" className="btn btn-sm bg-success-light">
                                                <i className="fas fa-edit" /><Link to="/edit-edit-category"> Edit</Link>
                                            </a>
                                            <a href="" className="btn btn-sm bg-danger-light">
                                                <i className="fas fa-times" /> Cancel
                                            </a>
                                        </div>
                                    </div>
                                    {/* /Appointment List */}
                                    {/* Appointment List */}
                                    <div className="appointment-list">
                                        <div className="profile-info-widget">
                                            <Link to="" className="booking-doc-img">
                                                <img src={Clients_01} alt="User Image" />
                                            </Link>
                                            <div className="profile-det-info">
                                                <h3><Link to="">Charlene Reed </Link></h3>

                                            </div>
                                        </div>
                                        <div className="appointment-action">
                                            <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                                <i className="far fa-eye" /> Detail
                                            </a>
                                            <a href="" className="btn btn-sm bg-success-light">
                                                <i className="fas fa-edit" /> Edit
                                            </a>
                                            <a href="" className="btn btn-sm bg-danger-light">
                                                <i className="fas fa-times" /> Cancel
                                            </a>
                                        </div>
                                    </div>
                                    {/* /Appointment List */}
                                    {/* Appointment List */}
                                    <div className="appointment-list">
                                        <div className="profile-info-widget">
                                            <Link to="" className="booking-doc-img">
                                                <img src={Clients_02} alt="User Image" />
                                            </Link>
                                            <div className="profile-det-info">
                                                <h3><Link to="">Travis Trimble</Link></h3>
                                            </div>
                                        </div>
                                        <div className="appointment-action">
                                            <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                                <i className="far fa-eye" /> Detail
                                            </a>
                                            <a href="" className="btn btn-sm bg-success-light">
                                                <i className="fas fa-edit" /> Edit
                                            </a>

                                            <a href="" className="btn btn-sm bg-danger-light">
                                                <i className="fas fa-times" /> Cancel
                                            </a>
                                        </div>
                                    </div>
                                    {/* /Appointment List */}
                                    {/* Appointment List */}

                                    {/* /Appointment List */}
                                    {/* Appointment List */}

                                    {/* /Appointment List */}
                                    {/* Appointment List */}


                                    {/* /Appointment List */}
                                    {/* Appointment List */}

                                    {/* /Appointment List */}
                                    {/* Appointment List */}

                                    {/* /Appointment List */}
                                    {/* Appointment List */}

                                    {/* /Appointment List */}
                                    {/* Appointment List */}

                                    {/* /Appointment List */}
                                    {/* Appointment List */}

                                    {/* /Appointment List */}
                                    {/* Appointment List */}

                                    {/* /Appointment List */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Page Content */}
                {/* Appointment Details Modal */}

                {/* /Appointment Details Modal */}
            </>
        )
    }
}
export default EditCategory;