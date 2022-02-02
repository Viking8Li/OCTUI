import React, { Component } from 'react';

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }

      this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            message:'Good Bye'
        })
        console.log(this);
    }
  render() {
    return <>
        <h2>{this.state.message}</h2>
        <button onClick={this.clickHandler.bind(this)}>Increment</button>
        <button onClick={()=>this.clickHandler()}>Increment</button>
        <button onClick={this.clickHandler}>Increment</button>
    </>;
  }
}

export default EventBind;
