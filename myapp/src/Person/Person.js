import React from 'react';

const person = (props) => {
    const is_child = props.age < 18;
    const css_class = is_child ? "Child" : "Person";
    const label = is_child ? "Child" : "Adult";

console.log(props.children);

    return (
        <div>
            <h3 className={css_class}>I'm {props.name}, and I am {is_child ? "a" : "an"} {label}, {props.age} years old!</h3>
            <p className="Hobbies">{props.children}</p>
            <h5 onClick={props.clickHandler} className="Hobbies">Next -></h5>
            <p>Don't like your name? Change it here: </p>
            <input type="text" onChange={props.inputChange} value={props.name} />
        </div>
    );
}

export default person;