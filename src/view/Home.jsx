import React, { useContext } from 'react';
import { CountHContext } from './componants/Header';

function Home() {
  const { prevCount, setCount } = useContext(CountHContext);

  const handleClick = () => {
    setCount( prevCount + 1); 
  };
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <button onClick={handleClick}>Increment Home Page Count</button>
    </div>
  );
}

export default Home;