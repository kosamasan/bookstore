export const BOOKS_ALL = 'BOOKS_ALL';
export const BOOKS_FILTERED = 'BOOKS_FILTERED';
export const BOOK_SELECTED = 'BOOK_SELECTED';

export const booksAll = (value) => {
  return {
      type: BOOKS_ALL,
      val: value
  };
};

export const booksFiltered = (value) => {
  return {
      type: BOOKS_FILTERED,
      val: value
  };
};

export const bookSelected = (value) => {
  return {
      type: BOOK_SELECTED,
      val: value
  };
};
