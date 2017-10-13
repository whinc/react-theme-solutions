import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {FlatButton} from './none-ui'
import MyButton from './MyButton'

class App extends Component {
  render() {
    return (
      <div style={{margin: 20}}>
          <FlatButton title={'FlatButton'} />
          {/* {<MyButton title={'MyButton'} />} */}
      </div>
    );
  }
}

export default App;
