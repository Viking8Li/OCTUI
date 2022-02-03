import React, { Component } from 'react';

export class RefsDemo extends Component {
 constructor(props) {
   super(props)
   this.inputRef = React.createRef()

   //Callback way of creating refs
   this.cbRef = null
   this.setCbRef = element => {
       this.cbRef = element
   }
 }
 componentDidMount(){
//    this.inputRef.current.focus();  
    if(this.cbRef){
        this.cbRef.focus()
    }
 }
 clickHandler = () => {
     alert(this.inputRef.current.value)
 }
  render() {
    return <div>
       <input type="text" ref={this.inputRef}/><br></br>
       <input type="text" ref={this.setCbRef}/><br></br>
       <button onClick={this.clickHandler}>Click</button>
    </div>;
  }
}

export default RefsDemo;
