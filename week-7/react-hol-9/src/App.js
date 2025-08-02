import React from 'react';
import Student from './Student';

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Student Info using Props</h1>
      <Student name="Likith" age="22" course="ReactJS" />
      <Student name="Aarav" age="20" course="Java" />
      <Student name="Meera" age="23" course="Python" />
    </div>
  );
}

export default App;
