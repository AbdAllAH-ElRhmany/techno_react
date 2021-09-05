import React, { Fragment } from 'react';
import './Team.css';

const Team = () => {
    return ( 
        <Fragment>
            <section className="team pad-120">
        <div className="mycontainer">
          <div className="section-header mb-5 text-center">
            <h3 className="section-header-subtitle text-uppercase mb-3">team member</h3>
            <h2 className="section-header-title text-capitalize mb-3 ">our awesomr creative<br/>team member</h2>
            <div className="section-header-line  m-auto mb-5"></div>
          </div>
          <div className="row">
            <div className="team-item col-lg-3 mb-4 col-md-6 col-12">
              <div className="team-item-content pos-rel  rounded-circle">
                <img src="images/02-1.jpg" className="w-100 rounded-circle" alt=""/>
                <div className="team-item-overlay  hero-img">
                  <div className="team-item-content-overlay text-center  text-capitalize">
                    <h2 className="team-item-content-overlay-title h5 mb-2">Diego Martins </h2>
                    <span className="team-item-content-overlay-job mb-2 d-inline-block">designer</span>
                    <ul className="team-item-content-overlay-social">
                      <li><a href="#" target="_blank" title="facebook"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#" target="_blank" title="twitter"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#" target="_blank" title="linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                      <li><a href="#" target="_blank" title="pinterest"><i className="fab fa-pinterest"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-item col-lg-3 mb-4 col-md-6 col-12">
              <div className="team-item-content pos-rel  rounded-circle">
                <img src="images/03.jpg" className="w-100 rounded-circle" alt=""/>
                <div className="team-item-overlay  hero-img">
                  <div className="team-item-content-overlay text-center  text-capitalize">
                    <h2 className="team-item-content-overlay-title h5 mb-2"> Maria Yaseen</h2>
                    <span className="team-item-content-overlay-job mb-2 d-inline-block">manager</span>
                    <ul className="team-item-content-overlay-social">
                      <li><a href="#" target="_blank" title="facebook"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#" target="_blank" title="twitter"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#" target="_blank" title="linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                      <li><a href="#" target="_blank" title="pinterest"><i className="fab fa-pinterest"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-item col-lg-3 mb-4 col-md-6 col-12">
              <div className="team-item-content pos-rel  rounded-circle">
                <img src="images/3243.jpg" className="w-100 rounded-circle" alt=""/>
                <div className="team-item-overlay  hero-img">
                  <div className="team-item-content-overlay text-center  text-capitalize">
                    <h2 className="team-item-content-overlay-title h5 mb-2">Jelvin Archush</h2>
                    <span className="team-item-content-overlay-job mb-2 d-inline-block">designer</span>
                    <ul className="team-item-content-overlay-social">
                      <li><a href="#" target="_blank" title="facebook"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#" target="_blank" title="twitter"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#" target="_blank" title="linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                      <li><a href="#" target="_blank" title="pinterest"><i className="fab fa-pinterest"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-item col-lg-3 mb-4 col-md-6 col-12">
              <div className="team-item-content pos-rel  rounded-circle">
                <img src="images/01-2.jpg" className="w-100 rounded-circle" alt=""/>
                <div className="team-item-overlay  hero-img">
                  <div className="team-item-content-overlay text-center  text-capitalize">
                    <h2 className="team-item-content-overlay-title h5 mb-2"> Ifaifa Jerin</h2>
                    <span className="team-item-content-overlay-job mb-2 d-inline-block">Marketing</span>
                    <ul className="team-item-content-overlay-social">
                      <li><a href="#" target="_blank" title="facebook"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#" target="_blank" title="twitter"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#" target="_blank" title="linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                      <li><a href="#" target="_blank" title="pinterest"><i className="fab fa-pinterest"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </Fragment>
     );
}
 
export default Team;