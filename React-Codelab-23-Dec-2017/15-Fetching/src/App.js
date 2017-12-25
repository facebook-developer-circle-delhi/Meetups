import React, { Component } from 'react';
import Users from './Users';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  render() {
    return (
      <div className="App">
        <Users users={this.state.users} />
      </div>
    );
  }
}

export default App;
