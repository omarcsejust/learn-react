import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Users extends Component {
    constructor(){
        super();
        this.state = {
            users: [
                {
                    id: 1,
                    name: 'Anisur Rahman',
                    title: 'Teacher',
                    age: 40
                },
                {
                    id: 2,
                    name: 'Aziz',
                    title: 'Engineer',
                    age: 43
                },
                {
                    id: 3,
                    name: 'Belal',
                    title: 'Mechanics',
                    age: 37
                }
            ]
        }
    }
    render() {
        // Pass data to User component
        const user_list = this.state.users.map((user) => {
            const to = '/user/'+user.id;
            return <li key={user.id}>
                <button><Link to={to}>{user.name}</Link></button>  
                </li>
        });
        return (
            <div>
                <h2>All users</h2>
                <ul>
                    {user_list}
                </ul>
            </div>
        );
    }
}

export default Users;