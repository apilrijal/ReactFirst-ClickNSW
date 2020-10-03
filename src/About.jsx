import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/Image/about.png";
import Com from './Common';
import './index.css';

const About = () => {
    return (
        <>
          <Com 
          name="About " 
          imgsrc ={web} 
          visit="/contact" 
          btname="Contact Now"/>
        </>
    
    );
};
export default About;