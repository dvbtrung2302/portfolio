import { shallow, ShallowWrapper } from "enzyme";

import { findByTestAttr } from "test/testUtils";
import Sidebar, { ISidebarProps } from "..";

const setUp = (props?: ISidebarProps): ShallowWrapper => {
  const wrapper = shallow(<Sidebar {...props} />)
  return wrapper;
}

test("render <Sidebar /> without errros", () => {
  const wrapper: ShallowWrapper = setUp();
  const sidebar = findByTestAttr(wrapper, "sidebar");
    expect(sidebar.length).toBe(1);
})