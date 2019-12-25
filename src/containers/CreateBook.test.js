import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CreateBook } from './CreateBook';
import Spinner from '../components/Spinner/Spinner';

configure({adapter: new Adapter()});

describe('CreateBook', () => {
  it('should render the components content', () => {
    const wrapper = shallow(<CreateBook />);
    expect(wrapper.contains('Create new book')).toEqual(true);
  });
});

describe('CreateBook', () => {
  it('should render Spinner component if loading local state is true', () => {
    const wrapper = shallow(<CreateBook />);
    wrapper.setState({loading: true});
    expect(wrapper.contains(<Spinner />)).toEqual(true);
  });
});