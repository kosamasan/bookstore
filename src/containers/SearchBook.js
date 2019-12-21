import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions';
import FilteringAuthor from '../components/Filtering/FilteringAuthor';
import FilteringPublisher from '../components/Filtering/FilteringPublisher';
import FilteringYear from '../components/Filtering/FilteringYear';
import Search from '../components/Search/Search';
import BookList from '../components/BookList/BookList';

class SearchBook extends Component {
  state = {
    filters: false,
  }

  searchBooks =(event)=> {
    let updatedList = [...this.props.books];
    updatedList = updatedList.filter((item)=>{
      return item.title.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.props.setBooksFiltered(updatedList);
  }

  authorFilter = (author) => {
    this.setState({ filters: true });
    let filteredArray = this.props.booksFiltered.filter(item => item.author === author);
    this.props.setBooksFiltered(filteredArray);
  }

  publisherFilter = (publisher) => {
    this.setState({ filters: true });
    let filteredArray = this.props.booksFiltered.filter(item => item.publisher === publisher);
    this.props.setBooksFiltered(filteredArray);
  }

  yearFilter = (year) => {
    this.setState({ filters: true, loading: false });
    let filteredArray = this.props.booksFiltered.filter(item => new Date(item.published).getFullYear() === year);
    this.props.setBooksFiltered(filteredArray);
  }

  bookSelection = (book) => {
    this.props.selectBook(book)
  }

  removeFilters = () => {
    this.setState({ filters: false });
    this.props.setBooksFiltered(this.props.books);
  }

  render () {
    let output = 
    <div>
      <div className="searchArea">
        <div>
          <h1 className='title'>Search to find your new book</h1>
        </div>
        <div className='row'>
          <Search searchBooks={this.searchBooks} />
        </div>
        <div className='row'>
          <div className="col-md-2 col-md-offset-2">
            <FilteringAuthor authorFilter={this.authorFilter} books={this.props.booksFiltered}/>
          </div>
          <div className="col-md-2">
            <FilteringPublisher publisherFilter={this.publisherFilter} books={this.props.booksFiltered}/>
          </div>
          <div className="col-md-2">
            <FilteringYear yearFilter={this.yearFilter} books={this.props.booksFiltered}/>
          </div>
          {this.state.filters &&
          <div className="col-md-2">
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
    details: state.selectedBook,
    books: state.books,
    booksFiltered: state.booksFiltered
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectBook: (val) => dispatch(actionCreators.selectBook(val)),
    initialBooks: (val) => dispatch(actionCreators.initialBooks(val)),
    setBooksFiltered: (val) => dispatch(actionCreators.booksFiltered(val))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBook);