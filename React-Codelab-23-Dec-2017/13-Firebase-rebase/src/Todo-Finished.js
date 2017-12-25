import React, { Component } from 'react';
import List from './List';
import './Todo.css';
import base from './re-base';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
      inputValue: ''
    };
  }

  // re-base ing
  componentDidMount() {
    base.syncState(`todoList`, {
      context: this,
      state: 'todoList',
      asArray: true
    });
  }

  addTodo = () => {
    this.setState({
      todoList: [
        ...this.state.todoList,
        { content: this.state.inputValue, completed: false }
      ],
      inputValue: ''
    });
  };

  handleInputChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  removeTodo = index => {
    const newTotoList = this.state.todoList.filter((item, i) => i !== index);
    this.setState({ todoList: newTotoList });
  };

  markCompleteTodo = index => {
    const newTotoList = this.state.todoList.map((item, i) => {
      if (index === i) {
        item.completed = !item.completed;
      }
      return item;
    });

    this.setState({ todoList: newTotoList });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="title">
            <h1>Things To Do</h1>
          </div>
          <div className="new-task">
            <a className="add-new" href="#" onClick={this.addTodo}>
              <i className="fa fa-plus" />
            </a>
            <input
              id="todo-text"
              placeholder="New task"
              value={this.state.inputValue}
              onChange={this.handleInputChange}
            />
          </div>
          <List
            list={this.state.todoList}
            onRemove={this.removeTodo}
            onComplete={this.markCompleteTodo}
          />
        </div>
      </div>
    );
  }
}

export default Todo;
