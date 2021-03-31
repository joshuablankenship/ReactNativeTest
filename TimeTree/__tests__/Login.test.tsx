import {shallow, ShallowWrapper} from 'enzyme';
import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
const createTestProps = (props: any) => ({
  navigation: {
    navigate: jest.fn(),
  },
  closeLoginSheet: jest.fn(),
  ...props,
});
jest.mock('react-native-splash-screen', () => {
  return {
    hide: jest.fn(),
    show: jest.fn(),
  };
});
describe('Test Login Screen', () => {
  let wrapper: ShallowWrapper;
  let props: any;
  wrapper = shallow(<Login {...props} />);
  props = createTestProps({
    navigate: () => {},
    closeLoginSheet: () => {},
  });
  it('It should match initial snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('It should display three touchable opacity components', () => {
    expect(wrapper.find(TouchableOpacity).length).toEqual(2);
  });
  it('It should display one logo image', () => {
    expect(wrapper.find(Image).length).toEqual(1);
  });
  it('It should contain one sign up view', () => {
    expect(wrapper.find(Signup).length).toEqual(1);
  });
});
