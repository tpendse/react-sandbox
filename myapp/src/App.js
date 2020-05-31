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
    
    const buttonStyle = {
      border: '1px #eee',
      cursor: 'pointer',
      padding: '8px',
      borderRadius: '8px',
      boxShadow: '0 5px 5px #ccc',
    }
    return (
      <div className="App">
        <h1 className="App-header">Hello, from JSX!</h1>
        <Person 
          name={this.state.name} age={this.state.age}
          inputChange={this.nameInputHandler}>
            My hobby is {this.state.hobbies}
          </Person>
          
          <button
            style={buttonStyle} 
            onClick={this.switchNameHandler}>Next -></button>

      </div>
    );
  }
}

export default App;
