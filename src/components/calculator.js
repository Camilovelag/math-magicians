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
        <p>{result}</p>
        <div className="pad">
          <div>
            <button type="button" className="button">AC</button>
            <button type="button" className="button">+/-</button>
            <button type="button" className="button">%</button>
            <button type="button" className="button">+</button>
          </div>
          <div>
            <button type="button" className="button">7</button>
            <button type="button" className="button">8</button>
            <button type="button" className="button">9</button>
            <button type="button" className="button">x</button>
          </div>
          <div>
            <button type="button" className="button">4</button>
            <button type="button" className="button">5</button>
            <button type="button" className="button">6</button>
            <button type="button" className="button">-</button>
          </div>
          <div>
            <button type="button" className="button">1</button>
            <button type="button" className="button">2</button>
            <button type="button" className="button">3</button>
            <button type="button" className="button">+</button>
          </div>
          <div>
            <button type="button" className="button">0</button>
            <button type="button" className="button">.</button>
            <button type="button" className="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
