import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: "",
    description: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  updatered = e => {
    this.props.update(this.state.title, this.state.description);
  };

  submit = e => {
    e.preventDefault();
    this.props.add(this.state.title, this.state.description);
    // this.state.title = ""((this.state.description = ""));
    this.setState({ title: "", description: "" });
  };

  render() {
    return (
      <form onSubmit={this.submit} style={{ display: "flex" }}>
        <input
          style={{ flex: "5" }}
          type="text"
          placeholder="add todo"
          name="title"
          value={this.state.title}
          onChange={this.onChange}
          onKeyUp={this.updatered}
          required
        />
        <input
          style={{ flex: "5", marginLeft: 30 }}
          type="text"
          placeholder="description"
          name="description"
          value={this.state.description}
          onChange={this.onChange}
          onKeyUp={this.updatered}
          required
        />
        <button
          type="submit"
          style={{ flex: "1" }}
          value="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default AddTodo;
