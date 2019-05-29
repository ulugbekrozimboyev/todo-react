import React, {Component} from 'react';
import axios from 'axios'

class PostItem extends Component {
    state = {
        post: null
    }
    componentDidMount(){
        let id = this.props.match.params.post_id
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then( response => {
                console.log(response)
                this.setState({
                    post: response.data
                })
            })
    }
    render(){
        const post = this.state
        console.log(post)
        const postItem = post.length ? (
            post.map( post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <span className="card-title">{post.title}</span>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        )
        return (
            <div className="container">
                <h1 className="center blue-text">Post Item</h1>
                {postItem}
            </div>
        );
    }
  
}

export default PostItem;
