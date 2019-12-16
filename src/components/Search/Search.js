import React from 'react';

const Search = (props) => {
  return (
    <div className="col-xs-9 col-xs-offset-1 ">
      <div className="filter-list">
        <form onSubmit={(e)=>{e.preventDefault()}}>
          <fieldset className="form-group">
              <input type="text" className="form-control form-control-lg" placeholder="Type to search" onChange={props.filterList}/>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Search;