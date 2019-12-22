import React from 'react';

const Search = (props) => {
  return (
    <div className="col-xs-10 col-xs-offset-1 ">
      <div className="filter-list">
        <form onSubmit={(e)=>{e.preventDefault()}}>
          <fieldset className="form-group">
              <input type="text" className="form-control form-control-lg" placeholder={props.placeholder} onChange={props.searchBooks}/>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Search;