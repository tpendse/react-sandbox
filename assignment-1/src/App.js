import React, { Component } from 'react';
import UserInput from "./User/UserInput";
import UserOutput from "./User/UserOutput";
import './App.css';

class App extends Component {

  state = { userName: 'user name' };

  userNameChangedHandler = (new_name) => {
    this.setState({ userName: new_name });
  }

  render() {
    return (
      <div className="App">
        <UserInput nameChangeHandler={this.userNameChangedHandler} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
      </div>
    );
  }
}

export default App;
