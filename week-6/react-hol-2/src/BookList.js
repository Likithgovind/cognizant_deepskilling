import React from 'react';
import Book from './Book';

const books = [
  { id: 1, title: 'The Alchemist', author: 'Paulo Coelho' },
  { id: 2, title: 'Clean Code', author: 'Robert C. Martin' },
  { id: 3, title: 'The Pragmatic Programmer', author: 'Andy Hunt' }
];

function BookList() {
  return (
    <div>
      {books.map(book => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
    </div>
  );
}

export default BookList;
