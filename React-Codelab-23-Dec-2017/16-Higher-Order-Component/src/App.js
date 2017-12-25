import React, { Component } from 'react';
import Users from './Users';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    fetch('https://api.randomuser.me/?nat=us,gb&results=50')
      .then(response => response.json())
      .then(parsedResponse =>
        parsedResponse.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          username: user.login.username,
          phone: user.phone,
          thumbnail: user.picture.medium,
          city: user.location.city,
          state: user.location.state
        }))
      )
      .then(users => this.setState({ users }));
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
