import React from 'react';
import './User.css'

const useroutput = (props) => {
    return (
        <div className="UserOutput">
            <p>This is a paragraph part of the assignment.
                It is just a random bunch of stuff with no real
                meaning behind it. Whatever.
            </p>
            <p>User name: {props.userName}</p>
        </div>
    );
}

export default useroutput;