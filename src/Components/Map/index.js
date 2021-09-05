import React, { Fragment } from 'react';
import './Map.css';


const Map = () => {
    return ( 
        <Fragment>
            <section className="map">
        <div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=%D8%A7%D9%84%D8%A8%D8%AD%D9%8A%D8%B1%D9%87%20%D8%AF%D9%85%D9%86%D9%87%D9%88%D8%B1&t=&z=9&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe><a href="https://yt2.org"></a><br/></div></div> 
      </section>
        </Fragment>
     );
}
 
export default Map;