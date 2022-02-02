import React, { Component } from 'react';

export class Counter extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      count:0
   }
 }
 
  render() {
    return <>
        Count: {this.state.count}
    </>;
  }
}

export default Counter;
