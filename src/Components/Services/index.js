import React, { Fragment } from 'react';
import './Services.css';

const Services = () => {
    return (
        <Fragment>
            <section className="services pad-120">
                <div className="mycontainer">
                    <div className="row">
                        <div className="services-item col-lg-6 col-12">
                            <div className="section-header mb-4 text-left">
                                <h2 className="section-header-title text-capitalize mb-3">cloud services</h2>
                                <div className="section-header-line mb-3"></div>
                                <p className="section-header-desc desc">Phasellus vitae velit sit amet diam semper commodo quis quis libero. Morbi consequat arcu augue, molestie faucibus metus ullamcorper vel apple is the best theme.</p>
                            </div>
                        <div className="services-features row">
                            <div className="services-features-items col-sm-6 col-12">
                                <div className="services-features-item">
                                    <span><i className="fas fa-database"></i></span>
                                    <h4>Cloud databases	</h4>
                                </div>
                                <div className="services-features-item">
                                    <span><i className="far fa-file-alt"></i></span>
                                    <h4>file storage</h4>
                                </div>
                                <div className="services-features-item">
                                    <span><i className="fas fa-database"></i></span>
                                    <h4>Cloud databases	</h4>
                                </div>
                                <div className="services-features-item">
                                    <span><i className="far fa-envelope"></i></span>
                                    <h4>email servers</h4>
                                </div>
                                </div>
                                <div className="services-features-items col-sm-6 col-12">
                                <div className="services-features-item">
                                    <span><i className="fas fa-globe"></i></span>
                                    <h4>website hosting</h4>
                                </div>
                                <div className="services-features-item">
                                    <span><i className="fas fa-chart-line"></i></span>
                                    <h4>forxe trading</h4>
                                </div>
                                <div className="services-features-item">
                                    <span><i className="fas fa-desktop"></i></span>
                                    <h4>remote desktop</h4>
                                </div>
                                <div className="services-features-item">
                                    <span><i className="fas fa-cloud"></i></span>
                                    <h4>hypird cloud</h4>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="services-item col-lg-6 col-12 paddt-50">
                            <div className="servicesitem-img pos-rel  text-center">
                                <img src="images/main-pic-88aee41b9fdaf9e8b70391c8ba54ebdc.png"  alt=""/>
                                <img src="images/service-rot.png" className="rotate-img width90" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
      );
}
 
export default Services;