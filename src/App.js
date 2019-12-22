import React, { Component }  from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actionCreators from './store/actions';
import SearchBook from './containers/SearchBook';
import CreateBook from './containers/CreateBook';
import Book from './containers/Book/Book';
import Spinner from './components/Spinner/Spinner';
import './App.css';

class App extends Component {
  state = {
    loading: false,
    error: false
  }

  componentDidMount () {
    this.getBooksFromServer();
  }

  getBooksFromServer = () => {
    let books = [];
    // turn Spinner on
    this.setState({ loading: true });
    // request to get the data from server
    axios.get('https://gist.githubusercontent.com/nanotaboada/6396437/raw/82dca67cc3b6a5ccfcf8af012664cdaa0025d999/books.json#')
    .then( response => {
      let returnedBooks = JSON.parse(response.data.replace('"You Don’t Know JS"', '`You Don’t Know JS`'));
      returnedBooks.books.map((book) => {
        if(!book.hasOwnProperty('isbn13')) {
          book.isbn13 = 'N/A';
        }
        if(!book.hasOwnProperty('category')) {
          book.category = 'N/A';
        }
        book.image = 'http://covers.openlibrary.org/b/isbn/'+book.isbn+'-M.jpg';
        book.imageLarge = 'http://covers.openlibrary.org/b/isbn/'+book.isbn+'-L.jpg';
        return books.push(book);
      })
      // turn the Spinner off
      this.setState({loading: false});
      // books from server to redux store
      this.props.setBooksAll(books);
      this.props.setBooksFiltered(books);
    } )
    .catch( error => {
      this.setState({ error: true })
      console.log( error );
    } );
  }

  render () {
    // template for navbar or loader or error message
    let output = 
    <BrowserRouter>
      <div className="App">
        <header>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <NavLink
                  to="/"
                  activeClassName="navbar-brand"
                  >BookStore
                </NavLink>
              </div>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <NavLink
                    to="/"
                    exact
                    activeClassName="my-active"
                    activeStyle={{
                        color: '#ffffff',
                        backgroundColor: '#0095b0',
                        textDecoration: 'none',
                        borderRadius: '10px'
                    }}><span className="glyphicon glyphicon-book"></span> Our Books
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/create-book/"
                    exact
                    activeClassName="my-active"
                    activeStyle={{
                        color: '#ffffff',
                        backgroundColor: '#0095b0',
                        textDecoration: 'none',
                        borderRadius: '10px'
                    }}><span className="glyphicon glyphicon-plus"></span> Create Book
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div className="container">
          <Switch>
            <Route path="/" exact component={SearchBook} />
            <Route path="/create-book" component={CreateBook} />
            <Route path="/single-book" component={Book} />
          </Switch>
          <Redirect to="/" />
        </div>
          <div className="footer">
            &#169; BookStore
          </div>
      </div>
    </BrowserRouter>;
    if (this.state.loading) {
      output = <Spinner />
    }
    if (this.state.error) {
      output = <div className='alert alert-danger'>There was an error. Please try later</div>
    }
    return (
      <div>{output}</div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setBooksAll: (val) => dispatch(actionCreators.booksAll(val)),
    setBooksFiltered: (val) => dispatch(actionCreators.booksFiltered(val))
  };
};

export default connect(null, mapDispatchToProps)(App);