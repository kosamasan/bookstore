import React from 'react';
import './Filtering.css';

const FilteringYear = (props) => {
  let years = [];
  props.books.map((book) => {
    return years.push(new Date(book.published).getFullYear());
  })
  // we reasure unique values in the array
  years = [...new Set(years)];
  years.sort();
  return (
    <div className="dropdown">
      <button className="btn btn-default">Filter by Year ... </button>
      <div className="dropdown-content">
        {years.map((year) =>
          <p key={year} className='authFilter' onClick={() => {props.yearFilter(year)}}>
            {year}
          </p>
        )}
      </div>
    </div>
  )
}

export default FilteringYear;