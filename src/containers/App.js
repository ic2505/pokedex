import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.css";
import Card from "./Card";

class App extends Component {
  constructor() {
    super(); // calls the constructor of the component, needed to use this function.
    this.state = {
      pokeNames: [],
      pokemon: [],
      searchfield: "",
      n: 1,
    };
    // console.log("constructor");
  }

  componentDidMount() {
    this.setState({
      pokeNames: ["ditto", "pikachu", "squirtle", "charmander"],
    });

    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((response) => response.json())
    .then((users) => this.setState({ pokemon: users }));
  }

  getPikachu = () => {
  }


  render() {
    return (
      <div className="App">
        <div className="">
          {console.log( this.state.pokemon.forms)}
          <Card pokeProp={this.state.pokeNames[this.state.n]} />
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
