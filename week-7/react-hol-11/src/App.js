import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return (
    <div className="app-container">
      <h1>Conditional Rendering Example</h1>
      
      {isLoggedIn ? (
        <div>
          <h2>Welcome back, Likith!</h2>
          <p>You are logged in.</p>
          <button onClick={toggleLogin}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Hello, Guest!</h2>
          <p>Please log in to continue.</p>
          <button onClick={toggleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
