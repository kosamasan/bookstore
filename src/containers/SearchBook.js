import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions';
import FilteringAuthor from '../components/Filtering/FilteringAuthor';
import FilteringPublisher from '../components/Filtering/FilteringPublisher';
import FilteringYear from '../components/Filtering/FilteringYear';
import Search from '../components/Search/Search';
import BookList from '../components/BookList/BookList';

export class SearchBook extends Component {
  state = {
    filters: false,
  }

  // the search book function
  searchBooks =(event)=> {
    let updatedList = [...this.props.booksAll];
    // filter the existin list base to user input
    updatedList = updatedList.filter((item)=>{
      return item.title.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    // update state
    this.props.setBooksFiltered(updatedList);
  }

  // filter book list by author
  authorFilter = (author) => {
    // set filters local state to true to show remove filters button
    this.setState({ filters: true });
    let filteredArray = this.props.booksFiltered.filter(item => item.author === author);
    this.props.setBooksFiltered(filteredArray);
  }

  // filter book list by publisher
  publisherFilter = (publisher) => {
    // set filters local state to true to show remove filters button
    this.setState({ filters: true });
    let filteredArray = this.props.booksFiltered.filter(item => item.publisher === publisher);
    this.props.setBooksFiltered(filteredArray);
  }

  // filter book list by year
  yearFilter = (year) => {
    // set filters local state to true to show remove filters button
    this.setState({ filters: true });
    let filteredArray = this.props.booksFiltered.filter(item => new Date(item.published).getFullYear() === year);
    this.props.setBooksFiltered(filteredArray);
  }

  // update redux store on book selection
  bookSelection = (book) => {
    this.props.bookSelected(book)
  }

  // remove the filters used. Update the list to the initial
  removeFilters = () => {
    this.setState({ filters: false });
    this.props.setBooksFiltered(this.props.booksAll);
  }

  render () {
    let output = 
    <div>
      <div className="searchArea">
        <div>
          <h1 className='title'>Search to find your new book</h1>
        </div>
        <div className='row'>
          <Search searchBooks={this.searchBooks} placeholder='Type the title of the book to search' />
        </div>
        <div className='row'>
          <div className="col-xs-3 col-xs-offset-0 col-md-2 col-md-offset-2">
            <FilteringAuthor authorFilter={this.authorFilter} books={this.props.booksFiltered}/>
          </div>
          <div className="col-xs-3 col-md-2">
            <FilteringPublisher publisherFilter={this.publisherFilter} books={this.props.booksFiltered}/>
          </div>
          <div className="col-xs-3 col-md-2">
            <FilteringYear yearFilter={this.yearFilter} books={this.props.booksFiltered}/>
          </div>
          {this.state.filters &&
          <div className="col-xs-3 col-md-2">
            <button className='btn btn-danger' onClick={() => {this.removeFilters()}}> <span className="glyphicon glyphicon-remove"></span> Remove filters</button>
          </div>}
        </div>
      </div>
      <div className="row bookList">
        <BookList books={this.props.booksFiltered} bookSelection={this.bookSelection} title='Our Books'/>
      </div>
    </div>;

    return (
      <div>{output}</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    details: state.bookSelected,
    booksAll: state.booksAll,
    booksFiltered: state.booksFiltered
  };
};

const mapDispatchToProps = dispatch => {
  return {
    bookSelected: (val) => dispatch(actionCreators.bookSelected(val)),
    setBooksFiltered: (val) => dispatch(actionCreators.booksFiltered(val))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBook);