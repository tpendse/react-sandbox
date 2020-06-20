import React from 'react';
import './Person.css';

const person = (props) => {
    const is_child = props.age < 18;
    const label = is_child ? "Child" : "Adult";

    return (
        <div className="Person">
            <h3>I'm {props.name}, and I am {is_child ? "a" : "an"} {label}, {props.age} years old!</h3>
            <p className="Hobbies">{props.children}</p>
            <button onClick={props.deleteHandler}>Delete</button>
        </div>
    );
}

export default person;