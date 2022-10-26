import { Component } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';
// import operate from '../logic/operate.js';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    const { total, next } = this.state;
    const buttonName = (e) => {
      calculate(this.state, e.target.name);
    };

    return (
      <div className="calculator">
        <p className="display">{total}</p>
        <p className="display">{next}</p>
        <div className="pad">
          <div>
            <button type="button" name="AC" onClick={buttonName} className="button gray">AC</button>
            <button type="button" name="+/-" onClick={buttonName} className="button gray">+/-</button>
            <button type="button" name="%" onClick={buttonName} className="button gray">%</button>
            <button type="button" name="÷" onClick={buttonName} className="button orange">÷</button>
          </div>
          <div>
            <button type="button" name="8" onClick={buttonName} className="button gray">8</button>
            <button type="button" name="9" onClick={buttonName} className="button gray">9</button>
            <button type="button" name="7" onClick={buttonName} className="button gray">7</button>
            <button type="button" name="x" onClick={buttonName} className="button orange">x</button>
          </div>
          <div>
            <button type="button" name="4" onClick={buttonName} className="button gray">4</button>
            <button type="button" name="5" onClick={buttonName} className="button gray">5</button>
            <button type="button" name="6" onClick={buttonName} className="button gray">6</button>
            <button type="button" name="-" onClick={buttonName} className="button orange">-</button>
          </div>
          <div>
            <button type="button" name="1" onClick={buttonName} className="button gray">1</button>
            <button type="button" name="2" onClick={buttonName} className="button gray">2</button>
            <button type="button" name="3" onClick={buttonName} className="button gray">3</button>
            <button type="button" name="+" onClick={buttonName} className="button orange">+</button>
          </div>
          <div>
            <button type="button" name="0" onClick={buttonName} className="button wide gray">0</button>
            <button type="button" name="." onClick={buttonName} className="button gray">.</button>
            <button type="button" name="=" onClick={buttonName} className="button orange">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
