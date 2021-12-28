import React from 'react';
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Service from "./Service"
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Navbar from './Navbar'
import "./App.css";
import "./index.css";
 import Footer from './Footer';


const App = () => {
    return (
    <>
<div className="page-container">
<div className="content">
<Navbar />
<Router>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={Service} />
       </Switch>
</Router>
</div>
<Footer />
</div>
    </>
    )

}

export default App;