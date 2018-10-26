import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  printChildren(node) {
    const { children } = node
    if (!children.length) return
    console.log(children.length)
    for(let i = 0; i < children.length; i++) {
      console.log(children[i])
      this.printChildren(children[i])
    }
  }

  componentDidMount() {
    // console.log(document)
    // this.printChildren(document)

    var button = document.querySelector('.click-me')
    console.log(button)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <a href="https://google.com">google</a>
        </div>
        <div>
          <a href="https://facebook.com">facebook</a>
        </div>
        <button class="click-me">Click me</button>
      </div>
    );
  }
}

export default App;
