import React from 'react';

function Book(props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h2>{props.title}</h2>
      <p><strong>Author:</strong> {props.author}</p>
    </div>
  );
}

export default Book;
