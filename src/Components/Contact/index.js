import React, { Fragment } from 'react';
import './Contact.css';


const Contact = () => {
    return ( 
        <Fragment>
           <section className="contact">
        <div className="mycontainer">
          <form className="contact-form ">
            <div className="section-header mb-5 pos-rel">
              <h2 className="section-header-title text-capitalize mb-3 text-center">contact us</h2>
            </div>
            <div className="row">
              <div className="col-md-6 col-12 mb-4">
                <input type="text" name="" className="form-control" placeholder="Name" id=""/>
              </div>
              <div className="col-md-6 col-12 mb-4">
                <input type="email" name="" className="form-control" placeholder="Email" id=""/>
              </div>
              <div className="col-md-6 col-12 mb-4">
                <input type="text" name="" className="form-control" placeholder="Phone" id=""/>
              </div>
              <div className="col-md-6 col-12 mb-4">
                <input type="text" name="" className="form-control" placeholder="Website" id=""/>
              </div>
              <div className="col-12 mb-4">
                <textarea name="" id="" className="form-control" rows="7" cols="20" placeholder="Your Massage"></textarea>
              </div>
              <input type="submit" value="Send Massage" className="btn "/>
            </div>
          </form>
        </div>
      </section>
        </Fragment>
     );
}
 
export default Contact;