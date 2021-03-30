// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {shallow, ShallowWrapper} from 'enzyme';
import React from 'react';
import Bottom from '../containers/Bottom';
// const SplashScreen = jest.mock('react-native-splash');
describe('Test Login Screen', () => {
  let wrapper: ShallowWrapper;
  it('It should match initial snapshot', () => {
    wrapper = shallow(<Bottom />);
    expect(wrapper).toMatchSnapshot();
  });
  //   // it('It should display Login with Google button', () => {
  //   //   props = createTestProps;
  //   //   wrapper = shallow(<Login {...props} />);
  //   //   expect(wrapper.find(TouchableOpacity).render().text()).toBe(
  //   //     ' Login with Google',
  //   //   );
  //   // });
  // });
  // it('renders correctly', () => {
  //   renderer.create(<Login />);
});
