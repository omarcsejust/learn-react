import React, { Component } from 'react';

class UserDetails extends Component {
    // Receive data(use id) frim Users component
    constructor({match}){
        super();
        this.state = {
            id: match.params.id
        }
    }
    render() {
        return (
            <div>
                <h2>User Details</h2>
                <h3>User Id is: {this.state.id}</h3>
            </div>
        );
    }
}

export default UserDetails;