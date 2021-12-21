import { shallow, ShallowWrapper } from "enzyme";

import { findByTestAttr } from "test/testUtils";
import MobileSidebar, { ISMobileSidebarProps } from "..";

const setUp = (props?: ISMobileSidebarProps): ShallowWrapper => {
  const wrapper = shallow(<MobileSidebar {...props} />)
  return wrapper;
}

describe("<MobileSidebar /> rendering", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = setUp();
  })

  test("renders mobile sidebar without errors", () => {
    const mobileSidebar = findByTestAttr(wrapper, "mobile-sidebar");
    expect(mobileSidebar.length).toBe(1);
  });

  test("render header without errors", () => {
    const mobileSidebarHeader = findByTestAttr(wrapper, "mobile-sidebar-header");
    expect(mobileSidebarHeader.length).toBe(1)
  })

  test("render burger button without errors", () => {
    const burgerButton = findByTestAttr(wrapper, "burger-button");
    expect(burgerButton.length).toBe(1);
  });

  test("render overlay without errros", () => {
    const overlay = findByTestAttr(wrapper, "mobile-sidebar-overlay");
    expect(overlay.length).toBe(1)
  })

  test("render main sidebar without errros", () => {
    const mainSidebar = findByTestAttr(wrapper, "mobile-main-sidebar");
    expect(mainSidebar.length).toBe(1)
  })
})

describe("<MobileSidebar /> interactions", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = setUp();
  })
  test("update Burger Button when clicked", () => {
    const burgerButton = findByTestAttr(wrapper, "burger-button");
    burgerButton.simulate("click");

    const updatedBurgerButton = findByTestAttr(wrapper, "burger-button");
    const expectedClassName = "burger activeBurger";

    expect(updatedBurgerButton.prop("className")).toBe(expectedClassName);
  })

  test("update Overlay when clicked Burger Button", () => {
    const burgerButton = findByTestAttr(wrapper, "burger-button");
    burgerButton.simulate("click");

    const overlay = findByTestAttr(wrapper, "mobile-sidebar-overlay");
    const expectedClassName = "overlay activeOverlay";
    
    expect(overlay.prop("className")).toBe(expectedClassName);
  })

  test("update Overlay when clicked", () => {
    const burgerButton = findByTestAttr(wrapper, "burger-button");
    burgerButton.simulate("click");

    const overlay = findByTestAttr(wrapper, "mobile-sidebar-overlay");
    overlay.simulate("click");

    const updatedOverlay = findByTestAttr(wrapper, "mobile-sidebar-overlay");
    const expectedClassName = "overlay";
    
    expect(updatedOverlay.prop("className")).toBe(expectedClassName);
  })
  
  test("update Main Sidebar when clicked Burger Button", () => {
    const burgerButton = findByTestAttr(wrapper, "burger-button");
    burgerButton.simulate("click");

    const mainSidebar = findByTestAttr(wrapper, "mobile-main-sidebar");
    const expectedClassName = "mainSidebar activeMainSidebar";
    
    expect(mainSidebar.prop("className")).toBe(expectedClassName);
  })
})


