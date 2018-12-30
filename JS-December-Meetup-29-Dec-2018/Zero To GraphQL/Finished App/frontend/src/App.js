import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoApp from "./TodoApp";
import { ApolloProvider } from "react-apollo";

import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/"
});
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <TodoApp />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
