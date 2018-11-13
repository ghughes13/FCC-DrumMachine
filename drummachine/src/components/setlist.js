import React, { Component } from 'react';

const SetListSide = function(props) {
  if(props.setList === "setTwo") {
    return (
        <button onClick={props.changeSet} className="setTwo">st2</button>
    )
  } else {
    return (
      <button onClick={props.changeSet} className="setOne">st1</button>
    )
  }
}
class Setlist extends Component {
  render() {
    return (
      <div className="sets">
        <SetListSide setList={this.props.setList} changeSet={this.props.changeSet} />
      </div>
    );
  }
}

export default Setlist;
