import React from 'react';

const Home = () => {
  const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
  culpa qui officia deserunt mollit anim id est laborum.`;

  const homeStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  };

  return (
    <div style={homeStyle}>
      <h2>Welcome to our page!</h2>
      <p>{lorem}</p>
      <p>{lorem}</p>
    </div>
  );
};

export default Home;
