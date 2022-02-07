import React, { Component } from 'react';

export class Counter extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      count:0
   }
 }
 increment(){
     this.setState(prevState => ({
         count: prevState.count + 1
     }), ()=>{
     console.log('Callback Value', this.state.count);
     })
     console.log(this.state.count);
 }
 incrementFive(){
     this.increment()//1
     this.increment()//loose the prev state value 0-1
     this.increment()//loose the prev state value  0-1
     this.increment()//loose the prev state value  0-1
     this.increment()//loose the prev state value  0-1
 }
  render() {
    return <>
        Count: {this.state.count}
        <br></br>
        <button onClick={()=>this.incrementFive()}>Increment</button>
    </>;
  }
}

export default Counter;
