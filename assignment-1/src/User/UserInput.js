import React from 'react';
import './User.css';

const userinput = (props) => {

    const style = {
        color:'darkgreen', margin:'10px 10px'
    };

    const inputChangeHandler = (event) => {
        props.nameChangeHandler(event.target.value);
    }

    return (
        <div className="UserInput">
            <p>Enter user name here: </p>
            <input type="text" onChange={inputChangeHandler} />
        </div>
    );
}

export default userinput;