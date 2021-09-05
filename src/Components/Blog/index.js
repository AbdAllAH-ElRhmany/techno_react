import React, { Component, Fragment } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Blog.css';
class Blog extends Component {
  state= {
    responsive:{
      0:{
        items:1
    },
    600:{
        items:1
    },
    700:{
        items:2
    },
    1000:{
        items:3
    }
    },
    navText:["<span><i class='fas fa-long-arrow-alt-left'></i></span>", "<span><i class='fas fa-long-arrow-alt-right'></i></span>"]
      
    
}
  render(){
    return ( 
        <Fragment>
            <section className="blog pad-120">
        <div className="mycontainer">
          <div className="section-header mb-5 pos-rel">
            <h3 className="section-header-subtitle text-uppercase mb-3">team member</h3>
            <h2 className="section-header-title text-capitalize mb-3 ">See Our Latest<br/>Blog Posts</h2>
            <div className="section-header-line  mb-5"></div>
            <button className="blog-btn btn text-right">see all blogs</button>
          </div>
          <div className="blog-slider">
            <OwlCarousel className="owl-theme" 
            loop={false}
            margin={40}
            navText= {this.state.navText}
            nav={true}
            responsive={this.state.responsive} >
              <div className="blog-item">
                <img src="images/blog-2-390x290.jpg" alt="" className="blog-item-img"/>
                <div className="blog-item-content">
                  <a href="index.html" className="blog-item-link blue-hover text-capitalize">tecnho</a><span className="blog-item-span blue-hover">December 4, 2018</span>
                  <h2><a href="#" className="blog-item-title blue-hover">Tiktok Illegally collecting data sharing</a></h2>
                </div>
              </div>
              <div className="blog-item">
                <img src="images/blog1-390x290.jpg" alt="" className="blog-item-img"/>
                <div className="blog-item-content">
                  <a href="index.html" className="blog-item-link blue-hover text-capitalize">tecnho</a><span className="blog-item-span blue-hover">December 4, 2018</span>
                  <h2><a href="#" className="blog-item-title blue-hover">How can use our latest news by techno</a></h2>
                </div>
              </div>
              <div className="blog-item">
                <img src="images/blog01-390x290.jpg" alt="" className="blog-item-img"/>
                <div className="blog-item-content">
                  <a href="index.html" className="blog-item-link blue-hover text-capitalize">tecnho</a><span className="blog-item-span blue-hover">December 4, 2018</span>
                  <h2><a href="#" className="blog-item-title blue-hover">Convincing reasons you need to learn</a></h2>
                </div>
              </div>
              <div className="blog-item">
                <img src="images/blog-2-390x290.jpg" alt="" className="blog-item-img"/>
                <div className="blog-item-content">
                  <a href="index.html" className="blog-item-link blue-hover text-capitalize">tecnho</a><span className="blog-item-span blue-hover">December 4, 2018</span>
                  <h2><a href="#" className="blog-item-title blue-hover">The five devices you need to work anytime</a></h2>
                </div>
              </div>
              <div className="blog-item">
                <img src="images/blog4-390x290.jpg" alt="" className="blog-item-img"/>
                <div className="blog-item-content">
                  <a href="index.html" className="blog-item-link blue-hover text-capitalize">tecnho</a><span className="blog-item-span blue-hover">December 4, 2018</span>
                  <h2><a href="#" className="blog-item-title blue-hover">How to learn PHP 10 tips to get you started</a></h2>
                </div>
              </div>
              <div className="blog-item">
                <img src="images/blog01-390x290.jpg" alt="" className="blog-item-img"/>
                <div className="blog-item-content">
                  <a href="index.html" className="blog-item-link blue-hover text-capitalize">tecnho</a><span className="blog-item-span blue-hover">December 4, 2018</span>
                  <h2><a href="#" className="blog-item-title blue-hover">The five devices you need to work anytime</a></h2>
                </div>
              </div>
              <div className="blog-item">
                <img src="images/blog1-390x290.jpg" alt="" className="blog-item-img"/>
                <div className="blog-item-content">
                  <a href="index.html" className="blog-item-link blue-hover text-capitalize">tecnho</a><span className="blog-item-span blue-hover">December 4, 2018</span>
                  <h2><a href="#" className="blog-item-title blue-hover">Where and how to watch live stream today</a></h2>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
        </Fragment>
     )
    }
}
 
export default Blog;
