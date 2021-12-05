import React from 'react';
import $ from "jquery";
import {DropzoneArea} from 'material-ui-dropzone'
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
// Import Sidebar
import { LibrarienSidebar } from './librarien_sidebar';
// Import Images
import { Admin_thumb_02,Feature_01,Feature_02 } from "../imagepath"

class LibrarienProfileSettings extends React.Component {
  constructor(props) {
	super(props)
	this.state = {
		files: []
	  };
	}

	handleChange(files){
		this.setState({
		  files: files
		});
	  }

	componentDidMount() {
		// Pricing Options Show
		$('#pricing_select input[name="rating_option"]').on('click', function() {
			if ($(this).val() == 'price_free') {
				$('#custom_price_cont').hide();
			}
			if ($(this).val() == 'custom_price') {
				$('#custom_price_cont').show();
			}
			else {
			}
		});
	
		// Education Add More
		
		$(".education-info").on('click','.trash', function () {
			$(this).closest('.education-cont').remove();
			return false;
		});
	
		$(".add-education").on('click', function () {
			
			var educationcontent = '<div class="row form-row education-cont">' +
				'<div class="col-12 col-md-10 col-lg-11">' +
					'<div class="row form-row">' +
						'<div class="col-12 col-md-6 col-lg-4">' +
							'<div class="form-group">' +
								'<label>Degree</label>' +
								'<input type="text" class="form-control">' +
							'</div>' +
						'</div>' +
						'<div class="col-12 col-md-6 col-lg-4">' +
							'<div class="form-group">' +
								'<label>College/Institute</label>' +
								'<input type="text" class="form-control">' +
							'</div>' +
						'</div>' +
						'<div class="col-12 col-md-6 col-lg-4">' +
							'<div class="form-group">' +
								'<label>Year of Completion</label>' +
								'<input type="text" class="form-control">' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="col-12 col-md-2 col-lg-1"><label class="d-md-block d-sm-none d-none">&nbsp;</label><a href="#" class="btn btn-danger trash">&times;</a></div>' +
			'</div>';
			
			$(".education-info").append(educationcontent);
			return false;
		});
		
		// Experience Add More
		
		$(".experience-info").on('click','.trash', function () {
			$(this).closest('.experience-cont').remove();
			return false;
		});
	
		$(".add-experience").on('click', function () {
			
			var experiencecontent = '<div class="row form-row experience-cont">' +
				'<div class="col-12 col-md-10 col-lg-11">' +
					'<div class="row form-row">' +
						'<div class="col-12 col-md-6 col-lg-4">' +
							'<div class="form-group">' +
								'<label>University Name</label>' +
								'<input type="text" class="form-control">' +
							'</div>' +
						'</div>' +
						'<div class="col-12 col-md-6 col-lg-4">' +
							'<div class="form-group">' +
								'<label>From</label>' +
								'<input type="text" class="form-control">' +
							'</div>' +
						'</div>' +
						'<div class="col-12 col-md-6 col-lg-4">' +
							'<div class="form-group">' +
								'<label>To</label>' +
								'<input type="text" class="form-control">' +
							'</div>' +
						'</div>' +
						'<div class="col-12 col-md-6 col-lg-4">' +
							'<div class="form-group">' +
								'<label>Designation</label>' +
								'<input type="text" class="form-control">' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="col-12 col-md-2 col-lg-1"><label class="d-md-block d-sm-none d-none">&nbsp;</label><a href="#" class="btn btn-danger trash">&times;</a></div>' +
			'</div>';
			
			$(".experience-info").append(experiencecontent);
			return false;
		});
		
		// Awards Add More
		
		$(".awards-info").on('click','.trash', function () {
			$(this).closest('.awards-cont').remove();
			return false;
		});
	
		$(".add-award").on('click', function () {
	
			var regcontent = '<div class="row form-row awards-cont">' +
				'<div class="col-12 col-md-5">' +
					'<div class="form-group">' +
						'<label>Awards</label>' +
						'<input type="text" class="form-control">' +
					'</div>' +
				'</div>' +
				'<div class="col-12 col-md-5">' +
					'<div class="form-group">' +
						'<label>Year</label>' +
						'<input type="text" class="form-control">' +
					'</div>' +
				'</div>' +
				'<div class="col-12 col-md-2">' +
					'<label class="d-md-block d-sm-none d-none">&nbsp;</label>' +
					'<a href="#" class="btn btn-danger trash">&times;</a>' +
				'</div>' +
			'</div>';
			
			$(".awards-info").append(regcontent);
			return false;
		});
		
		// Membership Add More
		
		$(".membership-info").on('click','.trash', function () {
			$(this).closest('.membership-cont').remove();
			return false;
		});
	
		$(".add-membership").on('click', function () {
	
			var membershipcontent = '<div class="row form-row membership-cont">' +
				'<div class="col-12 col-md-10 col-lg-5">' +
					'<div class="form-group">' +
						'<label>Memberships</label>' +
						'<input type="text" class="form-control">' +
					'</div>' +
				'</div>' +
				'<div class="col-12 col-md-2 col-lg-2">' +
					'<label class="d-md-block d-sm-none d-none">&nbsp;</label>' +
					'<a href="#" class="btn btn-danger trash">&times;</a>' +
				'</div>' +
			'</div>';
			
			$(".membership-info").append(membershipcontent);
			return false;
		});
		
		// Registration Add More
		
		$(".registrations-info").on('click','.trash', function () {
			$(this).closest('.reg-cont').remove();
			return false;
		});
	
		$(".add-reg").on('click', function () {
	
			var regcontent = '<div class="row form-row reg-cont">' +
				'<div class="col-12 col-md-5">' +
					'<div class="form-group">' +
						'<label>Registrations</label>' +
						'<input type="text" class="form-control">' +
					'</div>' +
				'</div>' +
				'<div class="col-12 col-md-5">' +
					'<div class="form-group">' +
						'<label>Year</label>' +
						'<input type="text" class="form-control">' +
					'</div>' +
				'</div>' +
				'<div class="col-12 col-md-2">' +
					'<label class="d-md-block d-sm-none d-none">&nbsp;</label>' +
					'<a href="#" class="btn btn-danger trash">&times;</a>' +
				'</div>' +
			'</div>';
			
			$(".registrations-info").append(regcontent);
			return false;
		});


	}
	
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
                    <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                      {/* Profile Sidebar */}
                      <StickyBox offsetTop={20} offsetBottom={20}>
                          <LibrarienSidebar/>
                      </StickyBox>        
                    {/* /Profile Sidebar */}
                    </div>
                    <div className="col-md-7 col-lg-8 col-xl-9">
                      {/* Basic Information */}
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">Basic Information</h4>
                          <div className="row form-row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <div className="change-avatar">
                                  <div className="profile-img">
                                    <img src={Admin_thumb_02} alt="User Image" />
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
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Username <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" readOnly />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Email <span className="text-danger">*</span></label>
                                <input type="email" className="form-control" readOnly />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>First Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Last Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Phone Number</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Gender</label>
                                <select className="form-control select">
                                  <option>Select</option>
                                  <option>Male</option>
                                  <option>Female</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group mb-0">
                                <label>Date of Birth</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Basic Information */}
                      {/* About Me */}
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">About Me</h4>
                          <div className="form-group mb-0">
                            <label>Biography</label>
                            <textarea className="form-control" rows={5} defaultValue={""} />
                          </div>
                        </div>
                      </div>
                      {/* /About Me */}
                      {/* Clinic Info */}
                    
                      {/* /Registrations */}
                      
                    </div>
                  </div>
                </div>
              </div>		
              {/* /Page Content */}
          </>
        )
    }
}
export default LibrarienProfileSettings;