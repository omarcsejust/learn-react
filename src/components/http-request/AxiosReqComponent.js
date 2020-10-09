/*
1. Install Axios: npm install axios
*/

import React, { Component } from 'react';
import axios from 'axios';

class AxiosReqComponent extends Component {
    constructor(){
        super();
        this.USER_URL = "https://reqres.in/api/users?page=1";
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        axios.get(this.USER_URL)
        .then(response => {
            console.log(response.data.data);
        })
        .catch(errors => {
            console.log(errors);
        })
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default AxiosReqComponent;