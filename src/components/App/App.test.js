import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'

it('should create a boilerplate of the app', () => {
  const wrapper = shallow(<App />)

  expect(wrapper).toMatchSnapshot();
})
