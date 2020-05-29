import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    people: [
      { name: 'Tejas', age: 32, hobbies: 'riding a bike' },
      { name: 'Neha', age: 30, hobbies: 'reading books' },
      { name: 'Anay', age: 6 },
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, from JSX!</h1>
        <p>How're you doing?</p>
        <Person name={this.state.people[0].name} age={this.state.people[0].age}>My hobby is {this.state.people[0].hobbies} </Person>
        <Person name={this.state.people[1].name} age={this.state.people[1].age}>My hobby is {this.state.people[1].hobbies} </Person>
        <Person name={this.state.people[2].name} age={this.state.people[2].age}>My hobby is {this.state.people[2].hobbies} </Person>
      </div>
    );
  }
}

export default App;
