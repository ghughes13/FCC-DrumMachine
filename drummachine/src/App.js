import React, { Component } from 'react';
import Buttons from './components/buttons.js';
import Power from './components/pwr.js';
import Names from './components/btnName.js';
import Setlist from './components/setlist.js';
import Volume from './components/volume.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="buttons">
            <Buttons />
          </div>
          <div className="options">
            <Power />
            <Names />
            <Volume />
            <Setlist />
          </div>
      </div>
    );
  }
}

export default App;
