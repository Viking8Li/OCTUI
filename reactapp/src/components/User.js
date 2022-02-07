import React, { Component } from 'react';
import ClickCounterTwo from './ClickCounterTwo';
import HoverCounterTwo from './HoverCounterTwo';

class User extends Component {
  render() {
    return <div>
        {this.props.render(false)}
    </div>;
  }
}

export default User;
