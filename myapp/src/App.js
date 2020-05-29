import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  all_states = [
      { name: 'Tejas',  age: 32, hobbies: 'riding a bike' },
      { name: 'Neha',   age: 30, hobbies: 'reading books' },
      { name: 'Anay',   age: 6                            },
    ];

  default_state = { name: 'Tejas',  age: 32, hobbies: 'riding a bike' };

  count = 0;

  state = this.default_state;

  switchNameHandler = () => {
    this.count += 1;
    const new_state = this.all_states[this.count % 3];
    this.setState(new_state);
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, from JSX!</h1>
        <p>How're you doing?</p>

        <button onClick={this.switchNameHandler}>Switch name</button>

        <Person name={this.state.name} age={this.state.age}>My hobby is {this.state.hobbies}</Person>

      </div>
    );
  }
}

export default App;
