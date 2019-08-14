import React from 'react'

class PostForm extends React.Component{

  constructor(props){
    super(props);
    this.state={
        title:'',
        body:''
    }
  }

  onChange=(event)=>{
    event.preventDefault();
    this.setState({
      [event.target.name]:event.target.value,
      
    })
    console.log(this.state.title)
  }

  render(){
    
    return(
      <div>
          <h1>Add Posts</h1>
          <form>
            <div>
              <label>Title: </label><br/>
              <input type="text" name="title" 
              onChange= {this.onChange}
              value={this.state.title} />
            </div>
            <br/>
            <div>
              <label>Body: </label><br/>
              <textarea name="body" 
              onChange= {this.onChange}
              value={this.state.body}/>
            </div>
            <br/>

            <button type="submit">Submit</button>
          </form>
      </div>
    )
  }
}

export default PostForm;