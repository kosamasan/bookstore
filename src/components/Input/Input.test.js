import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from './Input';

configure({adapter: new Adapter()});

describe('Input', () => {
  it('should render the control-label class', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find('.control-label')).toHaveLength(1);
  });
});

describe('Input', () => {
  it('should render the label passed correctly', () => {
    const wrapper = shallow(<Input label='title'/>);
    expect(wrapper.contains('title')).toEqual(true);
  });
});

describe('Input', () => {
  it('should render the alert-danger class', () => {
    const wrapper = shallow(<Input invalid='true' shouldValidate='true' touched='true'/>);
    expect(wrapper.find('.alert-danger')).toHaveLength(1);
  });
});

describe('Input', () => {
  it('should render the error message', () => {
    const wrapper = shallow(<Input invalid='true' shouldValidate='true' touched='true' errorMessage='error'/>);
    expect(wrapper.contains('error')).toEqual(true);
  });
});

describe('Input', () => {
  it('should render the correct error message', () => {
    const wrapper = shallow(<Input invalid='true' shouldValidate='true' touched='true' errorMessage='erro'/>);
    expect(wrapper.contains('error')).toEqual(false);
  });
});

describe('Input', () => {
  it('should render the invalid class', () => {
    const wrapper = shallow(<Input invalid='true' shouldValidate='true' touched='true'/>);
    expect(wrapper.find('.invalid')).toHaveLength(1);
  });
});