import {shallow, ShallowWrapper} from 'enzyme';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Bottom from '../containers/Bottom';
import Signup from '../containers/Signup';
const createTestProps = (props: any) => ({
  navigation: {
    navigate: jest.fn(),
  },
  closeLoginSheet: jest.fn(),
  ...props,
});
describe('Test Bottom Screen', () => {
  let wrapper: ShallowWrapper;
  let props: any;
  wrapper = shallow(<Bottom {...props} />);
  props = createTestProps({
    navigate: () => {},
    closeLoginSheet: () => {},
  });
  it('It should match initial snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('It should display three touchable opacity components', () => {
    expect(wrapper.find(TouchableOpacity).length).toEqual(3);
  });
  it('It should contain one sign up view', () => {
    expect(wrapper.find(Signup).length).toEqual(1);
  });
});
