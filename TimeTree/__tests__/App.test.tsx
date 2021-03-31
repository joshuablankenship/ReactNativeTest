import {NavigationContainer} from '@react-navigation/native';
import {shallow, ShallowWrapper} from 'enzyme';
import React from 'react';
import App from '../App';

describe('Test App', () => {
  let wrapper: ShallowWrapper;
  wrapper = shallow(<App />);
  it('It should match initial snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('It should contain one navigation container', () => {
    expect(wrapper.find(NavigationContainer).length).toEqual(1);
  });
});
