import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [message, setMessage] = useState("");

  const handleChildData = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent sendDataToParent={handleChildData} />
      <p>Message from Child: {message}</p>
    </div>
  );
}

export default ParentComponent;
