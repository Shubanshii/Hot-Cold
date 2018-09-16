import React, { Component } from 'react';

class RandomInt extends Component {
  render() {
    return (
      <div>
        {Math.floor(Math.random() * (100 - 1)) + 1}
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

export default RandomInt;
