import React, { Component } from 'react';
import UpdatedComponent from './withCounter';

export class ClickCounter extends Component {
 
  render() {
    // const { count } = this.state
    const {name,count, incrementCount} = this.props
    return <div>
        <button onClick={incrementCount}>{name} Clicked {count} times</button>
    </div>;
  }
}

export default UpdatedComponent(ClickCounter);
