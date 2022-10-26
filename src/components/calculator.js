import { Component } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    this.setState((state) => calculate(state, e.target.name));
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <p className="display">{next}</p>
        <p className="display">{operation}</p>
        <p className="display">{total}</p>
        <div className="pad">
          <div>
            <button type="button" name="AC" onClick={this.handleClick} className="button gray">AC</button>
            <button type="button" name="+/-" onClick={this.handleClick} className="button gray">+/-</button>
            <button type="button" name="%" onClick={this.handleClick} className="button gray">%</button>
            <button type="button" name="÷" onClick={this.handleClick} className="button orange">÷</button>
          </div>
          <div>
            <button type="button" name="8" onClick={this.handleClick} className="button gray">8</button>
            <button type="button" name="9" onClick={this.handleClick} className="button gray">9</button>
            <button type="button" name="7" onClick={this.handleClick} className="button gray">7</button>
            <button type="button" name="x" onClick={this.handleClick} className="button orange">x</button>
          </div>
          <div>
            <button type="button" name="4" onClick={this.handleClick} className="button gray">4</button>
            <button type="button" name="5" onClick={this.handleClick} className="button gray">5</button>
            <button type="button" name="6" onClick={this.handleClick} className="button gray">6</button>
            <button type="button" name="-" onClick={this.handleClick} className="button orange">-</button>
          </div>
          <div>
            <button type="button" name="1" onClick={this.handleClick} className="button gray">1</button>
            <button type="button" name="2" onClick={this.handleClick} className="button gray">2</button>
            <button type="button" name="3" onClick={this.handleClick} className="button gray">3</button>
            <button type="button" name="+" onClick={this.handleClick} className="button orange">+</button>
          </div>
          <div>
            <button type="button" name="0" onClick={this.handleClick} className="button wide gray">0</button>
            <button type="button" name="." onClick={this.handleClick} className="button gray">.</button>
            <button type="button" name="=" onClick={this.handleClick} className="button orange">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
