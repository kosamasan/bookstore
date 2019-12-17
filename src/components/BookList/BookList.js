import React from 'react';
import {Link} from 'react-router-dom';
import './BookList.css';

const BookList = (props) => {
  const books = props.books;
  
  return (
    // using destructuring
    <div className='bookList'>
      <div >
        <h2 className='title'>{props.title}</h2>
      </div>
        {books.map((book) =>
        <div key={book.isbn} className='book'>
          <Link to='/single-book' onClick={() => {props.bookSelection(book)}}>
            <div><img src={book.image} alt=""/></div>
            <div className='bookTitle'>{book.title}</div>
          </Link>  
        </div>
        )}
    </div>
    
  )
}

export default BookList;
