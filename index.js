
import React from 'react';
import ReactDOM from "react-dom";

import Posts from './components/Posts'
import PostForm from './components/PostForm'
const App =()=>(
  <div>
  <PostForm/>
  <hr/>
  <Posts/>
  
  </div>
)

 

ReactDOM.render(
    
        <App />
    ,
    document.getElementById('root')
);