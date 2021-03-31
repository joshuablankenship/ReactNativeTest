import {shallow, ShallowWrapper} from 'enzyme';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Signup from '../containers/Signup';
const createTestProps = (props: any) => ({
  navigation: {
    navigate: jest.fn(),
  },
  closeLoginSheet: jest.fn(),
  ...props,
});
describe('Test Signup Screen', () => {
  let wrapper: ShallowWrapper;
  let props: any;
  wrapper = shallow(<Signup {...props} />);
  props = createTestProps({
    navigate: () => {},
    closeLoginSheet: () => {},
  });
  it('It should match initial snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('It should display five touchable opacity components', () => {
    expect(wrapper.find(TouchableOpacity).length).toEqual(5);
  });
});
