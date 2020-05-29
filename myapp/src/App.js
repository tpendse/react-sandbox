import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() 
  {
      const css = { className : 'App' };
      const header = React.createElement('h1', null, 'Hello from programatic!');
      return React.createElement('div', css, header);
  }
}

export default App;
