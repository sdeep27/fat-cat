import React, { Component } from 'react';
import Title from './Title.js';
import Gif from './Gif.js'
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="App">
        <Title />
        <Gif />
      </div>
    );
  }
}

export default App;
