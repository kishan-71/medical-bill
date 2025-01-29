import React, { useContext } from 'react';
import { CountContext } from './Context/CountContext';

function Home() {
  const { setCount } = useContext(CountContext);
  const handleClick = () => {
    setCount(prevCount => prevCount + 1); // Increment the count
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <button onClick={handleClick}>Increment Count</button>
    </div>
  );
}

export default Home;