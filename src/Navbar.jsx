import React from 'react';
import {NavLink} from 'react-router-dom';
import './index.css';

const Navbar = () => {

    return (
        <>
            <div className="container-fluid nav_bg sticky-top">
                <div className='row'>
                    <div className=" col-11 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <NavLink className="navbar-brand" to="/">ClickNSW</NavLink>
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span></button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li clasNames="nav-item active">
                                            <NavLink activeClassName = 'menu_active' exact  className="nav-link active" to="/">Home <span className="sr-only">(current)</span></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName = 'menu_active' exact  className="nav-link active" to="/service">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName = 'menu_active' exact  className="nav-link active" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName = 'menu_active' exact  className="nav-link active" to="/contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </>

    );
};
export default Navbar;