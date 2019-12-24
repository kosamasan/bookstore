import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SearchBook} from './SearchBook';
import FilteringAuthor from '../components/Filtering/FilteringAuthor';
import FilteringPublisher from '../components/Filtering/FilteringPublisher';
import FilteringYear from '../components/Filtering/FilteringYear';
import Search from '../components/Search/Search';
import BookList from '../components/BookList/BookList';

configure({adapter: new Adapter()});

describe('SearchBook', () => {
  it('should render FilteringAuthor component', () => {
    const wrapper = shallow(<SearchBook />);
    expect(wrapper.find(FilteringAuthor)).toHaveLength(1);
  });
});

describe('SearchBook', () => {
  it('should render FilteringPublisher component', () => {
    const wrapper = shallow(<SearchBook />);
    expect(wrapper.find(FilteringPublisher)).toHaveLength(1);
  });
});

describe('SearchBook', () => {
  it('should render FilteringYear component', () => {
    const wrapper = shallow(<SearchBook />);
    expect(wrapper.find(FilteringYear)).toHaveLength(1);
  });
});

describe('SearchBook', () => {
  it('should render Search component', () => {
    const wrapper = shallow(<SearchBook />);
    expect(wrapper.find(Search)).toHaveLength(1);
  });
});

describe('SearchBook', () => {
  it('should render BookList component', () => {
    const wrapper = shallow(<SearchBook />);
    expect(wrapper.find(BookList)).toHaveLength(1);
  });
});

describe('SearchBook', () => {
  it('should render remove filters if the filters in local state is set to true', () => {
    const wrapper = shallow(<SearchBook />);
    wrapper.setState({filters: true});
    expect(wrapper.contains( <span className="glyphicon glyphicon-remove"></span>)).toEqual(true);
  });
});