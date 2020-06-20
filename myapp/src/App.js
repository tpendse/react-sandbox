import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  all_persons = [
      { name: 'Tejas',  age: 32, hobbies: 'riding a bike' },
      { name: 'Neha',   age: 30, hobbies: 'reading books' },
      { name: 'Anay',   age: 6                            },
    ];

  default_person = this.all_persons[0];

  count = 0;

  state = {
    person: this.default_person,
    show_persons: true
  };

  switchNameHandler = () => {
    this.count += 1;
    const new_state = this.all_persons[this.count % 3];
    this.setState(new_state);
  }

  debugCount = 0;

  nameInputHandler = (event) => {
    let cache = this.state;
    cache.person.name = event.target.value;
    this.setState(cache);
  }

  visibilityToggleHandler = () => {
    this.setState({ show_persons: !this.state.show_persons });
  }

  render() {
    
    const buttonStyle = {
      border: '1px #eee',
      cursor: 'pointer',
      padding: '8px',
      borderRadius: '8px',
      boxShadow: '0 5px 5px #ccc',
    }

    let persons = null;

    if(this.state.show_persons) {
      persons = (
        <div>
          {this.all_persons.map(person => {
            return <Person 
              name={person.name} 
              age={person.age}>
                My hobby is {person.hobbies}
                </Person>
          })}
          {/*<Person
            name={this.state.person.name} age={this.state.person.age}
            inputChange={this.nameInputHandler}>
            My hobby is {this.state.person.hobbies}
          </Person>
          */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1 className="App-header">Hello, from JSX!</h1>
        <button onClick={this.visibilityToggleHandler} style={buttonStyle}>Toggle visibility</button>
        {persons}
      </div>
    );
  }
}

export default App;
