import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {FlatButton} from './theme'

class App extends Component {
  render() {
    return (
      <div style={{margin: 20}}>
          <FlatButton title={'button'} />
      </div>
    );
  }
}

export default App;
