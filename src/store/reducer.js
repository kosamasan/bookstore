import * as actionTypes from './actions';

const initialState = {
  booksAll: [],
  booksFiltered: [],
  bookSelected: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BOOKS_ALL:
      return {
      ...state,
      booksAll: action.val
    }
    case actionTypes.BOOKS_FILTERED:
      return {
      ...state,
      booksFiltered: action.val
    }
    case actionTypes.BOOK_SELECTED:
      return {
      ...state,
      bookSelected: action.val
    }
    default:
      return state;
  }
} 

export default reducer;