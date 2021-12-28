import React from 'react';
import { NavLink } from 'react-router-dom';


const Common = (props) => {
    return (<>
        <div className="container-fluid nav-bg ">
            <div className="row">
                <div className="col-10 mx-auto mt-5">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-6">
                            <label className="keywords">{props.name} <br />
                                <strong className="Brand">Timeline Telematics</strong> </label>
                            <br />
                            <label className="Keywords_down">We are Team of Talented Developers</label>
                            <br />
                            <NavLink to={props.visit} className="btn btn-outline-primary btn-sm text-center">{props.btntext}</NavLink>
                        </div>
                        <div className="col-6">
                            <img src={props.imgsrc} className="animated img-fluid" alt="animated" />
                        </div>

                    </div>


                </div>
            </div>
        </div>
    </>)

}

export default Common;