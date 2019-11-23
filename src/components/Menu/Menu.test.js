import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import { shallow } from 'enzyme';

describe('Menu', () => {
  it('should render a boilerplate of the UI', () => {
    const mockState = { news: 'MockNews' };
    const changeCategoryMock = jest.fn()


    const wrapper = shallow(<Menu
      currentCategory={mockState}
      changeCategory={changeCategoryMock}
      local={'local'}
      entertainment={'entertainment'}
      health={'health'}
      science={'science'}
      technology={'technology'}
    />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should call the changeCategory prop when buttons are clicked', () => {
    const mockState = { news: 'MockNews' };
    const changeCategoryMock = jest.fn()


    const wrapper = shallow(<Menu
      currentCategory={mockState}
      changeCategory={changeCategoryMock}
      local={'local'}
      entertainment={'entertainment'}
      health={'health'}
      science={'science'}
      technology={'technology'}
    />)

    wrapper.find('.local').simulate('click');
    expect(changeCategoryMock).toHaveBeenCalledWith('local')
  })
})