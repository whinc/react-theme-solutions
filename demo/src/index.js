import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeProvider, createTheme, DarkTheme, LightTheme} from './none-ui'
import registerServiceWorker from './registerServiceWorker';

const customDarkTheme = {
  ...DarkTheme,
  flatButton: {
    backgroundColor: 'red',
    textColor: 'white',
    borderRadius: 10
  }
}

ReactDOM.render(
  <div style={{margin: 20}}>
    <p>DarkTheme</p>
    <ThemeProvider theme={createTheme(DarkTheme)}>
      <App />
    </ThemeProvider>
    <p>Custom DarkTheme</p>
    <ThemeProvider theme={createTheme(customDarkTheme)}>
      <App />
    </ThemeProvider>
    <p>LightTheme</p>
    <ThemeProvider theme={createTheme(LightTheme)}>
      <App />
    </ThemeProvider>
  </div>
, document.getElementById('root'));
registerServiceWorker();
