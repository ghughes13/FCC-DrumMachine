import React, { Component } from 'react';

const PowerState = function(props) {
  if(props.power) {
    return (
      <div className="powerOn">
        <button onClick={props.onOff} className="powerbox">On</button>
      </div>
    )
  } else {
    return (
    <div className="powerOff">
      <button onClick={props.onOff} className="powerbox">Off</button>
    </div>
    )
  }
}

class Power extends Component {
  constructor(props) {
    super(props);
    this.state = {
      power: false
    };
    this.onoff = this.onOff.bind(this);
  };

  onOff() {
    this.setState({
      power: !this.state.power
    });
  }

  render() {
    return (
      <div className="">
        <p>Power</p>
        <PowerState power={this.state.power} onOff={this.onOff.bind(this)}/>
      </div>
    );
  }
}

export default Power;
