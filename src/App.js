import { Component, Fragment } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import $ from 'jquery';
import CountUp from 'react-countup';
import Header from './Components/Header/'
import Footer from './Components/Footer/';
import Main from './Components/Main/';
import { Route } from 'react-router';
import Contact from './Components/Contact/';
import Blog from './Components/Blog/';
import Pricing from './Components/Pricing/';
import Services from './Components/Services/';
import Team from './Components/Team/';
import Numbers from './Components/Numbers/';
import Design from './Components/Design/';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  render(){
    return (
      <Fragment>
        <div className="preloader text-center">
          <div className="preloader-content">
            <img src="images/loader.png" alt=""/>
            <p className="preloader-counter"><CountUp end={100} start={0} duration={3.5}/></p>
          </div>
        </div>
        <BrowserRouter>
            <Header />
            <Route path="/" exact component={Main} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/services" component={Services} />
            <Route path="/team" component={Team} />
            <Route path="/numbers" component={Numbers} />
            <Route path="/services" component={Design} />
        </BrowserRouter>
            <Footer />
            <div className="toTop"><i className="fas fa-angle-up"></i></div>
      </Fragment>
    );
  }

  
  componentDidMount() {
    
  $(document).ready(function(){
    $(".preloader").ready(
      function () {
      setTimeout(function () {
          $(".preloader").fadeOut();
      }, 3500);
  });
  // to make the small devices navbar work
      $(".sm-dropdown").click(function(){
          $(this).toggleClass("active");
          $(this).next().slideToggle();
      });
      $(".nav-icon").click(function(){
          $(".nav-icon span").toggleClass("d-none");
          $(".nav-icon .nav-icon-close").toggleClass("d-block");
      });
      
      $(window).scroll(function(){
          let height = $(this).scrollTop();
  
          // to make the desktop navbar appear at 200px scroll
          
          if (height> 200) {
              $(".header-content").addClass("scroll");
              $(".header-content .logo a img").attr("src","images/tr-logo.png");
              $(".header-content .nav-list li a").removeClass("blue-hover");
              $(".header-content .nav-list li a").removeClass("active");
              $('.scroll_nav').slideDown();
          }else{
              $(".header-content").removeClass("scroll");
              $(".header-content .logo a img").attr("src","images/main-logo.png");
              $(".header-content .nav-list li a").addClass("blue-hover");
              $('.scroll_nav').slideUp();
          }
  
          // to make back to top icon appear at 400px scroll
          if (height >= 400) {
              $(".toTop").fadeIn();
          } else{
              $(".toTop").fadeOut();
          }
          
      });
      // To Back to the top of the page
    
    $(".toTop").on('click' , function (){
      $("html, body").animate({
          scrollTop:0
      }, 2000);
  });
    });  
  }
}

export default App;
