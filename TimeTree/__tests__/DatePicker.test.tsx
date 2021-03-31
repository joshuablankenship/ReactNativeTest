import {shallow, ShallowWrapper} from 'enzyme';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import DatePicker from '../components/DatePicker';
import DateTimePicker from '@react-native-community/datetimepicker';
const createTestProps = (props: any) => ({
  navigation: {
    navigate: jest.fn(),
  },
  closeLoginSheet: jest.fn(),
  ...props,
});
describe('Test DatePicker Component', () => {
  let wrapper: ShallowWrapper;
  let props: any;
  wrapper = shallow(<DatePicker {...props} />);
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
  it('It should contain a DateTimePicker', () => {
    expect(wrapper.find(DateTimePicker).length).toEqual(1);
  });
});
