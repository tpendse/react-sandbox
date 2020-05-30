import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  all_states = [
      { name: 'Tejas',  age: 32, hobbies: 'riding a bike' },
      { name: 'Neha',   age: 30, hobbies: 'reading books' },
      { name: 'Anay',   age: 6                            },
    ];

  default_state = this.all_states[0];

  count = 0;

  state = this.default_state;

  switchNameHandler = () => {
    this.count += 1;
    const new_state = this.all_states[this.count % 3];
    this.setState(new_state);
  }

  debugCount = 0;

  nameInputHandler = (event) => {
    let cache = this.state;
    cache.name = event.target.value;
    this.setState(cache);
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, from JSX!</h1>
        <Person 
          name={this.state.name} age={this.state.age}
          clickHandler={this.switchNameHandler} inputChange={this.nameInputHandler}>
            My hobby is {this.state.hobbies}
          </Person>

      </div>
    );
  }
}

export default App;
