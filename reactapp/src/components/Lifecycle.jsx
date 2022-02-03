import React, { Component } from 'react';
import LifeCycleC from './LifeCycleC';

export class Lifecycle extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'John'
    }
    console.log('constructor');
  }
  static getDerivedStateFromProps(props, state){
      console.log("getDerivedStateFromProps");
      return null
  }
  componentDidMount(){
      console.log("componentDidMount");
  }
  render() {
    console.log("render");
    return <LifeCycleC></LifeCycleC>;
  }
}

export default Lifecycle;
