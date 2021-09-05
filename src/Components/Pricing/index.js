import React, { Fragment } from 'react';
import './Pricing.css';
const Pricing = () => {
    return ( 
        <Fragment>
            <section className="pricing pad-120">
        <div className="mycontainer">
          <div className="section-header mb-5 text-center">
            <h3 className="section-header-subtitle text-uppercase mb-3">YOUR BEST PRICE</h3>
            <h2 className="section-header-title text-capitalize mb-3 ">Pricing Plans</h2>
            <div className="section-header-line  m-auto "></div>
            <p className="section-header-desc desc w-75 pt-4 m-auto">Phasellus vitae velit sit amet diam semper commodo quis quis libero. Morbi consequat arcu augue, molestie faucibus metus ullamcorper vel apple is the best theme.</p>
          </div>
          <div className="row">
            <div className="pricing-item-col col-lg-4 mb-4 col-md-6 col-12">
              <div className="pricing-item pricing-item-border text-center">
                <h2 className="pricing-item-title text-capitalize mb-5">basic plan</h2>
                <h2 className="pricing-item-price h1 d-inline-block mb-4"><sup>$</sup>49.99</h2><span className="pricing-item-price-month"> / month</span>
                <ul className="pricing-item-features pricing-item-border text-capitalize mb-4">																	
                  <li>30 days trial Features</li>
                  <li>Synced to cloud database</li>
                  <li>10 hours of support</li>
                  <li>Social media integration</li>
                  <li>Unlimited Features</li>
                </ul>
                <button className="btn pricing-item-border">choose plan</button>
              </div>
            </div>
            <div className="pricing-item-col col-lg-4 mb-4 col-md-6 col-12">
              <div className="pricing-item active pricing-item-border text-center">
                <h2 className="pricing-item-title text-capitalize mb-5">Premium Plan</h2>
                <h2 className="pricing-item-price h1 d-inline-block mb-4"><sup>$</sup>99.77</h2><span className="pricing-item-price-month"> / month</span>
                <ul className="pricing-item-features pricing-item-border text-capitalize mb-4">																	
                  <li>30 days trial Features</li>
                  <li>Synced to cloud database</li>
                  <li>10 hours of support</li>
                  <li>Social media integration</li>
                  <li>Unlimited Features</li>
                </ul>
                <button className="btn pricing-item-border">choose plan</button>
              </div>
            </div>
            <div className="pricing-item-col col-lg-4 mb-4 col-md-6 col-12">
              <div className="pricing-item pricing-item-border text-center">
                <h2 className="pricing-item-title text-capitalize mb-5">Ultra Plan</h2>
                <h2 className="pricing-item-price h1 d-inline-block mb-4"><sup>$</sup>89.49</h2><span className="pricing-item-price-month"> / month</span>
                <ul className="pricing-item-features pricing-item-border text-capitalize mb-4">																	
                  <li>30 days trial Features</li>
                  <li>Synced to cloud database</li>
                  <li>10 hours of support</li>
                  <li>Social media integration</li>
                  <li>Unlimited Features</li>
                </ul>
                <button className="btn pricing-item-border">choose plan</button>
              </div>
            </div>
            
          </div>
        </div>
      </section>
        </Fragment>
     );
}
 
export default Pricing;