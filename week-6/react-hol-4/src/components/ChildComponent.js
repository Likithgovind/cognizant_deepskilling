import React from 'react';

function ChildComponent({ sendDataToParent }) {
  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={() => sendDataToParent("Hello from Child!")}>
        Send Data to Parent
      </button>
    </div>
  );
}

export default ChildComponent;
