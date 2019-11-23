import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';

describe('NewsContainer', () => {
  it('should create a boilerplate of the container', () => {
    const mockArticles = [
    {
      headline: 'headline',
      img:'img',
      description: 'description',
      url: 'url'
    },
    {
      headline: 'headline1',
      img:'img1',
      description: 'description1',
      url: 'url1'
    },
    {
      headline: 'headline2',
      img:'img2',
      description: 'description2',
      url: 'url2'
    }
    ]

    const wrapper = shallow(<NewsContainer 
      articles={mockArticles}
    />)

    expect(wrapper).toMatchSnapshot()
  })
})