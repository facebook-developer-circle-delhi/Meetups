import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERYs {
    items {
      id
      name
    }
  }
`;

const ADD_ITEM_MUTATION = gql`
  mutation ADD_ITEM_MUTATION($name: String!) {
    createItem(data: { name: $name }) {
      id
    }
  }
`;
class TodoApp extends Component {
  state = { name: "" };
  render() {
    return (
      <Mutation
        refetchQueries={[{ query: ALL_ITEMS_QUERY }]}
        mutation={ADD_ITEM_MUTATION}
        variables={this.state}
      >
        {add => (
          <>
            <input
              type="text"
              onChange={event => {
                this.setState({ name: event.target.value });
              }}
            />
            <button onClick={add}>Add</button>
            <Query query={ALL_ITEMS_QUERY}>
              {({ loading, error, data }) => {
                if (loading) return <div>Loading..</div>;
                return data.items.map(item => <div>{item.name}</div>);
              }}
            </Query>
          </>
        )}
      </Mutation>
    );
  }
}

export default TodoApp;
