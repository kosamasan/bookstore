import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions';
import Sorting from '../components/Sorting/Sorting';
import Search from '../components/Search/Search';
import BookList from '../components/BookList/BookList';
import Spinner from '../components/Spinner/Spinner';

class SearchBook extends Component {
  state = {
    loading: false
  }

  componentDidMount () {
    let books = [];
    this.setState({loading: true});
    axios.get('https://gist.githubusercontent.com/nanotaboada/6396437/raw/82dca67cc3b6a5ccfcf8af012664cdaa0025d999/books.json#')
    .then( response => {
      let returnedBooks = JSON.parse(response.data.replace('"You Don’t Know JS"', '`You Don’t Know JS`'));
      returnedBooks.books.map((book) => {
        book.image = 'http://covers.openlibrary.org/b/isbn/'+book.isbn+'-M.jpg';
        book.imageLarge = 'http://covers.openlibrary.org/b/isbn/'+book.isbn+'-L.jpg';
        return books.push(book);
      })
      this.setState({loading: false});
      this.props.initialBooks(books);
      this.props.setBooksFiltered(books);
    } )
    .catch( error => {
      console.log( error );
    } );
  }

  filterList =(event)=> {
    let updatedList = [...this.props.books];
    updatedList = updatedList.filter((item)=>{
      return item.title.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.props.setBooksFiltered(updatedList);
  }

  sortBy = () => {

  }

  bookSelection = (book) => {
    this.props.selectBook(book)
  }

  render () {
    let output = 
    <div>
      <div className="searchArea">
        <div>
          <h1 className='title'>Search to find your new book</h1>
        </div>
        <div className='row'>
          <div>
            <Search filterList={this.filterList} />
            <Sorting sortBy={this.sortBy}/>
          </div>
        </div>
        
        <div className='row'></div>
      </div>
      
      <div className="row bookList">
        <BookList books={this.props.booksFiltered} bookSelection={this.bookSelection} title='Our Books'/>
      </div>
    </div>;
    if (this.state.loading) {
      output = <Spinner />
    }
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