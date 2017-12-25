const root = document.getElementById('root');

class Todo extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="title">
            <h1>Things To Do</h1>
          </div>
          <div className="new-task">
            <a className="add-new" href="#">
              <i className="fa fa-plus" />
            </a>
            <input id="todo-text" placeholder="New task" />
          </div>
          <ul>
            <li className="row">
              <a className="remove" href="#">
                <i className="fa fa-trash-o" />
              </a>
              <a className="completed" href="#">
                <i className="fa fa-check" />
              </a>
              Complete this App
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Todo />, root);
