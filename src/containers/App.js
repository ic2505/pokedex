import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.css";
import Card from "./Card";

class App extends Component {
  constructor() {
    super(); // calls the constructor of the component, needed to use this function.
    this.state = {
      pokemon: [],
      searchfield: "",
    };
    // console.log("constructor");
  }

  componentDidMount() {
   this.setState({ pokemon: ["ditto", "pikachu", "squirtle", "charmander"] });
    // console.log("componentDidMount");
  }

  render() {
    return (
      <div className="App">
        <div className="">
          <Card pokeProp={this.state.pokemon[3]} />
          <h4> {this.props.greeting}</h4>
        </div>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
