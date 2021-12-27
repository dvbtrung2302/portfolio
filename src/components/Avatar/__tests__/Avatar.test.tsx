import { shallow, ShallowWrapper } from "enzyme";

import { findByTestAttr } from "test/testUtils";
import Avatar, { IAvatarProps } from "..";

const setUp = (props?: IAvatarProps): ShallowWrapper => {
  const wrapper = shallow(<Avatar {...props} />)
  return wrapper;
}

test("renders without errors", () => {
  const wrapper: ShallowWrapper = setUp();
  const avatar = findByTestAttr(wrapper, "avatar");
  expect(avatar.length).toBe(1);
});

