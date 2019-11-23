import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should create a boilerplate of the app', () => {
    const wrapper = shallow( <App /> )

    expect(wrapper).toMatchSnapshot();
  })

  it('should update state when changeCategory is called', () => {
    const wrapper = shallow(<App />)

    wrapper.instance().changeCategory('state');
    expect(wrapper.state('news')).toEqual('state')
  })
})