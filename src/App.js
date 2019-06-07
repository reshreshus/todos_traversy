import React, {Component} from 'react';
import './App.css';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import Post from './components/Post'

import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';


export default class App extends Component{
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => this.setState({ todos: res.data }))
  }

  toggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map(
          todo => {
            if (todo.id == id){
              todo.completed = !todo.completed
            }
            return todo;
          }
      )
    });
  }

  addTodo = (title) => {
    axios.post("https://jsonplaceholder.typicode.com/todos/", {
      title,
      completed: false
    }).then(res => this.setState({
      todos: [...this.state.todos, res.data]
    }))
  }

  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => this.setState(
            {
              todos: [...this.state.todos.filter(todo => todo.id != id)]
            }
        ));
  }

  render() {
    return (
        <Router>
            <div>
                <div className="container">
                      <Header/>
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                <AddTodo addTodo={this.addTodo}/>
                                <Todos todos={this.state.todos    } toggleTodo={this.toggleTodo} delTodo={this.delTodo}/>
                            </React.Fragment>
                        )}
                            />
                            <Route path="/about" component={About}/>
                            <Route path=":/post_id" component={Post}/>
                </div>
            </div>
        </Router>
    )
  }
}
