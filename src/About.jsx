import React from 'react';
import web from "./images/about.svg";
import Common from './Common';

const About = () => {
    return (<>
            <Common 
            name="Welcome to About Us Page"
            imgsrc={web}
            visit='/contact'
            btntext="Contact"
            />
    </>)

}

export default About;