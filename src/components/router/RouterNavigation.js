import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class RouterNavigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About US</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/users">All Users</Link></li>
                </ul>
            </div>
        );
    }
}

export default RouterNavigation;