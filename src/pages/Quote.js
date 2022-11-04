import React from 'react';

const Quote = () => {
  const quoteStyle = {
    display: 'flex',
    height: 'calc(100vh - 8rem)',
    width: 'calc(100vw - 4rem)',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={quoteStyle}>
      <p>
        Mathematics is not about numbers, equations, computations,
        or algorithms: it is about understanding. –William Paul Thurston
      </p>
    </div>
  );
};

export default Quote;
