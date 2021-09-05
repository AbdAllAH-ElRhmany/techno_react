import React, { Fragment } from 'react';
import './Discover.css'

const Discover = () => {
    return ( 
        <Fragment>
            <section className="discover pad-60">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12">
            <div className="discover-item  text-center">
              <span className="discover-item-icon mb-3"><i className="fas fa-video"></i></span>
              <h3 className="discover-item-title mb-3 text-capitalize ">network service</h3>
              <p className="discover-item-desc desc">Donec pellentesque turpis utium lorem imperdiet semper viverra.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="discover-item  text-center">
              <span className="discover-item-icon mb-3"><i className="fas fa-server"></i></span>
              <h3 className="discover-item-title mb-3 text-capitalize ">Disaster Recovery</h3>
              <p className="discover-item-desc desc">Donec pellentesque turpis utium lorem imperdiet semper viverra.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="discover-item  text-center">
              <span className="discover-item-icon mb-3"><i className="fas fa-cloud"></i></span>
              <h3 className="discover-item-title mb-3 text-capitalize ">Cloud Solutions</h3>
              <p className="discover-item-desc desc">Donec pellentesque turpis utium lorem imperdiet semper viverra.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="discover-item  text-center">
              <span className="discover-item-icon mb-3"><i className="fas fa-laptop"></i></span>
              <h3 className="discover-item-title mb-3 text-capitalize ">network service</h3>
              <p className="discover-item-desc desc">Donec pellentesque turpis utium lorem imperdiet semper viverra.</p>
            </div>
          </div>
        </div>
      </section>
        </Fragment>
     );
}
 
export default Discover;