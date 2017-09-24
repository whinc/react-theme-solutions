import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeProvider, createTheme, DarkTheme, LightTheme} from './theme'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <p>DardTheme</p>
    <ThemeProvider theme={createTheme(DarkTheme)}>
      <App />
    </ThemeProvider>
    <p>LightTheme</p>
    <ThemeProvider theme={createTheme(LightTheme)}>
      <App />
    </ThemeProvider>
  </div>
, document.getElementById('root'));
registerServiceWorker();
