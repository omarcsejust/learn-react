import React, {Component} from 'react';

class ClassComponent extends Component{
    constructor(){
        super() // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        /*this.state = {
            name: "Omar Hasan",
            age: 27,
            title: "Software Engineer"
        }*/
    }

    // same as in constructor: this.state
    state = {
        name: "Omar Hasan",
        age: 27,
        title: "Software Engineer"
    }

    data = {
        name: "Kamal",
        product_name: null
    }

    // this will automatically be called when component will load
    componentDidMount(){
        //this.data.product_name = "Shirt";  // This won't work
        this.setState({product_name: "Shirt"}) // this will set product_name property to the state object not data object
    }
    
    render(){
        return(
            <div>
                <h2>Hello I am from Props: {this.props.class_name}</h2>
                <h2>Hello I am from State: {this.state.name}</h2>
                <h2>Hello I am from Data: {this.data.name}</h2>
                <h2>Hello I am from setState: {this.state.product_name}</h2>
            </div>
        );
    }
}

export default ClassComponent;