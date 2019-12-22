import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilteringYear from './FilteringYear';

configure({adapter: new Adapter()});

describe('FilteringYear', () => {
  it('should render the authFilter class', () => {
    const wrapper = shallow(<FilteringYear books={[{
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
    }]}/>);
    expect(wrapper.find('.authFilter')).toHaveLength(1);
  });
});

describe('FilteringYear', () => {
  it('should render the year correctly', () => {
    const wrapper = shallow(<FilteringYear books={[{
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
    }]}/>);
    expect(wrapper.contains(2014)).toEqual(true);
  });
});