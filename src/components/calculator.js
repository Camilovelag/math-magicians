import { Component } from 'react';
import './calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div className="calculator">
        <p className="display">{result}</p>
        <div className="pad">
          <div>
            <button type="button" className="button gray">AC</button>
            <button type="button" className="button gray">+/-</button>
            <button type="button" className="button gray">%</button>
            <button type="button" className="button orange">+</button>
          </div>
          <div>
            <button type="button" className="button gray">8</button>
            <button type="button" className="button gray">9</button>
            <button type="button" className="button gray">7</button>
            <button type="button" className="button orange">x</button>
          </div>
          <div>
            <button type="button" className="button gray">4</button>
            <button type="button" className="button gray">5</button>
            <button type="button" className="button gray">6</button>
            <button type="button" className="button orange">-</button>
          </div>
          <div>
            <button type="button" className="button gray">1</button>
            <button type="button" className="button gray">2</button>
            <button type="button" className="button gray">3</button>
            <button type="button" className="button orange">+</button>
          </div>
          <div>
            <button type="button" className="button wide gray">0</button>
            <button type="button" className="button gray">.</button>
            <button type="button" className="button orange">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
