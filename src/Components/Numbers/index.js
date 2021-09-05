import React, { Fragment } from 'react';
import CountUp from 'react-countup';
import './Numbers.css';


const Numbers = () => {
    return ( 
        <Fragment>
            <section className="numbers" id="numbers">
        <div className="mycontainer">
          <div className="row">
            <div className="numbers-item text-center col-lg-3 col-md-6 col-12">
              <h2 className="numbers-item-number mb-3 h1 d-inline-block" ><CountUp end={15} start={0} duration={2.75}/></h2><span className="mb-3 h1">K</span>
              <h4 className="numbers-item-title text-capitalize">happy clints</h4>
            </div>
            <div className="numbers-item text-center col-lg-3 col-md-6 col-12">
              <h2 className="numbers-item-number mb-3 h1 d-inline-block" >1.5</h2><span className="mb-3 h1">K</span>
              <h4 className="numbers-item-title text-capitalize">account numbers</h4>
            </div>
            <div className="numbers-item text-center col-lg-3 col-md-6 col-12">
              <h2 className="numbers-item-number mb-3 h1 d-inline-block"  >10</h2><span className="mb-3 h1">K</span>
              <h4 className="numbers-item-title text-capitalize">finished projects</h4>
            </div>
            <div className="numbers-item text-center col-lg-3 col-md-6 col-12 last">
              <h2 className="numbers-item-number last mb-3 h1 d-inline-block" >100</h2><span className="mb-3 h1">+</span>
              <h4 className="numbers-item-title text-capitalize">win awards</h4>
            </div>
          </div>
        </div>
      </section>
        </Fragment>
     );
}
 
export default Numbers;