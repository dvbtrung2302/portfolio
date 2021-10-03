import { shallow, ShallowWrapper } from "enzyme";

import { findByTestAttr } from "test/testUtils";
import Sidebar, { ISidebarProps } from "..";
import { SIDEBAR_ITEMS } from "../constants";

const setUp = (props?: ISidebarProps): ShallowWrapper => {
  const wrapper = shallow(<Sidebar {...props} />)
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

test("renders correct logo with theme mode", () => {
  const props = {
    mode: "dark"
  }
  const wrapper: ShallowWrapper = setUp(props);
  const logoImage = findByTestAttr(wrapper, "logo-image");
  const expectedSrc = `/images/${props.mode}-logo.svg`;
  expect(logoImage.prop("src")).toBe(expectedSrc);
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
