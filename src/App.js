import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos.jsx";
import Header from "./components/layout/Header";
import About from "./components/pages/About";

import AddTodo from "./components/AddTodo.jsx";
import uuid from "uuid";
//import logo from './logo.svg';
//import Navbar from "./components/navbar";
import "./App.css";
import Axios from "axios";
//import Counters from "./components/counters";
class App extends Component {
  componentDidMount() {
    //alert("mounted");
    Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5").then(
      result => this.setState({ todolist: result.data })
    );
    this.setState({
      todolist: [...this.state.todolist, this.state.newdo]
    });
  }
  state = {
    newdo: {
      id: "",
      title: "",
      description: "",
      completed: false
    },
    todolist: [
      // {
      //   id: uuid.v4(),
      //   title: "take out trash",
      //   description: "c",
      //   completed: true
      // },
      // {
      //   id: uuid.v4(),
      //   title: "take out tr",
      //   description: "co",
      //   completed: false
      // },
      // { id: uuid.v4(), title: "take out", description: "coo", completed: true },
      // { id: uuid.v4(), title: "take", description: "cool", completed: false }
    ]
  };

  changeder = id => {
    this.setState({
      todos: this.state.todolist.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  remove = id => {
    // console.log(id);
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
      result =>
        this.setState({
          todolist: [...this.state.todolist.filter(todo => todo.id !== id)]
        })
    );

    //OR
    // let todolist = this.state.todolist.filter(c => c.id !== id);

    // this.setState({ todolist });
  };

  update = (titled, descriptioned) => {
    let numm = this.state.todolist.length;
    let last;
    if (numm < 1) {
      numm = 1;
      last = 0;
    } else {
      last = this.state.todolist[numm - 1];
    }
    this.state.todolist[numm - 1].title = titled;
    this.state.todolist[numm - 1].description = descriptioned;

    Axios.post("https://jsonplaceholder.typicode.com/todos", {
      titled,
      descriptioned,
      completed: false
    }).then(result =>
      this.setState({
        todolist: [...this.state.todolist]
      })
    );
    console.log(
      this.state.todolist[numm - 1].title,
      this.state.todolist[numm - 1].description,
      this.state.todolist
    );
  };

  add = (titled, descriptioned) => {
    let numm = this.state.todolist.length;
    let last;
    if (numm < 1) {
      numm = 1;
      last = 0;
    } else {
      last = this.state.todolist[numm - 1].id;
    }

    //this.state.todolist[numm - 1].id = uuid.v4();

    let newdoer = {
      id: "",
      title: "",
      completed: false,
      description: ""
    };

    this.setState({
      todolist: [...this.state.todolist, newdoer]
    });
    //console.log(titled, descriptioned);
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <div className="container">
                <AddTodo add={this.add} update={this.update} />
                <Todos
                  changed={this.changeder}
                  onremove={this.remove}
                  todo={this.state.todolist}
                />
              </div>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}
export default App;
