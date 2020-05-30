import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = () => {
  const all_states = [
      { name: 'Tejas',  age: 32, hobbies: 'riding a bike' },
      { name: 'Neha',   age: 30, hobbies: 'reading books' },
      { name: 'Anay',   age: 6                            },
    ];

  const default_state = { name: 'Tejas',  age: 32, hobbies: 'riding a bike' };

  let count = 0;

//   state = this.default_state;

  const [personState, setStateDelegate] = useState(default_state);

  const switchNameHandler = () => {
    count += 1;
    setStateDelegate(all_states[count % 3]);
    console.log(count);
  }

    return (
      <div className="App">
        <h1>Hello, from JSX!</h1>
        <Person 
          name={personState.name}
          age={personState.age}
          clickHandler={switchNameHandler}>
            My hobby is {personState.hobbies}!
          </Person>

      </div>
    );
}

export default app;
