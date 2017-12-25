// Component Patterns.
// Statefull, Controlling, Smart Component
// Stateless, Presentational, Dumb Component
// Components, Containers
// state lifted to top
// handlers

const root = document.getElementById('root');

// functional presentational component
function List(props) {
  return props.list.map((item, i) => (
    <li className={item.completed ? 'row done' : 'row'}>
      <a className="remove" href="#" onClick={() => props.onRemove(i)}>
        <i className="fa fa-trash-o" />
      </a>
      <a className="completed" href="#" onClick={() => props.onComplete(i)}>
        <i className="fa fa-check" />
      </a>
      {item.content}
    </li>
  ));
}

// class based stateful component
class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
      inputValue: ''
    };
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
    const newTotoList = this.state.todoList;
    newTotoList[index].completed = !newTotoList[index].completed;

    // immutatable method
    // const newTotoList = this.state.todoList.map((item, i) => {
    //   if (index === i) {
    //     item.completed = !item.completed;
    //   }
    //   return item;
    // });

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

ReactDOM.render(<Todo />, root);
