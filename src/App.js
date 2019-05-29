import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: "react o'rganish"}, 
      {id: 2, content: "soliq service dasturini qilish"},
      {id: 3, content: "yer dasturini qilish"},
    ]
  }
  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })
  }
  deleteTodo = (id) => {
    console.log(id);
    let todos = this.state.todos.filter( todo => {
      return todo.id !== id
    })

    this.setState({
      todos: todos
    })
  }
  render(){
    return (
      <div className="todo-app container">
      <h1 className="center blue-text">Todos's</h1>
        <Todos todos={this.state.todos}  deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
  
}

export default App;
