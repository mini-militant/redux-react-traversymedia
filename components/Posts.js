import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/postActions'

class Posts extends React.Component{

  constructor(props){
    super(props)
    this.props.fetchPosts();
  }

  render(){
    const postItems=this.props.posts.map(post=>
    (<div key={post.id}>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
    </div>)
    )
    return(
      <div>
          <h1>Posts</h1>
          {postItems}
      </div>
    )
  }
}

const mapStatetoProps=state=>({
  posts:state.posts.items
})

export default connect(mapStatetoProps,{fetchPosts})(Posts)