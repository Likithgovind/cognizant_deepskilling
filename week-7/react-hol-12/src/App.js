import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="app-container">
      <h1>React Events Example</h1>
      <p>You clicked <strong>{count}</strong> times</p>
      <div className="buttons">
        <button onClick={handleClick}>Click Me</button>
        <button onClick={resetCount} className="reset">Reset</button>
      </div>
    </div>
  );
}

export default App;
