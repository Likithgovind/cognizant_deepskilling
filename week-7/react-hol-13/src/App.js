import React from 'react';
import './App.css';

function App() {
  const studentList = [
    { id: 1, name: 'Ananya', grade: 'A' },
    { id: 2, name: 'Rahul', grade: 'B+' },
    { id: 3, name: 'Sneha', grade: 'A-' },
    { id: 4, name: 'Karan', grade: 'B' },
    { id: 5, name: 'Priya', grade: 'A+' },
  ];

  return (
    <div className="app-container">
      <h1>Student List</h1>
      <ul>
        {studentList.map(student => (
          <li key={student.id}>
            <strong>{student.name}</strong> - Grade: {student.grade}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
