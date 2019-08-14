import React, { Component } from "react";
import Todoitem from "./Todoitem";
class Todos extends Component {
  componentDidMount() {
    //alert("mounted");
  }
  render() {
    return (
      <div className="App container">
        <div style={{ margin: 30 }} />
        {this.props.todo.map(todo => (
          <Todoitem
            changer={this.props.changed}
            onremove={this.props.onremove}
            todo={todo}
            key={todo.id}
          />
        ))}
      </div>
    );
  }
}
export default Todos;
