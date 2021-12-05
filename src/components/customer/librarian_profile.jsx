import React from 'react';
import { Link } from "react-router-dom";
// Import Images
import { Admin_thumb_02,Specialities_05,Feature_01,Feature_02,Feature_03,Feature_04,
  Clients_0,Clients_01,Clients_02 } from "../imagepath"

class LibrarianProfile extends React.Component {
	
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
                    <li className="breadcrumb-item active" aria-current="page">Librarian Profile</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Librarian Profile</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container">
            {/* Librarian Widget */}
            <div className="card">
              <div className="card-body">
                <div className="sender-widget">
                  <div className="doc-info-left">
                    <div className="sender-img">
                      <img src={Admin_thumb_02} className="img-fluid" alt="User Image" />
                    </div>
                    <div className="doc-info-cont">
                      <h4 className="doc-name">Darren Elder</h4>
                      <p className="doc-department"><img src={Specialities_05} className="img-fluid" alt="Speciality" />Library Technician</p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">(35)</span>
                      </div>
                      <div className="shop-details">
                        <p className="doc-location"><i className="fas fa-map-marker-alt" /> Newyork, USA - <a href="">Get Directions</a></p>
                        <ul className="shop-gallery">
                          <li>
                            <a href={Feature_01} data-fancybox="gallery">
                              <img src={Feature_01} alt="Feature" />
                            </a>
                          </li>
                          <li>
                            <a href={Feature_02} data-fancybox="gallery">
                              <img src={Feature_02} alt="Feature Image" />
                            </a>
                          </li>
                          <li>
                            <a href={Feature_03} data-fancybox="gallery">
                              <img src={Feature_03} alt="Feature" />
                            </a>
                          </li>
                          <li>
                            <a href={Feature_04} data-fancybox="gallery">
                              <img src={Feature_04} alt="Feature" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="shop-services">
                        <span>Library Technician</span>
                        <span>Archivist</span>
                      </div>
                    </div>
                  </div>
                  <div className="doc-info-right">
                    <div className="clini-infos">
                      <ul>
                        <li><i className="far fa-thumbs-up" /> 99%</li>
                        <li><i className="far fa-comment" /> 35 Feedback</li>
                        <li><i className="fas fa-map-marker-alt" /> Newyork, USA</li>
                        <li><i className="far fa-money-bill-alt" /> $100 per hour </li>
                      </ul>
                    </div>
                    <div className="sender-action">
                      <a href="" className="btn btn-white fav-btn">
                        <i className="far fa-bookmark" />
                      </a>
                      <Link to="/chat" className="btn btn-white msg-btn">
                        <i className="far fa-comment-alt" />
                      </Link>
                      <a href="" className="btn btn-white call-btn" data-toggle="modal" data-target="#voice_call">
                        <i className="fas fa-phone" />
                      </a>
                      <a href="" className="btn btn-white call-btn" data-toggle="modal" data-target="#video_call">
                        <i className="fas fa-video" />
                      </a>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
            {/* /Librarian Widget */}
            {/* Librarian Details Tab */}
            <div className="card">
              <div className="card-body pt-0">
                {/* Tab Menu */}
                <nav className="user-tabs mb-4">
                  <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                    <li className="nav-item">
                      <a className="nav-link active" href="#doc_overview" data-toggle="tab">Overview</a>
                    </li> 
                    <li className="nav-item">
                      <a className="nav-link" href="#doc_reviews" data-toggle="tab">Reviews</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#doc_business_hours" data-toggle="tab">Business Hours</a>
                    </li>
                  </ul>
                </nav>
                {/* /Tab Menu */}
                {/* Tab Content */}
                <div className="tab-content pt-0">
                  {/* Overview Content */}
                  <div role="tabpanel" id="doc_overview" className="tab-pane fade show active">
                    <div className="row">
                      <div className="col-md-12 col-lg-9">
                        {/* About Details */}
                        <div className="widget about-widget">
                          <h4 className="widget-title">About Me</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        {/* /About Details */}
                        {/* Education Details */}
                        <div className="widget education-widget">
                          <h4 className="widget-title">Education</h4>
                          <div className="experience-box">
                            <ul className="experience-list">
                              <li>
                                <div className="experience-user">
                                  <div className="before-circle" />
                                </div>
                                <div className="experience-content">
                                  <div className="timeline-content">
                                    <a href="#/" className="name">University of Reading</a>
                                    <div>B.Li.Sc.</div>
                                    <span className="time">1998 - 2003</span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="experience-user">
                                  <div className="before-circle" />
                                </div>
                                <div className="experience-content">
                                  <div className="timeline-content">
                                    <a href="#/" className="name">University of Reading</a>
                                    <div>M.Li.Sc.</div>
                                    <span className="time">2003 - 2005</span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* /Education Details */}
                        {/* Experience Details */}
                        <div className="widget experience-widget">
                          <h4 className="widget-title">Work &amp; Experience</h4>
                          <div className="experience-box">
                            <ul className="experience-list">
                              <li>
                                <div className="experience-user">
                                  <div className="before-circle" />
                                </div>
                                <div className="experience-content">
                                  <div className="timeline-content">
                                    <a href="#/" className="name">Wren Library</a>
                                    <span className="time">2010 - Present (5 years)</span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="experience-user">
                                  <div className="before-circle" />
                                </div>
                                <div className="experience-content">
                                  <div className="timeline-content">
                                    <a href="#/" className="name">The British Library</a>
                                    <span className="time">2007 - 2010 (3 years)</span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="experience-user">
                                  <div className="before-circle" />
                                </div>
                                <div className="experience-content">
                                  <div className="timeline-content">
                                    <a href="#/" className="name">Work &amp; Experience</a>
                                    <span className="time">2005 - 2007 (2 years)</span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* /Experience Details */}
                        {/* Awards Details */}
                        <div className="widget awards-widget">
                          <h4 className="widget-title">Awards</h4>
                          <div className="experience-box">
                            <ul className="experience-list">
                              <li>
                                <div className="experience-user">
                                  <div className="before-circle" />
                                </div>
                                <div className="experience-content">
                                  <div className="timeline-content">
                                    <p className="exp-year">July 2020</p>
                                    <h4 className="exp-title">Best Archivist Award</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="experience-user">
                                  <div className="before-circle" />
                                </div>
                                <div className="experience-content">
                                  <div className="timeline-content">
                                    <p className="exp-year">March 2011</p>
                                    <h4 className="exp-title">Certificate for International Volunteer Service</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="experience-user">
                                  <div className="before-circle" />
                                </div>
                                <div className="experience-content">
                                  <div className="timeline-content">
                                    <p className="exp-year">May 2008</p>
                                    <h4 className="exp-title">The Library Technician of The Year Award</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* /Awards Details */} 
                        {/* Specializations List */}
                        <div className="service-list">
                          <h4>Specializations</h4>
                          <ul className="clearfix">
                            <li>Book Keeper</li>
                            <li>Library Technician</li>
                            <li>Archivist</li>
                            <li>Senoir Librarian</li>
                          </ul>
                        </div>
                        {/* /Specializations List */}
                      </div>
                    </div>
                  </div>
                  {/* /Overview Content */}
                  {/* Reviews Content */}
                  <div role="tabpanel" id="doc_reviews" className="tab-pane fade">
                    {/* Review Listing */}
                    <div className="widget review-listing">
                      <ul className="comments-list">
                        {/* Comment List */}
                        <li>
                          <div className="comment">
                            <img className="avatar avatar-sm rounded-circle" alt="User Image" src={Clients_0} />
                            <div className="comment-body">
                              <div className="meta-data">
                                <span className="comment-author">Richard Wilson</span>
                                <span className="comment-date">Reviewed 2 Days ago</span>
                                <div className="review-count rating">
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star" />
                                </div>
                              </div>
                              <p className="recommended"><i className="far fa-thumbs-up" /> I recommend the sender</p>
                              <p className="comment-content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation.
                                Curabitur non nulla sit amet nisl tempus
                              </p>
                              <div className="comment-reply">
                                <a className="comment-btn" href="#">
                                  <i className="fas fa-reply" /> Reply
                                </a>
                                <p className="recommend-btn">
                                  <span>Recommend?</span>
                                  <a href="#" className="like-btn">
                                    <i className="far fa-thumbs-up" /> Yes
                                  </a>
                                  <a href="#" className="dislike-btn">
                                    <i className="far fa-thumbs-down" /> No
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* Comment Reply */}
                          <ul className="comments-reply">
                            <li>
                              <div className="comment">
                                <img className="avatar avatar-sm rounded-circle" alt="User Image" src={Clients_01} />
                                <div className="comment-body">
                                  <div className="meta-data">
                                    <span className="comment-author">Charlene Reed</span>
                                    <span className="comment-date">Reviewed 3 Days ago</span>
                                    <div className="review-count rating">
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star" />
                                    </div>
                                  </div>
                                  <p className="comment-content">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam.
                                    Curabitur non nulla sit amet nisl tempus
                                  </p>
                                  <div className="comment-reply">
                                    <a className="comment-btn" href="#">
                                      <i className="fas fa-reply" /> Reply
                                    </a>
                                    <p className="recommend-btn">
                                      <span>Recommend?</span>
                                      <a href="#" className="like-btn">
                                        <i className="far fa-thumbs-up" /> Yes
                                      </a>
                                      <a href="#" className="dislike-btn">
                                        <i className="far fa-thumbs-down" /> No
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          {/* /Comment Reply */}
                        </li>
                        {/* /Comment List */}
                        {/* Comment List */}
                        <li>
                          <div className="comment">
                            <img className="avatar avatar-sm rounded-circle" alt="User Image" src={Clients_02} />
                            <div className="comment-body">
                              <div className="meta-data">
                                <span className="comment-author">Travis Trimble</span>
                                <span className="comment-date">Reviewed 4 Days ago</span>
                                <div className="review-count rating">
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star" />
                                </div>
                              </div>
                              <p className="comment-content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation.
                                Curabitur non nulla sit amet nisl tempus
                              </p>
                              <div className="comment-reply">
                                <a className="comment-btn" href="#">
                                  <i className="fas fa-reply" /> Reply
                                </a>
                                <p className="recommend-btn">
                                  <span>Recommend?</span>
                                  <a href="#" className="like-btn">
                                    <i className="far fa-thumbs-up" /> Yes
                                  </a>
                                  <a href="#" className="dislike-btn">
                                    <i className="far fa-thumbs-down" /> No
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        {/* /Comment List */}
                      </ul>
                      {/* Show All */}
                      <div className="all-feedback text-center">
                        <a href="#" className="btn btn-primary btn-sm">
                          Show all feedback <strong>(167)</strong>
                        </a>
                      </div>
                      {/* /Show All */}
                    </div>
                    {/* /Review Listing */}
                    {/* Write Review */}
                    <div className="write-review">
                      <h4>Write a review for <strong>Darren Elder</strong></h4>
                      {/* Write Review Form */}
                      <form>
                        <div className="form-group">
                          <label>Review</label>
                          <div className="star-rating">
                            <input id="star-5" type="radio" name="rating" defaultValue="star-5" />
                            <label htmlFor="star-5" title="5 stars">
                              <i className="active fa fa-star" />
                            </label>
                            <input id="star-4" type="radio" name="rating" defaultValue="star-4" />
                            <label htmlFor="star-4" title="4 stars">
                              <i className="active fa fa-star" />
                            </label>
                            <input id="star-3" type="radio" name="rating" defaultValue="star-3" />
                            <label htmlFor="star-3" title="3 stars">
                              <i className="active fa fa-star" />
                            </label>
                            <input id="star-2" type="radio" name="rating" defaultValue="star-2" />
                            <label htmlFor="star-2" title="2 stars">
                              <i className="active fa fa-star" />
                            </label>
                            <input id="star-1" type="radio" name="rating" defaultValue="star-1" />
                            <label htmlFor="star-1" title="1 star">
                              <i className="active fa fa-star" />
                            </label>
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Title of your review</label>
                          <input className="form-control" type="text" placeholder="If you could say it in one sentence, what would you say?" />
                        </div>
                        <div className="form-group">
                          <label>Your review</label>
                          <textarea id="review_desc" maxLength={100} className="form-control" defaultValue={""} />
                          <div className="d-flex justify-content-between mt-3"><small className="text-muted"><span id="chars">100</span> characters remaining</small></div>
                        </div>
                        <hr />
                        <div className="form-group">
                          <div className="terms-accept">
                            <div className="custom-checkbox">
                              <input type="checkbox" id="terms_accept" />
                              <label htmlFor="terms_accept">I have read and accept <a href="#">Terms &amp; Conditions</a></label>
                            </div>
                          </div>
                        </div>
                        <div className="submit-section">
                          <button type="submit" className="btn btn-primary submit-btn">Add Review</button>
                        </div>
                      </form>
                      {/* /Write Review Form */}
                    </div>
                    {/* /Write Review */}
                  </div>
                  {/* /Reviews Content */}
                  {/* Business Hours Content */}
                  <div role="tabpanel" id="doc_business_hours" className="tab-pane fade">
                    <div className="row">
                      <div className="col-md-6 offset-md-3">
                        {/* Business Hours Widget */}
                        <div className="widget business-widget">
                          <div className="widget-content">
                            <div className="listing-hours">
                              <div className="listing-day current">
                                <div className="day">Today <span>5 Nov 2020</span></div>
                                <div className="time-items">
                                  <span className="open-status"><span className="badge bg-success-light">Open Now</span></span>
                                  <span className="time">07:00 AM - 09:00 PM</span>
                                </div>
                              </div>
                              <div className="listing-day">
                                <div className="day">Monday</div>
                                <div className="time-items">
                                  <span className="time">07:00 AM - 09:00 PM</span>
                                </div>
                              </div>
                              <div className="listing-day">
                                <div className="day">Tuesday</div>
                                <div className="time-items">
                                  <span className="time">07:00 AM - 09:00 PM</span>
                                </div>
                              </div>
                              <div className="listing-day">
                                <div className="day">Wednesday</div>
                                <div className="time-items">
                                  <span className="time">07:00 AM - 09:00 PM</span>
                                </div>
                              </div>
                              <div className="listing-day">
                                <div className="day">Thursday</div>
                                <div className="time-items">
                                  <span className="time">07:00 AM - 09:00 PM</span>
                                </div>
                              </div>
                              <div className="listing-day">
                                <div className="day">Friday</div>
                                <div className="time-items">
                                  <span className="time">07:00 AM - 09:00 PM</span>
                                </div>
                              </div>
                              <div className="listing-day">
                                <div className="day">Saturday</div>
                                <div className="time-items">
                                  <span className="time">07:00 AM - 09:00 PM</span>
                                </div>
                              </div>
                              <div className="listing-day closed">
                                <div className="day">Sunday</div>
                                <div className="time-items">
                                  <span className="time"><span className="badge bg-danger-light">Closed</span></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /Business Hours Widget */}
                      </div>
                    </div>
                  </div>
                  {/* /Business Hours Content */}
                </div>
              </div>
            </div>
            {/* /Librarian Details Tab */}
          </div>
        </div>		
        {/* /Page Content */}
        {/* Voice Call Modal */}
        <div className="modal fade call-modal" id="voice_call">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                {/* Outgoing Call */}
                <div className="call-box incoming-box">
                  <div className="call-wrapper">
                    <div className="call-inner">
                      <div className="call-user">
                        <img alt="User Image" src={Admin_thumb_02} className="call-avatar" />
                        <h4>Darren Elder</h4>
                        <span>Connecting...</span>
                      </div>							
                      <div className="call-items">
                        <a href="" className="btn call-item call-end" data-dismiss="modal" aria-label="Close"><i className="material-icons">call_end</i></a>
                        <Link to="/voice-call" className="btn call-item call-start"><i className="material-icons">call</i></Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Outgoing Call */}
              </div>
            </div>
          </div>
        </div>
        {/* /Voice Call Modal */}
        {/* Video Call Modal */}
        <div className="modal fade call-modal" id="video_call">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                {/* Incoming Call */}
                <div className="call-box incoming-box">
                  <div className="call-wrapper">
                    <div className="call-inner">
                      <div className="call-user">
                        <img className="call-avatar" src={Admin_thumb_02} alt="User Image" />
                        <h4>Darren Elder</h4>
                        <span>Calling ...</span>
                      </div>							
                      <div className="call-items">
                        <a href="" className="btn call-item call-end" data-dismiss="modal" aria-label="Close"><i className="material-icons">call_end</i></a>
                        <Link to="/video-call" className="btn call-item call-start"><i className="material-icons">videocam</i></Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Incoming Call */}
              </div>
            </div>
          </div>
        </div>
        {/* Video Call Modal */}
          </>
        )
    }
}
export default LibrarianProfile;