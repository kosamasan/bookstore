import React from 'react';
import './BookList.css';

const BookList = (props) => {
  const books = props.books;
  console.log(books)
  return (
    // using destructuring
    <div className='bookList'>
      <div >
        <h2 className='title'>Our books</h2>
      </div>
        {books.map((book) =>
        <div key={book.isbn} className='book'>
            <div><img src={book.image} alt=""/></div>
            <div className='bookTitle' onClick={()=>{props.bookSelection(book)}}>{book.title}</div>
        </div>
        )}
    </div>
    
  )
}

export default BookList;
