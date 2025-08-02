import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="container">
      <h1>Conditional Rendering Example</h1>

      {isLoggedIn ? (
        <div>
          <h2>Welcome, Likith!</h2>
          <p>You are now logged in.</p>
        </div>
      ) : (
        <div>
          <h2>Welcome, Guest!</h2>
          <p>Please log in to continue.</p>
        </div>
      )}

      <button onClick={toggleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default App;
