import { shallow, ShallowWrapper } from "enzyme";

import { findByTestAttr } from "test/testUtils";
import SidebarItem, { ISidebarItemProps } from "..";
import { SIDEBAR_ITEMS } from "components/Sidebar/constants";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/testroute"
  })
}));

const setUp = (props: ISidebarItemProps): ShallowWrapper => {
  const wrapper = shallow(<SidebarItem {...props} />)
  return wrapper;
}

describe("SidebarItem", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = setUp(SIDEBAR_ITEMS[0]);
  })

  test("renders without errors", () => {
    const sidebarItem = findByTestAttr(wrapper, "sidebar-item");
    expect(sidebarItem.length).toBe(1);
  });
  test("renders sidebar item icon without errors", () => {
    const sidebarItemIcon = findByTestAttr(wrapper, "sidebar-item-icon");
    expect(sidebarItemIcon.length).toBe(1);
  })
  test("renders sidebar item name without errors", () => {
    const sidebarItemName = findByTestAttr(wrapper, "sidebar-item-name");
    expect(sidebarItemName.length).toBe(1);
  })
})
