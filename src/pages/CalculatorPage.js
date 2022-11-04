import React from 'react';
import Calculator from '../components/Calculator';

const CalculatorPage = () => {
  const calcPageStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '2rem',
    justifyContent: 'space-between',
  };

  return (
    <div style={calcPageStyle}>
      <h2>Let´s do some math!</h2>
      <Calculator />
    </div>
  );
};

export default CalculatorPage;
