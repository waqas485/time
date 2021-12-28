import React from 'react';
import web from "./images/business.svg";
import Common from './Common';

const Home = () => {
    return (<>
            <Common 
            name="Grow Your Business With"
            imgsrc={web}
            visit='/contact'
            btntext="Contact"
            />
    </>)

}

export default Home;