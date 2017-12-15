import React, { Component } from 'react';
import logo from './logo.svg';
import Router from './Router'
import {Provider} from 'react-redux'
import Store from './store'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
       <Router/>
      </Provider>
    );
  }
}

export default App;
