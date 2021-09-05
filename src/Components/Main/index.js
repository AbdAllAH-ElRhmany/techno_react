import React, { Component, Fragment } from 'react';
import Home from '../Home/'
import Discover from '../Discover/';
import Services from '../Services/';
import Design from '../Design/';
import Numbers from '../Numbers/';
import Team from '../Team/';
import Pricing from '../Pricing/';
import Request from '../Request/';
import Blog from '../Blog/';
import Map from '../Map/';
import Contact from '../Contact/';

class Main extends React.Component {
    render() { 
        return (
            <Fragment>
                 <Home />
                <Discover />
                <Services />
                <Design />
                <Numbers />
                <Team />
                <Pricing />
                <Request />
                <Blog />
                <Map />
                <Contact />
            </Fragment>
        );
    }
}
 
export default Main;