import React, { Component } from "react";
import config from "config";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
//home
import Home from "./components/home";
// Admin
import AdminDashboard from "./components/librarian/admin_dashboard";
import UpgradeAccount from "./components/librarian/upgrade_account";
import MyCustomer from "./components/librarian/my_customer";
import AdminProfileSettings from "./components/librarian/admin_profile_settings";
import EditCategory from "./components/librarian/edit-category";
import EditEditCategory from "./components/librarian/edit-edit-category";
import AddCategory from "./components/librarian/add-category";
import AdminRegister from "./components/librarian/admin_register";
import EditProduct from "./components/librarian/edit-product";
import AdminChangePassword from "./components/librarian/change_password";
//School

import Search from "./components/customer/search";
import LibrarianProfile from "./components/customer/librarian_profile";
import Booking from "./components/customer/booking";
import Checkout from "./components/customer/checkout";
import BookingSuccess from "./components/customer/booking_success";
import CustomerDashboard from "./components/customer/customer_dashboard";
import Favourites from "./components/customer/favourites";
import ProfileSettings from "./components/customer/profile_settings";
import ChangePassword from "./components/customer/change_password";
//pages

import Calendar from "./components/pages/calendar";
import Components from "./components/pages/components";
import InvoiceView from "./components/pages/invoice_view";
import BlankPage from "./components/pages/blank_page";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import ForgotPassword from "./components/pages/forgot_password";
//blog

import PrivacyPolicy from "./components/privacyPages/privacy_policy";
import TermsCondition from "./components/privacyPages/term_condition";
// CSS Files
// Bootstrap CSS
import './assets/css/bootstrap.min.css';
// Font Awesome
import './assets/plugins/fontawesome/css/fontawesome.min.css';
import './assets/plugins/fontawesome/css/all.min.css';
//Fancybox JS
import './assets/plugins/fancybox/jquery.fancybox.min.css';
import './assets/plugins/fancybox/jquery.fancybox.min.js';
//  Owl carousel CSS 
// import './assets/css/owl.carousel.min.css';
// Custom CSS
import './assets/css/style.css';
import './assets/js/bootstrap.bundle.min.js';
import './assets/js/slick.js';
import './assets/js/header.js';
// import './assets/js/owl-scroll.js';
import './assets/js/script.js';


class AppUniversal extends Component {
  componentDidMount(){
    if (location.pathname.includes("login") || location.pathname.includes("register") || location.pathname.includes("forgot-password") ) {
        $('body').addClass('account-page');
    }else if (location.pathname.includes("error-404") || location.pathname.includes("error-500") ) {
        $('body').addClass('error-page');
    }else if (location.pathname.includes("chat")  ) {
      $('body').addClass('chat-page');
      localStorage.setItem('firstLoad' , true)
    }
}
render() {
  const pathname = this.props.location.pathname.split("/")[1];
  return (
    <Router basename={`${config.publicPath}`}>
      <div className={`main-wrapper ${pathname === "/" || pathname==="" ? "home" :"" }`}>
        <Route render={(props) => <Header {...props} />} />               
        <Switch>
          {/* home */}
          <Route exact path="/" component={Home} />          
          {/* Admin */}   
          <Route exact path="/admin-dashboard" component={AdminDashboard} />   
          <Route exact path="/upgrade-account" component={UpgradeAccount} />  
          <Route exact path="/my-customer" component={MyCustomer} /> 
          <Route exact path="/admin-profile-settings" component={AdminProfileSettings}/> 
          <Route exact path="/edit-category" component={EditCategory} />
          <Route exact path="/edit-edit-category" component={EditEditCategory} />
          <Route exact path="/add-category" component={AddCategory} />
          <Route exact path="/edit-product" component={EditProduct} />                  
          <Route exact path="/admin-register" component={AdminRegister} />  
          <Route exact path="/change-password" component={AdminChangePassword} />          
          {/* School */}  
          <Route exact path="/search" component={Search} />
          <Route exact path="/librarian-profile" component={LibrarianProfile} />   
          <Route exact path="/booking" component={Booking} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/booking-success" component={BookingSuccess} /> 
          <Route exact path="/customer-dashboard" component={CustomerDashboard} />
          <Route exact path="/favourites" component={Favourites} />  
          <Route exact path="/profile-settings" component={ProfileSettings} />
          <Route exact path="/change-password" component={ChangePassword} />           
          {/* pages */}   
             
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/components" component={Components} />
          <Route exact path="/invoice-view" component={InvoiceView} />
          <Route exact path="/blank-page" component={BlankPage} />
          <Route exact path="/login" component={Login} /> 
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          {/* blog */}   
          
           
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Route exact path="/term-condition" component={TermsCondition} />  

        </Switch>
        <Route render={(props) => <Footer {...props} />} />
      </div>
     
    </Router>
  );
};
}
export default AppUniversal;
