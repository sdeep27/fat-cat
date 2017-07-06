import React, { Component } from 'react';
import {Provider} from 'react-redux';
import configureStore from '../configureStore';
import GifContainer from './GifContainer.js'
import '../css/App.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <GifContainer />
      </Provider>
    );
  }
}

export default App;
