import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (<>
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">

                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand" to="/">TimeLine</NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/service">Services</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="about">About Us</NavLink>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                    </nav>

                </div>

            </div>

        </div>

    </>)

}

export default Navbar;