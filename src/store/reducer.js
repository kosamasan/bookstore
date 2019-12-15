import * as actionTypes from './actions';

const initialState = {
  books: [],
  booksFiltered: [],
  selectedBook: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INITIAL_BOOKS:
      return {
      ...state,
      books: action.val
    }
    case actionTypes.BOOKS_FILTERED:
      return {
      ...state,
      booksFiltered: action.val
    }
    case actionTypes.SELECT_BOOK:
      return {
      ...state,
      selectedBook: action.val
    }
    default:
      return state;
  }
} 

export default reducer;