import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions';

class SearchBook extends Component {
  state = {
    loading: true
  }

  componentDidMount () {
    let books = [];
    axios.get('https://gist.githubusercontent.com/nanotaboada/6396437/raw/82dca67cc3b6a5ccfcf8af012664cdaa0025d999/books.json#')
    .then( response => {
      let returnedBooks = JSON.parse(response.data.replace('"You Don’t Know JS"', '`You Don’t Know JS`'));
      console.log(returnedBooks.books)
      returnedBooks.books.map((book) => {
        return books.push(book)   
      })
      console.log(books)
      this.setState({loading:false});
      this.props.initialBooks(books);
      this.props.setBooksFiltered(books);
    } )
    .catch( error => {
      console.log( error );
    } );
  }

  render () {
    let output = <div>
      
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