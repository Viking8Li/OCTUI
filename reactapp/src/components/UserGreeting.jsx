import React, { Component } from 'react';

export class UserGreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn:true
    }
  }
  
  render() {
    // if(this.state.isLoggedIn)
    // {
    //     return <><h2>User Logged In</h2></>;
    // } 
    // else{
    //     return <><h2>User Not Logged In</h2></>;
    // }
    return this.state.isLoggedIn ? <h2>User Logged In</h2> : <h2>User Not Logged In</h2>
  }
}

export default UserGreeting;
