import React, { Component } from 'react';

export class WelcomeClass extends Component {
  render() {
    return <div>
         <h1>Hello {this.props.name} aka {this.props.heroName}</h1>
    </div>;
  }
}

export default WelcomeClass;
