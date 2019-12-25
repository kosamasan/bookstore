import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {App} from './App';
import Spinner from './components/Spinner/Spinner';

configure({adapter: new Adapter()});

describe('App', () => {
  it('should render Spinner component if loading local state is set to true', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({loading: true});
    expect(wrapper.contains(<Spinner />)).toEqual(true);
  });
});

describe('App', () => {
  it('should render Error message when error locl state is set to true', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({error: true});
    expect(wrapper.contains(<div className='alert alert-danger'>There was an error. Please try later</div>)).toEqual(true);
  });
});
