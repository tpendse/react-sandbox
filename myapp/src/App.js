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
        <Person />
      </div>
    );
  }
}

export default App;
