export const INITIAL_BOOKS = 'INITIAL_BOOKS';
export const BOOKS_FILTERED = 'BOOKS_FILTERED';
export const SELECT_BOOK = 'SELECT_BOOK';

export const initialBooks = (value) => {
  return {
      type: INITIAL_BOOKS,
      val: value
  };
};

export const booksFiltered = (value) => {
  return {
      type: BOOKS_FILTERED,
      val: value
  };
};

export const selectBook = (value) => {
  return {
      type: SELECT_BOOK,
      val: value
  };
};
