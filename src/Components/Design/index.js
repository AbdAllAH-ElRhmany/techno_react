import React, { Fragment } from 'react';
const Design = () => {
    return ( 
        <Fragment>
            <section className="design pad-120">
        <div className="mycontainer">
          <div className="row">
            <div className="design-item col-lg-6 col-12 paddt-50">
              <div className="designitem-img pos-rel  text-center">
                <img src="images/Untitled-1.png"  alt=""/>
                <img src="images/service-rot.png" className="rotate-img width90" alt=""/>
              </div>
            </div>
            <div className="design-item col-lg-6 col-12">
              <div className="section-header mb-4 text-left">
                <h2 className="section-header-title text-capitalize mb-3">Design & Development</h2>
                <div className="section-header-line mb-3"></div>
                <p className="section-header-desc desc">Phasellus vitae velit sit amet diam semper commodo quis quis libero. Morbi consequat arcu augue, molestie faucibus metus ullamcorper vel apple is the best theme.</p>
              </div>
              <div className="design-features row">
                <div className="design-features-items col-sm-6 col-12">
                  <div className="design-features-item">
                    <span><i className="fas fa-th"></i></span>
                    <h4>responsive design</h4>
                  </div>
                  <div className="design-features-item">
                    <span><i className="fas fa-mobile-alt"></i></span>
                    <h4>android development</h4>
                  </div>
                  <div className="design-features-item">
                    <span><i className="fas fa-desktop"></i></span>
                    <h4>remote desktop</h4>
                  </div>
                  <div className="design-features-item">
                    <span><i className="fas fa-copy"></i></span>
                    <h4>solution project</h4>
                  </div>
                </div>
                <div className="design-features-items col-sm-6 col-12">
                  <div className="design-features-item">
                    <span><i className="fas fa-arrows-alt"></i></span>
                    <h4>react developer</h4>
                  </div>
                  <div className="design-features-item">
                    <span><i className="fab fa-connectdevelop"></i></span>
                    <h4>web developer</h4>
                  </div>
                  <div className="design-features-item">
                    <span><i className="fas fa-percent"></i></span>
                    <h4>UX/UI design</h4>
                  </div>
                  <div className="design-features-item">
                    <span><i className="far fa-check-square"></i></span>
                    <h4>print ready design</h4>
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
 
export default Design;