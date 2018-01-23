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




// Class Notes:
// import React, { Component } from 'react';
// export class Switch extends Component {
//   constructor(props) {
//     super(props)
//     // telling the switchClicked function that it is binding to the Switch class
//     this.switchClicked = this.switchClicked.bind(this)
//   }
// // class functions are unbound by default
// // they don't know what "this" means
//   switchClicked() {
//     let value = this.headingElement.innerHTML
//     if(value == "ON") {
//       this.headingElement.innerHTML = "OFF"
//     } else {
//       this.headingElement.innerHTML = "ON"
//     }
//   }
//   render() {
//     return (
//       <div className="switch" onClick={this.switchClicked} >
//         <h1 ref={(element) => this.headingElement = element}>ON</h1>
//       </div>
//     )
//   }
// }
