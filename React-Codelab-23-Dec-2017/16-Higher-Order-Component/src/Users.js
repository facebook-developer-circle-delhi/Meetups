import React, { Component } from 'react';
import SearchBar from './SearchBar';
import UserList from './UserList';
import './Users.css';
// import Loading from './Loading';

class Users extends Component {
  state = {
    filterText: ''
  };

  handleUserInput = searchTerm => {
    this.setState({ filterText: searchTerm });
  };

  render() {
    return (
      <div className="userApp">
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}
        />
        <UserList users={this.props.users} filterText={this.state.filterText} />
      </div>
    );
  }
}

export default Users;
// export default Loading('users')(Users);
