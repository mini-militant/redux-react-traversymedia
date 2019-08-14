
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux"
import Posts from './components/Posts'
import PostForm from './components/PostForm'
import store from './store/store'


const App =()=>(
  <div>
  <PostForm/>
  <hr/>
  <Posts/>
  
  </div>
)

 

ReactDOM.render(
    <Provider store={store}>
        <App />
     </Provider>
    ,
    document.getElementById('root')
);