import { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

const initialState = {
  total: null,
  next: null,
  operation: null,
};

const Calculator = () => {
  const [state, setState] = useState(initialState);

  const handleClick = (e) => {
    setState(calculate(state, e.target.name));
  };

  const { total, next, operation } = state;
  return (
    <div className="calculator">
      <div className="display">
        <p>{total}</p>
        <p>{operation}</p>
        <p>{next}</p>
      </div>
      <div className="pad">
        <div>
          <button type="button" name="AC" onClick={handleClick} className="button gray">AC</button>
          <button type="button" name="+/-" onClick={handleClick} className="button gray">+/-</button>
          <button type="button" name="%" onClick={handleClick} className="button gray">%</button>
          <button type="button" name="÷" onClick={handleClick} className="button orange">÷</button>
        </div>
        <div>
          <button type="button" name="8" onClick={handleClick} className="button gray">8</button>
          <button type="button" name="9" onClick={handleClick} className="button gray">9</button>
          <button type="button" name="7" onClick={handleClick} className="button gray">7</button>
          <button type="button" name="x" onClick={handleClick} className="button orange">x</button>
        </div>
        <div>
          <button type="button" name="4" onClick={handleClick} className="button gray">4</button>
          <button type="button" name="5" onClick={handleClick} className="button gray">5</button>
          <button type="button" name="6" onClick={handleClick} className="button gray">6</button>
          <button type="button" name="-" onClick={handleClick} className="button orange">-</button>
        </div>
        <div>
          <button type="button" name="1" onClick={handleClick} className="button gray">1</button>
          <button type="button" name="2" onClick={handleClick} className="button gray">2</button>
          <button type="button" name="3" onClick={handleClick} className="button gray">3</button>
          <button type="button" name="+" onClick={handleClick} className="button orange">+</button>
        </div>
        <div>
          <button type="button" name="0" onClick={handleClick} className="button wide gray">0</button>
          <button type="button" name="." onClick={handleClick} className="button gray">.</button>
          <button type="button" name="=" onClick={handleClick} className="button orange">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
