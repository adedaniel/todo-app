import React, { Component } from "react";

export class Todoitem extends Component {
  render() {
    return (
      <div style={this.styler()}>
        <h2>
          <input
            onChange={this.props.changer.bind(this, this.props.todo.id)}
            style={{ marginRight: 20, fontSize: 30 }}
            type="checkbox"
          />
          {this.props.todo.title}
          {" : "} {this.props.todo.description}
          <button
            className="btn btn-danger"
            style={{ float: "right", backgroundColor: "" }}
            //onClick={this.props.onremove.bind(this, this.props.todo.id)}
            //OR
            onClick={() => this.props.onremove(this.props.todo.id)}
          >
            X
          </button>
        </h2>
      </div>
    );
  }
  styler() {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      padding: 2,
      borderBottom: "1px #000 dotted",
      backgroundColor: "lightgrey"
    };
  }
}
export default Todoitem;
