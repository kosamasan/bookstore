import React from 'react';
import './Filtering.css';

const FilteringPublisher = (props) => {
  let publishers = [];
  props.books.map((book) => {
    publishers.push(book.publisher);
  })
  // we reasure unique values in the array
  publishers = [...new Set(publishers)];
  return (
    <div className="dropdown">
      <button className="btn btn-default">Filter by bublisher ... </button>
      <div className="dropdown-content">
        {publishers.map((publisher) =>
          <p key={publisher} className='authFilter' onClick={() => {props.publisherFilter(publisher)}}>
            {publisher}
          </p>
        )}
      </div>
    </div>
  )
}

export default FilteringPublisher;