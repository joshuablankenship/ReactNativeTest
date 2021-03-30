import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// import 'jest-enzyme';

Enzyme.configure({ adapter: new Adapter() });
const originalConsoleError = console.error;
console.error = (message) => {
  if (message.startsWith('Warning:')) {
    return;
  }
  originalConsoleError(message);
};
