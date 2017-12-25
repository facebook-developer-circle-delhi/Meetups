import React from 'react';

const UserList = ({ users, filterText }) => {
  const filteredUsers = users.filter(
    user => user.name.indexOf(filterText) !== -1
  );

  return (
    <ul>
      {filteredUsers.map(user => (
        <li key={user.email}>
          <div className="userData">
            <img src={user.thumbnail} role="presentation" />
            <strong>{user.name}</strong>
            <br />
            <small>{user.username}</small>
            <br />
            <small>{user.email}</small>
            <br />
            <small>{user.phone}</small>
            <br />
            <small>
              {user.city}, {user.state}
            </small>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
