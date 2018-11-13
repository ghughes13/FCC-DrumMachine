import React, { Component } from 'react';
import Buttons from './components/buttons.js';
import Power from './components/pwr.js';
import Names from './components/btnName.js';
import Setlist from './components/setlist.js';
import Volume from './components/volume.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      power: false,
      setList: 'setOne'
    };
    this.onoff = this.onOff.bind(this);
    this.changeSet = this.changeSet.bind(this);
  };

  onOff() {
    this.setState({
      power: !this.state.power
    });
  }

  changeSet() {
    if(this.state.setList === "setTwo") {
      this.setState({
        setList: "setOne"
      });
    } else {
      this.setState({
        setList: "setTwo"
      });
    }
  }

  render() {
    return (
      <div className="App">
          <Buttons />
          <div className="options">
            <Power power={this.state.power} onOff={this.onOff.bind(this)}/>
            <Names />
            <Volume />
            <Setlist setList={this.state.setList} changeSet={this.changeSet.bind(this)}/>
          </div>
      </div>
    );
  }
}

export default App;
