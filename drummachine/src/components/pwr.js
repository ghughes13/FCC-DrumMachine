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
  render(props) {
    return (
      <div className="pwrbtn">
        <p>Power</p>
        <PowerState power={this.props.power} onOff={this.props.onOff}/>
      </div>
    );
  }
}

export default Power;
