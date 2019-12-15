import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import SearchBook from './containers/SearchBook';
import CreateBook from './containers/CreateBook';
import Book from './containers/Book';
import './App.css';

function App() {
  return (
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
                <li>
                  <NavLink
                    to="/single-book/"
                    exact
                    activeClassName="my-active"
                    activeStyle={{
                        color: '#ffffff',
                        backgroundColor: '#0095b0',
                        textDecoration: 'none',
                        borderRadius: '10px'
                    }}><span className="glyphicon glyphicon-plus-sign"></span> Book
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div className="container-fluid">
          <Switch>
            <Route path="/" exact component={SearchBook} />
            <Route path="/create-book" component={CreateBook} />
            <Route path="/single-book" component={Book} />
            <Redirect to="/" />
          </Switch>
        </div>
          <div className="footer">
            &#169; BookStore
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
