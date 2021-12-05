import React from 'react';
import { Link } from 'react-router-dom';

class BookingSuccess extends React.Component {
    render() {
        return(
            <>
              {/* Breadcrumb */}
        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-12 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Booking</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Booking</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content success-page-cont">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                {/* Success Card */}
                <div className="card success-card">
                  <div className="card-body">
                    <div className="success-cont">
                      <i className="fas fa-check" />
                      <h3>Appointment booked Successfully!</h3>
                      <p>Appointment booked with <strong> Darren Elder</strong><br /> on <strong>12 Nov 2019 5:00PM to 6:00PM</strong></p>
                      <Link to="/invoice-view" className="btn btn-primary view-inv-btn">View Invoice</Link>
                    </div>
                  </div>
                </div>
                {/* /Success Card */}
              </div>
            </div>
          </div>
        </div>		
        {/* /Page Content */}
            </>
        )
    }
}
export default BookingSuccess;