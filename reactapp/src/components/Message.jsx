import React, { Component } from 'react';

export class Message extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Welcome Visitor',
       count: 10
    }
  }

  changeMessage(){
    //setState is an async operation
    this.setState({
        message : "New Message"
    })
  }

  render() {
    return(
        <>
            <h1>Welcome</h1>
            <div>{this.state.message}</div>
            <button onClick={()=> this.changeMessage()}>Change</button>
        </>
    );
  }
}

export default Message;
