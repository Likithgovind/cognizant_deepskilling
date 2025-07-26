import React, { useState } from 'react';
import Student from './Student';

function StudentList() {
  const [students] = useState([
    { name: "John", age: 20, course: "React" },
    { name: "Emma", age: 22, course: "Angular" },
    { name: "Alex", age: 19, course: "Vue" }
  ]);

  return (
    <div>
      <h2>Student List</h2>
      {students.map((student, index) => (
        <Student
          key={index}
          name={student.name}
          age={student.age}
          course={student.course}
        />
      ))}
    </div>
  );
}

export default StudentList;
