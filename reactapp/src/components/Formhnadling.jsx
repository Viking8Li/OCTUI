import React, { Component } from 'react';

export class Formhnadling extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic:''
      }
    }

    handleusernameChange = (event) => {
        this.setState({
            username:event.target.value
        })
    }
    handlecommentsChange = (event) => {
        this.setState({
            comments:event.target.value
        })
    }
    handletopicChnage = (event) => {
        this.setState({
            topic:event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    }
    
  render() {
    return <>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Username</label>
                <input value={this.state.username} onChange={this.handleusernameChange}></input>
            </div>
            <div>
                <label>Comments</label>
                <input value={this.state.comments} onChange={this.handlecommentsChange}></input>
            </div>
            <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.handletopicChnage}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vuejs">VueJS</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    </>;
  }
}

export default Formhnadling;
