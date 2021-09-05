import React, { Fragment } from 'react';
import './Footer.css';


const Footer = () => {
    return ( 
        <Fragment>
           <footer>
        <div className="mycontainer">
          <div className="footer-content row">
            <div className="footer-item col-lg-3 col-md-6 col-12 mb-5">
              <div className="footer-logo mb-5">
                <img src="images/tr-logo.png" alt=""/>
              </div>
              <div className="footer-item-desc mb-5">
                <p>Condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus. </p>
              </div>
              <div className="footer-item-social">
                <a href="#" className="blue-hover text-capitalize">follow us</a>
                <ul>
                  <li><a href="#" target="_blank" className="blue-hover" title="facebook"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#" target="_blank" className="blue-hover" title="twitter"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#" target="_blank" className="blue-hover" title="tumblr"><i className="fab fa-tumblr"></i></a></li>
                  <li><a href="#" target="_blank" className="blue-hover" title="vimeo"><i className="fab fa-vimeo-v"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="footer-item col-lg-3 col-md-6 col-12 mb-5">
              <div className="footer-item-title mb-5">
                <h2 className="h3 text-capitalize">our services</h2>
              </div>
              <div className="footer-item-list">
                <ul>
                  <li className="blue-hover text-capitalize"><a href="#">Marketing Strategy</a></li>
                  <li className="blue-hover text-capitalize"><a href="#">Interior Design</a></li>
                  <li className="blue-hover text-capitalize"><a href="#">Digital Services</a></li>
                  <li className="blue-hover text-capitalize"><a href="#">Product Selling</a></li>
                  <li className="blue-hover text-capitalize"><a href="#">Product Design</a></li>
                  <li className="blue-hover text-capitalize"><a href="#">Social Marketing</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-item col-lg-3 col-md-6 col-12 mb-5">
              <div className="footer-item-title mb-5">
                <h2 className="h3 text-capitalize">company address</h2>
              </div>
              <div className="footer-item-desc mb-4">
                <p>Porem awesome dolor sitework amet, consetur acing elit, sed do eiusmod ligal</p>
              </div>
              <div className="footer-item-desc mb-3">
                <p><strong> Address:</strong> 54/1 New dhas sorini Asut, Melbord Austria.</p>
              </div>
              <div className="footer-item-desc mb-3">
                <p><strong>Phone: </strong>+201558061662</p>
              </div>
              <div className="footer-item-desc">
                <p><strong>Email: </strong>nea76515.com</p>
              </div>
            </div>
            <div className="footer-item col-lg-3 col-md-6 col-12 mb-5">
              <div className="footer-item-title mb-5">
                <h2 className="h3 text-capitalize">popular posts</h2>
              </div>
              <div className="footer-item-post mb-4 pb-4">
                <img src="images/blog-2-80x80.jpg" alt=""/>
                <div className="footer-item-post-content">
                  <h4 className="blue-hover"><a href="#">Tiktok Illegally collecting data sharing</a></h4>
                  <span>December 4, 2018</span>
                </div>
              </div>
              <div className="clear"></div>
              <div className="footer-item-post last">
                <img src="images/blog1-80x80.jpg" alt=""/>
                <div className="footer-item-post-content">
                  <h4 className="blue-hover"><a href="#">How can use our latest news by</a></h4>
                  <span>December 4, 2018</span>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-line"></div>
          <div className="footer-bottom row">
            <div className="col-md-6 col-sm-12">
              <p>Copyright © techno all rights reserved.</p>
            </div>
            <div className="col-md-6 col-sm-12">
              <ul>
                <li><a href="#">Terms &amp; Condition</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>

      </footer>
        </Fragment>
     );
}
 
export default Footer;