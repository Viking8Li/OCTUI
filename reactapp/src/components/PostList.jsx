import React, { Component } from 'react';
import axios from 'axios';

export class PostList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts:new Array(100)
    }
  }
  
  componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                console.log(response);
                this.setState({
                    // posts:response.data.slice(0,10)
                    posts: response.data.filter((posts, id) => id < 10)
                })
            })
            .catch(error => console.log(error))
  }
  render() {
    const {posts} = this.state
    return <div>
        List of posts: {this.state.posts.length}
        {
            posts.length ?
            posts.map(post => <div key={post.id}>{post.title}</div>):
            null
        }
    </div>;
  }
}

export default PostList;
