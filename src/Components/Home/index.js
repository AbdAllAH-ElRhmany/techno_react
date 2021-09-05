import React, { Component, Fragment } from 'react';
import './Home.js'
import { HomeSection, Home_Content, Home_Title, HomeBtn, Home_Desc } from './Home.js';

const Home = () => {
    return ( 
        <Fragment>
            <HomeSection className="home">
                <div className="mycontainer d-flex">
                    <Home_Content  className="home-content">
                        <Home_Title className="home-title h1 mb-3">Secure IT Solutions <br/>For a More Secure</Home_Title>
                        <Home_Desc className="home-desc desc mb-4">Aliquam sed diam faucibus, lacinia dui consequat, blandit metus. Sed vel augue felis. Cras vel faucibus mauris. Aenean fermentum eleifend turpis. Cras malesuada placerat risus. Vestibulum nisi velit.</Home_Desc>
                        <HomeBtn className="btn">how it work</HomeBtn>
                        <HomeBtn className="btn">about us</HomeBtn>
                    </Home_Content>
                </div>
            </HomeSection>
        </Fragment>
     );
}
 
export default Home;