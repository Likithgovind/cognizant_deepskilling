import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  const getStatus = () => {
    if (count > 0) return 'Positive number';
    if (count < 0) return 'Negative number';
    return 'Zero';
  };

  return (
    <div className="app-container">
      <h1>React Counter App</h1>
      <h2>{count}</h2>
      <p>Status: <strong>{getStatus()}</strong></p>
      <div className="buttons">
        <button onClick={increment}>Increment +</button>
        <button onClick={decrement}>Decrement -</button>
        <button onClick={reset} className="reset-btn">Reset</button>
      </div>
    </div>
  );
}

export default App;
