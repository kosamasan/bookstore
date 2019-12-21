import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reducer from './store/reducer';
import * as serviceWorker from './serviceWorker';

// use the chrome extension for redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// setup store
const store = createStore(reducer, composeEnhancers());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
