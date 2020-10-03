import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/Image/homee.png";
import './index.css';
import Com from './Common';

const Home = () => {
    return ( 
        <>
           <Com       
            name="Find the next service with" 
            imgsrc ={web} 
            visit="/service" 
            btname="Let's Start"/>
        </>
    );

};
export default Home;