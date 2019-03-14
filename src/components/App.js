import React, { Component } from 'react';
import './App.css';
import CharacterList from './CharacterList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Super Squad Redux</h1>
        <CharacterList/>
      </div>
    );
  }
}

export default App;
