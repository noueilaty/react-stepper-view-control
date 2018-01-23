import React, { Component } from 'react';

export class StepBtn extends Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
  }

  add() {
    this.counter.innerHTML++;
  }

  subtract() {
    this.counter.innerHTML--;
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.subtract}>-</button>
        <h1 ref={element  => this.counter = element}>0</h1>
        <button type="button" onClick={this.add}>+</button>
      </div>
    );
  }
}
