import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from './Search';

configure({adapter: new Adapter()});

describe('Search', () => {
  it('should render the search input', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find('input')).toHaveLength(1);
  });
});

describe('Search', () => {
  it('should render the input with the placeholder correctly', () => {
    const wrapper = shallow(<Search  placeholder='hello'/>);
    expect(wrapper.contains(<input type="text" className="form-control form-control-lg" placeholder='hello'/>)).toEqual(true);
  });
});