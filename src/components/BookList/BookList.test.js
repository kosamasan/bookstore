import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BookList from './BookList';

configure({adapter: new Adapter()});

describe('BookList', () => {
  it('should render booktitle class if a book is passed to BookList', () => {
    const wrapper = shallow(<BookList books={[{
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
    }]} title='title' bookSelection/>);
    expect(wrapper.find('.bookTitle')).toHaveLength(1);
  });
});

describe('BookList', () => {
  it('should render 2 items if 2 books are passed to BookList', () => {
    const wrapper = shallow(<BookList books={[{
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
    },
    {
      isbn: '9781449331818',
      title: 'Learning JavaScript Design Patterns',
      subtitle: 'A JavaScript and jQuery Developer\'s Guide',
      author: 'Addy Osmani',
      published: '2012-07-01T00:00:00.000Z',
      publisher: 'O\'Reilly Media',
      pages: 254,
      description: 'With Learning JavaScript Design Patterns, you\'ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.',
      website: 'http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/',
      isbn13: 'N/A',
      category: 'N/A',
      image: 'http://covers.openlibrary.org/b/isbn/9781449331818-M.jpg',
      imageLarge: 'http://covers.openlibrary.org/b/isbn/9781449331818-L.jpg'
    }]} title='title' bookSelection/>);
    expect(wrapper.find('.bookTitle')).toHaveLength(2);
  });
});

describe('BookList', () => {
  it('should render 8 divs if 2 books are passed to BookList', () => {
    const wrapper = shallow(<BookList books={[{
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
    },
    {
      isbn: '9781449331818',
      title: 'Learning JavaScript Design Patterns',
      subtitle: 'A JavaScript and jQuery Developer\'s Guide',
      author: 'Addy Osmani',
      published: '2012-07-01T00:00:00.000Z',
      publisher: 'O\'Reilly Media',
      pages: 254,
      description: 'With Learning JavaScript Design Patterns, you\'ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.',
      website: 'http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/',
      isbn13: 'N/A',
      category: 'N/A',
      image: 'http://covers.openlibrary.org/b/isbn/9781449331818-M.jpg',
      imageLarge: 'http://covers.openlibrary.org/b/isbn/9781449331818-L.jpg'
    }]} title='title' bookSelection/>);
    expect(wrapper.find('div')).toHaveLength(8);
  });
});