import React, { Component } from 'react';
import {Provider} from 'react-redux';
import configureStore, { sagaMiddleware } from '../configureStore';
import { watcherSaga } from '../sagas';
import GifContainer from './GifContainer.js'
import '../css/App.css';

const store = configureStore();
sagaMiddleware.run(watcherSaga);

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
