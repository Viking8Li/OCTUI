import React, { Component } from 'react';

export class RegComp extends Component {
  render() {
    console.log('Reg Comp render');
    return <div>
        Regular Cmponent {this.props.name}
    </div>;
  }
}

export default RegComp;
