import { shallow, ShallowWrapper } from "enzyme";

import MainSidebar, { IMainSidebarProps } from "..";
import { findByTestAttr } from "test/testUtils";
import { SIDEBAR_ITEMS } from "components/Sidebar/constants";

const setUp = (props?: IMainSidebarProps): ShallowWrapper => {
  const wrapper = shallow(<MainSidebar {...props} />)
  return wrapper;
}

describe("<MainSidebar /> rendering", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = setUp();
  })

  test("renders sidebar without errors", () => {
    const mainSidebar = findByTestAttr(wrapper, "main-sidebar");
    expect(mainSidebar.length).toBe(1);
  });

  test("renders list menu without errors", () => {
    const listMenu = findByTestAttr(wrapper, "list-menu");
    expect(listMenu.length).toBe(1);
  });

  test("renders logo without errors", () => {
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

  test("renders correctly list menu item length", () => {
    const listMenu = findByTestAttr(wrapper, "list-menu");
    expect(listMenu.children().length).toBe(SIDEBAR_ITEMS.length);
  });
})

