import { shallow, ShallowWrapper } from "enzyme";

import { findByTestAttr } from "test/testUtils";
import Sidebar from "..";
import { SIDEBAR_ITEMS } from "../constants";

const setUp = (): ShallowWrapper => {
  const wrapper = shallow(<Sidebar />)
  return wrapper;
}

test("renders without errors", () => {
  const wrapper: ShallowWrapper = setUp();
  const sidebar = findByTestAttr(wrapper, "sidebar");
  expect(sidebar.length).toBe(1);
});

test("renders logo without errors", () => {
  const wrapper: ShallowWrapper = setUp();
  const logoImage = findByTestAttr(wrapper, "logo-image");
  expect(logoImage.length).toBe(1);
});

test("renders list menu without errors", () => {
  const wrapper: ShallowWrapper = setUp();
  const listMenu = findByTestAttr(wrapper, "list-menu");
  expect(listMenu.length).toBe(1);
});

test("renders correctly list menu item length", () => {
  const wrapper: ShallowWrapper = setUp();
  const listMenu = findByTestAttr(wrapper, "list-menu");
  expect(listMenu.children().length).toBe(SIDEBAR_ITEMS.length);
});
