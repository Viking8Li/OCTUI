import React, { Component } from 'react';
import Childcomponent from './Childcomponent';

export class ParentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       parentName:'Parent'
    }
    this.greetParent = this.greetParent.bind(this)
  }
  greetParent(){
      alert(`Hello ${this.state.parentName}`)
  }
  render() {
    return <>
        <Childcomponent greetHandler = {this.greetParent}></Childcomponent>
    </>;
  }
}

export default ParentComponent;
