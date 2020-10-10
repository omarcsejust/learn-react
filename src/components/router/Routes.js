import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

// import pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';

class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/contact" component={Contact}></Route>
                    <Route exact path="/users" component={Users}></Route>
                    {/* PASS DATA TO USER COMPONENT*/}
                    <Route exact path="/user/:id" component={UserDetails}></Route> 
                    <Route component={NotFound}></Route>
                </Switch>
            </div>
        );
    }
}

export default Routes;