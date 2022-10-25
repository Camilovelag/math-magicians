/* eslint-disable */
import './App.css';
import Calculator from './components/calculator';
import { Component } from 'react';
import { extend } from 'lodash';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
