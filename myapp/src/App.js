import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  all_persons = [
      { id: '9vaU', name: 'Tejas',  age: 32, hobbies: 'riding a bike' },
      { id: '9oA3', name: 'Neha',   age: 30, hobbies: 'reading books' },
      { id: 'UWdN', name: 'Anay',   age: 6                            },
    ];

  default_person = this.all_persons[0];

  count = 0;

  state = {
    person: this.default_person,
    show_persons: true
  };

  debugCount = 0;

  reRender = () => { this.setState({isDirty: true }) }

  deletePersonHandler = (personIndex) => {
    this.all_persons.splice(personIndex, 1);
    this.reRender();
  }

  visibilityToggleHandler = () => {
    this.setState({ show_persons: !this.state.show_persons });
  }

  nameChangeHandler = (event, personId) => {
    let target = this.all_persons.find(p => { return p.id === personId; });
    target.name = event.target.value;
    this.reRender();
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
          {this.all_persons.map((person, index) => {
            return <Person
              key={person.id}
              name={person.name} 
              age={person.age}
              inputChange={event => this.nameChangeHandler(event, person.id)}
              deleteHandler={() => this.deletePersonHandler(index)}>
                My hobby is {person.hobbies}
                </Person>
          })}
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
