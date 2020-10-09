import React, { Component } from 'react';

class BindFieldValue extends Component {
    
    state = {
        user_name: "",
        title: ""
    }
    
    onChangeHandler = (event) => {
        let name_attr_value = event.target.name;  // get name attribute value: name="user_name"
        let input_field_value = event.target.value;  // get targated input field value: value="Omar"

        //this.setState({user_name: input_field_value});
        this.setState({[name_attr_value]:input_field_value}) // assign value on state field using input field name attribure value
    }

    render() {
        return (
            <div>
                <p>My Name is: {this.state.user_name}</p>
                <p>I am a: {this.state.title}</p>
                <form>
                    <input name="user_name" type="text" onChange={this.onChangeHandler}></input> <br></br>
                    <input name="title" type="text" onChange={this.onChangeHandler}></input>
                </form>
            </div>
        );
    }
}

export default BindFieldValue;