import { shallow, ShallowWrapper } from "enzyme";

import { findByTestAttr } from "test/testUtils";
import Demo from "..";

const setUp = (): ShallowWrapper => {
  const wrapper = shallow(<Demo />)
  return wrapper;
}

test("renders without errors", () => {
  const wrapper: ShallowWrapper = setUp();
  const demoComponent = findByTestAttr(wrapper, "demo-component");
  expect(demoComponent.length).toBe(1);
});
