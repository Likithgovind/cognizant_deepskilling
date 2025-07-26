import React from 'react';

function Student(props) {
  return (
    <div style={{border: '1px solid #ccc', padding: '10px', margin: '10px'}}>
      <h3>{props.name}</h3>
      <p>Age: {props.age}</p>
      <p>Course: {props.course}</p>
    </div>
  );
}

export default Student;
