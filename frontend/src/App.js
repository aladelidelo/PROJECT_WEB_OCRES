import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

// state Admin
// Crée function modifier state admin

class App extends Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = { admin: false };
  }

  handler() {
    if (this.state.admin) this.setState({ admin: false });
    else this.setState({ admin: true });
  }

  render() {
    return (
      <div className="App">
        <Header admin={this.state.admin} handler={this.handler} />
        <Main admin={this.state.admin} />
      </div>
    );
  }
}

export default App;
