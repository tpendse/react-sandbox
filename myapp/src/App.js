import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() 
  {
    return (
      <div className="App">
        <h1>Hello, from JSX!</h1>
        <p>How're you doing?</p>
        <Person name="Tejas" age="32" />
        <Person name="Neha" age="30" />
        <Person name="Anay" age="5" />
      </div>
    );
  }
}

export default App;
