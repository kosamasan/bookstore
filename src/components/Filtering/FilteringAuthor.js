import React from 'react';
import './Filtering.css';

const FilteringAuthor = (props) => {
  console.log(props)
  let authors = [];
  props.books.map((book) => {
    return authors.push(book.author);
  })
  return (
    <div className="dropdown">
      <button className="btn btn-default">Filter by author ... </button>
      <div className="dropdown-content">
        {authors.map((author) =>
          <p key={author} className='authFilter' onClick={() => {props.authorFilter(author)}}>
            {author}
          </p>
        )}
      </div>
    </div>
  )
}

export default FilteringAuthor;