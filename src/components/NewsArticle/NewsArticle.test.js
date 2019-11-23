import React from 'react';
import ReactDOM from 'react-dom';
import NewsArticle from './NewsArticle';
import { shallow } from 'enzyme';


it('should correctly match the snapshot', () => {
  const wrapper = shallow(<NewsArticle 
    headline='hello world'
    img='image'
    description='this is a description'
    url='www.url.com'
  />)

  expect(wrapper).toMatchSnapshot();
})

