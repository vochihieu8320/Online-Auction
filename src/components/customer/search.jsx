import React from 'react';
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
// Import Images
import {
  Admin_thumb_01, Admin_thumb_02, Admin_thumb_03, Admin_thumb_04, Admin_thumb_06, Feature_01, Feature_02,
  Feature_03, Feature_04, Specialities_01, Specialities_03, Specialities_04, Specialities_05
} from "../imagepath"

class Search extends React.Component {

  render() {
    return (
      <>
        {/* Breadcrumb */}
        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-8 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Listing Product</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Product</h2>
              </div>

              <div className="col-md-4 col-12 d-md-block d-none">
                <div className="sort-by">
                  <span className="sort-title">Sort by</span>
                  <span className="sortby-fliter">
                    <select className="form-control select">
                      <option>Select</option>
                      <option className="sorting">Descending end time</option>
                      <option className="sorting">Increasing price</option>

                    </select>
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}

        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
                <StickyBox offsetTop={20} offsetBottom={20}>

                  {/* Search Filter */}
                  <div className="card search-filter">
                    <div className="card-header">
                      <h4 className="card-title mb-0">Search Filter</h4>
                    </div>
                    <div className="card-body">
                      {/* <div className="filter-widget">
                        <div>
                          <input type="date" className="form-control datetimepicker" placeholder="Select Date" />
                        </div>
                      </div> */}
                      <div className="filter-widget">
                        <h4>Select Category</h4>
                        <div>
                          <label className="custom_check">
                            <input type="checkbox" name="select_specialist" defaultChecked />
                            <span className="checkmark" /> Electronic
                          </label>
                        </div>
                        <div>
                          <label className="custom_check">
                            <input type="checkbox" name="select_specialist" defaultChecked />
                            <span className="checkmark" /> Library Technician
                          </label>
                        </div>
                        <h4>Select New Product</h4>
                        <div>
                          <label className="custom_check">
                            <input type="checkbox" name="select_specialist" defaultChecked />
                            <span className="checkmark" /> 5 Minutes
                          </label>
                        </div>
                        <div>
                          <label className="custom_check">
                            <input type="checkbox" name="select_specialist" defaultChecked />
                            <span className="checkmark" /> 30 Minutes
                          </label>
                        </div>
                        {/* <div>
                          <label className="custom_check">
                            <input type="checkbox" name="select_specialist" />
                            <span className="checkmark" /> Senior Librarian
                          </label>
                        </div> */}
                        {/* <div>
                          <label className="custom_check">
                            <input type="checkbox" name="select_specialist" />
                            <span className="checkmark" /> Assistant Librarian
                          </label>
                        </div> */}
                      </div>
                      <div className="btn-search">
                        <button type="button" className="btn btn-block">Search</button>
                      </div>
                    </div>
                  </div>
                  {/* /Search Filter */}
                </StickyBox>

              </div>

              <div className="col-md-12 col-lg-8 col-xl-9">
                {/* Librarian Widget */}
                {/* <div className="card"> */}
                <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                  <div class="input-group">
                    <div class="input-group-prepend">

                      <button id="button-addon1" type="submit" class="btn btn-link text-primary"><i class="fa fa-search"></i></button>
                    </div>
                    <input type="search" placeholder="What are you looking for?" aria-describedby="button-addon1" class="form-control border-0 bg-light" />
                  </div>
                </div>
                {/* </div> */}

                <div className="card">
                  <div className="card-body">
                    <div className="sender-widget">
                      <div className="doc-info-left">
                        <div className="sender-img">
                          <Link to="/librarian-profile">
                            <img src={Admin_thumb_01} className="img-fluid" alt="User Image" />
                          </Link >
                          
                        </div>
                        <div className="doc-info-cont">
                          <h4 className="doc-name"><Link to="/librarian-profile">Iphone X</Link ></h4>
                          <h5 className="doc-department">Di Động</h5>
                          <div className="shop-details">
                            <p className="doc-location"><i className="fas fa-map-marker-alt" /> Florida, USA</p>
                            <ul className="shop-gallery">
                              <li>
                                <a href={Feature_01} data-fancybox="gallery">
                                  <img src={Feature_01} alt="Feature" />
                                </a>
                              </li>
                              <li>
                                <a href={Feature_02} data-fancybox="gallery">
                                  <img src={Feature_02} alt="Feature" />
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
                          {/* <div className="shop-services">
                            <span>Library Technician</span>
                            <span> Archivist</span>
                          </div> */}
                        </div>
                      </div>
                      <div className="doc-info-right">
                        <div className="clini-infos">
                          <ul>
                            <li ><Link to=""><i class="fas fa-heart"></i>Add to Wishlist</Link ></li>
                            {/* <li><i className="far fa-comment" /> 17 Feedback</li>
                            <li><i className="fas fa-map-marker-alt" /> Florida, USA</li> */}
                            
                            <li><i className="far fa-money-bill-alt" /> $300 - $1000 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" /> </li>
                          </ul>
                        </div>
                        <div className="shop-booking">
                          <Link className="view-pro-btncl" to="/detail-product">View</Link >
                          <Link className="apt-btn" to="/booking">Buy Now</Link >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Librarian Widget */}
                {/* Librarian Widget */}

                {/* /Librarian Widget */}
                {/* Librarian Widget */}

                {/* /Librarian Widget */}
                {/* Librarian Widget */}

                {/* /Librarian Widget */}
                {/* Librarian Widget */}

                {/* /Librarian Widget */}
                <div className="load-more text-center">
                  <a className="btn btn-primary btn-sm" href="">Load More</a>
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
export default Search;