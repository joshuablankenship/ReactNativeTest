import {shallow, ShallowWrapper} from 'enzyme';
import React from 'react';
import {Image, Switch, TouchableOpacity} from 'react-native';
import CreateProfile from '../containers/CreateProfile';
const createTestProps = (props: any) => ({
  navigation: {
    navigate: jest.fn(),
  },
  closeLoginSheet: jest.fn(),
  ...props,
});
describe('Test Create Profile Screen', () => {
  let wrapper: ShallowWrapper;
  let props: any;
  wrapper = shallow(<CreateProfile {...props} />);
  props = createTestProps({
    navigate: () => {},
    closeLoginSheet: () => {},
  });
  it('It should match initial snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('It should display three touchable opacity components', () => {
    expect(wrapper.find(TouchableOpacity).length).toEqual(1);
  });
  it('It should display one profile image', () => {
    expect(wrapper.find(Image).length).toEqual(1);
  });
  it('It should contain one Switch', () => {
    expect(wrapper.find(Switch).length).toEqual(1);
  });
});
