import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css'
const Header = () => {
    return ( 
        <Fragment>
            <header>
        <div className="header-content">
            <div className="mycontainer">
            <div className="row">
                <div className="logo col-lg-3 col-12 text-center text-lg-left">
                <h1><a href="index.html"><img src="images/main-logo.png" alt=""/></a></h1>
                </div>
                <nav className="col-lg-9 text-right">
                <ul className=" nav-list text-capitalize">
                    <li className="dropdown">
                    <NavLink to="/" exact className="blue-hover">home</NavLink>
                    <ul className="menu">
                        <li><a href="#" className="blue-hover">homepage one</a></li>
                        <li><a href="#" className="blue-hover">homepage two</a></li>
                        <li><a href="#" className="blue-hover">homepage three</a></li>
                        <li><a href="#" className="blue-hover">homepage four</a></li>
                        <li><a href="#" className="blue-hover">homepage five</a></li>
                        <li><a href="#" className="blue-hover">homepage six</a></li>
                        <li><a href="#" className="blue-hover">homepage diffrent (new)</a></li>
                        <li><a href="#" className="blue-hover">loading page one</a></li>
                        <li><a href="#" className="blue-hover">loading page two (new)</a></li>
                        <li><a href="#" className="blue-hover">homepage animate (new)</a></li>
                        
                    </ul>
                    </li>
                    <li className="dropdown">
                    <a href="#" className="blue-hover">discover</a>
                    <ul className="menu">
                        <li><a href="#" className="blue-hover">feature</a></li>                  
                        <li><NavLink to="/team" className="blue-hover">team</NavLink></li>                  
                        <li><a href="#" className="blue-hover">pricing</a></li>                  
                    </ul>
                    </li>
                    <li className="dropdown">
                    <a href="#" className="blue-hover">pages</a>
                    <ul className="menu">
                        <li><a href="#" className="blue-hover">about us</a></li>                                  
                        <li className="dropdown2 p-rel">
                        <NavLink to="/services" className="blue-hover">our service</NavLink>
                        <ul htmlFor="ff" className="menu2">
                            <li><a href="#" className="blue-hover">service style one</a></li>                                   
                            <li><a href="#" className="blue-hover">service style two</a></li>                                   
                            <li><a href="#" className="blue-hover">service style three</a></li>                                   
                            <li><a href="#" className="blue-hover">service style four</a></li>                                   
                            <li><a href="#" className="blue-hover">service details</a></li>                                   
                        </ul>
                        </li>                                  
                        <li className="dropdown2 p-rel">
                        <a href="#" className="blue-hover">portfolio</a>
                        <ul className="menu2">
                            <li><a href="#" className="blue-hover">portfolia 2column</a></li>                                   
                            <li><a href="#" className="blue-hover">portfolia 3column</a></li>                                   
                            <li><a href="#" className="blue-hover">portfolia 4column wide</a></li>                                   
                        </ul>
                        </li>                                  
                        <li><NavLink to="/pricing" className="blue-hover">pricing plan</NavLink></li>                                  
                        <li><a href="#" className="blue-hover">case study</a></li>                                  
                        <li><a href="#" className="blue-hover">team member</a></li>                                  
                        <li><a href="#" className="blue-hover">why choose us</a></li>                                  
                        <li><a href="#" className="blue-hover">FAQ'S</a></li>                                  
                        <li><a href="#" className="blue-hover">contact</a></li>                                  
                    </ul>
                    </li>
                    <li className="dropdown">
                    <NavLink to="/blog" className="blue-hover">blog</NavLink>
                    <ul className="menu">
                        <li><a href="#" className="blue-hover">blog grid</a></li>                
                        <li><a href="#" className="blue-hover">blog list</a></li>                
                    </ul>
                    </li>
                    <li className="last">
                    <NavLink to="/contact" className="blue-hover">contact</NavLink>
                    </li>
                    <li>
                    <button className="btn nav-btn">get a qoute</button></li>
                </ul>
                </nav>
            </div>
            </div>
            
            <nav className="small-nav">
            <h4 className="small-nav-title text-capitalize">techno</h4>
            <div className="nav-icon sm-dropdown">
                <span></span>
                <span></span>
                <span></span>
                <p className="nav-icon-close">X</p>
            </div>
            <ul className="small-nav-menu text-capitalize">
                <ul>
                <li className="sm-dropdown">
                    <a href="#">home</a>
                </li>
                <ul className="sm-menu">
                    <li><a href="#">homepage main</a></li>
                    <li className="sm-dropdown">
                    <a href="#">added new demo</a>
                    </li>
                    <ul className="sm-menu2">
                    <li><a href="#">homepage main (updated)</a></li>
                    <li><a href="#">new demo one</a></li>
                    <li><a href="#">new demo two</a></li>
                    </ul>
                    <li><a href="#">new demo 2021</a></li>
                    <ul className="sm-menu2">
                    <li><a href="#">new demo-1 (2021)</a></li>
                    <li><a href="#">new demo-2 (2021)</a></li>
                    <li><a href="#">AI & Data science</a></li>
                    </ul>
                    <li><a href="#">homepage two</a></li>
                    <li><a href="#">homepage three</a></li>
                </ul>
                <li className="sm-dropdown">
                    <a href="#">company</a>
                </li>
                <ul className="sm-menu">
                    <li className="sm-dropdown">
                    <a href="#">about us</a>
                    </li>
                    <ul className="sm-menu2">
                    <li><a href="#">new demo-1 (2021)</a></li>
                    <li><a href="#">new demo-2 (2021)</a></li>
                    <li><a href="#">AI & Data science</a></li>
                    </ul>
                    <li className="sm-dropdown">
                    <a href="#">portfolio</a>
                    </li>
                    <ul className="sm-menu2">
                    <li><a href="#" className="blue-hover">portfolia 2column</a></li>                                   
                    <li><a href="#" className="blue-hover">portfolia 3column</a></li>                                   
                    <li><a href="#" className="blue-hover">portfolia 4column wide</a></li>  
                    </ul>
                    <li><a href="#">our service</a></li>
                    <li><a href="#">team member</a></li>
                    <li><a href="#">single team</a></li>
                </ul>
                <li className="sm-dropdown">  
                    <a href="#">services</a>
                </li>
                <ul className="sm-menu">
                    <li><a href="#" className="blue-hover">service style one</a></li>                                   
                    <li><a href="#" className="blue-hover">service style two</a></li>                                   
                    <li><a href="#" className="blue-hover">service style three</a></li>                                   
                    <li><a href="#" className="blue-hover">service style four</a></li>                                   
                    <li><a href="#" className="blue-hover">service details</a></li>
                </ul>
                <li className="sm-dropdown">
                    <a href="#">IT solution</a>
                </li>
                <ul className="sm-menu">
                    <li><a href="#" className="blue-hover">IT service</a></li>                                   
                    <li><a href="#" className="blue-hover">managed IT service</a></li>                                   
                    <li><a href="#" className="blue-hover">idustries</a></li>                                   
                    <li><a href="#" className="blue-hover">IT service details</a></li>                                   
                </ul>
                <li  className="sm-dropdown">
                    <a href="#">blog</a>
                </li>
                <ul className="sm-menu">
                    <li><a href="#" className="blue-hover">blog grid</a></li>                
                    <li><a href="#" className="blue-hover">blog list</a></li>                       
                </ul>
                <li className="sm-dropdown">
                    <a href="#">contact</a>
                </li>
                <ul className="sm-menu">
                    <li><a href="#" className="blue-hover">contact style one</a></li>                       
                    <li><a href="#" className="blue-hover">contact style two</a></li>                       
                    <li><a href="#" className="blue-hover">contact style three</a></li>                       
                                        
                </ul>
                </ul>



            </ul>
            </nav>
        </div>
    </header>
        </Fragment>
     );
}
 
export default Header;