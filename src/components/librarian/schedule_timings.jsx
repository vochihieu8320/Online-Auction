import React from 'react';
import { Link } from 'react-router-dom';
import StickyBox from "react-sticky-box";
// Import Sidebar
import { LibrarienSidebar } from './librarien_sidebar';
import Slot from './slot';

class ScheduleTimings extends React.Component {
	constructor(props){
        super(props);
        this.state={
            key: 1,
            activeModal: null
        }
        this.handleSelect = this.handleSelect.bind(this);
    }

 	handleSelect (key) {       
        this.setState({key})
    }

    openModal = (id) => {
        this.setState({activeModal: id}); 
    }
	
	handleCloseModal = () => {
		this.setState({activeModal: false}, () => {}); 
	};

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
                    <li className="breadcrumb-item active" aria-current="page">Schedule Timings</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Schedule Timings</h2>
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
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Schedule Timings</h4>
                        <div className="profile-box">
                          <div className="row">
                            <div className="col-lg-4">
                              <div className="form-group">               
                                <label>Timing Slot Duration</label>
                                <select className="select form-control" defaultValue="30">
                                  <option>-</option>
                                  <option>15 mins</option>
                                  <option value="30">30 mins</option>  
                                  <option>45 mins</option>
                                  <option>1 Hour</option>
                                </select>
                              </div>
                            </div>
                          </div>     
                          <div className="row">
                            <div className="col-md-12">
                              <div className="card schedule-widget mb-0">
                                {/* Schedule Header */}
                                <div className="schedule-header">
                                  {/* Schedule Nav */}
                                  <div className="schedule-nav">
                                    <ul className="nav nav-tabs nav-justified">
                                      <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#slot_sunday">Sunday</a>
                                      </li>
                                      <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#slot_monday">Monday</a>
                                      </li>
                                      <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#slot_tuesday">Tuesday</a>
                                      </li>
                                      <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#slot_wednesday">Wednesday</a>
                                      </li>
                                      <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#slot_thursday">Thursday</a>
                                      </li>
                                      <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#slot_friday">Friday</a>
                                      </li>
                                      <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#slot_saturday">Saturday</a>
                                      </li>
                                    </ul>
                                  </div>
                                  {/* /Schedule Nav */}
                                </div>
                                {/* /Schedule Header */}
                                {/* Schedule Content */}
                                <div className="tab-content schedule-cont">
                                  {/* Sunday Slot */}
                                  <div id="slot_sunday" className="tab-pane fade">
                                    <h4 className="card-title d-flex justify-content-between">
                                      <span>Time Slots</span> 
                                      <a className="edit-link" data-toggle="modal" href="#add_time_slot"><i className="fa fa-plus-circle" /> Add Slot</a>
                                    </h4>
                                    <p className="text-muted mb-0">Not Available</p>
                                  </div>
                                  {/* /Sunday Slot */}
                                  {/* Monday Slot */}
                                  <div id="slot_monday" className="tab-pane fade show active">
                                    <h4 className="card-title d-flex justify-content-between">
                                      <span>Time Slots</span> 
                                      <a className="edit-link" data-toggle="modal" href="#edit_time_slot"><i className="fa fa-edit mr-1" />Edit</a>
                                    </h4>
                                    {/* Slot List */}
                                    <div className="doc-times">
                                      <div className="doc-slot-list">
                                        8:00 pm - 11:30 pm
                                        <a href="" className="delete_schedule">
                                          <i className="fa fa-times" />
                                        </a>
                                      </div>
                                      <div className="doc-slot-list">
                                        11:30 pm - 1:30 pm
                                        <a href="" className="delete_schedule">
                                          <i className="fa fa-times" />
                                        </a>
                                      </div>
                                      <div className="doc-slot-list">
                                        3:00 pm - 5:00 pm
                                        <a href="" className="delete_schedule">
                                          <i className="fa fa-times" />
                                        </a>
                                      </div>
                                      <div className="doc-slot-list">
                                        6:00 pm - 11:00 pm
                                        <a href="" className="delete_schedule">
                                          <i className="fa fa-times" />
                                        </a>
                                      </div>
                                    </div>
                                    {/* /Slot List */}
                                  </div>
                                  {/* /Monday Slot */}
                                  {/* Tuesday Slot */}
                                  <div id="slot_tuesday" className="tab-pane fade">
                                    <h4 className="card-title d-flex justify-content-between">
                                      <span>Time Slots</span> 
                                      <a className="edit-link" data-toggle="modal" href="#add_time_slot"><i className="fa fa-plus-circle" /> Add Slot</a>
                                    </h4>
                                    <p className="text-muted mb-0">Not Available</p>
                                  </div>
                                  {/* /Tuesday Slot */}
                                  {/* Wednesday Slot */}
                                  <div id="slot_wednesday" className="tab-pane fade">
                                    <h4 className="card-title d-flex justify-content-between">
                                      <span>Time Slots</span> 
                                      <a className="edit-link" data-toggle="modal" href="#add_time_slot"><i className="fa fa-plus-circle" /> Add Slot</a>
                                    </h4>
                                    <p className="text-muted mb-0">Not Available</p>
                                  </div>
                                  {/* /Wednesday Slot */}
                                  {/* Thursday Slot */}
                                  <div id="slot_thursday" className="tab-pane fade">
                                    <h4 className="card-title d-flex justify-content-between">
                                      <span>Time Slots</span> 
                                      <a className="edit-link" data-toggle="modal" href="#add_time_slot"><i className="fa fa-plus-circle" /> Add Slot</a>
                                    </h4>
                                    <p className="text-muted mb-0">Not Available</p>
                                  </div>
                                  {/* /Thursday Slot */}
                                  {/* Friday Slot */}
                                  <div id="slot_friday" className="tab-pane fade">
                                    <h4 className="card-title d-flex justify-content-between">
                                      <span>Time Slots</span> 
                                      <a className="edit-link" data-toggle="modal" href="#add_time_slot"><i className="fa fa-plus-circle" /> Add Slot</a>
                                    </h4>
                                    <p className="text-muted mb-0">Not Available</p>
                                  </div>
                                  {/* /Friday Slot */}
                                  {/* Saturday Slot */}
                                  <div id="slot_saturday" className="tab-pane fade">
                                    <h4 className="card-title d-flex justify-content-between">
                                      <span>Time Slots</span> 
                                      <a className="edit-link" data-toggle="modal" href="#add_time_slot"><i className="fa fa-plus-circle" /> Add Slot</a>
                                    </h4>
                                    <p className="text-muted mb-0">Not Available</p>
                                  </div>
                                  {/* /Saturday Slot */}
                                </div>
                                {/* /Schedule Content */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>		
        {/* /Page Content */} 
         {/* Add Time Slot Modal */}
         <div className="modal fade custom-modal" id="add_time_slot">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Time Slots</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>                 
					        <Slot/>
                  <div className="submit-section text-center">
                    <button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Add Time Slot Modal */}
        {/* Edit Time Slot Modal */}
        <div className="modal fade custom-modal" id="edit_time_slot">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Time Slots</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>             
					        <Slot/>
                  <div className="submit-section text-center">
                    <button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Edit Time Slot Modal */}
          </>
        );
    }
}
export default ScheduleTimings;