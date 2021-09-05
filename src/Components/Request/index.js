import React, { Fragment } from 'react';
import './Request.css';

const Request = () => {
    return ( 
        <Fragment>
            <section className="request text-center">
                <div className="requset-content">
                    <p className="request-num mb-4">+201558061662</p>
                    <h2 className="request-title mb-5">To make requests for the further information</h2>
                    <button className="btn blue-hover text-uppercase">contact us now <i className="fa fa-angle-right"></i></button>
                </div>
            </section>
        </Fragment>
     );
}
 
export default Request;