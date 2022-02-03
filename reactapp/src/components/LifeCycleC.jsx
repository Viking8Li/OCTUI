import React, { Component } from 'react';

export class LifeCycleC extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'John'
    }
    console.log('LifeCycleC constructor');
  }
  static getDerivedStateFromProps(props, state){
      console.log("LifeCycleC getDerivedStateFromProps");
      return null
  }
  componentDidMount(){
      console.log("LifeCycleC componentDidMount");
  }
  render() {
    console.log("LifeCycleC render");
    return <div>Lifecycle</div>;
  }
}

export default LifeCycleC;
