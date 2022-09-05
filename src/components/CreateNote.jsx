import React, { Component } from "react";

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
    };
  }
  //function to handle title
  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  //function to handle content
  handleContentChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  //function to handle reload && render on DOM
  handleForm = (event) => {
    event.preventDefault();
    // alert(`"Hello you entered "  ${this.state.title} ${this.state.content}`);
  };
  render() {
    return (
      <div className="container">
        <h4>Create Note page</h4>
        <form onSubmit={this.handleForm}>
          <div className="form-group">
            <label>Note title</label>
            <input
              value={this.state.title}
              onChange={this.handleTitleChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea
              value={this.state.content}
              onChange={this.handleContentChange}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-md btn-info">
            Add Note
          </button>
        </form>
      </div>
    );
  }
}

export default CreateNote;
