import React, {Component} from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import TodosMain from './components/TodosMain'
import Posts from './components/posts/Posts'
import PostItem from './components/posts/PostItem'

class App extends Component {
   
  render(){
    return (
      <BrowserRouter>
        <div className="todo-app container">
          <Navbar></Navbar>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/todos" component={TodosMain}/>
          <Route exact path="/posts" component={Posts}/>
          <Route path="/posts/:post_id" component={PostItem}/>
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
