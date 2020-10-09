import React from 'react';

function FunctionComponent(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <p>I am {props.age} years old</p>
            <p>I am a { props.title }</p>
        </div>
    );
}

export default FunctionComponent;