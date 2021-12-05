import React, { Component } from "react";
import { Link } from "react-router-dom";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// Import Images
import { Logo,Vector,Img_C1,Img_C2,Img_C3,Img_C4,Img_C5,Vector_1,Vector_2,Library_1,Counter,
    Books_1,Books_2,Books_3,Books_4,Books_5,Books_6,Team_1,Team_2,Team_3,Team_4,Team_5,Blog_1,Blog_2 } from "../imagepath";

class Home extends Component {
   
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 700,
            slidesToShow: 4,
            slidesToScroll: 1,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 776,
					settings: {
						slidesToShow: 2
				  	}
			},
			{
				breakpoint: 567,
					settings: {
						slidesToShow: 1
					}
			}]
        };
        var responsive = {
            0: {
                items: 1,
            },
            450: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 5,
            },
        }
        return (
            <>                
             {/* Banner */}	
            <section className="banner-section align-items-center">
                <div className="container">
                <div className="banner-top">
                    <div className="banner-content">
                    <img src={Logo} alt="" /> 
                    <h2>Main Auction</h2>
                    <p>Auction Online</p>
                    {/* <div className="text-center m-auto">
                        <button className="btn banner-primary"><Link style={{color:"white"}} to="/booking">BUY NOW</Link></button>
                    </div> */}
                    </div>
                </div>
                </div>
            </section>
            {/* /Banner */}
           
            {/* Top 5 Products Near The End */}		
            <section className="libraries-section section">
                <div className="vector-shape">
                    <img src={Vector_1} alt="" className="shape-2" />
                    <img src={Vector_2} alt="" className="shape-3" />
                </div>
                <div className="container">
                    <div className="section-heading text-center" style={{marginBottom:'50px'}}>
                        <h2>Top 5 Products Near The End </h2>
                        {/* <p>Main Auction</p> */}
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-right">
                            <div className="owl-nav slide-nav-3 text-right nav-control" />
                        </div>
                    </div>
                {/* <div className="owl-carousel libraries-items"> */}
                    <OwlCarousel loop nav
                        margin={15} 
                        dots={false}
                        items={5}
                        responsive={responsive}
                        >
                        {/* carousel item */}
                        <div className="item libraries-item">
                        <div className="libraries-row">
                            <div className="libraries">
                            <div className="library">
                                <div className="library-img">
                                <img src={Library_1} alt="" className="img-fluid" />
                                </div>
                                
                                <div className="library-content">
                                <Link to="/booking"><h2>Abbots Langley Library </h2></Link>
                                <p>United Kingdom</p>
                                </div>
                            </div>
                            <div className="library-text d-flex">
                                <div className="lib-left float-left">
                                <ul>
                                    <li><i className="fas fa-user-graduate mr-2" />250 Seats</li>
                                    <li><i className="far fa-file-alt mr-2" />2,658 Books Available</li>
                                </ul>
                                </div>
                                <div className="lib-right ml-auto">
                                <p>$20/Hr</p>
                                </div>
                            </div>
                            <div className="library-footer">
                                <button className="btn btn-secondary"><Link style={{color:"white"}} to="/booking">Book Now</Link></button>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* carousel item */}
                        <div className="item libraries-item">
                        <div className="libraries-row">
                            <div className="libraries">
                            <div className="library">
                                <div className="library-img">
                                <img src={Library_1} alt="" className="img-fluid" />
                                </div>
                               
                                <div className="library-content">
                                <Link to="/booking"><h2>Adeyfield Library </h2></Link>
                                <p>United Kingdom</p>
                                </div>
                            </div>
                            <div className="library-text d-flex">
                                <div className="lib-left float-left">
                                <ul>
                                    <li><i className="fas fa-user-graduate mr-2" />250 Seats</li>
                                    <li><i className="far fa-file-alt mr-2" />2,658 Books Available</li>
                                </ul>
                                </div>
                                <div className="lib-right ml-auto">
                                <p>$20/Hr</p>
                                </div>
                            </div>
                            <div className="library-footer">
                                <button className="btn btn-secondary"><Link style={{color:"white"}} to="/booking">Book Now</Link></button>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* carousel item */}
                        <div className="item libraries-item">
                        <div className="libraries-row">
                            <div className="libraries">
                            <div className="library">
                                <div className="library-img">
                                <img src={Library_1} alt="" className="img-fluid" />
                                </div>
                              
                                <div className="library-content">
                                <Link to="/booking"><h2>Bishop's Library </h2></Link>
                                <p>United Kingdom</p>
                                </div>
                            </div>
                            <div className="library-text d-flex">
                                <div className="lib-left float-left">
                                <ul>
                                    <li><i className="fas fa-user-graduate mr-2" />250 Seats</li>
                                    <li><i className="far fa-file-alt mr-2" />2,658 Books Available</li>
                                </ul>
                                </div>
                                <div className="lib-right ml-auto">
                                <p>$20/Hr</p>
                                </div>
                            </div>
                            <div className="library-footer">
                                <button className="btn btn-secondary"><Link style={{color:"white"}} to="/booking">Book Now</Link></button>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* carousel item */}
                        <div className="item libraries-item">
                        <div className="libraries-row">
                            <div className="libraries">
                            <div className="library">
                                <div className="library-img">
                                <img src={Library_1} alt="" className="img-fluid" />
                                </div>
                               
                                <div className="library-content">
                                <Link to="/booking"><h2>Park Library </h2></Link>
                                <p>United Kingdom</p>
                                </div>
                            </div>
                            <div className="library-text d-flex">
                                <div className="lib-left float-left">
                                <ul>
                                    <li><i className="fas fa-user-graduate mr-2" />250 Seats</li>
                                    <li><i className="far fa-file-alt mr-2" />2,658 Books Available</li>
                                </ul>
                                </div>
                                <div className="lib-right ml-auto">
                                <p>$20/Hr</p>
                                </div>
                            </div>
                            <div className="library-footer">
                                <button className="btn btn-secondary"><Link style={{color:"white"}} to="/booking">Book Now</Link></button>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* carousel item */}
                        <div className="item libraries-item">
                    <div className="libraries-row">
                        <div className="libraries">
                        <div className="library">
                            <div className="library-img">
                            <img src={Library_1} alt="" className="img-fluid" />
                            </div>
                            <div className="library-content">
                            <Link to="/booking">	<h2>Buntingford Library </h2></Link>
                            <p>United Kingdom</p>
                            </div>
                        </div>
                        <div className="library-text d-flex">
                            <div className="lib-left float-left">
                            <ul>
                                <li><i className="fas fa-user-graduate mr-2" />250 Seats</li>
                                <li><i className="far fa-file-alt mr-2" />2,658 Books Available</li>
                            </ul>
                            </div>
                            <div className="lib-right ml-auto">
                            <p>$20/Hr</p>
                            </div>
                        </div>
                        <div className="library-footer">
                            <button className="btn btn-secondary"><Link style={{color:"white"}} to="/booking">Book Now</Link></button>
                        </div>
                        </div>
                    </div>
                    </div>
                        {/* carousel item */}
                    </OwlCarousel>
                {/* </div> */}
                {/* <div className="row ">
                    <div className="m-auto">
                    <button className="btn banner-primary sc-btn">
                    <Link style={{color:"white"}} to="/map-grid">View all Libraries</Link> <i className="fas fa-caret-right right-nav-white" /></button>
                    </div>
                </div> */}
                </div>
            </section>
            {/* /Libraries Section */}
             {/* Books Section */}
            <section className="top-books-section section">
                <div className="container">
                <div className="section-heading section-bg text-center" style={{marginBottom:'50px'}}>
                    <h2>Top 5 Products With The Most Bids </h2>
                    {/* <p>Librarians on the top Librairies for the Consultation</p> */}
                </div>
                <div className="row">
                    <div className="col-md-12 text-right">
                    <div className="owl-nav slide-nav-2 text-right nav-control" />
                    </div>
                </div>
                {/* <div className="owl-carousel books-items"> */}
                <OwlCarousel loop nav
                        margin={15} 
                        dots={false}
                        items={5}
                        responsive={responsive}
                        className="books-items"
                        >
                    {/* carousel item */}
                    <div className="item books-item">
                    <div className="top-books">
                        <div className="books-img">
                        <Link to="/booking"><img src={Books_1} alt="" className="img-fluid" /></Link>
                        </div>
                        <div className="book-info">
                        
                        <Link to="/booking"><p><i className="fas fa-user-graduate mr-1" /> James Thomas</p></Link>
                        <p>Abbots Langley Library </p>
                        <button className="btn btn-secondary"><Link style={{color:"white"}} to="/booking">Book Now</Link></button>
                        </div>
                    </div>
                    </div>
                    {/* carousel item */}
                    <div className="item books-item">
                    <div className="top-books">
                        <div className="books-img">
                        <Link to="/booking"><img src={Books_2} alt="" className="img-fluid" /></Link>
                        </div>
                        <div className="book-info">
                      
                        <Link to="/booking"><p><i className="fas fa-user-graduate mr-1" /> Richard Wilson</p></Link>
                        <p>Adeyfield Library</p>
                        <button className="btn btn-secondary"><Link style={{color:"white"}} to="/booking">Book Now</Link></button>
                        </div>
                    </div>
                    </div>
                    {/* carousel item */}
                    <div className="item books-item">
                    <div className="top-books">
                        <div className="books-img">
                        <Link to="/booking"><img src={Books_3} alt="" className="img-fluid" /></Link>
                        </div>
                        <div className="book-info">
                      
                        <Link to="/booking"><p><i className="fas fa-user-graduate mr-1" />Snith Thomas</p></Link>
                        <p>Bishop's Stort Library </p>
                        <button className="btn btn-secondary"><Link style={{color:"white"}} to="/booking">Book Now</Link></button>
                        </div>
                    </div>
                    </div>
                    {/* carousel item */}
                    <div className="item books-item">
                    <div className="top-books">
                        <div className="books-img">
                        <Link to="/booking"><img src={Books_4} alt="" className="img-fluid" /></Link>
                        </div>
                        <div className="book-info">
                      
                        <Link to="/booking"><p><i className="fas fa-user-graduate mr-1" /> Kennedy</p></Link>
                        <p>Brookmans Park Library</p>
                        <button className="btn btn-secondary"><Link style={{color:"white"}} to="/booking">Book Now</Link></button>
                        </div>
                    </div>
                    </div>
                    {/* carousel item */}
                  
                    {/* carousel item */}
                    <div className="item books-item">
                    <div className="top-books">
                        <div className="books-img">
                        <Link to="/booking"><img src={Books_6} alt="" className="img-fluid" /></Link>
                        </div>
                        <div className="book-info">
                       
                        <Link to="/booking"><p><i className="fas fa-user-graduate mr-1" /> Angelina</p></Link>
                        <p>Abbots Langley Library </p>
                        <button className="btn btn-secondary"><Link style={{color:"white"}} to="/booking">Book Now</Link></button>
                        </div>
                    </div>
                    </div>
                </OwlCarousel>
                {/* <div className="row ">
                    <div className="m-auto">
                    <button className="btn banner-primary sc-btn">Books Collections <i className="fas fa-caret-right right-nav-white" /></button>
                    </div>
                </div> */}
                </div>
            </section>
            {/* /Books Section */}
            {/* Librarians Section */}
            <section className="librarian-section section">
                <div className="vector-shape">
                <img src={Vector_2} alt="" className="shape-4" />
                </div>
                <div className="container">
                <div className="section-heading text-center" style={{marginBottom:'50px'}}>
                    <h2>Top 5 Products With The Highest Prices </h2>
                </div>
                <div className="row">
                    <div className="col-md-12 text-right">
                    <div className="owl-nav slide-nav-3 text-right nav-control" />
                    </div>
                </div>
                {/* <div className="owl-carousel librarian-items"> */}
                <OwlCarousel loop nav margin={15} 
                        dots={false} items={5} responsive={responsive} className="librarian-items">
                        {/* carousel item */}
                        <div className="item librarian-item">
                        <div className="librarian">
                            <div className="librarian-profile">
                            <Link to="/booking"><img src={Team_1} className="img-fluid" alt="" /></Link>
                            </div>
                            <div className="librarian-info">
                            <div className="librarian-author">
                                <Link to="/booking"><h2>Elsie Gilley</h2></Link>
                                <p>Bishop's Stortford Library</p>
                                <span>300+ Consultations </span>
                                
                                <div className="d-flex ratings">
                              
                                <button className="btn btn-secondary ml-auto"><Link style={{color:"white"}} to="/booking">Book Now</Link></button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* carousel item */}
                        <div className="item librarian-item">
                        <div className="librarian">
                            <div className="librarian-profile">
                            <Link to="/booking"><img src={Team_2} className="img-fluid" alt="" /></Link>
                            </div>
                            <div className="librarian-info">
                            <div className="librarian-author">
                                <Link to="/booking"><h2>Gina Moore</h2></Link>
                                <p>Bishop's Stortford Library</p>
                                <span>300+ Consultations </span>
                                
                                <div className="d-flex ratings">
                               
                                <button className="btn btn-secondary ml-auto"><Link style={{color:"white"}} to="/booking">Book Now</Link></button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* carousel item */}
                        <div className="item librarian-item">
                        <div className="librarian">
                            <div className="librarian-profile">
                            <Link to="/booking"><img src={Team_3} className="img-fluid" alt="" /></Link>
                            </div>
                            <div className="librarian-info">
                            <div className="librarian-author">
                                <Link to="/booking"><h2>Daniel Griffing</h2></Link>
                                <p>Bishop's Stortford Library</p>
                                <span>300+ Consultations </span>
                               
                                <div className="d-flex ratings">
                              
                                <button className="btn btn-secondary ml-auto"><Link style={{color:"white"}} to="/booking">Book Now</Link></button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* carousel item */}
                        <div className="item librarian-item">
                        <div className="librarian">
                            <div className="librarian-profile">
                            <Link to="/booking"><img src={Team_4} className="img-fluid" alt="" /></Link>
                            </div>
                            <div className="librarian-info">
                            <div className="librarian-author">
                                <Link to="/booking"><h2>Robert Rhodes</h2></Link>
                                <p>Bishop's Stortford Library</p>
                                <span>300+ Consultations </span>
                               
                                <div className="d-flex ratings">
                              
                                <button className="btn btn-secondary ml-auto"><Link style={{color:"white"}} to="/booking">Book Now</Link></button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* carousel item */}
                        <div className="item librarian-item">
                        <div className="librarian">
                            <div className="librarian-profile">
                            <Link to="/booking"><img src={Team_5} className="img-fluid" alt="" /></Link>
                            </div>
                            <div className="librarian-info">
                            <div className="librarian-author">
                                <Link to="/booking"><h2>Carl Kelly</h2></Link>
                                <p>Bishop's Stortford Library</p>
                                <span>300+ Consultations </span>
                                
                                <div className="d-flex ratings">
                              
                                <button className="btn btn-secondary ml-auto"><Link style={{color:"white"}} to="/booking">Book Now</Link></button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* carousel item */}
                    </OwlCarousel>
                {/* <div className="row ">
                    <div className="m-auto">
                    <button className="btn banner-primary sc-btn"><Link style={{color:"white"}} to="/booking">Book a Librarian</Link> <i className="fas fa-caret-right right-nav-white" /></button>
                    </div>
                </div> */}
                </div>
            </section>
            {/* /Librarians Section */}
            {/* Popular Courses */}
            {/* <Popularcourses/> */}
            {/* /Popular Courses */}
             {/* Counter Section */}
            {/* /Counter Section */}
          
            </>
        )
    }
}
export default Home;