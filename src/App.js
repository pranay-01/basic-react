import React from 'react';
import  {BrowserRouter as Router , Route} from 'react-router-dom'
import './App.css';
import Todos from './components/Todos';
import Header from './components/Header'
import AddTask from './components/AddTask';
import About from './components/About';
import axios from 'axios'


class App extends React.Component{

  state = {
    todos: []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(resp => this.setState({todos: resp.data}))
  }

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }
  delet = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(resp => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}))
    
  }
  addTask = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
    .then(resp => this.setState({todos:[...this.state.todos, resp.data]}))
    
  }
  render(){
    return (
        <Router>
          <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTask addTask={this.addTask}/>
              <Todos  todos= {this.state.todos} markComplete = {this.markComplete} delet={this.delet}/>
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
          </div>
        </Router>
      )
  }
}
export default App;
