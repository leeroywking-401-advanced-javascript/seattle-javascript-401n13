import React from "react";
import { connect } from "react-redux";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import "./app.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleButtonClickUp = e => {
    e.preventDefault();
    this.setState({ counter: ++this.state.counter });
  };

  handleButtonClickDown = e => {
    e.preventDefault();
    this.setState({ counter: --this.state.counter });
  };

  render() {
    return (
      <div id="main">
        <button
          class="clicker"
          id="clickdown"
          onClick={this.handleButtonClickDown}
        >
          -1
        </button>
        <h4 id="counter">{this.state.counter}</h4>
        <button class="clicker" id="clickup" onClick={this.handleButtonClickUp}>
          +1
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
