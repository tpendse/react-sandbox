import React from 'react';

const person = () => {
    const age = Math.floor(Math.random() * 30);
    return <h3 className="Person">I'm a new person, and I am {age} years old!</h3>
}

export default person;