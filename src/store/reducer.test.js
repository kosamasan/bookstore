import reducer from './reducer';

describe('reducer', () => {
  it('should return the initial state when no action is provided', () => {
    expect(reducer(undefined, {})).toEqual({
      booksAll: [],
      booksFiltered: [],
      bookSelected: {}
    });
  });
});

describe('reducer', () => {
  it('should store the initial books', () => {
    expect(reducer({
      booksAll: [],
      booksFiltered: [],
      bookSelected: {}
  },{
    type: 'BOOKS_ALL',
    val: [{
      isbn: '9781593275846',
      title: 'Eloquent JavaScript, Second Edition',
      subtitle: 'A Modern Introduction to Programming',
      author: 'Marijn Haverbeke',
      published: '2014-12-14T00:00:00.000Z',
      publisher: 'No Starch Press',
      pages: 472,
      description: 'JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.',
      website: 'http://eloquentjavascript.net/',
      isbn13: 'N/A',
      category: 'N/A',
      image: 'http://covers.openlibrary.org/b/isbn/9781593275846-M.jpg',
      imageLarge: 'http://covers.openlibrary.org/b/isbn/9781593275846-L.jpg'
    }]
  })).toEqual(
    {
      booksAll:[{
        isbn: '9781593275846',
        title: 'Eloquent JavaScript, Second Edition',
        subtitle: 'A Modern Introduction to Programming',
        author: 'Marijn Haverbeke',
        published: '2014-12-14T00:00:00.000Z',
        publisher: 'No Starch Press',
        pages: 472,
        description: 'JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.',
        website: 'http://eloquentjavascript.net/',
        isbn13: 'N/A',
        category: 'N/A',
        image: 'http://covers.openlibrary.org/b/isbn/9781593275846-M.jpg',
        imageLarge: 'http://covers.openlibrary.org/b/isbn/9781593275846-L.jpg'
      }],
      booksFiltered: [],
      bookSelected: {}
    }
    );
  });
});

describe('reducer', () => {
  it('should store the filtered books', () => {
    expect(reducer({
      booksAll: [],
      booksFiltered: [],
      bookSelected: {}
  },{
    type: 'BOOKS_FILTERED',
    val: [{
      isbn: '9781593275846',
      title: 'Eloquent JavaScript, Second Edition',
      subtitle: 'A Modern Introduction to Programming',
      author: 'Marijn Haverbeke',
      published: '2014-12-14T00:00:00.000Z',
      publisher: 'No Starch Press',
      pages: 472,
      description: 'JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.',
      website: 'http://eloquentjavascript.net/',
      isbn13: 'N/A',
      category: 'N/A',
      image: 'http://covers.openlibrary.org/b/isbn/9781593275846-M.jpg',
      imageLarge: 'http://covers.openlibrary.org/b/isbn/9781593275846-L.jpg'
    }]
  })).toEqual(
    {
      booksAll: [],
      booksFiltered: [{
        isbn: '9781593275846',
        title: 'Eloquent JavaScript, Second Edition',
        subtitle: 'A Modern Introduction to Programming',
        author: 'Marijn Haverbeke',
        published: '2014-12-14T00:00:00.000Z',
        publisher: 'No Starch Press',
        pages: 472,
        description: 'JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.',
        website: 'http://eloquentjavascript.net/',
        isbn13: 'N/A',
        category: 'N/A',
        image: 'http://covers.openlibrary.org/b/isbn/9781593275846-M.jpg',
        imageLarge: 'http://covers.openlibrary.org/b/isbn/9781593275846-L.jpg'
      }],
      bookSelected: {}
    }
    );
  });
});

describe('reducer', () => {
  it('should store the filtered books', () => {
    expect(reducer({
      booksAll: [],
      booksFiltered: [],
      bookSelected: {}
  },{
    type: 'BOOK_SELECTED',
    val: {
      isbn: '9781593275846',
      title: 'Eloquent JavaScript, Second Edition',
      subtitle: 'A Modern Introduction to Programming',
      author: 'Marijn Haverbeke',
      published: '2014-12-14T00:00:00.000Z',
      publisher: 'No Starch Press',
      pages: 472,
      description: 'JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.',
      website: 'http://eloquentjavascript.net/',
      isbn13: 'N/A',
      category: 'N/A',
      image: 'http://covers.openlibrary.org/b/isbn/9781593275846-M.jpg',
      imageLarge: 'http://covers.openlibrary.org/b/isbn/9781593275846-L.jpg'
    }
  })).toEqual(
    {
      booksAll: [],
      booksFiltered: [],
      bookSelected: {
        isbn: '9781593275846',
        title: 'Eloquent JavaScript, Second Edition',
        subtitle: 'A Modern Introduction to Programming',
        author: 'Marijn Haverbeke',
        published: '2014-12-14T00:00:00.000Z',
        publisher: 'No Starch Press',
        pages: 472,
        description: 'JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.',
        website: 'http://eloquentjavascript.net/',
        isbn13: 'N/A',
        category: 'N/A',
        image: 'http://covers.openlibrary.org/b/isbn/9781593275846-M.jpg',
        imageLarge: 'http://covers.openlibrary.org/b/isbn/9781593275846-L.jpg'
      }
    }
    );
  });
});