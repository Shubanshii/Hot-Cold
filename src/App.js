import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import New from './New';
import Guess from './Guess';
import Hint from './Hint';
import RandomInt from './RandomInt';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomInt: Math.floor(Math.random() * (100 - 1)) + 1,
      clicked: false,
      currentGuess: ''
    };
  }

  addGuess(text) {
        this.setState({
            currentGuess: text
        });
    }

  setClicked(clicked) {
    this.setState({
      clicked
    });
  }

  render() {
    let hint;
    if (this.state.clicked && Math.abs(this.state.currentGuess - this.state.randomInt) <= 15 && Math.abs(this.state.currentGuess - this.state.randomInt) !== 0) {
      hint = 'hot';
    } else if (this.state.clicked && Math.abs(this.state.currentGuess - this.state.randomInt) > 15) {
      hint = 'cold';
    } else if (this.state.clicked) {
      hint = 'Winner!'
    }
    return (
      <div className="board">
        <h1>Hot or Cold</h1>
        <New />
        <Hint />
        <Guess onAdd={text => this.addGuess(text)}
          onAdd2={() => this.setClicked(true)}
        />
        {/* <RandomInt /> */}
        <h3>{this.state.randomInt}</h3>

        <h3>{hint}</h3>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
