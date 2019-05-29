import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Posts extends Component {
    state = {
        posts: []
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then( response => {
                console.log(response)
                this.setState({
                    posts: response.data.slice(0,10)
                })
            })
    }
    render(){
        const {posts} = this.state
        const postList = posts.length ? (
            posts.map( post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to={'post/' + post.id} className="card-title">{post.title}</Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        )
    return (
        <div className="todo-app container">
            <h1 className="center blue-text">Posts</h1>
            {postList}
        </div>
    );
    }
  
}

export default Posts;
