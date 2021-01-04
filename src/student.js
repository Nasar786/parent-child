import React from 'react';
import App from './App.css'

function Student (props){
    return (
        <div className='box'>     
                <h2>{props.name} is studing in class {props.class} and lives in {props.lives}</h2>
        </div>
    )
}

export default Student;